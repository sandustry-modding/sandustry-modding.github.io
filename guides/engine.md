# Engine and host shape

Sandustry injects a global `sandkit` object into every mod `entry` and `workerEntry` script.
The loader binds it as a free variable.
Do not import `sandkit` as a module.

```ts
/// <reference types="@sandustry-modding/types" />

const api = sandkit.api;
const version = sandkit.apiVersion;
```

Member signatures live in the generated API pages linked below.
This page explains how the top-level bags relate.

## Top-level `sandkit`

| Property | Role | Docs |
| --- | --- | --- |
| `api` | Public mod API (main thread) | [sandkit.api](../api/sandkit.api.md) |
| `apiVersion` | Sandkit API version (`1` on current builds) | — |
| `engine` | Internal state-first twin of many namespaces | [sandkit.engine](../api/sandkit.engine.md) |
| `enums` | Runtime enum bags from the game | [sandkit.enums](../api/sandkit.enums.md) |
| `react` | Host React copy for UI mods | [sandkit.react](../api/sandkit.react.md) |
| `state` | Live game state (same object as `sandkit.engine.state`) | [sandkit.engine](../api/sandkit.engine.md) |

At runtime, `sandkit.state === sandkit.engine.state`.
Prefer `sandkit.api` for mod logic.
Reach for `sandkit.state` only when you already need raw state and no public helper exists.

## `sandkit.api` — public mod surface

`sandkit.api` is the stable namespace tree for mods on the main thread.
Each property is a namespace (`grid`, `hooks`, `player`, and others).
Use these paths in new code.

When the same name exists on `sandkit.engine.api`, prefer the public method.
Public calls do not take game state as the first argument.
Engine calls are state-first and marked internal in the type package.

Main-thread-only namespaces include `assets`, `events`, `gameConfig`, `hooks`, `i18n`, `mods`, `pickups`, `settings`, `shared`, `structureBehaviors`, and `time`.
Workers expose a smaller `sandkit.api` surface.
See [Worker mods](guides/worker-mods.md).

## `sandkit.engine` — internal escape hatch

`sandkit.engine` has two properties:

- `sandkit.engine.api` — state-first helpers and engine-only namespaces
- `sandkit.engine.state` — live game state bags

Overlap namespaces on `sandkit.engine.api` mirror public `sandkit.api` names (`grid`, `hooks`, `player`, and others) with different signatures.
Engine-only namespaces include `augments`, `clipboard`, `conveyors`, `debug`, `drones`, `entities`, `factory`, `game`, `queue`, `retroConsole`, `workerLocal`, and others.
Full list: [sandkit.engine](../api/sandkit.engine.md).

Treat `sandkit.engine` as an escape hatch.
Do not start new mods on engine paths when a public equivalent exists.

## `sandkit.state`

`sandkit.state` is typed as `SandkitState`.
Confirmed top-level bags:

- `environment` — runtime context and multithreading flags
- `sandkit` — loader-owned sandkit runtime data
- `session` — active session snapshot
- `shared` — cross-thread shared data
- `store` — persistent game store

Shapes under those bags are stubs in the type package.
Confirm fields on a live object before you depend on them.

## `sandkit.enums`

`sandkit.enums` exposes runtime enum objects from the game.
Use them when an API expects a numeric or string enum value.

Examples:

```ts
sandkit.enums.MatterType.Liquid
sandkit.enums.PickupType.Orb
sandkit.enums.StructureType.Conveyor
```

Registered enums include `AbilityType`, `ActionState`, `ActionType`, `AuthorizationType`, `BuildMode`, `BuildingClearance`, `CellType`, `ComponentId`, `DroneType`, `ElementType`, `ItemId`, `ItemType`, `KeyBinding`, `KeyState`, `MatterType`, `PickupType`, `ProjectileType`, `ReloadType`, `Scene`, `StructureType`, `Tech`, and `TechStatus`.
`WorldItemType` is deprecated; use `PickupType`.

Prefer resolving string ids through API helpers (for example `elements.getTypeById`) when you register custom content.
Numeric enum values can change between game versions.

## `sandkit.react`

`sandkit.react` is a shallow copy of the host React package.
It exposes optional helpers such as `createElement`, `useState`, `useEffect`, `Fragment`, and `version`.

Mods that use JSX through the mod template should rely on the template JSX runtime.
Use `sandkit.react` only when you must reach the host copy at runtime.

## `window.electron` is separate

Host integration outside Sandkit lives on `window.electron`.
The ambient free name `electron` is the same object.

That bridge is **not** part of `sandkit`.
Use it for logging, local mod folders, platform probes, and other IPC helpers.

Details: [Electron bridge](../electron-bridge.md).

## Typing in TypeScript

Main-thread mods load ambient bindings with a triple-slash reference or a main `tsconfig` / `jsconfig` include.
Global types include `Sandkit`, `SandkitApi`, `SandkitEngine`, `SandkitState`, `SandkitEnums`, and `SandkitReact`.

Worker entry files use a separate tsconfig project so `sandkit.api` is `WorkerSandkitApi` with no cast.
See [Worker mods](guides/worker-mods.md).

## Related

- [Worker mods](guides/worker-mods.md) — main vs worker `sandkit.api`
- [The mod lifecycle](guides/mod-lifecycle.md) — when scripts run
- [sandkit.api](../api/sandkit.api.md) — public namespace reference
- [sandkit.engine](../api/sandkit.engine.md) — internal engine reference
- [Search](../types/search.md) — browse members by live path
