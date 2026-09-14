---
type: Reference
title: Energy and signals gaps
description: Open questions and unconfirmed runtime details for energy networks, signals, and worker simulation.
tags:
  - sandustry
  - okf
  - energy
  - signals
  - gaps
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: energy-guide
    resource: /guides/energy.md
---

# Gaps

Still open:

- Vanilla sender and target structure id lists (counts only: **17** senders, **12** receivers, **5** interactables)
- `energyType` multi-network example on a live save
- `energy.addAtCell` return when the network is partially full (do not call in probes unless the user asks)
- `getNetworkAtCell` populated entry shape (HTML: `{ cellX, cellY, type }`; this save had no energy structures)
- Worker-thread energy simulation
- Per-structure engine `onCharge` and `onConsume` args
- On-disk encoding for `store.mods.signals.links`

Heat coupling: [World: grid and elements](/okf/world/grid-and-elements.md).
Signal tool clicks: [UI: HUD and overlays](/okf/ui/hud-and-overlays.md).
