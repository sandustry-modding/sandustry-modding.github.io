---
type: Reference
title: World items
description: store.worldItems pickups, PickupType data shapes, sandkit.api.pickups, and prefabWorldItemCache.
tags:
  - sandustry
  - okf
  - entities
  - pickups
  - world-items
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: extract
    resource: sandustry/source/
---

# World items

## Store model

`store.worldItems` — pickups in the world.

| Field    | Type   | Notes                                |
| -------- | ------ | ------------------------------------ |
| `id`     | number | Runtime id.                          |
| `type`   | number | `sandkit.enums.PickupType`.          |
| `x`, `y` | number | World pixels.                        |
| `data`   | object | Per-type animation and display data. |

### `data` by type

| PickupType | Value | data keys (typical)                         |
| ---------- | ----- | ------------------------------------------- |
| Artifact   | 1     | `name`, `hoverData` (bob), `prefabSpecial`  |
| GlyphKey   | 2     | Same hover pattern as Artifact.             |
| Stratacore | 3     | `circleData` (orbit animation).             |
| Orb        | 4     | `breathData` (scale pulse), `lightPosition` |

Optional `data.lightIndex` when spawned with a point light.

### Related store (not `worldItems`)

| Key                            | Shape        | Notes                                                                                                                                                         |
| ------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `store.stratacores`            | `string[]`   | Collected stratacore ids — see [Stratacore ids](?id=stratacore-ids) below. Separate from live `worldItems` pickups.                                            |
| `store.gloom.emitterPositions` | `{ x, y }[]` | Gloom emitter world positions. Element sim detail lives in [World](/okf/world/grid-and-elements.md); listed here only because stratacore/gloom progression overlaps entity probes. |

### Stratacore ids

0.5.6 extract + live dev-tools save (`__debug.state`, game **0.5.6**):

| Id | Role |
| --- | --- |
| `terracortex` | Only id pushed to `store.stratacores` on `stratacore:secured` |

World pickup before secure uses `prefabSpecial: "terracortex"` or `"strataform"` on `PickupType.Stratacore` rows.
`"strataform"` is the pre-neutralized label; secured progression stores **`terracortex`** only.
No other stratacore ids appear in `bundle.js` or locale keys in this build.

## Public API

`sandkit.api.pickups`:

| Method                                              | Role                                    |
| --------------------------------------------------- | --------------------------------------- |
| `getAll()`                                          | `store.worldItems`.                     |
| `getById(pickupId)`                                 | Find by id.                             |
| `spawnAtWorld(type, worldX, worldY, data?, light?)` | Spawn (unsafe). `type` is `PickupType`. |
| `remove(pickup)`                                    | Remove (unsafe).                        |
| `pickUp(pickup)`                                    | Collect into inventory (unsafe).        |

Deprecated live aliases: `api.world.pickups` (same namespace), `destroy(pickup)` -> use `remove`.

Reference: [sandkit.html — api.pickups](https://sandustry.com/sandkit.html).

## `session.prefabWorldItemCache`

Grid map (`Fn`) populated at map load from prefab metadata.

Each cached cell stores:

| Field | Type | Notes |
| --- | --- | --- |
| `type` | `PickupType` | Artifact or GlyphKey from prefab name (`Glyph Room` → GlyphKey). |
| `name` | string | Translated display name (`ui|worldItem|artifact` or glyph key). |
| `prefabSpecial` | string | From prefab `special` field (may be empty). |
| `light` | object? | Optional point-light preset (`brightness`, `size`, …) from prefab light tables. |

Population rules:
- `worldItemOffset` cells → cache entry at offset from prefab origin.
- `worldItems[]` and `artifact` blocks → Artifact entries.
- Skips prefab name `"Void"`.
- Glyph Room prefabs use GlyphKey type.

When fog reveals a cell, cache entry spawns a real `store.worldItems` item via `pickups.spawnAtWorld` and deletes the cache key.
Probe: `session.prefabWorldItemCache` constructor name `Fn`; may have no numeric `size`.

## Sensors

Artifact sensors in `session.mainSensorCache` can also spawn Artifact pickups on fog reveal (separate from prefab cache).

## Related concepts

- [Entity store keys](/okf/entities/store.md)
- [Enums](/okf/entities/enums.md)
- [Gaps](/okf/entities/gaps.md)
