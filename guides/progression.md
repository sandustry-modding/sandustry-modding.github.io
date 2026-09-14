# Tech, upgrades, and progression

Sandustry gates content through the Research tree, tool upgrades, the discovery log, and story steps.
Mod code registers new entries and reads or sets player state through `sandkit.api` on the main thread.

Prefer these public APIs over bundle patches.
See [The mod lifecycle](guides/mod-lifecycle.md) for load timing.

## Tech tree

`sandkit.api.tech` defines nodes, checks lock and research state, and wires unlocks.

Register a standalone tech entry:

```ts
sandkit.api.tech.registerDefinition("exampleTech", {
  nameKey: "mods|example|techName",
  descriptionKey: "mods|example|techDescription",
  cost: 100,
  unlocks: { structures: ["exampleMachine"] },
});
```

Place a node on the grid with a parent:

```ts
sandkit.api.tech.registerNode("exampleTech", definition, {
  parentId: sandkit.enums.Tech.Conveyors,
});
```

Query or change state:

```ts
sandkit.api.tech.isLockedById("exampleTech");
sandkit.api.tech.isResearchedById("exampleTech");
sandkit.api.tech.setLockedById("exampleTech", false);
```

Use `getDefinitionById` and `updateDefinition` to read or patch an existing entry.
`addDefinition` is deprecated; call `registerDefinition` instead.

Built-in tech ids autocomplete through [`sandkit.enums.Tech`](../api/sandkit.enums.Tech.md).
Custom mods use string ids.

Listen for purchases with `sandkit.api.events.on("tech:unlocked", handler)`.
Full member list: [sandkit.api.tech](../api/sandkit.api.tech.md).

## Upgrades

`sandkit.api.upgrades` adds Management-tab upgrade rows for items such as tools and drones.

Register a category, then an upgrade definition:

```ts
sandkit.api.upgrades.registerCategory({ id: "example", nameKey: "mods|example|category" });

sandkit.api.upgrades.register({
  itemId: "grabber",
  categoryId: "example",
  upgrade: {
    id: "range",
    nameKey: "mods|example|rangeName",
    maxLevel: 3,
    costs: [50, 100, 200],
  },
});
```

Read or set the purchased level:

```ts
sandkit.api.upgrades.getLevelById("grabber", "range");
sandkit.api.upgrades.getAvailableLevelById("grabber", "range");
sandkit.api.upgrades.setLevelById("grabber", "range", 2);
```

Use `updateDefinition` to patch costs or level caps after registration.
Details: [sandkit.api.upgrades](../api/sandkit.api.upgrades.md).

## Discoveries

`sandkit.api.discoveries` marks element and terrain types in the player discovery log.
Main thread only.

```ts
sandkit.api.discoveries.addElementByType(sandkit.enums.ElementType.Gold);
sandkit.api.discoveries.addTerrainByType(myTerrainType);
```

Details: [sandkit.api.discoveries](../api/sandkit.api.discoveries.md).

## Story progression

`sandkit.api.progression.complete` marks a tutorial or objective step done.
It returns `true` when the game accepts the request.

```ts
const done = sandkit.api.progression.complete({
  domain: "objective",
  id: "all",
});
```

The request shape includes a required `id` string and optional extra fields.
Confirm objective ids in your target save before you call this in release mods.

Details: [sandkit.api.progression](../api/sandkit.api.progression.md).

## Conservatory rewards

Conservatory nodes are tech entries that spend tickets and unlock structures or items.
Append extra unlocks to a built-in or mod reward node:

```ts
sandkit.api.tech.conservatory.appendUnlock(sandkit.enums.Tech.SignalDevices, {
  structures: ["exampleSensor"],
});
```

Ticket balance and creature counts live in save state, not in a separate Sandkit namespace.
Details: [sandkit.api.tech.conservatory](../api/sandkit.api.tech.conservatory.md).

## Tutorial and objectives

There is no `sandkit.api.tutorial` or `sandkit.api.objectives` namespace.
Use `progression.complete` for scripted completion when the game exposes a matching step id.
Use hooks for read-only reactions:

```ts
sandkit.api.events.on("tutorial:stepChanged", ({ step }) => { /* ... */ });
sandkit.api.events.on("tutorial:completed", ({ skipped }) => { /* ... */ });
```

Tutorial build placement checks live under `sandkit.engine.api.tutorialBuild`, not `sandkit.api`.
See [sandkit.engine.api.tutorialBuild](../api/sandkit.engine.api.tutorialBuild.md) only when you must integrate with vanilla build steps.

## Factory tier and viability

Factory tier, production points, and viability bars are factory progression, not Research.
See [Factory and structures](guides/factory.md?id=factory-level) for `sandkit.api.factory`.

## Related

- [sandkit.api.tech](../api/sandkit.api.tech.md)
- [sandkit.api.upgrades](../api/sandkit.api.upgrades.md)
- [sandkit.api.discoveries](../api/sandkit.api.discoveries.md)
- [sandkit.api.progression](../api/sandkit.api.progression.md)
- [sandkit.enums.Tech](../api/sandkit.enums.Tech.md)
- [sandkit.api.events](../api/sandkit.api.events.md)
- [Factory and structures](guides/factory.md)
