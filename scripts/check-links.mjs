#!/usr/bin/env node
/**
 * Ask every cited URL whether it is still there.
 *
 * Run on a schedule rather than on every push: a link that died overnight is
 * not a reason to fail somebody's pull request, and rate limits make this slow.
 * HEAD first because it is cheap, then GET — a fair number of sites answer 405
 * or 403 to HEAD and 200 to a real request.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { parse } from 'yaml'

const DATA_DIR = 'data/roadmaps'
const CONCURRENCY = 8
const TIMEOUT_MS = 15000
const UA = 'skillpilot-roadmaps-linkcheck/1.0 (+https://github.com/skillpilot/roadmaps)'

const urls = new Map()
for (const file of readdirSync(DATA_DIR).filter((f) => f.endsWith('.yaml'))) {
  const doc = parse(readFileSync(join(DATA_DIR, file), 'utf8'))
  const collect = (node) => {
    if (Array.isArray(node)) return node.forEach(collect)
    if (!node || typeof node !== 'object') return
    for (const [k, v] of Object.entries(node)) {
      if (k === 'url' && typeof v === 'string') {
        if (!urls.has(v)) urls.set(v, new Set())
        urls.get(v).add(file)
      } else collect(v)
    }
  }
  collect(doc)
}

const probe = async (url) => {
  for (const method of ['HEAD', 'GET']) {
    try {
      const res = await fetch(url, {
        method,
        redirect: 'follow',
        headers: { 'user-agent': UA },
        signal: AbortSignal.timeout(TIMEOUT_MS),
      })
      if (res.ok) return { ok: true, status: res.status }
      if (method === 'GET') return { ok: false, status: res.status }
    } catch (err) {
      if (method === 'GET') return { ok: false, status: err.name === 'TimeoutError' ? 'timeout' : err.message }
    }
  }
  return { ok: false, status: 'unreachable' }
}

const entries = [...urls.entries()]
const dead = []
let done = 0

await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (entries.length) {
      const [url, files] = entries.shift()
      const { ok, status } = await probe(url)
      done++
      if (!ok) dead.push({ url, status, files: [...files] })
    }
  })
)

console.log(`checked ${done} unique URLs`)
for (const d of dead.sort((a, b) => a.url.localeCompare(b.url))) {
  console.error(`  ${d.status}  ${d.url}\n         cited by: ${d.files.join(', ')}`)
}

if (dead.length) {
  console.error(`\n${dead.length} link(s) need attention.`)
  process.exit(1)
}
console.log('\nevery cited link answered.')
