# Electron bridge

The Electron bridge is the renderer-side API that talks to Sandustry's main process over IPC.

It is **not** part of `sandkit`.

The game exposes it as `window.electron` from the preload script (`preload.js`).

Mod code can use the ambient free name `electron` (same object as `window.electron`).

## When you need it

Most mods only use `sandkit.api`.

Reach for `electron` when you need host integration that Sandkit does not wrap:

- Writing to the host log file (`electron.log`)
- Opening the local mods folder or uploading a dev build to Workshop
- Reading distribution channel, Steam Deck detection, or OS language preferences at startup
- Platform achievements, cloud saves, or Steam Workshop helpers (Steam builds)
- Custom map editor file I/O (`.custommap` files on disk)

The game itself uses the bridge for saves, settings, fullscreen, and platform licensing.

Treat save and settings helpers as host internals unless you have a specific reason to call them from a mod.

## TypeScript

Install `@sandustry-modding/types` and load the ambient bindings:

```ts
/// <reference types="@sandustry-modding/types" />
```

You can annotate with global types (`ElectronBridge`, `ElectronLogLevel`, `ElectronPlatform`) or import explicit shapes:

```ts
import type { ElectronBridge } from "@sandustry-modding/types/electron";
```

Bundled mods from the mod template also receive `const electron = globalThis.window?.electron` at the top of `main.js`.

That keeps bare `electron.*` calls safe when the preload bridge is present.

## IPC patterns

Methods fall into three groups.

**Sync (`sendSync`)** — safe during early startup.

Examples: `getPlatformSync()`, `getSettingsSync()`, `saveExistsSync()`.

**Async (`invoke`)** — returns a `Promise`.

Examples: `save()`, `load()`, `platform.cloudSave()`, `localMods.list()`.

**Fire-and-forget (`send`)** — no return value; the main process handles the message later.

Examples: `log()`, `openDevTools()`, `macRightMouse.watch()`.

Each member in the generated reference lists its IPC channel in a `IPC:` line.

## API shape

The top-level object is [ElectronBridge](api/electron.md?id=electronbridge).

Nested bags group related calls:

| Property | Role | Generated reference |
| --- | --- | --- |
| `localMods` | Local dev mod folder and Steam upload | [ElectronLocalModsApi](api/electron.md?id=electronlocalmodsapi) |
| `platform` | Steam / MS Store account, achievements, cloud, overlay | [ElectronPlatformApi](api/electron.md?id=electronplatformapi) |
| `platform.workshop` | Steam Workshop subscribe, download, and discovery | [ElectronWorkshopApi](api/electron.md?id=electronworkshopapi) |
| `platform.overlay` | In-game overlay browser for `https:` URLs | [ElectronPlatformOverlayApi](api/electron.md?id=electronplatformoverlayapi) |
| `customMaps` | Custom map editor save / load / list / delete | [ElectronCustomMapsApi](api/electron.md?id=electroncustommapsapi) |
| `macRightMouse` | macOS right-click emulation probes | [ElectronMacRightMouseApi](api/electron.md?id=electronmacrightmouseapi) |

## Common top-level calls

| Area | Examples | Reference |
| --- | --- | --- |
| Startup probes | `getPlatformSync()`, `getModdingEnabledSync()`, `getIsSteamDeckSync()` | [ElectronBridge](api/electron.md?id=electronbridge) |
| App lifecycle | `onAppSuspend()`, `onAppResume()`, `appQuit()` | [ElectronBridge](api/electron.md?id=electronbridge) |
| Logging | `log(level, scope, message)` → `logs/main.log` | [ElectronBridge](api/electron.md?id=electronbridge) · [ElectronLogLevel](api/electron.md?id=electronloglevel) |
| Saves & settings | `save()`, `load()`, `getSaveFiles()`, `saveSettings()` | [ElectronBridge](api/electron.md?id=electronbridge) · result types below |
| Window | `setFullscreen()`, `toggleFullscreen()`, `openDevTools()` | [ElectronBridge](api/electron.md?id=electronbridge) |
| Platform (MS Store) | `checkLicense()`, Xbox sign-in / license listeners | [ElectronBridge](api/electron.md?id=electronbridge) · [ElectronLicenseCheckResult](api/electron.md?id=electronlicensecheckresult) |
| Environment | `getSystemInfo()` (local, no IPC) | [ElectronSystemInfo](api/electron.md?id=electronsysteminfo) |

## Result and payload types

Invoke handlers return small result objects instead of throwing for expected failures.

| Type | Used for |
| --- | --- |
| [ElectronOperationResult](api/electron.md?id=electronoperationresult) | Generic `{ success, path?, error? }` from saves, settings, and window calls |
| [ElectronLoadResult](api/electron.md?id=electronloadresult) | Parsed save body or load error |
| [ElectronExportSaveResult](api/electron.md?id=electronexportsaveresult) | Raw `.save` bytes for backup |
| [ElectronImportSaveResult](api/electron.md?id=electronimportsaveresult) | Import from exported bytes |
| [ElectronLocalModsListResult](api/electron.md?id=electronlocalmodslistresult) | Local mod summaries (`ok`, `data`, `errorCode`) |
| [ElectronLocalModsUploadResult](api/electron.md?id=electronlocalmodsuploadresult) | Workshop upload from a local folder |

Primitive aliases: [ElectronPlatform](api/electron.md?id=electronplatform), [ElectronLogLevel](api/electron.md?id=electronloglevel), [ElectronIpcListener](api/electron.md?id=electronipclistener).

## Platform notes

`getPlatformSync()` returns `"steam"`, `"msstore"`, `"gog"`, or another channel string.

Some nested APIs are Steam-only.

MS Store builds return `{ ok: false, errorCode: 'unsupported_platform' }` or no-op success where noted in the type docs.

Xbox sign-in and license listeners never fire on Steam.

File patching (`isFilePatchingActiveSync()`) is active on Steam when Workshop bundle patches are registered.

## Full generated reference

Every interface, property, method, `@param`, and `@returns` note lives on one page:

**[electron — generated API reference](api/electron.md)**

Declaration sources are split under `src/electron/` in the npm package (`bridge`, `platform`, `workshop`, `local-mods`, and related modules).

Deep imports are available, for example `@sandustry-modding/types/electron/bridge`.

## Related

- [configs](api/configs.md) — `modinfo.json`, `patches.json`, and `workshop.json` (mod files, not runtime APIs)
- [Sandkit API home](/) — `sandkit.api` reference and modding guides
- [Changelog](Changelog.md) — package history including electron types in 0.6.0
