---
type: Reference
title: Webpack module ids
description: webpackChunksand_v1 numeric ids for common OKF probes on game 0.5.6 — unstable across builds.
tags:
  - sandustry
  - okf
  - internals
  - webpack
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:30:00Z
sources:
  - id: bundle
    resource: sandustry/source/dist/js/bundle.js
  - id: worker-runtime
    resource: sandustry/source/dist/js/external-mod-worker-runtime.js
---

# Webpack module ids

The renderer exposes `webpackChunksand_v1` — a webpack chunk array (length **1** after load).
Push a synthetic chunk to call `__webpack_require__(id)` from CDP evaluate.

**Warning:** numeric ids are **build-specific**.
Re-verify after every game update.
Capture **behavior** in OKF concepts; treat ids as probe shortcuts for **0.5.6** only.

## Hook pattern

```javascript
() => {
  const chunks = globalThis.webpackChunksand_v1;
  let mod = null;
  chunks.push([["__okf__" + Date.now()], {}, (r) => { mod = r(MODULE_ID); }]);
  return mod;
};
```

Replace `MODULE_ID` from the table below.
See [Evaluate](/okf/live/evaluate.md) for full `FH` example.

## Renderer bundle (`bundle.js`) — 0.5.6

| Module id | Export / role | Use when |
| --- | --- | --- |
| **46781** | `{ FH, … }` — `FH` is `sandkit.engine.api` | `state.sandkit.engine` missing; need `FH.energy`, `FH.structures.build`, `FH.maps.getArtifactLocations`, etc. |
| **77135** | Tech registry: `getTechGrid`, `getTechNodes`, `getTechConnections`, `getTechDefinition`, `addTechDefinition`, … | Research UI coords, built-in tech graph mining — [Tech tree structure](/okf/progression/tech-tree.md) |

### `46781` (`FH`) quick map

| `FH` namespace | Example call |
| --- | --- |
| `structures` | `FH.structures.build(state, { x, y }, type)` |
| `terrains` | `FH.terrains.createAt(state, x, y, cellType)` |
| `energy` | `FH.energy.getNetwork(state, x, y)` |
| `maps` | `FH.maps.getArtifactLocations(state)` |
| `elements` | `FH.elements.getElementTypeFromId(state, id)` |
| `collector` | `FH.collector.getValueFromElementType(state, type)` |

Full engine surface: [Engine API](/okf/internals/engine.md).

### `77135` exports (partial)

`getTechGrid()` returns a 2D array (live **0.5.6**: **27×9**, **56** nodes).
`getTechConnections()` returns edge data for rendering.
`parseTechTree` logic lives in the same module (minified).

## Standalone worker files (chunk id → filename)

Webpack maps numeric chunk ids to filenames inline in `bundle.js`.
These files are human-scannable without module ids:

| Chunk file | Role |
| --- | --- |
| `external-mod-worker-runtime.js` | Mod `workerEntry` facade — stable **file** name; internal module ids differ |
| `simulation-worker.js` | Simulation threads |
| `manager-worker.js` | Launcher / machinery manager |
| `utility-worker.js` | Utility thread |

Worker **webpack module numbers inside** `simulation-worker.js` share the id space with `bundle.js` but CDP cannot attach to them on 0.5.6 — [Worker attach](/okf/live/worker-attach.md).

## What not to rely on

| Anti-pattern | Why |
| --- | --- |
| Document only `n(38394)` with no export name | Id will change next build |
| Assume sim-worker id **46781** without renderer check | Same id may bind different code per chunk entry |
| Use webpack hook for public `sandkit.api` when ambient `sandkit` works | Prefer official API in mod entry scope |

## Re-verification after game update

1. Read `sandustry/source/package.json` version.
2. Grep `bundle.js` for export name (`getTechGrid`, `FH:`) and note new id.
3. Update this page and any probe snippets in [Evaluate](/okf/live/evaluate.md) / domain probes.
4. Log the change in [OKF log](/okf/log.md).

## Related

- [Evaluate](/okf/live/evaluate.md)
- [Globals](/okf/internals/globals.md)
- [Extract layout](/okf/references/extract-layout.md)
