# Contributing

## The one rule

**A number needs a source and a date.** Any field of this shape

```yaml
value: "$172,508"
source: Glassdoor Site Reliability Engineer salary estimate (overall average, US)
retrievedAt: "2026-08-04"
```

is checked by `tools/validate.mjs`, which fails if `source` is missing or trivial
and if `retrievedAt` is absent or not `YYYY-MM-DD`. Put the date you actually
read it, not the date you opened the pull request.

If you cannot source a claim, the right move is to leave it out. A missing
figure is a gap; an unsourced one is a liability that somebody will quote in a
salary negotiation.

## What is most useful

1. **Re-reading stale figures.** `tools/validate.mjs` lists every figure older
   than 12 months. Updating one, with a fresh source and date, is the single
   most valuable pull request here.
2. **Dead links.** `tools/check-links.mjs` finds them. A replacement that teaches
   the same thing beats deleting the entry.
3. **Non-US salary markets.** The dataset is US-only today and says so. A
   sourced band for another market is a genuine addition — open an issue first
   so we can agree on the shape before you do the work.
4. **Phase-order arguments.** If you have run these systems and the order is
   wrong, say so in an issue with the reasoning. Order is the opinionated part
   of a roadmap and the part worth arguing about.

## What will be declined

- **Referral or affiliate links.** `tools/validate.mjs` rejects URLs carrying `tag`,
  `ref`, `aff`, `affiliate_id` or any `utm_*`. This applies to us too.
- **Link-farm additions.** A phase caps at 12 resources. If yours is better
  than one already there, say which one it replaces.
- **Unsourced numbers**, however plausible.

## Before you open the pull request

```bash
cd tools && npm install --omit=dev && npm run validate
```

The dataset itself has no dependencies — everything that needs installing lives
in `tools/`, so you can read, edit or consume `data/` without Node at all.

One topic per pull request. If you are changing a figure, the source goes in
the description as well as in the file, so it is visible in review without
opening the diff.
