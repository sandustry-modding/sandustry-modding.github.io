---
type: Reference
title: Factory gaps
description: Factory-domain facts not yet confirmed on the 0.5.5 probe save.
tags:
  - sandustry
  - okf
  - factory
  - gaps
status: draft
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: vanilla-055-probe
    resource: sandustry 0.5.5 live session
---

# Gaps

Still open (need a save with the feature placed, or a worker attach):

- `store.pipes` / `pumpsCache` instance dumps (this save: pipes length **0**, pumpsCache `[]`)
- `pipes.isEnabledAtCell` / `getConnectedVentsAtCell` on a real pipe network
- Non-zero `shared.authorization.data` zones (this save: all sampled cells **0**)
- Full weighted refinery recipe tables per machine id
- `structures.registerPlacementConfig` live field schemas
- `engine.api.structures.getConfig` return shape
- Worker-thread structure mutations / conveyor register payloads
- Thermal machine tick internals beyond `recordProcess`
- Public placement clearance preview (`getClearanceAtCell` is not on `sandkit.api`)
- Complete mod structure id catalog (UI list in [UI: HUD and overlays](/okf/ui/hud-and-overlays.md))

`store.queue` empty on this save is expected (len 0), not a missing API.
