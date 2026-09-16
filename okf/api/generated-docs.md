---
type: Reference
title: Generated API docs on this site
description: What api/, full.md, and types/ pages are, how they are produced, and how agents should pick one namespace page.
tags:
  - sandustry
  - okf
  - api
  - generated
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T19:00:00Z
sources:
  - id: docs-agents
    resource: /AGENTS.md
    title: Docs agent notes
  - id: types-readme
    resource: /types/README.md
    title: Types README
  - id: site-readme
    resource: /README.md
    title: Site README
  - id: consume
    resource: /okf/consume.md
    title: Consume Sandustry OKF
---

# Generated API docs on this site

This page describes the generated Sandkit reference tree on this site.
It does not duplicate the 171 namespace pages under `/api/`.
Follow [/okf/consume.md](/okf/consume.md) for OKF load order.[^consume]

## What gets generated

| Path | Role |
| --- | --- |
| `/api/*.md` | One Markdown page per Sandkit namespace or enum group (171 files today)[^docs-agents] |
| `/full.md` | Every generated namespace concatenated on one long page[^site-readme] |
| `/types/` | Install, Search, and JSON Schema docs for `@sandustry-modding/types`[^types-readme] |
| `/types/search.md` | Interactive search over namespace names and member paths[^types-readme] |
| `/assets/search-index.js` | Search index rebuilt with the API pages[^types-readme] |

Electron bridge, `modinfo.json`, and `patches.json` also have generated or hand-maintained reference pages outside the core `sandkit` tree.
See the site sidebar under **Types** for those entries.

## Source of truth for edits

Declarations live in [SandustryTypes](https://github.com/sandustry-modding/SandustryTypes).[^docs-agents]
Run `npm run generate` in that repo when it sits next to this site clone (the mod template places this repo in `docs/`).
That step merges `.d.ts` files, `scripts/api-gen/overrides.json`, and the official Sandkit HTML into catalog output.[^types-readme]
It writes into `api/`, `full.md`, schemas, and the search index.
Do not hand-edit files under `/api/` or `/full.md` in this site repo.
Report gaps in SandustryTypes instead.

## Pick one namespace page

Load the smallest page that answers your question.
Do not open `/full.md` by default.

| You know… | Open… |
| --- | --- |
| Top-level `sandkit.api` | [/api/sandkit.api.md](/api/sandkit.api.md) |
| A nested bag, for example grid | [/api/sandkit.api.grid.md](/api/sandkit.api.grid.md) |
| Engine surface | [/api/sandkit.engine.md](/api/sandkit.engine.md) or a child under `sandkit.engine.api.*` |
| An enum group | A page under `/api/sandkit.enums.*` |
| Only a member name or path fragment | [/types/search.md](/types/search.md), then follow the link to one `/api/` page |

Start from Search with an empty query to list namespace names and short descriptions.[^types-readme]
Type a path such as `sandkit.api.ui.toast` to jump to the owning namespace page.
Read that single page and stop when you have the member you need.

Use `/full.md` only when you must scan many unrelated namespaces in one pass, for example diffing or wide inventory work.
Prefer Search plus one `/api/` page for normal mod tasks.

## Relationship to official Sandkit

Generated pages add JSDoc text, cross-links, and community type detail.
They can include declared members that are not yet listed on [sandustry.com/sandkit.html](https://sandustry.com/sandkit.html).
They can also lag a new game build until SandustryTypes is regenerated.
Always confirm runtime signatures on the official HTML.
See [/okf/api/how-to-read-sandkit.md](/okf/api/how-to-read-sandkit.md) for the full read order.

## Related OKF

- [OKF index](/okf/index.md)
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md)
- [Official Sandkit reference](/okf/references/official-sandkit.md)

[^consume]: Load order — [/okf/consume.md](/okf/consume.md).
[^docs-agents]: Regeneration policy — [/AGENTS.md](/AGENTS.md).
[^types-readme]: Generator commands — [/types/](/types/).
[^site-readme]: Browse section — [/](/).
