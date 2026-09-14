---
type: Reference
title: Discoveries
description: sandkit.api.discoveries methods, store shape, and discovery popup session fields for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - progression
  - discoveries
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: progression-guide
    resource: /guides/progression.md
---

# Discoveries

Public API: `sandkit.api.discoveries`.
**Main thread only.**

| Method                          | Role                                                                 |
| ------------------------------- | -------------------------------------------------------------------- |
| `addElementByType(elementType)` | Append numeric `ElementType` to `store.discoveries.elements` if new. |
| `addTerrainByType(terrainType)` | Append numeric terrain type to `store.discoveries.terrains` if new.  |

## Store

```ts
store.discoveries: {
  elements: number[],
  terrains: number[]
}
```

New saves seed starter lists (sand, gold, stone, ...).
Live probe on a mid-game save: 65 elements, 5 terrains.

Research unlock and world events also call internal `discoveries.addElement` / `addTerrain`.

## UI session

`session.ui.discoveryPopups` is an array of pending popup payloads.
Length 0 when idle.

Discovery log screen is under Research in the management UI.
Lexicon overlaps discovery content.
See [Lexicon](/okf/progression/lexicon.md).

## Related concepts

- [Enums](/okf/progression/enums.md) — `ElementType` and `CellType` ids
- [Grid and elements](/okf/world/grid-and-elements.md) — element and terrain registration
- [Store cluster](/okf/progression/store.md) — `store.discoveries` bag
