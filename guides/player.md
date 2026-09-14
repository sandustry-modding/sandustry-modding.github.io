# Player, inventory, and input

This page covers main-thread Sandkit APIs for the player body, hotbar, tools, camera, input, and structure placement.
Use it from `main.js` when your mod reads or changes player state.

API reference: [sandkit.api.player](../api/sandkit.api.player.md).
Hotbar UI and HUD overlays are in [UI guide](guides/ui.md).

## Main thread vs worker

Simulation runs in workers.
Player-facing helpers run on the main thread only.

| Namespace | Thread |
| --------- | ------ |
| `player` inventory, unlocks, teleport, and movement setters | Main |
| `player` position and collision queries | Main and worker |
| `items`, `action`, `cooldown`, `camera`, `input`, `building` | Main |

Workers expose read-only position and collision helpers only.
See [Worker mods](guides/worker-mods.md).

## Player position and movement

```ts
const { x, y } = sandkit.api.player.getPositionAtWorld();

sandkit.api.player.setPositionAtWorld(x, y + 32);
sandkit.api.player.setVelocity(0, -120);
sandkit.api.player.setMovementSpeedMultiplier(1);
sandkit.api.player.setMovementMode("normal");
```

Use `isOnGround()` for ground contact.
The `store.player.onGround` snapshot is not updated during play.

`isCollidingWithCell`, `isWithinRadiusOfCell`, and `isPositionClearAtWorld` test grid overlap and fit.
`teleportToGround()` moves the player down until solid ground is found.

## Inventory and building unlocks

```ts
sandkit.api.player.inventory.addById("exampleTool");
sandkit.api.player.buildings.unlockById("exampleStructure");
sandkit.api.player.buildings.removeById("exampleStructure");
```

These mutate save state.
Prefer them over editing `store.player` directly.

## Items and hotbar

`sandkit.api.items` registers mod items and queries the active hotbar slot.

```ts
sandkit.api.items.register({
  id: "exampleTool",
  name: "Example Tool",
  handleAction(state, action) { /* use logic */ },
});

const active = sandkit.api.items.getActive();
sandkit.api.items.isActiveById("shovel", 1);
sandkit.api.items.createFromId("exampleTool");
```

`getActive()` returns a registered item definition or `undefined` for structure blueprint slots.
`getDefinitionById(itemId)` and `updateDefinition(itemId, partial)` read or patch registered definitions.

## Action slot vs item definition

`sandkit.api.action` tracks the hotbar slot the player is using.

```ts
const using = sandkit.api.action.getActive();
const selected = sandkit.api.action.getSelected();
sandkit.api.action.setCustomData({ mode: "paint" });
```

`getActive()` and `getSelected()` return `{ id, type }` for any slot type.
Structure slots leave `items.getActive()` as `undefined`.

## Cooldowns

```ts
const digCooldown = { last: 0, time: 500 };

if (sandkit.api.cooldown.check(digCooldown)) {
  // ability fired
}
```

`check` starts the timer when ready and returns `true`.
`isReady` returns `true` when the duration has elapsed.

## Grabber tool

```ts
sandkit.api.tools.grabber.setSize(3);
sandkit.api.tools.grabber.getSize();
sandkit.api.tools.grabber.isActive();
sandkit.api.tools.grabber.isLoaded();
```

`setSize` and `getSize` use cell radius.
`isLoaded` is `true` when the grabber buffer holds elements.

## Camera

```ts
sandkit.api.camera.snapToPlayer();
sandkit.api.camera.setFocusAtWorld(worldX, worldY);
sandkit.api.camera.releaseFocus({ durationMs: 250 });
```

`setFocusAtWorld` and `releaseFocus` return `true` when the operation succeeds.

## Input and bindings

```ts
sandkit.api.input.registerBinding("ExampleToggle", ["KeyO"], {
  displayName: "Toggle example",
  category: "Mods",
  handlers: { down: () => toggleExample() },
});

sandkit.api.input.getMouseCellPosition();
sandkit.api.input.getBoundKeys("ExampleToggle");
sandkit.api.input.getDisplayKey("ExampleToggle", "?");
sandkit.api.input.isCtrlHeld();
sandkit.api.input.isAltHeld();
```

`getMouseCellPosition` returns the cell under the cursor.
`triggerBinding`, `pressBinding`, `releaseBinding`, and `resetMouseState` fire handlers without hardware input.

## Structure placement session

`sandkit.api.building` drives the placement preview and selection.

```ts
sandkit.api.building.selectStructure(
  sandkit.api.building.StructureType.Foundation,
);
sandkit.api.building.getSnappedPositionAtCell(cellX, cellY);
sandkit.api.building.isBlockedAtCell(cellX, cellY);
sandkit.api.building.cancelPlacement();
```

`selectStructure` accepts `StructureType` or a registered structure id and returns the selection or `null`.
`getSnappedPositionAtCell` returns snapped world pixels.
`isBlockedAtCell` is `true` when placement is blocked.

## Related

- [UI guide](guides/ui.md) — HUD, hotbar clicks, and overlays
- [Worker mods](guides/worker-mods.md) — simulation worker entry
- [sandkit.api.player](../api/sandkit.api.player.md) — position, inventory, unlocks
- [sandkit.api.items](../api/sandkit.api.items.md) — item registration
- [sandkit.api.building](../api/sandkit.api.building.md) — placement helpers
