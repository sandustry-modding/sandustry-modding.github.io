---
type: Reference
title: Pipes and fluids
description: Pipe segments, pump cache, fluid API methods, and placement rules on vanilla 0.5.5.
tags:
  - sandustry
  - okf
  - factory
  - pipes
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: vanilla-055-probe
    resource: sandustry 0.5.5 live session
  - id: live-056
    resource: CDP :9222 0.5.6 dev-tools save
  - id: bundle-056
    resource: sandustry 0.5.6 bundle.js extract
  - id: official-sandkit
    resource: https://sandustry.com/sandkit.html
---

# Pipes and fluids

Fluid transport structures are split from the main structure list.

## `sandkit.api.pipes` (public, 0.5.5)

| Method                                    | Role                                    |
| ----------------------------------------- | --------------------------------------- |
| `isAtCell(cellX, cellY)`                  | Pipe segment at cell                    |
| `isEnabledAtCell(cellX, cellY)`           | Pipe flow enabled at cell               |
| `getConnectedVentsAtCell(cellX, cellY)`   | Connected liquid vents (`[]` when none) |
| `setEnabledAtCell(cellX, cellY, enabled)` | **mutate** — do not call in probes      |

Live on structure cell with no pipe: `isAtCell` / `isEnabledAtCell` -> `false`, `getConnectedVentsAtCell` -> `[]`.

Engine twin (state first): `isAt`, `isEnabledAt`, `getConnectedVentsAt`, `setEnabledAt`.
`setEnabledAt` throws on worker context.

## Engine twin via FH (0.5.6 evaluate)

When ambient `sandkit.api.pipes` is undefined in CDP evaluate, bind webpack module **46781** — [Evaluate](/okf/live/evaluate.md).

| Public | Engine twin (`FH.pipes`) |
| --- | --- |
| `isAtCell(x, y)` | `isAt(state, x, y)` |
| `isEnabledAtCell(x, y)` | `isEnabledAt(state, x, y)` |
| `getConnectedVentsAtCell(x, y)` | `getConnectedVentsAt(state, x, y)` |
| `setEnabledAtCell(x, y, enabled)` | `setEnabledAt(state, x, y, enabled)` |

Live dev-tools save after `FH.structures.build` pipe **23** at `(600,600)`: `isAt` **true**, `isEnabledAt` **true** on the pipe cell; pump cell `(604,600)` → `isAt` **false** (pump lives in `store.structures`, not `store.pipes`).

Pumps and liquid vents still appear in `store.structures` via `structures.getAtCell`.
Pipe segments live in `store.pipes`.

## Store

| Field                 | Role                                                             |
| --------------------- | ---------------------------------------------------------------- |
| `store.pipes[]`       | Pipe segments only (`type` === `StructureType.Pipe` / `23`)      |
| `store.pumpsCache[]`  | Pump structures (`type` 24) for fast fluid graph updates         |
| `session.cache.pipes` | Spatial block index (same pattern as `session.cache.structures`) |

Spatial cache uses `cell >> log2(snapGridCellSize)` (shift **2** when `snapGridCellSize` is **4**).
One object per snap block; `session.cache.*.get` resolves the instance at a cell.

Empty dev save: `pipes` length **0**, `pumpsCache` length **0**.

## Pipe instance

Placed pipe (live 0.5.6 probe — store + `session.cache.pipes`):

- `type`: `23` (`Pipe`)
- `x`, `y`: snap-grid cell
- `data.pipeSpriteIndex`: connection bitmask (0–15) from orthogonal neighbor pipes
- `data.disabled`: when `true`, `isEnabledAtCell` is **false** and breaks fluid graph traversal

Pump (`type` **24**) in `store.structures` and `store.pumpsCache`:

- `data.connectedVents`: `{ x, y }[]` of liquid vents on the same connected pipe network
- `data.liquidBuffer`: per-element-type counts (appears after pump tick runs; live probe saw `{}` on first frame)

Liquid vent (`type` **25**):

- `data.connectedVents`: usually `[]` on the vent instance (pumps hold the vent list)

Three-segment line at `(256,256)` → `(264,256)` with a vent at the end: middle pipe `disabled: true` makes `isEnabledAt` **false** on that cell and `getConnectedVentsAt` return `[]` from the pump side; re-enabled pipe restores vent link `{ x: 264, y: 256 }`.

Pump / liquid vent at a cell without adjacent pipe may get `data.connectedVents: []`.

## Placement rules (engine)

- Pipe goes to `store.pipes`, not `store.structures`.
- Pump pushes into `pumpsCache` on place.
- Pump and liquid vent require a pipe at the same cell.

## Settings

`session.settings.pipesModeView` — pipes overlay mode (foreground vs background tilemap).

## Builtin ids

`Pipe` 23, `Pump` 24, `LiquidVent` 25 — [Enums](/okf/factory/enums.md).

## Related

- Building menu fluid tab: [UI: HUD and overlays](/okf/ui/hud-and-overlays.md).
- `ItemId.PipeRemover` (13) — player tool, not covered here.
