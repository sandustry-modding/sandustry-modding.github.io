---
type: Reference
title: Official Sandkit API
description: Canonical host API from the game and archived HTML snapshots on this docs site.
tags:
  - sandustry
  - okf
  - references
  - sandkit
  - official
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T19:00:00Z
sources:
  - id: official-sandkit
    resource: https://sandustry.com/sandkit.html
    title: Official Sandkit API
  - id: archive-055
    resource: /official-api/0.5.5.md
    title: Archived Sandkit 0.5.5
  - id: archive-056
    resource: /official-api/0.5.6.md
    title: Archived Sandkit 0.5.6
  - id: changelog
    resource: /Changelog.md
    title: Docs changelog
  - id: types-readme
    resource: /types/README.md
    title: Types README
  - id: consume
    resource: /okf/consume.md
    title: Consume Sandustry OKF
---

# Official Sandkit API

The game ships the authoritative Sandkit reference on the web.
Follow [/okf/consume.md](/okf/consume.md) for OKF load order.[^consume]

## Canonical resource

| Field | Value |
| --- | --- |
| URL | [https://sandustry.com/sandkit.html](https://sandustry.com/sandkit.html)[^official-sandkit] |
| Scope | Public mod API exposed as `sandkit` in mod scripts |
| Use | Signature truth for methods, parameters, and namespace headings |

Treat this page as the final word when it disagrees with generated docs or TypeScript declarations on this site.
Do not invent members that are not documented there unless you verify them in a live game session.

## Local snapshot in the mod template

Agents working inside the mod template can also read `.tmp/Sandkit - Sandustry Modding API.html` after template setup.
That file mirrors the official page for offline use.
It is not part of this docs site.

## Archived snapshots on this site

Maintainers can fetch historical official HTML into Markdown under `/official-api/`.
Run `npm run docs:archive-sandkit` from SandustryTypes when that repo sits next to this site.[^types-readme]

Current archives on this site:

| File | Notes |
| --- | --- |
| [/official-api/0.5.5.md](/official-api/0.5.5.md) | Snapshot archived from the official page[^archive-055] |
| [/official-api/0.5.6.md](/official-api/0.5.6.md) | Snapshot archived from the official page[^archive-056] |

Use archives to compare API changes across game versions or to read the official page offline.
Prefer the live [sandustry.com](https://sandustry.com/sandkit.html) page for the build you target today.
See [/Changelog.md](/Changelog.md) for when coverage or archives landed in community docs.[^changelog]

## How this relates to generated docs

SandustryTypes `npm run generate` ingests the official HTML when building `/api/` pages.[^types-readme]
The generator also merges community `.d.ts` declarations and override text.
Gaps between archive, generated pages, and the live official page are expected during game updates.
Resolve signatures on the live official page first.

## Related OKF

- [OKF index](/okf/index.md)
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md)
- [Generated docs](/okf/api/generated-docs.md)
- [Types package](/okf/references/types-package.md)

[^consume]: Load order — [/okf/consume.md](/okf/consume.md).
[^official-sandkit]: Live host API — [https://sandustry.com/sandkit.html](https://sandustry.com/sandkit.html).
[^archive-055]: Archive — [/official-api/0.5.5.md](/official-api/0.5.5.md).
[^archive-056]: Archive — [/official-api/0.5.6.md](/official-api/0.5.6.md).
[^changelog]: Docs history — [/Changelog.md](/Changelog.md).
[^types-readme]: Archive script — [/types/](/types/).
