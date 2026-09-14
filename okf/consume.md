---
type: Playbook
title: Consume Sandustry OKF
description: Load order for agents retrieving public kit and API knowledge from this site.
tags:
  - sandustry
  - okf
  - agents
generated:
  by: human:ethan (Ethan Conneely)
  at: 2026-09-14T19:00:00Z
status: stable
sources:
  - https://github.com/GoogleCloudPlatform/open-knowledge-format
  - https://sandustry-modding.github.io/okf/index.md
  - https://sandustry.com/sandkit.html
---

# Consume Sandustry OKF

Follow this order when you need Sandustry modding knowledge from the public docs site.

Read [/okf/AGENTS.md](/okf/AGENTS.md) first when you **write** OKF content.
OKF is game-only — not mod template, modkit, or third-party mods.

## Load order

1. Read [llms.txt](/llms.txt) at the site root.
2. Read this consume playbook.
3. Pick **one** domain index that matches your task.
4. Open **one** concept file from that domain.
5. Stop when the concept answers your question.
6. Open more concepts only when the first file is not enough.

For a live Sandustry session, pick the [Live](/okf/live/index.md) domain first.
Use MCP namespace `sandustry` for attach, evaluate, and UI automation.
Do not kill Sandustry.
Ask the user for a hard reload.

## Match one domain

Choose the domain that best fits the work.
Do not read every domain index up front.

| Task focus | Domain index |
| --- | --- |
| Live CDP attach, evaluate_script, void-world batches | [Live](/okf/live/index.md) |
| Sandkit namespaces, methods, types | [API](/okf/api/index.md) |
| Mod template setup, lifecycle, publishing | [Mod template README](https://github.com/sandustry-modding/SandustryModTemplate) and [/guides/getting-started.md](/guides/getting-started.md) — not OKF |
| Grid, elements, terrains | [World](/okf/world/index.md) |
| Structures, pipes, factory | [Factory](/okf/factory/index.md) |
| Energy networks, signals | [Energy](/okf/energy/index.md) |
| Player, inventory, items | [Player](/okf/player/index.md) |
| HUD, overlays, UI kit | [UI](/okf/ui/index.md) |
| Tech, upgrades, progression | [Progression](/okf/progression/index.md) |
| Drones, projectiles, entities | [Entities](/okf/entities/index.md) |
| Engine, workers, internals | [Internals](/okf/internals/index.md) |
| Official API, types, template links | [References](/okf/references/index.md) |

## API truth

Treat the [official Sandkit API](https://sandustry.com/sandkit.html) as signature truth for runtime shapes.
Use OKF and generated pages here as indexed guides.
Do not invent APIs or parameters.

## Reserved files

- `index.md` in each folder lists concepts for that folder.
- [log.md](/okf/log.md) records OKF bundle changes.
- Only the root [OKF index](/okf/index.md) carries `okf_version` frontmatter.
