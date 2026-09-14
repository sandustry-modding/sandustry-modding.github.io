---
type: Reference
title: Inventory and items
description: Index for the player guide — position, inventory, items, hotbar, input, camera, grabber, and building session.
tags:
  - sandustry
  - okf
  - player
  - inventory
  - items
  - input
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: player-guide
    resource: /guides/player.md
---

# Inventory and items

## Trigger

Load this concept when your mod moves the player, changes inventory or building unlocks, registers items or hotbar actions, binds input, adjusts camera focus, or drives structure placement from code.[^player-guide]

## Guide outline

The player guide lists main-thread versus worker availability for player-facing namespaces.
It covers world position, velocity, movement mode, and ground contact queries.
It documents inventory and building unlock mutators that prefer public APIs over raw store edits.
It explains item registration, active hotbar slot queries, and definition patches.
It distinguishes the action slot tracker from registered item definitions.
It describes cooldown helpers for ability timing.
It covers grabber tool size and load state.
It documents camera snap, focus, and release.
It walks through custom key bindings, mouse cell position, and synthetic binding triggers.
It explains the building placement session with snap, block checks, and cancel.

## Pointers

- [Official Sandkit API](https://sandustry.com/sandkit.html) — signature truth for runtime shapes.
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md) — how to use generated member pages under `/api/`.
- Generated namespaces named in the guide:
  - [sandkit.api.player](/api/sandkit.api.player.md)
  - [sandkit.api.items](/api/sandkit.api.items.md)
  - [sandkit.api.action](/api/sandkit.api.action.md)
  - [sandkit.api.cooldown](/api/sandkit.api.cooldown.md)
  - [sandkit.api.tools.grabber](/api/sandkit.api.tools.grabber.md)
  - [sandkit.api.camera](/api/sandkit.api.camera.md)
  - [sandkit.api.input](/api/sandkit.api.input.md)
  - [sandkit.api.building](/api/sandkit.api.building.md)

## Detailed concepts

Live 0.5.5 vanilla facts for player probes:

- [Player state and API](/okf/player/player.md) — `store.player`, `api.player`, cooldown, sprite tint
- [Items and hotbar](/okf/player/items.md) — hotbar shape, `api.items`, action vs items
- [Tools and grabber](/okf/player/tools.md) — `api.tools.grabber`
- [Building mode](/okf/player/building.md) — placement session and `api.building`
- [Input](/okf/player/input.md) — keys, mouse, bindings
- [Camera](/okf/player/camera.md) — view center and focus
- [Action](/okf/player/action.md) — active use state
- [Coloring](/okf/player/coloring.md) — engine-only color pickers
- [Clipboard](/okf/player/clipboard.md) — blueprint buffer
- [Session state](/okf/player/state.md) — player-related session keys
- [Player enums](/okf/player/enums.md) — `ItemId`, `KeyBinding`, and related enums
- [Player gaps](/okf/player/gaps.md) — not confirmed yet
- [Player probe](/okf/player/probe.md) — safe read-only MCP rules

## Related domains

- [UI: HUD and overlays](/okf/ui/hud-and-overlays.md) — hotbar UI, HUD updates, and overlay mounts.
- [Factory: structures and pipes](/okf/factory/structures-and-pipes.md) — structure definitions paired with the building session.
- [Engine and workers](/okf/internals/engine-and-workers.md) — worker read-only player position and collision helpers.

## Sources

[^player-guide]: Primary guide — [/guides/player.md](/guides/player.md).
