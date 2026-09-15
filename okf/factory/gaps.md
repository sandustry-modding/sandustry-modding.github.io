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
  - id: live-056
    resource: CDP :9222 0.5.6 session
---

# Gaps

Still open:

- Live conveyor belt motion / worker `L[structureId]` instance at runtime (worker CDP unavailable — extract-only)
- Snowmaker / steam dryer / synthesizer per-tick energy and adjacency numbers beyond i18n copy (partial extract only)

Resolved on 0.5.6 CDP evaluate (`__debug.state`; ambient `sandkit` undefined):

- `sandkit.api.pipes.*` / `authorization.canBuildAtCell` — not reachable in evaluate scope; engine twins via webpack **46781** (`FH.pipes.*`, `FH.authorization.*`) verified live — [Pipes](/okf/factory/pipes.md#engine-twin-via-fh-056-evaluate), [Authorization](/okf/factory/authorization.md#engine-twin-via-fh-056-evaluate)
- `FH.structures.build(state, { x, y }, type)` placement — pipe **23**, pump **24**, vent **25**, and energy mod types on dev-tools save when Block terrain exists under the cell — [Feature save setup](/okf/live/feature-save-setup.md)

Documented from bundle extract (0.5.6):

- Vanilla refinery recipe tables per slot — [Vanilla refinery recipes](/okf/factory/refinery-recipes.md)
- `registerPlacementConfig` field schemas and runtime storage — [Placement config](/okf/factory/placement-config.md)
- `engine.api.structures.getConfig` return shape (`C.VI[id]`) — [Placement config](/okf/factory/placement-config.md#getconfig)
- Placement clearance preview rules (`BuildingClearance`, engine-only) — [Structures](/okf/factory/structures.md#placement-clearance-engine-only)
- Thermal condenser / smelter tick gates (heat relay, lava / freezingIce RNG, smelter 25% skip) — [Processing](/okf/factory/processing.md#thermal-machine-tick-internals-056-bundle)
- Worker `RegisterConveyorType` IPC payload — [Conveyors](/okf/factory/conveyors.md#worker-registration-payload-056-extract)

Resolved on 0.5.6 CDP probe (`__debug.state`; `sandkit.api` not ambient in evaluate):

- `store.pipes` / `pumpsCache` instance dumps on a placed network (store + `session.cache.pipes` shift **2**)
- Pipe `data.disabled` breaks `isEnabledAt` / vent graph (bundle + inline probe matching engine module **34142**)
- `getConnectedVentsAtCell` shape `{ x, y }[]`; pump `data.connectedVents` and `data.liquidBuffer`
- Non-zero `shared.authorization.data` (zone **3** / NoBuild stamp, 25 cells on 720² dev save)
- Zone id **1**–**12** restriction table and F3 RGB map — [Authorization](/okf/factory/authorization.md)
- Live `store.options.sandkitPlacementConfig` sample **`{}`** on vanilla bundle
- Mod refinery recipe rows in `state.sandkit.mods.recipes`
- `state.sandkit.registeredLauncherTypes` velocity object shape — [Conveyors and launchers](/okf/factory/conveyors.md)
- `session.cache.structures` / `session.cache.pipes` keys: `grid`, `blocksW`, `blocksH`, `sparse`
- Worker inventory from renderer: 14 sim threads + manager + utility — [Worker attach](/okf/live/worker-attach.md)

`store.queue` empty on feature-empty saves is expected (len 0), not a missing API.
