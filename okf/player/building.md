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

There is **no** `session.building.ghost` field in the 0.5.6 extract or live dev-tools save.
Placement preview is computed each frame, not stored on `session.building`.

## Placement preview geometry (extract)

While `placing` is true, the engine builds a **tile list** for the drag shape.
Each preview cell:

| Field | Type | Role |
| --- | --- | --- |
| `x`, `y` | number | Snap-grid cell origin |
| `structureType` | number or string | Resolved type for that cell (includes launcher left/right splits, `quantumPortal` / `quantumPortalExit` pairs) |
| `clearance` | number or `null` | `sandkit.enums` clearance value, or `null` when `skipClearance` |

### Clearance enum (`sandkit.enums` — extract)

| Member | Value | Preview flash |
| --- | --- | --- |
| `Available` | 1 | `build_flash` |
| `FullyBlocked` | 2 | `build_flash3` |
| `PartiallyBlocked` | 3 | `build_flash2` |
| `CanBeReplaced` | 4 | treated like partial in overlay |

`linkedClearance: "allOrNothing"` downgrades the batch if any cell is `FullyBlocked`.
Preview draws overlay flashes at `cell * cellSize` with fade timing during multi-tile drags.

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
