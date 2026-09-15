---
type: Reference
title: Overlays
description: Radial menu, world map, and Lexicon codex from live CDP walks on 0.5.6.
tags:
  - sandustry
  - okf
  - ui
  - overlays
  - radial
  - map
  - lexicon
status: stable
generated:
  by: agent:cursor
  at: 2026-09-15T21:45:00Z
sources:
  - id: live-cdp
    resource: docs/okf/live/attach.md
  - id: extract
    resource: sandustry/source/
---

# Overlays

Full-screen or canvas-mounted UI that is not the management overlay ([Management overlay](/okf/ui/management.md)) or pause dimmer.

## Radial menu (E)

Binding: **RadialMenuOpen** → `KeyE` ([Keybindings](/okf/ui/bindings.md), `session.settings.keyBindings.RadialMenuOpen`).

Opens while **E** is held (keydown without immediate keyup).
Items come from `store.player.buildings` unlocked structure ids (numeric and string mod ids).

Rendering: SVG pie slices centered on the cursor.
Each wedge uses a `<clipPath id="radial-clip-{typeId}-{index}">` (example live id: `radial-clip-2:11-0` for structure type **11** wedge **0**).
Icons render inside `<foreignObject>` divs clipped to the slice.
They are **not** exposed as named controls in the accessibility tree.

### Accessibility (held **E**, CDP `:9222`, 2026-09-15)

| Probe | Result |
| ----- | ------ |
| `agent-browser press e` | Did **not** open the radial (keyup fires immediately) |
| `keydown` on `window` / `document` without `keyup` | Opens radial (`FH.ui.radialMenu.isOpen()` → **true**) |
| `[aria-label]` count while open | **0** (entire document) |
| SVG `path` / `g` `aria-label` or `title` | **null** on all sampled wedge nodes |
| `agent-browser snapshot -i` while held | No wedge refs; only HUD hotbar groups remain |

Automation should map wedge order to `store.player.buildings` indices and Lexicon `kind: "buildings"` names.
Do not rely on `aria-label` text — vanilla does not set it on 0.5.6.

### Live wedge list (dev autosave, 61 entries)

| id | Name |
| --- | --- |
| 11 | Foundation |
| 16 | Collector |
| 4 | Shaker |
| 2 | Conveyor Belt |
| 5 | Launcher |
| 18 | Filter |
| 26 | Wall Light |
| 20 | Kinetic Press |
| burnerBeltRight | Burner Belt |
| thermalRelay | Thermal Buffer |
| quantumPortal | Conveyor Portal |
| 23 | Pipe |
| 24 | Pump |
| 25 | Liquid Vent |
| 21 | Planter Box |
| heatCannonUp | Pyro Dispenser |
| clearingFrameRight | Clearing Frame |
| kineticFieldEmitter | Aerokinetic Fan |
| filterRightMk2 | Advanced Filter |
| thermodryer | Steam Dryer |
| thermofroster | Condenser |
| conveyorRightMk2 | Conveyor Belt Mk.2 |
| launcherUpMk2 | Launcher Mk.2 |
| snowmaker | Snowmaker |
| goldBattery | Florinol Battery |
| smelter | Smelter |
| 27 | Flux Emanator |
| copperMold | Copper Mold |
| voidRift | Void Rift |
| electricityConnector | Energy Connector |
| steamTurbine | Steam Turbine |
| aurixiteCrystallizer | Synthesizer |
| swarmConsole | Aura Extractor |
| prismiteWell | Prismite Well |
| prismalineWell | Prismaline Well |
| earthStratacore | Earth Stratacore |
| glassFoundation | Glass Foundation |
| critterFence | Critter Fence |
| signalGate | Door |
| signalSwitch | Signal Switch |
| signalLamp | Signal Lamp |
| signalBuffer | Buffer |
| signalSensor | Signal Sensor |
| signalToggle | Toggle (T-FlipFlop) |
| signalButton | Signal Button |
| signalPulseSensor | Pulse Sensor |
| signalPresenceSensor | Presence Sensor |
| signalAnd | AND Gate |
| signalOr | OR Gate |
| signalNot | NOT Gate |
| signalNand | NAND Gate |
| signalNor | NOR Gate |
| signalXor | XOR Gate |
| signalXnor | XNOR Gate |
| signalRepeater | Repeater |
| retroConsole | Retro Console |
| sandustryTestBlocksSource | *(mod test block, no Lexicon name)* |
| sandustryTestBlocksTrash | *(mod test block)* |
| sandustryTestBlocksThermalSource | *(mod test block)* |
| sandustryTestBlocksCold | *(mod test block)* |
| sandustryTestBlocksPower | *(mod test block)* |

Automation note: close pause / management windows first, then dispatch `keydown` without matching `keyup`.
Re-snapshot after `keyup` to release the menu.

## World map (M)

Binding: **OpenMap** → `KeyM` (`session.settings.keyBindings.OpenMap`).

Requires map tech **91** unlocked (`store.player.tech["91"]`).
Handler also checks in-game gate functions before opening.

### Layers (live 0.5.6)

| Layer | Role |
| --- | --- |
| `#canvas` | World render |
| `#overlay-canvas` | 2D overlay (`display: block` while probed) |
| `#ui` child `z-[10005]` | Full-screen global overlays (pointer-events-none) |
| Bottom-right HUD | **Toggle Activity Heatmap**, zoom **−** / **+** ([HUD screen map](/okf/ui/hud.md)) |

**M** did not add map tile nodes to the a11y tree on CDP walks.
The map body is canvas / fixed DOM without interactive a11y children.
`session.windows` has no dedicated `map` key.

## Lexicon / Codex

Opened from Debug → **Game** → **Codex** (`session.windows.lexicon`, `ComponentId` **Lexicon** 25).

| Control            | Role                                      |
| ------------------ | ----------------------------------------- |
| **Show JSON**      | Raw entry payload                         |
| **Close**          | Dismiss                                   |
| Category tabs      | Counts on each tab (live save below)      |
| **Type to filter…** | Search box                             |
| **Clear** / **Focus** | Filter helpers                        |
| Entry list         | Buttons: title, description, Core/Mod, `id:` |
| **Details** pane   | Select an entry to see details.           |

Live category counts (dev autosave, mods loaded):

| Tab          | Count |
| ------------ | ----- |
| Elements     | 50    |
| Terrains     | 43    |
| Buildings    | 92    |
| Items        | 36    |
| Projectiles  | 2     |
| Upgrades     | 25    |
| Tech         | 56    |
| Misc         | 12    |

**Tech** tab lists full node names and descriptions (e.g. **Logistics**, **Map**, **voidOrb**).
Use this when the Research tech-tree graph only shows **✓** checkmarks ([Research](/okf/ui/research.md)).

## Related concepts

- [Debug overlay](/okf/ui/debug.md)
- [Screens](/okf/ui/screens.md)
- [Screen gaps](/okf/ui/gaps.md)
