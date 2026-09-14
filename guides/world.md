# World simulation

Sandustry simulates sand, liquids, terrain, and world items on a fixed cell grid.
Mods read and change that grid through `sandkit.api` namespaces on the main thread or in simulation workers.

## Cells, elements, and terrain

Each grid cell stores a packed **cell id** for empty space, solid **terrain**, or a falling **element**.

Inspect cells with `grid.isCellEmptyAtCell`, `grid.isTerrainAtCell`, `elements.getTypeAtCell`, and `terrains.getTypeAtCell`.
Elements carry matter categories (solid, liquid, gas, powder, and others) on their definition.
Terrains carry hit points, excavation rules, and optional drops when destroyed.

API: [sandkit.api.grid](../api/sandkit.api.grid.md), [sandkit.api.elements](../api/sandkit.api.elements.md), [sandkit.api.terrains](../api/sandkit.api.terrains.md).

## Grid queries and iteration

`sandkit.api.grid` covers grid size, reads, fog, redraw, and area scans.

```ts
/// <reference types="@sandustry-modding/types" />

const { widthCells, heightCells } = sandkit.api.grid.getDimensions();

sandkit.api.grid.forEachCellInRectangle(cellX, cellY, 5, 5, (x, y) => {
  if (sandkit.api.elements.isTypeAtCell(x, y, "water")) {
    sandkit.api.grid.reportActivityAtCell(x, y);
  }
});
```

Main thread only: `mutate`, `revealFogAtCell`, `redrawAroundCell`, `forEachCellInCircle`, and `forEachCellInRectangle`.
Workers expose reads, `reportActivityAtCell`, `excavateAtCell`, and `getDimensions` — see [sandkit.api.grid (worker)](../api/sandkit.api.grid.worker.md).

## Deferred mutations with `grid.mutate`

On the main thread, direct `elements.createAtCell` and `terrains.replaceAtCell` calls are **deferred**.
Reads in the same frame still see the old grid until mutations apply.

`grid.mutate` batches writes through a **writer** with `writer.elements` and `writer.terrains`.
Each side exposes `createAtCell`, `replaceAtCell`, and `removeAtCell`.

```ts
/// <reference types="@sandustry-modding/types" />

sandkit.api.grid.mutate((writer) => {
  if (sandkit.api.terrains.isTypeAtCell(cellX, cellY, "ice")) {
    writer.elements.replaceAtCell(cellX, cellY, "water");
    writer.terrains.removeAtCell(cellX, cellY);
  }
});
```

Details: [grid.mutate](../api/sandkit.api.grid.md?id=mutate).
In worker code, call `elements.createAtCell` and terrain helpers directly — mutations apply immediately.

## Registering elements and terrain

Register custom content on the main thread with `elements.register` and `terrains.register`.
Resolve ids with `getTypeById` / `getIdByType`, patch with `updateDefinition`, and add tooltips with `elements.addInteractionInfo`.

## Maps and session start

`sandkit.api.maps.getActive()` returns the active custom map (main and workers).
Main thread also has `getAvailable()`, `start(mapId)`, and `getArtifactLocations()`.

See [sandkit.api.maps](../api/sandkit.api.maps.md) and [sandkit.api.maps (worker)](../api/sandkit.api.maps.worker.md).

## World pickups

Pickups are world items with pixel positions, separate from grid cells.

```ts
/// <reference types="@sandustry-modding/types" />

const pickup = sandkit.api.pickups.spawnAtWorld(
  sandkit.enums.PickupType.Orb,
  worldX,
  worldY,
);
```

Also: `pickUp`, `remove`, `getAll`, and `getById`.
API: [sandkit.api.pickups](../api/sandkit.api.pickups.md).

## Contact reactions

`sandkit.api.reactions.registerContact` registers pairwise element recipes when two types touch.
Pass `inputA`, `inputB`, `outputA`, `outputB`, and optional `orientation`.

API: [sandkit.api.reactions](../api/sandkit.api.reactions.md).

## Excavation, patterns, and digging

| API | Role |
| --- | --- |
| [sandkit.api.excavation](../api/sandkit.api.excavation.md) | Named dig profiles via `registerProfile` |
| [sandkit.api.patterns](../api/sandkit.api.patterns.md) | Pattern matrices with `createCircle` and `excavateAtCell` |
| [sandkit.api.grid](../api/sandkit.api.grid.md) | Single-cell dig with `excavateAtCell` |

Use `hooks.modify("excavation:prepare", …)` on the main thread to swap profiles for a tool or projectile.

## Fire and raycast

`sandkit.api.fire.canBurnElementAtCell` and `burnElementAtCell` handle ignition.
Main-thread burns are deferred; workers burn immediately — [sandkit.api.fire (worker)](../api/sandkit.api.fire.worker.md).

`sandkit.api.raycast.castFromWorld` traces a ray in world pixels and returns a hit or `null`.
API: [sandkit.api.raycast](../api/sandkit.api.raycast.md).

## Deprecated `sandkit.api.world`

`sandkit.api.world` is a deprecated alias for grid-related helpers and nested pickups.
Use [sandkit.api.grid](../api/sandkit.api.grid.md) and [sandkit.api.pickups](../api/sandkit.api.pickups.md) instead.
Replace `world.runWhenSimulationIdle` with [grid.mutate](../api/sandkit.api.grid.md?id=mutate).

## Simulation workers

Element updates and other sim-side logic run in worker threads.
Mods that hook that behavior need `workerEntry` and worker-scoped APIs.

```ts
/// <reference types="@sandustry-modding/types" />

const api = sandkit.api as unknown as WorkerSandkitApi;

api.hooks.intercept("element:update", handleUpdate, {
  guard: { elementType: api.elements.getTypeById("exampleMod.examplePowder") },
});
```

Read [Worker mods](guides/worker-mods.md) before you add worker hooks.
Worker mutations: [sandkit.api.elements (worker)](../api/sandkit.api.elements.worker.md), [sandkit.api.terrains (worker)](../api/sandkit.api.terrains.worker.md).

## Related

- [Worker mods](guides/worker-mods.md) — `workerEntry` and `WorkerSandkitApi`
- [The mod lifecycle](guides/mod-lifecycle.md) — when main and worker scripts run
- [sandkit.api.grid](../api/sandkit.api.grid.md) — grid reads, `mutate`, fog, and iteration
- [Search](../types/search.md) — browse all Sandkit namespaces
