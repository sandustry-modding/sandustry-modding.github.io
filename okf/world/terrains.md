---
type: Reference
title: Terrains API
description: sandkit.api.terrains queries, mutations, registration, TerrainDefinition constraints, and shadow behavior for live 0.5.5.
tags:
  - sandustry
  - okf
  - world
  - terrains
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

# `api.terrains`

Terrain uses numeric **cell types** (same id space as `CellType` and damaged-ground transitions).

Official: [sandkit.html — api.terrains](https://sandustry.com/sandkit.html).
Types: `@sandustry-modding/types` `src/sandkit/api/terrains.d.ts`, `src/worker/api/terrains.d.ts`.

## Shared queries and mutations

| Method                                          | Role                                 |
| ----------------------------------------------- | ------------------------------------ |
| `getTypeById(terrainId)`                        | String id → cell type               |
| `getIdByType(terrainType)`                      | Cell type → string id               |
| `getTypeAtCell`, `getDataAtCell`                | Type and hit points at cell          |
| `isAtCell`, `isTypeAtCell(…, terrainId)`        | Presence checks                      |
| `isCellIdTerrain(cellId)`                       | True for terrain id range            |
| `damageAtCell(…, damage)`                       | Apply hit-point damage (**mutates**) |
| `createAtCell`, `replaceAtCell`, `removeAtCell` | Terrain ops (**mutate**)             |
| `setHitPointsAtCell(…, hitPoints)`              | Set hit points (**mutates**)         |

Deprecated aliases: `getTypeFromId` → `getTypeById`; `setHpAtCell` / `setHpAtCellWhenIdle` → `setHitPointsAtCell`; main-thread `*WhenIdle` on create/replace/remove.

`getDataAtCell` returns `{ cellType, hitPoints, hp }`.
Prefer **`hitPoints`**; `hp` is a deprecated alias (live 0.5.5 returns both keys).

On the main thread, terrain mutations are deferred like element writes.
Worker entry applies them immediately.

`TerrainMutationOptions`: `{ skipShadow?: boolean }`.

## Registration (main)

| Method                                    | Role              |
| ----------------------------------------- | ----------------- |
| `register(definition)`                    | → `{ cellType }` |
| `updateDefinition(cellTypeOrId, partial)` | Patch definition  |

`TerrainDefinition`: `id`, `nameKey`, `hp`, `materialId` (must be > 100 and < 150), `metaColor`, `colorHSL`, `excavationRequirements`, `interactions`, `output`.

## Live registrations

`__debug.state.sandkit.mods.terrains` — **25** keys on live 0.5.6 (dev-tools autosave, CDP `:9222`).

Each def exposes `cellType` (numeric terrain id), `id` (string), `nameKey`, `hp`, and optional `materialId`, `colorHSL`, `interactions`, `output`.

| String id           | `cellType` |
| ------------------- | ---------- |
| `solidite`          | 31         |
| `voidFlowerSoil`    | 32         |
| `spreadingTerrain`  | 33         |
| `sand2`             | 34         |
| `earth`             | 35         |
| `gameOfLifeRandom`  | 36         |
| `golGrow`           | 37         |
| `crystal`           | 38         |
| `sandstone`         | 39         |
| `dune`              | 40         |
| `limestone`         | 41         |
| `bedrock`           | 42         |
| `gameOfLifeStrict`  | 43         |
| `copper`            | 44         |
| `glassTerrain`      | 45         |
| `dissolvingTerrain` | 46         |
| `puffMushroom`      | 47         |
| `fogFreezingIce`    | 48         |
| `blackrock`         | 49         |
| `florinolSoil`      | 50         |
| `auraliteCrystal`   | 51         |
| `vine`              | 52         |
| `caldera`           | 53         |
| `shatterstone`      | 54         |
| `deepstone`         | 55         |

Built-in `CellType` ids **1–30** are unchanged.
Mod registrations occupy **31–55** on this build (still within the 1–1000 terrain range).

## Shadows

Terrain create/remove can trigger shadow updates unless `skipShadow: true`.
Engine refresh details: [Wall, heat, shadows, foliage](/okf/world/wall-heat-foliage.md).

## Related concepts

- [Cells: types, elements, matter](/okf/world/cells.md)
- [Grid and chunks](/okf/world/grid-chunks.md)
- [Sim crafting](/okf/world/sim-crafting.md) — excavation profiles
