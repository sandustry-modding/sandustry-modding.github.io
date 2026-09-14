# electron

Renderer Electron bridge exposed by `contextBridge` as `window.electron`.

Source of truth: Sandustry `preload.js` (`contextBridge.exposeInMainWorld('electron', …)`).
Main-process handlers live in `main.js`.

Import from `@sandustry-modding/types/electron` for explicit types, or use the ambient
`electron` / `window.electron` bindings from `@sandustry-modding/types`.

Sync methods use `ipcRenderer.sendSync` and are safe during startup.
Async methods use `ipcRenderer.invoke` unless noted (`openDevTools`, `log`).

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### electron.ElectronBridge :id=electronbridge

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L33" target="_blank" rel="noopener">bridge.d.ts:33</a></p>

| Property | Type | Description |
| --- | --- | --- |
| localMods | <code>ElectronLocalModsApi</code> | Local developer mod folder helpers (`electron.localMods`). |
| macRightMouse | <code>ElectronMacRightMouseApi</code> | macOS right-button emulation helpers (`electron.macRightMouse`). |
| platform | <code>ElectronPlatformApi</code> | Cross-store platform helpers (`electron.platform`). |
| customMaps | <code>ElectronCustomMapsApi</code> | Custom map editor persistence helpers (`electron.customMaps`). |

<div class="smt-member-anchors">

##### localMods <!-- {docsify-ignore} -->

##### macRightMouse <!-- {docsify-ignore} -->

##### platform <!-- {docsify-ignore} -->

##### customMaps <!-- {docsify-ignore} -->

</div>

| Method | Signature | Description |
| --- | --- | --- |
| getPlatformSync() | <code>(): ElectronPlatform</code> | Return the active distribution channel. |
| getModdingEnabledSync() | <code>(): boolean</code> | Return whether local modding is enabled for this build/session. |
| getIsSteamDeckSync() | <code>(): boolean</code> | Return true on Steam Deck / gamescope hosts. |
| getPreferredSystemLanguagesSync() | <code>(): string[]</code> | Return BCP-47 language tags preferred by the OS. |
| onAppSuspend() | <code>(callback: ElectronIpcListener): void</code> | Register a callback for app suspend (sleep / Xbox quick suspend). |
| onAppResume() | <code>(callback: ElectronIpcListener): void</code> | Register a callback for app resume. |
| diagnostics() | <code>(): Promise&lt;JsonValueV1&gt;</code> | Return platform diagnostics JSON. |
| checkLicense() | <code>(): Promise&lt;ElectronLicenseCheckResult&gt;</code> | Check the MS Store license. Always returns `{ valid: true }` on Steam when platform checks are unavailable. |
| writeGameEvent() | <code>(eventName: string, dimensions?: Record&lt;string, string&gt;, measurements?: Record&lt;string, number&gt;): Promise&lt;boolean&gt;</code> | Send one telemetry event to the platform SDK when available. |
| platformPrimeAchievements() | <code>(ids: string[]): Promise&lt;ElectronPrimeAchievementsResult&gt;</code> | Prime the MS Store achievement cache after sign-in. No-op success on Steam. |
| platformShowReauthPrompt() | <code>(reason: string): Promise&lt;ElectronReauthPromptResult&gt;</code> | Show the native MS Store re-auth dialog. Resolves immediately with `{ dismissed: true }` on Steam. |
| appQuit() | <code>(): Promise&lt;ElectronSuccessResult&gt;</code> | Quit the application. Works in fullscreen where `window.close()` is unreliable. |
| openExternalBrowser() | <code>(url: string): Promise&lt;ElectronOpenUrlResult&gt;</code> | Open an external `https:` URL in the system browser. |
| onXboxUserSignedOut() | <code>(callback: ElectronIpcListener): void</code> | Register a callback for Xbox user sign-out. MS Store only — never fires on Steam. |
| onXboxLicenseLost() | <code>(callback: ElectronIpcListener): void</code> | Register a callback for Game Pass / Store license loss. MS Store only — never fires on Steam. |
| onXboxUserSignedIn() | <code>(callback: ElectronIpcListener): void</code> | Register a callback for Xbox user sign-in. MS Store only — never fires on Steam. |
| save() | <code>(id: string, name: string, data: JsonValueV1): Promise&lt;ElectronOperationResult&gt;</code> | Write one compressed save file (`.save`). |
| saveSerialized() | <code>(id: string, name: string, dataJson: string, metadata?: JsonValueV1): Promise&lt;ElectronOperationResult&gt;</code> | Write one save from pre-serialized JSON and metadata. |
| load() | <code>(id: string): Promise&lt;ElectronLoadResult&gt;</code> | Load one save slot by id. |
| deleteSave() | <code>(id: string): Promise&lt;ElectronSuccessResult &#124; ElectronFailureResult&gt;</code> | Delete one save slot and its backup file. |
| loadRaw() | <code>(name: string): Promise&lt;ElectronLoadResult &#124; null&gt;</code> | Load a raw save file by filename (including extension). |
| exportSave() | <code>(id: string): Promise&lt;ElectronExportSaveResult&gt;</code> | Export one save slot as raw bytes for backup/sharing. |
| importSave() | <code>(bytes: ArrayBuffer &#124; Uint8Array&lt;ArrayBufferLike&gt;): Promise&lt;ElectronImportSaveResult&gt;</code> | Import one save from raw exported bytes. |
| getSaveFiles() | <code>(): Promise&lt;ElectronSaveFileMetadata[]&gt;</code> | List save slot metadata parsed from each `.save` header line. |
| getSaveFolder() | <code>(): Promise&lt;string&gt;</code> | Return the absolute path to the active saves folder. |
| getLastPlayedGameSync() | <code>(): string &#124; null</code> | Return the last-played save id JSON string. |
| saveLastPlayedGame() | <code>(game: ElectronLastPlayedGame): Promise&lt;ElectronOperationResult&gt;</code> | Persist the last-played save id. |
| clearLastPlayedGame() | <code>(): Promise&lt;ElectronOperationResult&gt;</code> | Clear the persisted last-played save id. |
| saveExistsSync() | <code>(id: string): boolean</code> | Return whether a save file exists for the given id. |
| getSettingsSync() | <code>(): string &#124; null</code> | Return the settings JSON string from disk. |
| saveSettings() | <code>(settings: JsonValueV1): Promise&lt;ElectronOperationResult&gt;</code> | Persist renderer settings JSON to disk. |
| setFullscreen() | <code>(shouldBeFullscreen: boolean): Promise&lt;ElectronOperationResult&gt;</code> | Enter or leave fullscreen mode. |
| toggleFullscreen() | <code>(): Promise&lt;ElectronOperationResult&gt;</code> | Toggle fullscreen mode. |
| openDevTools() | <code>(): void</code> | Open Chromium DevTools for the game window. IPC: `open-devtools` (`send`). |
| isFilePatchingActiveSync() | <code>(): boolean</code> | Return true when the Steam patch protocol interceptor is active. |
| log() | <code>(level: ElectronLogLevel, scope: string, message: string): void</code> | Append one line to the host log file (`logs/main.log`). Fire-and-forget — never awaits IPC completion. |
| getSystemInfo() | <code>(): ElectronSystemInfo</code> | Return local process/runtime versions. Useful for bug reports and environment probes. |

<div class="smt-member-anchors">

##### getPlatformSync() <!-- {docsify-ignore} -->

##### getModdingEnabledSync() <!-- {docsify-ignore} -->

##### getIsSteamDeckSync() <!-- {docsify-ignore} -->

##### getPreferredSystemLanguagesSync() <!-- {docsify-ignore} -->

##### onAppSuspend() <!-- {docsify-ignore} -->

##### onAppResume() <!-- {docsify-ignore} -->

##### diagnostics() <!-- {docsify-ignore} -->

##### checkLicense() <!-- {docsify-ignore} -->

##### writeGameEvent() <!-- {docsify-ignore} -->

##### platformPrimeAchievements() <!-- {docsify-ignore} -->

##### platformShowReauthPrompt() <!-- {docsify-ignore} -->

##### appQuit() <!-- {docsify-ignore} -->

##### openExternalBrowser() <!-- {docsify-ignore} -->

##### onXboxUserSignedOut() <!-- {docsify-ignore} -->

##### onXboxLicenseLost() <!-- {docsify-ignore} -->

##### onXboxUserSignedIn() <!-- {docsify-ignore} -->

##### save() <!-- {docsify-ignore} -->

##### saveSerialized() <!-- {docsify-ignore} -->

##### load() <!-- {docsify-ignore} -->

##### deleteSave() <!-- {docsify-ignore} -->

##### loadRaw() <!-- {docsify-ignore} -->

##### exportSave() <!-- {docsify-ignore} -->

##### importSave() <!-- {docsify-ignore} -->

##### getSaveFiles() <!-- {docsify-ignore} -->

##### getSaveFolder() <!-- {docsify-ignore} -->

##### getLastPlayedGameSync() <!-- {docsify-ignore} -->

##### saveLastPlayedGame() <!-- {docsify-ignore} -->

##### clearLastPlayedGame() <!-- {docsify-ignore} -->

##### saveExistsSync() <!-- {docsify-ignore} -->

##### getSettingsSync() <!-- {docsify-ignore} -->

##### saveSettings() <!-- {docsify-ignore} -->

##### setFullscreen() <!-- {docsify-ignore} -->

##### toggleFullscreen() <!-- {docsify-ignore} -->

##### openDevTools() <!-- {docsify-ignore} -->

##### isFilePatchingActiveSync() <!-- {docsify-ignore} -->

##### log() <!-- {docsify-ignore} -->

##### getSystemInfo() <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### electron.ElectronCustomMapsApi :id=electroncustommapsapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/custom-maps.d.ts#L11" target="_blank" rel="noopener">custom-maps.d.ts:11</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| save() | <code>(id: string, name: string, data: JsonValueV1): Promise&lt;ElectronOperationResult&gt;</code> | Write one custom map file (`.custommap`). |
| load() | <code>(id: string): Promise&lt;JsonValueV1&gt;</code> | Load one custom map by id. |
| list() | <code>(): Promise&lt;JsonValueV1[]&gt;</code> | List custom map metadata entries (newest first). |
| delete() | <code>(id: string): Promise&lt;ElectronOperationResult&gt;</code> | Delete one custom map file. |

<div class="smt-member-anchors">

##### save() <!-- {docsify-ignore} -->

##### load() <!-- {docsify-ignore} -->

##### list() <!-- {docsify-ignore} -->

##### delete() <!-- {docsify-ignore} -->

</div>

Custom map editor persistence helpers exposed as `electron.customMaps`.

</div>

<div class="smt-member-card">

### electron.ElectronLocalModsApi :id=electronlocalmodsapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/local-mods.d.ts#L14" target="_blank" rel="noopener">local-mods.d.ts:14</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| getFolder() | <code>(): Promise&lt;string&gt;</code> | Return the absolute path to the OS local-mods folder. |
| openFolder() | <code>(): Promise&lt;ElectronOperationResult&gt;</code> | Open the local-mods folder in the OS file manager. |
| list() | <code>(): Promise&lt;ElectronLocalModsListResult&gt;</code> | List installed local mod summaries. Steam only — MS Store returns `{ ok: false, errorCode: 'unsupported_platform' }`. |
| upload() | <code>(modId: string): Promise&lt;ElectronLocalModsUploadResult&gt;</code> | Upload one local mod folder to Steam Workshop. |

<div class="smt-member-anchors">

##### getFolder() <!-- {docsify-ignore} -->

##### openFolder() <!-- {docsify-ignore} -->

##### list() <!-- {docsify-ignore} -->

##### upload() <!-- {docsify-ignore} -->

</div>

Local developer mod folder helpers exposed as `electron.localMods`.

</div>

<div class="smt-member-card">

### electron.ElectronMacRightMouseApi :id=electronmacrightmouseapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/mac-right-mouse.d.ts#L8" target="_blank" rel="noopener">mac-right-mouse.d.ts:8</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| watch() | <code>(active: boolean, probeScript?: string): void</code> | Enable or disable global right-button probing on macOS. |
| onPos() | <code>(callback: (x: number, y: number) =&gt; void): void</code> | Register a callback for synthetic right-button position updates. |
| onUp() | <code>(callback: () =&gt; void): void</code> | Register a callback for synthetic right-button release. |

<div class="smt-member-anchors">

##### watch() <!-- {docsify-ignore} -->

##### onPos() <!-- {docsify-ignore} -->

##### onUp() <!-- {docsify-ignore} -->

</div>

macOS right-button emulation helpers exposed as `electron.macRightMouse`.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformOverlayApi :id=electronplatformoverlayapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L11" target="_blank" rel="noopener">platform.d.ts:11</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| openUrl() | <code>(url: string): Promise&lt;unknown&gt;</code> | Open an `https:` URL in the platform overlay browser when available. |

<div class="smt-member-anchors">

##### openUrl() <!-- {docsify-ignore} -->

</div>

Platform overlay browser helpers exposed as `electron.platform.overlay`.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi :id=electronplatformapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L26" target="_blank" rel="noopener">platform.d.ts:26</a></p>

| Property | Type | Description |
| --- | --- | --- |
| workshop | <code>ElectronWorkshopApi</code> | Steam Workshop helpers (Steam only; MS Store calls fail gracefully). |
| overlay | <code>ElectronPlatformOverlayApi</code> | Platform overlay browser helpers. |

<div class="smt-member-anchors">

##### workshop <!-- {docsify-ignore} -->

##### overlay <!-- {docsify-ignore} -->

</div>

| Method | Signature | Description |
| --- | --- | --- |
| isInitialized() | <code>(): Promise&lt;boolean&gt;</code> | Return true when the platform integration finished startup. |
| getPlayerName() | <code>(): Promise&lt;string&gt;</code> | Return the signed-in player display name. |
| getPlayerId() | <code>(): Promise&lt;string&gt;</code> | Return the stable platform player id string. |
| getAppId() | <code>(): Promise&lt;number&gt;</code> | Return the platform app id number. |
| unlockAchievement() | <code>(achievementId: string): Promise&lt;unknown&gt;</code> | Unlock one platform achievement. |
| isAchievementUnlocked() | <code>(achievementId: string): Promise&lt;unknown&gt;</code> | Return whether an achievement is already unlocked. |
| clearAchievement() | <code>(achievementId: string): Promise&lt;unknown&gt;</code> | Clear one platform achievement (debug / QA). |
| cloudSave() | <code>(fileName: string, data: JsonValueV1): Promise&lt;unknown&gt;</code> | Write one named blob to platform cloud storage. |
| cloudLoad() | <code>(fileName: string): Promise&lt;unknown&gt;</code> | Read one named blob from platform cloud storage. |
| cloudFileExists() | <code>(fileName: string): Promise&lt;unknown&gt;</code> | Return whether a cloud file key exists. |
| cloudDelete() | <code>(fileName: string): Promise&lt;unknown&gt;</code> | Delete one named cloud file. |
| cloudSync() | <code>(): Promise&lt;unknown&gt;</code> | Sync local saves with platform cloud storage. |

<div class="smt-member-anchors">

##### isInitialized() <!-- {docsify-ignore} -->

##### getPlayerName() <!-- {docsify-ignore} -->

##### getPlayerId() <!-- {docsify-ignore} -->

##### getAppId() <!-- {docsify-ignore} -->

##### unlockAchievement() <!-- {docsify-ignore} -->

##### isAchievementUnlocked() <!-- {docsify-ignore} -->

##### clearAchievement() <!-- {docsify-ignore} -->

##### cloudSave() <!-- {docsify-ignore} -->

##### cloudLoad() <!-- {docsify-ignore} -->

##### cloudFileExists() <!-- {docsify-ignore} -->

##### cloudDelete() <!-- {docsify-ignore} -->

##### cloudSync() <!-- {docsify-ignore} -->

</div>

Cross-store platform helpers exposed as `electron.platform`.

</div>

<div class="smt-member-card">

### electron.ElectronSuccessResult :id=electronsuccessresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L10" target="_blank" rel="noopener">results.d.ts:10</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | <code>true</code> | Always `true` for this branch of the result union. |
| path? | <code>string</code> | Absolute path written when a handler persists a file (save/custom map). |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### path? <!-- {docsify-ignore} -->

</div>

Successful invoke result from save, settings, and window handlers.

</div>

<div class="smt-member-card">

### electron.ElectronFailureResult :id=electronfailureresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L20" target="_blank" rel="noopener">results.d.ts:20</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | <code>false</code> | Always `false` for this branch of the result union. |
| error | <code>string</code> | Human-readable error message from the main process. |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### error <!-- {docsify-ignore} -->

</div>

Failed invoke result from save, settings, and window handlers.

</div>

<div class="smt-member-card">

### electron.ElectronLicenseCheckResult :id=electronlicensecheckresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L35" target="_blank" rel="noopener">results.d.ts:35</a></p>

| Property | Type | Description |
| --- | --- | --- |
| valid | <code>boolean</code> | Whether the current license is valid for play. |
| reason | <code>string &#124; null</code> | Failure reason when `valid` is false; otherwise `null`. |
| networkError | <code>boolean</code> | True when the check failed due to network or platform errors. |
| cached | <code>boolean</code> | True when the result came from a cached license check. |

<div class="smt-member-anchors">

##### valid <!-- {docsify-ignore} -->

##### reason <!-- {docsify-ignore} -->

##### networkError <!-- {docsify-ignore} -->

##### cached <!-- {docsify-ignore} -->

</div>

MS Store license check result from [ElectronBridge.checkLicense](?id=checklicense).

</div>

<div class="smt-member-card">

### electron.ElectronSaveInput :id=electronsaveinput

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L49" target="_blank" rel="noopener">results.d.ts:49</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Save slot id (sanitized filename stem). |
| name | <code>string</code> | Display name shown in the save UI. |
| data | <code>JsonValueV1</code> | Full serialized game state (`{ store: … }` shape). |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### name <!-- {docsify-ignore} -->

##### data <!-- {docsify-ignore} -->

</div>

Parsed game save payload passed to [ElectronBridge.save](?id=save).

</div>

<div class="smt-member-card">

### electron.ElectronLoadSuccessResult :id=electronloadsuccessresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L61" target="_blank" rel="noopener">results.d.ts:61</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | <code>true</code> | Always `true` for this branch of the result union. |
| data | <code>JsonValueV1</code> | Parsed save body (`{ store: … }`). |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### data <!-- {docsify-ignore} -->

</div>

Successful load result from [ElectronBridge.load](?id=load).

</div>

<div class="smt-member-card">

### electron.ElectronLoadFailureResult :id=electronloadfailureresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L71" target="_blank" rel="noopener">results.d.ts:71</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | <code>false</code> | Always `false` for this branch of the result union. |
| error | <code>string</code> | Human-readable load failure message. |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### error <!-- {docsify-ignore} -->

</div>

Failed load result from [ElectronBridge.load](?id=load).

</div>

<div class="smt-member-card">

### electron.ElectronSaveFileMetadata :id=electronsavefilemetadata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L86" target="_blank" rel="noopener">results.d.ts:86</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Save slot id (filename stem). |
| name | <code>string</code> | Display name stored in the save header. |
| timestamp | <code>string</code> | ISO timestamp string when the save was written. |
| playTime? | <code>number</code> | Total play time in milliseconds from the save body. |
| worldId? | <code>string &#124; null</code> | World template id, if present. |
| worldName? | <code>string &#124; null</code> | World display name, if present. |
| seed? | <code>number &#124; null</code> | World seed, if present. |
| productionPoints? | <code>number</code> | Factory production points at save time. |
| structureCount? | <code>number</code> | Number of placed structures at save time. |
| resources? | <code>JsonValueV1</code> | Resource snapshot (`gold`, `fluxite`, `artifacts`, …). |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### name <!-- {docsify-ignore} -->

##### timestamp <!-- {docsify-ignore} -->

##### playTime? <!-- {docsify-ignore} -->

##### worldId? <!-- {docsify-ignore} -->

##### worldName? <!-- {docsify-ignore} -->

##### seed? <!-- {docsify-ignore} -->

##### productionPoints? <!-- {docsify-ignore} -->

##### structureCount? <!-- {docsify-ignore} -->

##### resources? <!-- {docsify-ignore} -->

</div>

Metadata parsed from the first line of one `.save` file.

Returned by [ElectronBridge.getSaveFiles](?id=getsavefiles).

</div>

<div class="smt-member-card">

### electron.ElectronExportSaveSuccessResult :id=electronexportsavesuccessresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L112" target="_blank" rel="noopener">results.d.ts:112</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | <code>true</code> | Always `true` for this branch of the result union. |
| data | <code>Uint8Array</code> | Raw `.save` file bytes (metadata line + gzip payload). |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### data <!-- {docsify-ignore} -->

</div>

Successful export result from [ElectronBridge.exportSave](?id=exportsave).

</div>

<div class="smt-member-card">

### electron.ElectronImportSaveSuccessResult :id=electronimportsavesuccessresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L127" target="_blank" rel="noopener">results.d.ts:127</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | <code>true</code> | Always `true` for this branch of the result union. |
| metaData | <code>JsonValueV1</code> | Metadata parsed from the imported file header line. |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### metaData <!-- {docsify-ignore} -->

</div>

Successful import result from [ElectronBridge.importSave](?id=importsave).

</div>

<div class="smt-member-card">

### electron.ElectronLastPlayedGame :id=electronlastplayedgame

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L140" target="_blank" rel="noopener">results.d.ts:140</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id? | <code>string</code> | Save slot id of the last played game. |

<div class="smt-member-anchors">

##### id? <!-- {docsify-ignore} -->

</div>

Last-played save marker written by [ElectronBridge.saveLastPlayedGame](?id=savelastplayedgame).

</div>

<div class="smt-member-card">

### electron.ElectronSystemInfo :id=electronsysteminfo

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L150" target="_blank" rel="noopener">results.d.ts:150</a></p>

| Property | Type | Description |
| --- | --- | --- |
| platform | <code>string</code> | Node `process.platform` (for example `linux`, `win32`). |
| arch | <code>string</code> | CPU architecture string from `process.arch`. |
| electronVersion | <code>string</code> | Electron runtime version from `process.versions.electron`. |
| chromeVersion | <code>string</code> | Chromium version from `process.versions.chrome`. |
| nodeVersion | <code>string</code> | Node.js version from `process.versions.node`. |

<div class="smt-member-anchors">

##### platform <!-- {docsify-ignore} -->

##### arch <!-- {docsify-ignore} -->

##### electronVersion <!-- {docsify-ignore} -->

##### chromeVersion <!-- {docsify-ignore} -->

##### nodeVersion <!-- {docsify-ignore} -->

</div>

Local process/runtime versions from [ElectronBridge.getSystemInfo](?id=getsysteminfo).

Read directly in the preload script — no IPC round trip.

</div>

<div class="smt-member-card">

### electron.ElectronLocalModsListResult :id=electronlocalmodslistresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L166" target="_blank" rel="noopener">results.d.ts:166</a></p>

| Property | Type | Description |
| --- | --- | --- |
| ok | <code>boolean</code> | True when the listing succeeded. |
| data | <code>JsonValueV1[]</code> | Local mod summary objects when `ok` is true; otherwise `[]`. |
| errorCode? | <code>string</code> | Error code when `ok` is false (for example `unsupported_platform`). |

<div class="smt-member-anchors">

##### ok <!-- {docsify-ignore} -->

##### data <!-- {docsify-ignore} -->

##### errorCode? <!-- {docsify-ignore} -->

</div>

Result from [ElectronLocalModsApi.list](?id=list-1).

</div>

<div class="smt-member-card">

### electron.ElectronLocalModsUploadResult :id=electronlocalmodsuploadresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L178" target="_blank" rel="noopener">results.d.ts:178</a></p>

| Property | Type | Description |
| --- | --- | --- |
| ok | <code>boolean</code> | True when Workshop upload succeeded. |
| errorCode? | <code>string</code> | Error code when `ok` is false. |
| detail? | <code>string</code> | Extra failure detail logged by the main process. |

<div class="smt-member-anchors">

##### ok <!-- {docsify-ignore} -->

##### errorCode? <!-- {docsify-ignore} -->

##### detail? <!-- {docsify-ignore} -->

</div>

Result from [ElectronLocalModsApi.upload](?id=upload).

</div>

<div class="smt-member-card">

### electron.ElectronOpenUrlResult :id=electronopenurlresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L190" target="_blank" rel="noopener">results.d.ts:190</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | <code>boolean</code> | True when the OS opened the URL. |
| error? | <code>string</code> | Failure reason (for example `unsupported-url`). |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### error? <!-- {docsify-ignore} -->

</div>

Result from [ElectronBridge.openExternalBrowser](?id=openexternalbrowser).

</div>

<div class="smt-member-card">

### electron.ElectronPrimeAchievementsResult :id=electronprimeachievementsresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L200" target="_blank" rel="noopener">results.d.ts:200</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | <code>boolean</code> | True when the cache seed completed. |
| error? | <code>string</code> | Failure message when `success` is false. |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### error? <!-- {docsify-ignore} -->

</div>

Result from [ElectronBridge.platformPrimeAchievements](?id=platformprimeachievements).

</div>

<div class="smt-member-card">

### electron.ElectronReauthPromptResult :id=electronreauthpromptresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L210" target="_blank" rel="noopener">results.d.ts:210</a></p>

| Property | Type | Description |
| --- | --- | --- |
| response? | <code>number</code> | Button index chosen in the native MS Store dialog. |
| dismissed? | <code>boolean</code> | True on Steam where no dialog is shown. |

<div class="smt-member-anchors">

##### response? <!-- {docsify-ignore} -->

##### dismissed? <!-- {docsify-ignore} -->

</div>

Result from [ElectronBridge.platformShowReauthPrompt](?id=platformshowreauthprompt).

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopApi :id=electronworkshopapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L12" target="_blank" rel="noopener">workshop.d.ts:12</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| subscribe() | <code>(itemId: string &#124; number): Promise&lt;unknown&gt;</code> | Subscribe to a Workshop item. |
| unsubscribe() | <code>(itemId: string &#124; number): Promise&lt;unknown&gt;</code> | Unsubscribe from a Workshop item. |
| installInfo() | <code>(itemId: string &#124; number): Promise&lt;unknown&gt;</code> | Return install state for a subscribed Workshop item. |
| downloadInfo() | <code>(itemId: string &#124; number): Promise&lt;unknown&gt;</code> | Return download progress for a Workshop item. |
| getState() | <code>(itemId: string &#124; number): Promise&lt;unknown&gt;</code> | Return the Steam Workshop item state flags. |
| getSubscribedItems() | <code>(): Promise&lt;unknown&gt;</code> | Return all subscribed Workshop item ids. |
| getItem() | <code>(itemId: string &#124; number): Promise&lt;unknown&gt;</code> | Fetch Workshop item metadata. |
| download() | <code>(itemId: string &#124; number, highPriority?: boolean): Promise&lt;unknown&gt;</code> | Queue or prioritize a Workshop item download. |
| getSandkitMods() | <code>(): Promise&lt;unknown&gt;</code> | Discover Sandkit Workshop mods installed for the current session. |

<div class="smt-member-anchors">

##### subscribe() <!-- {docsify-ignore} -->

##### unsubscribe() <!-- {docsify-ignore} -->

##### installInfo() <!-- {docsify-ignore} -->

##### downloadInfo() <!-- {docsify-ignore} -->

##### getState() <!-- {docsify-ignore} -->

##### getSubscribedItems() <!-- {docsify-ignore} -->

##### getItem() <!-- {docsify-ignore} -->

##### download() <!-- {docsify-ignore} -->

##### getSandkitMods() <!-- {docsify-ignore} -->

</div>

Steam Workshop helpers exposed as `electron.platform.workshop`.

Steam only — calls fail gracefully on MS Store.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### electron.ElectronPlatform :id=electronplatform

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/primitives.d.ts#L10" target="_blank" rel="noopener">primitives.d.ts:10</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronPlatform = &quot;steam&quot; | &quot;msstore&quot; | &quot;gog&quot; | string &amp; object">

```ts
ElectronPlatform = "steam" | "msstore" | "gog" | string & object
```

</div>

Sandustry distribution channel string.

Returned by [ElectronBridge.getPlatformSync](?id=getplatformsync).

</div>

<div class="smt-member-card">

### electron.ElectronLogLevel :id=electronloglevel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/primitives.d.ts#L17" target="_blank" rel="noopener">primitives.d.ts:17</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronLogLevel = &quot;debug&quot; | &quot;info&quot; | &quot;warn&quot; | &quot;error&quot;">

```ts
ElectronLogLevel = "debug" | "info" | "warn" | "error"
```

</div>

Severity level written through [ElectronBridge.log](?id=log).

Maps to the main-process file logger (`logs/main.log`).

</div>

<div class="smt-member-card">

### electron.ElectronIpcListener :id=electronipclistener

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/primitives.d.ts#L24" target="_blank" rel="noopener">primitives.d.ts:24</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronIpcListener = (...args: unknown[]) =&gt; void">

```ts
ElectronIpcListener = (...args: unknown[]) => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Event-specific payload from the main process (often empty). |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Callback registered on IPC event channels such as `app-suspend`.

</div>

<div class="smt-member-card">

### electron.ElectronOperationResult :id=electronoperationresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L30" target="_blank" rel="noopener">results.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronOperationResult = ElectronSuccessResult | ElectronFailureResult">

```ts
ElectronOperationResult = ElectronSuccessResult | ElectronFailureResult
```

</div>

Result union returned by most save, settings, and window invoke handlers.

</div>

<div class="smt-member-card">

### electron.ElectronLoadResult :id=electronloadresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L79" target="_blank" rel="noopener">results.d.ts:79</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronLoadResult = ElectronLoadSuccessResult | ElectronLoadFailureResult">

```ts
ElectronLoadResult = ElectronLoadSuccessResult | ElectronLoadFailureResult
```

</div>

Result from [ElectronBridge.load](?id=load).

</div>

<div class="smt-member-card">

### electron.ElectronExportSaveResult :id=electronexportsaveresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L120" target="_blank" rel="noopener">results.d.ts:120</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronExportSaveResult = ElectronExportSaveSuccessResult | ElectronFailureResult">

```ts
ElectronExportSaveResult = ElectronExportSaveSuccessResult | ElectronFailureResult
```

</div>

Result from [ElectronBridge.exportSave](?id=exportsave).

</div>

<div class="smt-member-card">

### electron.ElectronImportSaveResult :id=electronimportsaveresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L135" target="_blank" rel="noopener">results.d.ts:135</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronImportSaveResult = ElectronImportSaveSuccessResult | ElectronFailureResult">

```ts
ElectronImportSaveResult = ElectronImportSaveSuccessResult | ElectronFailureResult
```

</div>

Result from [ElectronBridge.importSave](?id=importsave).

</div>
