---
type: Reference
title: Tech tree structure
description: Built-in Research grid layout, connection edges, branch colors, and conservatory reward rows from the 0.5.6 extract.
tags:
  - sandustry
  - okf
  - progression
  - tech
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:00:00Z
sources:
  - id: extract
    resource: sandustry/source/dist/js/bundle.js
---

# Tech tree structure

Built-in Research data lives in the engine tech module (extract module `77135`).
Mods extend it with `sandkit.api.tech.registerDefinition` and `registerNode`.
Grid coordinates are **internal**; the public API exposes definitions and researched state only.

## Core structures

| Symbol (extract) | Engine accessor        | Contents                                      |
| ---------------- | ---------------------- | --------------------------------------------- |
| `P`              | `getTechGrid()`        | 2D grid of node ids, connections, overpasses |
| `L`              | `getTechDefinition(id)` | Static defs: cost, branch, unlocks, requires |
| `O`              | `getTechConnections()` | Explicit edge pairs `[from, to]`              |
| `R`              | `getTechColors()`      | Branch name → hex color                       |
| `z`              | `CONSERVATORY_REWARDS` | Ticket-priced reward defs (not on main grid)  |
| `D`              | `getBranchParent(id)`  | Mod branch-parent map; **empty** in vanilla     |

`parseTechTree(state)` merges `P`, `L`, and `O` into nodes with `row`, `col`, `neighbors`, and runtime `status`.
See [TechStatus](/okf/progression/tech-status.md).

## Grid cell kinds

Grid cells in `P` may be:

- `null` — empty tile.
- `Tech` enum value or string id — node occupying the cell.
- `{ kind: "connection", from, to }` — visual edge between two nodes.
- `{ kind: "overpass", overFrom, overTo, underFrom, underTo }` — edge drawn over another link.

Vanilla grid is **27 rows × 9 columns** on live 0.5.6 (`getTechGrid()` probe).
Extract minified constant `H=29` may include padding rows; trust live dimensions.
Origin for layout math is the **Shaker** cell (`getMainTreeOriginPosition`).

## Branch colors (`R`)

| Branch id     | Color     |
| ------------- | --------- |
| `refining`    | `#00ff00` |
| `logistics`   | `#0088ff` |
| `exploration` | `#00c1ff` |
| `excavation`  | `#ff3500` |
| `tools`       | `#ffffff` |
| `drones`      | `#6b6b6b` |
| `alien`       | `#D459C2` |
| `electricity` | `#ffd700` |
| `heat`        | `#ff8800` |
| `lighting`    | `#ffff00` |
| `fluids`      | `#00fff6` |

## Starter spine (grid rows 0–3)

Row 0 centers **Shaker** (col 4).
Row 1: **Conveyors** → **Hover** / **SprintBoost** branch, **Map**, **FlareGun**.
Row 2: **Filters** side branch, **SprintBoost**, **StaticLights**.
Row 3: **KineticPress**, **Flamethrower**.

Lower rows add logistics strings (`burnerBelt`, `thermalRelay`, `conveyorRightMk2`), **QuantumPortal**, **Pipes**, **PlanterBox**, **Gun**, heat/electricity strings, **Corraller**, **Haulers**, alien strings (`swarmConsole`, `voidOrb`, `fluxEmanator`, `prismalineWell`, …), and mod-style ids on the same grid.

## Live grid (0.5.6)

CDP `evaluate_script` cannot reach `sandkit.engine.api.tech` directly (`__debug.state.sandkit` holds mods metadata only).
Use a webpack hook on module **77135**:

```javascript
() => {
  let out = null;
  self.webpackChunksand_v1.push([["okf_probe"], {}, (__webpack_require__) => {
    const mod = __webpack_require__(77135);
    const grid = mod.getTechGrid();
    const nodes = [];
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        const cell = grid[r][c];
        if (cell == null || typeof cell === "object") continue;
        nodes.push({ r, c, id: String(cell) });
      }
    }
    out = { rows: grid.length, cols: grid[0]?.length, nodes };
  }]);
  return out;
};
```

Live probe: **27** rows, **9** cols, **56** node cells, **73** total non-null cells (includes `connection` and `overpass` objects).

### Node coordinates (row, col)

| r | c | id |
| - | - | -- |
| 0 | 4 | 1 (Shaker) |
| 1 | 3 | 2 (Logistics) |
| 1 | 5 | 108 (Hover) |
| 1 | 7 | 91 (Map) |
| 1 | 8 | 56 |
| 2 | 2 | 63 |
| 2 | 6 | 109 (Sprint Boost) |
| 2 | 8 | 24 |
| 3 | 4 | 7 |
| 3 | 5 | 5 |
| 4 | 0 | burnerBelt |
| 4 | 1 | thermalRelay |
| 4 | 6 | 57 |
| 4 | 8 | flashlight |
| 5 | 2 | 82 |
| 5 | 6 | 59 |
| 6 | 2 | 23 |
| 6 | 4 | 20 |
| 6 | 5 | 6 |
| 7 | 0 | heatCannon |
| 7 | 2 | 104 |
| 7 | 6 | 60 |
| 7 | 8 | 105 |
| 8 | 2 | kineticFieldEmitter |
| 8 | 6 | 89 |
| 9 | 2 | 64 |
| 9 | 4 | 21 |
| 9 | 5 | 22 |
| 10 | 3 | 30 |
| 10 | 6 | 102 |
| 11 | 3 | 90 |
| 11 | 8 | reconDrone |
| 12 | 2 | snowmaker |
| 12 | 4 | 107 |
| 12 | 5 | 70 |
| 13 | 1 | 26 |
| 13 | 3 | energySiphon |
| 13 | 8 | fluxEmanator |
| 14 | 2 | copperMold |
| 14 | 7 | voidOrb |
| 15 | 1 | electricityConnector |
| 15 | 3 | 71 |
| 16 | 5 | 106 |
| 16 | 6 | 85 |
| 16 | 8 | 81 |
| 17 | 4 | aurixiteCrystallizer |
| 19 | 4 | swarmConsole |
| 20 | 3 | entityCount1 |
| 20 | 5 | volcanizer |
| 21 | 2 | entityCount2 |
| 21 | 3 | spiralSwarm |
| 21 | 4 | prismiteWell |
| 21 | 6 | 86 |
| 22 | 2 | swarmZoning |
| 22 | 3 | swarmScouts |
| 23 | 4 | prismalineWell |

Cross-name numeric ids via Lexicon `kind: "tech"` or [Enums](/okf/progression/enums.md).
Full `O` connection list remains in the extract; `getTechConnections()` is on the same webpack module.

### Numeric grid ids — Lexicon and unlock names (0.5.6)

Live Lexicon `kind: "tech"` entries for these ids show the **numeric id** as `name` (no dedicated `tech|{id}|name` i18n key).
Resolve display names from `getTechDefinition(id).descriptionKey` slug or the unlock target:

| Grid id | `(row, col)` | Tech slug (`descriptionKey`) | Unlock | Display name (English) |
| --- | --- | --- | --- | --- |
| 71 | (15, 3) | `steamTurbine` | structure `steamTurbine` | Steam Turbine |
| 81 | (16, 8) | `locator` | item `locator` | Locator |
| 85 | (16, 6) | `recall` | item `recallDevice` | Recall Shard |
| 86 | (21, 6) | `implosionGun` | item `implosionGun` | Void Gun |
| 106 | (16, 5) | `miningLaser` | item `laser` | Laser |

Probe: webpack **77135** `getTechDefinition(id)` + `FH.structures.getConfig` / Lexicon `kind: "items"` / `kind: "structures"` on campaign save `b93kqvog6zn-exitsave`.

## Explicit connection edges (sample)

`O` lists adjacency beyond orthogonal grid neighbors.
Examples from vanilla:

- `[Shaker, Conveyors]`, `[Conveyors, Filters]`, `[Flamethrower, KineticPress]`
- `[KineticPress, thermalRelay]`, `[thermalRelay, burnerBelt]`, `[Conveyors, ConveyorsMk2]`
- `[Hover, Flamethrower]`, `[Hover, Map]`, `[Map, FlareGun]`, `[Map, voidOrb]`, `[voidOrb, Recall]`, `[voidOrb, Locator]`
- `[Gun, Rocket]`, `[Rocket, Drill]`, `[Drill, MiningLaser]`, `[GoldBattery, Drill]`
- `[Map, Corraller]`, `[ConveyorsMk2, Haulers]`, `[FlareGun, StaticLights]`, `[StaticLights, flashlight]`

## Conservatory rewards (`z`)

Ticket nodes are **not** placed on grid `P`.
They are appended from `CONSERVATORY_REWARDS` when building the full node list.
See [Conservatory](/okf/progression/conservatory.md) for costs and unlock payloads.

## Mod registration

`registerTechNode(id, definition, { parentId, preferredPosition? })`:

- Requires an existing `parentId` in `L`.
- Picks the first free cell below the parent row (or `preferredPosition`).
- Pushes `[parentId, id]` onto connection list `O`.
- Does not populate branch-parent map `D` unless added elsewhere.

`updateTechDefinition` / `registerDefinition` patch entries in `L` only.

## Alien radius unlock

Defs with `radiusUnlockPx` compute distance from the **swarmConsole** grid cell to the node cell (tile spacing constant in extract).
Purchase also checks mined-crystal progress (see [TechStatus](/okf/progression/tech-status.md)).

## Related concepts

- [Tech](/okf/progression/tech.md) — public Sandkit API
- [TechStatus](/okf/progression/tech-status.md) — runtime status derivation
- [Conservatory](/okf/progression/conservatory.md) — ticket reward rows
- [Enums](/okf/progression/enums.md) — `Tech` ids on the grid
