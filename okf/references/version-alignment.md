---
type: Reference
title: Version alignment
description: How game build, OKF extract, official Sandkit archives, and SandustryTypes stay in sync.
tags:
  - sandustry
  - okf
  - references
  - version
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:30:00Z
---

# Version alignment

Agents should know which **game build** OKF facts target and which reference layers may lag.

## Current baseline (2026-09-15)

| Layer | Version / label | Location |
| --- | --- | --- |
| OKF live probes | **0.5.6** | CDP `:9222` sessions noted in [OKF log](/okf/log.md) |
| Extracted game app | **0.5.6** | `sandustry/source/package.json` after `npm run setup` |
| `sandkit.apiVersion` | **1** | Unchanged across 0.5.5 → 0.5.6 probes |
| Official HTML (live) | Tracks current host build | [sandustry.com/sandkit.html](https://sandustry.com/sandkit.html) |
| Archived official HTML | **0.5.5**, **0.5.6** | [/official-api/0.5.5.md](/official-api/0.5.5.md), [/official-api/0.5.6.md](/official-api/0.5.6.md) |
| Generated `/api/*.md` | Follows SandustryTypes generate | [Types package](/okf/references/types-package.md) |
| Webpack module ids | **0.5.6** only | [Webpack module ids](/okf/internals/webpack-modules.md) |

When a concept cites "live 0.5.5" in frontmatter but log entries say 0.5.6, prefer **newer probe evidence** and update the concept when behavior differs.

## Alignment rules

| Question | Authoritative source |
| --- | --- |
| Public method signature | [Official Sandkit HTML](https://sandustry.com/sandkit.html) |
| Vanilla behavior not on HTML | Extract `bundle.js` + live probe |
| TypeScript autocomplete | `@sandustry-modding/types` — secondary |
| Mod template workflow | Template `README.md` — not OKF |

## Known cross-version drift

| Topic | Notes |
| --- | --- |
| `api.world` deprecated alias | Documented 0.5.5+; still on 0.5.6 live |
| CDP ambient `sandkit` | Worked on some 0.5.5 sessions; **undefined** in evaluate on probed 0.5.6 |
| Webpack **46781** / **77135** | Valid for 0.5.6 extract; re-grep after update |
| MS Store / GOG platform modules | Not in Steam extract — [Store platforms](/okf/internals/platforms.md) |
| Internals index "0.5.5 notes" | Historical; engine key list still applies — verify on bump |

Full API drift table: [API gaps](/okf/api/gaps.md).

## Maintainer sync checklist

After a new Sandustry release:

1. Run `npm run setup` — refresh `sandustry/source/`.
2. Archive official HTML (`npm run docs:archive-sandkit` in SandustryTypes).
3. Regenerate `/api/` from SandustryTypes.
4. Re-run live probes; update domain concepts and `gaps.md`.
5. Re-grep webpack ids; update [Webpack module ids](/okf/internals/webpack-modules.md).
6. Append [OKF log](/okf/log.md).

## Related

- [Official Sandkit](/okf/references/official-sandkit.md)
- [Extract layout](/okf/references/extract-layout.md)
- [API gaps](/okf/api/gaps.md)
