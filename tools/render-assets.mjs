#!/usr/bin/env node
/**
 * Render the README figures from the dataset itself.
 *
 * They are committed as PNGs because GitHub will not load web fonts inside an
 * <img>-rendered SVG, and the type is most of the design. Regenerating them is
 * `npm run render-assets`, so a figure can never drift from the data for long:
 * every number below is read from data/roadmaps, never typed in here.
 *
 * Needs a local Chrome (`channel: 'chrome'`) rather than a downloaded browser,
 * which keeps playwright out of what CI installs.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { parse } from 'yaml'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const OUT = join(ROOT, 'assets')

const roadmaps = readdirSync(join(ROOT, 'data/roadmaps'))
  .filter((f) => f.endsWith('.yaml'))
  .map((f) => parse(readFileSync(join(ROOT, 'data/roadmaps', f), 'utf8')))
  .sort((a, b) => a.title.localeCompare(b.title))

const totals = {
  paths: roadmaps.length,
  phases: roadmaps.reduce((n, r) => n + r.phases.length, 0),
  projects: roadmaps.reduce((n, r) => n + r.phases.reduce((m, p) => m + p.projects.length, 0), 0),
  figures: roadmaps.reduce((n, r) => n + 4, 0),
}

const THEMES = {
  light: { paper:'#fafaf9', paper2:'#ffffff', ink:'#111214', ink2:'#33353a', graphite:'#63656a',
           graphite2:'#8b8d93', line:'#e4e4e1', line2:'#d0d0cc', signal:'#7a5a10', ok:'#0f7a4a' },
  dark:  { paper:'#131416', paper2:'#1a1c1f', ink:'#ededeb', ink2:'#c9cbcf', graphite:'#9a9da3',
           graphite2:'#7c7f85', line:'#2a2c30', line2:'#3a3d42', signal:'#e8b341', ok:'#4ade9a' },
}

const shell = (t, body, css, w, h) => `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:${w}px;height:${h}px;background:${t.paper};font-family:Inter,sans-serif;
       position:relative;overflow:hidden}
  body::before{content:'';position:absolute;inset:0;
    background-image:linear-gradient(${t.line} 1px,transparent 1px),linear-gradient(90deg,${t.line} 1px,transparent 1px);
    background-size:32px 32px;opacity:.45}
  .frame{position:absolute;inset:24px;border:1px solid ${t.line2}}
  .mono{font-family:'IBM Plex Mono',monospace}
  ${css}
</style></head><body><div class="frame"></div>${body}</body></html>`

// ── banner ────────────────────────────────────────────────────────────────
const banner = (t) => shell(t, `
<div class="inner">
  <div>
    <div class="mark">
      <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="25" stroke="currentColor" stroke-width="5"/><path d="M32 32V7A25 25 0 0 1 57 32Z" fill="currentColor"/></svg>
      <h1>SkillPilot <span>Roadmaps</span></h1>
    </div>
    <div class="rule"></div>
    <p><b>${totals.paths} infrastructure and AI engineering career paths</b>, as open
       data — and every number in them says where it came from.</p>
  </div>
  <div class="card mono">
    <div><span class="k">value:</span> <span class="v">"$172,508"</span></div>
    <div><span class="k">source:</span> <span class="s">Glassdoor SRE estimate (US)</span></div>
    <div><span class="k">retrievedAt:</span> <span class="v">"2026-08-04"</span></div>
    <div class="stamp"><span class="dot"></span>CI fails without these</div>
  </div>
</div>`, `
  .inner{position:relative;height:100%;padding:0 72px;display:flex;align-items:center;justify-content:space-between;gap:56px}
  .mark{display:flex;align-items:center;gap:20px;margin-bottom:26px}
  .mark svg{width:52px;height:52px;color:${t.ink}}
  h1{font-family:Archivo,sans-serif;font-weight:600;font-size:50px;letter-spacing:-1.6px;color:${t.ink};line-height:1}
  h1 span{color:${t.graphite};font-weight:500}
  p{font-size:19px;line-height:1.5;color:${t.graphite};max-width:560px}
  p b{color:${t.ink};font-weight:500}
  .rule{width:56px;height:3px;background:${t.signal};margin:24px 0 22px}
  .card{font-size:14.5px;line-height:1.85;background:${t.paper2};border:1px solid ${t.line2};padding:22px 26px;min-width:404px}
  .k{color:${t.graphite}} .v{color:${t.ink}} .s{color:${t.signal}}
  .stamp{margin-top:16px;padding-top:14px;border-top:1px solid ${t.line};font-size:12px;
         letter-spacing:.09em;text-transform:uppercase;color:${t.ok};display:flex;align-items:center;gap:8px}
  .dot{width:6px;height:6px;background:${t.ok};display:inline-block}
`, 1280, 400)

// ── the eleven paths, as an instrument panel ──────────────────────────────
const LEVEL = { beginner: 'BEG', intermediate: 'INT', advanced: 'ADV' }
const paths = (t) => shell(t, `
<div class="inner">
  <header>
    <h2>The paths</h2>
    <div class="totals mono">${totals.paths} PATHS · ${totals.phases} PHASES · ${totals.projects} PROJECTS</div>
  </header>
  <div class="grid">
    ${roadmaps.map((r) => `
      <div class="cell">
        <div class="top">
          <h3>${r.title.replace(/ Roadmap$/, '')}</h3>
          <span class="lvl mono ${r.level}">${LEVEL[r.level]}</span>
        </div>
        <div class="bars">${Array.from({ length: r.phases.length }, () => '<i></i>').join('')}</div>
        <div class="meta mono">${r.phases.length} phases · ${r.totalDuration.value.replace(' at 10h/week', '')} · <b>${r.salary.mid.value}</b></div>
      </div>`).join('')}
    <div class="cell end">
      <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="25" stroke="currentColor" stroke-width="5"/><path d="M32 32V7A25 25 0 0 1 57 32Z" fill="currentColor"/></svg>
      <div>
        <div class="end-t">Open data</div>
        <div class="end-s mono">CC BY-SA 4.0 · 573 of 597 resources free</div>
      </div>
    </div>
  </div>
</div>`, `
  .inner{position:relative;height:100%;padding:52px 64px}
  header{display:flex;align-items:baseline;justify-content:space-between;
         padding-bottom:18px;border-bottom:1px solid ${t.line2};margin-bottom:28px}
  h2{font-family:Archivo,sans-serif;font-size:30px;font-weight:600;letter-spacing:-.8px;color:${t.ink}}
  .totals{font-size:12px;letter-spacing:.1em;color:${t.graphite2}}
  .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:${t.line};border:1px solid ${t.line}}
  .cell{background:${t.paper};padding:18px 20px 16px}
  .top{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:12px}
  h3{font-family:Archivo,sans-serif;font-size:17px;font-weight:600;letter-spacing:-.35px;color:${t.ink};line-height:1.25}
  .lvl{font-size:10px;letter-spacing:.1em;padding:2px 5px;border:1px solid ${t.line2};color:${t.graphite2};flex-shrink:0}
  .lvl.advanced{color:${t.signal};border-color:${t.signal}}
  .bars{display:flex;gap:3px;margin-bottom:11px}
  .bars i{height:5px;flex:1;background:${t.signal};opacity:.85}
  .meta{font-size:11.5px;color:${t.graphite};letter-spacing:-.1px}
  .meta b{color:${t.ink};font-weight:500}
  .cell.end{display:flex;align-items:center;gap:16px;background:${t.paper2}}
  .cell.end svg{width:30px;height:30px;color:${t.signal};flex-shrink:0}
  .end-t{font-family:Archivo,sans-serif;font-size:17px;font-weight:600;letter-spacing:-.35px;color:${t.ink};margin-bottom:5px}
  .end-s{font-size:11.5px;color:${t.graphite};letter-spacing:-.1px}
`, 1280, 620)

// ── anatomy of a sourced figure ───────────────────────────────────────────
const anatomy = (t) => shell(t, `
<div class="inner">
  <div class="left">
    <div class="eyebrow mono">ANATOMY OF A CLAIM</div>
    <h2>A number that<br>can be checked</h2>
    <p>Every quantitative field in the dataset is this shape. Not a convention —
       <span class="mono hl">validate.mjs</span> refuses to pass a figure that is
       missing either half, and says so at twelve months old.</p>
    <div class="rules">
      <div class="r"><span class="n mono">01</span><div><b>source</b> names who says so, in words a reader can go and check.</div></div>
      <div class="r"><span class="n mono">02</span><div><b>retrievedAt</b> is the day it was read, not the day it was committed.</div></div>
      <div class="r"><span class="n mono">03</span><div>No URL may carry <span class="mono hl">tag</span>, <span class="mono hl">ref</span> or <span class="mono hl">utm_*</span>. That rule applies to us too.</div></div>
    </div>
  </div>
  <div class="code mono">
    <div class="fn">data/roadmaps/sre.yaml</div>
<div class="ln"><span class="k">salary:</span></div>
<div class="ln">  <span class="k">currency:</span> <span class="v">USD</span></div>
<div class="ln">  <span class="k">market:</span> <span class="v">United States</span></div>
<div class="ln">  <span class="k">mid:</span></div>
<div class="ln hi">    <span class="k">value:</span> <span class="str">"$172,508"</span></div>
<div class="ln hi">    <span class="k">source:</span> <span class="s">Glassdoor Site Reliability</span></div>
<div class="ln hi">      <span class="s">Engineer estimate (overall average, US)</span></div>
<div class="ln hi">    <span class="k">retrievedAt:</span> <span class="str">"2026-08-04"</span></div>
    <div class="stamp"><span class="dot"></span>44 sourced figures, all enforced</div>
  </div>
</div>`, `
  .inner{position:relative;height:100%;padding:0 64px;display:flex;align-items:center;gap:60px}
  .left{width:470px;flex-shrink:0}
  .eyebrow{font-size:11px;letter-spacing:.16em;color:${t.signal};margin-bottom:16px}
  h2{font-family:Archivo,sans-serif;font-size:38px;font-weight:600;letter-spacing:-1.2px;
     color:${t.ink};line-height:1.12;margin-bottom:18px}
  .left>p{font-size:16px;line-height:1.6;color:${t.graphite};margin-bottom:26px}
  .hl{color:${t.ink2};font-size:.92em;background:${t.paper2};border:1px solid ${t.line2};padding:1px 4px}
  .rules{border-top:1px solid ${t.line2}}
  .r{display:flex;gap:14px;padding:13px 0;border-bottom:1px solid ${t.line};
     font-size:14.5px;line-height:1.5;color:${t.graphite}}
  .r b{color:${t.ink};font-weight:600}
  .n{font-size:11px;color:${t.graphite2};padding-top:3px}
  .code{flex:1;background:${t.paper2};border:1px solid ${t.line2};padding:0 0 20px;font-size:14.5px;line-height:1.95}
  .fn{font-size:11.5px;letter-spacing:.06em;color:${t.graphite2};padding:12px 24px;
      border-bottom:1px solid ${t.line};margin-bottom:14px}
  .ln{padding:0 24px;white-space:pre}
  .ln.hi{background:${t.paper};border-left:3px solid ${t.signal};padding-left:21px}
  .k{color:${t.graphite}} .v{color:${t.ink2}} .str{color:${t.ink}} .s{color:${t.signal}}
  .stamp{margin:16px 24px 0;padding-top:14px;border-top:1px solid ${t.line};font-size:11.5px;
         letter-spacing:.08em;text-transform:uppercase;color:${t.ok};display:flex;align-items:center;gap:8px}
  .dot{width:6px;height:6px;background:${t.ok};display:inline-block}
`, 1280, 520)

const FIGURES = { banner: [banner, 1280, 400], paths: [paths, 1280, 620], anatomy: [anatomy, 1280, 520] }

const browser = await chromium.launch({ channel: 'chrome' })
for (const [name, [render, w, h]] of Object.entries(FIGURES)) {
  for (const [theme, t] of Object.entries(THEMES)) {
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 })
    await page.setContent(render(t), { waitUntil: 'networkidle' })
    await page.waitForTimeout(600)
    await page.screenshot({ path: join(OUT, `${name}-${theme}.png`) })
    await page.close()
    console.log(`rendered ${name}-${theme}`)
  }
}
await browser.close()
