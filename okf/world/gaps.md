---
type: Reference
title: Open gaps
description: World-domain facts still unconfirmed after the live 0.5.5 pass — log new findings in concept files when resolved.
tags:
  - sandustry
  - okf
  - world
  - gaps
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: world-guide
    resource: /guides/world.md
  - id: extract
    resource: sandustry/source/
---

# Gaps

Still open:

- Worker-thread `sandkit.api` parity spot-check via CDP worker attach (extract facade documented — [Worker entry API](/okf/internals/worker-api.md); no worker CDP target on 0.5.6)

Moved to concepts: scheduling typed arrays ([Workers and scheduling](/okf/world/workers.md)), per-thread column/chunk ownership formulas ([Workers and scheduling](/okf/world/workers.md)), `grid.mutate` flush vs `chunkShouldUpdateNext` promotion ([Grid and chunks](/okf/world/grid-chunks.md)), no shared heat SAB ([Wall, heat, shadows, foliage](/okf/world/wall-heat-foliage.md)), `getDataAtCell` `{ cellType, hitPoints, hp }` ([Terrains API](/okf/world/terrains.md)), Gloom / Stratacore ([Cells](/okf/world/cells.md)), mod terrain `cellType` table 31–55 ([Terrains API](/okf/world/terrains.md)), variable grid / chunk count formula ([Grid and chunks](/okf/world/grid-chunks.md)), artifact location merge and sensor name mapping ([Maps API](/okf/world/maps.md)), live `getArtifactLocations()` on campaign save `b93kqvog6zn-exitsave` ([Maps API](/okf/world/maps.md)).

## Related concepts

- [World probe playbook](/okf/world/probe.md) — safe live inspection
