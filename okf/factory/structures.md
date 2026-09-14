---
type: Reference
title: Structures
description: World structure instances, sandkit.api.structures methods, shape matrix, and mod registry.
tags:
  - sandustry
  - okf
  - factory
  - structures
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: vanilla-055-probe
    resource: sandustry 0.5.5 live session
  - id: official-sandkit
    resource: https://sandustry.com/sandkit.html
---

# Structures

World structures live in `store.structures[]`.
Spatial index: `session.cache.structures` (block grid).
Pipes are separate — see [Pipes and fluids](/okf/factory/pipes.md).

## Instance shape (live)

| Field    | Role                                                                                |
| -------- | ----------------------------------------------------------------------------------- |
| `type`   | Builtin numeric id (e.g. `11` Foundation) or mod string id (e.g. `conveyorLeftMk2`) |
| `x`, `y` | Snap-grid cell origin                                                               |
| `queued` | `true` when placement waits on clearance (partial block or replace)                 |
| `filter` | Optional `{ elementType, mode }` on filters (`mode`: `"allow"` seen live)           |
| `data`   | Per-structure bag (signals, pumps, prefab reset, sound box notes, ...)              |
| `color`  | Hex tint (coloring tool), e.g. `"#00ffff"`                                          |
| `frame`  | Boolean frame overlay on foundations                                                |

Live save sample (0.5.5 probe): **19** structures, 0 `queued`, fields `color`, `data`, `filter`, `frame`, `queued`, `type`, `x`, `y`.
Signal types on belt: `signalButton`, `signalToggle`, `signalGate`, etc.

## `sandkit.api.structures` (live keys, 0.5.5)

Canonical methods plus deprecated aliases still on the live object (official HTML marks aliases):

`register`, `updateDefinition`, `registerVariant`, `forEachOfType`, `registerPlacementConfig`, `getAtCell`, `getDefinitionByType`, `getAvailableTypes`, `getTypeById`, `hasBuiltAtCell`, `isBlockedByPlayerAtCell`, `isLauncherAtCell`, `isType`, `isTypeAtCell`, `isLockedByType`, `mapValueToSpritesheetIndex`, `setSpritesheetIndex`, `setSpritesheetIndexAtCell`, `setSpritesheetIndexByValue`, `setSpritesheetIndexByValueAtCell`, `update`, `updateData`, `buildAtCell`, `removeAtCell`, `removeBetweenCells`, `removeAtCells`.

Deprecated aliases (use canonical name):

| Alias                        | Canonical                                         |
| ---------------------------- | ------------------------------------------------- |
| `addVariant`                 | `registerVariant`                                 |
| `getUnlockedTypes`           | `getAvailableTypes`                               |
| `getTypeFromId`              | `getTypeById`                                     |
| `isUnlockedByType`           | `isLockedByType` (inverted semantics — see below) |
| `setData`                    | `updateData`                                      |
| `buildAtCellWhenIdle`        | `buildAtCell`                                     |
| `removeAtCellWhenIdle`       | `removeAtCell`                                    |
| `removeBetweenCellsWhenIdle` | `removeBetweenCells`                              |
| `removeAtCellsWhenIdle`      | `removeAtCells`                                   |

Nested:

- `recipes.register` — machine recipe slots (`planterBox`, `shaker`, `kineticPress`, refinery ids).
- `processing.register`, `processing.isEnabledAtCell`, `processing.setEnabledAtCell` (deprecated aliases: `isEnabledAt`, `setEnabledAt`).
  Top-level deprecated: `api.structures.addProcessor` -> `processing.register`.

## Shape matrix (`shape`)

44 grid (or larger for big structures).
Each cell is a **`CellType` terrain id**, not a boolean.

| Value          | Meaning                                                   |
| -------------- | --------------------------------------------------------- |
| `0`            | Empty — no terrain placed, sand/elements pass through     |
| `15`           | Block — solid foundation tile                             |
| `19` / `20`    | ConveyorLeft / ConveyorRight                              |
| mod terrain id | Custom terrain from `terrains.register` (e.g. glass `45`) |

- **Fully transparent (logic):** omit `shape`, or use all `0`s.
  Filters, lights, collectors, liquid vents use no `shape`.
- **Partially transparent:** mix `0` with terrain ids.
  Example: Velocity Soaker (type 20) — top row `24`, rest `0`.
- **`useRawShape: true`:** pass the matrix straight to the terrain grid.
  Required for angled/partial footprints (splitters, glass triangles).
  Belts/filters: belts need it, filters must **not** use a belt shape or they become solid carriers.
- **Do not use `1` in shape** — that is `CellType.Element`, not "solid".
  It leaves red debris tiles.
  Use `15` (Block) or a registered terrain id.

Optional **`draw(state, structure, render)`** callback replaces per-cell sprite painting (multi-cell art, glass ghosts).
**`render.z`** sets draw depth (lower = behind sand).

## Mod registry

`state.sandkit.mods.structures` — 65 defs on this save.
Each has `id`, keys like `nameKey`, `categoryKey`, `buildModes`, `variants`, `render`, optional `shape`, `draw`.

Builtin defs via `getDefinitionByType(16)` expose `buildModes`, `variants`, `nameKey`, `descriptionKey`, `categoryKey`.

## Engine-only extras (`engine.api.structures`)

State-first twin.
Live extras vs public: `build`, `removeAt`, `removeBetween`, `removeAtPositions`, `beginBatchWrite`, `endBatchWrite`, `getConfig`, `resolveTypeName`, `isBlockedByPlayer`, `isUnlocked`, `isTypeAt`.

`engine.api.structures.recipes`: `getWeightedRecipe`, `register`, `selectWeightedOutput`.

## Built-in type ids

Numeric `StructureType` enum (1–27): see [Enums](/okf/factory/enums.md).
Mod types use string ids.
`getTypeById('collector')` -> `16`.

`isLockedByType(type)` returns `true` when the type is locked.
For unlock checks use `!isLockedByType(...)` or `getAvailableTypes().has(...)`.
Do not rely on deprecated `isUnlockedByType` for numeric types.

## Related

- Placement session: [Player: inventory and items](/okf/player/inventory-and-items.md).
- Building overlay names: [UI: HUD and overlays](/okf/ui/hud-and-overlays.md).
- Collectors: `sandkit.api.collector` (value at cell).
  Admission is Gold + liquidGold only — see [Collector admission](/okf/factory/collector.md).
  Gold / energy overlap: [Energy: networks and signals](/okf/energy/networks-and-signals.md).
- Launchers: [Entities: drones and projectiles](/okf/entities/drones-and-projectiles.md).
- Blueprint copy: [Blueprints](/okf/factory/blueprints.md).
