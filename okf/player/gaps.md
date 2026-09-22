---
type: Reference
title: Player gaps
description: Open player-domain facts not yet confirmed for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - player
  - gaps
status: draft
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
---

# Player gaps

Still open:

- Live `sandkit.engine.api` coloring probes on Steam CDP (mod bags on `store.mods` documented from `__debug.state`)

Resolved this pass (CDP `:9222`, 0.5.6 extract + live probes):

- Worker-thread `api.player` read helpers — [Player state and API](/okf/player/player.md?id=worker-sandkitapiplayer-read-only)
- `engine.api.tutorialBuild` constraints and `store.mods.tutorialBuild` distinction — [Tutorial](/okf/progression/tutorial.md?id=engine-build-helpers)
- Teleporter `locations[]` — no entry schema in shipping 0.5.6; array unused — [Tools and grabber](/okf/player/tools.md?id=teleporter-item-data-factory-default)

Resolved in this pass (see linked concepts):

- Per-tool runtime bags — [Tools and grabber](/okf/player/tools.md) (`inventory.data`, `session.action.customData`, digger projectiles; not `store.mods.*` for core tools)
- Deck cursor flow in pad mode — [Input](/okf/player/input.md)
- Building preview geometry (no `session.building.ghost`) — [Building mode](/okf/player/building.md)
- Clipboard / copier structure-array schema — [Clipboard](/okf/player/clipboard.md)
- Coloring `floodFillColor` and `store.mods` picker bags — [Coloring](/okf/player/coloring.md)

Documented elsewhere:

- `inventory.hasById` string vs numeric — [Player state and API](/okf/player/player.md)
- `getRegisteredIds()` mix — [Items and hotbar](/okf/player/items.md)
- `abilities[]` matrix for toolbox items — [Item abilities](/okf/player/abilities.md)

## Related concepts

- [Probe](/okf/player/probe.md)
