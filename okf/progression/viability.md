---
type: Reference
title: Viability
description: Factory tier progression store fields, production points, and factory API reads for the HUD Viability bar.
tags:
  - sandustry
  - okf
  - progression
  - viability
  - factory
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: factory-guide
    resource: /guides/factory.md
---

# Viability

Factory tier progression (HUD **Viability** bar).
No dedicated `sandkit.api.viability` namespace.
Read store fields and factory APIs.

## Store

```ts
store.viability: {
  goldSpent: number,
  level: number,      // current factory tier (1-based)
  peakEnergy: number  // energy milestone for tier gates
}
```

- `store.productionPoints`: main-thread copy of lifetime production tally.
- `store.shared.productionPoints[0]`: worker-synced mirror (Atomics).
- `store.factoryLevelCap`: optional hard cap (live maxed save: `7`).

## Factory reads

Use [Structures and pipes](/okf/factory/structures-and-pipes.md) for `sandkit.api.factory` (`getLevel`, `getProcessCount`, `getProcessRate`) and internal `engine.api.factory` tier math.
Do not duplicate process ids or tier gates here.

Live 0.5.5 sample: `api.factory.getLevel()` = `7`, matches `store.viability.level`.

## HUD

Viability bar and **MAX LEVEL** label: [HUD and overlays](/okf/ui/hud-and-overlays.md).

## Related concepts

- [Store cluster](/okf/progression/store.md) — `viability` and `productionPoints` keys
- [Objectives](/okf/progression/objectives.md) — factory-tier story steps
