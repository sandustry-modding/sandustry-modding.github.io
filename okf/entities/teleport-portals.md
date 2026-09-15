---
type: Reference
title: Teleport zones and portals
description: store.world.teleportZones, session.teleportZoneCache, engine.api.teleportZones, and portal map markers.
tags:
  - sandustry
  - okf
  - entities
  - teleport
  - portals
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

# Teleport zones and portals

## Teleport zones

**Persisted:** `store.world.teleportZones[]`

| Field                       | Type    | Notes                                           |
| --------------------------- | ------- | ----------------------------------------------- |
| `id`                        | string  | Unique. Bidirectional zones add `{id}_reverse`. |
| `prefabX`, `prefabY`        | number  | Source prefab anchor (cells).                   |
| `entryX`, `entryY`          | number  | Entry rect origin (cells).                      |
| `entryWidth`, `entryHeight` | number  | Entry hit box (cells).                          |
| `exitX`, `exitY`            | number  | Exit position (cells).                          |
| `cooldown`                  | number  | Ms between uses. Default 500.                   |
| `bidirectional`             | boolean | Spawns linked reverse zone.                     |
| `linkedZoneId`              | string? | Paired zone id.                                 |

**Cache:** `session.teleportZoneCache` — `get(cellX, cellY)` returns zone for any cell inside entry rect.
Rebuilt on add/remove.

## Engine API

`sandkit.engine.api.teleportZones` — state-first.

| Method                                         | Read? | Role                         |
| ---------------------------------------------- | ----- | ---------------------------- |
| `getAll(state)`                                | yes   | `store.world.teleportZones`. |
| `getById(state, id)`                           | yes   | One zone.                    |
| `getAtCell(state, cellX, cellY)`               | yes   | Cache lookup.                |
| `add` / `remove`                               | no    | Mutate store and cache.      |
| `teleportPlayerTo(state, cellX, cellY, opts?)` | no    | Move player, optional VFX.   |
| `spawnDefaultParticles`                        | no    | Entry/exit particles.        |

Prefab loader calls `add` for each `teleportZones` block in prefab data (offsets from prefab center).

## Portals

`sandkit.engine.api.portals.getMarkers(state)` — read-only list for map UI.

Returns `{ name, x, y }[]` in world pixels (`cell * cellSize`).

| Condition | Result |
| --- | --- |
| Portals locked (`Qk === false`) | `[]` |
| All portals consumed (`oS === true`) | `[]` |
| Unlocked and markers remain | One row per runtime marker (below) |

Names come from i18n `nameKey` on the static table or runtime marker.

**Not the same as teleport zones.**
Teleport zones are grid rects with entry/exit.
Portal markers are map waypoints.

### Static portal table (0.5.6 extract)

Storage key: `store.mods.staticPortals` (unlock flag under storage key `"staticPortals"`).
Prefab catalog constant `Yk`:

| `id` | `nameKey` | `prefabName` | `offset` (cells) |
| --- | --- | --- | --- |
| `glyph-room` | `mods|staticPortals|glyphRoom|name` | Glyph Room | `{ x: 128, y: 136 }` |
| `surface-cave` | `mods|staticPortals|surfaceCave|name` | Surface Cave | `{ x: 157, y: 9 }` |

On game init (when prefab data exists), each row resolves prefab center via `prefabData.getAll()` and pushes into runtime array `Jk`:

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | From static table |
| `nameKey` | string | i18n key for map label |
| `cellX`, `cellY` | number | Prefab center + offset |

Unlock: picking up a **GlyphKey** world item sets `Qk = true` and persists unlock.
`getMarkers` maps `Jk` to `{ name: t(nameKey), x: cellX * cellSize, y: cellY * cellSize }`.

Live dev-tools save: `store.mods.staticPortals` was `{}` and `getMarkers` would return `[]` until unlock + prefab load.

### Live unlocked sample (CDP `:9222`, 0.5.6)

Campaign save `b93kqvog6zn-exitsave`.
`store.mods.staticPortals`: `{ unlocked: true }`.
`FH.portals.getMarkers(state)`:

| `name` | `x` (px) | `y` (px) | cell (`÷ cellSize` 4) |
| --- | --- | --- | --- |
| Glyph Room | 6040 | 11168 | (1510, 2792) |
| Surface Cave | 6772 | 7404 | (1693, 1851) |

Coordinates are world pixels (`cell * cellSize`), matching the static table + prefab center resolution in extract.

## Related concepts

- [Entity store keys](/okf/entities/store.md)
- [Player: inventory and items](/okf/player/inventory-and-items.md) — player teleport alternatives.
- [Gaps](/okf/entities/gaps.md)
