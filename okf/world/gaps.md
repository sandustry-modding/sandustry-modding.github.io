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

Still open after the 0.5.5 live pass:

- Per-thread cell-row or chunk ownership (`startingIndex` is only the worker id 0..13)
- Worker-thread `sandkit` in simulation vs manager vs utility (main renderer confirmed; official worker list in [Engine and workers](/okf/internals/engine-and-workers.md))
- Full numeric ids for mod-registered terrains beyond built-in `CellType`
- `grid.mutate` callback timing vs `chunkShouldUpdateNext`
- `getArtifactLocations()` non-empty `{ cellX, cellY, name }` samples (this save returned `[]`)

Moved to concepts: scheduling typed arrays ([Workers and scheduling](/okf/world/workers.md)), no shared heat SAB ([Wall, heat, shadows, foliage](/okf/world/wall-heat-foliage.md)), `getDataAtCell` `{ cellType, hitPoints, hp }` ([Terrains API](/okf/world/terrains.md)), Gloom / Stratacore ([Cells](/okf/world/cells.md)).

## Related concepts

- [World probe playbook](/okf/world/probe.md) — safe live inspection
