---
type: Reference
title: Mod template repo
description: Where agents clone and run the Sandustry mod template, and how this OKF site relates without duplicating the template README.
tags:
  - sandustry
  - okf
  - references
  - template
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T19:00:00Z
sources:
  - id: template-repo
    resource: https://github.com/sandustry-modding/SandustryModTemplate
    title: SandustryModTemplate
  - id: template-readme
    resource: https://github.com/sandustry-modding/SandustryModTemplate/blob/main/README.md
    title: Template README
  - id: docs-agents
    resource: /AGENTS.md
    title: Docs agent notes
  - id: template-agents
    resource: https://github.com/sandustry-modding/SandustryModTemplate/blob/main/AGENTS.md
    title: Template AGENTS.md
  - id: consume
    resource: /okf/consume.md
    title: Consume Sandustry OKF
---

# Mod template repo

Agents that build or debug a mod work in the mod template repository on disk.
This OKF bundle indexes vanilla game and Sandkit facts on the Docsify site.
It does not replace the template install guide.
Follow [/okf/consume.md](/okf/consume.md) for OKF load order.[^consume]

## Canonical repository

| Field | Value |
| --- | --- |
| URL | [https://github.com/sandustry-modding/SandustryModTemplate](https://github.com/sandustry-modding/SandustryModTemplate)[^template-repo] |
| Role | TypeScript mod starter, dev scripts, `modkit/`, game extract setup |
| Install guide | Template `README.md` — do not duplicate it here[^template-readme] |

Open the template README for quick start, commands, troubleshooting, and Workshop publish steps.
Mod authoring guides live under [/guides/](/guides/) and [/modkit/](/modkit/README.md) — not in OKF.

## This site must not duplicate the template README

The Docsify site serves API reference, guides, and kit pages for browsing.
Long install dumps belong in the template README only.[^docs-agents]
OKF concept files link to the template repo instead of copying those sections.

## How `docs/` appears in the template

The template gitignores a `docs/` folder at its repo root.[^template-readme]
`npm run setup` and `npm run docs` clone [sandustry-modding.github.io](https://github.com/sandustry-modding/sandustry-modding.github.io) into that folder when it is missing.[^docs-agents]
That clone is the same site you are reading when OKF is published to GitHub Pages.
Agents editing OKF concepts edit the docs site repo, not the template's gitignored copy.

## Key template paths (pointer only)

| Path | Role |
| --- | --- |
| `src/<name>/` | One mod per folder with `modinfo.json` and entry script[^template-readme] |
| `modkit/` | Shared kit imported as `@modkit/*`[^template-readme] |
| `dist/` | Symlink to the OS Sandustry mods folder[^template-readme] |
| `sandustry/` | Gitignored game extract and OS links; created by setup[^template-readme] |
| `.tmp/Sandkit - Sandustry Modding API.html` | Local official API snapshot for agents in the template[^template-agents] |

Full tables and OS paths live in the template README folder layout section.[^template-readme]

## Commands agents use in the template

| Command | Role |
| --- | --- |
| `npm run setup` | Verify install, extract `app.asar` to `sandustry/source/`, link dist, logs, saves, workshop[^template-readme] |
| `npm run dev` | Watch-build mods into `dist/`[^template-readme] |
| `npm run docs` | Clone this docs site into `docs/` if needed, then serve Docsify locally[^template-readme] |

Mod authoring: [/guides/getting-started.md](/guides/getting-started.md).
API discovery: [/okf/api/how-to-read-sandkit.md](/okf/api/how-to-read-sandkit.md).

## Live sessions

Live attach and probe playbooks live under [/okf/live/](/okf/live/index.md).
Follow [/okf/consume.md](/okf/consume.md) for load order.
Use MCP namespace `sandustry` inside the template workspace.

## Related OKF

- [OKF index](/okf/index.md)
- [Types package](/okf/references/types-package.md)
- [Official Sandkit](/okf/references/official-sandkit.md)

[^consume]: Load order — [/okf/consume.md](/okf/consume.md).
[^template-repo]: Mod template — [https://github.com/sandustry-modding/SandustryModTemplate](https://github.com/sandustry-modding/SandustryModTemplate).
[^template-readme]: Install and layout — template `README.md`.
[^docs-agents]: Docs clone policy — [/AGENTS.md](/AGENTS.md).
[^template-agents]: Local Sandkit HTML — template `AGENTS.md`.
