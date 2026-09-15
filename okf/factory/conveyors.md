---
type: Reference
title: Conveyors and launchers
description: Conveyor belt and launcher type registration via structureBehaviors and engine conveyors API.
tags:
  - sandustry
  - okf
  - factory
  - conveyors
  - launchers
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: vanilla-055-probe
    resource: sandustry 0.5.5 live session
  - id: live-056
    resource: CDP :9222 0.5.6 session
  - id: bundle-056
    resource: sandustry 0.5.6 simulation-worker.js extract
  - id: official-sandkit
    resource: https://sandustry.com/sandkit.html
---

# Conveyors and launchers

Element transport on structures.
Registration is engine-first, mods also use public `structureBehaviors`.

## `sandkit.api.structureBehaviors` (live)

| Method                                                                                                       | Role                                 |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| `registerConveyorType(structureId, options?)`                                                                | Mark structure as conveyor belt      |
| `registerLauncherType({ upType, leftType, rightType, velocity, softDropVelocity, runTickSharedBufferKey? })` | Register up/left/right launcher trio |

`registerConveyorType` options (types): `transportOffset`, `velocity`, `maxTransportDistance`, `transportHeight`, `runWith` (`'left'|'right'`), `skipQueued`.

## `engine.api.conveyors`

| Method                                      | Role                                                   |
| ------------------------------------------- | ------------------------------------------------------ |
| `registerType(state, structureId, options)` | Same as above, posts `RegisterConveyorType` to workers |

Example (burner belt mod, live pattern):

```js
engine.api.conveyors.registerType(state, id, {
  transportOffset: { x: 0, y: -1 },
  velocity: { x: -config.conveyorDefaultSpeed, y: 0 },
  runWith: "left",
  skipQueued: true,
});
```

`__debug.config.conveyorDefaultSpeed`: `0.05` on this build.

## Worker registration payload (0.5.6 extract)

Renderer `engine.api.conveyors.registerType(state, structureId, options)` posts IPC message **`RegisterConveyorType` (59)** to all simulation workers:

```
postAll(state, [RegisterConveyorType, structureId, options])
```

Worker handler `registerConveyorType(state, structureId, options)`:

| Field | Default / role |
| --- | --- |
| `transportOffset` | `{ x: 0, y: -1 }` |
| `velocity` | optional belt speed vector |
| `maxTransportDistance` | optional cap |
| `transportHeight` | **1** |
| `runWith` | `"left"` or `"right"` — adds type id to worker run list for that direction |
| `skipQueued` | optional — skip queued structures on belt |

Worker stores options in per-type map `L[structureId]` (`getModConveyorOptions`).
Also ensures `session.lookup.conveyorBeltsGroupedByX[*][structureId]` arrays exist and bumps conveyor version.

**CDP blocker:** worker threads are not attachable on `:9222` ([Worker attach](/okf/live/worker-attach.md)).
Payload shape is confirmed from extract only; live worker `evaluate_script` not available.

## Launchers

No public `sandkit.api.launchers`.
Use `structureBehaviors.registerLauncherType` or `engine.api.launchers.registerType`.

Live `state.sandkit.registeredLauncherTypes` (0.5.6 CDP probe):

```js
[
  {
    upType: "launcherUpMk2",
    leftType: "launcherLeftMk2",
    rightType: "launcherRightMk2",
    velocity: {
      up: { x: 0, y: -88.8 },
      left: { x: -88.8, y: -88.8 },
      right: { x: 88.8, y: -88.8 },
    },
    softDropVelocity: {
      up: { x: 0, y: -45 },
      left: { x: -45, y: -45 },
      right: { x: 45, y: -45 },
    },
    runTickSharedBufferKey: "launcherMk2RunTick",
  },
];
```

Details: [Entities: drones and projectiles](/okf/entities/drones-and-projectiles.md).

## Detection

- `sandkit.api.structures.isLauncherAtCell(x, y)` — builtin LauncherUp/Left/Right plus registered launcher types.
- Builtin conveyor cell types also exist in `CellType` (`ConveyorLeft` 19, `ConveyorRight` 20) for terrain grid overlap.

## Shared animation

`shared.conveyorBeltsAnimationIndex` — global belt animation tick (read via state).

## Related

- `store.machineryEngine.runLaunchers` — launcher tick flag on this save: `false`.
- Splitters, droppers, filters: structure types in [Enums](/okf/factory/enums.md) and UI building list.
