---
type: Reference
title: Background layers
description: Foreground and background rasters, store.world decor keys, prefab foliage, and Pixi parallax sprites for live 0.5.5 void clears.
tags:
  - sandustry
  - okf
  - world
  - background
  - foliage
  - pixi
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

# Background layers

Visual background is **not** only `shared.sim.cellIds`.
Void-world wipes must clear these buffers too.

## Simulation buffers (3840 x 3840)

| Buffer             | Path                    | Bytes per cell | Role                  |
| ------------------ | ----------------------- | -------------- | --------------------- |
| Terrain / elements | `shared.sim.cellIds`    | 4 (uint32)     | Foreground sim        |
| Wall tiles         | `shared.wallData.data`  | 1              | Background wall paint |
| Terrain shadow     | `shared.shadowMap.data` | 1              | Shadow overlay        |
| Map raster         | `shared.mapData.data`   | 4 (RGBA)       | Procgen map imagery   |

Clear per row in batch passes.
Do not dump full arrays in probe responses.

## World metadata

| Field           | Path                        | Role                               |
| --------------- | --------------------------- | ---------------------------------- |
| Horizon columns | `store.world.horizon`       | len 3840, ground silhouette height |
| Ground horizon  | `store.world.groundHorizon` | len 3840                           |
| Fixtures        | `store.world.fixtures`      | World fixture list                 |
| Lights          | `store.world.lights`        | World light records                |
| Teleport zones  | `store.world.teleportZones` | Zone defs                          |
| Sensors         | `store.world.sensors`       | Sensor defs                        |

`.fill(0)` on horizons; `.length = 0` on arrays.

## Prefab decor

| Field                      | Path                                       |
| -------------------------- | ------------------------------------------ |
| Placements                 | `store.mods.prefabData.placements`         |
| Foliage copy               | `store.mods.foliage.data.prefabPlacements` |
| **Placed sprites (store)** | `store.mods.foliage.placedFoliage`         |
| Procgen clusters           | `store.mods.foliage.data.procgenClusters`  |
| Foliage clusters           | `engine.api.foliage.getClusters(state)`    |
| Foliage Pixi container     | `engine.api.foliage.getContainer(state)`   |

Clear **all** placement arrays, `placedFoliage`, and `removeChildren()` on foliage container.
Prefab arrays can be empty while `placedFoliage` still holds live sprite records (Void save: **2015** entries, same count as Pixi children).

## Pixi (`session.rendering.pixi`)

Parallax and map overlay sprites — hide (`visible: false`, `alpha: 0`) and clear children:

| Key                                | Role                               |
| ---------------------------------- | ---------------------------------- |
| `mountainsSprite`                  | Distant mountains                  |
| `treesSmallSprite`                 | Small trees parallax               |
| `treesSprite`                      | Trees parallax                     |
| `bgL04Sprite`                      | Background layer 4                 |
| `bgL04Extension`                   | Layer 4 extension                  |
| `backgroundEntitiesContainer`      | Decor entities (~28 children live) |
| `mapSprite`                        | Map / fog overlay texture          |
| `wallTilemap` / `shadowMapTilemap` | Wall and shadow tilemaps           |

Also set `filter.uniformGroup.uniforms.uDrawUndergroundFog = false` when present.

Large foliage draw container may live on `pixi.app.stage` (hundreds of children) — hide that container if decor respawns after redraw.

## Fog uncover vs buffers

- **Fog cells** in sim: terrain ids `4`, `5`, `6`, `13` (`CellType.Fog*`).
- **`revealFogAtCell`** updates exploration and may spawn cached world items — see [Entities: drones and projectiles](/okf/entities/drones-and-projectiles.md).
- After direct buffer clear, fog ids are already `0`; batched `revealFogAtCell` still helps the **map UI** if black fog remains.

## Related concepts

- [Wall, heat, shadows, foliage](/okf/world/wall-heat-foliage.md)
- [store.world session metadata](/okf/world/store-world.md)
- [Maps API](/okf/world/maps.md)
