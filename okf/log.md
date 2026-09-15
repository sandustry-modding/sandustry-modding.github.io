## 2026-09-15 progression, energy, factory gap closure (CDP :9222, 0.5.6)

- Live dev-tools save `irishbruse.dev-tools-exitsave`; ambient `sandkit` undefined; webpack **46781** (`FH`) for engine twins.
- Documented mod `register()` upgrade metadata on `sandkit.mods.upgrading` (10 pairs) vs `store.upgrades` leaves (38 vanilla) — [Upgrades](/okf/progression/upgrades.md).
- Closed `powerBrick` gap: `disallowSelection` blocks copier paste; mold + liquid copper is the player path; `FH.structures.build` is probe-only — [Engine energy](/okf/energy/engine-energy.md#powerbrick-placement-and-unlock-056-live).
- Verified `FH.pipes.*` and `FH.authorization.*` twins when `sandkit.api` is missing in evaluate — [Pipes](/okf/factory/pipes.md), [Authorization](/okf/factory/authorization.md).
- Updated [Progression gaps](/okf/progression/gaps.md), [Energy gaps](/okf/energy/gaps.md), [Factory gaps](/okf/factory/gaps.md), [Structures](/okf/factory/structures.md), [Factory probe](/okf/factory/probe.md).

## 2026-09-15 internals gap closure (CDP :9222 + Steam asar list, 0.5.6)

- Added [Shared buffer headers](/okf/internals/shared-buffers.md) — `shared.sim`, `elementData`, damaged-ground pools, related shared rasters, `store.world` metadata shapes (no full dumps).
- Live probe on dev-tools exit save (**1024²**): full `elementData` SOA columns, damaged-ground pools, `mapData` byte length `width*height*4`, zone grid **32×32**.
- Confirmed Steam `app.asar` contains only `platforms/steam.js` — MS Store / GOG bodies unavailable in Steam channel.
- Documented shared platform interface table and MS Store-only hooks in [Store platforms](/okf/internals/platforms.md).
- Added main vs worker `sandkit.api` parity table to [Worker entry API](/okf/internals/worker-api.md) (extract chunk **247** + SandustryTypes).
- Re-checked worker CDP attach on `:9222` — still renderer-only — [Worker attach](/okf/live/worker-attach.md).
- Updated [Internals gaps](/okf/internals/gaps.md), [State bags](/okf/internals/state.md), [Grid and chunks](/okf/world/grid-chunks.md), [store.world session metadata](/okf/world/store-world.md), [Sim stats buffers](/okf/world/sim-stats.md).

## 2026-09-15 player and entities gap closure (CDP :9222, 0.5.6, pass 2)

- Teleporter `locations[]` — confirmed no write sites; factory bag only — [Tools](/okf/player/tools.md).
- `FH.tutorialBuild` method table and `store.mods.tutorialBuild` distinction — [Tutorial](/okf/progression/tutorial.md).
- Worker `api.player` read helpers (4 methods) — [Player](/okf/player/player.md), [Worker entry API](/okf/internals/worker-api.md).
- Live `FH.portals.getMarkers` on `b93kqvog6zn-exitsave` (Glyph Room, Surface Cave) — [Teleport zones](/okf/entities/teleport-portals.md).
- Live `FH.drones.spawn(state, 1, …)` Digger row — [Drones](/okf/entities/drones.md).
- Tech grid ids `71`, `81`, `85`, `86`, `106` unlock-target names — [Tech tree structure](/okf/progression/tech-tree.md).
- Trimmed [Player gaps](/okf/player/gaps.md), [Entity gaps](/okf/entities/gaps.md), [Progression gaps](/okf/progression/gaps.md).

## 2026-09-15 UI and API gap closure (CDP :9222, 0.5.6 evening)

- Live main-menu walks: **Workshop Mods** (Steam-unavailable body), **Custom Maps** (coming soon).
- Documented full Workshop Mods and Custom Maps UI behind `mods.showSubscribedMods` / `customMaps.showCustomMaps` flags (both **false** on modding beta).
- Radial held-**E** probe: zero `aria-label` nodes; `radial-clip-{typeId}-{index}` id pattern.
- `TechStatus.Unknown` / `Hidden` closed as reserved enum values (parseTechTree assigns 0–2 only).
- Re-probed API drift table via webpack **46781** (`FH`); updated [API gaps](/okf/api/gaps.md) proof column.
- Updated [Screens](/okf/ui/screens.md), [Overlays](/okf/ui/overlays.md), [UI gaps](/okf/ui/gaps.md), [TechStatus](/okf/progression/tech-status.md), [Progression gaps](/okf/progression/gaps.md).

## 2026-09-15 world, entities, energy campaign probe (CDP :9222, 0.5.6)

- Loaded campaign save `b93kqvog6zn-exitsave` via `?db_load=` (Flintpit, 3840²).
- Confirmed non-empty `FH.maps.getArtifactLocations` (10 rows; sensor type **1** → `Zorvix-22`) — [Maps API](/okf/world/maps.md).
- Confirmed non-empty `FH.portals.getMarkers` with `staticPortals.unlocked` — [Teleport zones and portals](/okf/entities/teleport-portals.md).
- Spawned hauler (`type: 2`) and sweeper (`type: "sweeper"`) via `FH.drones.spawn` on dev autosave (in-memory; not saved) — [Drones](/okf/entities/drones.md).
- Reconfirmed single global energy pool; no `energyType` in bundle or live `mods.energy` — [sandkit.api.energy](/okf/energy/api-energy.md).
- Trimmed [World gaps](/okf/world/gaps.md), [Entity gaps](/okf/entities/gaps.md), [Energy gaps](/okf/energy/gaps.md).
- Navigation note: `agent-browser navigate` on CDP `:9222` can replace the game renderer URL; restored with `file://…/index.html?db_load=…` (no process kill).

## 2026-09-15 api, internals, and references gap closure

- Added [API gaps](/okf/api/gaps.md) — official HTML vs SandustryTypes vs live `sandkit` drift on 0.5.6.
- Added [Namespace routing](/okf/api/namespace-routing.md) — `sandkit.api` namespace → OKF domain map.
- Added [Store platforms](/okf/internals/platforms.md) — MS Store / GOG detection; Steam-only extract limits.
- Added [Procgen Noise](/okf/internals/noise.md) — `window.Noise` constructor and methods from bundle.
- Added [Webpack module ids](/okf/internals/webpack-modules.md) — **46781** (`FH`), **77135** (tech grid) for 0.5.6 probes.
- Added [Version alignment](/okf/references/version-alignment.md) — game build vs OKF extract vs types vs archives.
- Updated [API index](/okf/api/index.md), [Internals index](/okf/internals/index.md), [References index](/okf/references/index.md), [Internals gaps](/okf/internals/gaps.md), [Globals](/okf/internals/globals.md), [Extract layout](/okf/references/extract-layout.md).

## 2026-09-15 player and entities gap pass (CDP :9222, 0.5.6)

- Live probe via `__debug.state` on dev-tools autosave; `sandkit` ambient undefined in evaluate (consistent with [Evaluate](/okf/live/evaluate.md)).
- `__debug.admin.run` verified for copier, digger, teleporter, hauler item push.
- Updated [Tools and grabber](/okf/player/tools.md), [Building mode](/okf/player/building.md), [Clipboard](/okf/player/clipboard.md), [Coloring](/okf/player/coloring.md), [Input](/okf/player/input.md).
- Updated [Teleport zones and portals](/okf/entities/teleport-portals.md), [Creature instance fields](/okf/entities/creature-fields.md), [World items](/okf/entities/world-items.md) stratacore catalog.
- Trimmed [Player gaps](/okf/player/gaps.md) and [Entity gaps](/okf/entities/gaps.md).

## 2026-09-15 energy and world gap pass (CDP :9222 + extract)

- Live CDP `:9222` on **0.5.6** dev-tools exit save; webpack module **46781** (`FH`) used when `state.sandkit.engine` missing.
- Placed `electricityConnector` pair; confirmed `getNetwork` shape `{ x, y, type }`.
- Documented per-thread column ownership, chunk-flag vs mutation flush order, `addAtCell` partial return, worker energy engine scope, and `getArtifactLocations` merge rules.
- Updated [Workers and scheduling](/okf/world/workers.md), [Grid and chunks](/okf/world/grid-chunks.md), [Maps API](/okf/world/maps.md), [sandkit.api.energy](/okf/energy/api-energy.md), [Engine energy](/okf/energy/engine-energy.md), [Evaluate](/okf/live/evaluate.md), and [Feature save setup](/okf/live/feature-save-setup.md).
- Trimmed [Energy gaps](/okf/energy/gaps.md) and [World gaps](/okf/world/gaps.md).

## 2026-09-15 UI and progression live gap closure (CDP :9222)

- Added [Intro and Deploy](/okf/ui/intro-deploy.md) — story i18n, drop-pod deploy, skip paths; live **New** skipped to loader on modding beta.
- Updated [Overlays](/okf/ui/overlays.md) — full radial wedge table (61), world-map layer facts.
- Updated [Research](/okf/ui/research.md), [Screens](/okf/ui/screens.md), [Tech tree structure](/okf/progression/tech-tree.md) — Lexicon `kind: "tech"` name map, live `getTechGrid()` via webpack **77135** (27×9, 56 nodes).
- Updated [Upgrades](/okf/progression/upgrades.md) — all 38 vanilla `itemId:upgradeId` pairs; confirmed no `shared.upgrades` mirror.
- Updated progression and UI `gaps.md` — closed `getStatusById`, grid coords, worker upgrades, radial/map/graph-name items.

## 2026-09-15 factory domain live 0.5.6 probe (CDP :9222)

- Placed pipe network via `__debug.state` store + `session.cache.pipes` (shift 2); documented instance dumps, `disabled` pipe behavior, and `connectedVents` / `liquidBuffer` on pumps.
- Stamped non-zero authorization zone **3** (NoBuild); documented zone id **1**–**12** restriction and F3 color table.
- Extracted thermal condenser / smelter tick gates, placement clearance rules, and worker `RegisterConveyorType` payload from 0.5.6 bundle.
- Confirmed live `sandkitPlacementConfig` is `{}` on vanilla; updated factory concept files and trimmed [Factory gaps](/okf/factory/gaps.md).

## 2026-09-15 live and references playbook expansion

- Added [Worker attach](/okf/live/worker-attach.md) — CDP `:9222` exposes renderer only on 0.5.6; 14 sim + manager + utility workers exist on main thread but no worker CDP targets; extract chunk map and renderer proxy scripts.
- Added [Feature save setup](/okf/live/feature-save-setup.md) — mutator recipes for pipes, energy, entities, and auth zones from void-world and dev-tools autosave baselines; `__debug.state` entry on 0.5.6.
- Added [Extract layout](/okf/references/extract-layout.md) — `sandustry/source/` tree map for source miners.
- Updated [Live index](/okf/live/index.md) and [References index](/okf/references/index.md).

## 2026-09-15 progression domain source extract (0.5.6)

- Mined `sandustry/source/dist/js/bundle.js` for objectives registry, event completion, conservatory tickets, tech grid, and `parseTechTree` status rules.
- Added [TechStatus](/okf/progression/tech-status.md) and [Tech tree structure](/okf/progression/tech-tree.md).
- Updated [Objectives](/okf/progression/objectives.md), [Conservatory](/okf/progression/conservatory.md), [Enums](/okf/progression/enums.md), [Tech](/okf/progression/tech.md), and progression [index](/okf/progression/index.md).
- Trimmed [Progression gaps](/okf/progression/gaps.md) for resolved extract items.

## 2026-09-15 energy and factory bundle extract (0.5.6)

- Mined `sandustry/source/dist/js/bundle.js` for signal catalogs, refinery recipes, placement config, and energy callbacks.
- Added [Signal structure catalog](/okf/energy/structure-catalog.md) — sender, receiver, and interactable ids with English names.
- Added [Vanilla refinery recipes](/okf/factory/refinery-recipes.md) — condenser, steamDryer, synthesizer, snowmaker, smelter tables.
- Added [Placement config](/okf/factory/placement-config.md) — `registerPlacementConfig` schemas and `getConfig` return keys.
- Updated [Engine energy](/okf/energy/engine-energy.md) — `onCharge` / `onConsume` argument and return shapes.
- Trimmed [Energy gaps](/okf/energy/gaps.md) and [Factory gaps](/okf/factory/gaps.md).

## 2026-09-15 UI domain live screen walks (CDP :9222)

- Added [Screens](/okf/ui/screens.md) — main menu rows, exit dialog, workshop Mods, custom Maps.
- Added [Overlays](/okf/ui/overlays.md) — radial (E), world map (M), Lexicon codex.
- Updated [Research](/okf/ui/research.md), [Pause menu](/okf/ui/pause.md), [DOM and scenes](/okf/ui/dom.md) (`__debug.state.session` path).
- Trimmed [Screen gaps](/okf/ui/gaps.md) after verification.

## 2026-09-15 world and factory live 0.5.6 probe

- CDP `:9222` on game **0.5.6** (dev-tools autosave, 1024² grid).
- Documented mod terrain `cellType` 31–55, variable grid/chunk/mapData sizing, mod refinery recipe rows, launcher velocity object shape.
- Updated evaluate playbook: ambient `sandkit` unavailable in CDP evaluate on 0.5.6; use `__debug.state`.
- Updated world and factory `gaps.md` with resolved and remaining items.

## 2026-09-15 internals and entities extract pass

- Mined `sandustry/source/` (0.5.6 extract) for workers, engine config, host IPC, drones, projectiles, pickups, and creatures.
- Added `/okf/internals/workers-runtime.md`, `engine-config.md`, `custom-maps-ipc.md`.
- Added `/okf/entities/creature-fields.md`.
- Updated boot worker count, worker-api worker sandkit list, debug admin commands, drones/projectiles/world-items/launchers/entities/store, and both domain `gaps.md` files.

## 2026-09-14 remove OKF kit domain

- Deleted `docs/okf/kit/` and `docs/okf/ui/kit.md`.
- Point mod authoring to `/guides/`, `/modkit/`, and the mod template README instead of OKF.
- Updated cross-links in consume, index, internals, ui, and references.

## 2026-09-14 skill to OKF cutover

- Migrated vanilla facts from Cursor skills into OKF domain concepts.
- Added live domain under `/okf/live/` for MCP attach, evaluate, triage, and void-world batches.
- Updated consume playbook, llms.txt, and template AGENTS.md to point at OKF only.

## 2026-09-14 energy domain detail concepts

- Migrated sandustry-energy skill references into `/okf/energy/` detail concepts.
- Added api-energy, api-signals, api-resources, shared-state, engine-energy, engine-signals, clipboard, gold-collector, gaps, and probe.
- Updated energy index and networks-and-signals overview with detail concept links.

## 2026-09-15 live probe — player, UI, energy (CDP :9222)

- Added [Item abilities](/okf/player/abilities.md) — live `abilities[]` matrix for toolbox items.
- Updated [Input](/okf/player/input.md) — deck cursor idle shape on kbm saves.
- Updated [Player probe](/okf/player/probe.md) and [Evaluate](/okf/live/evaluate.md) — Steam session may lack ambient `sandkit`; use `__debug.state`.
- Updated [Engine signals runtime](/okf/energy/engine-signals.md) — full vanilla sender, receiver, and interactable id lists.
- Updated [Clipboard signal links](/okf/energy/clipboard.md) — live `store.mods.signals.links` sample.
- Updated [Engine energy](/okf/energy/engine-energy.md) — `onCharge` / `onConsume` function presence on registry options.
- Updated [HUD screen map](/okf/ui/hud.md) — v0.5.6 chip, story objective, hotbar contents.
- Updated [DOM and scenes](/okf/ui/dom.md) — `session.windows` and `session.ui` key lists.
- Trimmed [Player gaps](/okf/player/gaps.md) and [Energy gaps](/okf/energy/gaps.md) after verification.

## 2026-09-14 initial OKF v0.2 bundle

- Added site-root `llms.txt` for agent discovery.
- Added OKF root index, consume playbook, and domain listing indexes.
- Added eight domain concept pages (world, factory, energy, player, ui, progression, entities, internals).
