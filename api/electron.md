# electron

Renderer Electron bridge exposed by `contextBridge` as `window.electron`.

Source of truth: Sandustry `preload.js` (`contextBridge.exposeInMainWorld('electron', …)`).
Main-process handlers live in `main.js`.

Import from `@sandustry-modding/types/electron` for explicit types, or use the ambient
`electron` / `window.electron` bindings from `@sandustry-modding/types`.

Sync methods use `ipcRenderer.sendSync` and are safe during startup.
Async methods use `ipcRenderer.invoke` unless noted (`openDevTools`, `log`).

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### electron.ElectronBridge :id=electronbridge

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L33" target="_blank" rel="noopener">bridge.d.ts:33</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronBridge = object">

```ts
ElectronBridge = object
```

</div>

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


</div>

<div class="smt-member-card">

### electron.ElectronBridge.getPlatformSync :id=electronbridge-getplatformsync

<div class="smt-member-sig" data-sig="getPlatformSync(): ElectronPlatform">

```ts
getPlatformSync(): ElectronPlatform
```

</div>

Return the active distribution channel.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.getModdingEnabledSync :id=electronbridge-getmoddingenabledsync

<div class="smt-member-sig" data-sig="getModdingEnabledSync(): boolean">

```ts
getModdingEnabledSync(): boolean
```

</div>

Return whether local modding is enabled for this build/session.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.getIsSteamDeckSync :id=electronbridge-getissteamdecksync

<div class="smt-member-sig" data-sig="getIsSteamDeckSync(): boolean">

```ts
getIsSteamDeckSync(): boolean
```

</div>

Return true on Steam Deck / gamescope hosts.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.getPreferredSystemLanguagesSync :id=electronbridge-getpreferredsystemlanguagessync

<div class="smt-member-sig" data-sig="getPreferredSystemLanguagesSync(): string[]">

```ts
getPreferredSystemLanguagesSync(): string[]
```

</div>

Return BCP-47 language tags preferred by the OS.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.onAppSuspend :id=electronbridge-onappsuspend

<div class="smt-member-sig" data-sig="onAppSuspend(callback: ElectronIpcListener): void">

```ts
onAppSuspend(callback: ElectronIpcListener): void
```

</div>

Register a callback for app suspend (sleep / Xbox quick suspend).

</div>

<div class="smt-member-card">

### electron.ElectronBridge.onAppResume :id=electronbridge-onappresume

<div class="smt-member-sig" data-sig="onAppResume(callback: ElectronIpcListener): void">

```ts
onAppResume(callback: ElectronIpcListener): void
```

</div>

Register a callback for app resume.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.diagnostics :id=electronbridge-diagnostics

<div class="smt-member-sig" data-sig="diagnostics(): Promise&lt;JsonValueV1&gt;">

```ts
diagnostics(): Promise<JsonValueV1>
```

</div>

Return platform diagnostics JSON.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.checkLicense :id=electronbridge-checklicense

<div class="smt-member-sig" data-sig="checkLicense(): Promise&lt;ElectronLicenseCheckResult&gt;">

```ts
checkLicense(): Promise<ElectronLicenseCheckResult>
```

</div>

Check the MS Store license. Always returns `{ valid: true }` on Steam when platform checks are unavailable.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.writeGameEvent :id=electronbridge-writegameevent

<div class="smt-member-sig" data-sig="writeGameEvent(eventName: string, dimensions?: Record&lt;string, string&gt;, measurements?: Record&lt;string, number&gt;): Promise&lt;boolean&gt;">

```ts
writeGameEvent(eventName: string, dimensions?: Record<string, string>, measurements?: Record<string, number>): Promise<boolean>
```

</div>

Send one telemetry event to the platform SDK when available.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.platformPrimeAchievements :id=electronbridge-platformprimeachievements

<div class="smt-member-sig" data-sig="platformPrimeAchievements(ids: string[]): Promise&lt;ElectronPrimeAchievementsResult&gt;">

```ts
platformPrimeAchievements(ids: string[]): Promise<ElectronPrimeAchievementsResult>
```

</div>

Prime the MS Store achievement cache after sign-in. No-op success on Steam.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.platformShowReauthPrompt :id=electronbridge-platformshowreauthprompt

<div class="smt-member-sig" data-sig="platformShowReauthPrompt(reason: string): Promise&lt;ElectronReauthPromptResult&gt;">

```ts
platformShowReauthPrompt(reason: string): Promise<ElectronReauthPromptResult>
```

</div>

Show the native MS Store re-auth dialog. Resolves immediately with `{ dismissed: true }` on Steam.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.appQuit :id=electronbridge-appquit

<div class="smt-member-sig" data-sig="appQuit(): Promise&lt;ElectronSuccessResult&gt;">

```ts
appQuit(): Promise<ElectronSuccessResult>
```

</div>

Quit the application. Works in fullscreen where `window.close()` is unreliable.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.openExternalBrowser :id=electronbridge-openexternalbrowser

<div class="smt-member-sig" data-sig="openExternalBrowser(url: string): Promise&lt;ElectronOpenUrlResult&gt;">

```ts
openExternalBrowser(url: string): Promise<ElectronOpenUrlResult>
```

</div>

Open an external `https:` URL in the system browser.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.onXboxUserSignedOut :id=electronbridge-onxboxusersignedout

<div class="smt-member-sig" data-sig="onXboxUserSignedOut(callback: ElectronIpcListener): void">

```ts
onXboxUserSignedOut(callback: ElectronIpcListener): void
```

</div>

Register a callback for Xbox user sign-out. MS Store only — never fires on Steam.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.onXboxLicenseLost :id=electronbridge-onxboxlicenselost

<div class="smt-member-sig" data-sig="onXboxLicenseLost(callback: ElectronIpcListener): void">

```ts
onXboxLicenseLost(callback: ElectronIpcListener): void
```

</div>

Register a callback for Game Pass / Store license loss. MS Store only — never fires on Steam.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.onXboxUserSignedIn :id=electronbridge-onxboxusersignedin

<div class="smt-member-sig" data-sig="onXboxUserSignedIn(callback: ElectronIpcListener): void">

```ts
onXboxUserSignedIn(callback: ElectronIpcListener): void
```

</div>

Register a callback for Xbox user sign-in. MS Store only — never fires on Steam.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.save :id=electronbridge-save

<div class="smt-member-sig" data-sig="save(id: string, name: string, data: JsonValueV1): Promise&lt;ElectronOperationResult&gt;">

```ts
save(id: string, name: string, data: JsonValueV1): Promise<ElectronOperationResult>
```

</div>

Write one compressed save file (`.save`).

</div>

<div class="smt-member-card">

### electron.ElectronBridge.saveSerialized :id=electronbridge-saveserialized

<div class="smt-member-sig" data-sig="saveSerialized(id: string, name: string, dataJson: string, metadata?: JsonValueV1): Promise&lt;ElectronOperationResult&gt;">

```ts
saveSerialized(id: string, name: string, dataJson: string, metadata?: JsonValueV1): Promise<ElectronOperationResult>
```

</div>

Write one save from pre-serialized JSON and metadata.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.load :id=electronbridge-load

<div class="smt-member-sig" data-sig="load(id: string): Promise&lt;ElectronLoadResult&gt;">

```ts
load(id: string): Promise<ElectronLoadResult>
```

</div>

Load one save slot by id.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.deleteSave :id=electronbridge-deletesave

<div class="smt-member-sig" data-sig="deleteSave(id: string): Promise&lt;ElectronSuccessResult | ElectronFailureResult&gt;">

```ts
deleteSave(id: string): Promise<ElectronSuccessResult | ElectronFailureResult>
```

</div>

Delete one save slot and its backup file.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.loadRaw :id=electronbridge-loadraw

<div class="smt-member-sig" data-sig="loadRaw(name: string): Promise&lt;ElectronLoadResult | null&gt;">

```ts
loadRaw(name: string): Promise<ElectronLoadResult | null>
```

</div>

Load a raw save file by filename (including extension).

</div>

<div class="smt-member-card">

### electron.ElectronBridge.exportSave :id=electronbridge-exportsave

<div class="smt-member-sig" data-sig="exportSave(id: string): Promise&lt;ElectronExportSaveResult&gt;">

```ts
exportSave(id: string): Promise<ElectronExportSaveResult>
```

</div>

Export one save slot as raw bytes for backup/sharing.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.importSave :id=electronbridge-importsave

<div class="smt-member-sig" data-sig="importSave(bytes: ArrayBuffer | Uint8Array&lt;ArrayBufferLike&gt;): Promise&lt;ElectronImportSaveResult&gt;">

```ts
importSave(bytes: ArrayBuffer | Uint8Array<ArrayBufferLike>): Promise<ElectronImportSaveResult>
```

</div>

Import one save from raw exported bytes.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.getSaveFiles :id=electronbridge-getsavefiles

<div class="smt-member-sig" data-sig="getSaveFiles(): Promise&lt;ElectronSaveFileMetadata[]&gt;">

```ts
getSaveFiles(): Promise<ElectronSaveFileMetadata[]>
```

</div>

List save slot metadata parsed from each `.save` header line.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.getSaveFolder :id=electronbridge-getsavefolder

<div class="smt-member-sig" data-sig="getSaveFolder(): Promise&lt;string&gt;">

```ts
getSaveFolder(): Promise<string>
```

</div>

Return the absolute path to the active saves folder.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.getLastPlayedGameSync :id=electronbridge-getlastplayedgamesync

<div class="smt-member-sig" data-sig="getLastPlayedGameSync(): string | null">

```ts
getLastPlayedGameSync(): string | null
```

</div>

Return the last-played save id JSON string.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.saveLastPlayedGame :id=electronbridge-savelastplayedgame

<div class="smt-member-sig" data-sig="saveLastPlayedGame(game: ElectronLastPlayedGame): Promise&lt;ElectronOperationResult&gt;">

```ts
saveLastPlayedGame(game: ElectronLastPlayedGame): Promise<ElectronOperationResult>
```

</div>

Persist the last-played save id.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.clearLastPlayedGame :id=electronbridge-clearlastplayedgame

<div class="smt-member-sig" data-sig="clearLastPlayedGame(): Promise&lt;ElectronOperationResult&gt;">

```ts
clearLastPlayedGame(): Promise<ElectronOperationResult>
```

</div>

Clear the persisted last-played save id.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.saveExistsSync :id=electronbridge-saveexistssync

<div class="smt-member-sig" data-sig="saveExistsSync(id: string): boolean">

```ts
saveExistsSync(id: string): boolean
```

</div>

Return whether a save file exists for the given id.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.getSettingsSync :id=electronbridge-getsettingssync

<div class="smt-member-sig" data-sig="getSettingsSync(): string | null">

```ts
getSettingsSync(): string | null
```

</div>

Return the settings JSON string from disk.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.saveSettings :id=electronbridge-savesettings

<div class="smt-member-sig" data-sig="saveSettings(settings: JsonValueV1): Promise&lt;ElectronOperationResult&gt;">

```ts
saveSettings(settings: JsonValueV1): Promise<ElectronOperationResult>
```

</div>

Persist renderer settings JSON to disk.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.setFullscreen :id=electronbridge-setfullscreen

<div class="smt-member-sig" data-sig="setFullscreen(shouldBeFullscreen: boolean): Promise&lt;ElectronOperationResult&gt;">

```ts
setFullscreen(shouldBeFullscreen: boolean): Promise<ElectronOperationResult>
```

</div>

Enter or leave fullscreen mode.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.toggleFullscreen :id=electronbridge-togglefullscreen

<div class="smt-member-sig" data-sig="toggleFullscreen(): Promise&lt;ElectronOperationResult&gt;">

```ts
toggleFullscreen(): Promise<ElectronOperationResult>
```

</div>

Toggle fullscreen mode.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.openDevTools :id=electronbridge-opendevtools

<div class="smt-member-sig" data-sig="openDevTools(): void">

```ts
openDevTools(): void
```

</div>

Open Chromium DevTools for the game window. IPC: `open-devtools` (`send`).

</div>

<div class="smt-member-card">

### electron.ElectronBridge.isFilePatchingActiveSync :id=electronbridge-isfilepatchingactivesync

<div class="smt-member-sig" data-sig="isFilePatchingActiveSync(): boolean">

```ts
isFilePatchingActiveSync(): boolean
```

</div>

Return true when the Steam patch protocol interceptor is active.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.log :id=electronbridge-log

<div class="smt-member-sig" data-sig="log(level: ElectronLogLevel, scope: string, message: string): void">

```ts
log(level: ElectronLogLevel, scope: string, message: string): void
```

</div>

Append one line to the host log file (`logs/main.log`). Fire-and-forget — never awaits IPC completion.

</div>

<div class="smt-member-card">

### electron.ElectronBridge.getSystemInfo :id=electronbridge-getsysteminfo

<div class="smt-member-sig" data-sig="getSystemInfo(): ElectronSystemInfo">

```ts
getSystemInfo(): ElectronSystemInfo
```

</div>

Return local process/runtime versions. Useful for bug reports and environment probes.

</div>
<div class="smt-member-card">

### electron.ElectronCustomMapsApi :id=electroncustommapsapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/custom-maps.d.ts#L11" target="_blank" rel="noopener">custom-maps.d.ts:11</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronCustomMapsApi = object">

```ts
ElectronCustomMapsApi = object
```

</div>


Custom map editor persistence helpers exposed as `electron.customMaps`.

</div>

<div class="smt-member-card">

### electron.ElectronCustomMapsApi.save :id=electroncustommapsapi-save

<div class="smt-member-sig" data-sig="save(id: string, name: string, data: JsonValueV1): Promise&lt;ElectronOperationResult&gt;">

```ts
save(id: string, name: string, data: JsonValueV1): Promise<ElectronOperationResult>
```

</div>

Write one custom map file (`.custommap`).

</div>

<div class="smt-member-card">

### electron.ElectronCustomMapsApi.load :id=electroncustommapsapi-load

<div class="smt-member-sig" data-sig="load(id: string): Promise&lt;JsonValueV1&gt;">

```ts
load(id: string): Promise<JsonValueV1>
```

</div>

Load one custom map by id.

</div>

<div class="smt-member-card">

### electron.ElectronCustomMapsApi.list :id=electroncustommapsapi-list

<div class="smt-member-sig" data-sig="list(): Promise&lt;JsonValueV1[]&gt;">

```ts
list(): Promise<JsonValueV1[]>
```

</div>

List custom map metadata entries (newest first).

</div>

<div class="smt-member-card">

### electron.ElectronCustomMapsApi.delete :id=electroncustommapsapi-delete

<div class="smt-member-sig" data-sig="delete(id: string): Promise&lt;ElectronOperationResult&gt;">

```ts
delete(id: string): Promise<ElectronOperationResult>
```

</div>

Delete one custom map file.

</div>
<div class="smt-member-card">

### electron.ElectronLocalModsApi :id=electronlocalmodsapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/local-mods.d.ts#L14" target="_blank" rel="noopener">local-mods.d.ts:14</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronLocalModsApi = object">

```ts
ElectronLocalModsApi = object
```

</div>


Local developer mod folder helpers exposed as `electron.localMods`.

</div>

<div class="smt-member-card">

### electron.ElectronLocalModsApi.getFolder :id=electronlocalmodsapi-getfolder

<div class="smt-member-sig" data-sig="getFolder(): Promise&lt;string&gt;">

```ts
getFolder(): Promise<string>
```

</div>

Return the absolute path to the OS local-mods folder.

</div>

<div class="smt-member-card">

### electron.ElectronLocalModsApi.openFolder :id=electronlocalmodsapi-openfolder

<div class="smt-member-sig" data-sig="openFolder(): Promise&lt;ElectronOperationResult&gt;">

```ts
openFolder(): Promise<ElectronOperationResult>
```

</div>

Open the local-mods folder in the OS file manager.

</div>

<div class="smt-member-card">

### electron.ElectronLocalModsApi.list :id=electronlocalmodsapi-list

<div class="smt-member-sig" data-sig="list(): Promise&lt;ElectronLocalModsListResult&gt;">

```ts
list(): Promise<ElectronLocalModsListResult>
```

</div>

List installed local mod summaries. Steam only — MS Store returns `{ ok: false, errorCode: 'unsupported_platform' }`.

</div>

<div class="smt-member-card">

### electron.ElectronLocalModsApi.upload :id=electronlocalmodsapi-upload

<div class="smt-member-sig" data-sig="upload(modId: string): Promise&lt;ElectronLocalModsUploadResult&gt;">

```ts
upload(modId: string): Promise<ElectronLocalModsUploadResult>
```

</div>

Upload one local mod folder to Steam Workshop.

</div>
<div class="smt-member-card">

### electron.ElectronMacRightMouseApi :id=electronmacrightmouseapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/mac-right-mouse.d.ts#L8" target="_blank" rel="noopener">mac-right-mouse.d.ts:8</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronMacRightMouseApi = object">

```ts
ElectronMacRightMouseApi = object
```

</div>


macOS right-button emulation helpers exposed as `electron.macRightMouse`.

</div>

<div class="smt-member-card">

### electron.ElectronMacRightMouseApi.watch :id=electronmacrightmouseapi-watch

<div class="smt-member-sig" data-sig="watch(active: boolean, probeScript?: string): void">

```ts
watch(active: boolean, probeScript?: string): void
```

</div>

Enable or disable global right-button probing on macOS.

</div>

<div class="smt-member-card">

### electron.ElectronMacRightMouseApi.onPos :id=electronmacrightmouseapi-onpos

<div class="smt-member-sig" data-sig="onPos(callback: (x: number, y: number) =&gt; void): void">

```ts
onPos(callback: (x: number, y: number) => void): void
```

</div>

Register a callback for synthetic right-button position updates.

</div>

<div class="smt-member-card">

### electron.ElectronMacRightMouseApi.onUp :id=electronmacrightmouseapi-onup

<div class="smt-member-sig" data-sig="onUp(callback: () =&gt; void): void">

```ts
onUp(callback: () => void): void
```

</div>

Register a callback for synthetic right-button release.

</div>
<div class="smt-member-card">

### electron.ElectronPlatformOverlayApi :id=electronplatformoverlayapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L11" target="_blank" rel="noopener">platform.d.ts:11</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronPlatformOverlayApi = object">

```ts
ElectronPlatformOverlayApi = object
```

</div>


Platform overlay browser helpers exposed as `electron.platform.overlay`.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformOverlayApi.openUrl :id=electronplatformoverlayapi-openurl

<div class="smt-member-sig" data-sig="openUrl(url: string): Promise&lt;false | { ok: boolean; error?: string; }&gt;">

```ts
openUrl(url: string): Promise<false | { ok: boolean; error?: string; }>
```

</div>

Open an `https:` URL in the platform overlay browser when available.

</div>
<div class="smt-member-card">

### electron.ElectronPlatformApi :id=electronplatformapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L26" target="_blank" rel="noopener">platform.d.ts:26</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronPlatformApi = object">

```ts
ElectronPlatformApi = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| workshop | <code>ElectronWorkshopApi</code> | Steam Workshop helpers (Steam only; MS Store calls fail gracefully). |
| overlay | <code>ElectronPlatformOverlayApi</code> | Platform overlay browser helpers. |

<div class="smt-member-anchors">

##### workshop <!-- {docsify-ignore} -->

##### overlay <!-- {docsify-ignore} -->

</div>


Cross-store platform helpers exposed as `electron.platform`.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi.isInitialized :id=electronplatformapi-isinitialized

<div class="smt-member-sig" data-sig="isInitialized(): Promise&lt;boolean&gt;">

```ts
isInitialized(): Promise<boolean>
```

</div>

Return true when the platform integration finished startup.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi.getPlayerName :id=electronplatformapi-getplayername

<div class="smt-member-sig" data-sig="getPlayerName(): Promise&lt;string&gt;">

```ts
getPlayerName(): Promise<string>
```

</div>

Return the signed-in player display name.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi.getPlayerId :id=electronplatformapi-getplayerid

<div class="smt-member-sig" data-sig="getPlayerId(): Promise&lt;string&gt;">

```ts
getPlayerId(): Promise<string>
```

</div>

Return the stable platform player id string.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi.getAppId :id=electronplatformapi-getappid

<div class="smt-member-sig" data-sig="getAppId(): Promise&lt;number&gt;">

```ts
getAppId(): Promise<number>
```

</div>

Return the platform app id number.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi.unlockAchievement :id=electronplatformapi-unlockachievement

<div class="smt-member-sig" data-sig="unlockAchievement(achievementId: string): Promise&lt;boolean&gt;">

```ts
unlockAchievement(achievementId: string): Promise<boolean>
```

</div>

Unlock one platform achievement.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi.isAchievementUnlocked :id=electronplatformapi-isachievementunlocked

<div class="smt-member-sig" data-sig="isAchievementUnlocked(achievementId: string): Promise&lt;boolean&gt;">

```ts
isAchievementUnlocked(achievementId: string): Promise<boolean>
```

</div>

Return whether an achievement is already unlocked.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi.clearAchievement :id=electronplatformapi-clearachievement

<div class="smt-member-sig" data-sig="clearAchievement(achievementId: string): Promise&lt;boolean&gt;">

```ts
clearAchievement(achievementId: string): Promise<boolean>
```

</div>

Clear one platform achievement (debug / QA).

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi.cloudSave :id=electronplatformapi-cloudsave

<div class="smt-member-sig" data-sig="cloudSave(fileName: string, data: JsonValueV1): Promise&lt;boolean&gt;">

```ts
cloudSave(fileName: string, data: JsonValueV1): Promise<boolean>
```

</div>

Write one named blob to platform cloud storage.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi.cloudLoad :id=electronplatformapi-cloudload

<div class="smt-member-sig" data-sig="cloudLoad(fileName: string): Promise&lt;JsonValueV1&gt;">

```ts
cloudLoad(fileName: string): Promise<JsonValueV1>
```

</div>

Read one named blob from platform cloud storage.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi.cloudFileExists :id=electronplatformapi-cloudfileexists

<div class="smt-member-sig" data-sig="cloudFileExists(fileName: string): Promise&lt;boolean&gt;">

```ts
cloudFileExists(fileName: string): Promise<boolean>
```

</div>

Return whether a cloud file key exists.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi.cloudDelete :id=electronplatformapi-clouddelete

<div class="smt-member-sig" data-sig="cloudDelete(fileName: string): Promise&lt;boolean&gt;">

```ts
cloudDelete(fileName: string): Promise<boolean>
```

</div>

Delete one named cloud file.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi.cloudSync :id=electronplatformapi-cloudsync

<div class="smt-member-sig" data-sig="cloudSync(): Promise&lt;{ synced: number; uploaded: number; error?: string; }&gt;">

```ts
cloudSync(): Promise<{ synced: number; uploaded: number; error?: string; }>
```

</div>

Sync local saves with platform cloud storage.

</div>
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

### electron.ElectronSuccessResult :id=electronsuccessresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L10" target="_blank" rel="noopener">results.d.ts:10</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronSuccessResult = object">

```ts
ElectronSuccessResult = object
```

</div>

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

<div class="smt-member-sig" data-sig="electron.ElectronFailureResult = object">

```ts
ElectronFailureResult = object
```

</div>

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

### electron.ElectronLicenseCheckResult :id=electronlicensecheckresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L35" target="_blank" rel="noopener">results.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronLicenseCheckResult = object">

```ts
ElectronLicenseCheckResult = object
```

</div>

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

<div class="smt-member-sig" data-sig="electron.ElectronSaveInput = object">

```ts
ElectronSaveInput = object
```

</div>

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

<div class="smt-member-sig" data-sig="electron.ElectronLoadSuccessResult = object">

```ts
ElectronLoadSuccessResult = object
```

</div>

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

<div class="smt-member-sig" data-sig="electron.ElectronLoadFailureResult = object">

```ts
ElectronLoadFailureResult = object
```

</div>

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

### electron.ElectronSaveFileMetadata :id=electronsavefilemetadata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L86" target="_blank" rel="noopener">results.d.ts:86</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronSaveFileMetadata = object">

```ts
ElectronSaveFileMetadata = object
```

</div>

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

<div class="smt-member-sig" data-sig="electron.ElectronExportSaveSuccessResult = object">

```ts
ElectronExportSaveSuccessResult = object
```

</div>

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

### electron.ElectronImportSaveSuccessResult :id=electronimportsavesuccessresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L127" target="_blank" rel="noopener">results.d.ts:127</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronImportSaveSuccessResult = object">

```ts
ElectronImportSaveSuccessResult = object
```

</div>

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

### electron.ElectronImportSaveResult :id=electronimportsaveresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L135" target="_blank" rel="noopener">results.d.ts:135</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronImportSaveResult = ElectronImportSaveSuccessResult | ElectronFailureResult">

```ts
ElectronImportSaveResult = ElectronImportSaveSuccessResult | ElectronFailureResult
```

</div>

Result from [ElectronBridge.importSave](?id=importsave).

</div>

<div class="smt-member-card">

### electron.ElectronLastPlayedGame :id=electronlastplayedgame

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L140" target="_blank" rel="noopener">results.d.ts:140</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronLastPlayedGame = object">

```ts
ElectronLastPlayedGame = object
```

</div>

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

<div class="smt-member-sig" data-sig="electron.ElectronSystemInfo = object">

```ts
ElectronSystemInfo = object
```

</div>

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

<div class="smt-member-sig" data-sig="electron.ElectronLocalModsListResult = object">

```ts
ElectronLocalModsListResult = object
```

</div>

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

<div class="smt-member-sig" data-sig="electron.ElectronLocalModsUploadResult = object">

```ts
ElectronLocalModsUploadResult = object
```

</div>

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

<div class="smt-member-sig" data-sig="electron.ElectronOpenUrlResult = object">

```ts
ElectronOpenUrlResult = object
```

</div>

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

<div class="smt-member-sig" data-sig="electron.ElectronPrimeAchievementsResult = object">

```ts
ElectronPrimeAchievementsResult = object
```

</div>

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

<div class="smt-member-sig" data-sig="electron.ElectronReauthPromptResult = object">

```ts
ElectronReauthPromptResult = object
```

</div>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L14" target="_blank" rel="noopener">workshop.d.ts:14</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronWorkshopApi = object">

```ts
ElectronWorkshopApi = object
```

</div>


Steam Workshop helpers exposed as `electron.platform.workshop`.

Steam only — calls fail gracefully on MS Store.

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopApi.subscribe :id=electronworkshopapi-subscribe

<div class="smt-member-sig" data-sig="subscribe(itemId: string | number): Promise&lt;ElectronWorkshopAck&gt;">

```ts
subscribe(itemId: string | number): Promise<ElectronWorkshopAck>
```

</div>

Subscribe to a Workshop item.

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopApi.unsubscribe :id=electronworkshopapi-unsubscribe

<div class="smt-member-sig" data-sig="unsubscribe(itemId: string | number): Promise&lt;ElectronWorkshopAck&gt;">

```ts
unsubscribe(itemId: string | number): Promise<ElectronWorkshopAck>
```

</div>

Unsubscribe from a Workshop item.

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopApi.installInfo :id=electronworkshopapi-installinfo

<div class="smt-member-sig" data-sig="installInfo(itemId: string | number): Promise&lt;ElectronWorkshopResult&lt;ElectronWorkshopInstallInfo | null&gt;&gt;">

```ts
installInfo(itemId: string | number): Promise<ElectronWorkshopResult<ElectronWorkshopInstallInfo | null>>
```

</div>

Return install state for a subscribed Workshop item.

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopApi.downloadInfo :id=electronworkshopapi-downloadinfo

<div class="smt-member-sig" data-sig="downloadInfo(itemId: string | number): Promise&lt;ElectronWorkshopResult&lt;ElectronWorkshopDownloadInfo | null&gt;&gt;">

```ts
downloadInfo(itemId: string | number): Promise<ElectronWorkshopResult<ElectronWorkshopDownloadInfo | null>>
```

</div>

Return download progress for a Workshop item.

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopApi.getState :id=electronworkshopapi-getstate

<div class="smt-member-sig" data-sig="getState(itemId: string | number): Promise&lt;ElectronWorkshopResult&lt;number&gt;&gt;">

```ts
getState(itemId: string | number): Promise<ElectronWorkshopResult<number>>
```

</div>

Return the Steam Workshop item state flags.

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopApi.getSubscribedItems :id=electronworkshopapi-getsubscribeditems

<div class="smt-member-sig" data-sig="getSubscribedItems(): Promise&lt;ElectronWorkshopResult&lt;string[]&gt;&gt;">

```ts
getSubscribedItems(): Promise<ElectronWorkshopResult<string[]>>
```

</div>

Return all subscribed Workshop item ids.

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopApi.getItem :id=electronworkshopapi-getitem

<div class="smt-member-sig" data-sig="getItem(itemId: string | number): Promise&lt;ElectronWorkshopResult&lt;ElectronWorkshopItem | null&gt;&gt;">

```ts
getItem(itemId: string | number): Promise<ElectronWorkshopResult<ElectronWorkshopItem | null>>
```

</div>

Fetch Workshop item metadata.

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopApi.download :id=electronworkshopapi-download

<div class="smt-member-sig" data-sig="download(itemId: string | number, highPriority?: boolean): Promise&lt;ElectronWorkshopResult&lt;boolean&gt;&gt;">

```ts
download(itemId: string | number, highPriority?: boolean): Promise<ElectronWorkshopResult<boolean>>
```

</div>

Queue or prioritize a Workshop item download.

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopApi.getSandkitMods :id=electronworkshopapi-getsandkitmods

<div class="smt-member-sig" data-sig="getSandkitMods(): Promise&lt;ElectronWorkshopSandkitModsResult&gt;">

```ts
getSandkitMods(): Promise<ElectronWorkshopSandkitModsResult>
```

</div>

Discover Sandkit Workshop mods installed for the current session.

</div>
<div class="smt-member-card">

### electron.ElectronWorkshopAck :id=electronworkshopack

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L106" target="_blank" rel="noopener">workshop.d.ts:106</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronWorkshopAck = { ok: true; } | { ok: false; error: string; }">

```ts
ElectronWorkshopAck = { ok: true; } | { ok: false; error: string; }
```

</div>

Subscribe / unsubscribe result from `steam.js`.

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopResult :id=electronworkshopresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L109" target="_blank" rel="noopener">workshop.d.ts:109</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronWorkshopResult&lt;T&gt; = { ok: true; data?: T; error?: undefined; } | { ok: false; error: string; data?: undefined; }">

```ts
electron.ElectronWorkshopResult<T> = { ok: true; data?: T; error?: undefined; } | { ok: false; error: string; data?: undefined; }
```

</div>

Generic `{ ok, data, error }` Workshop IPC result from `steam.js`.

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopInstallInfo :id=electronworkshopinstallinfo

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L114" target="_blank" rel="noopener">workshop.d.ts:114</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronWorkshopInstallInfo = object">

```ts
ElectronWorkshopInstallInfo = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| folder | <code>string</code> |  |
| sizeOnDisk | <code>string</code> |  |
| timestamp | <code>number</code> |  |

<div class="smt-member-anchors">

##### folder <!-- {docsify-ignore} -->

##### sizeOnDisk <!-- {docsify-ignore} -->

##### timestamp <!-- {docsify-ignore} -->

</div>

Install info from [ElectronWorkshopApi.installInfo](?id=installinfo).

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopDownloadInfo :id=electronworkshopdownloadinfo

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L121" target="_blank" rel="noopener">workshop.d.ts:121</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronWorkshopDownloadInfo = object">

```ts
ElectronWorkshopDownloadInfo = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| current | <code>string</code> |  |
| total | <code>string</code> |  |

<div class="smt-member-anchors">

##### current <!-- {docsify-ignore} -->

##### total <!-- {docsify-ignore} -->

</div>

Download progress from [ElectronWorkshopApi.downloadInfo](?id=downloadinfo).

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopItem :id=electronworkshopitem

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L127" target="_blank" rel="noopener">workshop.d.ts:127</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronWorkshopItem = object">

```ts
ElectronWorkshopItem = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| publishedFileId | <code>string</code> |  |
| title | <code>string</code> |  |
| description | <code>string</code> |  |
| owner | <code>{ steamId64: string; steamId32: number; accountId: number }</code> |  |
| timeCreated | <code>number</code> |  |
| timeUpdated | <code>number</code> |  |
| visibility | <code>number</code> |  |
| banned | <code>boolean</code> |  |
| tags | <code>string[]</code> |  |
| url | <code>string</code> |  |
| previewUrl | <code>string</code> |  |
| numUpvotes | <code>number</code> |  |
| numDownvotes | <code>number</code> |  |

<div class="smt-member-anchors">

##### publishedFileId <!-- {docsify-ignore} -->

##### title <!-- {docsify-ignore} -->

##### description <!-- {docsify-ignore} -->

##### owner <!-- {docsify-ignore} -->

##### timeCreated <!-- {docsify-ignore} -->

##### timeUpdated <!-- {docsify-ignore} -->

##### visibility <!-- {docsify-ignore} -->

##### banned <!-- {docsify-ignore} -->

##### tags <!-- {docsify-ignore} -->

##### url <!-- {docsify-ignore} -->

##### previewUrl <!-- {docsify-ignore} -->

##### numUpvotes <!-- {docsify-ignore} -->

##### numDownvotes <!-- {docsify-ignore} -->

</div>

Item details from [ElectronWorkshopApi.getItem](?id=getitem).

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopSandkitModsResult :id=electronworkshopsandkitmodsresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L148" target="_blank" rel="noopener">workshop.d.ts:148</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronWorkshopSandkitModsResult = object">

```ts
ElectronWorkshopSandkitModsResult = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| ok | <code>boolean</code> |  |
| data | <code>{ mods: JsonValueV1[]; diagnostics: JsonValueV1[] }</code> |  |
| error | <code>string &#124; null</code> |  |

<div class="smt-member-anchors">

##### ok <!-- {docsify-ignore} -->

##### data <!-- {docsify-ignore} -->

##### error <!-- {docsify-ignore} -->

</div>

Discovery payload from [ElectronWorkshopApi.getSandkitMods](?id=getsandkitmods).

</div>
