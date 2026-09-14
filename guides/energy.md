# Energy, signals, and collector

This guide covers public `sandkit.api` helpers for power networks, the global energy pool, signal targets, and collector pickups.
API reference: [sandkit.api.energy](../api/sandkit.api.energy.md).
Official host docs: [Sandkit API 0.5.6](../official-api/0.5.6.md).

## Main thread only

`sandkit.api.energy` and `sandkit.api.collector` run on the main thread.
Do not call them from `workerEntry`.
See [Worker mods](guides/worker-mods.md) for worker-safe APIs.

## Power vs gold

| Resource | Typical use | API surface |
| -------- | ----------- | ----------- |
| Power (energy) | Building costs, batteries, conductor networks | `sandkit.api.energy`, `sandkit.api.resources.updateEnergy` |
| Gold | Selling, economy, collector structures | `sandkit.api.collector` |

Gold is not electrical power.
Collector structures use [factory](guides/factory.md) registration and `sandkit.api.collector` for pickup value.

## Read vs write

**Read** calls inspect state without changing networks or pools.

| Namespace | Read members |
| --------- | ------------ |
| `energy` | `getNetworkAtCell`, `getNetworkFreeCapacityAtCell` |
| `collector` | `getValueFromCellId`, `getValueByType`, `isCellIdCollectable`, `isCellIdCollectableForSprite` |

**Write** calls change stored energy, network contents, or collector state.

| Namespace | Write members |
| --------- | ------------- |
| `energy` | `registerType`, `addAtCell`, `consume`, `consumeExcludingNetworkAtCell` |
| `resources` | `updateEnergy`, `collectFluxiteAtCell` |
| `collector` | `notifyPickupAtCell` |
| `signals` | `targets.register` (handler registration) |

## Energy networks

Register structures with `registerType`.
A **conductor** forwards energy; **storage** holds energy up to optional `capacity`.
Set `energyType` when multiple network kinds share one structure id.

```ts
sandkit.api.energy.registerType("exampleBattery", "storage", {
  capacity: 500,
  energyType: "power",
});
```

`addAtCell` adds energy at a cell and returns the amount actually added.

```ts
const added = sandkit.api.energy.addAtCell(cellX, cellY, 100, {
  energyType: "power",
});
```

`consume` draws from the global energy pool.
When `allOrNothing` is true, the call returns zero unless the full amount is available.

```ts
const spent = sandkit.api.energy.consume(50, { allOrNothing: true });
```

`consumeExcludingNetworkAtCell` spends from every network except the one at the given cell.
`getNetworkAtCell` returns nodes with `x`, `y`, and `type`.

```ts
const network = sandkit.api.energy.getNetworkAtCell(cellX, cellY);
for (const entry of network) {
  useNode(entry.x, entry.y, entry.type);
}
```

`getNetworkFreeCapacityAtCell` returns unused storage in the network at that cell.

Full member list: [sandkit.api.energy](../api/sandkit.api.energy.md).

## Global energy pool

`updateEnergy` changes the player energy store by a delta (negative to spend).
The official runtime name is `adjustEnergy`; types use `updateEnergy`.
Set `deferUi: true` to skip an immediate HUD refresh.

```ts
sandkit.api.resources.updateEnergy(100, { deferUi: true });
sandkit.api.resources.updateEnergy(-25);
```

`collectFluxiteAtCell` handles fluxite collection at a cell.
See [sandkit.api.resources](../api/sandkit.api.resources.md).

## Collector pickups

`sandkit.api.collector` handles value and collectability for gold-bearing cells.
Pair it with structure registration in [factory](guides/factory.md).

```ts
const value = sandkit.api.collector.getValueFromCellId(cellId);
const byType = sandkit.api.collector.getValueByType(elementType);
```

`isCellIdCollectable` and `isCellIdCollectableForSprite` gate pickup and sprite logic.
Call `notifyPickupAtCell` after a pickup at the cell.

```ts
if (sandkit.api.collector.isCellIdCollectable(cellId)) {
  sandkit.api.collector.notifyPickupAtCell(cellX, cellY);
}
```

Member reference: [sandkit.api.collector](../api/sandkit.api.collector.md).

## Signal targets

`sandkit.api.signals.targets` registers handlers when a signal reaches a structure type.

```ts
sandkit.api.signals.targets.register("exampleMachine", (structure, payload) => {
  sandkit.api.structures.processing.setEnabledAtCell(
    structure.x,
    structure.y,
    payload.combined,
  );
});
```

The handler receives `structure` and `SignalTargetPayloadV1` (`combined`, `inputCount`, `onCount` in the [official API](../official-api/0.5.6.md)).
Sender and interactable helpers exist in the official docs but are not in the published type declarations yet.

## Related

- [sandkit.api.energy](../api/sandkit.api.energy.md) — network registration, add, consume, query
- [sandkit.api.resources](../api/sandkit.api.resources.md) — `updateEnergy`, `collectFluxiteAtCell`
- [sandkit.api.collector](../api/sandkit.api.collector.md) — collector value and pickup helpers
- [sandkit.api.signals](../api/sandkit.api.signals.md) — signal target registration
- [factory](guides/factory.md) — collector and other structure registration
- [Worker mods](guides/worker-mods.md) — thread boundaries for mod scripts
- [Official Sandkit API](https://sandustry.com/sandkit.html) — host runtime reference
