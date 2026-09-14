---
type: Reference
title: Building mode
description: session.building and session.construction flags, sandkit.api.building methods, and BuildMode enum for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - player
  - building
  - placement
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: player-guide
    resource: /guides/player.md
---

# Building mode

Placement **mode** and session flags — not structure catalogs.
Structure recipes live in [Factory: structures and pipes](/okf/factory/structures-and-pipes.md).
Building UI overlays live in [UI: HUD and overlays](/okf/ui/hud-and-overlays.md).

## `session.building`

| Field                 | Role                                             |
| --------------------- | ------------------------------------------------ |
| `activeStructureType` | Selected type id or `null`                       |
| `start`               | `{ x, y }` anchor cell for drag placement        |
| `placing`             | Preview or placement in progress                 |
| `amountOfTiles`       | Tile count for current drag                      |
| `lockedAngle`         | Locked rotation or `null`                        |
| `ignoreAngleLock`     | Skip angle lock (mod binding may override **B**) |

## `session.construction`

| Field              | Role                                    |
| ------------------ | --------------------------------------- |
| `marqueeActive`    | Area select mode (`KeyBinding.Marquee`) |
| `demolisherActive` | Demolish mode (`KeyBinding.Demolish`)   |
| `rulerActive`      | Ruler overlay (`KeyBinding.Ruler`)      |

## `sandkit.enums.BuildMode`

| Member        | Value |
| ------------- | ----- |
| `Linear`      | 1     |
| `Rectangular` | 2     |

Used by structure definitions for drag shape — not stored on `session.building` directly.

## `sandkit.api.building`

| Method                                   | Arity | Notes                                                      |
| ---------------------------------------- | ----- | ---------------------------------------------------------- |
| `getSnappedPositionAtCell(cellX, cellY)` | 2     | Snapped world `{ x, y }` pixels                            |
| `isBlockedAtCell(cellX, cellY)`          | 2     | Placement blocked                                          |
| `cancelPlacement()`                      | 0     | **mutate** — clear preview                                 |
| `selectStructure(typeOrId)`              | 1     | **mutate** — pick structure, returns resolved id or `null` |

`StructureType` enum: [SandustryTypes](https://sandustry-modding.github.io/SandustryTypes/#/).

## Engine twin

`engine.api.building`: `getSnappedCellPosition(state, x, y)`, `isBlockedByTerrainOrElements(state, x, y)`, `cancelPlacement(state)`, `selectStructure(state, id)`.

## Cheat

`session.cheat.bypassCosts` — when `true`, placement ignores resource costs (Debug).
Read-only unless user asks.

## Related concepts

- [Factory: structures and pipes](/okf/factory/structures-and-pipes.md)
- [Session state](/okf/player/state.md)
- [Input](/okf/player/input.md)
- [Enums](/okf/player/enums.md)
