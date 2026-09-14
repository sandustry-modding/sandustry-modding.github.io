---
type: Reference
title: Player probe
description: Short read-only probe rules for live player, items, tools, building, input, camera, and action objects.
tags:
  - sandustry
  - okf
  - player
  - probe
  - mcp
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
---

# Player probe

Read-only inspection of live player objects.
Return JSON-serializable data only.

## Access

```js
const sk = typeof sandkit !== "undefined" ? sandkit : globalThis.sandkit;
const api = sk.api;
const state = sk.state ?? sk.engine?.state ?? globalThis.__debug?.state;
const eng = sk.engine.api;
```

`sandkit` is ambient in MCP `evaluate_script` scope during play (not always `window.sandkit`).

## Safe reads

- `Object.keys` on `sandkit.api.player`, `tools`, `building`, `input`, `camera`, `action`, `items`.
- Field reads on `state.store.player`, `state.session.{camera,input,building,action,construction,cheat}`.
- Sync getters: `api.player.getPositionAtWorld()`, `api.player.isOnGround()`, `api.tools.grabber.getSize()`, `api.action.getActive()`, `api.input.getMousePositionAtCell()`, `api.items.getRegisteredIds()`, `eng.clipboard.get()`, `eng.coloringTool.getColor(state)`.
- Enum objects: `sandkit.enums.{BuildMode,ActionType,ActionState,KeyBinding,ItemId,ItemType,AbilityType}`.

## Unsafe (needs user ask)

- Player, camera, building, input, action, items, and grabber **mutators**.
- Cooldown `start`, clipboard `set` / `activate`, and coloring `setColor` / `togglePaintBucketMode`.
- `__debug.moveCamera` and `session.cheat.bypassCosts` writes.

Done when API key lists and samples match the concept files (or the gap is logged in [Gaps](/okf/player/gaps.md)).

## Related concepts

- [Session state](/okf/player/state.md)
- [Gaps](/okf/player/gaps.md)
