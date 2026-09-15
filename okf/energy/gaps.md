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

Confirmed absent (not a live-sample gap):

- `energyType` multi-network pools — types-only in SandustryTypes; 0.5.6 bundle and live `mods.energy` registrations have no `energyType` key ([sandkit.api.energy](/okf/energy/api-energy.md))

Documented elsewhere:

- Sender, receiver, and interactable id lists with English names — [Signal structure catalog](/okf/energy/structure-catalog.md)
- `onCharge` / `onConsume` callback argument shapes — [Engine energy](/okf/energy/engine-energy.md)
- `store.mods.signals.links` on-disk shape — [Clipboard signal links](/okf/energy/clipboard.md) (live sample with six buckets)
- `getNetworkAtCell` populated shape — [sandkit.api.energy](/okf/energy/api-energy.md) (engine `{ x, y, type }`; live connector pair on CDP `:9222`)
- `energy.addAtCell` partial-fill return — [sandkit.api.energy](/okf/energy/api-energy.md) (extract `return requested - remaining`)
- Worker-thread energy simulation scope — [Engine energy](/okf/energy/engine-energy.md) (internal engine on sim workers; no public worker API; CDP worker attach blocked)

Documented (CDP `:9222`, 0.5.6 dev-tools save):

- `powerBrick` copier paste blocked by `disallowSelection`; intended path is copper mold + liquid copper — [Engine energy](/okf/energy/engine-energy.md#powerbrick-placement-and-unlock-056-live).
- `FH.structures.build` places `powerBrick`, `goldBattery`, and `electricityConnector` on probe saves when terrain exists under the snap cell.

Heat coupling: [World: grid and elements](/okf/world/grid-and-elements.md).
Signal tool clicks: [UI: HUD and overlays](/okf/ui/hud-and-overlays.md).
