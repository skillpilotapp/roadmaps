#!/usr/bin/env node
/**
 * Render a readable Markdown view of every roadmap.
 *
 * The YAML is the canonical form and stays that way — it is what a program
 * consumes. But a 44 KB YAML file is raw text on GitHub, so anyone who opens
 * the repository to *read* a roadmap finds a wall. These files are what a
 * person sees; they are generated, never edited, and CI fails if they drift
 * from the data (`--check`).
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from 'yaml'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const OUT = join(ROOT, 'roadmaps')
const CHECK = process.argv.includes('--check')

const LEVEL = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' }
const esc = (s) => String(s).replace(/\|/g, '\\|').replace(/\n+/g, ' ').trim()

const roadmaps = readdirSync(join(ROOT, 'data/roadmaps'))
  .filter((f) => f.endsWith('.yaml'))
  .map((f) => parse(readFileSync(join(ROOT, 'data/roadmaps', f), 'utf8')))
  .sort((a, b) => a.title.localeCompare(b.title))

const resourceLine = (r) => {
  const label = r.url ? `[${esc(r.title)}](${r.url})` : `**${esc(r.title)}**`
  const bits = [r.provider && esc(r.provider), r.type, r.free ? 'free' : 'paid'].filter(Boolean)
  const alt = r.freeAlternative ? ` — free alternative: [${esc(r.freeAlternative.title)}](${r.freeAlternative.url})` : ''
  return `- ${label} <sub>${bits.join(' · ')}</sub>${alt}`
}

const render = (r) => {
  const L = []
  L.push(`<!-- Generated from data/roadmaps/${r.slug}.yaml by tools/render-markdown.mjs. Do not edit. -->`)
  L.push('')
  L.push(`# ${r.title}`)
  L.push('')
  L.push(`> ${r.description}`)
  L.push('')
  L.push(`**${LEVEL[r.level]}** · **${r.phases.length} phases** · **${r.totalDuration.value}** · updated ${r.updatedAt}`)
  L.push('')
  L.push(r.overview)
  L.push('')

  L.push('## Pay')
  L.push('')
  L.push(`Estimates for the **${r.salary.market}** market, in ${r.salary.currency}. Read the`)
  L.push('[limits of this data](../README.md#honest-limits-of-the-salary-data) before quoting a figure at anyone.')
  L.push('')
  L.push('| Level | Estimate | Source | Read on |')
  L.push('|---|---|---|---|')
  for (const k of ['entry', 'mid', 'senior']) {
    const s = r.salary[k]
    L.push(`| ${k[0].toUpperCase() + k.slice(1)} | \`${s.value}\` | ${esc(s.source)} | ${s.retrievedAt} |`)
  }
  L.push('')
  L.push(`Total duration is **${r.totalDuration.value}** — <sub>${esc(r.totalDuration.source)}, ${r.totalDuration.retrievedAt}</sub>`)
  L.push('')

  if (r.prerequisites?.length) {
    L.push('## Before you start')
    L.push('')
    for (const p of r.prerequisites) L.push(`- ${p}`)
    L.push('')
  }

  L.push('## The path')
  L.push('')
  if (r.stages?.length) {
    const span = (s) => (s.to - s.from === 1 ? `phase ${s.to}` : `phases ${s.from + 1}–${s.to}`)
    L.push(r.stages.map((s) => `**${s.name}** <sub>${span(s)}</sub>`).join(' → '))
    L.push('')
  }
  L.push('| # | Phase | Duration |')
  L.push('|---:|---|---|')
  r.phases.forEach((p, i) => L.push(`| ${i + 1} | [${esc(p.title)}](#${i + 1}-${p.id}) | ${p.duration} |`))
  L.push('')
  L.push('---')
  L.push('')

  r.phases.forEach((p, i) => {
    L.push(`### <a id="${i + 1}-${p.id}"></a>${i + 1}. ${p.title}`)
    L.push('')
    L.push(`<sub>**${p.duration}**</sub>`)
    L.push('')
    L.push(p.description)
    L.push('')
    if (p.prerequisites?.length) {
      L.push('**Assumes:** ' + p.prerequisites.join('; '))
      L.push('')
    }
    L.push(`<b>Skills</b> — ${p.skills.map((s) => `\`${s.name}\``).join(' · ')}`)
    L.push('')
    L.push('<details><summary><b>Projects</b> — this is how the phase is judged done</summary>')
    L.push('')
    for (const pr of p.projects) L.push(`- ${pr}`)
    L.push('')
    L.push('</details>')
    L.push('')
    if (p.resources?.length) {
      const free = p.resources.filter((x) => x.free).length
      L.push(`<details><summary><b>Resources</b> — ${p.resources.length}, of which ${free} free</summary>`)
      L.push('')
      for (const res of p.resources) L.push(resourceLine(res))
      L.push('')
      L.push('</details>')
      L.push('')
    }
  })

  if (r.jobReality) {
    L.push('---')
    L.push('')
    L.push('## The job itself')
    L.push('')
    L.push('<sub>Editorial throughout — nothing here is a sourced figure.</sub>')
    L.push('')
    const titles = { dayToDay: 'Day to day', interview: 'What interviews ask',
                     entryPaths: 'How people get here', progression: 'After senior',
                     failureModes: 'Why people leave' }
    for (const [k, t] of Object.entries(titles)) {
      if (!r.jobReality[k]) continue
      L.push(`### ${t}`)
      L.push('')
      L.push(r.jobReality[k])
      L.push('')
    }
  }

  if (r.faq?.length) {
    L.push('## Questions')
    L.push('')
    for (const q of r.faq) {
      L.push(`<details><summary><b>${esc(q.question)}</b></summary><br>`)
      L.push('')
      L.push(q.answer)
      L.push('')
      L.push('</details>')
      L.push('')
    }
  }

  const rel = [...(r.relatedRoadmaps ?? [])].filter((s) => roadmaps.some((x) => x.slug === s))
  if (rel.length) {
    L.push('## Neighbouring paths')
    L.push('')
    L.push(rel.map((s) => `[${roadmaps.find((x) => x.slug === s).title.replace(/ Roadmap$/, '')}](${s}.md)`).join(' · '))
    L.push('')
  }

  L.push('---')
  L.push('')
  L.push(`<sub>Source of truth: [\`data/roadmaps/${r.slug}.yaml\`](../data/roadmaps/${r.slug}.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>`)
  L.push('')
  return L.join('\n')
}

const index = () => {
  const L = []
  L.push('<!-- Generated by tools/render-markdown.mjs. Do not edit. -->')
  L.push('')
  L.push('# The roadmaps, in readable form')
  L.push('')
  L.push('These pages are generated from [`data/roadmaps`](../data/roadmaps), which is')
  L.push('the source of truth. Read here, consume the YAML.')
  L.push('')
  L.push('| Path | Level | Phases | Duration | Mid-level |')
  L.push('|---|---|---:|---|---|')
  for (const r of roadmaps) {
    L.push(`| [${r.title.replace(/ Roadmap$/, '')}](${r.slug}.md) | ${LEVEL[r.level]} | ${r.phases.length} | ${r.totalDuration.value.replace(' at 10h/week', '')} | \`${r.salary.mid.value}\` |`)
  }
  L.push('')
  return L.join('\n')
}

mkdirSync(OUT, { recursive: true })
const files = { 'README.md': index(), ...Object.fromEntries(roadmaps.map((r) => [`${r.slug}.md`, render(r)])) }

let drifted = []
for (const [name, body] of Object.entries(files)) {
  const path = join(OUT, name)
  if (CHECK) {
    let current = null
    try { current = readFileSync(path, 'utf8') } catch { /* missing counts as drift */ }
    if (current !== body) drifted.push(name)
  } else {
    writeFileSync(path, body)
  }
}

if (CHECK) {
  if (drifted.length) {
    console.error(`${drifted.length} generated file(s) do not match the data: ${drifted.join(', ')}`)
    console.error('Run `npm run render-markdown` and commit the result.')
    process.exit(1)
  }
  console.log(`${Object.keys(files).length} generated files match the data.`)
} else {
  console.log(`wrote ${Object.keys(files).length} files to roadmaps/`)
}
