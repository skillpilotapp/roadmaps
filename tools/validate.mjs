#!/usr/bin/env node
/**
 * Validate the dataset.
 *
 * The schema check is the cheap half. The half that matters is the sourcing
 * rule: every quantitative claim must say where it came from and when it was
 * read. That is the only promise this dataset makes which a hand-written
 * roadmap does not, so it is enforced by CI rather than by good intentions.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
// The default ajv export is draft-07; the schemas here are 2020-12.
import Ajv from 'ajv/dist/2020.js'
import addFormats from 'ajv-formats'
import { parse } from 'yaml'

/** Repo root, resolved from this file rather than the working directory. */
const ROOT = fileURLToPath(new URL('..', import.meta.url))
/** A figure read more than this many months ago is reported, not trusted. */
const STALE_AFTER_MONTHS = 12
/** Query keys that turn a citation into a referral link. None may appear. */
const TRACKING_KEYS = ['tag', 'ref', 'utm_source', 'utm_medium', 'utm_campaign', 'aff', 'affiliate_id']

const SETS = [
  { kind: 'roadmap', dir: 'data/roadmaps', schema: 'schema/roadmap.schema.json' },
  { kind: 'certification', dir: 'data/certifications', schema: 'schema/certification.schema.json' },
]

const ajv = addFormats(new Ajv({ allErrors: true, strict: false }))
const errors = []
const warnings = []
/** kind → Set of slugs, so cross-references can be resolved after both loads. */
const slugs = { roadmap: new Set(), certification: new Set() }
const loaded = []

const monthsSince = (iso) => {
  const then = new Date(iso)
  const now = new Date()
  return (now.getFullYear() - then.getFullYear()) * 12 + (now.getMonth() - then.getMonth())
}

for (const set of SETS) {
  const validate = ajv.compile(JSON.parse(readFileSync(join(ROOT, set.schema), 'utf8')))
  for (const file of readdirSync(join(ROOT, set.dir)).filter((f) => f.endsWith('.yaml')).sort()) {
    const where = `${set.dir}/${file}`
    let doc
    try {
      doc = parse(readFileSync(join(ROOT, set.dir, file), 'utf8'))
    } catch (err) {
      errors.push(`${where}: not valid YAML — ${err.message}`)
      continue
    }
    loaded.push({ ...set, file, where, doc })
    slugs[set.kind].add(doc.slug)

    if (!validate(doc)) {
      for (const e of validate.errors) errors.push(`${where}: ${e.instancePath || '/'} ${e.message}`)
    }
    if (`${doc.slug}.yaml` !== file) errors.push(`${where}: filename does not match slug "${doc.slug}"`)

    // Sourcing. Walk the whole document rather than the known fields, so a
    // sourced value added somewhere new is covered without editing this script.
    const walk = (node, path) => {
      if (Array.isArray(node)) return node.forEach((n, i) => walk(n, `${path}[${i}]`))
      if (!node || typeof node !== 'object') return
      if ('value' in node && 'source' in node) {
        if (!node.source || String(node.source).trim().length < 3) {
          errors.push(`${where}: ${path} states "${node.value}" with no usable source`)
        }
        if (!node.retrievedAt) errors.push(`${where}: ${path} has a source but no retrievedAt`)
        else if (monthsSince(node.retrievedAt) > STALE_AFTER_MONTHS) {
          warnings.push(`${where}: ${path} was read ${monthsSince(node.retrievedAt)} months ago (${node.retrievedAt})`)
        }
      }
      for (const [k, v] of Object.entries(node)) walk(v, `${path}/${k}`)
    }
    walk(doc, '')

    // No referral links. This dataset is published by a company that sells
    // courses; the guard is what keeps that from being quietly monetised here.
    const urls = []
    const collect = (node) => {
      if (Array.isArray(node)) return node.forEach(collect)
      if (!node || typeof node !== 'object') return
      for (const [k, v] of Object.entries(node)) {
        if (k === 'url' && typeof v === 'string') urls.push(v)
        else collect(v)
      }
    }
    collect(doc)
    for (const url of urls) {
      let parsed
      try { parsed = new URL(url) } catch { errors.push(`${where}: not a valid URL — ${url}`); continue }
      const found = TRACKING_KEYS.filter((k) => parsed.searchParams.has(k))
      if (found.length) errors.push(`${where}: tracking parameter(s) ${found.join(', ')} in ${url}`)
    }

    if (set.kind === 'roadmap') {
      for (const [i, stage] of (doc.stages ?? []).entries()) {
        if (stage.to > doc.phases.length || stage.from >= stage.to) {
          errors.push(`${where}: stages[${i}] "${stage.name}" spans ${stage.from}..${stage.to}, outside 0..${doc.phases.length}`)
        }
      }
    }

    if (set.kind === 'certification') {
      // JSON Schema cannot express "these numbers add up", and a blueprint whose
      // weights do not sum to 100 is a transcription error, not a rounding one.
      const total = doc.domains.reduce((n, d) => n + d.weight, 0)
      if (total !== 100) errors.push(`${where}: domain weights sum to ${total}, not 100`)
    }
  }
}

// Cross-references resolve only once every file has been read. Both directions
// are checked: a roadmap naming a certification that is not here is as broken as
// the reverse, and before certifications were published neither could be.
const REFS = [
  { field: 'relatedRoadmaps', target: 'roadmap' },
  { field: 'relatedCertifications', target: 'certification' },
]
for (const { where, doc } of loaded) {
  for (const { field, target } of REFS) {
    for (const slug of doc[field] ?? []) {
      if (!slugs[target].has(slug)) {
        errors.push(`${where}: ${field} points at "${slug}", which is not in this dataset`)
      }
    }
  }
}

const roadmaps = loaded.filter((l) => l.kind === 'roadmap')
const certs = loaded.filter((l) => l.kind === 'certification')
const figures =
  roadmaps.reduce((n, { doc }) => n + 3 + (doc.totalDuration ? 1 : 0), 0) + certs.length
console.log(
  `${roadmaps.length} roadmaps (${roadmaps.reduce((n, { doc }) => n + doc.phases.length, 0)} phases), ` +
  `${certs.length} certifications (${certs.reduce((n, { doc }) => n + doc.domains.length, 0)} exam domains), ` +
  `${figures} sourced figures.`
)
for (const w of warnings) console.log(`  stale: ${w}`)
for (const e of errors) console.error(`  error: ${e}`)

if (errors.length) {
  console.error(`\n${errors.length} error(s).`)
  process.exit(1)
}
console.log(warnings.length ? `\nOK, with ${warnings.length} stale figure(s) to re-read.` : '\nOK.')
