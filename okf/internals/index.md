# Internals

Engine entry, workers, host bridge, extract tree, and non-public surfaces.

Live host map for Early Access **0.5.5**.
Public mod calls: [official Sandkit API](https://sandustry.com/sandkit.html) (`apiVersion` **1**); types at [SandustryTypes](https://sandustry-modding.github.io/SandustryTypes/#/).
Extracted tree: `sandustry/source/` (`npm run setup`).
Do not treat the published type reference as complete; confirm on the live object.

**0.5.5 notes:** `sandkit` keys — `api`, `apiVersion`, `engine`, `enums`, `react`, `state`.
Official HTML documents `api.grid`; live **`api.world`** is a **deprecated alias** (same `mutate`, plus `pickups`, `runWhenSimulationIdle`, `redrawAroundCellWhenIdle`).
**`api.game.start({ skipIntro? })`** is official but a mutator — document only in probes.
`store.gloom.emitterPositions`, `store.createdVersion`, `store.machineryEngine.runLaunchers`.

## Concepts

- [Engine and workers](/okf/internals/engine-and-workers.md)
- [Workers runtime](/okf/internals/workers-runtime.md)
- [Engine config and extend](/okf/internals/engine-config.md)
- [Custom maps IPC](/okf/internals/custom-maps-ipc.md)
- [Globals](/okf/internals/globals.md)
- [Electron bridge](/okf/internals/electron.md)
- [Engine API](/okf/internals/engine.md)
- [Worker entry API](/okf/internals/worker-api.md)
- [State bags](/okf/internals/state.md)
- [Shared buffer headers](/okf/internals/shared-buffers.md) — typed-array lengths and roles
- [`__debug`](/okf/internals/debug.md)
- [Extract tree](/okf/internals/sandustry.md)
- [Renderer boot](/okf/internals/boot.md)
- [Mods host](/okf/internals/mods-host.md)
- [Store platforms](/okf/internals/platforms.md) — Steam / MS Store / GOG detection
- [Procgen Noise](/okf/internals/noise.md) — `window.Noise` constructor
- [Webpack module ids](/okf/internals/webpack-modules.md) — probe ids for 0.5.6
- [Gaps](/okf/internals/gaps.md)
- [Probe](/okf/internals/probe.md)
