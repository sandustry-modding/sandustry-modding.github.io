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

- Per-tool runtime bags (dig radius, Copier source, Digger recall, Teleporter targets, Hauler route)
- Deck (`session.input.mode !== "kbm"`) cursor flow
- Worker-thread `api.player` helpers
- Full `abilities[].attributes` matrix per `ItemId`
- Structure ghost and clearance preview geometry
- `engine.api.tutorialBuild` constraints
- Coloring `floodFillColor` limits
- Clipboard `set` and `activate` structure-array schema

Documented elsewhere:

- `inventory.hasById` string vs numeric — [Player state and API](/okf/player/player.md)
- `getRegisteredIds()` mix — [Items and hotbar](/okf/player/items.md)

## Related concepts

- [Probe](/okf/player/probe.md)
