---
type: Playbook
title: How to read Sandkit
description: Signature truth, local HTML snapshot, and when to use generated docs site pages for Sandkit API discovery.
tags:
  - sandustry
  - okf
  - api
  - sandkit
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T19:00:00Z
sources:
  - id: official-sandkit
    resource: https://sandustry.com/sandkit.html
    title: Official Sandkit API
  - id: consume
    resource: /okf/consume.md
    title: Consume Sandustry OKF
  - id: generated-docs
    resource: /okf/api/generated-docs.md
    title: Generated docs
  - id: types-package
    resource: /okf/references/types-package.md
    title: Types package
  - id: template-agents
    resource: https://github.com/sandustry-modding/SandustryModTemplate/blob/main/AGENTS.md
    title: Template AGENTS.md
---

# How to read Sandkit

Use this playbook when you need a method signature, parameter shape, or runtime namespace path.
Follow [/okf/consume.md](/okf/consume.md) first if you have not loaded the OKF bundle yet.[^consume]

## Signature truth

Treat [https://sandustry.com/sandkit.html](https://sandustry.com/sandkit.html) as signature truth for the live Sandkit API.[^official-sandkit]
Read parameter names, return types, and namespace headings from that page before you write mod code.
Do not invent APIs, parameters, or return shapes.
When this site and the official HTML disagree, follow the official HTML.

## Local snapshot in the mod template

After `npm run setup` in the [mod template repo](https://github.com/sandustry-modding/SandustryModTemplate), open `.tmp/Sandkit - Sandustry Modding API.html` at the template repo root.[^template-agents]
That file is a local copy of the official page for offline search and agent context.
It lives in the template repo, not in this Docsify site.
This OKF bundle does not ship that HTML file.

## Generated pages on this site

The community site mirrors declarations into browse-friendly Markdown.
Use [/types/search.md](/types/search.md) to list namespaces or search by live `sandkit` path.
Open one namespace page under `/api/` when you know the bag you need, for example `/api/sandkit.api.md` or `/api/sandkit.api.grid.md`.
See [/okf/api/generated-docs.md](/okf/api/generated-docs.md) for what those files are and how they are built.[^generated-docs]

Use generated pages as a browse aid and index.
Cross-check any signature against the official HTML before you rely on it.
Do not load [/full.md](/full.md) unless you truly need every namespace on one page.

## Types package is secondary

Install `@sandustry-modding/types` for editor autocomplete and compile-time checks in the mod template.
Those declarations can run ahead of or behind the game build you target.
When types and official HTML disagree, follow the official HTML.[^types-package]
Use [/types/](/types/) for install and ambient reference setup.

## Workflow

1. Name the runtime path you need, for example `sandkit.api.grid.get`.
2. Confirm the signature on [sandustry.com/sandkit.html](https://sandustry.com/sandkit.html).
3. Optionally open the matching `/api/` page or Search hit on this site for cross-links and JSDoc text.
4. Optionally match the path in `@sandustry-modding/types` for TypeScript in the template.
5. Stop when the official page answers the question.

## Related OKF

- [OKF index](/okf/index.md)
- [Generated docs](/okf/api/generated-docs.md)
- [Namespace routing](/okf/api/namespace-routing.md)
- [API gaps](/okf/api/gaps.md)
- [Official Sandkit reference](/okf/references/official-sandkit.md)
- [Types package reference](/okf/references/types-package.md)

[^consume]: Load order — [/okf/consume.md](/okf/consume.md).
[^official-sandkit]: Official host API — [https://sandustry.com/sandkit.html](https://sandustry.com/sandkit.html).
[^template-agents]: Local snapshot path — template `AGENTS.md`.
[^generated-docs]: Generated tree — [/okf/api/generated-docs.md](/okf/api/generated-docs.md).
[^types-package]: Secondary types — [/okf/references/types-package.md](/okf/references/types-package.md).
