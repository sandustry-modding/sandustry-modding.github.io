---
type: Reference
title: Grid iteration
description: Main-thread forEachCellInRectangle and forEachCellInCircle helpers on sandkit.api.grid.
tags:
  - sandustry
  - okf
  - world
  - grid
  - iteration
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

# `api.grid` iteration

Main thread only.
Cell iteration helpers live here.
Full grid surface: [Grid, world alias, and pickups](/okf/world/world-api.md).

Official: [sandkit.html — api.grid](https://sandustry.com/sandkit.html).
Types: `@sandustry-modding/types` `src/sandkit/api/grid.d.ts`.

## Iteration methods

| Method                                                                    | Role                                |
| ------------------------------------------------------------------------- | ----------------------------------- |
| `forEachCellInRectangle(cellX, cellY, widthCells, heightCells, callback)` | Each cell in axis-aligned rectangle |
| `forEachCellInCircle(centerCellX, centerCellY, radiusCells, callback)`    | Each cell inside circle             |

Deprecated alias: `forEachCellInRect` → `forEachCellInRectangle`.

Callbacks receive `(cellX, cellY)`.
Use with read-only `elements.*` / `grid.*` queries inside mod code.

## Manual loop equivalent (read-only)

Prefer manual loops with bounds checks against `sim.width` / `sim.height`:

```javascript
for (let dy = 0; dy < height; dy++)
  for (let dx = 0; dx < width; dx++) {
    const cx = originX + dx,
      cy = originY + dy;
    // read sim.cellIds[cy * sim.width + cx]
  }
```

For circle sampling, filter with `(dx*dx + dy*dy) <= radius*radius`.

Return aggregates (counts, first match) instead of large result payloads.

## Related concepts

- [Grid, world alias, and pickups](/okf/world/world-api.md)
- [Grid and chunks](/okf/world/grid-chunks.md)
