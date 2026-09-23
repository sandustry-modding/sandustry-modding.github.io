---
type: Reference
title: Maps API
description: sandkit.api.maps custom map selection, artifact markers, modinfo limits, and live mapData raster shape for 0.5.5.
tags:
  - sandustry
  - okf
  - world
  - maps
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

# `api.maps`

Custom map selection, artifact markers, and session start.
Not the in-game simulation grid.

Official: [sandkit.html — api.maps](https://sandustry.com/sandkit.html).
Types: `@sandustry-modding/types` `src/sandkit/api/maps.d.ts`, `src/worker/api/maps.d.ts`.

`map.width` / `map.height` in `modinfo.json` are integers from **1** to **3840** (loader `MAX_MAP_DIMENSION`).
Campaign / Void saves still allocate **3840 x 3840**.
A custom map can be smaller.

## Methods

| Method                   | Role                                         |
| ------------------------ | -------------------------------------------- |
| `getAvailable()`         | Maps the player can start                    |
| `start(mapId)`           | Start custom map (**mutates** session)       |
| `getActive()`            | Current custom map metadata, or `null`       |
| `getArtifactLocations()` | `{ cellX, cellY, name }[]` for map artifacts |

Call `getArtifactLocations()` after `game:ready` when placing UI markers.

### Runtime merge (0.5.6 extract)

`maps.getArtifactLocations(state)` builds one array from two sources:

1. `prefabData.getArtifactLocations()` when present — each row `{ cellX: x, cellY: y, name }` from prefab metadata.
2. `store.world.sensors` — artifact sensor placements with English names:
   - `Artifact1` sensor type (live store: numeric **`type: 1`**) → **`Zorvix-22`**
   - any other artifact sensor type → **`Q7-Arynth`**

Live dev-tools save (`irishbruse.dev-tools-exitsave`, CDP `:9222`): `sensors.length === 0`, `getArtifactLocations()` → **`[]`**.

### Live campaign sample (CDP `:9222`, 0.5.6)

Save `b93kqvog6zn-exitsave` (Flintpit, **3840 × 3840**).
`store.world.sensors`: one row `{ x: 1535, y: 2229, type: 1 }` (numeric sensor type **1** = first artifact sensor).
`FH.maps.getArtifactLocations(state)` returned **10** rows:

| `cellX` | `cellY` | `name` |
| --- | --- | --- |
| 836 | 1984 | Artifact |
| 669 | 3071 | Artifact |
| 1181 | 3486 | Artifact |
| 1057 | 2498 | Artifact |
| 690 | 2541 | Artifact |
| 2014 | 2014 | Artifact |
| 2310 | 2553 | Artifact |
| 2599 | 2303 | Artifact |
| 1252 | 3053 | Artifact |
| 1535 | 2229 | **Zorvix-22** |

Nine prefab rows use the generic label **`Artifact`**.
The sensor-backed row at **(1535, 2229)** maps to **`Zorvix-22`** (matches extract rule: first artifact sensor type → Zorvix-22).
`store.resources.artifacts`: `{ available: 10, found: 10 }`.

Live 0.5.5 vanilla save: `getActive()` `null`, `getAvailable()` `[]`.

`AvailableMapV1`: `{ id, name?, … }`.

`maps.start` loads blueprint PNGs through the same join as `api.assets.getUrl`: `new URL(relative, rootUrl)`.
Vanilla throws `Asset path resolves outside the mod folder` unless `rootUrl` and the result use the **`file:`** protocol and the result stays under `rootUrl/` (not equal to the folder URL).
The host sets `rootUrl` from `pathToFileURL(folder + sep)` in `workshop-mods.js`.

`map.colorMappings` values are **built-in `CellType` names** (lookup is case-insensitive) that have a terrain definition.
Official HTML examples: `GoldSoil`, `SandiumSoil`, `Obsidian`.
Structure **Block** (`cellId` 15) is not a terrain id.
Unknown names throw `references unknown built-in terrain`.

Reserved RGB keys (terrain blueprint format, `workshop-mods.js`): `255, 255, 255`, `170, 170, 170`, `0, 0, 255`, `102, 0, 255`, `102, 204, 255`, `255, 0, 0`, `153, 0, 0`.

## Live session

Probe: `store.scene.active` **4** (in-game `Scene` enum).
`shared.mapData` keys: `data`, `width`, `height` — procgen / map raster separate from `shared.sim`.

`mapData.width` and `mapData.height` match `shared.sim.width` / `height` on the active save (not always 3840).

| Save shape | `mapData` size | `data` length (= w × h × 4 RGBA) |
| ---------- | -------------- | ---------------------------------- |
| Campaign   | 3840 × 3840    | 58982400                           |
| Dev 1024   | 1024 × 1024    | 4194304                            |

Clear per row when wiping void-world batches.
Background layer details: [Background layers](/okf/world/background-layers.md).

Custom map IPC and UI: see [HUD and overlays](/okf/ui/hud-and-overlays.md) and [Engine and workers](/okf/internals/engine-and-workers.md).

## Related concepts

- [Background layers](/okf/world/background-layers.md)
- [Open gaps](/okf/world/gaps.md) — artifact location samples
