#!/usr/bin/env node
/**
 * Validate the dataset.
 *
 * The schema check is the cheap half. The half that matters is the sourcing
 * rule below: every quantitative claim must say where it came from and when it
 * was read. That is the only promise this dataset makes that a hand-written
 * roadmap does not, so it is enforced by CI rather than by good intentions.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
// The default ajv export is draft-07; the schema here is 2020-12.
import Ajv from 'ajv/dist/2020.js'
import addFormats from 'ajv-formats'
import { parse } from 'yaml'

const DATA_DIR = 'data/roadmaps'
/** A figure read more than this many months ago is reported, not trusted. */
const STALE_AFTER_MONTHS = 12
/** Query keys that turn a citation into a referral link. None may appear. */
const TRACKING_KEYS = ['tag', 'ref', 'utm_source', 'utm_medium', 'utm_campaign', 'aff', 'affiliate_id']

const ajv = addFormats(new Ajv({ allErrors: true, strict: false }))
const validate = ajv.compile(JSON.parse(readFileSync('schema/roadmap.schema.json', 'utf8')))

const files = readdirSync(DATA_DIR).filter((f) => f.endsWith('.yaml')).sort()
const errors = []
const warnings = []
const slugs = new Set()
const docs = []

const monthsSince = (iso) => {
  const then = new Date(iso)
  const now = new Date()
  return (now.getFullYear() - then.getFullYear()) * 12 + (now.getMonth() - then.getMonth())
}

for (const file of files) {
  const where = `${DATA_DIR}/${file}`
  let doc
  try {
    doc = parse(readFileSync(join(DATA_DIR, file), 'utf8'))
  } catch (err) {
    errors.push(`${where}: not valid YAML — ${err.message}`)
    continue
  }
  docs.push({ file, doc })
  slugs.add(doc.slug)

  if (!validate(doc)) {
    for (const e of validate.errors) errors.push(`${where}: ${e.instancePath || '/'} ${e.message}`)
  }

  if (`${doc.slug}.yaml` !== file) {
    errors.push(`${where}: filename does not match slug "${doc.slug}"`)
  }

  // Sourcing. Walk the whole document rather than the three known fields, so a
  // sourced value added somewhere new is covered without editing this script.
  const walk = (node, path) => {
    if (Array.isArray(node)) return node.forEach((n, i) => walk(n, `${path}[${i}]`))
    if (!node || typeof node !== 'object') return
    if ('value' in node && 'source' in node) {
      if (!node.source || String(node.source).trim().length < 3) {
        errors.push(`${where}: ${path} states "${node.value}" with no usable source`)
      }
      if (!node.retrievedAt) {
        errors.push(`${where}: ${path} has a source but no retrievedAt`)
      } else if (monthsSince(node.retrievedAt) > STALE_AFTER_MONTHS) {
        warnings.push(`${where}: ${path} was read ${monthsSince(node.retrievedAt)} months ago (${node.retrievedAt})`)
      }
    }
    for (const [k, v] of Object.entries(node)) walk(v, `${path}/${k}`)
  }
  walk(doc, '')

  // No referral links. This dataset is published by a company that sells
  // courses; the guard exists so that fact can never be quietly monetised here.
  const urls = []
  const collectUrls = (node) => {
    if (Array.isArray(node)) return node.forEach(collectUrls)
    if (!node || typeof node !== 'object') return
    for (const [k, v] of Object.entries(node)) {
      if (k === 'url' && typeof v === 'string') urls.push(v)
      else collectUrls(v)
    }
  }
  collectUrls(doc)
  for (const url of urls) {
    let parsed
    try {
      parsed = new URL(url)
    } catch {
      errors.push(`${where}: not a valid URL — ${url}`)
      continue
    }
    const found = TRACKING_KEYS.filter((k) => parsed.searchParams.has(k))
    if (found.length) errors.push(`${where}: tracking parameter(s) ${found.join(', ')} in ${url}`)
  }

  // Stage boundaries must land on real phases.
  for (const [i, stage] of (doc.stages ?? []).entries()) {
    if (stage.to > doc.phases.length || stage.from >= stage.to) {
      errors.push(`${where}: stages[${i}] "${stage.name}" spans ${stage.from}..${stage.to}, outside 0..${doc.phases.length}`)
    }
  }
}

// Cross-references resolve only once every file has been read.
for (const { file, doc } of docs) {
  for (const related of doc.relatedRoadmaps ?? []) {
    if (!slugs.has(related)) {
      errors.push(`${DATA_DIR}/${file}: relatedRoadmaps points at "${related}", which is not in this dataset`)
    }
  }
}

const figures = docs.reduce((n, { doc }) => n + 3 + (doc.totalDuration ? 1 : 0), 0)
console.log(`${docs.length} roadmaps, ${docs.reduce((n, { doc }) => n + doc.phases.length, 0)} phases, ${figures} sourced figures.`)
for (const w of warnings) console.log(`  stale: ${w}`)
for (const e of errors) console.error(`  error: ${e}`)

if (errors.length) {
  console.error(`\n${errors.length} error(s).`)
  process.exit(1)
}
console.log(warnings.length ? `\nOK, with ${warnings.length} stale figure(s) to re-read.` : '\nOK.')
