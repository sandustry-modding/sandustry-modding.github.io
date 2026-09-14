---
type: Reference
title: Wall, heat, shadows, foliage
description: Engine-only wall and heat surfaces, shared.wallData and shadowMap buffers, and foliage helpers not exposed on sandkit.api.
tags:
  - sandustry
  - okf
  - world
  - wall
  - heat
  - shadows
  - foliage
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

# Wall, heat, shadows, foliage

Public mod API has **no** wall or heat namespaces.
These are **engine-only** on `sandkit.engine.api` (state-first, arg0 = game state).
See [Engine and workers](/okf/internals/engine-and-workers.md).

Do not call `setWallDataAt` or heat/foliage mutators during read-only probes.
See [World probe playbook](/okf/world/probe.md).

## `shared.wallData` (live)

| Field             | Live                              |
| ----------------- | --------------------------------- |
| `data`            | `Uint8Array`, len 14745600 (3840) |
| `width`, `height` | 3840                              |
| `paletteData`     | len 1020                          |

Engine methods: `getWallDataAt`, `getWallDataSize`, `getPaletteData`, `setWallDataAt`.

Sample one byte: `wallData.data[cellY * width + cellX]`.
Player cell probe: byte **0**.

## `shared.shadowMap` (live)

| Field             | Live               |
| ----------------- | ------------------ |
| `data`            | `Uint8Array`, 3840 |
| `width`, `height` | 3840               |

Engine: `shadows.refresh`, `refreshRadius`, `refreshRect`.
Terrain ops honor `skipShadow` in terrains API.

`__debug.config.debug.overrideTerrainShadow` / `terrainShadowValue` — F3 debug flags.
Overlay UI: [HUD and overlays](/okf/ui/hud-and-overlays.md).

## Heat transfer (engine only)

`heatTransfer`: `absorbAdjacentElements`, `addTemperature`, `computeDiffusedTemperatures`, `computeEqualizedTemperature`, `consumeTemperatureNear`, `ensureTemperature`, `equalizeConnected`.

No dedicated heat SAB on `shared.*` (only `wallData` matches a heat/temp name filter).
Fire definition `getExtraProps().data.temperature` is **1000** (default, not a per-cell grid).
Per-cell lifetime uses `elementData.durationLeft` / `durationMax`.
Do not dump `elementData` arrays.

## Foliage (engine only)

`foliage`: `generate`, `getClusters`, `getContainer`, `hasProcgenData`.

Prefab placements and Pixi parallax sprites for void-world clears: [Background layers](/okf/world/background-layers.md).

## Matters (engine only)

`matters`: `getMatterTypeFromId`, `register`, `runSolidUpdate`.
One live mod matter registration in `state.sandkit.mods.matters`.

## Related concepts

- [Background layers](/okf/world/background-layers.md)
- [Terrains API](/okf/world/terrains.md)
- [Grid and chunks](/okf/world/grid-chunks.md)
