# Entities, drones, and world objects

This page covers live world objects: creatures and mod entities, drones, projectiles, and pickups.
Use public `sandkit.api` namespaces on the main thread.
Official signatures: [Sandkit API](https://sandustry.com/sandkit.html).

These namespaces are not on `WorkerSandkitApi`.
Use worker hooks for grid and element logic instead.
See [Worker mods](guides/worker-mods.md).

## Entities

`sandkit.api.entities` manages critters and other registered entity types.
Positions are in world pixels.

| Method | Role |
| --- | --- |
| `getById(entityId)` | One live instance by runtime id. |
| `getAllByType(entityTypeId)` | All instances of one string type id. |
| `spawnAtWorld(entityTypeId, worldX, worldY)` | Spawn at a position. |
| `remove(entityId)` | Remove from the world. |
| `launch(entityId, angleRadians, speed?)` | Launch with angle and optional speed. |
| `startCapture(entityId)` | Start capture (for example corraller vacuum). |
| `collect(entityId)` | Force collect into inventory or storage. |

Each `Entity` has `id`, `x`, `y`, and optional `targetX` / `targetY`.
Extra fields depend on the type.

Query by known type ids:

```ts
const shinelets = sandkit.api.entities.getAllByType("shinelet");
const one = shinelets[0];
if (one) {
  const byId = sandkit.api.entities.getById(one.id);
}
```

Spawn and launch only when your mod owns that behavior.
Test in a save copy first.

API reference: [sandkit.api.entities](../api/sandkit.api.entities.md).

## Drones

Hauler and sweeper drones have no public `sandkit.api` namespace.
The game exposes them through internal `sandkit.engine.api.drones`.

| Method | Role |
| --- | --- |
| `spawn(...)` | Spawn a drone (internal). |
| `kill(...)` | Remove one or more drones (internal). |

Engine methods take game state as the first argument.
Prefer hooks and factory APIs when they fit your mod.
Do not call `engine.api.drones` from normal mod code unless you accept breakage across game updates.

## Projectiles

`sandkit.api.projectiles` registers mod projectile types and spawns shots.

| Method | Role |
| --- | --- |
| `register(definition)` | Register a mod projectile definition. |
| `getDefinitionById(projectileId)` | Look up a registered definition. |
| `createBlueprintFromId(projectileId)` | Build a spawn blueprint. |
| `getAll()` | All active projectiles. |
| `getById(projectileId)` | One projectile by runtime id. |
| `remove(projectile)` | Remove a projectile instance. |
| `spawnAtWorld(worldX, worldY, angle, blueprint)` | Spawn at position and angle. |

Register once at load.
Spawn with a blueprint from your registered id:

```ts
sandkit.api.projectiles.register({
  id: "my-mod:spark",
  sprite: { id: "bullet" },
  getOptions: () => ({ speed: 12 }),
});

const blueprint = sandkit.api.projectiles.createBlueprintFromId("my-mod:spark");
sandkit.api.projectiles.spawnAtWorld(playerX, playerY, 0, blueprint);
```

Each `Projectile` has `id`, `x`, and `y`.

API reference: [sandkit.api.projectiles](../api/sandkit.api.projectiles.md).

## Pickups and world items

`sandkit.api.pickups` spawns and collects interactable world items.
The instance type is `WorldItem`.

`PickupType` enum values:

| Value | Name |
| --- | --- |
| `1` | `Artifact` |
| `2` | `GlyphKey` |
| `3` | `Stratacore` |
| `4` | `Orb` |

| Method | Role |
| --- | --- |
| `spawnAtWorld(type, worldX, worldY, data?, light?)` | Spawn a pickup. |
| `remove(pickup)` | Remove from the world. |
| `pickUp(pickup)` | Collect into inventory. Returns true on success. |
| `getAll()` | All active pickups. |
| `getById(pickupId)` | One pickup by runtime id. |

Optional `WorldItemLight` sets `brightness`, `size`, and `color` on a point light at spawn.
`destroy` is deprecated; use `remove`.

```ts
/// <reference types="@sandustry-modding/types" />

const item = sandkit.api.pickups.spawnAtWorld(
  sandkit.enums.PickupType.Artifact,
  worldX,
  worldY,
  { custom: true },
);

sandkit.api.pickups.pickUp(item);
```

API reference: [sandkit.api.pickups](../api/sandkit.api.pickups.md).

## Portals and teleport

There is no public `sandkit.api` namespace for portals or teleport zones.
Those live on internal `sandkit.engine.api.portals` and `sandkit.engine.api.teleportZones`.
Treat engine teleport helpers as unstable.

Public surfaces you can use instead:

- `sandkit.api.player.teleportToGround()` — move the player to solid ground.
- `sandkit.api.hooks.intercept("teleport:effect:create", …)` — change teleport visual effects.
- `sandkit.api.elements.teleportBetweenCells(...)` — move an element between grid cells (not the player).

For player movement mods, prefer player and hook APIs over engine zone management.

## Related

- [sandkit.api.entities](../api/sandkit.api.entities.md)
- [sandkit.api.projectiles](../api/sandkit.api.projectiles.md)
- [sandkit.api.pickups](../api/sandkit.api.pickups.md)
- [sandkit.api.player](../api/sandkit.api.player.md)
- [sandkit.api.hooks](../api/sandkit.api.hooks.md)
- [Worker mods](guides/worker-mods.md)
- [Official Sandkit API](https://sandustry.com/sandkit.html)
