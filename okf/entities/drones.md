---
type: Reference
title: Drones
description: store.drones model, DroneType enum, hauler and sweeper data, and engine.api.drones internal surface.
tags:
  - sandustry
  - okf
  - entities
  - drones
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

# Drones

## Store model

`store.drones` is a flat array.
Each drone:

| Field    | Type             | Notes                                                            |
| -------- | ---------------- | ---------------------------------------------------------------- |
| `id`     | number           | From `store.meta.nextId.drone`.                                  |
| `type`   | number or string | Built-in: `sandkit.enums.DroneType`. Sweeper uses mod string id. |
| `x`, `y` | number           | World pixels.                                                    |
| `data`   | object           | Type-specific state bag.                                         |

### `DroneType` (built-in)

| Name   | Value |
| ------ | ----- |
| Digger | 1     |
| Hauler | 2     |

### Hauler `data` (from bundle)

| Field | Notes |
| --- | --- |
| `origin` | `{ x, y }` world pixels — line start. |
| `target` | `{ x, y }` or drop-off rect anchor. |
| `lineId`, `lineName` | Hauler line identity (defaults to drone `id` / generated name). |
| `materializeStart` | `store.meta.time` at spawn. |
| `movingToTarget`, `currentSpeed`, `pauseTimer` | Movement state (defaults applied on load). |
| `inventory` | Grabber-style cell grid (`elements[]`, `amount`). |
| `retiring` | Set when drone finishes haul and heads to despawn. |
| `dissolveStart` | Set during line removal dissolve (excluded from hauler ambience count). |

Sprite toggles `hauler` / `haulerClosed` when `inventory.amount > 0`.

### Live hauler mid-sim (CDP `:9222`, 0.5.6)

Dev save `irishbruse.dev-tools-autosave-1`.
Spawned with `FH.drones.spawn(state, 2, 1040, 1040, data)` (in-memory probe; not saved).
After one sim tick:

```json
{
  "id": 1,
  "type": 2,
  "x": 1040,
  "y": 1040,
  "data": {
    "origin": { "x": 1040, "y": 1040 },
    "target": { "x": 1120, "y": 1040 },
    "lineId": 9001,
    "lineName": "okf-probe-line",
    "materializeStart": 300188.4,
    "movingToTarget": false,
    "currentSpeed": 0,
    "pauseTimer": 0,
    "inventory": { "elements": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "amount": 0 },
    "retiring": false
  }
}
```

`inventory.elements` is a **16-slot** number array after spawn (not an empty array).
`movingToTarget` flipped to **`false`** immediately after the first tick.

### Built-in `DroneType.Digger`

Enum value **1** exists on `sandkit.enums.DroneType`.
No vanilla `drones.spawn` call uses `DroneType.Digger` in the 0.5.6 extract.
The digger **tool** fires `ProjectileType.Digger` shots instead.

### Live `DroneType.Digger` instance (CDP `:9222`, 0.5.6)

In-memory probe via `FH.drones.spawn(state, 1, 1000, 1000, data)` on dev-tools save (not persisted):

```json
{
  "id": 1,
  "type": 1,
  "x": 1000,
  "y": 1000,
  "data": {
    "origin": { "x": 1000, "y": 1000 },
    "target": { "x": 1080, "y": 1000 }
  }
}
```

Spawn accepts the same `origin` / `target` world-pixel pair as hauler `data`.
No vanilla save in the probe set contained a pre-existing `type: 1` row.

### Sweeper (mod)

Item id `sweeperDroneLauncher`.
Drone `type` is the mod string **`sweeper`** (not `DroneType`).
`data` holds origin, circular `target`, movement timers, and grabber `inventory`:

| Field | Notes |
| --- | --- |
| `origin` | Launch cell center in world pixels. |
| `target` | `{ center: { x, y }, radius }` selection disc. |
| `currentTarget` | Active pickup target or null. |
| `movingToTarget`, `currentSpeed`, `pauseTimer` | Same pattern as hauler. |
| `initialPhase`, `initialDirection`, `initialDistance`, `maxInitialDistance` | Post-launch wander phase. |
| `inventory` | `{ element, hasItem }` single-element grabber. |
| `returningToPlayer` | Recall phase flag. |

Uses `sandkit.config("sweeperDrone", …)` for limits.
UI: hotbar overlay hints (`mods|sweeperDrone|*` keys).

### Live sweeper mid-sim (CDP `:9222`, 0.5.6)

Same dev save and probe session.
Spawned with `FH.drones.spawn(state, "sweeper", 1060, 1060, data)`:

```json
{
  "id": 2,
  "type": "sweeper",
  "x": 1060,
  "y": 1060,
  "data": {
    "origin": { "x": 1040, "y": 1040 },
    "target": { "center": { "x": 1080, "y": 1080 }, "radius": 32 },
    "currentTarget": null,
    "movingToTarget": true,
    "currentSpeed": 0,
    "pauseTimer": 0,
    "initialPhase": true,
    "initialDirection": 1,
    "initialDistance": 0,
    "maxInitialDistance": 48,
    "inventory": { "element": null, "hasItem": false },
    "returningToPlayer": false
  }
}
```

Campaign save `b93kqvog6zn-exitsave` had one vanilla **`reconDrone`** (`type: "reconDrone"`) with hover/movement `data`, not hauler or sweeper.

## Engine API

`sandkit.engine.api.drones` — **internal**, state-first.

| Method                                         | Role                                            |
| ---------------------------------------------- | ----------------------------------------------- |
| `spawn(state, type, x, y, data?, spriteOpts?)` | Push to `store.drones`, refresh DroneAdminList. |
| `kill(state, drone)`                           | Remove from store and sprites.                  |

**No public `sandkit.api.drones`.**
Mods use items with `onDroneUpdate` hooks on `sandkit.mods.items[type]`.

## UI

`ComponentId.DroneAdminList` (18) — management screen for haulers.
See [HUD and overlays](/okf/ui/hud-and-overlays.md) overlay table.

## Update loop

Each frame: `onDroneUpdate` mod hook, else hauler sim.
Sprite position = `drone.x/y - camera`.

## Related concepts

- [Entity store keys](/okf/entities/store.md)
- [Swarm console and sweeper](/okf/entities/swarm-sweeper.md)
- [Enums](/okf/entities/enums.md)
