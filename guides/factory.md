# Factory and structures

Structures, pipes, machines, and factory progression live under `sandkit.api` on the main thread.
Use this page to pick the right namespace before you open member docs.

API reference: [sandkit.api.structures](../api/sandkit.api.structures.md).

## Query vs mutate

Most factory APIs fall into two groups.

**Query** helpers read the live map.
They do not change the world.
Examples: `structures.getAtCell`, `pipes.isAtCell`, `factory.getLevel`, `authorization.canBuildAtCell`.

**Mutate** helpers register definitions, place or remove structures, or change per-cell state.
Examples: `structures.register`, `structures.buildAtCell`, `structures.updateData`, `structures.processing.setEnabledAtCell`.

On the main thread, `structures.buildAtCell` and `structures.removeAtCell` defer writes until the sim is idle.
Prefer hooks such as `building:place` when you need to react to player placement instead of forcing builds yourself.

## Structure definitions vs the world map

Register a structure **definition** once at mod load.
The game uses it for the build menu, placement rules, and rendering.

```ts
/// <reference types="@sandustry-modding/types" />

sandkit.api.structures.register({
  id: "exampleSorter",
  nameKey: "structures|exampleSorter|name",
  categoryKey: "logistics",
  render: { imageName: "exampleSorter", size: { width: 16, height: 16 } },
});
```

**World map** helpers work on built instances.
Resolve a cell, iterate a type, or patch instance `data`:

```ts
const structure = sandkit.api.structures.getAtCell(cellX, cellY);
if (structure) {
  sandkit.api.structures.updateData(structure, { channel: 2 });
}
```

`structures.getDefinitionByType`, `structures.getAvailableTypes`, and `structures.isLockedByType` bridge menu state and the map.
Workers share lookup and mutation helpers via [sandkit.api.structures (worker)](../api/sandkit.api.structures.worker.md).
Registration and deferred build/remove calls are main-thread only.

## Building and placement

Player-driven placement uses the **building session** namespace, not structure registration.
`building.selectStructure` starts a preview.
`building.isBlockedAtCell` and `building.getSnappedPositionAtCell` support placement UI logic.
`building.cancelPlacement` ends the session.

```ts
sandkit.api.building.selectStructure("exampleSorter");
```

Built-in conveyor and pipe ids live on [building.StructureType](../api/sandkit.api.building.StructureType.md).
Player input and hotbar flow: [Player guide](guides/player.md).
API: [sandkit.api.building](../api/sandkit.api.building.md).

`structures.registerPlacementConfig` adds hotbar fields (channel, mode, and similar) stored on each placed instance.

## Authorization

Authorization zones gate where the player may build, grab, or use tools.
`authorization.canBuildAtCell`, `canGrabAtCell`, and `canUseToolAtCell` answer permission checks at a cell.
`authorization.getZoneIdAtCell` and `getPlayerZoneId` return the active zone.
Main thread only — [sandkit.api.authorization](../api/sandkit.api.authorization.md).

## Pipes

Pipe helpers query fluid tiles and toggle flow at a cell.

```ts
if (sandkit.api.pipes.isAtCell(cellX, cellY)) {
  sandkit.api.pipes.setEnabledAtCell(cellX, cellY, false);
}
```

`pipes.getConnectedVentsAtCell` returns vent positions linked to a pipe segment.
API: [sandkit.api.pipes](../api/sandkit.api.pipes.md).

## Recipes and processing

Vanilla machines use **recipes** registered at load time.
You can register through `structures.recipes.register` (machine id plus recipe shape) or the top-level [sandkit.api.processing](../api/sandkit.api.processing.md) helpers (`registerGrower`, `registerShaker`, `registerKineticPress`).

Custom tick logic uses `structures.processing.register`.
The callback receives a structure instance and a context with grid queries and `commit` for batched mutations.

**Processing enablement** is separate from recipe registration.
`structures.processing.isEnabledAtCell` reads whether a machine runs at a cell.
`structures.processing.setEnabledAtCell` turns processing on or off (for example when a signal disables a line).

Worker threads expose `structures.processing.isEnabledAtCell` only.
Registration and `setEnabledAtCell` stay on the main thread.
See [sandkit.api.structures.processing](../api/sandkit.api.structures.processing.md) and [structures.recipes](../api/sandkit.api.structures.recipes.md).

## Factory level

Factory **viability** tier and process counters are read-only through `sandkit.api.factory`.

```ts
const level = sandkit.api.factory.getLevel();
const shaken = sandkit.api.factory.getProcessCount("shakeWetSand");
```

Process ids: `shakeWetSand`, `pressBurntResidue`, `growFlowers`, `condenseFlorin`.
Use `getProcessRate` for the current completion rate of each process.
Tier unlock writers live on `sandkit.engine.api.factory`; prefer the public getters above when they are enough.
API: [sandkit.api.factory](../api/sandkit.api.factory.md).

## Blueprints

`blueprints.serializeStructures` turns live instances into portable records.
`blueprints.localizeStructures` resolves ids before paste in another world.
API: [sandkit.api.blueprints](../api/sandkit.api.blueprints.md).

## Structure behaviors

Conveyors and launchers need physics hooks beyond a static definition.
`structureBehaviors.registerConveyorType` wires transport for a structure id.
`structureBehaviors.registerLauncherType` registers up, left, and right launcher variants together.

```ts
sandkit.api.structureBehaviors.registerConveyorType("exampleBelt", {
  runWith: "right",
});
```

API: [sandkit.api.structureBehaviors](../api/sandkit.api.structureBehaviors.md).

## Main vs worker

| Area | Main (`sandkit.api`) | Worker (`WorkerSandkitApi`) |
| ---- | -------------------- | --------------------------- |
| Structure lookup / `updateData` | Yes | Yes — [worker structures](../api/sandkit.api.structures.worker.md) |
| `register`, `buildAtCell`, `removeAtCell` | Yes | No |
| `building`, `authorization`, `pipes`, `factory`, `blueprints` | Yes | No |
| `structures.processing.register`, `setEnabledAtCell` | Yes | No |
| `structures.processing.isEnabledAtCell` | Yes | Yes — [worker processing](../api/sandkit.api.structures.processing.worker.md) |
| `structureBehaviors`, `processing` recipes | Yes (load time) | No |

See [Worker mods](guides/worker-mods.md) for typing and bundle workflow.

## Related

- [sandkit.api.structures](../api/sandkit.api.structures.md) — definitions, placement, build/remove, recipes
- [Worker mods](guides/worker-mods.md) — simulation worker entry and shared buffers
- [Player guide](guides/player.md) — hotbar, placement session, and input
- [Search](../search.md) — browse all Sandkit namespaces
- [Official Sandkit API](https://sandustry.com/sandkit.html) — host API from the game
