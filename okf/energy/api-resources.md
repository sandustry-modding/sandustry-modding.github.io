---
type: Reference
title: sandkit.api.resources (energy)
description: Global energy pool helpers on sandkit.api.resources — adjustEnergy, deprecated updateEnergy alias, and HUD sync.
tags:
  - sandustry
  - okf
  - energy
  - api
  - resources
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: energy-guide
    resource: /guides/energy.md
  - id: sandkit-api-resources
    resource: /api/sandkit.api.resources.md
---

# sandkit.api.resources (energy)

Fluxite is out of scope.
Energy-related methods only.

Live keys for Early Access 0.5.5.

| Method | Role |
| --- | --- |
| `adjustEnergy(amount, options?)` | Delta on the global pool. Syncs `shared.energy[0]` when the SAB exists. `deferUi: true` skips immediate HUD refresh. |
| `updateEnergy(amount, options?)` | **Deprecated alias** of `adjustEnergy`. |
| `refresh(resourceId)` | Refresh a resource display (not energy-specific). |
| `collectFluxiteAtCell` | Not energy — ignore unless the user asks about fluxite. |

Prefer `sandkit.api.energy.consume` and `addAtCell` for network logic.
Use `adjustEnergy` for direct pool changes.

HUD **Energy** row reads `store.resources.energy` (mirrors `shared.energy[0]`).
See [HUD and overlays](/okf/ui/hud-and-overlays.md).

## Pointers

- [Official Sandkit API](https://sandustry.com/sandkit.html) — signature truth for runtime shapes.
- [sandkit.api.resources](/api/sandkit.api.resources.md) — generated member page.
- [Shared state](/okf/energy/shared-state.md) — `shared.energy` SAB layout.
