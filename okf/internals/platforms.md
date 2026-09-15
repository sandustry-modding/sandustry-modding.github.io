---
type: Reference
title: Store platforms
description: Steam, Microsoft Store, and GOG detection in the Electron main process — absent from the Steam-only extract.
tags:
  - sandustry
  - okf
  - internals
  - platforms
  - electron
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:40:00Z
sources:
  - id: platform-js
    resource: sandustry/source/platform.js
  - id: main-js
    resource: sandustry/source/main.js
  - id: steam-platform
    resource: sandustry/source/platforms/steam.js
---

# Store platforms

Sandustry ships three storefront builds from one Electron main process.
The mod-template **Steam extract** (`npm run setup`) includes only `platforms/steam.js`.
`platforms/msstore.js` and `platforms/gog.js` are **not** in that tree.

A live Steam install `app.asar` file list (0.5.6) contains only:

- `platform.js`
- `platforms/steam.js`

MS Store and GOG module bodies ship in **other storefront builds**, not in the Steam channel package.
No public repo or extract in this workspace contains those files.

Facts below come from `sandustry/source/platform.js`, `main.js`, and `platforms/steam.js` on extract **0.5.6**.

## Detection order

`detectPlatform()` in `platform.js` returns `{ platform, branch }`.

| Step | Condition | `platform` | `branch` label |
| --- | --- | --- | --- |
| 1 | `process.env.SANDUSTRY_PLATFORM` set | env value | `SANDUSTRY_PLATFORM` |
| 2 | `process.windowsStore` truthy | `msstore` | `process.windowsStore` |
| 3 | `MicrosoftGame.config` next to `process.execPath` | `msstore` | `MicrosoftGame.config-next-to-exe` |
| 4 | `resources/gog.marker` exists under `process.resourcesPath` | `gog` | `gog.marker-in-resources` |
| 5 | default | `steam` | `default` |

`createPlatform(name)` loads `./platforms/<name>.js`.
Unknown names fall back to Steam with a console warning.

Renderer reads the resolved name through `electron.getPlatformSync()` — [Electron bridge](/okf/internals/electron.md).

## What each build exposes

| Feature | Steam | MS Store | GOG |
| --- | --- | --- | --- |
| `platforms/*.js` in extract | `steam.js` only | **missing** from Steam extract | **missing** from Steam extract |
| Workshop / `localMods` publish | Yes | No (`PLATFORM_NAME !== 'steam'` guards) | No |
| File patching (`sandustry-patch` protocol) | Yes | No — scheme not registered | No |
| Steam overlay URL validation | Yes | N/A | N/A |
| DevTools menu (default) | Yes | **Disabled** (`devTools: false`) | Same as Steam unless MS Store |
| Xbox license / Gaming Services gates | No | Yes — `msstoreStartupLicenseGate`, `msstoreStartupInitGate` | No |
| `onXboxUserSignedOut` / license listeners | No | Yes when platform hooks exist | No |
| GPU overlay flags (`OVERLAY_GPU_FLAGS`) | Applied | **Skipped** on MS Store | Applied |
| Cloud save path helpers | Steam cloud via `steam.js` | MS Store cloud via platform module | GOG module (not in extract) |
| Achievements | Steam API | Platform module | Platform module |

GOG-specific `main.js` branches were **not** found in the 0.5.6 extract — GOG uses the shared platform interface loaded from `platforms/gog.js` at runtime.

## Shared platform interface (from `main.js` + `platforms/steam.js`)

`createPlatform(name)` loads `./platforms/<name>.js`.
Each module exports a common shape; `main.js` calls optional methods when present.

| Method / field | Steam (`steam.js`) | MS Store (inferred from `main.js`) | GOG (inferred) |
| --- | --- | --- | --- |
| `init()` | Steamworks init + overlay | GDK / Xbox init (`msstoreStartupInitGate`) | Expected same contract |
| `isInitialized()` | yes | yes | yes |
| `getPlayerName()`, `getPlayerId()`, `getAppId()` | yes | yes | yes |
| Achievement unlock / query / clear | yes | yes (module body unknown) | yes (unknown) |
| Cloud save/load/delete + raw | yes | yes via `getCloudSavePath()` | yes (unknown) |
| `checkLicense()` | always `{ valid: true }` | Network + store license gate | Unknown |
| `primeAchievements(ids)` | no-op | Used on resume | Unknown |
| `writeGameEvent(name, dimensions?, measurements?)` | no-op | GDK `XGameEvent` (`SessionStart`, `SessionEnd`, telemetry) | Unknown |
| `overlayOpenUrl(url)` | Steam overlay | N/A on MS Store builds | Unknown |
| `workshop` bag | Full Steam Workshop API | **Absent** — guarded by `PLATFORM_NAME === 'steam'` | **Absent** |
| `getCloudSavePath()` | not used | Required for save path helpers | Unknown |
| `refreshGameSaveFolder()` | not used | Called on `powerMonitor` resume | Unknown |
| `flushPendingAchievementUnlocks()` | not used | Called on resume | Unknown |
| `onUserChange(cb)` | not used | `'signed-in'` / `'signed-out'` → renderer IPC | Unknown |
| `onLicenseChange(cb)` | not used | Re-runs license gate; may send `xbox-license-lost` | Unknown |
| `diagnostics()` | Steam init + app id | Platform module (unknown fields) | Unknown |

Do not invent MS Store or GOG cloud file names or achievement id maps from this table alone.

## Microsoft Store specifics (from `main.js`)

- Sets `app.setAppUserModelId` from `SANDUSTRY_MSSTORE_AUMID` or default `HoodedHorse.Sandustry_znaey1dw2bdpr!Game`.
- Startup may block on Xbox init failure dialogs and Gaming Services install prompt (`GAMING_SERVICES_URL`).
- License gate opens `msxbox://game/?productId=9PPH71DV44T7` when unlicensed.
- `writeGameEvent` telemetry hooks when the platform module provides them.
- Save-folder refresh on resume uses `platform.refreshGameSaveFolder` when present.

## Steam specifics (in extract)

`platforms/steam.js` wraps `steam.js` with app id **2764460**.
Implements achievements, cloud saves, overlay, and Workshop helpers guarded elsewhere by `PLATFORM_NAME === 'steam'`.

## Agent limits

- Do not infer MS Store or GOG IPC shapes from the Steam extract alone.
- Use `electron.getPlatformSync()` in a live session when behavior differs by channel.
- OKF documents **detection, guards, and interface calls** here.
- Per-store achievement ids, cloud manifest layout, and GDK event payloads stay open until `platforms/msstore.js` or `platforms/gog.js` is extracted from a matching storefront build.

## Related

- [Electron bridge](/okf/internals/electron.md)
- [Extract layout](/okf/references/extract-layout.md)
- [Gaps](/okf/internals/gaps.md)
