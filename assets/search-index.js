window.SMT_SEARCH_INDEX = [
  {
    "title": "Sandkit API",
    "body": "Community reference for the live Sandustry sandkit modding API: every namespace, method, and enum — reverse-engineered and kept in sync with the game. Install types as @sandustry-modding/types. New to modding? Start with the step-by-step guides: - Getting started — what a mod is, required files, and a minimal example - The mod lifecycle — compilation, load order, events, and hooks - modinfo.json reference — manifest fields, limits, and capabilities - Patching with patches.json — bundle find-and-replace patches - Worker mods — simulation-worker entry and shared buffers - Publishing to Steam Workshop — packaging and workshop.json Sandkit domains: - World and grid — cells, elements, terrains, maps, pickups - Structures and factory — buildings, pipes, recipes, blueprints - Energy and signals — power networks, collector, signal targets - Player and items — inventory, tools, camera, input, placement - UI — HUD, overlays, dialogs, hotbar - Tech and progression — research, upgrades, discoveries - Entities and drones — creatures, projectiles, pickups - Hooks, storage, and assets — events, i18n, sound, sprites - Engine vs public API — sandkit.api, engine, state, enums All guides → Open generated Sandkit pages from Search. Empty search lists namespaces. Typed search finds methods and types by live sandkit path. Direct pages: - Electron — host preload bridge (window.electron), not part of sandkit - Overview — when to use the bridge and IPC patterns - API — generated electron reference - Mod files — not runtime sandkit objects - TypeScript types — modinfo.json, patches.json, and workshop.json - JSON Schema — raw schema URLs for editors - Full API reference — every namespace on one page",
    "path": "/",
    "id": ""
  },
  {
    "title": "Sandkit API.Ambient types (preferred)",
    "body": "Load the host sandkit ambient with a triple-slash reference. Put it at the top of main.js / worker.js, or in a small ambient .d.ts that your tsconfig / jsconfig includes: Works in .ts and .js (including checked JS). Do not put @sandustry-modding/types under compilerOptions.types — that list only loads packages from node modules/@types. Use the ambient sandkit free name in main.js. In worker.js, type the API as WorkerSandkitApi — worker and main surfaces overlap but are not the same. - Changelog — package and docs history - Official Sandkit API — host API from the game - npm package - Mod template — starter mod and setup guide - Official Sandustry wiki From the package repo root:",
    "path": "/",
    "id": ""
  },
  {
    "title": "configs",
    "body": "Sandkit mod file schemas: modinfo.json, patches.json, and workshop.json. These are not runtime sandkit properties. Import from @sandustry-modding/types/configs when typing mod folder config files. JSON Schema (GitHub Pages): https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json https://sandustry-modding.github.io/SandustryTypes/schemas/workshop.json JSON Schema docs",
    "path": "/api/configs",
    "id": ""
  },
  {
    "title": "&quot;number&quot;",
    "body": "Property Type Description --- --- --- type &quot;number&quot; Discriminator. Must be \"number\". default number Value used when the player has not changed the setting. min? number Inclusive lower bound for the setting. max? number Inclusive upper bound for the setting. step? number UI step size for the number control. label? string Plain-text label shown in the settings UI. labelKey? string i18n key for the settings label (preferred over label when both exist). description? string Plain-text help text for the setting. descriptionKey? string i18n key for the setting help text. type default min? max? step? label? labelKey? description? descriptionKey? Number setting in modinfo.json configSchema.",
    "path": "/api/configs",
    "id": "configschemanumber"
  },
  {
    "title": "&quot;boolean&quot;",
    "body": "Property Type Description --- --- --- type &quot;boolean&quot; Discriminator. Must be \"boolean\". default boolean Value used when the player has not changed the setting. label? string Plain-text label shown in the settings UI. labelKey? string i18n key for the settings label. description? string Plain-text help text for the setting. descriptionKey? string i18n key for the setting help text. type default label? labelKey? description? descriptionKey? Boolean setting in modinfo.json configSchema.",
    "path": "/api/configs",
    "id": "configschemaboolean"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- value string Stored value written when the player picks this option. label? string Plain-text label for the option. labelKey? string i18n key for the option label. value label? labelKey? One option inside a ConfigSchemaChoice.",
    "path": "/api/configs",
    "id": "configschemachoiceoption"
  },
  {
    "title": "&quot;choice&quot;",
    "body": "Property Type Description --- --- --- type &quot;choice&quot; Discriminator. Must be \"choice\". default string Default option ConfigSchemaChoiceOption.value. label? string Plain-text label shown in the settings UI. labelKey? string i18n key for the settings label. description? string Plain-text help text for the setting. descriptionKey? string i18n key for the setting help text. options readonly ConfigSchemaChoiceOption[] Allowed choices for this setting. type default label? labelKey? description? descriptionKey? options Choice setting in modinfo.json configSchema.",
    "path": "/api/configs",
    "id": "configschemachoice"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- path string Path to the replacement image, relative to the mod root. frameWidth? number Width in pixels of one animation frame. frames? number Number of frames in the spritesheet. intervalMs? number Milliseconds between animation frames. path frameWidth? frames? intervalMs? Animated (or static) texture replacement for a vanilla asset id.",
    "path": "/api/configs",
    "id": "textureoverride"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- kind string Kind of provided content (for example \"structureTextures\"). id string Id of this provide entry within its kind. textureOverrides? Record&lt;string, string&gt; Texture paths keyed by the vanilla or structure texture id they replace. kind id textureOverrides? Optional content pack exposed by this mod for other mods or the game to consume.",
    "path": "/api/configs",
    "id": "modprovide"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- terrain? string Terrain color map image. lights? string Lights layout image. sensors? string Sensors layout image. authorization? string Authorization zones image. wall? string Wall layout image. lightsMeta? string Lights metadata image. decor? string Decor layout image. config? string Map config JSON path. terrain? lights? sensors? authorization? wall? lightsMeta? decor? config? Blueprint image paths for a custom map pack. Paths are relative to the mod root.",
    "path": "/api/configs",
    "id": "modmapblueprints"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- x number World X in pixels. y number World Y in pixels. x y World-pixel spawn or unstuck point.",
    "path": "/api/configs",
    "id": "modmappoint"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- hard? number Hard top bound in world pixels. soft? number Soft top bound in world pixels. hard? soft? Vertical camera / travel bounds for the custom map.",
    "path": "/api/configs",
    "id": "modmaptopbounds"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- startY? number World Y where depth light scaling starts. endY? number World Y where depth light scaling ends. maxSize? number Maximum light size at the shallow end of the range. minSize? number Minimum light size at the deep end of the range. startY? endY? maxSize? minSize? Depth-based light sizing for the custom map.",
    "path": "/api/configs",
    "id": "modmapdepthlight"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- widthScale? number Horizontal scale of the parallax layer. offsetY? number Vertical offset of the parallax layer in pixels. widthScale? offsetY? Parallax background tuning for the custom map.",
    "path": "/api/configs",
    "id": "modmapparallax"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- background? string Background terrain id for this blueprint RGB. foreground? string Foreground terrain id for this blueprint RGB. background? foreground? Color-map cell that paints both background and foreground terrain.",
    "path": "/api/configs",
    "id": "modmapcolormappinglayers"
  },
  {
    "title": "ModMapBlueprints",
    "body": "Property Type Description --- --- --- blueprints ModMapBlueprints Paths to blueprint images and map config under the mod root. width number Map width in cells. height number Map height in cells. spawn? ModMapPoint Player spawn position in world pixels. unstuck? ModMapPoint Unstuck / rescue position in world pixels. deployment? string Deployment mode for the map (for example \"skip\"). topBounds? ModMapTopBounds Vertical travel bounds at the top of the world. depthLight? ModMapDepthLight Depth-based light size curve. parallax? ModMapParallax Parallax background tuning. colorMappings? Record&lt;string, ModMapColorMapping&gt; Maps blueprint RGB keys (\"r, g, b\") to terrain ids or layered terrain. blueprints width height spawn? unstuck? deployment? topBounds? depthLight? parallax? colorMappings? Custom map pack block in modinfo.json.",
    "path": "/api/configs",
    "id": "modmapdefinition"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- minimum? string Lowest supported game version string. maximum? string Highest supported game version string. minimum? maximum? Compatible game version range for the mod.",
    "path": "/api/configs",
    "id": "modgameversion"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- $schema? string Optional JSON Schema URL for editors (for example VS Code). Not read by the game loader. manifestVersion 1 Manifest format version. Must be 1 for Sandkit apiVersion 1. id string Unique mod id. Prefer author.mod-name (matches folder / Workshop identity). name string Display name shown in the mod list and Workshop UI. version string Semver-style mod version string. apiVersion 1 Sandkit host API version this mod targets. Must be 1. entry? string Main-thread script path relative to the mod root (for example \"main.js\"). Omit for texture-only, map-only, or config-only mods that declare another capability instead. workerEntry? string Simulation-worker script path relative to the mod root. Required when the mod registers worker hooks or uses worker-only APIs. patches? string Path to the patches file relative to the mod root (usually \"patches.json\"). When omitted, a present patches.json may still auto-load per official docs. description? string Long description shown in the mod list / Workshop. author? string Author display name. gameVersion? ModGameVersion Inclusive game version range this mod claims to support. dependencies? string[] Other mod ids that should load with this mod. loadOrder? number Relative load priority. Lower values load earlier; higher values load later. configSchema? Record&lt;string, ConfigSchemaEntry&gt; Player-facing settings schema. Keys are setting ids; values define type and UI. Read at runtime with api.settings.get. configOverrides? Record&lt;string, string&gt; Paths to JSON config overrides keyed by vanilla config id (for example \"drill\"). shaderOverrides? Record&lt;string, string&gt; Paths to GLSL shader replacements keyed by shader id (for example \"sky\"). textureOverrides? Record&lt;string, string & 124; TextureOverride&gt; Texture replacements keyed by vanilla texture id. A string value is a path; an object adds spritesheet frame metadata. provides? ModProvide[] Optional content this mod publishes for others to consume. map? ModMapDefinition Embedded custom map pack definition for this mod. $schema? manifestVersion id name version apiVersion entry? workerEntry? patches? description? author? gameVersion? dependencies? loadOrder? configSchema? configOverrides? shaderOverrides? textureOverrides? provides? map? Sandkit mod manifest (modinfo.json). Required for every mod folder. Minimal script mods need manifestVersion, id, name, version, apiVersion, and entry. At least one capability is required: entry, workerEntry, configOverrides, textureOverrides, provides, or map. configSchema alone does not count.",
    "path": "/api/configs",
    "id": "modinfo"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- pattern string JavaScript regex pattern source (without surrounding / delimiters). Capture groups may be referenced from BundlePatch.code as $1, $2, … flags? string Optional regex flags (for example \"g\" or \"m\"). pattern flags? Regex finder when the target is not a plain BundlePatch.find string.",
    "path": "/api/configs",
    "id": "bundlepatchregex"
  },
  {
    "title": "PatchTargetFile",
    "body": "Property Type Description --- --- --- file PatchTargetFile Compiled bundle to modify. find? string Exact source substring to locate in the bundle. Mutually exclusive with regex in typical patches. code? string Replacement or inserted source text. Official examples use code; some loaders also accept replace. replace? string Alias of code used by some patch loaders and workshop mods. operation? PatchOperation How to apply the match. Defaults to replace-style behaviour when omitted in common workshop patches. expectedMatches? number & 124; &quot;any&quot; How many times find / regex must match. Use a number (often 1) so the load fails on miss or over-match. Some loaders accept \"any\". regex? BundlePatchRegex Regex-based locator instead of a literal find string. before? string Text inserted before the match when operation is \"wrap\". after? string Text inserted after the match when operation is \"wrap\". id? string Optional stable id for logging and tooling. atomicGroup? string Group id shared by patches that must all succeed or all fail together. Use the same string on paired main (js/bundle.js) and worker (js/simulation-worker.js) patches. occurrence? number & 124; &quot;all&quot; Which match to rewrite when find / regex hits more than once. \"all\" (default when omitted in the loader) or a 1-based index. Must not exceed expectedMatches when both are numbers. description? string Human-readable note for maintainers. Not required by the official schema. file find? code? replace? operation? expectedMatches? regex? before? after? id? atomicGroup? occurrence? description? One entry in patches.json. The file is an array of these objects. Prefer expectedMatches so a missed or duplicated match fails loudly. When several patches must succeed together (for example main + worker), set the same atomicGroup on each. Example patches.json example",
    "path": "/api/configs",
    "id": "bundlepatch"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- $schema? string Optional JSON Schema URL for editors (for example VS Code). Not read by the game loader. patches BundlePatch[] Ordered patch list (same as the bare-array game format). $schema? patches Editor-friendly patches.json wrapper with an optional $schema URL. The game loader expects a bare BundlePatch array. Prefer that array in shipped mods. Use this object shape only when your editor needs inline $schema.",
    "path": "/api/configs",
    "id": "bundlepatchesdocument"
  },
  {
    "title": "1",
    "body": "Property Type Description --- --- --- schemaVersion 1 File format version. Must be 1. publishedFileId string Steam Workshop published file id. Managed by the publisher. schemaVersion publishedFileId Links a local mod folder to its Steam Workshop item. Example workshop.json",
    "path": "/api/configs",
    "id": "workshopjson"
  },
  {
    "title": "configs.ConfigSchemaEntry",
    "body": "One entry under modinfo.json configSchema. Keys of configSchema are setting ids read via api.settings.get.",
    "path": "/api/configs",
    "id": "configschemaentry"
  },
  {
    "title": "configs.ModMapColorMapping",
    "body": "One map.colorMappings value: a single terrain id, or layered background/foreground ids.",
    "path": "/api/configs",
    "id": "modmapcolormapping"
  },
  {
    "title": "configs.PatchTargetFile",
    "body": "Known compiled bundle paths the loader can patch. Value Role --- --- js/bundle.js Main renderer js/manager-worker.js Manager worker js/simulation-worker.js Simulation workers js/utility-worker.js Utility worker",
    "path": "/api/configs",
    "id": "patchtargetfile"
  },
  {
    "title": "configs.PatchOperation",
    "body": "Supported patch operations. Value Behaviour --- --- replace Replace the matched text with BundlePatch.code / BundlePatch.replace remove Delete the matched text insertBefore Insert BundlePatch.code before the match insertAfter Insert BundlePatch.code after the match wrap Surround the match with BundlePatch.before and BundlePatch.after",
    "path": "/api/configs",
    "id": "patchoperation"
  },
  {
    "title": "configs.BundlePatchesFile",
    "body": "Root shape of patches.json: a bare BundlePatch array (game format), or a BundlePatchesDocument object when the file includes $schema.",
    "path": "/api/configs",
    "id": "bundlepatchesfile"
  },
  {
    "title": "electron",
    "body": "Renderer Electron bridge exposed by contextBridge as window.electron. Source of truth: Sandustry preload.js (contextBridge.exposeInMainWorld('electron', …)). Main-process handlers live in main.js. Import from @sandustry-modding/types/electron for explicit types, or use the ambient electron / window.electron bindings from @sandustry-modding/types. Sync methods use ipcRenderer.sendSync and are safe during startup. Async methods use ipcRenderer.invoke unless noted (openDevTools, log).",
    "path": "/api/electron",
    "id": ""
  },
  {
    "title": "ElectronLocalModsApi",
    "body": "Property Type Description --- --- --- localMods ElectronLocalModsApi Local developer mod folder helpers (electron.localMods). macRightMouse ElectronMacRightMouseApi macOS right-button emulation helpers (electron.macRightMouse). platform ElectronPlatformApi Cross-store platform helpers (electron.platform). customMaps ElectronCustomMapsApi Custom map editor persistence helpers (electron.customMaps). localMods macRightMouse platform customMaps Method Signature Description --- --- --- getPlatformSync() (): ElectronPlatform Return the active distribution channel. getModdingEnabledSync() (): boolean Return whether local modding is enabled for this build/session. getIsSteamDeckSync() (): boolean Return true on Steam Deck / gamescope hosts. getPreferredSystemLanguagesSync() (): string[] Return BCP-47 language tags preferred by the OS. onAppSuspend() (callback: ElectronIpcListener): void Register a callback for app suspend (sleep / Xbox quick suspend). onAppResume() (callback: ElectronIpcListener): void Register a callback for app resume. diagnostics() (): Promise&lt;JsonValueV1&gt; Return platform diagnostics JSON. checkLicense() (): Promise&lt;ElectronLicenseCheckResult&gt; Check the MS Store license. Always returns { valid: true } on Steam when platform checks are unavailable. writeGameEvent() (eventName: string, dimensions?: Record&lt;string, string&gt;, measurements?: Record&lt;string, number&gt;): Promise&lt;boolean&gt; Send one telemetry event to the platform SDK when available. platformPrimeAchievements() (ids: string[]): Promise&lt;ElectronPrimeAchievementsResult&gt; Prime the MS Store achievement cache after sign-in. No-op success on Steam. platformShowReauthPrompt() (reason: string): Promise&lt;ElectronReauthPromptResult&gt; Show the native MS Store re-auth dialog. Resolves immediately with { dismissed: true } on Steam. appQuit() (): Promise&lt;ElectronSuccessResult&gt; Quit the application. Works in fullscreen where window.close() is unreliable. openExternalBrowser() (url: string): Promise&lt;ElectronOpenUrlResult&gt; Open an external https: URL in the system browser. onXboxUserSignedOut() (callback: ElectronIpcListener): void Register a callback for Xbox user sign-out. MS Store only — never fires on Steam. onXboxLicenseLost() (callback: ElectronIpcListener): void Register a callback for Game Pass / Store license loss. MS Store only — never fires on Steam. onXboxUserSignedIn() (callback: ElectronIpcListener): void Register a callback for Xbox user sign-in. MS Store only — never fires on Steam. save() (id: string, name: string, data: JsonValueV1): Promise&lt;ElectronOperationResult&gt; Write one compressed save file (.save). saveSerialized() (id: string, name: string, dataJson: string, metadata?: JsonValueV1): Promise&lt;ElectronOperationResult&gt; Write one save from pre-serialized JSON and metadata. load() (id: string): Promise&lt;ElectronLoadResult&gt; Load one save slot by id. deleteSave() (id: string): Promise&lt;ElectronSuccessResult & 124; ElectronFailureResult&gt; Delete one save slot and its backup file. loadRaw() (name: string): Promise&lt;ElectronLoadResult & 124; null&gt; Load a raw save file by filename (including extension). exportSave() (id: string): Promise&lt;ElectronExportSaveResult&gt; Export one save slot as raw bytes for backup/sharing. importSave() (bytes: ArrayBuffer & 124; Uint8Array&lt;ArrayBufferLike&gt;): Promise&lt;ElectronImportSaveResult&gt; Import one save from raw exported bytes. getSaveFiles() (): Promise&lt;ElectronSaveFileMetadata[]&gt; List save slot metadata parsed from each .save header line. getSaveFolder() (): Promise&lt;string&gt; Return the absolute path to the active saves folder. getLastPlayedGameSync() (): string & 124; null Return the last-played save id JSON string. saveLastPlayedGame() (game: ElectronLastPlayedGame): Promise&lt;ElectronOperationResult&gt; Persist the last-played save id. clearLastPlayedGame() (): Promise&lt;ElectronOperationResult&gt; Clear the persisted last-played save id. saveExistsSync() (id: string): boolean Return whether a save file exists for the given id. getSettingsSync() (): string & 124; null Return the settings JSON string from disk. saveSettings() (settings: JsonValueV1): Promise&lt;ElectronOperationResult&gt; Persist renderer settings JSON to disk. setFullscreen() (shouldBeFullscreen: boolean): Promise&lt;ElectronOperationResult&gt; Enter or leave fullscreen mode. toggleFullscreen() (): Promise&lt;ElectronOperationResult&gt; Toggle fullscreen mode. openDevTools() (): void Open Chromium DevTools for the game window. IPC: open-devtools (send). isFilePatchingActiveSync() (): boolean Return true when the Steam patch protocol interceptor is active. log() (level: ElectronLogLevel, scope: string, message: string): void Append one line to the host log file (logs/main.log). Fire-and-forget — never awaits IPC completion. getSystemInfo() (): ElectronSystemInfo Return local process/runtime versions. Useful for bug reports and environment probes. getPlatformSync() getModdingEnabledSync() getIsSteamDeckSync() getPreferredSystemLanguagesSync() onAppSuspend() onAppResume() diagnostics() checkLicense() writeGameEvent() platformPrimeAchievements() platformShowReauthPrompt() appQuit() openExternalBrowser() onXboxUserSignedOut() onXboxLicenseLost() onXboxUserSignedIn() save() saveSerialized() load() deleteSave() loadRaw() exportSave() importSave() getSaveFiles() getSaveFolder() getLastPlayedGameSync() saveLastPlayedGame() clearLastPlayedGame() saveExistsSync() getSettingsSync() saveSettings() setFullscreen() toggleFullscreen() openDevTools() isFilePatchingActiveSync() log() getSystemInfo()",
    "path": "/api/electron",
    "id": "electronbridge"
  },
  {
    "title": "(id: string, name: string, data: JsonValueV1): Promise&lt;ElectronOperationResult&gt;",
    "body": "Method Signature Description --- --- --- save() (id: string, name: string, data: JsonValueV1): Promise&lt;ElectronOperationResult&gt; Write one custom map file (.custommap). load() (id: string): Promise&lt;JsonValueV1&gt; Load one custom map by id. list() (): Promise&lt;JsonValueV1[]&gt; List custom map metadata entries (newest first). delete() (id: string): Promise&lt;ElectronOperationResult&gt; Delete one custom map file. save() load() list() delete() Custom map editor persistence helpers exposed as electron.customMaps.",
    "path": "/api/electron",
    "id": "electroncustommapsapi"
  },
  {
    "title": "(): Promise&lt;string&gt;",
    "body": "Method Signature Description --- --- --- getFolder() (): Promise&lt;string&gt; Return the absolute path to the OS local-mods folder. openFolder() (): Promise&lt;ElectronOperationResult&gt; Open the local-mods folder in the OS file manager. list() (): Promise&lt;ElectronLocalModsListResult&gt; List installed local mod summaries. Steam only — MS Store returns { ok: false, errorCode: 'unsupported platform' }. upload() (modId: string): Promise&lt;ElectronLocalModsUploadResult&gt; Upload one local mod folder to Steam Workshop. getFolder() openFolder() list() upload() Local developer mod folder helpers exposed as electron.localMods.",
    "path": "/api/electron",
    "id": "electronlocalmodsapi"
  },
  {
    "title": "(active: boolean, probeScript?: string): void",
    "body": "Method Signature Description --- --- --- watch() (active: boolean, probeScript?: string): void Enable or disable global right-button probing on macOS. onPos() (callback: (x: number, y: number) =&gt; void): void Register a callback for synthetic right-button position updates. onUp() (callback: () =&gt; void): void Register a callback for synthetic right-button release. watch() onPos() onUp() macOS right-button emulation helpers exposed as electron.macRightMouse.",
    "path": "/api/electron",
    "id": "electronmacrightmouseapi"
  },
  {
    "title": "(url: string): Promise&lt;unknown&gt;",
    "body": "Method Signature Description --- --- --- openUrl() (url: string): Promise&lt;unknown&gt; Open an https: URL in the platform overlay browser when available. openUrl() Platform overlay browser helpers exposed as electron.platform.overlay.",
    "path": "/api/electron",
    "id": "electronplatformoverlayapi"
  },
  {
    "title": "ElectronWorkshopApi",
    "body": "Property Type Description --- --- --- workshop ElectronWorkshopApi Steam Workshop helpers (Steam only; MS Store calls fail gracefully). overlay ElectronPlatformOverlayApi Platform overlay browser helpers. workshop overlay Method Signature Description --- --- --- isInitialized() (): Promise&lt;boolean&gt; Return true when the platform integration finished startup. getPlayerName() (): Promise&lt;string&gt; Return the signed-in player display name. getPlayerId() (): Promise&lt;string&gt; Return the stable platform player id string. getAppId() (): Promise&lt;number&gt; Return the platform app id number. unlockAchievement() (achievementId: string): Promise&lt;unknown&gt; Unlock one platform achievement. isAchievementUnlocked() (achievementId: string): Promise&lt;unknown&gt; Return whether an achievement is already unlocked. clearAchievement() (achievementId: string): Promise&lt;unknown&gt; Clear one platform achievement (debug / QA). cloudSave() (fileName: string, data: JsonValueV1): Promise&lt;unknown&gt; Write one named blob to platform cloud storage. cloudLoad() (fileName: string): Promise&lt;unknown&gt; Read one named blob from platform cloud storage. cloudFileExists() (fileName: string): Promise&lt;unknown&gt; Return whether a cloud file key exists. cloudDelete() (fileName: string): Promise&lt;unknown&gt; Delete one named cloud file. cloudSync() (): Promise&lt;unknown&gt; Sync local saves with platform cloud storage. isInitialized() getPlayerName() getPlayerId() getAppId() unlockAchievement() isAchievementUnlocked() clearAchievement() cloudSave() cloudLoad() cloudFileExists() cloudDelete() cloudSync() Cross-store platform helpers exposed as electron.platform.",
    "path": "/api/electron",
    "id": "electronplatformapi"
  },
  {
    "title": "true",
    "body": "Property Type Description --- --- --- success true Always true for this branch of the result union. path? string Absolute path written when a handler persists a file (save/custom map). success path? Successful invoke result from save, settings, and window handlers.",
    "path": "/api/electron",
    "id": "electronsuccessresult"
  },
  {
    "title": "false",
    "body": "Property Type Description --- --- --- success false Always false for this branch of the result union. error string Human-readable error message from the main process. success error Failed invoke result from save, settings, and window handlers.",
    "path": "/api/electron",
    "id": "electronfailureresult"
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- valid boolean Whether the current license is valid for play. reason string & 124; null Failure reason when valid is false; otherwise null. networkError boolean True when the check failed due to network or platform errors. cached boolean True when the result came from a cached license check. valid reason networkError cached MS Store license check result from ElectronBridge.checkLicense.",
    "path": "/api/electron",
    "id": "electronlicensecheckresult"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- id string Save slot id (sanitized filename stem). name string Display name shown in the save UI. data JsonValueV1 Full serialized game state ({ store: … } shape). id name data Parsed game save payload passed to ElectronBridge.save.",
    "path": "/api/electron",
    "id": "electronsaveinput"
  },
  {
    "title": "true",
    "body": "Property Type Description --- --- --- success true Always true for this branch of the result union. data JsonValueV1 Parsed save body ({ store: … }). success data Successful load result from ElectronBridge.load.",
    "path": "/api/electron",
    "id": "electronloadsuccessresult"
  },
  {
    "title": "false",
    "body": "Property Type Description --- --- --- success false Always false for this branch of the result union. error string Human-readable load failure message. success error Failed load result from ElectronBridge.load.",
    "path": "/api/electron",
    "id": "electronloadfailureresult"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- id string Save slot id (filename stem). name string Display name stored in the save header. timestamp string ISO timestamp string when the save was written. playTime? number Total play time in milliseconds from the save body. worldId? string & 124; null World template id, if present. worldName? string & 124; null World display name, if present. seed? number & 124; null World seed, if present. productionPoints? number Factory production points at save time. structureCount? number Number of placed structures at save time. resources? JsonValueV1 Resource snapshot (gold, fluxite, artifacts, …). id name timestamp playTime? worldId? worldName? seed? productionPoints? structureCount? resources? Metadata parsed from the first line of one .save file. Returned by ElectronBridge.getSaveFiles.",
    "path": "/api/electron",
    "id": "electronsavefilemetadata"
  },
  {
    "title": "true",
    "body": "Property Type Description --- --- --- success true Always true for this branch of the result union. data Uint8Array Raw .save file bytes (metadata line + gzip payload). success data Successful export result from ElectronBridge.exportSave.",
    "path": "/api/electron",
    "id": "electronexportsavesuccessresult"
  },
  {
    "title": "true",
    "body": "Property Type Description --- --- --- success true Always true for this branch of the result union. metaData JsonValueV1 Metadata parsed from the imported file header line. success metaData Successful import result from ElectronBridge.importSave.",
    "path": "/api/electron",
    "id": "electronimportsavesuccessresult"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- id? string Save slot id of the last played game. id? Last-played save marker written by ElectronBridge.saveLastPlayedGame.",
    "path": "/api/electron",
    "id": "electronlastplayedgame"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- platform string Node process.platform (for example linux, win32). arch string CPU architecture string from process.arch. electronVersion string Electron runtime version from process.versions.electron. chromeVersion string Chromium version from process.versions.chrome. nodeVersion string Node.js version from process.versions.node. platform arch electronVersion chromeVersion nodeVersion Local process/runtime versions from ElectronBridge.getSystemInfo. Read directly in the preload script — no IPC round trip.",
    "path": "/api/electron",
    "id": "electronsysteminfo"
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- ok boolean True when the listing succeeded. data JsonValueV1[] Local mod summary objects when ok is true; otherwise []. errorCode? string Error code when ok is false (for example unsupported platform). ok data errorCode? Result from ElectronLocalModsApi.list.",
    "path": "/api/electron",
    "id": "electronlocalmodslistresult"
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- ok boolean True when Workshop upload succeeded. errorCode? string Error code when ok is false. detail? string Extra failure detail logged by the main process. ok errorCode? detail? Result from ElectronLocalModsApi.upload.",
    "path": "/api/electron",
    "id": "electronlocalmodsuploadresult"
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- success boolean True when the OS opened the URL. error? string Failure reason (for example unsupported-url). success error? Result from ElectronBridge.openExternalBrowser.",
    "path": "/api/electron",
    "id": "electronopenurlresult"
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- success boolean True when the cache seed completed. error? string Failure message when success is false. success error? Result from ElectronBridge.platformPrimeAchievements.",
    "path": "/api/electron",
    "id": "electronprimeachievementsresult"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- response? number Button index chosen in the native MS Store dialog. dismissed? boolean True on Steam where no dialog is shown. response? dismissed? Result from ElectronBridge.platformShowReauthPrompt.",
    "path": "/api/electron",
    "id": "electronreauthpromptresult"
  },
  {
    "title": "(itemId: string &#124; number): Promise&lt;unknown&gt;",
    "body": "Method Signature Description --- --- --- subscribe() (itemId: string & 124; number): Promise&lt;unknown&gt; Subscribe to a Workshop item. unsubscribe() (itemId: string & 124; number): Promise&lt;unknown&gt; Unsubscribe from a Workshop item. installInfo() (itemId: string & 124; number): Promise&lt;unknown&gt; Return install state for a subscribed Workshop item. downloadInfo() (itemId: string & 124; number): Promise&lt;unknown&gt; Return download progress for a Workshop item. getState() (itemId: string & 124; number): Promise&lt;unknown&gt; Return the Steam Workshop item state flags. getSubscribedItems() (): Promise&lt;unknown&gt; Return all subscribed Workshop item ids. getItem() (itemId: string & 124; number): Promise&lt;unknown&gt; Fetch Workshop item metadata. download() (itemId: string & 124; number, highPriority?: boolean): Promise&lt;unknown&gt; Queue or prioritize a Workshop item download. getSandkitMods() (): Promise&lt;unknown&gt; Discover Sandkit Workshop mods installed for the current session. subscribe() unsubscribe() installInfo() downloadInfo() getState() getSubscribedItems() getItem() download() getSandkitMods() Steam Workshop helpers exposed as electron.platform.workshop. Steam only — calls fail gracefully on MS Store.",
    "path": "/api/electron",
    "id": "electronworkshopapi"
  },
  {
    "title": "electron.ElectronPlatform",
    "body": "Sandustry distribution channel string. Returned by ElectronBridge.getPlatformSync.",
    "path": "/api/electron",
    "id": "electronplatform"
  },
  {
    "title": "electron.ElectronLogLevel",
    "body": "Severity level written through ElectronBridge.log. Maps to the main-process file logger (logs/main.log).",
    "path": "/api/electron",
    "id": "electronloglevel"
  },
  {
    "title": "electron.ElectronIpcListener",
    "body": "Argument Type Description --- --- --- args ...unknown[] Event-specific payload from the main process (often empty). args Callback registered on IPC event channels such as app-suspend.",
    "path": "/api/electron",
    "id": "electronipclistener"
  },
  {
    "title": "electron.ElectronOperationResult",
    "body": "Result union returned by most save, settings, and window invoke handlers.",
    "path": "/api/electron",
    "id": "electronoperationresult"
  },
  {
    "title": "electron.ElectronLoadResult",
    "body": "Result from ElectronBridge.load.",
    "path": "/api/electron",
    "id": "electronloadresult"
  },
  {
    "title": "electron.ElectronExportSaveResult",
    "body": "Result from ElectronBridge.exportSave.",
    "path": "/api/electron",
    "id": "electronexportsaveresult"
  },
  {
    "title": "electron.ElectronImportSaveResult",
    "body": "Result from ElectronBridge.importSave.",
    "path": "/api/electron",
    "id": "electronimportsaveresult"
  },
  {
    "title": "sandkit.api.action",
    "body": "sandkit.api.action — active hotbar action and custom handler data. Main thread only.",
    "path": "/api/sandkit.api.action",
    "id": ""
  },
  {
    "title": "sandkit.api.action.Action",
    "body": "Hotbar action asset reference.",
    "path": "/api/sandkit.api.action",
    "id": "action"
  },
  {
    "title": "sandkit.api.action.getActive()",
    "body": "Return the action slot the player is using. AssetRef Active hotbar action reference.",
    "path": "/api/sandkit.api.action",
    "id": "getactive"
  },
  {
    "title": "sandkit.api.action.getSelected()",
    "body": "Return the action slot selected in the hotbar. AssetRef Selected hotbar action reference.",
    "path": "/api/sandkit.api.action",
    "id": "getselected"
  },
  {
    "title": "sandkit.api.action.setCustomData",
    "body": "Argument Type Description --- --- --- data Input Serializable payload attached to the active action. data Store custom data on the active action handler. Example",
    "path": "/api/sandkit.api.action",
    "id": "setcustomdata"
  },
  {
    "title": "sandkit.api.assets",
    "body": "sandkit.api.assets — mod asset URLs and asset provider selection. Main thread only.",
    "path": "/api/sandkit.api.assets",
    "id": ""
  },
  {
    "title": "sandkit.api.assets.AssetProviderV1",
    "body": "Property Type Description --- --- --- id ${string}:${string}:${string} kind string localId? string modId? number modName string id kind localId? modId? modName Describes a mod or pack that supplies assets for a kind.",
    "path": "/api/sandkit.api.assets",
    "id": "assetproviderv1"
  },
  {
    "title": "sandkit.api.assets.getUrl()",
    "body": "Argument Type Description --- --- --- relativePath string Path relative to the calling mod folder. relativePath Resolves a path under the mod folder to a loadable URL.",
    "path": "/api/sandkit.api.assets",
    "id": "geturl"
  },
  {
    "title": "sandkit.api.assets.getSelectedProvider()",
    "body": "Argument Type Description --- --- --- kind string Asset kind identifier. kind Returns the selected provider for an asset kind, or null. AssetProviderV1 & 124; null",
    "path": "/api/sandkit.api.assets",
    "id": "getselectedprovider"
  },
  {
    "title": "sandkit.api.assets.selectProvider()",
    "body": "Argument Type Description --- --- --- kind string Asset kind identifier. providerId string & 124; null Provider id from getSelectedProvider, or null to clear. kind providerId Selects a provider for an asset kind. Returns true on success.",
    "path": "/api/sandkit.api.assets",
    "id": "selectprovider"
  },
  {
    "title": "sandkit.api.authorization",
    "body": "sandkit.api.authorization — player permission checks for build, grab, and tools. Main thread only.",
    "path": "/api/sandkit.api.authorization",
    "id": ""
  },
  {
    "title": "sandkit.api.authorization.canBuildAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the player may place a structure at the cell. True when building is allowed in the authorization zone.",
    "path": "/api/sandkit.api.authorization",
    "id": "canbuildatcell"
  },
  {
    "title": "sandkit.api.authorization.canGrabAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the player may grab at the cell. True when grabbing is allowed in the authorization zone.",
    "path": "/api/sandkit.api.authorization",
    "id": "cangrabatcell"
  },
  {
    "title": "sandkit.api.authorization.canUseTool()",
    "body": "Argument Type Description --- --- --- player Player Player state snapshot. isFlamethrower? boolean When true, apply flamethrower-specific rules. player isFlamethrower? Return true when the player may use a tool. True when tool use is allowed for the player.",
    "path": "/api/sandkit.api.authorization",
    "id": "canusetool"
  },
  {
    "title": "sandkit.api.authorization.canUseToolAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, boolean\\] args Return true when the player may use a tool at the cell. True when tool use is allowed at the cell.",
    "path": "/api/sandkit.api.authorization",
    "id": "canusetoolatcell"
  },
  {
    "title": "sandkit.api.authorization.getZoneIdAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the authorization zone id at the cell. Numeric zone id for the cell.",
    "path": "/api/sandkit.api.authorization",
    "id": "getzoneidatcell"
  },
  {
    "title": "sandkit.api.authorization.getPlayerZoneId()",
    "body": "Return the authorization zone id for the player. Numeric zone id for the player's current position.",
    "path": "/api/sandkit.api.authorization",
    "id": "getplayerzoneid"
  },
  {
    "title": "sandkit.api.blueprints",
    "body": "Structure blueprint serialize and localize helpers. Available as sandkit.api.blueprints.",
    "path": "/api/sandkit.api.blueprints",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- x number y number x y Serialized structure entry used in blueprints. Indexable",
    "path": "/api/sandkit.api.blueprints",
    "id": "blueprintstructure"
  },
  {
    "title": "sandkit.api.blueprints.serializeStructures()",
    "body": "Argument Type Description --- --- --- structures Structure[] Structure instances to encode. structures Serialize live structure instances into blueprint records. BlueprintStructure[]",
    "path": "/api/sandkit.api.blueprints",
    "id": "serializestructures"
  },
  {
    "title": "sandkit.api.blueprints.localizeStructures()",
    "body": "Argument Type Description --- --- --- structures BlueprintStructure[] Blueprint structure records to localize. structures Localize blueprint structure records for placement. BlueprintStructure[]",
    "path": "/api/sandkit.api.blueprints",
    "id": "localizestructures"
  },
  {
    "title": "sandkit.api.building.StructureType",
    "body": "Defined in: sandkit/api/building.d.ts:10 Built-in structure type ids used during placement.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": ""
  },
  {
    "title": "sandkit.api.building.StructureType.ConveyorLeft",
    "body": "Left-facing conveyor belt.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "conveyorleft"
  },
  {
    "title": "sandkit.api.building.StructureType.ConveyorRight",
    "body": "Right-facing conveyor belt.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "conveyorright"
  },
  {
    "title": "sandkit.api.building.StructureType.ShakerLeft",
    "body": "Left-facing shaker.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "shakerleft"
  },
  {
    "title": "sandkit.api.building.StructureType.ShakerRight",
    "body": "Right-facing shaker.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "shakerright"
  },
  {
    "title": "sandkit.api.building.StructureType.LauncherUp",
    "body": "Up-facing launcher.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "launcherup"
  },
  {
    "title": "sandkit.api.building.StructureType.LauncherLeft",
    "body": "Left-facing launcher.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "launcherleft"
  },
  {
    "title": "sandkit.api.building.StructureType.LauncherRight",
    "body": "Right-facing launcher.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "launcherright"
  },
  {
    "title": "sandkit.api.building.StructureType.SplitterLeft",
    "body": "Left-facing splitter.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "splitterleft"
  },
  {
    "title": "sandkit.api.building.StructureType.SplitterRight",
    "body": "Right-facing splitter.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "splitterright"
  },
  {
    "title": "sandkit.api.building.StructureType.Dropper",
    "body": "Dropper structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "dropper"
  },
  {
    "title": "sandkit.api.building.StructureType.Foundation",
    "body": "Foundation block.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "foundation"
  },
  {
    "title": "sandkit.api.building.StructureType.FoundationAngledLeft",
    "body": "Angled foundation facing left.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "foundationangledleft"
  },
  {
    "title": "sandkit.api.building.StructureType.FoundationTriangleLeftDel",
    "body": "Left triangle foundation (deprecated id).",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "foundationtriangleleftdel"
  },
  {
    "title": "sandkit.api.building.StructureType.FoundationAngledRight",
    "body": "Angled foundation facing right.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "foundationangledright"
  },
  {
    "title": "sandkit.api.building.StructureType.FoundationTriangleRightDel",
    "body": "Right triangle foundation (deprecated id).",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "foundationtrianglerightdel"
  },
  {
    "title": "sandkit.api.building.StructureType.Collector",
    "body": "Collector structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "collector"
  },
  {
    "title": "sandkit.api.building.StructureType.FilterLeft",
    "body": "Left-facing filter.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "filterleft"
  },
  {
    "title": "sandkit.api.building.StructureType.FilterRight",
    "body": "Right-facing filter.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "filterright"
  },
  {
    "title": "sandkit.api.building.StructureType.SlidingFoundation",
    "body": "Sliding foundation block.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "slidingfoundation"
  },
  {
    "title": "sandkit.api.building.StructureType.VelocitySoaker",
    "body": "Velocity soaker structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "velocitysoaker"
  },
  {
    "title": "sandkit.api.building.StructureType.Grower",
    "body": "Grower structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "grower"
  },
  {
    "title": "sandkit.api.building.StructureType.SoundBox",
    "body": "Sound box structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "soundbox"
  },
  {
    "title": "sandkit.api.building.StructureType.Pipe",
    "body": "Pipe segment.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "pipe"
  },
  {
    "title": "sandkit.api.building.StructureType.Pump",
    "body": "Pump structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "pump"
  },
  {
    "title": "sandkit.api.building.StructureType.LiquidVent",
    "body": "Liquid vent structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "liquidvent"
  },
  {
    "title": "sandkit.api.building.StructureType.Light",
    "body": "Light structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "light"
  },
  {
    "title": "sandkit.api.building.StructureType.GloomEmitter",
    "body": "Gloom emitter structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "gloomemitter"
  },
  {
    "title": "sandkit.api.building",
    "body": "sandkit.api.building — structure placement and built-in structure types. Main thread only. - StructureType",
    "path": "/api/sandkit.api.building",
    "id": ""
  },
  {
    "title": "sandkit.api.building.getSnappedPositionAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the snapped world position for placement at the cell. Vector2 Snapped world position in pixels.",
    "path": "/api/sandkit.api.building",
    "id": "getsnappedpositionatcell"
  },
  {
    "title": "sandkit.api.building.isBlockedAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when placement is blocked at the cell. True when a structure cannot be placed at the cell.",
    "path": "/api/sandkit.api.building",
    "id": "isblockedatcell"
  },
  {
    "title": "sandkit.api.building.cancelPlacement()",
    "body": "Cancel the current structure placement preview.",
    "path": "/api/sandkit.api.building",
    "id": "cancelplacement"
  },
  {
    "title": "sandkit.api.building.selectStructure()",
    "body": "Argument Type Description --- --- --- structureTypeOrId StructureRef & 124; StructureType Built-in StructureType value or registered structure id. structureTypeOrId Select a structure for placement by type or id. StructureRef & 124; null Resolved selection, or null when the type or id is invalid.",
    "path": "/api/sandkit.api.building",
    "id": "selectstructure"
  },
  {
    "title": "sandkit.api.camera",
    "body": "sandkit.api.camera — camera focus and follow control. Main thread only.",
    "path": "/api/sandkit.api.camera",
    "id": ""
  },
  {
    "title": "sandkit.api.camera.snapToPlayer()",
    "body": "Snap the camera to the player position.",
    "path": "/api/sandkit.api.camera",
    "id": "snaptoplayer"
  },
  {
    "title": "sandkit.api.camera.setFocusAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World x position in pixels. worldY number World y position in pixels. worldX worldY Move camera focus to world coordinates. True when focus was applied.",
    "path": "/api/sandkit.api.camera",
    "id": "setfocusatworld"
  },
  {
    "title": "sandkit.api.camera.releaseFocus()",
    "body": "Argument Type Description --- --- --- options? Optional transition duration in milliseconds. options? Release scripted focus and return control to the player. True when focus was released. Example",
    "path": "/api/sandkit.api.camera",
    "id": "releasefocus"
  },
  {
    "title": "sandkit.api.collector",
    "body": "sandkit.api.collector — collector structure value and pickup handling. Main thread only.",
    "path": "/api/sandkit.api.collector",
    "id": ""
  },
  {
    "title": "sandkit.api.collector.getValueFromCellId()",
    "body": "Argument Type Description --- --- --- cellId CellId Packed cell identifier. cellId Returns the collector value for a cell id.",
    "path": "/api/sandkit.api.collector",
    "id": "getvaluefromcellid"
  },
  {
    "title": "sandkit.api.collector.getValueByType()",
    "body": "Argument Type Description --- --- --- elementType ElementType Numeric element type id. elementType Returns the collector value for an element type.",
    "path": "/api/sandkit.api.collector",
    "id": "getvaluebytype"
  },
  {
    "title": "sandkit.api.collector.isCellIdCollectable()",
    "body": "Argument Type Description --- --- --- cellId CellId Packed cell identifier. cellId Returns true when the cell id can be collected.",
    "path": "/api/sandkit.api.collector",
    "id": "iscellidcollectable"
  },
  {
    "title": "sandkit.api.collector.isCellIdCollectableForSprite()",
    "body": "Argument Type Description --- --- --- cellId CellId Packed cell identifier. cellId Returns true when the cell id can be collected for sprite display.",
    "path": "/api/sandkit.api.collector",
    "id": "iscellidcollectableforsprite"
  },
  {
    "title": "sandkit.api.collector.notifyPickupAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Notifies collector logic that a pickup happened at the cell.",
    "path": "/api/sandkit.api.collector",
    "id": "notifypickupatcell"
  },
  {
    "title": "sandkit.api.constants",
    "body": "",
    "path": "/api/sandkit.api.constants",
    "id": ""
  },
  {
    "title": "const",
    "body": "Skip-physics modes for element physics fields.",
    "path": "/api/sandkit.api.constants",
    "id": "physics"
  },
  {
    "title": "sandkit.api.cooldown",
    "body": "sandkit.api.cooldown — reusable cooldown timers for abilities and items. Main thread only.",
    "path": "/api/sandkit.api.cooldown",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- last number Timestamp when the cooldown was last triggered (game time). time number Cooldown duration in milliseconds. last time Cooldown state object passed to check and isReady.",
    "path": "/api/sandkit.api.cooldown",
    "id": "cooldown"
  },
  {
    "title": "sandkit.api.cooldown.check()",
    "body": "Argument Type Description --- --- --- cooldown Cooldown Cooldown state object to check and update. overrideTime? number Optional timestamp (ms) instead of current game time. cooldown overrideTime? Starts the cooldown when ready and returns true; otherwise returns false.",
    "path": "/api/sandkit.api.cooldown",
    "id": "check"
  },
  {
    "title": "sandkit.api.cooldown.isReady()",
    "body": "Argument Type Description --- --- --- cooldown Cooldown Cooldown state object to check. overrideTime? number Optional timestamp (ms) instead of current game time. cooldown overrideTime? Returns true when the cooldown has elapsed.",
    "path": "/api/sandkit.api.cooldown",
    "id": "isready"
  },
  {
    "title": "sandkit.api.discoveries",
    "body": "sandkit.api.discoveries — unlock element and terrain entries in the discovery log. Main thread only.",
    "path": "/api/sandkit.api.discoveries",
    "id": ""
  },
  {
    "title": "sandkit.api.discoveries.addElementByType()",
    "body": "Argument Type Description --- --- --- elementType ElementType Numeric element type id. elementType Marks an element type as discovered for the player.",
    "path": "/api/sandkit.api.discoveries",
    "id": "addelementbytype"
  },
  {
    "title": "sandkit.api.discoveries.addTerrainByType()",
    "body": "Argument Type Description --- --- --- terrainType TerrainType Numeric terrain type id. terrainType Marks a terrain type as discovered for the player.",
    "path": "/api/sandkit.api.discoveries",
    "id": "addterrainbytype"
  },
  {
    "title": "sandkit.api.effects",
    "body": "sandkit.api.effects — visual effects, particles, and lasers at world positions. Main thread only. Temporary lights live under lights.temporary.",
    "path": "/api/sandkit.api.effects",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- width? number Beam width in pixels. brightness? number Beam brightness multiplier. color? number Beam color as a packed integer. glow? boolean When true, draws a glow around the beam. width? brightness? color? glow? Options for laser beam effects.",
    "path": "/api/sandkit.api.effects",
    "id": "lasereffectoptions"
  },
  {
    "title": "(): void",
    "body": "Method Signature Description --- --- --- destroy() (): void Removes the laser from the scene. destroy() Handle returned by createLaserAtWorld.",
    "path": "/api/sandkit.api.effects",
    "id": "lasereffecthandle"
  },
  {
    "title": "&quot;implode&quot; &#124; &quot;explode&quot;",
    "body": "Property Type Description --- --- --- style? &quot;implode&quot; & 124; &quot;explode&quot; Distortion style: implode or explode. duration? number Effect duration in seconds. maxRadius? number Maximum radius of the wave. intensity? number Visual intensity of the distortion. color? [number, number, number, number] RGBA color components for the effect. style? duration? maxRadius? intensity? color? Options for distortion wave effects.",
    "path": "/api/sandkit.api.effects",
    "id": "distortioneffectoptions"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- duration? number maxRadius? number intensity? number duration? maxRadius? intensity? Generic duration and radius options for world effects.",
    "path": "/api/sandkit.api.effects",
    "id": "effectoptions"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- brightness? number duration? number durationMs? number size? number color? [number, number, number, number] decay number Light decay rate after spawn. unclamped? boolean skipDedup? boolean useLightZones? boolean noopIfFull? boolean priority? number dedupKey string Dedupe key when the light pool is full or dedup is enabled. brightness? duration? durationMs? size? color? decay unclamped? skipDedup? useLightZones? noopIfFull? priority? dedupKey Options for createLightAtWorld.",
    "path": "/api/sandkit.api.effects",
    "id": "temporarylightoptions"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- count? number velocity? Vector2 minSpeed? number maxSpeed? number color? number Hex code. No alpha. minSize? number maxSize? number minLifetime? number maxLifetime? number background? boolean imageName? string fadeOutOnly? boolean fadeStart? number fadeEnd? number damp? number count? velocity? minSpeed? maxSpeed? color? minSize? maxSize? minLifetime? maxLifetime? background? imageName? fadeOutOnly? fadeStart? fadeEnd? damp? Options for createParticlesAtWorld.",
    "path": "/api/sandkit.api.effects",
    "id": "particleeffectoptions"
  },
  {
    "title": "sandkit.api.effects.createAtWorld()",
    "body": "Argument Type Description --- --- --- effectId string Registered effect id (for example heatWave). worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. options? EffectOptions Duration, radius, and intensity settings. effectId worldX worldY options? Creates a named screen effect at world coordinates.",
    "path": "/api/sandkit.api.effects",
    "id": "createatworld"
  },
  {
    "title": "sandkit.api.effects.createEffectAtWorld",
    "body": "Deprecated Use createAtWorld instead. Argument Type Description --- --- --- effectId string worldX number worldY number options? EffectOptions effectId worldX worldY options?",
    "path": "/api/sandkit.api.effects",
    "id": "createeffectatworld",
    "deprecated": true
  },
  {
    "title": "sandkit.api.effects.createLightAtWorld",
    "body": "Deprecated Use lights.temporary.createAtWorld instead. Argument Type Description --- --- --- worldX number worldY number options? TemporaryLightOptions worldX worldY options? lightId: number & 124; null optional index?: number & 124; null",
    "path": "/api/sandkit.api.effects",
    "id": "createlightatworld",
    "deprecated": true
  },
  {
    "title": "sandkit.api.effects.createDistortionWaveAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. options? DistortionEffectOptions Style, duration, radius, intensity, and color. worldX worldY options? Creates a distortion wave effect at world coordinates. Example",
    "path": "/api/sandkit.api.effects",
    "id": "createdistortionwaveatworld"
  },
  {
    "title": "sandkit.api.effects.createLaserAtWorld()",
    "body": "Argument Type Description --- --- --- startWorldX number Beam start world X in pixels. startWorldY number Beam start world Y in pixels. endWorldX number Beam end world X in pixels. endWorldY number Beam end world Y in pixels. options? LaserEffectOptions Width, brightness, color, and glow options. startWorldX startWorldY endWorldX endWorldY options? Creates a laser beam between two world points. Returns a handle to destroy it. LaserEffectHandle",
    "path": "/api/sandkit.api.effects",
    "id": "createlaseratworld"
  },
  {
    "title": "sandkit.api.effects.removeLightById",
    "body": "Deprecated Use lights.temporary.removeById instead. Argument Type Description --- --- --- lightId number lightId",
    "path": "/api/sandkit.api.effects",
    "id": "removelightbyid",
    "deprecated": true
  },
  {
    "title": "sandkit.api.effects.createParticlesAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World x position in pixels. worldY number World y position in pixels. options? ParticleEffectOptions Count, velocity, colour, and lifetime settings. worldX worldY options? Emit particles at world coordinates.",
    "path": "/api/sandkit.api.effects",
    "id": "createparticlesatworld"
  },
  {
    "title": "sandkit.api.effects (worker)",
    "body": "Internal Worker-thread sandkit.api.effects — world-space visual effects on workers. Temporary lights live under lights.temporary, not here. Worker-only surface; main thread exposes additional effect helpers.",
    "path": "/api/sandkit.api.effects.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.effects.createAtWorld()",
    "body": "Argument Type Description --- --- --- effectId string Registered effect id. worldX number World x position in pixels. worldY number World y position in pixels. options? EffectOptions Duration, radius, and intensity settings. effectId worldX worldY options? Spawn a named screen-space or world effect.",
    "path": "/api/sandkit.api.effects.worker",
    "id": "createatworld"
  },
  {
    "title": "sandkit.api.effects.createEffectAtWorld",
    "body": "Deprecated Use createAtWorld instead. Argument Type Description --- --- --- effectId string worldX number worldY number options? EffectOptions effectId worldX worldY options?",
    "path": "/api/sandkit.api.effects.worker",
    "id": "createeffectatworld",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.MatterType",
    "body": "Defined in: shared/api/elements.d.ts:37 Physical behaviour category for an element.",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": ""
  },
  {
    "title": "sandkit.api.elements.MatterType.Solid",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "solid"
  },
  {
    "title": "sandkit.api.elements.MatterType.Liquid",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "liquid"
  },
  {
    "title": "sandkit.api.elements.MatterType.Particle",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "particle"
  },
  {
    "title": "sandkit.api.elements.MatterType.Gas",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "gas"
  },
  {
    "title": "sandkit.api.elements.MatterType.Static",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "static"
  },
  {
    "title": "sandkit.api.elements.MatterType.Slushy",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "slushy"
  },
  {
    "title": "sandkit.api.elements.MatterType.Wisp",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "wisp"
  },
  {
    "title": "sandkit.api.elements.MatterType.Powder",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "powder"
  },
  {
    "title": "sandkit.api.elements",
    "body": "sandkit.api.elements — register elements and read or change cells on the main thread. Main thread only. - MatterType",
    "path": "/api/sandkit.api.elements",
    "id": ""
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- textKey? string i18n key for custom interaction label text. crossedOutWhen? { dataField: number; equals: number } Hide the label when a data field matches a value. visibleWhen? { dataField: number; equals: number } Show the label only when a data field matches a value. onlyWhenTranslated? boolean Require the text key to exist in the active locale. textKey? crossedOutWhen? visibleWhen? onlyWhenTranslated? Optional tooltip metadata on structure interactions.",
    "path": "/api/sandkit.api.elements",
    "id": "interactionstructuremetadata"
  },
  {
    "title": "Record&lt;string, unknown&gt;",
    "body": "Property Type Description --- --- --- data? Record&lt;string, unknown&gt; Initial element data bag. density? number Override element density. durationTicks? number Set both max and remaining duration in simulation ticks. duration? number Deprecated alias. isFreeFalling? boolean Override free-fall state on spawn. dataFields? { field1: number; field2: number; field3: number; field4: number } Override default data fields 1–4. particle? { velocity: Vector2 } Spawn as a particle with the given velocity. skipCollectorCheck? boolean Skip collector accounting when placing the element. data? density? durationTicks? duration? isFreeFalling? dataFields? particle? skipCollectorCheck? Options for createAtCell, replace, and related create helpers.",
    "path": "/api/sandkit.api.elements",
    "id": "elementcreateoptions"
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- skipCollectorCheck? boolean Skip collector accounting when removing the element. skipCollectorCheck? Options for element removal helpers.",
    "path": "/api/sandkit.api.elements",
    "id": "elementremovaloptions"
  },
  {
    "title": "sandkit.api.elements.InteractionDestroyer",
    "body": "Property Type Description --- --- --- kind &quot;destroyer&quot; items readonly string[] Item ids removed by this interaction (for example \"drill\"). kind items Interaction that destroys specific items.",
    "path": "/api/sandkit.api.elements",
    "id": "interactiondestroyer"
  },
  {
    "title": "sandkit.api.elements.InteractionStructure",
    "body": "Interaction that affects specific structures. Type Declaration kind structures Structure ids shown in the interaction tooltip.",
    "path": "/api/sandkit.api.elements",
    "id": "interactionstructure"
  },
  {
    "title": "sandkit.api.elements.InteractionEntity",
    "body": "Property Type Description --- --- --- kind &quot;entity&quot; entities readonly string[] Entity type ids referenced by the interaction. kind entities Interaction that affects specific entities.",
    "path": "/api/sandkit.api.elements",
    "id": "interactionentity"
  },
  {
    "title": "sandkit.api.elements.InteractionFlammable",
    "body": "Property Type Description --- --- --- kind &quot;flammable&quot; kind Interaction that marks the element as flammable.",
    "path": "/api/sandkit.api.elements",
    "id": "interactionflammable"
  },
  {
    "title": "sandkit.api.elements.InteractionMeltable",
    "body": "Property Type Description --- --- --- kind &quot;meltable&quot; kind Interaction that marks the element as meltable.",
    "path": "/api/sandkit.api.elements",
    "id": "interactionmeltable"
  },
  {
    "title": "sandkit.api.elements.InteractionFreezable",
    "body": "Property Type Description --- --- --- kind &quot;freezable&quot; kind Interaction that marks the element as freezable.",
    "path": "/api/sandkit.api.elements",
    "id": "interactionfreezable"
  },
  {
    "title": "sandkit.api.elements.InteractionCustom",
    "body": "Interaction handled by custom mod logic and tooltip text. Type Declaration kind",
    "path": "/api/sandkit.api.elements",
    "id": "interactioncustom"
  },
  {
    "title": "sandkit.api.elements.Interaction",
    "body": "Union of element interaction kinds for tool and structure logic.",
    "path": "/api/sandkit.api.elements",
    "id": "interaction"
  },
  {
    "title": "sandkit.api.elements.ElementType",
    "body": "Numeric element type handle. Built-in ElementTypeEnum values autocomplete; getTypeById returns a tagged handle.",
    "path": "/api/sandkit.api.elements",
    "id": "elementtype"
  },
  {
    "title": "sandkit.api.elements.ElementId",
    "body": "Mod or built-in element string id.",
    "path": "/api/sandkit.api.elements",
    "id": "elementid"
  },
  {
    "title": "sandkit.api.elements.ElementRef",
    "body": "Type handle or string id accepted by lookup helpers.",
    "path": "/api/sandkit.api.elements",
    "id": "elementref"
  },
  {
    "title": "sandkit.api.elements.ElementDefinition",
    "body": "Property Type Description --- --- --- id string nameKey string defaultDataFields? { Index Signature: \\[key: string\\]: number } colors { variantFromDataField1: object; variantFromDataField1.rangeMin: rangeMin?: number; variantFromDataField1.rangeMax: rangeMax?: number; variantFromDataField1.invert: invert?: boolean; variantFromDataField1.useGradient: useGradient?: boolean; variants: [number, number, number][] } density number matterType MatterType metaColor? number UI/meta color as 0xRRGGBB. isGrabbable? boolean When true, the grabber can pick up this element. isTransportable? boolean When true, conveyors can move this element. getExtraProps? { Returns: object; data: Record&lt;PropertyKey, any&gt; } id nameKey defaultDataFields? colors density matterType metaColor? isGrabbable? isTransportable? getExtraProps? Mod-registered element definition snapshot.",
    "path": "/api/sandkit.api.elements",
    "id": "elementdefinition"
  },
  {
    "title": "sandkit.api.elements.getRegisteredTypes()",
    "body": "Returns all registered element type ids. ElementType[]",
    "path": "/api/sandkit.api.elements",
    "id": "getregisteredtypes"
  },
  {
    "title": "sandkit.api.elements.register()",
    "body": "Argument Type Description --- --- --- definition ElementDefinition Full element definition to register. definition Registers a new element and returns its assigned type id. Object with the assigned elementType. elementType: ElementType",
    "path": "/api/sandkit.api.elements",
    "id": "register"
  },
  {
    "title": "sandkit.api.elements.updateDefinition()",
    "body": "Argument Type Description --- --- --- elementTypeOrId ElementRef Numeric type or string id. partial Partial Fields to merge onto the definition. elementTypeOrId partial Updates fields on an existing element definition. Example",
    "path": "/api/sandkit.api.elements",
    "id": "updatedefinition"
  },
  {
    "title": "sandkit.api.elements.addInteractionInfo()",
    "body": "Argument Type Description --- --- --- elementTypeOrId ElementRef Numeric type or string id. interaction Interaction Interaction entry to append. elementTypeOrId interaction Adds an interaction entry to an element definition.",
    "path": "/api/sandkit.api.elements",
    "id": "addinteractioninfo"
  },
  {
    "title": "sandkit.api.elements.getNameByType()",
    "body": "Argument Type Description --- --- --- elementType ElementType Numeric element type. elementType Returns the display name for an element type.",
    "path": "/api/sandkit.api.elements",
    "id": "getnamebytype"
  },
  {
    "title": "sandkit.api.elements.findFreeCellInStructure()",
    "body": "Argument Type Description --- --- --- structureCellX number Structure anchor cell column. structureCellY number Structure anchor cell row. structureSizeCells number Structure footprint size in cells. structureCellX structureCellY structureSizeCells Finds a free cell inside a structure footprint, or null. Vector2 & 124; null Cell coordinates of a free cell, or null when none.",
    "path": "/api/sandkit.api.elements",
    "id": "findfreecellinstructure"
  },
  {
    "title": "sandkit.api.elements.createAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRef, ElementCreateOptions\\] args Create an element at a cell. Main-entry writes are deferred; reads see the old grid. Examples Main entry options.durationTicks",
    "path": "/api/sandkit.api.elements",
    "id": "createatcell"
  },
  {
    "title": "sandkit.api.elements.createAtCellWhenIdle",
    "body": "Deprecated Use createAtCell instead. Argument Type Description --- --- --- args ...\\number, number, [ElementRef, ElementCreateOptions\\] args",
    "path": "/api/sandkit.api.elements",
    "id": "createatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.replaceAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRef, ElementCreateOptions\\] args Replace the element at a cell. Main-entry writes are deferred; reads see the old grid.",
    "path": "/api/sandkit.api.elements",
    "id": "replaceatcell"
  },
  {
    "title": "sandkit.api.elements.replaceAtCellWhenIdle",
    "body": "Deprecated Use replaceAtCell instead. Argument Type Description --- --- --- args ...\\number, number, [ElementRef, ElementCreateOptions\\] args",
    "path": "/api/sandkit.api.elements",
    "id": "replaceatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.removeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRemovalOptions\\] args Remove the element at a cell. Main-entry writes are deferred; reads see the old grid.",
    "path": "/api/sandkit.api.elements",
    "id": "removeatcell"
  },
  {
    "title": "sandkit.api.elements.removeAtCellWhenIdle",
    "body": "Deprecated Use removeAtCell instead. Argument Type Description --- --- --- args ...\\number, number, [ElementRemovalOptions\\] args",
    "path": "/api/sandkit.api.elements",
    "id": "removeatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.teleportBetweenCells()",
    "body": "Argument Type Description --- --- --- fromCellX number Source cell column. fromCellY number Source cell row. toCellX number Destination cell column. toCellY number Destination cell row. fromCellX fromCellY toCellX toCellY Move an element between cells. Main-entry writes are deferred; reads see the old grid.",
    "path": "/api/sandkit.api.elements",
    "id": "teleportbetweencells"
  },
  {
    "title": "sandkit.api.elements.teleportBetweenCellsWhenIdle",
    "body": "Deprecated Use teleportBetweenCells instead. Argument Type Description --- --- --- fromCellX number fromCellY number toCellX number toCellY number fromCellX fromCellY toCellX toCellY",
    "path": "/api/sandkit.api.elements",
    "id": "teleportbetweencellswhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.setVelocityAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2\\] args Set particle velocity at a cell. Main-entry writes are deferred; reads see the old grid. Example",
    "path": "/api/sandkit.api.elements",
    "id": "setvelocityatcell"
  },
  {
    "title": "sandkit.api.elements.setVelocityAtCellWhenIdle",
    "body": "Deprecated Use setVelocityAtCell instead. Argument Type Description --- --- --- args ...\\number, number, [Vector2\\] args",
    "path": "/api/sandkit.api.elements",
    "id": "setvelocityatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.addParticleVelocityAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2, number\\] args Add velocity to a particle at a cell. Main-entry writes are deferred; reads see the old grid. Example",
    "path": "/api/sandkit.api.elements",
    "id": "addparticlevelocityatcell"
  },
  {
    "title": "sandkit.api.elements.addParticleVelocityAtCellWhenIdle",
    "body": "Deprecated Use addParticleVelocityAtCell instead. Argument Type Description --- --- --- args ...\\number, number, [Vector2, number\\] args",
    "path": "/api/sandkit.api.elements",
    "id": "addparticlevelocityatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.convertToParticleAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2\\] args Convert a cell element to a particle. Main-entry writes are deferred; reads see the old grid. Example",
    "path": "/api/sandkit.api.elements",
    "id": "converttoparticleatcell"
  },
  {
    "title": "sandkit.api.elements.convertToParticleAtCellWhenIdle",
    "body": "Deprecated Use convertToParticleAtCell instead. Argument Type Description --- --- --- args ...\\number, number, [Vector2\\] args",
    "path": "/api/sandkit.api.elements",
    "id": "converttoparticleatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.convertFromParticleAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Convert a particle back to a solid element. Main-entry writes are deferred; reads see the old grid.",
    "path": "/api/sandkit.api.elements",
    "id": "convertfromparticleatcell"
  },
  {
    "title": "sandkit.api.elements.convertFromParticleAtCellWhenIdle",
    "body": "Deprecated Use convertFromParticleAtCell instead. Argument Type Description --- --- --- args ...CellCoordinates args",
    "path": "/api/sandkit.api.elements",
    "id": "convertfromparticleatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.setDataFieldAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, 1 & 124; 2 & 124; 3 & 124; 4, number\\] args Set a data field on the element at a cell. Main-entry writes are deferred; reads see the old grid.",
    "path": "/api/sandkit.api.elements",
    "id": "setdatafieldatcell"
  },
  {
    "title": "sandkit.api.elements.setDataFieldAtCellWhenIdle",
    "body": "Deprecated Use setDataFieldAtCell instead. Argument Type Description --- --- --- args ...\\[number, number, 1 & 124; 2 & 124; 3 & 124; 4, number\\] args",
    "path": "/api/sandkit.api.elements",
    "id": "setdatafieldatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.refreshColorAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Refresh the rendered color at a cell. Main-entry writes are deferred; reads see the old grid.",
    "path": "/api/sandkit.api.elements",
    "id": "refreshcoloratcell"
  },
  {
    "title": "sandkit.api.elements.refreshColorAtCellWhenIdle",
    "body": "Deprecated Use refreshColorAtCell instead. Argument Type Description --- --- --- args ...CellCoordinates args",
    "path": "/api/sandkit.api.elements",
    "id": "refreshcoloratcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.setPhysicsAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Set the physics skip mode at a cell. Main-entry writes are deferred; reads see the old grid.",
    "path": "/api/sandkit.api.elements",
    "id": "setphysicsatcell"
  },
  {
    "title": "sandkit.api.elements.setPhysicsAtCellWhenIdle",
    "body": "Deprecated Use setPhysicsAtCell instead. Argument Type Description --- --- --- args ...\\[number, number, number\\] args",
    "path": "/api/sandkit.api.elements",
    "id": "setphysicsatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.setDurationAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number, object\\] args Set element duration at a cell. Main-entry writes are deferred; reads see the old grid. Example Main entry",
    "path": "/api/sandkit.api.elements",
    "id": "setdurationatcell"
  },
  {
    "title": "sandkit.api.elements.setDurationAtCellWhenIdle",
    "body": "Deprecated Use setDurationAtCell instead. Argument Type Description --- --- --- args ...\\[number, number, number, object\\] args",
    "path": "/api/sandkit.api.elements",
    "id": "setdurationatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.getIdByType()",
    "body": "Argument Type Description --- --- --- elementType ElementType Numeric element type. elementType Return the mod string id for a numeric element type. string & object",
    "path": "/api/sandkit.api.elements",
    "id": "getidbytype"
  },
  {
    "title": "sandkit.api.elements.getTypeById()",
    "body": "Argument Type Description --- --- --- elementId string & object Mod-registered element id. elementId Resolve a mod element string id to a type handle. ElementType",
    "path": "/api/sandkit.api.elements",
    "id": "gettypebyid"
  },
  {
    "title": "sandkit.api.elements.getTypeFromId",
    "body": "Deprecated Use getTypeById instead. Argument Type Description --- --- --- elementId string & object elementId ElementType",
    "path": "/api/sandkit.api.elements",
    "id": "gettypefromid",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.getDefinitionByType()",
    "body": "Argument Type Description --- --- --- elementType ElementType Numeric element type. elementType Look up the definition for a type handle. ElementDefinition & 124; undefined",
    "path": "/api/sandkit.api.elements",
    "id": "getdefinitionbytype"
  },
  {
    "title": "sandkit.api.elements.getTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the raw element type at a cell (may differ from resolved type). ElementType & 124; null",
    "path": "/api/sandkit.api.elements",
    "id": "gettypeatcell"
  },
  {
    "title": "sandkit.api.elements.getResolvedTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the resolved element type after overlays and particles. ElementType & 124; null",
    "path": "/api/sandkit.api.elements",
    "id": "getresolvedtypeatcell"
  },
  {
    "title": "sandkit.api.elements.getResolvedTypeFromCellId()",
    "body": "Argument Type Description --- --- --- cellId CellId Packed cell id from world.getCellIdAtCell. cellId Return the resolved element type from a packed cell id. ElementType & 124; null",
    "path": "/api/sandkit.api.elements",
    "id": "getresolvedtypefromcellid"
  },
  {
    "title": "sandkit.api.elements.getInfoAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return element index, particle flag, and ids at a cell. \\{ elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; \\} & 124; null",
    "path": "/api/sandkit.api.elements",
    "id": "getinfoatcell"
  },
  {
    "title": "sandkit.api.elements.getMatterTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the matter category at a cell, or null when empty. MatterType & 124; null",
    "path": "/api/sandkit.api.elements",
    "id": "getmattertypeatcell"
  },
  {
    "title": "sandkit.api.elements.isTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRef\\] args Return true when the cell holds the given element type or id.",
    "path": "/api/sandkit.api.elements",
    "id": "istypeatcell"
  },
  {
    "title": "sandkit.api.elements.isFreeFallingAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the element at the cell is falling.",
    "path": "/api/sandkit.api.elements",
    "id": "isfreefallingatcell"
  },
  {
    "title": "sandkit.api.elements.getVelocityAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return per-cell velocity for moving elements. \\{ x: number; y: number; \\} & 124; null",
    "path": "/api/sandkit.api.elements",
    "id": "getvelocityatcell"
  },
  {
    "title": "sandkit.api.elements.getDataFieldAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, 1 & 124; 2 & 124; 3 & 124; 4\\] args Read element data field 1–4 at a cell. number & 124; null",
    "path": "/api/sandkit.api.elements",
    "id": "getdatafieldatcell"
  },
  {
    "title": "sandkit.api.elements (worker)",
    "body": "Internal Worker-thread sandkit.api.elements — shared reads plus immediate grid mutations. Worker-entry mutations apply immediately. Main thread defers matching helpers in sandkit.api.elements. Worker extension; not interchangeable with main-thread sandkit.api.elements.",
    "path": "/api/sandkit.api.elements.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.elements.createAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRef, ElementCreateOptions\\] args Create an element at a cell immediately on this worker. Example Worker entry",
    "path": "/api/sandkit.api.elements.worker",
    "id": "createatcell"
  },
  {
    "title": "sandkit.api.elements.replaceAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRef, ElementCreateOptions\\] args Replace the element at a cell immediately on this worker.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "replaceatcell"
  },
  {
    "title": "sandkit.api.elements.removeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRemovalOptions\\] args Remove the element at a cell immediately on this worker.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "removeatcell"
  },
  {
    "title": "sandkit.api.elements.moveBetweenCells()",
    "body": "Argument Type Description --- --- --- fromCellX number Source cell column. fromCellY number Source cell row. toCellX number Destination cell column. toCellY number Destination cell row. fromCellX fromCellY toCellX toCellY Move an element between cells immediately on this worker. True when the move succeeded.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "movebetweencells"
  },
  {
    "title": "sandkit.api.elements.teleportBetweenCells()",
    "body": "Argument Type Description --- --- --- fromCellX number Source cell column. fromCellY number Source cell row. toCellX number Destination cell column. toCellY number Destination cell row. fromCellX fromCellY toCellX toCellY Teleport an element between cells immediately on this worker.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "teleportbetweencells"
  },
  {
    "title": "sandkit.api.elements.swapBetweenCells()",
    "body": "Argument Type Description --- --- --- firstCellX number First cell column. firstCellY number First cell row. secondCellX number Second cell column. secondCellY number Second cell row. firstCellX firstCellY secondCellX secondCellY Swap elements between two cells immediately on this worker. True when the swap succeeded.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "swapbetweencells"
  },
  {
    "title": "sandkit.api.elements.swapCells",
    "body": "Deprecated Use swapBetweenCells instead. Argument Type Description --- --- --- firstCellX number firstCellY number secondCellX number secondCellY number firstCellX firstCellY secondCellX secondCellY",
    "path": "/api/sandkit.api.elements.worker",
    "id": "swapcells",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.markMovementBlockedByIndex()",
    "body": "Argument Type Description --- --- --- elementIndex number Element index from getInfoAtCell. elementIndex Mark an element index as movement-blocked for this tick.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "markmovementblockedbyindex"
  },
  {
    "title": "sandkit.api.elements.markMovementBlockedByElementIndex",
    "body": "Deprecated Use markMovementBlockedByIndex instead. Argument Type Description --- --- --- elementIndex number elementIndex",
    "path": "/api/sandkit.api.elements.worker",
    "id": "markmovementblockedbyelementindex",
    "deprecated": true
  },
  {
    "title": "sandkit.api.elements.setVelocityAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2\\] args Set particle velocity at a cell immediately on this worker. True when velocity was set.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "setvelocityatcell"
  },
  {
    "title": "sandkit.api.elements.addParticleVelocityAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2, number\\] args Add velocity to a particle at a cell immediately on this worker. True when velocity was updated.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "addparticlevelocityatcell"
  },
  {
    "title": "sandkit.api.elements.convertToParticleAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2\\] args Convert a cell element to a particle immediately on this worker. True when conversion succeeded.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "converttoparticleatcell"
  },
  {
    "title": "sandkit.api.elements.convertFromParticleAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Convert a particle back to a solid element immediately on this worker. True when conversion succeeded.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "convertfromparticleatcell"
  },
  {
    "title": "sandkit.api.elements.setDataFieldAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, 1 & 124; 2 & 124; 3 & 124; 4, number\\] args Set a data field on the element at a cell immediately on this worker. True when the field was set.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "setdatafieldatcell"
  },
  {
    "title": "sandkit.api.elements.refreshColorAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Refresh the rendered color at a cell immediately on this worker.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "refreshcoloratcell"
  },
  {
    "title": "sandkit.api.elements.setPhysicsAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Set the physics skip mode at a cell immediately on this worker.",
    "path": "/api/sandkit.api.elements.worker",
    "id": "setphysicsatcell"
  },
  {
    "title": "sandkit.api.elements.setDurationAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number, object\\] args Set element duration at a cell immediately on this worker. True when duration was updated. Example Worker entry",
    "path": "/api/sandkit.api.elements.worker",
    "id": "setdurationatcell"
  },
  {
    "title": "sandkit.api.energy",
    "body": "sandkit.api.energy — structure energy networks, storage, and consumption. Main thread only.",
    "path": "/api/sandkit.api.energy",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- capacity? number Maximum stored energy for storage nodes. energyType? string Energy type id when multiple networks exist. capacity? energyType? Options for registerType. Indexable",
    "path": "/api/sandkit.api.energy",
    "id": "energyregistertypeoptions"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- energyType? string Energy type id when multiple networks exist. energyType? Options for addAtCell. Indexable",
    "path": "/api/sandkit.api.energy",
    "id": "energyaddoptions"
  },
  {
    "title": "sandkit.api.energy.registerType()",
    "body": "Argument Type Description --- --- --- structureId string Structure type id string. type \"storage\" & 124; \"conductor\" conductor forwards energy; storage holds energy. options? EnergyRegisterTypeOptions Capacity and energy-type options for storage nodes. structureId type options? Registers an energy type on a structure as conductor or storage.",
    "path": "/api/sandkit.api.energy",
    "id": "registertype"
  },
  {
    "title": "sandkit.api.energy.addAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, number, [EnergyAddOptions\\] args Adds energy at a cell. Returns the amount actually added.",
    "path": "/api/sandkit.api.energy",
    "id": "addatcell"
  },
  {
    "title": "sandkit.api.energy.consume()",
    "body": "Argument Type Description --- --- --- amount number Energy amount to consume. options? When allOrNothing is true, consume zero unless the full amount is available. amount options? Consumes energy from the global pool. Returns the amount consumed.",
    "path": "/api/sandkit.api.energy",
    "id": "consume"
  },
  {
    "title": "sandkit.api.energy.consumeExcludingNetworkAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Consumes energy from networks other than the one at the cell.",
    "path": "/api/sandkit.api.energy",
    "id": "consumeexcludingnetworkatcell"
  },
  {
    "title": "sandkit.api.energy.getNetworkAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Returns energy network nodes connected at the cell. object[] Example",
    "path": "/api/sandkit.api.energy",
    "id": "getnetworkatcell"
  },
  {
    "title": "sandkit.api.energy.getNetworkFreeCapacityAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Returns free storage capacity in the network at the cell.",
    "path": "/api/sandkit.api.energy",
    "id": "getnetworkfreecapacityatcell"
  },
  {
    "title": "sandkit.api.entities",
    "body": "Entity spawn, capture, and lifecycle helpers. Available as sandkit.api.entities.",
    "path": "/api/sandkit.api.entities",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- id number x number y number targetX? number targetY? number id x y targetX? targetY? Active entity instance in the world. Indexable",
    "path": "/api/sandkit.api.entities",
    "id": "entity"
  },
  {
    "title": "sandkit.api.entities.getById()",
    "body": "Argument Type Description --- --- --- entityId number Runtime entity id. entityId Return one live entity by runtime id. Entity & 124; undefined",
    "path": "/api/sandkit.api.entities",
    "id": "getbyid"
  },
  {
    "title": "sandkit.api.entities.getAllByType()",
    "body": "Argument Type Description --- --- --- entityTypeId string Registered entity type string id. entityTypeId Return all live entities of one type. Entity[]",
    "path": "/api/sandkit.api.entities",
    "id": "getallbytype"
  },
  {
    "title": "sandkit.api.entities.spawnAtWorld()",
    "body": "Argument Type Description --- --- --- entityTypeId string Registered entity type string id. worldX number Spawn x position in world pixels. worldY number Spawn y position in world pixels. entityTypeId worldX worldY Spawn an entity at world position. Entity The spawned entity instance.",
    "path": "/api/sandkit.api.entities",
    "id": "spawnatworld"
  },
  {
    "title": "sandkit.api.entities.remove()",
    "body": "Argument Type Description --- --- --- entityId number Runtime entity id. entityId Remove an entity from the world.",
    "path": "/api/sandkit.api.entities",
    "id": "remove"
  },
  {
    "title": "sandkit.api.entities.launch()",
    "body": "Argument Type Description --- --- --- entityId number Runtime entity id. angleRadians number Launch angle in radians. speed? number Optional launch speed. entityId angleRadians speed? Launch an entity with angle and optional speed.",
    "path": "/api/sandkit.api.entities",
    "id": "launch"
  },
  {
    "title": "sandkit.api.entities.startCapture()",
    "body": "Argument Type Description --- --- --- entityId number Runtime entity id. entityId Start capture for an entity (for example vacuum capture).",
    "path": "/api/sandkit.api.entities",
    "id": "startcapture"
  },
  {
    "title": "sandkit.api.entities.collect()",
    "body": "Argument Type Description --- --- --- entityId number Runtime entity id. entityId Collect an entity (for example into inventory or storage).",
    "path": "/api/sandkit.api.entities",
    "id": "collect"
  },
  {
    "title": "sandkit.api.events",
    "body": "sandkit.api.events — subscribe to and emit named game events. Main thread only. The events object is frozen; do not replace on or emit.",
    "path": "/api/sandkit.api.events",
    "id": ""
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- phaseThroughTerrain boolean When true, terrain collision is skipped this sub-step. phaseThroughStructures boolean When true, structure collision is skipped this sub-step. maxStepCells number Max cells the player can step up when blocked horizontally (1–8). phaseThroughTerrain phaseThroughStructures maxStepCells Mutable payload for player:collision:prepare. Listeners may change maxStepCells (clamped 1–8) and phasing flags.",
    "path": "/api/sandkit.api.events",
    "id": "playercollisionpreparepayload"
  },
  {
    "title": "item:used",
    "body": "item:used frame:render scene:game:started scene:started:game Deprecated Deprecated alias. earlyAccess:completed earlyAccess:complete Deprecated Deprecated alias. terrain:destroyed fog:cellRevealed upgrade:levelSelected building:placed building:removing Fires before building:removed. building:removed structures:placed structures:removed structures:moved game:ready game:started tutorial:stepChanged tutorial:completed tech:unlocked worldItem:pickedUp resource:collected player:collision:prepare player:moved Known event payloads. Unlisted ids still use unknown.",
    "path": "/api/sandkit.api.events",
    "id": "eventpayloadmap",
    "deprecated": true
  },
  {
    "title": "sandkit.api.events.EventId",
    "body": "Known event names plus any custom string id.",
    "path": "/api/sandkit.api.events",
    "id": "eventid"
  },
  {
    "title": "sandkit.api.events.EventPayload",
    "body": "Event payload type for a given event id.",
    "path": "/api/sandkit.api.events",
    "id": "eventpayload"
  },
  {
    "title": "sandkit.api.events.on",
    "body": "Argument Type Description --- --- --- eventId K Registered event name. callback (payload: EventPayload&lt;K&gt;) =&gt; void Called when the event is emitted. eventId callback Subscribes to an event. Returns an unsubscribe function. K extends EventId () = void Examples item:used frame:render scene:game:started earlyAccess:completed terrain:destroyed fog:cellRevealed upgrade:levelSelected building:placed building:removing building:removed structures:placed structures:removed structures:moved game:ready game:started tutorial:stepChanged tutorial:completed tech:unlocked worldItem:pickedUp resource:collected",
    "path": "/api/sandkit.api.events",
    "id": "on"
  },
  {
    "title": "sandkit.api.events.emit",
    "body": "Argument Type Description --- --- --- eventId K Registered event name. payload EventPayload&lt;K&gt; Serializable payload passed to listeners. eventId payload Emits an event with a payload to all subscribers. K extends EventId",
    "path": "/api/sandkit.api.events",
    "id": "emit"
  },
  {
    "title": "sandkit.api.events (worker)",
    "body": "Internal Worker-thread sandkit.api.events — subscribe to and emit worker-scoped events. Worker-only surface; do not use main-thread sandkit.api.events.",
    "path": "/api/sandkit.api.events.worker",
    "id": ""
  },
  {
    "title": "ElementType",
    "body": "Property Type Description --- --- --- elementType? ElementType Required when subscribing to element:moved. Optional on emit. terrainType? number Required when subscribing to terrain:updated. Optional on emit. elementType? terrainType? Guard filter for worker events.",
    "path": "/api/sandkit.api.events.worker",
    "id": "eventguard"
  },
  {
    "title": "EventGuard",
    "body": "Property Type Description --- --- --- guard? EventGuard guard? Options for emit.",
    "path": "/api/sandkit.api.events.worker",
    "id": "eventemitoptions"
  },
  {
    "title": "element:moved",
    "body": "element:moved terrain:updated terrain:update Deprecated Deprecated alias. worker:update:post update:post Deprecated Deprecated alias. Known worker event payloads. Unlisted ids still use unknown.",
    "path": "/api/sandkit.api.events.worker",
    "id": "eventpayloadmap",
    "deprecated": true
  },
  {
    "title": "sandkit.api.events.EventOnOptions",
    "body": "Options for on. K extends EventId",
    "path": "/api/sandkit.api.events.worker",
    "id": "eventonoptions"
  },
  {
    "title": "sandkit.api.events.EventId",
    "body": "Known worker event names plus any custom string id.",
    "path": "/api/sandkit.api.events.worker",
    "id": "eventid"
  },
  {
    "title": "sandkit.api.events.EventPayload",
    "body": "Event payload type for a given event id.",
    "path": "/api/sandkit.api.events.worker",
    "id": "eventpayload"
  },
  {
    "title": "sandkit.api.events.on",
    "body": "Argument Type Description --- --- --- eventId K Registered event name. callback (payload: EventPayload&lt;K&gt;) =&gt; void Called when the event is emitted. options? EventOnOptions&lt;K&gt; Required guard for filtered events. eventId callback options? Subscribe to a worker event. Returns an unsubscribe function. K extends EventId () = void Examples element:moved terrain:updated worker:update:post",
    "path": "/api/sandkit.api.events.worker",
    "id": "on"
  },
  {
    "title": "sandkit.api.events.emit",
    "body": "Argument Type Description --- --- --- eventId K Registered event name. payload EventPayload&lt;K&gt; Serializable payload passed to listeners. options? EventEmitOptions Optional guard forwarded to filtered listeners. eventId payload options? Emit a worker event with a payload to subscribers. K extends EventId",
    "path": "/api/sandkit.api.events.worker",
    "id": "emit"
  },
  {
    "title": "sandkit.api.excavation",
    "body": "sandkit.api.excavation — register custom excavation tool dig profiles. Main thread only.",
    "path": "/api/sandkit.api.excavation",
    "id": ""
  },
  {
    "title": "number[][]",
    "body": "Property Type Description --- --- --- pattern? number[][] Dig pattern grid; non-zero cells are removed. power number Dig strength applied to matched cells. Clamped to 0–1000. options? ExcavationProfileOptions Optional profile-specific excavation flags. terrainRules? readonly ExcavationTerrainRule[] Per-terrain output and damage rules. pattern? power options? terrainRules? Excavation tool profile definition.",
    "path": "/api/sandkit.api.excavation",
    "id": "excavationprofiledefinitionv1"
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- fromGun? boolean fromRocketExplosion? boolean fromDrill? boolean useLiteralOutVelocity? boolean destroyNonDestructible? boolean forceRemoveAll? boolean drillTierDamage? number Clamped to 0–1000 when set. fromGun? fromRocketExplosion? fromDrill? useLiteralOutVelocity? destroyNonDestructible? forceRemoveAll? drillTierDamage? Options attached to an excavation profile definition.",
    "path": "/api/sandkit.api.excavation",
    "id": "excavationprofileoptions"
  },
  {
    "title": "TerrainRef",
    "body": "Property Type Description --- --- --- cellType TerrainRef Terrain cell type to match. terrainType? TerrainRef Deprecated alias. damage? number Damage applied when this rule matches. outputElementType? ElementRef Element type produced when this terrain is excavated. cellType terrainType? damage? outputElementType? Terrain match rule within an excavation profile.",
    "path": "/api/sandkit.api.excavation",
    "id": "excavationterrainrule"
  },
  {
    "title": "sandkit.api.excavation.registerProfile()",
    "body": "Argument Type Description --- --- --- id string Unique profile id (1–128 chars: letters, numbers, ., , :, -). definition ExcavationProfileDefinitionV1 Pattern, power, terrain rules, and profile options. id definition Registers an excavation profile by id. Example",
    "path": "/api/sandkit.api.excavation",
    "id": "registerprofile"
  },
  {
    "title": "sandkit.api.factory",
    "body": "Factory progression level and process counters. Available as sandkit.api.factory.",
    "path": "/api/sandkit.api.factory",
    "id": ""
  },
  {
    "title": "sandkit.api.factory.FactoryProcessId",
    "body": "Built-in factory process identifiers.",
    "path": "/api/sandkit.api.factory",
    "id": "factoryprocessid"
  },
  {
    "title": "sandkit.api.factory.getLevel()",
    "body": "Return the current factory level.",
    "path": "/api/sandkit.api.factory",
    "id": "getlevel"
  },
  {
    "title": "sandkit.api.factory.getProcessCount()",
    "body": "Argument Type Description --- --- --- processId FactoryProcessId Built-in factory process id. processId Return completed count for a factory process.",
    "path": "/api/sandkit.api.factory",
    "id": "getprocesscount"
  },
  {
    "title": "sandkit.api.factory.getProcessRate()",
    "body": "Argument Type Description --- --- --- processId FactoryProcessId Built-in factory process id. processId Return completion rate for a factory process.",
    "path": "/api/sandkit.api.factory",
    "id": "getprocessrate"
  },
  {
    "title": "sandkit.api.fire",
    "body": "sandkit.api.fire — ignite and burn elements at grid cells. Main thread only.",
    "path": "/api/sandkit.api.fire",
    "id": ""
  },
  {
    "title": "sandkit.api.fire.canBurnElementAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Returns true when the element at the cell can burn.",
    "path": "/api/sandkit.api.fire",
    "id": "canburnelementatcell"
  },
  {
    "title": "sandkit.api.fire.burnElementAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Burn the element at the cell. Main-entry writes are deferred; reads see the old grid.",
    "path": "/api/sandkit.api.fire",
    "id": "burnelementatcell"
  },
  {
    "title": "sandkit.api.fire.burnElementAtCellWhenIdle",
    "body": "Deprecated Use burnElementAtCell instead. Argument Type Description --- --- --- args ...CellCoordinates args",
    "path": "/api/sandkit.api.fire",
    "id": "burnelementatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.fire (worker)",
    "body": "Internal Worker-thread sandkit.api.fire — ignite and burn elements at grid cells. Worker burns are immediate. Main thread defers burns with burnElementAtCell. Worker-only surface; do not use main-thread sandkit.api.fire.",
    "path": "/api/sandkit.api.fire.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.fire.canBurnElementAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the element at the cell can burn.",
    "path": "/api/sandkit.api.fire.worker",
    "id": "canburnelementatcell"
  },
  {
    "title": "sandkit.api.fire.burnElementAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Burn the element at the cell immediately on this worker. True when the burn succeeded.",
    "path": "/api/sandkit.api.fire.worker",
    "id": "burnelementatcell"
  },
  {
    "title": "sandkit.api.game",
    "body": "Game session start helpers. Available as sandkit.api.game.",
    "path": "/api/sandkit.api.game",
    "id": ""
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- skipIntro? boolean When true, skip the intro sequence. skipIntro? Options for start.",
    "path": "/api/sandkit.api.game",
    "id": "gamestartoptions"
  },
  {
    "title": "sandkit.api.game.start()",
    "body": "Argument Type Description --- --- --- options? GameStartOptions Optional session start flags. options? Start or restart the game session. Example",
    "path": "/api/sandkit.api.game",
    "id": "start"
  },
  {
    "title": "sandkit.api.gameConfig",
    "body": "sandkit.api.gameConfig — read merged game configuration values. Main thread only.",
    "path": "/api/sandkit.api.gameConfig",
    "id": ""
  },
  {
    "title": "sandkit.api.gameConfig.get()",
    "body": "Argument Type Description --- --- --- key string Game config key (merged defaults and overrides). key Returns a config value by key, or undefined when missing. JsonValueV1 & 124; undefined",
    "path": "/api/sandkit.api.gameConfig",
    "id": "get"
  },
  {
    "title": "sandkit.api.gameConfig.getAll()",
    "body": "Returns the full config object. JsonObjectV1",
    "path": "/api/sandkit.api.gameConfig",
    "id": "getall"
  },
  {
    "title": "sandkit.api.grid",
    "body": "sandkit.api.grid — grid cell queries, deferred mutations, and iteration. Main thread only.",
    "path": "/api/sandkit.api.grid",
    "id": ""
  },
  {
    "title": "GridMutationWriterElements",
    "body": "Property Type Description --- --- --- elements GridMutationWriterElements Element cell mutations inside a mutate callback. terrains GridMutationWriterTerrains Terrain cell mutations inside a mutate callback. elements terrains Deferred element and terrain mutations passed to mutate.",
    "path": "/api/sandkit.api.grid",
    "id": "gridmutationwriter"
  },
  {
    "title": "(...args: number, number, [ElementRef, ElementCreateOptions]): void",
    "body": "Method Signature Description --- --- --- createAtCell() (...args: number, number, [ElementRef, ElementCreateOptions]): void Create an element at a cell inside a mutate callback. replaceAtCell() (...args: number, number, [ElementRef, ElementCreateOptions]): void Replace the element at a cell inside a mutate callback. removeAtCell() (...args: number, number, [ElementRemovalOptions]): void Remove the element at a cell inside a mutate callback. createAtCell() replaceAtCell() removeAtCell() Element writers available on GridMutationWriter.elements.",
    "path": "/api/sandkit.api.grid",
    "id": "gridmutationwriterelements"
  },
  {
    "title": "(...args: number, number, [TerrainRef, TerrainMutationOptions]): void",
    "body": "Method Signature Description --- --- --- createAtCell() (...args: number, number, [TerrainRef, TerrainMutationOptions]): void Create terrain at a cell inside a mutate callback. replaceAtCell() (...args: number, number, [TerrainRef, TerrainMutationOptions]): void Replace terrain at a cell inside a mutate callback. removeAtCell() (...args: number, number, [TerrainMutationOptions]): void Remove terrain at a cell inside a mutate callback. createAtCell() replaceAtCell() removeAtCell() Terrain writers available on GridMutationWriter.terrains.",
    "path": "/api/sandkit.api.grid",
    "id": "gridmutationwriterterrains"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- widthCells number Grid width in cells. heightCells number Grid height in cells. widthCells heightCells World grid width and height in cells.",
    "path": "/api/sandkit.api.grid",
    "id": "griddimensions"
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- fromGun? boolean Treat the dig as gun fire for terrain resistance checks. fromRocketExplosion? boolean Treat the dig as rocket or dynamite explosion damage. fromDrill? boolean Treat the dig as drill damage. useLiteralOutVelocity? boolean Use outVelocity literally instead of deriving ejection speed. destroyNonDestructible? boolean Allow removing terrain marked non-destructible. forceRemoveAll? boolean Force-remove all matched cells regardless of normal rules. drillTierDamage? number Extra drill-tier damage when fromDrill is true. Clamped to 0–1000. fromGun? fromRocketExplosion? fromDrill? useLiteralOutVelocity? destroyNonDestructible? forceRemoveAll? drillTierDamage? Flags that control how excavateAtCell resolves damage and drops.",
    "path": "/api/sandkit.api.grid",
    "id": "excavateoptions"
  },
  {
    "title": "sandkit.api.grid.CellId",
    "body": "Packed cell id from getCellIdAtCell.",
    "path": "/api/sandkit.api.grid",
    "id": "cellid"
  },
  {
    "title": "sandkit.api.grid.mutate()",
    "body": "Argument Type Description --- --- --- callback (writer: GridMutationWriter) =&gt; void Receives a writer for element and terrain cell mutations. callback Run deferred grid mutations on the main thread. Reads see the old grid until mutations apply. Examples Deferred main-thread mutations",
    "path": "/api/sandkit.api.grid",
    "id": "mutate"
  },
  {
    "title": "sandkit.api.grid.revealFogAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Reveal fog of war at a cell.",
    "path": "/api/sandkit.api.grid",
    "id": "revealfogatcell"
  },
  {
    "title": "sandkit.api.grid.redrawAroundCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Request redraw around a cell.",
    "path": "/api/sandkit.api.grid",
    "id": "redrawaroundcell"
  },
  {
    "title": "sandkit.api.grid.forEachCellInCircle()",
    "body": "Argument Type Description --- --- --- centerCellX number Circle center cell column. centerCellY number Circle center cell row. radiusCells number Circle radius in cells. callback (...args: CellCoordinates) =&gt; void Invoked for each cell with (cellX, cellY). centerCellX centerCellY radiusCells callback Calls the callback for each cell inside a circle.",
    "path": "/api/sandkit.api.grid",
    "id": "foreachcellincircle"
  },
  {
    "title": "sandkit.api.grid.forEachCellInRectangle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, number, number, (...args: [CellCoordinates) =&gt; void\\] args Calls the callback for each cell in a rectangle.",
    "path": "/api/sandkit.api.grid",
    "id": "foreachcellinrectangle"
  },
  {
    "title": "sandkit.api.grid.forEachCellInRect",
    "body": "Deprecated Use forEachCellInRectangle instead. Argument Type Description --- --- --- args ...\\number, number, number, number, (...args: [CellCoordinates) =&gt; void\\] args",
    "path": "/api/sandkit.api.grid",
    "id": "foreachcellinrect",
    "deprecated": true
  },
  {
    "title": "sandkit.api.grid.getCellIdAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the packed cell id at grid coordinates. CellId Packed cell id for the cell.",
    "path": "/api/sandkit.api.grid",
    "id": "getcellidatcell"
  },
  {
    "title": "sandkit.api.grid.isCellEmptyAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the cell has no element or terrain content.",
    "path": "/api/sandkit.api.grid",
    "id": "iscellemptyatcell"
  },
  {
    "title": "sandkit.api.grid.isTerrainAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the cell holds terrain (not an element).",
    "path": "/api/sandkit.api.grid",
    "id": "isterrainatcell"
  },
  {
    "title": "sandkit.api.grid.reportActivityAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Mark the cell active for simulation this tick.",
    "path": "/api/sandkit.api.grid",
    "id": "reportactivityatcell"
  },
  {
    "title": "sandkit.api.grid.excavateAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2, number, ExcavateOptions\\] args Apply excavation damage and eject velocity at a cell.",
    "path": "/api/sandkit.api.grid",
    "id": "excavateatcell"
  },
  {
    "title": "sandkit.api.grid.getDimensions()",
    "body": "Return the world grid size in cells. GridDimensions",
    "path": "/api/sandkit.api.grid",
    "id": "getdimensions"
  },
  {
    "title": "sandkit.api.grid (worker)",
    "body": "Internal Worker-thread sandkit.api.grid — grid reads, activity, and excavation. Worker mutations are immediate. Main thread defers grid writes through api.grid.mutate. Worker subset; do not import main-thread sandkit.api.grid iteration helpers here.",
    "path": "/api/sandkit.api.grid.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.hooks",
    "body": "sandkit.api.hooks — intercept and modify internal game hook points. Main thread only.",
    "path": "/api/sandkit.api.hooks",
    "id": ""
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- cancelled boolean True after cancel was called on this context. cancelled Method Signature Description --- --- --- cancel() (): void When called, the intercepted action is skipped. cancel() Context passed to intercept hook callbacks.",
    "path": "/api/sandkit.api.hooks",
    "id": "hookcontext"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- priority? number Run this hook before others with lower priority. priority? Options shared by intercept and modify hooks. Indexable",
    "path": "/api/sandkit.api.hooks",
    "id": "hookoptions"
  },
  {
    "title": "item:use",
    "body": "item:use teleport:effect:create teleport:effect Deprecated Deprecated alias. action:start action:intercept Deprecated Deprecated alias. input:keyDown input:keydown Deprecated Deprecated alias. input:keyUp input:keyup Deprecated Deprecated alias. placePoints:suppress placePoints:isSuppressed Deprecated Deprecated alias. placePoints:directionalArrows:suppress placePoints:directionalArrows:isSuppressed Deprecated Deprecated alias. entity:update building:place building:clearShape input:scroll input:boostDown input:boost-down Deprecated Deprecated alias. input:descendDown input:descend-down Deprecated Deprecated alias. input:escape interactable:suppressHover fire:element:ignite projectile:fire:overStructure projectile:hit player:position:commit progression:purchase Intercept hook argument shapes keyed by hook id.",
    "path": "/api/sandkit.api.hooks",
    "id": "intercepthookmap",
    "deprecated": true
  },
  {
    "title": "excavation:prepare",
    "body": "excavation:prepare locator:scan:prepare vacuum:prepare vacuum:element:prepare player:movement:prepare player:movement Deprecated Deprecated alias. building:placementLimit:prepare building:placementLimit Deprecated Deprecated alias. building:placement-limit Deprecated Deprecated alias. fluxEmanator:processing:prepare fluxEmanator:processing Deprecated Deprecated alias. flux-emanator:processing Deprecated Deprecated alias. render:pipes:prepare render:pipes Deprecated Deprecated alias. structures:moved:prepare structures:removed:prepare weapon:reload:prepare projectile:travel:prepare projectile:impact:prepare player:collision:prepare trigger:schedule:prepare progression:cost:prepare resource:collection:prepare resource:delivery:prepare resource:balance:prepare gold:removal:prepare gold:removal:settle Modify hook argument shapes keyed by hook id.",
    "path": "/api/sandkit.api.hooks",
    "id": "modifierhookmap",
    "deprecated": true
  },
  {
    "title": "sandkit.api.hooks.InterceptHookOptions",
    "body": "Options for intercept. K extends InterceptHookId",
    "path": "/api/sandkit.api.hooks",
    "id": "intercepthookoptions"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookOptions",
    "body": "Options for modify.",
    "path": "/api/sandkit.api.hooks",
    "id": "modifyhookoptions"
  },
  {
    "title": "sandkit.api.hooks.InterceptHookId",
    "body": "Known main-thread intercept hook ids plus custom strings.",
    "path": "/api/sandkit.api.hooks",
    "id": "intercepthookid"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookId",
    "body": "Known main-thread modify hook ids plus custom strings.",
    "path": "/api/sandkit.api.hooks",
    "id": "modifyhookid"
  },
  {
    "title": "sandkit.api.hooks.InterceptHookArgs",
    "body": "Intercept hook args for a given hook id. K extends InterceptHookId",
    "path": "/api/sandkit.api.hooks",
    "id": "intercepthookargs"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookArgs",
    "body": "Modify hook args for a given hook id. K extends ModifyHookId",
    "path": "/api/sandkit.api.hooks",
    "id": "modifyhookargs"
  },
  {
    "title": "sandkit.api.hooks.intercept",
    "body": "Argument Type Description --- --- --- hookId K Registered hook identifier. callback (args: InterceptHookArgs&lt;K&gt;, context: HookContext) =&gt; void Called with hook arguments and context; may cancel the hook. options? InterceptHookOptions&lt;K&gt; Optional priority and filter options. hookId callback options? Registers an intercept hook. Returns an unsubscribe function. K extends InterceptHookId () = void Examples item:use teleport:effect:create action:start input:keyDown input:keyUp placePoints:suppress placePoints:directionalArrows:suppress entity:update building:place building:clearShape input:scroll input:boostDown input:descendDown input:escape interactable:suppressHover fire:element:ignite projectile:fire:overStructure projectile:hit player:position:commit progression:purchase",
    "path": "/api/sandkit.api.hooks",
    "id": "intercept"
  },
  {
    "title": "sandkit.api.hooks.modify",
    "body": "Argument Type Description --- --- --- hookId K Registered hook identifier. callback (args: ModifyHookArgs&lt;K&gt;) =&gt; void Called with hook arguments; may mutate hook payload. options? ModifyHookOptions Optional priority and filter options. hookId callback options? Registers a modifier hook. Returns an unsubscribe function. K extends ModifyHookId () = void Examples excavation:prepare locator:scan:prepare vacuum:prepare vacuum:element:prepare player:movement:prepare building:placementLimit:prepare fluxEmanator:processing:prepare render:pipes:prepare structures:moved:prepare structures:removed:prepare weapon:reload:prepare projectile:travel:prepare projectile:impact:prepare player:collision:prepare trigger:schedule:prepare progression:cost:prepare resource:collection:prepare resource:delivery:prepare resource:balance:prepare gold:removal:prepare gold:removal:settle",
    "path": "/api/sandkit.api.hooks",
    "id": "modify"
  },
  {
    "title": "sandkit.api.hooks (worker)",
    "body": "Internal Worker-thread sandkit.api.hooks — intercept and modify simulation hook points. Worker-only surface; do not use main-thread sandkit.api.hooks.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": ""
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- cancelled boolean True after cancel was called on this context. cancelled Method Signature Description --- --- --- cancel() (): void When called, the intercepted action is skipped. cancel() Context passed to intercept hook callbacks.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "hookcontext"
  },
  {
    "title": "ElementType",
    "body": "Property Type Description --- --- --- elementType? ElementType Required for element-scoped intercept hooks and optional on emit. terrainType? number Required for terrain-scoped event guards; optional on emit. elementType? terrainType? Guard filter for worker hook registration.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "hookguard"
  },
  {
    "title": "HookGuard",
    "body": "Property Type Description --- --- --- guard? HookGuard priority? number guard? priority? Options for modify.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "modifyhookoptions"
  },
  {
    "title": "cell:process",
    "body": "cell:process element:update element:move element:move:blocked element:blocked Deprecated Deprecated alias. element:duration:expire element:duration Deprecated Deprecated alias. fire:element:burn fire:terrain:burn shaker:elementOn Intercept hook argument shapes keyed by hook id.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "intercepthookmap",
    "deprecated": true
  },
  {
    "title": "sandkit.api.hooks.InterceptHookOptions",
    "body": "Options for intercept. K extends InterceptHookId",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "intercepthookoptions"
  },
  {
    "title": "sandkit.api.hooks.ElementGuardedInterceptHookId",
    "body": "Intercept hook ids with a required element guard.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "elementguardedintercepthookid"
  },
  {
    "title": "sandkit.api.hooks.TerrainGuardedInterceptHookId",
    "body": "Intercept hook ids with a required terrain guard.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "terrainguardedintercepthookid"
  },
  {
    "title": "sandkit.api.hooks.InterceptHookId",
    "body": "Known worker intercept hook ids plus custom strings.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "intercepthookid"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookId",
    "body": "Known worker modify hook ids plus custom strings.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "modifyhookid"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookMap",
    "body": "Modify hook argument shapes keyed by hook id. Unlisted ids use unknown.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "modifyhookmap"
  },
  {
    "title": "sandkit.api.hooks.InterceptHookArgs",
    "body": "Intercept hook args for a given hook id. K extends InterceptHookId",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "intercepthookargs"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookArgs",
    "body": "Modify hook args for a given hook id. K extends ModifyHookId",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "modifyhookargs"
  },
  {
    "title": "sandkit.api.hooks.intercept",
    "body": "Argument Type Description --- --- --- hookId K Registered hook identifier. callback (args: InterceptHookArgs&lt;K&gt;, context: HookContext) =&gt; void Called with hook arguments and context; may cancel the hook. options? InterceptHookOptions&lt;K&gt; Optional guard and priority. hookId callback options? Register an intercept hook on this worker. Returns an unsubscribe function. K extends InterceptHookId () = void Examples cell:process element:update element:move element:move:blocked element:duration:expire fire:element:burn fire:terrain:burn shaker:elementOn",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "intercept"
  },
  {
    "title": "sandkit.api.hooks.modify",
    "body": "Argument Type Description --- --- --- hookId K Registered hook identifier. callback (args: ModifyHookArgs&lt;K&gt;) =&gt; void Called with hook arguments; may mutate hook payload. options? ModifyHookOptions Optional guard and priority. hookId callback options? Register a modifier hook on this worker. Returns an unsubscribe function. K extends ModifyHookId () = void Example Worker entry",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "modify"
  },
  {
    "title": "sandkit.api.i18n",
    "body": "sandkit.api.i18n — translations, locales, and display strings for mods. Main thread only.",
    "path": "/api/sandkit.api.i18n",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- minimumFractionDigits? number Minimum fraction digits. maximumFractionDigits? number Maximum fraction digits. useGrouping? boolean When true, use grouping separators. minimumFractionDigits? maximumFractionDigits? useGrouping? Number format options for formatNumber. Indexable",
    "path": "/api/sandkit.api.i18n",
    "id": "i18nnumberformatoptions"
  },
  {
    "title": "sandkit.api.i18n.Locale",
    "body": "Locale code. \"en\" autocompletes; any locale string is allowed.",
    "path": "/api/sandkit.api.i18n",
    "id": "locale"
  },
  {
    "title": "sandkit.api.i18n.t()",
    "body": "Argument Type Description --- --- --- key string Translation key. params? Record Placeholder values for the key template. key params? Translates a key with optional parameter substitution. Example",
    "path": "/api/sandkit.api.i18n",
    "id": "t"
  },
  {
    "title": "sandkit.api.i18n.register()",
    "body": "Argument Type Description --- --- --- locale Locale Locale code (e.g. en). translations Record Map of keys to translated strings. locale translations Registers translation strings for a locale. Example",
    "path": "/api/sandkit.api.i18n",
    "id": "register"
  },
  {
    "title": "sandkit.api.i18n.getLocale()",
    "body": "Returns the active locale code. Locale",
    "path": "/api/sandkit.api.i18n",
    "id": "getlocale"
  },
  {
    "title": "sandkit.api.i18n.hasTranslation()",
    "body": "Argument Type Description --- --- --- key string Translation key. locale? Locale Optional locale; defaults to the active locale. key locale? Returns true when a translation exists for the key.",
    "path": "/api/sandkit.api.i18n",
    "id": "hastranslation"
  },
  {
    "title": "sandkit.api.i18n.setLocale()",
    "body": "Argument Type Description --- --- --- locale Locale Locale code to activate. locale Sets the active locale. Promise&lt;void&gt;",
    "path": "/api/sandkit.api.i18n",
    "id": "setlocale"
  },
  {
    "title": "sandkit.api.i18n.getLanguages()",
    "body": "Returns metadata for all known languages. object[]",
    "path": "/api/sandkit.api.i18n",
    "id": "getlanguages"
  },
  {
    "title": "sandkit.api.i18n.getAvailableLocales()",
    "body": "Returns locale codes that have registered translations. Locale[]",
    "path": "/api/sandkit.api.i18n",
    "id": "getavailablelocales"
  },
  {
    "title": "sandkit.api.i18n.formatNumber()",
    "body": "Argument Type Description --- --- --- value number Number to format. options? I18nNumberFormatOptions Intl-style number format options. value options? Formats a number for the active locale. Example",
    "path": "/api/sandkit.api.i18n",
    "id": "formatnumber"
  },
  {
    "title": "sandkit.api.i18n.joinKey()",
    "body": "Argument Type Description --- --- --- parts ...string[] Key segments joined with .. parts Joins key parts into a single translation key.",
    "path": "/api/sandkit.api.i18n",
    "id": "joinkey"
  },
  {
    "title": "sandkit.api.i18n.key",
    "body": "Deprecated Use joinKey instead. Argument Type Description --- --- --- parts ...string[] parts",
    "path": "/api/sandkit.api.i18n",
    "id": "key",
    "deprecated": true
  },
  {
    "title": "sandkit.api.i18n.getName()",
    "body": "Argument Type Description --- --- --- definition Object with nameKey or name. definition Returns the display name from a definition with nameKey or name. Example",
    "path": "/api/sandkit.api.i18n",
    "id": "getname"
  },
  {
    "title": "sandkit.api.i18n.getDescription()",
    "body": "Argument Type Description --- --- --- definition Object with descriptionKey or description. definition Returns the description from a definition with descriptionKey or description.",
    "path": "/api/sandkit.api.i18n",
    "id": "getdescription"
  },
  {
    "title": "sandkit.api.i18n.createTranslatable()",
    "body": "Argument Type Description --- --- --- key string Translation key. fallback string Text used when no translation is registered. key fallback Creates a translatable string object with a fallback. \\ \\ translatable: true key: string fallback: string",
    "path": "/api/sandkit.api.i18n",
    "id": "createtranslatable"
  },
  {
    "title": "sandkit.api.i18n.translatable",
    "body": "Deprecated Use createTranslatable instead. Argument Type Description --- --- --- key string fallback string key fallback \\ \\ translatable: true key: string fallback: string",
    "path": "/api/sandkit.api.i18n",
    "id": "translatable",
    "deprecated": true
  },
  {
    "title": "sandkit.api.i18n.setGlobal()",
    "body": "Argument Type Description --- --- --- key string Global helper key. value string & 124; (() = string) Static string or function that returns the current value. key value Sets a global string or lazy resolver used in translations.",
    "path": "/api/sandkit.api.i18n",
    "id": "setglobal"
  },
  {
    "title": "sandkit.api.i18n.getGlobal()",
    "body": "Argument Type Description --- --- --- key string Global helper key. key Returns a global translation helper value. string & 124; undefined",
    "path": "/api/sandkit.api.i18n",
    "id": "getglobal"
  },
  {
    "title": "sandkit.api.i18n.removeGlobal()",
    "body": "Argument Type Description --- --- --- key string Global helper key. key Removes a global translation helper value.",
    "path": "/api/sandkit.api.i18n",
    "id": "removeglobal"
  },
  {
    "title": "sandkit.api.i18n.clearGlobal",
    "body": "Deprecated Use removeGlobal instead. Argument Type Description --- --- --- key string key",
    "path": "/api/sandkit.api.i18n",
    "id": "clearglobal",
    "deprecated": true
  },
  {
    "title": "sandkit.api.i18n.getGlobals()",
    "body": "Returns all global translation helper values. Record&lt;string, string&gt;",
    "path": "/api/sandkit.api.i18n",
    "id": "getglobals"
  },
  {
    "title": "sandkit.api.i18n.formatKeyForDisplay()",
    "body": "Argument Type Description --- --- --- keyCode string Keyboard key code or binding name. keyCode Formats a key code for display in UI.",
    "path": "/api/sandkit.api.i18n",
    "id": "formatkeyfordisplay"
  },
  {
    "title": "sandkit.api.input",
    "body": "sandkit.api.input — key bindings, mouse position, and modifier keys. Main thread only.",
    "path": "/api/sandkit.api.input",
    "id": ""
  },
  {
    "title": "() =&gt; void",
    "body": "Property Type Description --- --- --- down? () =&gt; void Called when the binding is pressed. up? () =&gt; void Called when the binding is released. down? up? Handlers invoked when a binding is pressed or released.",
    "path": "/api/sandkit.api.input",
    "id": "inputbindinghandlers"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- displayName string Display name shown in settings. displayNameKey? string i18n key for the display name (overrides displayName when set). category string Settings category for grouping. handlers InputBindingHandlers Press and release handlers. displayName displayNameKey? category handlers Definition for a registered input binding. Indexable",
    "path": "/api/sandkit.api.input",
    "id": "inputbindingdefinition"
  },
  {
    "title": "sandkit.api.input.BindingId",
    "body": "Binding id. Vanilla KeyBindingEnum names autocomplete; custom ids are allowed.",
    "path": "/api/sandkit.api.input",
    "id": "bindingid"
  },
  {
    "title": "sandkit.api.input.KeyCode",
    "body": "KeyboardEvent.code, a modifier alias (Shift), or a chord (Control+KeyC).",
    "path": "/api/sandkit.api.input",
    "id": "keycode"
  },
  {
    "title": "sandkit.api.input.registerBinding()",
    "body": "Argument Type Description --- --- --- bindingId BindingId Unique id for the binding (also used in settings). defaultKeys KeyCode[] Default key codes (for example \"Control+KeyC\"). definition InputBindingDefinition Display metadata and press/release handlers. bindingId defaultKeys definition Register a key binding and return its binding id. BindingId The registered binding id. Example",
    "path": "/api/sandkit.api.input",
    "id": "registerbinding"
  },
  {
    "title": "sandkit.api.input.getMouseCellPosition()",
    "body": "Return the mouse position in cell coordinates. Cell { x, y } under the cursor. x: number y: number",
    "path": "/api/sandkit.api.input",
    "id": "getmousecellposition"
  },
  {
    "title": "sandkit.api.input.getBoundKeys()",
    "body": "Argument Type Description --- --- --- bindingId BindingId Registered binding id. bindingId Return the keys currently bound to a binding id. KeyCode[] Key strings from settings (for example \"KeyA\" or \"Shift\"). Session input.keys is keyed by KeyboardEvent.code. Modifier aliases (Shift, Alt, Control, Meta) expand to ShiftLeft / ShiftRight and the same for the other modifiers.",
    "path": "/api/sandkit.api.input",
    "id": "getboundkeys"
  },
  {
    "title": "sandkit.api.input.getDisplayKey()",
    "body": "Argument Type Description --- --- --- bindingId BindingId Registered binding id. defaultLabel? string Fallback label when no key is bound. bindingId defaultLabel? Return a display label for the bound key. Human-readable key label for UI.",
    "path": "/api/sandkit.api.input",
    "id": "getdisplaykey"
  },
  {
    "title": "sandkit.api.input.triggerBinding()",
    "body": "Argument Type Description --- --- --- bindingId BindingId Registered binding id. bindingId Fire the binding down handler as if the key was pressed.",
    "path": "/api/sandkit.api.input",
    "id": "triggerbinding"
  },
  {
    "title": "sandkit.api.input.pressBinding()",
    "body": "Argument Type Description --- --- --- bindingId BindingId Registered binding id. bindingId Fire the binding down handler without a matching release.",
    "path": "/api/sandkit.api.input",
    "id": "pressbinding"
  },
  {
    "title": "sandkit.api.input.releaseBinding()",
    "body": "Argument Type Description --- --- --- bindingId BindingId Registered binding id. bindingId Fire the binding up handler.",
    "path": "/api/sandkit.api.input",
    "id": "releasebinding"
  },
  {
    "title": "sandkit.api.input.resetMouseState()",
    "body": "Clear internal mouse button state.",
    "path": "/api/sandkit.api.input",
    "id": "resetmousestate"
  },
  {
    "title": "sandkit.api.input.isCtrlHeld()",
    "body": "Return true when Ctrl is held. True when the Ctrl modifier is down.",
    "path": "/api/sandkit.api.input",
    "id": "isctrlheld"
  },
  {
    "title": "sandkit.api.input.isAltHeld()",
    "body": "Return true when Alt is held. True when the Alt modifier is down.",
    "path": "/api/sandkit.api.input",
    "id": "isaltheld"
  },
  {
    "title": "sandkit.api.items",
    "body": "sandkit.api.items — register custom inventory items and query active items. Main thread only.",
    "path": "/api/sandkit.api.items",
    "id": ""
  },
  {
    "title": "(state: State, action: Action) =&gt; unknown",
    "body": "Property Type Description --- --- --- handleAction? (state: State, action: Action) =&gt; unknown Handles item use actions. afterRender? (state: State) =&gt; void Called after the item is rendered each frame. handleAction? afterRender? Definition for a mod-registered inventory item. State = unknown Action = unknown Indexable",
    "path": "/api/sandkit.api.items",
    "id": "itemdefinition"
  },
  {
    "title": "sandkit.api.items.ItemId",
    "body": "Inventory item id. Built-in ItemIdEnum values autocomplete; custom string ids are allowed.",
    "path": "/api/sandkit.api.items",
    "id": "itemid"
  },
  {
    "title": "sandkit.api.items.ItemType",
    "body": "Item category handle. Built-in ItemTypeEnum values autocomplete.",
    "path": "/api/sandkit.api.items",
    "id": "itemtype"
  },
  {
    "title": "sandkit.api.items.ModItem",
    "body": "Runtime item instance (not yet typed in declarations).",
    "path": "/api/sandkit.api.items",
    "id": "moditem"
  },
  {
    "title": "sandkit.api.items.register()",
    "body": "Argument Type Description --- --- --- definition ItemDefinition Item id, handlers, and display metadata. definition Registers a new item definition.",
    "path": "/api/sandkit.api.items",
    "id": "register"
  },
  {
    "title": "sandkit.api.items.updateDefinition()",
    "body": "Argument Type Description --- --- --- itemId ItemId Registered item id. partial Partial Fields to merge into the definition. itemId partial Updates fields on an existing item definition. Example",
    "path": "/api/sandkit.api.items",
    "id": "updatedefinition"
  },
  {
    "title": "sandkit.api.items.getDefinitionById()",
    "body": "Argument Type Description --- --- --- itemId ItemId Registered item id. itemId Returns the item definition for an id, or undefined. ItemDefinition&lt;unknown, unknown&gt; & 124; undefined",
    "path": "/api/sandkit.api.items",
    "id": "getdefinitionbyid"
  },
  {
    "title": "sandkit.api.items.createFromId()",
    "body": "Argument Type Description --- --- --- itemId ItemId Registered item id. itemId Creates a runtime item instance from an id.",
    "path": "/api/sandkit.api.items",
    "id": "createfromid"
  },
  {
    "title": "sandkit.api.items.getActive()",
    "body": "Returns the item definition for the active hotbar slot. ItemDefinition&lt;unknown, unknown&gt; & 124; undefined",
    "path": "/api/sandkit.api.items",
    "id": "getactive"
  },
  {
    "title": "sandkit.api.items.isActiveById()",
    "body": "Argument Type Description --- --- --- itemId ItemId Item id or numeric type to compare. itemType? ItemType Optional item type discriminator. itemId itemType? Returns true when the given item is the active hotbar item.",
    "path": "/api/sandkit.api.items",
    "id": "isactivebyid"
  },
  {
    "title": "sandkit.api.lights",
    "body": "sandkit.api.lights — temporary lights and persistent world lights. Main thread only.",
    "path": "/api/sandkit.api.lights",
    "id": ""
  },
  {
    "title": "number &#124; null",
    "body": "Property Type Description --- --- --- lightId number & 124; null Assigned temporary light id, or null when creation failed. index number & 124; null Deprecated alias. lightId index Handle returned from temporary.createAtWorld.",
    "path": "/api/sandkit.api.lights",
    "id": "temporarylighthandle"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- brightness? number Light brightness multiplier. size? number Light radius in pixels. color? [number, number, number, number] RGBA color components. brightness? size? color? Options for persistent world lights. Indexable",
    "path": "/api/sandkit.api.lights",
    "id": "persistentlightoptions"
  },
  {
    "title": "sandkit.api.lights.TemporaryLightOptions",
    "body": "Options for temporary lights.",
    "path": "/api/sandkit.api.lights",
    "id": "temporarylightoptions"
  },
  {
    "title": "sandkit.api.lights.PersistentLightHandle",
    "body": "Handle returned from persistent.createAtWorld.",
    "path": "/api/sandkit.api.lights",
    "id": "persistentlighthandle"
  },
  {
    "title": "sandkit.api.lights.persistent",
    "body": "Lights that persist in the world save.",
    "path": "/api/sandkit.api.lights.persistent",
    "id": ""
  },
  {
    "title": "sandkit.api.lights.persistent.createAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. options? PersistentLightOptions Brightness, size, color, and persistence options. worldX worldY options? Create a persistent light at world coordinates. Example",
    "path": "/api/sandkit.api.lights.persistent",
    "id": "createatworld"
  },
  {
    "title": "sandkit.api.lights.persistent.removeAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. worldX worldY Remove the persistent light at world coordinates.",
    "path": "/api/sandkit.api.lights.persistent",
    "id": "removeatworld"
  },
  {
    "title": "sandkit.api.lights.persistent.fadeAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. durationMs? number Fade duration in milliseconds. worldX worldY durationMs? Fade out the persistent light at world coordinates over durationMs.",
    "path": "/api/sandkit.api.lights.persistent",
    "id": "fadeatworld"
  },
  {
    "title": "sandkit.api.lights.persistent.markDirty()",
    "body": "Mark persistent lights dirty so they are saved on the next flush.",
    "path": "/api/sandkit.api.lights.persistent",
    "id": "markdirty"
  },
  {
    "title": "sandkit.api.lights.temporary",
    "body": "Short-lived visual effect lights.",
    "path": "/api/sandkit.api.lights.temporary",
    "id": ""
  },
  {
    "title": "sandkit.api.lights.temporary.createAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. options? TemporaryLightOptions Brightness, duration, color, and dedup options. worldX worldY options? Create a temporary light at world coordinates. TemporaryLightHandle Examples Main entry options.durationTicks options.durationMs",
    "path": "/api/sandkit.api.lights.temporary",
    "id": "createatworld"
  },
  {
    "title": "sandkit.api.lights.temporary.removeById()",
    "body": "Argument Type Description --- --- --- lightId number Light id returned from createAtWorld. lightId Remove a temporary light by its id. Example",
    "path": "/api/sandkit.api.lights.temporary",
    "id": "removebyid"
  },
  {
    "title": "sandkit.api.lights.temporary (worker)",
    "body": "Short-lived visual effect lights.",
    "path": "/api/sandkit.api.lights.temporary.worker",
    "id": ""
  },
  {
    "title": "number &#124; null",
    "body": "Property Type Description --- --- --- lightId number & 124; null Runtime light id, or null when the pool is full. index? number & 124; null Deprecated alias. lightId index? Handle returned by createAtWorld.",
    "path": "/api/sandkit.api.lights.temporary.worker",
    "id": "temporarylighthandle"
  },
  {
    "title": "sandkit.api.lights.temporary.TemporaryLightOptions",
    "body": "Options for createAtWorld.",
    "path": "/api/sandkit.api.lights.temporary.worker",
    "id": "temporarylightoptions"
  },
  {
    "title": "sandkit.api.lights.temporary.createAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World x position in pixels. worldY number World y position in pixels. options? TemporaryLightOptions Brightness, duration, colour, and dedup settings. worldX worldY options? Create a temporary light at world coordinates. TemporaryLightHandle Example Worker entry",
    "path": "/api/sandkit.api.lights.temporary.worker",
    "id": "createatworld"
  },
  {
    "title": "sandkit.api.lights (worker)",
    "body": "Transient VFX lights and long-lived managed lights at world positions. - sandkit.api.lights.temporary Internal Worker-thread sandkit.api.lights — temporary visual effect lights. Worker exposes only temporary; persistent lights are main-thread only.",
    "path": "/api/sandkit.api.lights.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.main (worker)",
    "body": "Internal Worker thread only. sandkit.api.main — send events to the main thread. Base shape reused by WorkerSandkitApi. Main thread has a larger sandkit.api surface; do not assume parity.",
    "path": "/api/sandkit.api.main.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.main.emitEvent",
    "body": "Argument Type Description --- --- --- eventId string Registered event name. payload Payload Serializable payload passed to main-thread listeners. eventId payload Emit a custom event on the main thread. Payload = any",
    "path": "/api/sandkit.api.main.worker",
    "id": "emitevent"
  },
  {
    "title": "sandkit.api.maps",
    "body": "",
    "path": "/api/sandkit.api.maps",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- cellX number cellY number name string cellX cellY name Artifact location entry from getArtifactLocations. Indexable",
    "path": "/api/sandkit.api.maps",
    "id": "artifactlocation"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- id string Map identifier passed to start. name? string Display name or translation key. id name? Available map entry shape. Indexable",
    "path": "/api/sandkit.api.maps",
    "id": "availablemapv1"
  },
  {
    "title": "sandkit.api.maps.getAvailable()",
    "body": "Return maps the player can start. readonly Readonly&lt;AvailableMapV1&gt;[]",
    "path": "/api/sandkit.api.maps",
    "id": "getavailable"
  },
  {
    "title": "sandkit.api.maps.start()",
    "body": "Argument Type Description --- --- --- mapId string Custom map identifier. mapId Start a map by id. Return true when start succeeds.",
    "path": "/api/sandkit.api.maps",
    "id": "start"
  },
  {
    "title": "sandkit.api.maps.getArtifactLocations()",
    "body": "Return artifact marker locations for the active map. readonly ArtifactLocation[] Example",
    "path": "/api/sandkit.api.maps",
    "id": "getartifactlocations"
  },
  {
    "title": "sandkit.api.maps (worker)",
    "body": "Internal Shared sandkit.api.maps base — active custom map metadata. Base namespace reused by main and worker declarations.",
    "path": "/api/sandkit.api.maps.worker",
    "id": ""
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- id? string deployment? unknown spawn? unknown topBounds? { soft: number; hard: number } parallax? unknown depthLight? unknown id? deployment? spawn? topBounds? parallax? depthLight? Active custom map record (version 1 schema). Shape varies by map. Known fields are optional; additional keys may exist. Indexable",
    "path": "/api/sandkit.api.maps.worker",
    "id": "activemapv1"
  },
  {
    "title": "sandkit.api.maps.getActive()",
    "body": "Return the currently loaded custom map definition. Readonly&lt;ActiveMapV1&gt; & 124; null Active map metadata, or null outside custom maps.",
    "path": "/api/sandkit.api.maps.worker",
    "id": "getactive"
  },
  {
    "title": "sandkit.api",
    "body": "- sandkit.api.action - sandkit.api.assets - sandkit.api.authorization - sandkit.api.blueprints - sandkit.api.building - sandkit.api.camera - sandkit.api.collector - sandkit.api.constants - sandkit.api.cooldown - sandkit.api.discoveries - sandkit.api.effects - sandkit.api.elements - sandkit.api.energy - sandkit.api.entities - sandkit.api.events - sandkit.api.excavation - sandkit.api.factory - sandkit.api.fire - sandkit.api.game - sandkit.api.gameConfig - sandkit.api.grid - sandkit.api.hooks - sandkit.api.i18n - sandkit.api.input - sandkit.api.items - sandkit.api.lights - sandkit.api.maps - sandkit.api.mods - sandkit.api.patterns - sandkit.api.pickups - sandkit.api.pipes - sandkit.api.player - sandkit.api.processing - sandkit.api.progression - sandkit.api.projectiles - sandkit.api.random - sandkit.api.raycast - sandkit.api.reactions - sandkit.api.rendering - sandkit.api.resources - sandkit.api.scene - sandkit.api.schedule - sandkit.api.settings - sandkit.api.shared - sandkit.api.signals - sandkit.api.sound - sandkit.api.sprites - sandkit.api.storage - sandkit.api.structureBehaviors - sandkit.api.structures - sandkit.api.tech - sandkit.api.terrains - sandkit.api.time - sandkit.api.tools - sandkit.api.triggers - sandkit.api.ui - sandkit.api.upgrades - sandkit.api.utils - sandkit.api.workers - sandkit.api. world Main-thread sandkit.api barrel. Re-exports all namespaces available as sandkit.api. on the main thread. Prefer these methods over sandkit.engine when both exist.",
    "path": "/api/sandkit.api",
    "id": ""
  },
  {
    "title": "sandkit.api.mods",
    "body": "",
    "path": "/api/sandkit.api.mods",
    "id": ""
  },
  {
    "title": "sandkit.api.mods.AssetProviderV1",
    "body": "Asset provider entry shape.",
    "path": "/api/sandkit.api.mods",
    "id": "assetproviderv1"
  },
  {
    "title": "sandkit.api.mods.getProviders()",
    "body": "Argument Type Description --- --- --- kind string Asset kind identifier (e.g. texture pack category). kind Return asset providers registered for a kind string. readonly AssetProviderV1[]",
    "path": "/api/sandkit.api.mods",
    "id": "getproviders"
  },
  {
    "title": "sandkit.api.patterns",
    "body": "",
    "path": "/api/sandkit.api.patterns",
    "id": ""
  },
  {
    "title": "sandkit.api.patterns.PatternExcavateOptions",
    "body": "Options for pattern-based excavation. Same shape as shared.api.world.ExcavateOptions.",
    "path": "/api/sandkit.api.patterns",
    "id": "patternexcavateoptions"
  },
  {
    "title": "sandkit.api.patterns.createCircle()",
    "body": "Argument Type Description --- --- --- size number Pattern width and height in cells. size Build a circular excavation pattern matrix for the given size. number[][] Square matrix with 1 inside the circle and 0 outside.",
    "path": "/api/sandkit.api.patterns",
    "id": "createcircle"
  },
  {
    "title": "sandkit.api.patterns.excavateAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number[][], Vector2, number, ExcavateOptions\\] args Excavate at a cell using a pattern matrix and output velocity. Examples Main entry Worker entry",
    "path": "/api/sandkit.api.patterns",
    "id": "excavateatcell"
  },
  {
    "title": "sandkit.api.pickups",
    "body": "World pickups — spawn, collect, and query pickup instances. Available as sandkit.api.pickups.",
    "path": "/api/sandkit.api.pickups",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- brightness? number Light brightness multiplier. Default 1. size? number Light radius in world pixels. Default 100. color? [number, number, number] & 124; [number, number, number, number] RGB or RGBA color components in 0–1 range. brightness? size? color? Optional point light attached when spawning a pickup.",
    "path": "/api/sandkit.api.pickups",
    "id": "worlditemlight"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- id number x number y number type PickupType data Record&lt;string, unknown&gt; id x y type data Active world pickup instance.",
    "path": "/api/sandkit.api.pickups",
    "id": "worlditem"
  },
  {
    "title": "sandkit.api.pickups.PickupType",
    "body": "Official pickup type discriminator.",
    "path": "/api/sandkit.api.pickups",
    "id": "pickuptype"
  },
  {
    "title": "sandkit.api.pickups.WorldItemType",
    "body": "Deprecated Use PickupType instead.",
    "path": "/api/sandkit.api.pickups",
    "id": "worlditemtype",
    "deprecated": true
  },
  {
    "title": "sandkit.api.pickups.spawnAtWorld()",
    "body": "Argument Type Description --- --- --- type PickupType Pickup type discriminator. worldX number World x position in pixels. worldY number World y position in pixels. data? Record Optional per-item data bag copied onto the instance. light? WorldItemLight Optional point light spawned with the pickup. type worldX worldY data? light? Spawn a pickup at world position. WorldItem The spawned pickup instance.",
    "path": "/api/sandkit.api.pickups",
    "id": "spawnatworld"
  },
  {
    "title": "sandkit.api.pickups.remove()",
    "body": "Argument Type Description --- --- --- pickup WorldItem Pickup returned from spawn or lookup helpers. pickup Remove a pickup instance from the world.",
    "path": "/api/sandkit.api.pickups",
    "id": "remove"
  },
  {
    "title": "sandkit.api.pickups.destroy",
    "body": "Deprecated Use remove instead. Argument Type Description --- --- --- pickup WorldItem pickup",
    "path": "/api/sandkit.api.pickups",
    "id": "destroy",
    "deprecated": true
  },
  {
    "title": "sandkit.api.pickups.pickUp()",
    "body": "Argument Type Description --- --- --- pickup WorldItem Pickup to collect. pickup Pick up a world item into inventory. True when the item was collected.",
    "path": "/api/sandkit.api.pickups",
    "id": "pickup"
  },
  {
    "title": "sandkit.api.pickups.getAll()",
    "body": "Return all active pickups. WorldItem[]",
    "path": "/api/sandkit.api.pickups",
    "id": "getall"
  },
  {
    "title": "sandkit.api.pickups.getById()",
    "body": "Argument Type Description --- --- --- pickupId number Runtime pickup id. pickupId Return a pickup by numeric id. WorldItem & 124; undefined",
    "path": "/api/sandkit.api.pickups",
    "id": "getbyid"
  },
  {
    "title": "sandkit.api.pipes",
    "body": "Pipe network queries and enablement at grid cells. Available as sandkit.api.pipes.",
    "path": "/api/sandkit.api.pipes",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- cellX number cellY number cellX cellY Connected vent cell position. Indexable",
    "path": "/api/sandkit.api.pipes",
    "id": "pipeventcell"
  },
  {
    "title": "sandkit.api.pipes.isAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when a pipe occupies the cell.",
    "path": "/api/sandkit.api.pipes",
    "id": "isatcell"
  },
  {
    "title": "sandkit.api.pipes.isEnabledAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when pipe flow is enabled at the cell.",
    "path": "/api/sandkit.api.pipes",
    "id": "isenabledatcell"
  },
  {
    "title": "sandkit.api.pipes.getConnectedVentsAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return connected liquid vent cell positions for the pipe at a cell. readonly PipeVentCell[]",
    "path": "/api/sandkit.api.pipes",
    "id": "getconnectedventsatcell"
  },
  {
    "title": "sandkit.api.pipes.setEnabledAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, boolean\\] args Enable or disable pipe flow at a cell.",
    "path": "/api/sandkit.api.pipes",
    "id": "setenabledatcell"
  },
  {
    "title": "sandkit.api.player.buildings",
    "body": "Player building unlock helpers.",
    "path": "/api/sandkit.api.player.buildings",
    "id": ""
  },
  {
    "title": "sandkit.api.player.buildings.unlockById()",
    "body": "Argument Type Description --- --- --- structureId string Registered structure id string. structureId Unlock a structure type for building.",
    "path": "/api/sandkit.api.player.buildings",
    "id": "unlockbyid"
  },
  {
    "title": "sandkit.api.player.buildings.unlockByType",
    "body": "Deprecated Use unlockById instead. Argument Type Description --- --- --- structureId string structureId",
    "path": "/api/sandkit.api.player.buildings",
    "id": "unlockbytype",
    "deprecated": true
  },
  {
    "title": "sandkit.api.player.buildings.removeById()",
    "body": "Argument Type Description --- --- --- structureId string Registered structure id string. structureId Remove a structure unlock from the player.",
    "path": "/api/sandkit.api.player.buildings",
    "id": "removebyid"
  },
  {
    "title": "sandkit.api.player.inventory",
    "body": "Player inventory helpers.",
    "path": "/api/sandkit.api.player.inventory",
    "id": ""
  },
  {
    "title": "sandkit.api.player.inventory.addById()",
    "body": "Argument Type Description --- --- --- itemId string Registered item id string. itemId Add an item to inventory by item id.",
    "path": "/api/sandkit.api.player.inventory",
    "id": "addbyid"
  },
  {
    "title": "sandkit.api.player.inventory.addFromId",
    "body": "Deprecated Use addById instead. Argument Type Description --- --- --- itemId string itemId",
    "path": "/api/sandkit.api.player.inventory",
    "id": "addfromid",
    "deprecated": true
  },
  {
    "title": "sandkit.api.player",
    "body": "",
    "path": "/api/sandkit.api.player",
    "id": ""
  },
  {
    "title": "sandkit.api.player.setPositionAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World x position in pixels. worldY number World y position in pixels. worldX worldY Set the player world position.",
    "path": "/api/sandkit.api.player",
    "id": "setpositionatworld"
  },
  {
    "title": "sandkit.api.player.setWorldPosition",
    "body": "Deprecated Use setPositionAtWorld instead. Argument Type Description --- --- --- worldX number World x position in pixels. worldY number World y position in pixels. worldX worldY",
    "path": "/api/sandkit.api.player",
    "id": "setworldposition",
    "deprecated": true
  },
  {
    "title": "sandkit.api.player.setVelocity()",
    "body": "Argument Type Description --- --- --- velocityX number Horizontal velocity in pixels per second. velocityY number Vertical velocity in pixels per second. velocityX velocityY Set the player velocity.",
    "path": "/api/sandkit.api.player",
    "id": "setvelocity"
  },
  {
    "title": "sandkit.api.player.setMovementSpeedMultiplier()",
    "body": "Argument Type Description --- --- --- multiplier number Speed scale factor (1 is default walk). 0 freezes movement. Vanilla Sprint Boost (Shift burst + meter) only runs when this value is exactly 1. multiplier Set the movement speed multiplier.",
    "path": "/api/sandkit.api.player",
    "id": "setmovementspeedmultiplier"
  },
  {
    "title": "sandkit.api.player.setMovementMode()",
    "body": "Argument Type Description --- --- --- mode \"normal\" & 124; \"hover\" \"normal\" for default physics, or \"hover\" for hover flight. mode Set movement mode to normal or hover. True when the mode changes.",
    "path": "/api/sandkit.api.player",
    "id": "setmovementmode"
  },
  {
    "title": "sandkit.api.player.isOnGround()",
    "body": "Return true when the player is on ground. Tests solid cells 1 pixel below the hitbox. Do not use player.onGround on the store snapshot — that flag is not updated during play. True when the player touches solid ground.",
    "path": "/api/sandkit.api.player",
    "id": "isonground"
  },
  {
    "title": "sandkit.api.player.teleportToGround()",
    "body": "Move the player down until ground is found.",
    "path": "/api/sandkit.api.player",
    "id": "teleporttoground"
  },
  {
    "title": "sandkit.api.player.isPositionClearAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World x position in pixels to test. worldY number World y position in pixels to test. worldX worldY Return true when the world position has no collision. True when the player hitbox fits at the position.",
    "path": "/api/sandkit.api.player",
    "id": "ispositionclearatworld"
  },
  {
    "title": "sandkit.api.player.isWorldPositionClear",
    "body": "Deprecated Use isPositionClearAtWorld instead. Argument Type Description --- --- --- worldX number worldY number worldX worldY",
    "path": "/api/sandkit.api.player",
    "id": "isworldpositionclear",
    "deprecated": true
  },
  {
    "title": "sandkit.api.player (worker)",
    "body": "Internal Shared sandkit.api.player base — player position and collision queries. Base namespace reused by main and worker declarations.",
    "path": "/api/sandkit.api.player.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.player.getPositionAtWorld()",
    "body": "Return the player center position in world pixels. Vector2 World position as { x, y } in pixels.",
    "path": "/api/sandkit.api.player.worker",
    "id": "getpositionatworld"
  },
  {
    "title": "sandkit.api.player.getWorldPosition",
    "body": "Deprecated Use getPositionAtWorld instead. Vector2",
    "path": "/api/sandkit.api.player.worker",
    "id": "getworldposition",
    "deprecated": true
  },
  {
    "title": "sandkit.api.player.isCollidingWithCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the player hitbox overlaps the cell. True when the player overlaps the cell.",
    "path": "/api/sandkit.api.player.worker",
    "id": "iscollidingwithcell"
  },
  {
    "title": "sandkit.api.player.isWithinRadiusOfCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Return true when the player is within radius cells of the point. True when the player is inside the radius.",
    "path": "/api/sandkit.api.player.worker",
    "id": "iswithinradiusofcell"
  },
  {
    "title": "sandkit.api.processing",
    "body": "",
    "path": "/api/sandkit.api.processing",
    "id": ""
  },
  {
    "title": "ElementType",
    "body": "Property Type Description --- --- --- elementType ElementType Output element type (1–255). chance number Output probability from 0 to 1. elementType chance Weighted element output entry shared by machine recipes.",
    "path": "/api/sandkit.api.processing",
    "id": "weightedrecipeoutput"
  },
  {
    "title": "ElementType",
    "body": "Property Type Description --- --- --- input ElementType Input element type placed on the grower. output ElementType Output element type produced by the grower. chance? number Success chance from 0 to 1. Default 1. input output chance? Planter box grower recipe definition.",
    "path": "/api/sandkit.api.processing",
    "id": "planterboxrecipedefinitionv1"
  },
  {
    "title": "ElementType",
    "body": "Property Type Description --- --- --- input ElementType Input element type dropped on the shaker. outputsAbove WeightedRecipeOutput[] Weighted outputs ejected upward. outputsBelow WeightedRecipeOutput[] Weighted outputs ejected downward. input outputsAbove outputsBelow Shaker recipe definition.",
    "path": "/api/sandkit.api.processing",
    "id": "shakerrecipedefinitionv1"
  },
  {
    "title": "ElementType",
    "body": "Property Type Description --- --- --- input ElementType Input element type processed by the press. minimumDownwardVelocity number Minimum downward velocity required to trigger the press. outputs WeightedRecipeOutput[] Weighted outputs produced by the press. input minimumDownwardVelocity outputs Kinetic press recipe definition.",
    "path": "/api/sandkit.api.processing",
    "id": "kineticpressrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.processing.registerGrower()",
    "body": "Argument Type Description --- --- --- definition PlanterBoxRecipeDefinitionV1 Grower input/output recipe. definition Register a planter box grower recipe.",
    "path": "/api/sandkit.api.processing",
    "id": "registergrower"
  },
  {
    "title": "sandkit.api.processing.registerShaker()",
    "body": "Argument Type Description --- --- --- definition ShakerRecipeDefinitionV1 Shaker input and weighted outputs. definition Register a shaker recipe.",
    "path": "/api/sandkit.api.processing",
    "id": "registershaker"
  },
  {
    "title": "sandkit.api.processing.registerKineticPress()",
    "body": "Argument Type Description --- --- --- definition KineticPressRecipeDefinitionV1 Press input, velocity threshold, and outputs. definition Register a kinetic press recipe.",
    "path": "/api/sandkit.api.processing",
    "id": "registerkineticpress"
  },
  {
    "title": "sandkit.api.progression",
    "body": "",
    "path": "/api/sandkit.api.progression",
    "id": ""
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- id string Progression step or quest identifier. id Progression completion request shape. Indexable",
    "path": "/api/sandkit.api.progression",
    "id": "progressioncompletionrequestv1"
  },
  {
    "title": "sandkit.api.progression.complete()",
    "body": "Argument Type Description --- --- --- request ProgressionCompletionRequestV1 Progression id and optional metadata for the step. request Mark a progression step complete. Return true when completion succeeds. Example",
    "path": "/api/sandkit.api.progression",
    "id": "complete"
  },
  {
    "title": "sandkit.api.projectiles",
    "body": "",
    "path": "/api/sandkit.api.projectiles",
    "id": ""
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- id string sprite { id: string; tint: number } getOptions () =&gt; Record&lt;string, unknown&gt; Returns spawn-time physics and visual options. getModData? (state: unknown, projectile: Projectile) =&gt; Record&lt;string, unknown&gt; Optional per-projectile mutable data factory. id sprite getOptions getModData? Mod-registered projectile definition. Indexable",
    "path": "/api/sandkit.api.projectiles",
    "id": "projectiledefinition"
  },
  {
    "title": "Record&lt;string, unknown&gt;",
    "body": "Property Type Description --- --- --- opts Record&lt;string, unknown&gt; type unknown opts type Blueprint used to spawn a projectile.",
    "path": "/api/sandkit.api.projectiles",
    "id": "projectileblueprint"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- id number x number y number id x y Active projectile instance. Indexable",
    "path": "/api/sandkit.api.projectiles",
    "id": "projectile"
  },
  {
    "title": "sandkit.api.projectiles.register()",
    "body": "Argument Type Description --- --- --- definition ProjectileDefinition Projectile id, sprite, and runtime options factory. definition Register a projectile definition.",
    "path": "/api/sandkit.api.projectiles",
    "id": "register"
  },
  {
    "title": "sandkit.api.projectiles.getDefinitionById()",
    "body": "Argument Type Description --- --- --- projectileId string Registered projectile id. projectileId Return a projectile definition by string id. ProjectileDefinition & 124; undefined",
    "path": "/api/sandkit.api.projectiles",
    "id": "getdefinitionbyid"
  },
  {
    "title": "sandkit.api.projectiles.createBlueprintFromId()",
    "body": "Argument Type Description --- --- --- projectileId string Registered projectile id. projectileId Build a spawn blueprint from a projectile string id. ProjectileBlueprint Blueprint passed to spawnAtWorld.",
    "path": "/api/sandkit.api.projectiles",
    "id": "createblueprintfromid"
  },
  {
    "title": "sandkit.api.projectiles.getAll()",
    "body": "Return all active projectiles. Projectile[]",
    "path": "/api/sandkit.api.projectiles",
    "id": "getall"
  },
  {
    "title": "sandkit.api.projectiles.getById()",
    "body": "Argument Type Description --- --- --- projectileId number Runtime projectile id. projectileId Return a projectile by numeric id. Projectile & 124; undefined",
    "path": "/api/sandkit.api.projectiles",
    "id": "getbyid"
  },
  {
    "title": "sandkit.api.projectiles.remove()",
    "body": "Argument Type Description --- --- --- projectile Projectile Projectile instance to remove. projectile Remove a projectile from the world.",
    "path": "/api/sandkit.api.projectiles",
    "id": "remove"
  },
  {
    "title": "sandkit.api.projectiles.spawnAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number Spawn x position in world pixels. worldY number Spawn y position in world pixels. angle number Launch angle in radians. blueprint ProjectileBlueprint Blueprint from createBlueprintFromId. worldX worldY angle blueprint Spawn a projectile at world position with angle and blueprint. Projectile The spawned projectile instance.",
    "path": "/api/sandkit.api.projectiles",
    "id": "spawnatworld"
  },
  {
    "title": "sandkit.api.random",
    "body": "",
    "path": "/api/sandkit.api.random",
    "id": ""
  },
  {
    "title": "sandkit.api.random.int()",
    "body": "Argument Type Description --- --- --- min number Minimum value (inclusive). max number Maximum value (inclusive). min max Return a random integer in the inclusive range.",
    "path": "/api/sandkit.api.random",
    "id": "int"
  },
  {
    "title": "sandkit.api.random.float()",
    "body": "Argument Type Description --- --- --- min number Minimum value (inclusive). max number Maximum value (inclusive). min max Return a random float in the inclusive range.",
    "path": "/api/sandkit.api.random",
    "id": "float"
  },
  {
    "title": "sandkit.api.raycast",
    "body": "",
    "path": "/api/sandkit.api.raycast",
    "id": ""
  },
  {
    "title": "sandkit.api.raycast.castFromWorld()",
    "body": "Argument Type Description --- --- --- startWorldX number Ray origin world X in pixels. startWorldY number Ray origin world Y in pixels. angle number Ray direction in radians. maxDistance number Maximum ray length in pixels. startWorldX startWorldY angle maxDistance Cast a ray from world position. Return hit point and distance, or null. Vector2 & object & 124; null",
    "path": "/api/sandkit.api.raycast",
    "id": "castfromworld"
  },
  {
    "title": "sandkit.api.reactions",
    "body": "",
    "path": "/api/sandkit.api.reactions",
    "id": ""
  },
  {
    "title": "ElementType",
    "body": "Property Type Description --- --- --- inputA ElementType First reacting element type. inputB ElementType Second reacting element type. outputA ElementType & 124; null Element type produced from input A, or null for no output. outputB ElementType & 124; null Element type produced from input B, or null for no output. orientation? &quot;any&quot; & 124; &quot;stacked&quot; Contact layout requirement. Default \"any\". inputA inputB outputA outputB orientation? Contact reaction recipe definition.",
    "path": "/api/sandkit.api.reactions",
    "id": "contactrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.reactions.registerContact()",
    "body": "Argument Type Description --- --- --- definition ContactRecipeDefinitionV1 Contact recipe inputs, outputs, and orientation. definition Register a contact reaction between elements. Example",
    "path": "/api/sandkit.api.reactions",
    "id": "registercontact"
  },
  {
    "title": "sandkit.api.rendering",
    "body": "",
    "path": "/api/sandkit.api.rendering",
    "id": ""
  },
  {
    "title": "sandkit.api.rendering.getDrawPositionAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return screen draw position for a grid cell. Vector2",
    "path": "/api/sandkit.api.rendering",
    "id": "getdrawpositionatcell"
  },
  {
    "title": "sandkit.api.rendering.getDrawPositionAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World x position in pixels. worldY number World y position in pixels. worldX worldY Return screen draw position for a world-space point. Vector2 Example",
    "path": "/api/sandkit.api.rendering",
    "id": "getdrawpositionatworld"
  },
  {
    "title": "sandkit.api.rendering.getGridMetrics()",
    "body": "Return cell size and snap grid metrics. cellSize: number snapGridCellSize: number Example",
    "path": "/api/sandkit.api.rendering",
    "id": "getgridmetrics"
  },
  {
    "title": "sandkit.api.rendering.getOverlayViewportSize()",
    "body": "Return overlay viewport width and height in pixels. width: number height: number",
    "path": "/api/sandkit.api.rendering",
    "id": "getoverlayviewportsize"
  },
  {
    "title": "sandkit.api.rendering.withOverlayContext",
    "body": "Argument Type Description --- --- --- callback (context: CanvasRenderingContext2D) =&gt; T Receives the overlay 2D context; return value is passed through. callback Run a callback with the overlay canvas context. Example",
    "path": "/api/sandkit.api.rendering",
    "id": "withoverlaycontext"
  },
  {
    "title": "sandkit.api.resources",
    "body": "",
    "path": "/api/sandkit.api.resources",
    "id": ""
  },
  {
    "title": "sandkit.api.resources.collectFluxiteAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Collect fluxite at the given cell.",
    "path": "/api/sandkit.api.resources",
    "id": "collectfluxiteatcell"
  },
  {
    "title": "sandkit.api.resources.updateEnergy()",
    "body": "Argument Type Description --- --- --- amount number Energy delta (positive or negative). options? When deferUi is true, skip immediate UI refresh. amount options? Update stored energy by amount with optional UI deferral. Example Official \\api.resources.adjustEnergy\\ (typed deprecated alias: updateEnergy)",
    "path": "/api/sandkit.api.resources",
    "id": "updateenergy"
  },
  {
    "title": "sandkit.api.scene",
    "body": "",
    "path": "/api/sandkit.api.scene",
    "id": ""
  },
  {
    "title": "sandkit.api.scene.getActive()",
    "body": "Return the active scene. Scene",
    "path": "/api/sandkit.api.scene",
    "id": "getactive"
  },
  {
    "title": "sandkit.api.schedule",
    "body": "",
    "path": "/api/sandkit.api.schedule",
    "id": ""
  },
  {
    "title": "sandkit.api.schedule.nextTick()",
    "body": "Argument Type Description --- --- --- callback () =&gt; void Function invoked once on the next tick. callback Run a callback on the next game tick. Example",
    "path": "/api/sandkit.api.schedule",
    "id": "nexttick"
  },
  {
    "title": "sandkit.api.settings",
    "body": "",
    "path": "/api/sandkit.api.settings",
    "id": ""
  },
  {
    "title": "sandkit.api.settings.FieldId",
    "body": "Settings field id. Any string is allowed.",
    "path": "/api/sandkit.api.settings",
    "id": "fieldid"
  },
  {
    "title": "sandkit.api.settings.ConfigValueV1",
    "body": "Settings field value shape.",
    "path": "/api/sandkit.api.settings",
    "id": "configvaluev1"
  },
  {
    "title": "sandkit.api.settings.get()",
    "body": "Argument Type Description --- --- --- fieldId string & object Settings field identifier. fieldId Return a settings field value by id. ConfigValueV1 & 124; undefined",
    "path": "/api/sandkit.api.settings",
    "id": "get"
  },
  {
    "title": "sandkit.api.settings.getAll()",
    "body": "Return all settings as a read-only map. Readonly&lt;Record&lt;string, ConfigValueV1&gt;&gt;",
    "path": "/api/sandkit.api.settings",
    "id": "getall"
  },
  {
    "title": "sandkit.api.settings.onChange()",
    "body": "Argument Type Description --- --- --- callback (values: Readonly&lt;Record&lt;string, ConfigValueV1&gt;&gt;) =&gt; void Called with the full settings map after a change. callback Subscribe to settings changes. Return an unsubscribe function. () = void Example",
    "path": "/api/sandkit.api.settings",
    "id": "onchange"
  },
  {
    "title": "sandkit.api.shared.buffers",
    "body": "Shared buffer ensure and lookup.",
    "path": "/api/sandkit.api.shared.buffers",
    "id": ""
  },
  {
    "title": "sandkit.api.shared.buffers.ensure()",
    "body": "Argument Type Description --- --- --- key string Buffer name shared across threads. config Typed array kind and element count. key config Create or return a named shared buffer with type and length. SharedArray Example",
    "path": "/api/sandkit.api.shared.buffers",
    "id": "ensure"
  },
  {
    "title": "sandkit.api.shared.buffers.create",
    "body": "Deprecated Use ensure instead. Argument Type Description --- --- --- key string config { type: SharedArrayType; length: number } key config SharedArray",
    "path": "/api/sandkit.api.shared.buffers",
    "id": "create",
    "deprecated": true
  },
  {
    "title": "sandkit.api.shared.buffers.get()",
    "body": "Argument Type Description --- --- --- key string Buffer name shared across threads. key Look up a named shared buffer without creating it. SharedArray & 124; undefined The typed array, or undefined when the buffer does not exist.",
    "path": "/api/sandkit.api.shared.buffers",
    "id": "get"
  },
  {
    "title": "sandkit.api.shared.buffers (worker)",
    "body": "Named shared memory buffers for worker threads.",
    "path": "/api/sandkit.api.shared.buffers.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.shared.buffers.require()",
    "body": "Argument Type Description --- --- --- key string Buffer name shared across threads. config Expected array type and length for validation. key config Attach to a named shared buffer on this worker. The buffer must already exist on the main thread with the same SharedArrayType and length as config. SharedArray Example",
    "path": "/api/sandkit.api.shared.buffers.worker",
    "id": "require"
  },
  {
    "title": "sandkit.api.shared",
    "body": "",
    "path": "/api/sandkit.api.shared",
    "id": ""
  },
  {
    "title": "sandkit.api.shared.SharedArray",
    "body": "Typed array backing a shared buffer. Use SharedArrayType when creating or requiring a buffer. The runtime returns the matching Array constructor for the configured type.",
    "path": "/api/sandkit.api.shared",
    "id": "sharedarray"
  },
  {
    "title": "sandkit.api.shared.SharedArrayType",
    "body": "Discriminator for the underlying typed array kind.",
    "path": "/api/sandkit.api.shared",
    "id": "sharedarraytype"
  },
  {
    "title": "sandkit.api.shared (worker)",
    "body": "SharedArrayBuffer storage for data shared between main and worker threads. - sandkit.api.shared.buffers Internal Worker thread only. sandkit.api.shared — shared memory buffers for workers. Workers require buffers created on the main thread. Main thread only gets existing buffers. See shared for the shared base declarations. Worker extension of shared; not interchangeable with main-thread sandkit.api.shared.",
    "path": "/api/sandkit.api.shared.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.signals",
    "body": "",
    "path": "/api/sandkit.api.signals",
    "id": ""
  },
  {
    "title": "sandkit.api.signals.StructureType",
    "body": "Structure type id or enum value.",
    "path": "/api/sandkit.api.signals",
    "id": "structuretype"
  },
  {
    "title": "sandkit.api.signals.Structure",
    "body": "Structure instance in the world.",
    "path": "/api/sandkit.api.signals",
    "id": "structure"
  },
  {
    "title": "sandkit.api.signals.SignalTargetPayloadV1",
    "body": "Payload delivered to a signal target handler.",
    "path": "/api/sandkit.api.signals",
    "id": "signaltargetpayloadv1"
  },
  {
    "title": "sandkit.api.signals.targets",
    "body": "Signal target registration for structure types.",
    "path": "/api/sandkit.api.signals.targets",
    "id": ""
  },
  {
    "title": "sandkit.api.signals.targets.register()",
    "body": "Argument Type Description --- --- --- structureTypeOrId unknown Structure type id or enum value. apply (structure: unknown, payload: unknown) =&gt; void Called when a signal reaches a matching structure. structureTypeOrId apply Register a handler when a signal targets a structure type. Example",
    "path": "/api/sandkit.api.signals.targets",
    "id": "register"
  },
  {
    "title": "sandkit.api.sound",
    "body": "",
    "path": "/api/sandkit.api.sound",
    "id": ""
  },
  {
    "title": "(): void",
    "body": "Method Signature Description --- --- --- stop() (): void Stop this sound instance. stop() Handle returned from a play call.",
    "path": "/api/sandkit.api.sound",
    "id": "soundhandle"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- soundId string Sound id for this layer. volume? number Layer volume multiplier. delay? number Delay in milliseconds before this layer plays. playbackRate? number Playback rate for this layer. soundId volume? delay? playbackRate? One layer in a layered sound. Indexable",
    "path": "/api/sandkit.api.sound",
    "id": "soundlayer"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- volume? number Volume multiplier (0–1 typical). playbackRate? number Playback rate multiplier. position? { x: number; y: number } World position for distance attenuation. loop? boolean When true, loop until stopped. rateLimitKey? string Key used with rateLimitMs to dedupe rapid replays. rateLimitMs? number Minimum ms between plays with the same rateLimitKey. volume? playbackRate? position? loop? rateLimitKey? rateLimitMs? Options passed to sound play helpers. Indexable",
    "path": "/api/sandkit.api.sound",
    "id": "soundoptions"
  },
  {
    "title": "{ x: number; y: number }",
    "body": "Property Type Description --- --- --- position? { x: number; y: number } World position applied to all layers. volume? number Volume multiplier applied to all layers. rateLimitKey? string Key used with rateLimitMs to dedupe rapid replays. rateLimitMs? number Minimum ms between plays with the same rateLimitKey. position? volume? rateLimitKey? rateLimitMs? Shared options for playLayers.",
    "path": "/api/sandkit.api.sound",
    "id": "soundlayersoptions"
  },
  {
    "title": "sandkit.api.sound.play()",
    "body": "Argument Type Description --- --- --- soundId string Registered sound identifier. options? SoundOptions Volume, position, playback rate, and rate-limit options. soundId options? Play a sound by id with optional options. SoundHandle",
    "path": "/api/sandkit.api.sound",
    "id": "play"
  },
  {
    "title": "sandkit.api.sound.playActive()",
    "body": "Argument Type Description --- --- --- soundId string Registered sound identifier. options? SoundOptions Volume, position, playback rate, and rate-limit options. soundId options? Play a sound on the active sound channel. SoundHandle",
    "path": "/api/sandkit.api.sound",
    "id": "playactive"
  },
  {
    "title": "sandkit.api.sound.playLayers()",
    "body": "Argument Type Description --- --- --- layers SoundLayer[] Layer definitions (sound id, volume, delay, and per-layer options). options? SoundLayersOptions Shared position, volume, and rate-limit options for all layers. layers options? Play multiple sound layers with shared options. SoundHandle[]",
    "path": "/api/sandkit.api.sound",
    "id": "playlayers"
  },
  {
    "title": "sandkit.api.sound.calculateDistanceOptionsAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. baseVolume? number Base volume before distance attenuation. worldX worldY baseVolume? Build distance-based volume options for a world position. SoundOptions",
    "path": "/api/sandkit.api.sound",
    "id": "calculatedistanceoptionsatworld"
  },
  {
    "title": "sandkit.api.sound.stopBySoundId()",
    "body": "Argument Type Description --- --- --- soundId string Registered sound identifier to stop. soundId Stop a sound by id.",
    "path": "/api/sandkit.api.sound",
    "id": "stopbysoundid"
  },
  {
    "title": "sandkit.api.sound.stopById",
    "body": "Deprecated Use stopBySoundId instead. Argument Type Description --- --- --- soundId string soundId",
    "path": "/api/sandkit.api.sound",
    "id": "stopbyid",
    "deprecated": true
  },
  {
    "title": "sandkit.api.sound.stopActive()",
    "body": "Stop the active sound channel.",
    "path": "/api/sandkit.api.sound",
    "id": "stopactive"
  },
  {
    "title": "sandkit.api.sound.stopAll()",
    "body": "Stop all playing sounds.",
    "path": "/api/sandkit.api.sound",
    "id": "stopall"
  },
  {
    "title": "sandkit.api.sprites",
    "body": "",
    "path": "/api/sandkit.api.sprites",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- tint? number Packed RGB tint applied after load. tint? Options for load and loadFromMod. Indexable",
    "path": "/api/sandkit.api.sprites",
    "id": "spriteloadoptions"
  },
  {
    "title": "sandkit.api.sprites.LoadedSprite",
    "body": "Loaded sprite handle (runtime texture or display object).",
    "path": "/api/sandkit.api.sprites",
    "id": "loadedsprite"
  },
  {
    "title": "sandkit.api.sprites.load()",
    "body": "Argument Type Description --- --- --- spriteId string Id used with getById. path string URL or asset path to load. options? SpriteLoadOptions Optional tint and load options. spriteId path options? Load a sprite from a URL path. Promise&lt;void&gt;",
    "path": "/api/sandkit.api.sprites",
    "id": "load"
  },
  {
    "title": "sandkit.api.sprites.loadFromMod()",
    "body": "Argument Type Description --- --- --- spriteId string Id used with getById. relativePath string Path relative to the mod folder. options? SpriteLoadOptions Optional tint and load options. spriteId relativePath options? Load a sprite from the calling mod folder. Promise&lt;void&gt;",
    "path": "/api/sandkit.api.sprites",
    "id": "loadfrommod"
  },
  {
    "title": "sandkit.api.sprites.getById()",
    "body": "Argument Type Description --- --- --- spriteId string Sprite id from load or loadFromMod. spriteId Return a loaded sprite by id.",
    "path": "/api/sandkit.api.sprites",
    "id": "getbyid"
  },
  {
    "title": "sandkit.api.sprites.hideAllPlayerModSprites()",
    "body": "Hide all player mod-attached sprites.",
    "path": "/api/sandkit.api.sprites",
    "id": "hideallplayermodsprites"
  },
  {
    "title": "sandkit.api.sprites.rotatePlayerModSprites()",
    "body": "Argument Type Description --- --- --- angle number Rotation in radians. angle Rotate all player mod-attached sprites by angle.",
    "path": "/api/sandkit.api.sprites",
    "id": "rotateplayermodsprites"
  },
  {
    "title": "sandkit.api.storage.local",
    "body": "Local session storage without mod id scope.",
    "path": "/api/sandkit.api.storage.local",
    "id": ""
  },
  {
    "title": "sandkit.api.storage.local.get()",
    "body": "Argument Type Description --- --- --- key string Storage key. key Read a local storage value by key. JsonValueV1 & 124; undefined",
    "path": "/api/sandkit.api.storage.local",
    "id": "get"
  },
  {
    "title": "sandkit.api.storage.local.set()",
    "body": "Argument Type Description --- --- --- key string Storage key. value JsonValueV1 JSON-serializable value. key value Write a local storage value by key.",
    "path": "/api/sandkit.api.storage.local",
    "id": "set"
  },
  {
    "title": "sandkit.api.storage.local.remove()",
    "body": "Argument Type Description --- --- --- key string Storage key. key Remove a local storage key.",
    "path": "/api/sandkit.api.storage.local",
    "id": "remove"
  },
  {
    "title": "sandkit.api.storage",
    "body": "",
    "path": "/api/sandkit.api.storage",
    "id": ""
  },
  {
    "title": "sandkit.api.storage.ensure()",
    "body": "Argument Type Description --- --- --- modId string Mod identifier (typically modinfo.id). modId Ensure storage exists for a mod id. JsonObjectV1",
    "path": "/api/sandkit.api.storage",
    "id": "ensure"
  },
  {
    "title": "sandkit.api.storage.get()",
    "body": "Argument Type Description --- --- --- modId string Mod identifier. key string Storage key. modId key Read a value from mod storage by key. JsonValueV1 & 124; undefined",
    "path": "/api/sandkit.api.storage",
    "id": "get"
  },
  {
    "title": "sandkit.api.storage.set()",
    "body": "Argument Type Description --- --- --- modId string Mod identifier. key string Storage key. value JsonValueV1 JSON-serializable value. modId key value Write a value to mod storage by key.",
    "path": "/api/sandkit.api.storage",
    "id": "set"
  },
  {
    "title": "sandkit.api.storage.remove()",
    "body": "Argument Type Description --- --- --- modId string Mod identifier. key string Storage key. modId key Remove a key from mod storage.",
    "path": "/api/sandkit.api.storage",
    "id": "remove"
  },
  {
    "title": "sandkit.api.structureBehaviors",
    "body": "",
    "path": "/api/sandkit.api.structureBehaviors",
    "id": ""
  },
  {
    "title": "sandkit.api.structureBehaviors.registerConveyorType()",
    "body": "Argument Type Description --- --- --- structureId string Structure type id string. options? Transport offset, velocity, distance, and run direction. structureId options? Register conveyor behavior for a structure type. Example",
    "path": "/api/sandkit.api.structureBehaviors",
    "id": "registerconveyortype"
  },
  {
    "title": "sandkit.api.structureBehaviors.registerLauncherType()",
    "body": "Argument Type Description --- --- --- definition Launcher type ids, velocities, and optional shared buffer key. definition Register launcher behavior for up, left, and right launcher types.",
    "path": "/api/sandkit.api.structureBehaviors",
    "id": "registerlaunchertype"
  },
  {
    "title": "sandkit.api.structures",
    "body": "",
    "path": "/api/sandkit.api.structures",
    "id": ""
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- type string directions? string[] spanTiles? number Fixed span length in tiles for line-linked structures. type directions? spanTiles? Build mode entry for a structure definition.",
    "path": "/api/sandkit.api.structures",
    "id": "structurebuildmode"
  },
  {
    "title": "StructureRef",
    "body": "Property Type Description --- --- --- id StructureRef angles number[] id angles Rotated variant entry for a structure definition.",
    "path": "/api/sandkit.api.structures",
    "id": "structurevariant"
  },
  {
    "title": "&quot;custom&quot;",
    "body": "Property Type Description --- --- --- type &quot;custom&quot; dataFieldMessage { message: string; messageKey: string; fields: readonly StructureTooltipHoverField[] } type dataFieldMessage Custom hover tooltip driven by structure data fields. Example Official example",
    "path": "/api/sandkit.api.structures",
    "id": "structuretooltiphover"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- param string field string fallback? string & 124; number round? boolean valueLabels? Record&lt;string, string&gt; valueKeys? Record&lt;string, string&gt; param field fallback? round? valueLabels? valueKeys? One interpolated field in a StructureTooltipHover message.",
    "path": "/api/sandkit.api.structures",
    "id": "structuretooltiphoverfield"
  },
  {
    "title": "{ width: number; height: number }",
    "body": "Property Type Description --- --- --- frameSize { width: number; height: number } frames number intervalMs number rowDataField? string When set, frame row follows this structure data field. frameSize frames intervalMs rowDataField? Spritesheet animation on a structure render block.",
    "path": "/api/sandkit.api.structures",
    "id": "structurespritesheet"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- imageName? string size? { width: number; height: number } offset? { x: number; y: number } outline? boolean width? string height? string clipToBounds? boolean imageName? size? offset? outline? width? height? clipToBounds? Hotbar / build-menu UI sprite settings.",
    "path": "/api/sandkit.api.structures",
    "id": "structurerenderui"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- imageName? string size? { width: number; height: number } offset? { x: number; y: number } z? number ambienceGroup? string ui? StructureRenderUi spritesheet? StructureSpritesheet imageName? size? offset? z? ambienceGroup? ui? spritesheet? Render settings for a structure definition.",
    "path": "/api/sandkit.api.structures",
    "id": "structurerender"
  },
  {
    "title": "string &amp; object",
    "body": "Property Type Description --- --- --- id string &amp; object name? string nameKey? string description? string descriptionKey? string categoryKey? string order? number buildModes? StructureBuildMode[] shape? number[][] variants? StructureVariant[] render? StructureRender defaultData? Record&lt;string, unknown&gt; linkedClearance? string Linked placement clearance mode (for example \"allOrNothing\"). tooltipHover? StructureTooltipHover Custom hover tooltip over the built structure. rejectWhenBlocked? boolean Reject placement when the footprint is blocked. alwaysUnlocked? boolean Show in the build menu without research unlock. descriptionParams? Record&lt;string, string & 124; number&gt; Values interpolated into the structure description string. id name? nameKey? description? descriptionKey? categoryKey? order? buildModes? shape? variants? render? defaultData? linkedClearance? tooltipHover? rejectWhenBlocked? alwaysUnlocked? descriptionParams? Full structure definition registered with the game. Indexable",
    "path": "/api/sandkit.api.structures",
    "id": "sandkitstructuredefinition"
  },
  {
    "title": "sandkit.api.structures.StructureBuildOptions",
    "body": "Options passed to buildAtCell. Indexable",
    "path": "/api/sandkit.api.structures",
    "id": "structurebuildoptions"
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- removeCells? boolean Also remove underlying terrain cells in the footprint. skipVisuals? boolean Skip visual teardown effects. removeCells? skipVisuals? Options passed to removeAtCell.",
    "path": "/api/sandkit.api.structures",
    "id": "structureremovaloptions"
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- removeCells? boolean skipVisuals? boolean preserveUnselectable? boolean When set, only remove structures at these positions. onlyPositions? Vector2[] removeCells? skipVisuals? preserveUnselectable? onlyPositions? Options passed to bulk structure removal helpers.",
    "path": "/api/sandkit.api.structures",
    "id": "structurebulkremovaloptions"
  },
  {
    "title": "(...args: CellCoordinates): ElementType &#124; null",
    "body": "Method Signature Description --- --- --- getResolvedTypeAtCell() (...args: CellCoordinates): ElementType & 124; null Return the resolved element type at a cell, or null. getElementTypeAtCell() (...args: CellCoordinates): ElementType & 124; null Deprecated alias. isCellEmptyAtCell() (...args: CellCoordinates): boolean Return true when the cell has no element or terrain. isCellEmpty() (...args: CellCoordinates): boolean Deprecated alias. commit() (mutations: unknown): void Commit batched grid mutations from the processing callback. getResolvedTypeAtCell() getElementTypeAtCell() isCellEmptyAtCell() isCellEmpty() commit() Context passed to structure processing callbacks.",
    "path": "/api/sandkit.api.structures",
    "id": "structureprocessingcontext"
  },
  {
    "title": "sandkit.api.structures.StructureProcessorDefinitionV1",
    "body": "Deprecated Use StructureProcessingDefinitionV1 with processing.register instead. Property Type Description --- --- --- intervalMs number Tick interval in milliseconds. Must be 0. process (structure: Structure, context: StructureProcessingContext) =&gt; void Synchronous callback invoked for each structure instance. intervalMs process",
    "path": "/api/sandkit.api.structures",
    "id": "structureprocessordefinitionv1",
    "deprecated": true
  },
  {
    "title": "&quot;integer&quot;",
    "body": "Property Type Description --- --- --- type &quot;integer&quot; id string labelKey string min? number max? number default? number type id labelKey min? max? default? Integer placement field with optional bounds.",
    "path": "/api/sandkit.api.structures",
    "id": "placementconfigintegerfield"
  },
  {
    "title": "&quot;choice&quot;",
    "body": "Property Type Description --- --- --- type &quot;choice&quot; id string labelKey string options readonly object[] type id labelKey options Choice placement field with labeled options.",
    "path": "/api/sandkit.api.structures",
    "id": "placementconfigchoicefield"
  },
  {
    "title": "string &amp; object",
    "body": "Property Type Description --- --- --- structureId string &amp; object fields PlacementConfigField[] structureId fields Placement rule definition for a structure type.",
    "path": "/api/sandkit.api.structures",
    "id": "placementconfigdefinition"
  },
  {
    "title": "ElementType",
    "body": "Property Type Description --- --- --- input ElementType outputs WeightedRecipeOutput[] input outputs Weighted refinery recipe definition shape.",
    "path": "/api/sandkit.api.structures",
    "id": "weightedrefineryrecipedefinitionv1"
  },
  {
    "title": "StructureRef",
    "body": "Property Type Description --- --- --- structureType StructureRef intervalMs number process (structure: Structure, context: StructureProcessingContext) =&gt; void structureType intervalMs process Custom structure processing definition shape.",
    "path": "/api/sandkit.api.structures",
    "id": "structureprocessingdefinitionv1"
  },
  {
    "title": "sandkit.api.structures.PlacementConfigField",
    "body": "Placement hotbar field definition.",
    "path": "/api/sandkit.api.structures",
    "id": "placementconfigfield"
  },
  {
    "title": "sandkit.api.structures.PlanterBoxRecipeDefinitionV1",
    "body": "Planter box recipe definition shape.",
    "path": "/api/sandkit.api.structures",
    "id": "planterboxrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.structures.ShakerRecipeDefinitionV1",
    "body": "Shaker recipe definition shape.",
    "path": "/api/sandkit.api.structures",
    "id": "shakerrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.structures.KineticPressRecipeDefinitionV1",
    "body": "Kinetic press recipe definition shape.",
    "path": "/api/sandkit.api.structures",
    "id": "kineticpressrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.structures.register()",
    "body": "Argument Type Description --- --- --- definition SandkitStructureDefinition Full structure definition. options? When useRawShape is true, keep the shape matrix as-is. definition options? Register a new structure definition. Example",
    "path": "/api/sandkit.api.structures",
    "id": "register"
  },
  {
    "title": "sandkit.api.structures.updateDefinition()",
    "body": "Argument Type Description --- --- --- structureTypeOrId StructureRef Structure type value or string id. partial Partial Fields to merge onto the definition. options? When useRawShape is true, keep the shape matrix as-is. structureTypeOrId partial options? Patch fields on an existing structure definition. Example",
    "path": "/api/sandkit.api.structures",
    "id": "updatedefinition"
  },
  {
    "title": "sandkit.api.structures.registerVariant()",
    "body": "Argument Type Description --- --- --- baseStructureTypeOrId StructureRef Base structure type or id. variant Variant id and supported rotation angles. options? Optional build-mode wiring for the variant. baseStructureTypeOrId variant options? Add a rotated variant to a base structure type. Example",
    "path": "/api/sandkit.api.structures",
    "id": "registervariant"
  },
  {
    "title": "sandkit.api.structures.addVariant",
    "body": "Deprecated Use registerVariant instead. Argument Type Description --- --- --- baseStructureTypeOrId StructureRef variant { id: StructureRef; angles: number[] } options? { addBuildMode: unknown } baseStructureTypeOrId variant options?",
    "path": "/api/sandkit.api.structures",
    "id": "addvariant",
    "deprecated": true
  },
  {
    "title": "sandkit.api.structures.registerPlacementConfig()",
    "body": "Argument Type Description --- --- --- definition PlacementConfigDefinition Hotbar placement field configuration. definition Register placement rules for a structure. Example",
    "path": "/api/sandkit.api.structures",
    "id": "registerplacementconfig"
  },
  {
    "title": "sandkit.api.structures.getAvailableTypes()",
    "body": "Return structure types available for building. Set&lt;StructureRef&gt;",
    "path": "/api/sandkit.api.structures",
    "id": "getavailabletypes"
  },
  {
    "title": "sandkit.api.structures.getUnlockedTypes",
    "body": "Deprecated Use getAvailableTypes instead. Set&lt;StructureRef&gt;",
    "path": "/api/sandkit.api.structures",
    "id": "getunlockedtypes",
    "deprecated": true
  },
  {
    "title": "sandkit.api.structures.isBlockedByPlayerAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the player blocks building at the cell.",
    "path": "/api/sandkit.api.structures",
    "id": "isblockedbyplayeratcell"
  },
  {
    "title": "sandkit.api.structures.isLauncherAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when a launcher structure is at the cell.",
    "path": "/api/sandkit.api.structures",
    "id": "islauncheratcell"
  },
  {
    "title": "sandkit.api.structures.isLockedByType()",
    "body": "Argument Type Description --- --- --- structureType StructureRef Structure type value or string id. structureType Return structure lock state for a type. Official docs list isUnlockedByType as a deprecated alias of this function (same implementation and return value; names differ only).",
    "path": "/api/sandkit.api.structures",
    "id": "islockedbytype"
  },
  {
    "title": "sandkit.api.structures.isUnlockedByType",
    "body": "Deprecated Use isLockedByType instead. Same function as isLockedByType; return value is not inverted. Argument Type Description --- --- --- structureType StructureRef structureType",
    "path": "/api/sandkit.api.structures",
    "id": "isunlockedbytype",
    "deprecated": true
  },
  {
    "title": "sandkit.api.structures.mapValueToSpritesheetIndex()",
    "body": "Argument Type Description --- --- --- value number Numeric value to map. thresholds number[] Ascending threshold values. value thresholds Map a numeric value through thresholds to a spritesheet index. Spritesheet frame index. Example",
    "path": "/api/sandkit.api.structures",
    "id": "mapvaluetospritesheetindex"
  },
  {
    "title": "sandkit.api.structures.buildAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [StructureRef, StructureBuildOptions\\] args Build a structure at a cell. Main-thread writes are deferred.",
    "path": "/api/sandkit.api.structures",
    "id": "buildatcell"
  },
  {
    "title": "sandkit.api.structures.buildAtCellWhenIdle",
    "body": "Deprecated Use buildAtCell instead. Argument Type Description --- --- --- args ...\\number, number, [StructureRef, StructureBuildOptions\\] args",
    "path": "/api/sandkit.api.structures",
    "id": "buildatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.structures.removeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [StructureRemovalOptions\\] args Remove a structure at a cell. Main-thread writes are deferred.",
    "path": "/api/sandkit.api.structures",
    "id": "removeatcell"
  },
  {
    "title": "sandkit.api.structures.removeAtCellWhenIdle",
    "body": "Deprecated Use removeAtCell instead. Argument Type Description --- --- --- args ...\\number, number, [StructureRemovalOptions\\] args",
    "path": "/api/sandkit.api.structures",
    "id": "removeatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.structures.removeBetweenCells()",
    "body": "Argument Type Description --- --- --- startCellX number Start cell column. startCellY number Start cell row. endCellX number End cell column. endCellY number End cell row. options? StructureBulkRemovalOptions Optional bulk-removal flags. startCellX startCellY endCellX endCellY options? Remove structures between two cells. Main-thread writes are deferred.",
    "path": "/api/sandkit.api.structures",
    "id": "removebetweencells"
  },
  {
    "title": "sandkit.api.structures.removeBetweenCellsWhenIdle",
    "body": "Deprecated Use removeBetweenCells instead. Argument Type Description --- --- --- startCellX number startCellY number endCellX number endCellY number options? StructureBulkRemovalOptions startCellX startCellY endCellX endCellY options?",
    "path": "/api/sandkit.api.structures",
    "id": "removebetweencellswhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.structures.removeAtCells()",
    "body": "Argument Type Description --- --- --- positions Vector2[] Cell positions to clear. options? StructureBulkRemovalOptions Optional bulk-removal flags. positions options? Remove structures at many cells. Main-thread writes are deferred. Example",
    "path": "/api/sandkit.api.structures",
    "id": "removeatcells"
  },
  {
    "title": "sandkit.api.structures.removeAtCellsWhenIdle",
    "body": "Deprecated Use removeAtCells instead. Argument Type Description --- --- --- positions Vector2[] options? StructureBulkRemovalOptions positions options?",
    "path": "/api/sandkit.api.structures",
    "id": "removeatcellswhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.structures.addProcessor",
    "body": "Deprecated Use processing.register instead. Argument Type Description --- --- --- structureId StructureRef definition StructureProcessorDefinitionV1 structureId definition",
    "path": "/api/sandkit.api.structures",
    "id": "addprocessor",
    "deprecated": true
  },
  {
    "title": "sandkit.api.structures.processing",
    "body": "Per-structure processing enablement and registration.",
    "path": "/api/sandkit.api.structures.processing",
    "id": ""
  },
  {
    "title": "sandkit.api.structures.processing.register()",
    "body": "Argument Type Description --- --- --- id string & object Unique processing registration id. definition StructureProcessingDefinitionV1 Structure type, interval, and callback. id definition Register a custom processing definition by id. Example",
    "path": "/api/sandkit.api.structures.processing",
    "id": "register"
  },
  {
    "title": "sandkit.api.structures.processing.setEnabledAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, boolean\\] args Enable or disable processing at a cell. True when the enabled state changed.",
    "path": "/api/sandkit.api.structures.processing",
    "id": "setenabledatcell"
  },
  {
    "title": "sandkit.api.structures.processing.setEnabledAt",
    "body": "Deprecated Use setEnabledAtCell instead. Argument Type Description --- --- --- args ...\\[number, number, boolean\\] args",
    "path": "/api/sandkit.api.structures.processing",
    "id": "setenabledat",
    "deprecated": true
  },
  {
    "title": "sandkit.api.structures.processing (worker)",
    "body": "Structure processing enablement checks.",
    "path": "/api/sandkit.api.structures.processing.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.structures.processing.isEnabledAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when processing is enabled at the cell.",
    "path": "/api/sandkit.api.structures.processing.worker",
    "id": "isenabledatcell"
  },
  {
    "title": "sandkit.api.structures.processing.isEnabledAt",
    "body": "Deprecated Use isEnabledAtCell instead. Argument Type Description --- --- --- args ...CellCoordinates args",
    "path": "/api/sandkit.api.structures.processing.worker",
    "id": "isenabledat",
    "deprecated": true
  },
  {
    "title": "sandkit.api.structures.recipes",
    "body": "Structure recipe registration by machine kind.",
    "path": "/api/sandkit.api.structures.recipes",
    "id": ""
  },
  {
    "title": "register()",
    "body": "Call Signature Defined in: sandkit/api/structures.d.ts:447 Register a planter box recipe. Parameters id \"planterBox\" Machine recipe slot id. definition PlanterBoxRecipeDefinitionV1 Grower recipe definition. Returns void Example Call Signature Defined in: sandkit/api/structures.d.ts:456 Register a shaker recipe. Parameters id \"shaker\" Machine recipe slot id. definition ShakerRecipeDefinitionV1 Shaker recipe definition. Returns void Call Signature Defined in: sandkit/api/structures.d.ts:465 Register a kinetic press recipe. Parameters id \"kineticPress\" Machine recipe slot id. definition KineticPressRecipeDefinitionV1 Kinetic press recipe definition. Returns void Call Signature Defined in: sandkit/api/structures.d.ts:474 Register a weighted refinery machine recipe. Parameters id \"condenser\" \\ \"steamDryer\" \\ \"synthesizer\" \\ \"snowmaker\" \\ \"smelter\" Refinery machine id. definition WeightedRefineryRecipeDefinitionV1 Weighted input/output recipe. Returns void",
    "path": "/api/sandkit.api.structures.recipes",
    "id": "register"
  },
  {
    "title": "sandkit.api.structures (worker)",
    "body": "Internal Shared sandkit.api.structures base — structure lookup and mutation. Base namespace reused by main and worker declarations.",
    "path": "/api/sandkit.api.structures.worker",
    "id": ""
  },
  {
    "title": "string &#124; null",
    "body": "Property Type Description --- --- --- elementId? string & 124; null elementType? TaggedNumber&lt;&quot;elementType&quot;&gt; & 124; null elementId? elementType? Per-structure custom data bag. Indexable",
    "path": "/api/sandkit.api.structures.worker",
    "id": "structuredata"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- x number y number trapped? boolean data? StructureData x y trapped? data? Live structure instance in the world grid. Indexable",
    "path": "/api/sandkit.api.structures.worker",
    "id": "structure"
  },
  {
    "title": "sandkit.api.structures.StructureType",
    "body": "Numeric structure type handle. Built-in enum values autocomplete.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "structuretype"
  },
  {
    "title": "sandkit.api.structures.StructureId",
    "body": "Mod or built-in structure string id.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "structureid"
  },
  {
    "title": "sandkit.api.structures.StructureRef",
    "body": "Type handle or string id accepted by lookup helpers.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "structureref"
  },
  {
    "title": "sandkit.api.structures.forEachOfType()",
    "body": "Argument Type Description --- --- --- structureTypeOrId StructureRef Structure type value or string id. callback (structure: Structure) =&gt; void Called once per matching structure instance. structureTypeOrId callback Invoke a callback for every structure of the given type. Example Worker entry",
    "path": "/api/sandkit.api.structures.worker",
    "id": "foreachoftype"
  },
  {
    "title": "sandkit.api.structures.getAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the structure at a cell, or null when none. Structure & 124; null",
    "path": "/api/sandkit.api.structures.worker",
    "id": "getatcell"
  },
  {
    "title": "sandkit.api.structures.getDefinitionByType()",
    "body": "Argument Type Description --- --- --- structureType StructureRef Structure type value or string id. structureType Return the mod-registered or built-in definition for a structure type.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "getdefinitionbytype"
  },
  {
    "title": "sandkit.api.structures.getTypeById()",
    "body": "Argument Type Description --- --- --- structureId string & object Structure string id. structureId Map a structure string id to its runtime type value. StructureType",
    "path": "/api/sandkit.api.structures.worker",
    "id": "gettypebyid"
  },
  {
    "title": "sandkit.api.structures.getTypeFromId",
    "body": "Deprecated Use getTypeById instead. Argument Type Description --- --- --- structureId string & object structureId StructureType",
    "path": "/api/sandkit.api.structures.worker",
    "id": "gettypefromid",
    "deprecated": true
  },
  {
    "title": "sandkit.api.structures.hasBuiltAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when a completed structure occupies the cell.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "hasbuiltatcell"
  },
  {
    "title": "sandkit.api.structures.isType()",
    "body": "Argument Type Description --- --- --- structure Structure & 124; null Structure instance, or null. structureId string & object Structure string id to compare. structure structureId Return true when the structure matches the given id.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "istype"
  },
  {
    "title": "sandkit.api.structures.isTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, string &amp; object\\] args Return true when the cell structure matches the given id.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "istypeatcell"
  },
  {
    "title": "sandkit.api.structures.setSpritesheetIndex()",
    "body": "Argument Type Description --- --- --- structure Structure Target structure instance. index number Spritesheet frame index. structure index Set the spritesheet frame index on a structure instance.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "setspritesheetindex"
  },
  {
    "title": "sandkit.api.structures.setSpritesheetIndexAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Set spritesheet frame index for the structure at a cell.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "setspritesheetindexatcell"
  },
  {
    "title": "sandkit.api.structures.setSpritesheetIndexByValue()",
    "body": "Argument Type Description --- --- --- structure Structure Target structure instance. value number Numeric value mapped through thresholds. thresholds number[] Ascending threshold values. structure value thresholds Pick spritesheet index from a value and threshold table on a structure.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "setspritesheetindexbyvalue"
  },
  {
    "title": "sandkit.api.structures.setSpritesheetIndexByValueAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number, number[]\\] args Same as setSpritesheetIndexByValue for the structure at a cell.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "setspritesheetindexbyvalueatcell"
  },
  {
    "title": "sandkit.api.structures.update()",
    "body": "Argument Type Description --- --- --- structure Structure Structure instance to update. options? When propagateToWorkers is true, sync to worker threads. structure options? Push structure field changes to simulation. Example Worker entry",
    "path": "/api/sandkit.api.structures.worker",
    "id": "update"
  },
  {
    "title": "sandkit.api.structures.updateData()",
    "body": "Argument Type Description --- --- --- structure Structure Structure instance to update. partial any Fields to merge onto structure.data. options? When propagateToWorkers is true, sync to worker threads. structure partial options? Merge partial data onto a structure. Example Worker entry",
    "path": "/api/sandkit.api.structures.worker",
    "id": "updatedata"
  },
  {
    "title": "sandkit.api.structures.setData",
    "body": "Deprecated Use updateData instead. Argument Type Description --- --- --- structure Structure partial any options? { propagateToWorkers: boolean } structure partial options?",
    "path": "/api/sandkit.api.structures.worker",
    "id": "setdata",
    "deprecated": true
  },
  {
    "title": "sandkit.api.tech.conservatory",
    "body": "Conservatory unlock wiring for built-in tech nodes.",
    "path": "/api/sandkit.api.tech.conservatory",
    "id": ""
  },
  {
    "title": "sandkit.api.tech.conservatory.appendUnlock()",
    "body": "Argument Type Description --- --- --- techId TechGridId Built-in or custom tech id. unlocks ConservatoryUnlocks Optional structure and item ids to unlock. techId unlocks Append structure or item unlocks to a conservatory tech node. Example",
    "path": "/api/sandkit.api.tech.conservatory",
    "id": "appendunlock"
  },
  {
    "title": "sandkit.api.tech",
    "body": "",
    "path": "/api/sandkit.api.tech",
    "id": ""
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- name? string Plain display name (when not using nameKey). nameKey? string Display name translation key. description? string Plain description (when not using descriptionKey). descriptionKey? string Description translation key. cost? number Research cost. currencyType? string Currency used for cost (for example \"gold\"). branch? string Tech tree branch id (often copied from the parent node). unlocks? { structures: readonly string[]; items: readonly string[] } Content unlocked when this tech is researched. requires? readonly string[] Prerequisite tech ids. name? nameKey? description? descriptionKey? cost? currencyType? branch? unlocks? requires? Tech definition shape. Indexable",
    "path": "/api/sandkit.api.tech",
    "id": "techdefinition"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- x number y number x y Position on the tech grid.",
    "path": "/api/sandkit.api.tech",
    "id": "techgridposition"
  },
  {
    "title": "readonly string[]",
    "body": "Property Type Description --- --- --- structures? readonly string[] Structure ids to unlock. items? readonly string[] Item ids to unlock. structures? items? Unlock payload for conservatory.appendUnlock.",
    "path": "/api/sandkit.api.tech",
    "id": "conservatoryunlocks"
  },
  {
    "title": "sandkit.api.tech.TechGridId",
    "body": "Tech grid node id. Built-in TechEnum values autocomplete; custom string ids and tagged handles are allowed.",
    "path": "/api/sandkit.api.tech",
    "id": "techgridid"
  },
  {
    "title": "sandkit.api.tech.getDefinitionById()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech entry identifier. techId Return a tech definition by string id. TechDefinition & 124; undefined",
    "path": "/api/sandkit.api.tech",
    "id": "getdefinitionbyid"
  },
  {
    "title": "sandkit.api.tech.updateDefinition()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech entry identifier. updates Partial Fields to merge into the definition. techId updates Patch fields on an existing tech definition. Example",
    "path": "/api/sandkit.api.tech",
    "id": "updatedefinition"
  },
  {
    "title": "sandkit.api.tech.registerDefinition()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech entry identifier. definition TechDefinition Full tech definition to register. techId definition Register a new tech definition by id. Example",
    "path": "/api/sandkit.api.tech",
    "id": "registerdefinition"
  },
  {
    "title": "sandkit.api.tech.addDefinition",
    "body": "Deprecated Use registerDefinition instead. Argument Type Description --- --- --- techId TechGridId definition TechDefinition techId definition",
    "path": "/api/sandkit.api.tech",
    "id": "adddefinition",
    "deprecated": true
  },
  {
    "title": "sandkit.api.tech.registerNode()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech grid node id. definition TechDefinition Tech definition for the node. options Parent node id and optional preferred grid position. techId definition options Register a tech node on the grid with parent and position options. TechGridPosition Example",
    "path": "/api/sandkit.api.tech",
    "id": "registernode"
  },
  {
    "title": "sandkit.api.tech.isLockedById()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech entry id (string or numeric enum). techId Return true when a tech entry is locked.",
    "path": "/api/sandkit.api.tech",
    "id": "islockedbyid"
  },
  {
    "title": "sandkit.api.tech.setLockedById()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech entry id (string or numeric enum). locked boolean When true, the tech cannot be purchased. techId locked Set locked state for a tech entry by id.",
    "path": "/api/sandkit.api.tech",
    "id": "setlockedbyid"
  },
  {
    "title": "sandkit.api.tech.isResearchedById()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech entry id (string or numeric enum). techId Return true when a tech entry has been researched.",
    "path": "/api/sandkit.api.tech",
    "id": "isresearchedbyid"
  },
  {
    "title": "sandkit.api.terrains",
    "body": "",
    "path": "/api/sandkit.api.terrains",
    "id": ""
  },
  {
    "title": "readonly Interaction[]",
    "body": "Property Type Description --- --- --- interactions? readonly Interaction[] Tooltip interactions shown for this terrain. interactions? Terrain definition shape with typed element interactions. Extends - Omit\\ Indexable",
    "path": "/api/sandkit.api.terrains",
    "id": "terraindefinition"
  },
  {
    "title": "sandkit.api.terrains.register()",
    "body": "Argument Type Description --- --- --- definition TerrainDefinition Terrain definition to register. definition Register a new terrain definition. Object with the assigned cellType. cellType: TerrainType",
    "path": "/api/sandkit.api.terrains",
    "id": "register"
  },
  {
    "title": "sandkit.api.terrains.updateDefinition()",
    "body": "Argument Type Description --- --- --- cellTypeOrId TerrainRef Numeric cell type or terrain string id. partial Partial Fields to merge onto the definition. cellTypeOrId partial Patch fields on an existing terrain definition.",
    "path": "/api/sandkit.api.terrains",
    "id": "updatedefinition"
  },
  {
    "title": "sandkit.api.terrains.createAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] args Create terrain at a cell. Main-entry writes are deferred; reads see the old grid.",
    "path": "/api/sandkit.api.terrains",
    "id": "createatcell"
  },
  {
    "title": "sandkit.api.terrains.createAtCellWhenIdle",
    "body": "Deprecated Use createAtCell instead. Argument Type Description --- --- --- args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] args",
    "path": "/api/sandkit.api.terrains",
    "id": "createatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.terrains.replaceAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] args Replace terrain at a cell. Main-entry writes are deferred; reads see the old grid.",
    "path": "/api/sandkit.api.terrains",
    "id": "replaceatcell"
  },
  {
    "title": "sandkit.api.terrains.replaceAtCellWhenIdle",
    "body": "Deprecated Use replaceAtCell instead. Argument Type Description --- --- --- args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] args",
    "path": "/api/sandkit.api.terrains",
    "id": "replaceatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.terrains.removeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainMutationOptions\\] args Remove terrain at a cell. Main-entry writes are deferred; reads see the old grid.",
    "path": "/api/sandkit.api.terrains",
    "id": "removeatcell"
  },
  {
    "title": "sandkit.api.terrains.removeAtCellWhenIdle",
    "body": "Deprecated Use removeAtCell instead. Argument Type Description --- --- --- args ...\\number, number, [TerrainMutationOptions\\] args",
    "path": "/api/sandkit.api.terrains",
    "id": "removeatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.terrains.setHitPointsAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Set terrain hit points at a cell. Main-entry writes are deferred; reads see the old grid.",
    "path": "/api/sandkit.api.terrains",
    "id": "sethitpointsatcell"
  },
  {
    "title": "sandkit.api.terrains.setHpAtCell",
    "body": "Deprecated Use setHitPointsAtCell instead. Argument Type Description --- --- --- args ...\\[number, number, number\\] args",
    "path": "/api/sandkit.api.terrains",
    "id": "sethpatcell",
    "deprecated": true
  },
  {
    "title": "sandkit.api.terrains.setHpAtCellWhenIdle",
    "body": "Deprecated Use setHitPointsAtCell instead. Argument Type Description --- --- --- args ...\\[number, number, number\\] args",
    "path": "/api/sandkit.api.terrains",
    "id": "sethpatcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.terrains (worker)",
    "body": "Internal Shared sandkit.api.terrains base — terrain type lookup and cell mutation. Worker-entry mutations are immediate. Main thread defers matching helpers in sandkit.api.terrains. Base namespace reused by main and worker declarations.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": ""
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- id string Unique mod-scoped terrain id. nameKey? string i18n key for the terrain display name. hp? number Default terrain hit points. materialId? number Material id used for rendering. Must be obstacle breakpoint and number UI/meta color as 0xRRGGBB. colorHSL? [number, number, number] Base terrain color as HSL components. excavationRequirements? readonly string[] Tool item ids required to excavate this terrain. interactions? readonly object[] Tooltip interactions shown for this terrain. output? { elementType: ElementType; chance: number } Default element drop when the terrain is destroyed. id nameKey? hp? materialId? metaColor? colorHSL? excavationRequirements? interactions? output? Terrain definition shape for register and getDefinitionByType. Indexable",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "terraindefinition"
  },
  {
    "title": "TerrainType",
    "body": "Property Type Description --- --- --- cellType TerrainType Numeric terrain cell type. hitPoints number & 124; null Current hit points, or null when the terrain has no hp. hp? number & 124; null Deprecated alias. cellType hitPoints hp? Terrain cell data returned by getDataAtCell.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "terraindataatcell"
  },
  {
    "title": "boolean",
    "body": "Property Type Description --- --- --- skipShadow? boolean Skip shadow updates around the changed cell. skipShadow? Options for terrain create, replace, or remove calls.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "terrainmutationoptions"
  },
  {
    "title": "sandkit.api.terrains.TerrainType",
    "body": "Numeric terrain / CellTypeEnum handle.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "terraintype"
  },
  {
    "title": "sandkit.api.terrains.TerrainId",
    "body": "Mod or built-in terrain string id.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "terrainid"
  },
  {
    "title": "sandkit.api.terrains.TerrainRef",
    "body": "Type handle or string id accepted by mutation helpers.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "terrainref"
  },
  {
    "title": "sandkit.api.terrains.getIdByType()",
    "body": "Argument Type Description --- --- --- terrainType TerrainType Numeric terrain cell type. terrainType Return the mod string id for a numeric terrain type. string & object",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "getidbytype"
  },
  {
    "title": "sandkit.api.terrains.getTypeById()",
    "body": "Argument Type Description --- --- --- terrainId string & object Mod-registered or built-in terrain id. terrainId Resolve a terrain string id to a numeric cell type. TerrainType",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "gettypebyid"
  },
  {
    "title": "sandkit.api.terrains.getTypeFromId",
    "body": "Deprecated Use getTypeById instead. Argument Type Description --- --- --- terrainId string & object terrainId TerrainType",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "gettypefromid",
    "deprecated": true
  },
  {
    "title": "sandkit.api.terrains.getDefinitionByType()",
    "body": "Argument Type Description --- --- --- terrainType TerrainType Numeric terrain cell type. terrainType Look up the definition for a terrain type. TerrainDefinition & 124; undefined",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "getdefinitionbytype"
  },
  {
    "title": "sandkit.api.terrains.getTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the terrain cell type at a cell, or null when none. TerrainType & 124; null",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "gettypeatcell"
  },
  {
    "title": "sandkit.api.terrains.getDataAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return terrain cell type and hit points at a cell. TerrainDataAtCell & 124; null Cell type and hit points, or null when the cell is not terrain.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "getdataatcell"
  },
  {
    "title": "sandkit.api.terrains.isAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when any terrain occupies the cell.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "isatcell"
  },
  {
    "title": "sandkit.api.terrains.isTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, string &amp; object\\] args Return true when the cell terrain matches the given id.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "istypeatcell"
  },
  {
    "title": "sandkit.api.terrains.isCellIdTerrain()",
    "body": "Argument Type Description --- --- --- cellId CellId Packed cell id from world.getCellIdAtCell. cellId Return true when a packed cell id refers to terrain.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "iscellidterrain"
  },
  {
    "title": "sandkit.api.terrains.damageAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Apply damage to terrain at a cell.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "damageatcell"
  },
  {
    "title": "sandkit.api.terrains.meltAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Melt terrain at a cell (for example ice to water). Worker-entry writes are immediate.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "meltatcell"
  },
  {
    "title": "sandkit.api.terrains.createAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] args Place terrain at an empty cell. Worker-entry writes are immediate.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "createatcell"
  },
  {
    "title": "sandkit.api.terrains.replaceAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] args Replace existing terrain at a cell. Worker-entry writes are immediate.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "replaceatcell"
  },
  {
    "title": "sandkit.api.terrains.removeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainMutationOptions\\] args Remove terrain from a cell. Worker-entry writes are immediate.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "removeatcell"
  },
  {
    "title": "sandkit.api.terrains.setHitPointsAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Set terrain hit points at a cell. Worker-entry writes are immediate. True when hit points changed or the terrain was removed.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "sethitpointsatcell"
  },
  {
    "title": "sandkit.api.terrains.setHpAtCell",
    "body": "Deprecated Use setHitPointsAtCell instead. Argument Type Description --- --- --- args ...\\[number, number, number\\] args",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "sethpatcell",
    "deprecated": true
  },
  {
    "title": "sandkit.api.time",
    "body": "",
    "path": "/api/sandkit.api.time",
    "id": ""
  },
  {
    "title": "sandkit.api.time.getTimeMs()",
    "body": "Return elapsed game time in milliseconds.",
    "path": "/api/sandkit.api.time",
    "id": "gettimems"
  },
  {
    "title": "sandkit.api.time.getTick()",
    "body": "Return the current simulation tick number.",
    "path": "/api/sandkit.api.time",
    "id": "gettick"
  },
  {
    "title": "sandkit.api.tools.grabber",
    "body": "Grabber tool size and state. Available as sandkit.api.tools.grabber.",
    "path": "/api/sandkit.api.tools.grabber",
    "id": ""
  },
  {
    "title": "sandkit.api.tools.grabber.setSize()",
    "body": "Argument Type Description --- --- --- size number Grab radius in cells. size Set grabber radius size.",
    "path": "/api/sandkit.api.tools.grabber",
    "id": "setsize"
  },
  {
    "title": "sandkit.api.tools.grabber.getSize()",
    "body": "Return current grabber radius size. Grab radius in cells.",
    "path": "/api/sandkit.api.tools.grabber",
    "id": "getsize"
  },
  {
    "title": "sandkit.api.tools.grabber.isActive()",
    "body": "Return true when grabber tool is active. True when the grabber is the active tool.",
    "path": "/api/sandkit.api.tools.grabber",
    "id": "isactive"
  },
  {
    "title": "sandkit.api.tools.grabber.isLoaded()",
    "body": "Return true when grabber holds elements. True when the grabber buffer is not empty.",
    "path": "/api/sandkit.api.tools.grabber",
    "id": "isloaded"
  },
  {
    "title": "sandkit.api.tools",
    "body": "Inspect and control the grabber tool: size, active state, and load status. - sandkit.api.tools.grabber",
    "path": "/api/sandkit.api.tools",
    "id": ""
  },
  {
    "title": "sandkit.api.triggers",
    "body": "",
    "path": "/api/sandkit.api.triggers",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- interval number Interval between callbacks in simulation ticks. callback () =&gt; void Called each time the trigger fires. interval callback Main-thread trigger definition shape. Indexable",
    "path": "/api/sandkit.api.triggers",
    "id": "maintriggerdefinition"
  },
  {
    "title": "sandkit.api.triggers.register()",
    "body": "Argument Type Description --- --- --- triggerId string Unique trigger identifier. definition MainTriggerDefinition Interval in ticks and callback to invoke. triggerId definition Register a repeating trigger with interval and callback. Example",
    "path": "/api/sandkit.api.triggers",
    "id": "register"
  },
  {
    "title": "sandkit.api.ui.components",
    "body": "Built-in React UI components.",
    "path": "/api/sandkit.api.ui.components",
    "id": ""
  },
  {
    "title": "sandkit.api.ui.components.ActionSlot()",
    "body": "Argument Type Description --- --- --- props ActionSlotProps Bank source, slot index, and optional labels and handlers. props React hotbar action slot. Example",
    "path": "/api/sandkit.api.ui.components",
    "id": "actionslot"
  },
  {
    "title": "sandkit.api.ui.components.Panel()",
    "body": "Argument Type Description --- --- --- props PanelProps Title, children, and optional class and style. props React panel with an optional title. Example",
    "path": "/api/sandkit.api.ui.components",
    "id": "panel"
  },
  {
    "title": "sandkit.api.ui.components.Button()",
    "body": "Argument Type Description --- --- --- props ButtonProps Children, click handler, and optional style flags. props React button. Example",
    "path": "/api/sandkit.api.ui.components",
    "id": "button"
  },
  {
    "title": "sandkit.api.ui.hotbar",
    "body": "Hotbar bank sources, selection, and slot queries.",
    "path": "/api/sandkit.api.ui.hotbar",
    "id": ""
  },
  {
    "title": "sandkit.api.ui.hotbar.createBankSource()",
    "body": "Argument Type Description --- --- --- options HotbarBankSourceOptions Bank offset and optional minimum bank count. options Create a hotbar bank source for extra action banks. HotbarBankSource Source used by components.ActionSlot. Example",
    "path": "/api/sandkit.api.ui.hotbar",
    "id": "createbanksource"
  },
  {
    "title": "sandkit.api.ui.hotbar.selectAction()",
    "body": "Argument Type Description --- --- --- action AssetRef Action to select. action Select a hotbar action programmatically.",
    "path": "/api/sandkit.api.ui.hotbar",
    "id": "selectaction"
  },
  {
    "title": "sandkit.api.ui.hotbar.getBankCount()",
    "body": "Return the number of hotbar banks.",
    "path": "/api/sandkit.api.ui.hotbar",
    "id": "getbankcount"
  },
  {
    "title": "sandkit.api.ui.hotbar.getActiveBankIndex()",
    "body": "Return the active hotbar bank index.",
    "path": "/api/sandkit.api.ui.hotbar",
    "id": "getactivebankindex"
  },
  {
    "title": "sandkit.api.ui.hotbar.getActiveSlotIndex()",
    "body": "Return the active hotbar slot index.",
    "path": "/api/sandkit.api.ui.hotbar",
    "id": "getactiveslotindex"
  },
  {
    "title": "sandkit.api.ui.hotbar.getSlotKeyLabel()",
    "body": "Argument Type Description --- --- --- bindingId KeyBinding Key binding id for the slot. bindingId Return the key label for a hotbar slot binding.",
    "path": "/api/sandkit.api.ui.hotbar",
    "id": "getslotkeylabel"
  },
  {
    "title": "sandkit.api.ui.hotbar.useHotbar()",
    "body": "React hook for hotbar bank and slot state. HotbarState Current bank count and active bank and slot indexes. Example",
    "path": "/api/sandkit.api.ui.hotbar",
    "id": "usehotbar"
  },
  {
    "title": "sandkit.api.ui",
    "body": "",
    "path": "/api/sandkit.api.ui",
    "id": ""
  },
  {
    "title": "LocalizedText",
    "body": "Property Type Description --- --- --- label LocalizedText Display label for the choice. value T Value returned when the player picks this choice. label value One choice in select. T = string",
    "path": "/api/sandkit.api.ui",
    "id": "selectchoice"
  },
  {
    "title": "LocalizedText",
    "body": "Property Type Description --- --- --- message? LocalizedText Optional dialog body text. title? LocalizedText Optional dialog title. defaultValue? T Value selected when the dialog opens. buttonLabel? LocalizedText Confirm button label. message? title? defaultValue? buttonLabel? Dialog options for select. T = string",
    "path": "/api/sandkit.api.ui",
    "id": "selectdialogoptions"
  },
  {
    "title": "&quot;raised&quot; &#124; &quot;docked&quot;",
    "body": "Property Type Description --- --- --- placement? &quot;raised&quot; & 124; &quot;docked&quot; \"docked\" sits on the hotbar. \"raised\" sits above panels such as Filter Config. order? number Draw order within the region. render () =&gt; ReactNode Function that returns React content. placement? order? render Options for regions.mount.",
    "path": "/api/sandkit.api.ui",
    "id": "regionmountoptions"
  },
  {
    "title": "&quot;raised&quot; &#124; &quot;docked&quot;",
    "body": "Property Type Description --- --- --- placement? &quot;raised&quot; & 124; &quot;docked&quot; \"docked\" sits on the hotbar. \"raised\" sits above panels such as Filter Config. order? number Draw order within the region. render? () =&gt; ReactNode Function that returns React content. placement? order? render? Partial options for RegionMountHandle.",
    "path": "/api/sandkit.api.ui",
    "id": "regionmountupdateoptions"
  },
  {
    "title": "(options: RegionMountUpdateOptions): void",
    "body": "Method Signature Description --- --- --- update() (options: RegionMountUpdateOptions): void Update placement, order, or render for this mount. unmount() (): void Remove this mount from the region. update() unmount() Handle returned from regions.mount.",
    "path": "/api/sandkit.api.ui",
    "id": "regionmounthandle"
  },
  {
    "title": "(): void",
    "body": "Method Signature Description --- --- --- restore() (): void Show the region again. restore() Handle returned from regions.setVisible.",
    "path": "/api/sandkit.api.ui",
    "id": "visibilityhandle"
  },
  {
    "title": "(): void",
    "body": "Method Signature Description --- --- --- remove() (): void Drop this wrapper. remove() Handle returned from overrides.register.",
    "path": "/api/sandkit.api.ui",
    "id": "overridehandle"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- bankOffset number Bank index offset for this source. minimumBankCount? number Minimum number of banks to keep available. bankOffset minimumBankCount? Options for hotbar.createBankSource.",
    "path": "/api/sandkit.api.ui",
    "id": "hotbarbanksourceoptions"
  },
  {
    "title": "(): boolean",
    "body": "Method Signature Description --- --- --- isAvailable() (): boolean Return true when this bank source can show slots. getBankIndex() (): number Return the bank index for this source. getSlotCount() (): number Return the number of slots in this bank. getAction() (slotIndex: number): AssetRef Return the action in a slot. activateSlot() (slotIndex: number): void Activate a slot in this bank. clearSlot() (slotIndex: number): void Clear a slot in this bank. dispose() (): void Release this bank source. isAvailable() getBankIndex() getSlotCount() getAction() activateSlot() clearSlot() dispose() Hotbar bank source used by components.ActionSlot.",
    "path": "/api/sandkit.api.ui",
    "id": "hotbarbanksource"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- bankCount number Number of hotbar banks. activeBankIndex number Active bank index. activeSlotIndex number Active slot index. bankCount activeBankIndex activeSlotIndex State returned from hotbar.useHotbar.",
    "path": "/api/sandkit.api.ui",
    "id": "hotbarstate"
  },
  {
    "title": "HotbarBankSource",
    "body": "Property Type Description --- --- --- source HotbarBankSource Bank source from hotbar.createBankSource. slotIndex number Slot index in the bank. action? AssetRef Action shown in the slot. keyLabel? string Optional key label drawn on the slot. active? boolean When true, draw the slot as selected. onSelect? () =&gt; void Called when the player selects the slot. onClear? () =&gt; void Called when the player clears the slot. source slotIndex action? keyLabel? active? onSelect? onClear? Props for components.ActionSlot.",
    "path": "/api/sandkit.api.ui",
    "id": "actionslotprops"
  },
  {
    "title": "LocalizedText",
    "body": "Property Type Description --- --- --- title? LocalizedText Optional panel title. children? ReactNode Panel body. className? string Extra class names. style? CSSProperties Inline style. title? children? className? style? Props for components.Panel.",
    "path": "/api/sandkit.api.ui",
    "id": "panelprops"
  },
  {
    "title": "ReactNode",
    "body": "Property Type Description --- --- --- children? ReactNode Button label or content. active? boolean When true, draw the button as selected. border? boolean When false, hide the button border. disabled? boolean When true, ignore clicks. small? boolean When true, use the small button size. variant? &quot;danger&quot; & 124; &quot;primary&quot; Visual style. className? string Extra class names. style? CSSProperties Inline style. onClick? () =&gt; void Click handler. children? active? border? disabled? small? variant? className? style? onClick? Props for components.Button.",
    "path": "/api/sandkit.api.ui",
    "id": "buttonprops"
  },
  {
    "title": "&quot;message&quot;",
    "body": "Property Type Description --- --- --- type &quot;message&quot; Discriminator for tooltip renderer selection. text LocalizedText Message body as localized text. type text Message tooltip with localized body text.",
    "path": "/api/sandkit.api.ui",
    "id": "tooltipmessagedata"
  },
  {
    "title": "RefObject&lt;T&gt;",
    "body": "Property Type Description --- --- --- ref RefObject&lt;T&gt; Ref to attach to the focusable element. focused boolean True when the element has controller focus. focus () =&gt; void Move controller focus to this element. ref focused focus Focusable element state from useFocusable. T extends HTMLElement = HTMLDivElement",
    "path": "/api/sandkit.api.ui",
    "id": "focusable"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- id string Unique id within the focus scope. scope string Focus scope id this element belongs to. onActivate (element?: HTMLElement) =&gt; void Called when the element is activated (A button / Enter). onFocus? optional onFocus?: () =&gt; void Called when the element receives focus. disabled? optional disabled?: boolean When true, skip this element during navigation. x? optional x?: number Optional grid column for spatial navigation. y? optional y?: number Optional grid row for spatial navigation. neighbors? optional neighbors?: Partial&lt;Record&lt;&quot;left&quot; & 124; &quot;right&quot; & 124; &quot;up&quot; & 124; &quot;down&quot;, string&gt;&gt; Neighbor ids for directional navigation. scrollIntoView? optional scrollIntoView?: boolean When true, scroll the element into view on focus. id scope onActivate onFocus? disabled? x? y? neighbors? scrollIntoView? Options for useFocusable registration.",
    "path": "/api/sandkit.api.ui",
    "id": "focusoptions"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- id string Unique scope id. active boolean When true, this scope can receive focus. priority? optional priority?: number Higher values take focus before lower values. defaultId? optional defaultId?: string Default focusable id in this scope. onBack? optional onBack?: () =&gt; boolean & 124; void Called on back. Return true when the scope handled back. id active priority? defaultId? onBack? Options for navigation.useFocusScope.",
    "path": "/api/sandkit.api.ui",
    "id": "focusscopeoptions"
  },
  {
    "title": "sandkit.api.ui.OverlaySlot",
    "body": "Overlay slot name. Known vanilla slots autocomplete; any string is allowed.",
    "path": "/api/sandkit.api.ui",
    "id": "overlayslot"
  },
  {
    "title": "sandkit.api.ui.ComponentId",
    "body": "Registered UI component id. Built-in ComponentIdEnum values autocomplete; custom string ids are allowed.",
    "path": "/api/sandkit.api.ui",
    "id": "componentid"
  },
  {
    "title": "sandkit.api.ui.ComponentUpdateOptions",
    "body": "Component-specific update payload passed to update.",
    "path": "/api/sandkit.api.ui",
    "id": "componentupdateoptions"
  },
  {
    "title": "sandkit.api.ui.TooltipData",
    "body": "Tooltip payload shown near the cursor or UI target.",
    "path": "/api/sandkit.api.ui",
    "id": "tooltipdata"
  },
  {
    "title": "sandkit.api.ui.update()",
    "body": "Argument Type Description --- --- --- componentId ComponentId Built-in ComponentIdEnum value or custom string id. options? ComponentUpdateOptions Component-specific update payload. componentId options? Update a registered UI component by id.",
    "path": "/api/sandkit.api.ui",
    "id": "update"
  },
  {
    "title": "sandkit.api.ui.openPauseMenu()",
    "body": "Open the pause menu.",
    "path": "/api/sandkit.api.ui",
    "id": "openpausemenu"
  },
  {
    "title": "sandkit.api.ui.showTooltip()",
    "body": "Argument Type Description --- --- --- data TooltipMessageData Tooltip type and localized content. data Show a tooltip with the given data.",
    "path": "/api/sandkit.api.ui",
    "id": "showtooltip"
  },
  {
    "title": "sandkit.api.ui.alert()",
    "body": "Argument Type Description --- --- --- message LocalizedText Dialog body text. title? LocalizedText Optional dialog title. message title? Show an alert dialog. Promise&lt;void&gt; Promise that resolves when the user dismisses the dialog. Example",
    "path": "/api/sandkit.api.ui",
    "id": "alert"
  },
  {
    "title": "sandkit.api.ui.confirm()",
    "body": "Argument Type Description --- --- --- message LocalizedText Dialog body text. title? LocalizedText Optional dialog title. message title? Show a confirm dialog. Promise&lt;boolean&gt; Promise that resolves with true when confirmed, or false when cancelled. Example",
    "path": "/api/sandkit.api.ui",
    "id": "confirm"
  },
  {
    "title": "sandkit.api.ui.prompt()",
    "body": "Argument Type Description --- --- --- message LocalizedText Dialog body text. defaultValue? string Initial input value. placeholder? LocalizedText Placeholder text in the input field. title? LocalizedText Optional dialog title. allowCopy? boolean When true, allow copying the result from the dialog. message defaultValue? placeholder? title? allowCopy? Show a prompt dialog. Promise&lt;string & 124; null&gt; Promise that resolves with entered text, or null when cancelled. Example",
    "path": "/api/sandkit.api.ui",
    "id": "prompt"
  },
  {
    "title": "sandkit.api.ui.select",
    "body": "Argument Type Description --- --- --- options SelectChoice&lt;T&gt;[] Choices shown in the picker. opts? SelectDialogOptions&lt;T&gt; Dialog title, default, and confirm label. options opts? Show a modal choice picker. T = string Promise&lt;T & 124; null&gt; Promise that resolves with the chosen value, or null when cancelled. Example",
    "path": "/api/sandkit.api.ui",
    "id": "select"
  },
  {
    "title": "sandkit.api.ui.useRefresh()",
    "body": "Argument Type Description --- --- --- componentIds ComponentId[] Component ids to subscribe to. componentIds React hook that re-renders when the listed UI components update.",
    "path": "/api/sandkit.api.ui",
    "id": "userefresh"
  },
  {
    "title": "sandkit.api.ui.useScale()",
    "body": "React hook that returns the current UI scale. UI scale factor.",
    "path": "/api/sandkit.api.ui",
    "id": "usescale"
  },
  {
    "title": "sandkit.api.ui.useGameEvent",
    "body": "Argument Type Description --- --- --- eventId K Registered event name. handler (payload: EventPayload&lt;K&gt;) =&gt; void Called with the event payload. eventId handler React hook that subscribes to a game event. K extends EventId Example",
    "path": "/api/sandkit.api.ui",
    "id": "usegameevent"
  },
  {
    "title": "sandkit.api.ui.inject()",
    "body": "Argument Type Description --- --- --- componentId ComponentId Overlay slot or custom mount point id. component ComponentType React component to render. componentId component Mount a React component by id. Function that unmounts the injected component. () = void",
    "path": "/api/sandkit.api.ui",
    "id": "inject"
  },
  {
    "title": "sandkit.api.ui.navigation",
    "body": "Controller focus and scope navigation hooks.",
    "path": "/api/sandkit.api.ui.navigation",
    "id": ""
  },
  {
    "title": "sandkit.api.ui.navigation.useFocusable",
    "body": "Argument Type Description --- --- --- options FocusOptions Focus registration and neighbor wiring. options React hook for a focusable UI element in a scope. T extends HTMLElement = HTMLDivElement Focusable&lt;T&gt; Ref, focus state, and a focus helper. Example",
    "path": "/api/sandkit.api.ui.navigation",
    "id": "usefocusable"
  },
  {
    "title": "sandkit.api.ui.navigation.useFocusScope()",
    "body": "Argument Type Description --- --- --- options FocusScopeOptions Scope id, priority, default focus, and back handler. options React hook to register a focus scope with back handling. Example",
    "path": "/api/sandkit.api.ui.navigation",
    "id": "usefocusscope"
  },
  {
    "title": "sandkit.api.ui.navigation.getControllerFocusClass()",
    "body": "Argument Type Description --- --- --- focused boolean True when the element has controller focus. focused Return CSS class for controller focus ring state. Class name string for the focus ring.",
    "path": "/api/sandkit.api.ui.navigation",
    "id": "getcontrollerfocusclass"
  },
  {
    "title": "sandkit.api.ui.navigation.controllerFocusClass",
    "body": "Deprecated Use getControllerFocusClass instead. Argument Type Description --- --- --- focused boolean True when the element has controller focus. focused Return CSS class for controller focus ring state. Class name string for the focus ring.",
    "path": "/api/sandkit.api.ui.navigation",
    "id": "controllerfocusclass",
    "deprecated": true
  },
  {
    "title": "sandkit.api.ui.overlays",
    "body": "Overlay slot registration and updates. Use regions instead.",
    "path": "/api/sandkit.api.ui.overlays",
    "id": "",
    "deprecated": true
  },
  {
    "title": "sandkit.api.ui.overlays.register",
    "body": "Deprecated Use regions.mount instead. Argument Type Description --- --- --- slot OverlaySlot Slot name (for example \"hotbar\"). overlayId string Unique id for this overlay within the slot. render () =&gt; ReactNode Function that returns React content. slot overlayId render Register a render function in an overlay slot.",
    "path": "/api/sandkit.api.ui.overlays",
    "id": "register",
    "deprecated": true
  },
  {
    "title": "sandkit.api.ui.overlays.unregister",
    "body": "Deprecated Use RegionMountHandle instead. Argument Type Description --- --- --- slot OverlaySlot Slot name the overlay was registered in. overlayId string Overlay id passed to register. slot overlayId Remove an overlay from a slot.",
    "path": "/api/sandkit.api.ui.overlays",
    "id": "unregister",
    "deprecated": true
  },
  {
    "title": "sandkit.api.ui.overlays.update",
    "body": "Deprecated Use RegionMountHandle instead. Argument Type Description --- --- --- slot OverlaySlot Slot name to refresh. slot Request a re-render for all overlays in a slot.",
    "path": "/api/sandkit.api.ui.overlays",
    "id": "update",
    "deprecated": true
  },
  {
    "title": "sandkit.api.ui.overrides",
    "body": "Wrap a built-in UI component.",
    "path": "/api/sandkit.api.ui.overrides",
    "id": ""
  },
  {
    "title": "sandkit.api.ui.overrides.register()",
    "body": "Argument Type Description --- --- --- componentId ComponentId Built-in component id (for example \"resources\"). wrapper (Original: ComponentType&lt;Record&lt;string, unknown&gt;&gt;, props: Record&lt;string, unknown&gt;) =&gt; ReactNode Receives the original component and props; return replacement content. componentId wrapper Register a wrapper around a built-in UI component. OverrideHandle Handle whose OverrideHandle.remove drops the wrapper. Example",
    "path": "/api/sandkit.api.ui.overrides",
    "id": "register"
  },
  {
    "title": "sandkit.api.ui.regions",
    "body": "Mount React content in a named UI region.",
    "path": "/api/sandkit.api.ui.regions",
    "id": ""
  },
  {
    "title": "sandkit.api.ui.regions.mount()",
    "body": "Argument Type Description --- --- --- regionId OverlaySlot Region name (for example \"hotbar\"). mountId string Unique id for this mount within the region. options RegionMountOptions Placement, order, and render function. regionId mountId options Mount a React region in a UI slot. \"docked\" sits on the hotbar. \"raised\" sits above panels such as Filter Config. RegionMountHandle Handle used to update or unmount the region. Example",
    "path": "/api/sandkit.api.ui.regions",
    "id": "mount"
  },
  {
    "title": "sandkit.api.ui.regions.setVisible()",
    "body": "Argument Type Description --- --- --- regionId OverlaySlot Region name passed to mount. visible boolean When false, hide the region until restored. regionId visible Show or hide a mounted region. VisibilityHandle Handle whose VisibilityHandle.restore shows the region again.",
    "path": "/api/sandkit.api.ui.regions",
    "id": "setvisible"
  },
  {
    "title": "sandkit.api.ui (worker)",
    "body": "Internal Shared sandkit.api.ui base — lightweight UI helpers available on workers. Main thread adds richer UI APIs on top of this shape. Base namespace reused by main and worker declarations.",
    "path": "/api/sandkit.api.ui.worker",
    "id": ""
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- key string Namespaced translation key (for example ui& 124;save& 124;save). params? Record&lt;string, string & 124; number&gt; Values merged into the translated string. key params? Translation key with optional parameter substitution.",
    "path": "/api/sandkit.api.ui.worker",
    "id": "i18ntextkey"
  },
  {
    "title": "true",
    "body": "Property Type Description --- --- --- \\ \\ translatable true key string fallback string \\ \\ translatable key fallback Value returned by sandkit.api.i18n.translatable.",
    "path": "/api/sandkit.api.ui.worker",
    "id": "i18ntranslatable"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- cooldown? number Minimum ms before the same toast can show again. cooldownKey? string Dedupe key paired with ToastOptions.cooldown. Defaults to the message string or message.key. duration? number & 124; false Auto-dismiss delay in ms. Default 5000. Set false to keep the toast until another toast replaces it. variant? string &amp; object & 124; &quot;danger&quot; & 124; &quot;hint&quot; & 124; &quot;hole&quot; Visual style applied to the toast body. cooldown? cooldownKey? duration? variant? Cooldown, style, and auto-dismiss options for toast.",
    "path": "/api/sandkit.api.ui.worker",
    "id": "toastoptions"
  },
  {
    "title": "sandkit.api.ui.LocalizedText",
    "body": "Plain text, translation key object, or i18n translatable value.",
    "path": "/api/sandkit.api.ui.worker",
    "id": "localizedtext"
  },
  {
    "title": "sandkit.api.ui.toast()",
    "body": "Argument Type Description --- --- --- message LocalizedText Plain text, translation key, or translatable value. options? ToastOptions Cooldown, style, and auto-dismiss options. message options? Show a short on-screen toast message. Example Worker entry",
    "path": "/api/sandkit.api.ui.worker",
    "id": "toast"
  },
  {
    "title": "sandkit.api.upgrades",
    "body": "",
    "path": "/api/sandkit.api.upgrades",
    "id": ""
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- itemId string itemNameKey? string categoryId? string upgrade { id: string; nameKey: string; descriptionKey: string; maxLevel: number; costs: number[]; oneOff: boolean } itemId itemNameKey? categoryId? upgrade Upgrade definition registered for an item. Indexable",
    "path": "/api/sandkit.api.upgrades",
    "id": "upgradedefinition"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- id string Category identifier referenced by upgrades. nameKey? string Display name translation key. id nameKey? Upgrade category definition shape. Indexable",
    "path": "/api/sandkit.api.upgrades",
    "id": "upgradecategorydefinition"
  },
  {
    "title": "sandkit.api.upgrades.registerCategory()",
    "body": "Argument Type Description --- --- --- definition UpgradeCategoryDefinition Category id and display metadata. definition Register an upgrade category.",
    "path": "/api/sandkit.api.upgrades",
    "id": "registercategory"
  },
  {
    "title": "sandkit.api.upgrades.register()",
    "body": "Argument Type Description --- --- --- definition UpgradeDefinition Item id, upgrade id, costs, and level metadata. definition Register an upgrade definition.",
    "path": "/api/sandkit.api.upgrades",
    "id": "register"
  },
  {
    "title": "sandkit.api.upgrades.updateDefinition()",
    "body": "Argument Type Description --- --- --- itemId string Parent item id. upgradeId string Upgrade id within the item. partial Partial Fields to merge into the definition. itemId upgradeId partial Patch fields on an existing upgrade definition.",
    "path": "/api/sandkit.api.upgrades",
    "id": "updatedefinition"
  },
  {
    "title": "sandkit.api.upgrades.getLevelById()",
    "body": "Argument Type Description --- --- --- itemId string Parent item id. upgradeId string Upgrade id within the item. itemId upgradeId Return the current purchased level for an upgrade.",
    "path": "/api/sandkit.api.upgrades",
    "id": "getlevelbyid"
  },
  {
    "title": "sandkit.api.upgrades.getAvailableLevelById()",
    "body": "Argument Type Description --- --- --- itemId string Parent item id. upgradeId string Upgrade id within the item. itemId upgradeId Return the maximum available level for an upgrade.",
    "path": "/api/sandkit.api.upgrades",
    "id": "getavailablelevelbyid"
  },
  {
    "title": "sandkit.api.upgrades.setLevelById()",
    "body": "Argument Type Description --- --- --- itemId string Parent item id. upgradeId string Upgrade id within the item. level number Level to set. itemId upgradeId level Set the purchased level for an upgrade.",
    "path": "/api/sandkit.api.upgrades",
    "id": "setlevelbyid"
  },
  {
    "title": "sandkit.api.utils",
    "body": "",
    "path": "/api/sandkit.api.utils",
    "id": ""
  },
  {
    "title": "sandkit.api.utils.getDistance()",
    "body": "Argument Type Description --- --- --- pointA Vector2 First point. pointB Vector2 Second point. pointA pointB Return distance between two points.",
    "path": "/api/sandkit.api.utils",
    "id": "getdistance"
  },
  {
    "title": "sandkit.api.utils.getDirection()",
    "body": "Argument Type Description --- --- --- pointA Vector2 Origin point. pointB Vector2 Target point. pointA pointB Return normalized direction from point A to point B. Vector2",
    "path": "/api/sandkit.api.utils",
    "id": "getdirection"
  },
  {
    "title": "sandkit.api.utils.getAngle()",
    "body": "Argument Type Description --- --- --- pointA Vector2 Origin point. pointB Vector2 Target point. pointA pointB Return angle in radians from point A to point B.",
    "path": "/api/sandkit.api.utils",
    "id": "getangle"
  },
  {
    "title": "sandkit.api.utils.getCoordinatesBetweenCells()",
    "body": "Argument Type Description --- --- --- pointA Vector2 Line start in cell coordinates. pointB Vector2 Line end in cell coordinates. pointA pointB Return grid cells along a line between two points. Vector2[]",
    "path": "/api/sandkit.api.utils",
    "id": "getcoordinatesbetweencells"
  },
  {
    "title": "sandkit.api.utils.getCoordinatesBetweenPoints",
    "body": "Deprecated Use getCoordinatesBetweenCells instead. Argument Type Description --- --- --- pointA Vector2 pointB Vector2 pointA pointB Vector2[]",
    "path": "/api/sandkit.api.utils",
    "id": "getcoordinatesbetweenpoints",
    "deprecated": true
  },
  {
    "title": "sandkit.api (worker)",
    "body": "Worker-thread sandkit.api namespaces. Prefer these declarations in worker.js. Type sandkit.api as WorkerSandkitApi. Do not assume main-thread methods exist here. See sandkit.api for the main-thread public API.",
    "path": "/api/sandkit.api.worker",
    "id": ""
  },
  {
    "title": "WorkerSandkitApi",
    "body": "Defined in: worker/sandkit-api.d.ts:14 Composed worker-thread sandkit.api object. Namespace members are documented under worker. Use this type in worker.js / worker.ts: Main and worker surfaces overlap but are not interchangeable. Do not use sandkit.SandkitApi on worker threads. Properties constants Defined in: worker/sandkit-api.d.ts:15 collector Defined in: worker/sandkit-api.d.ts:16 effects Defined in: worker/sandkit-api.d.ts:17 elements Defined in: worker/sandkit-api.d.ts:18 events Defined in: worker/sandkit-api.d.ts:19 fire Defined in: worker/sandkit-api.d.ts:20 grid Defined in: worker/sandkit-api.d.ts:21 hooks Defined in: worker/sandkit-api.d.ts:22 lights Defined in: worker/sandkit-api.d.ts:23 main Defined in: worker/sandkit-api.d.ts:24 maps Defined in: worker/sandkit-api.d.ts:25 patterns Defined in: worker/sandkit-api.d.ts:26 player Defined in: worker/sandkit-api.d.ts:27 random Defined in: worker/sandkit-api.d.ts:28 shared Defined in: worker/sandkit-api.d.ts:29 structures Defined in: worker/sandkit-api.d.ts:30 terrains Defined in: worker/sandkit-api.d.ts:31 ui Defined in: worker/sandkit-api.d.ts:32 utils Defined in: worker/sandkit-api.d.ts:33 worker Defined in: worker/sandkit-api.d.ts:34 world Defined in: worker/sandkit-api.d.ts:39 Deprecated Use grid instead.",
    "path": "/api/sandkit.api.worker",
    "id": "workersandkitapi"
  },
  {
    "title": "sandkit.api.worker (worker)",
    "body": "Internal Worker thread only. sandkit.api.worker — identity of the current simulation worker. Base shape reused by WorkerSandkitApi. Not the same as main-thread APIs.",
    "path": "/api/sandkit.api.worker.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.worker.getIndex()",
    "body": "Return the zero-based index of this worker in the worker pool. Worker index (0 … getCount() - 1).",
    "path": "/api/sandkit.api.worker.worker",
    "id": "getindex"
  },
  {
    "title": "sandkit.api.worker.getCount()",
    "body": "Return the total number of simulation workers. Worker count for the active simulation.",
    "path": "/api/sandkit.api.worker.worker",
    "id": "getcount"
  },
  {
    "title": "sandkit.api.workers",
    "body": "",
    "path": "/api/sandkit.api.workers",
    "id": ""
  },
  {
    "title": "sandkit.api.workers.setPostUpdateEnabled()",
    "body": "Argument Type Description --- --- --- enabled boolean When true, workers run post-update hooks each tick. enabled Enable or disable worker post-update callbacks.",
    "path": "/api/sandkit.api.workers",
    "id": "setpostupdateenabled"
  },
  {
    "title": "sandkit.api.world",
    "body": "Use grid instead.",
    "path": "/api/sandkit.api.world",
    "id": "",
    "deprecated": true
  },
  {
    "title": "sandkit.api.world.runWhenSimulationIdle",
    "body": "Deprecated Use grid.mutate instead. Argument Type Description --- --- --- callback () =&gt; void callback",
    "path": "/api/sandkit.api.world",
    "id": "runwhensimulationidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.world.redrawAroundCellWhenIdle",
    "body": "Deprecated Use grid.redrawAroundCell instead. Argument Type Description --- --- --- args ...\\[number, number, number\\] args",
    "path": "/api/sandkit.api.world",
    "id": "redrawaroundcellwhenidle",
    "deprecated": true
  },
  {
    "title": "sandkit.api.world.pickups",
    "body": "Use pickups instead.",
    "path": "/api/sandkit.api.world.pickups",
    "id": "",
    "deprecated": true
  },
  {
    "title": "sandkit.api.world (worker)",
    "body": "Use grid instead.",
    "path": "/api/sandkit.api.world.worker",
    "id": "",
    "deprecated": true
  },
  {
    "title": "sandkit.engine.api.augments",
    "body": "Internal sandkit.engine.api.augments — player augment levels and unlocked perks. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.augments",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.augments.getDigLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current dig augment level.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "getdiglevel"
  },
  {
    "title": "sandkit.engine.api.augments.getGunLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current gun augment level.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "getgunlevel"
  },
  {
    "title": "sandkit.engine.api.augments.getPhaseLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current phase augment level.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "getphaselevel"
  },
  {
    "title": "sandkit.engine.api.augments.getRocketAmmoLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current rocket ammo augment level.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "getrocketammolevel"
  },
  {
    "title": "sandkit.engine.api.augments.getRocketReloadLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current rocket reload augment level.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "getrocketreloadlevel"
  },
  {
    "title": "sandkit.engine.api.augments.getSprintCapLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current sprint cap augment level.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "getsprintcaplevel"
  },
  {
    "title": "sandkit.engine.api.augments.hasBigDig()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the big-dig augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasbigdig"
  },
  {
    "title": "sandkit.engine.api.augments.hasBulletSpeed()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the bullet-speed augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasbulletspeed"
  },
  {
    "title": "sandkit.engine.api.augments.hasBulletTracer()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the bullet-tracer augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasbullettracer"
  },
  {
    "title": "sandkit.engine.api.augments.hasKickstartBoost()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the kickstart-boost augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "haskickstartboost"
  },
  {
    "title": "sandkit.engine.api.augments.hasPhaseDash()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the phase-dash augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasphasedash"
  },
  {
    "title": "sandkit.engine.api.augments.hasPhaseDashCharge()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the phase-dash-charge augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasphasedashcharge"
  },
  {
    "title": "sandkit.engine.api.augments.hasRideBoost()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the ride-boost augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasrideboost"
  },
  {
    "title": "sandkit.engine.api.augments.hasRocketDamage()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the rocket-damage augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasrocketdamage"
  },
  {
    "title": "sandkit.engine.api.augments.hasRocketWarhead()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the rocket-warhead augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasrocketwarhead"
  },
  {
    "title": "sandkit.engine.api.augments.hasSprintPower()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the sprint-power augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hassprintpower"
  },
  {
    "title": "sandkit.engine.api.augments.hasTripleShot()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the triple-shot augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hastripleshot"
  },
  {
    "title": "sandkit.engine.api.auralite",
    "body": "Internal sandkit.engine.api.auralite — auralite production tracking. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.auralite",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.auralite.ensureProducedAtLeast()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Ensure at least the given amount of auralite has been produced.",
    "path": "/api/sandkit.engine.api.auralite",
    "id": "ensureproducedatleast"
  },
  {
    "title": "sandkit.engine.api.auralite.getProduced()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return total auralite produced so far.",
    "path": "/api/sandkit.engine.api.auralite",
    "id": "getproduced"
  },
  {
    "title": "sandkit.engine.api.blueprints",
    "body": "Internal sandkit.engine.api.blueprints — blueprint save, load, and import/export. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.blueprints.delete()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Delete a saved blueprint. Runtime property name is delete.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "delete"
  },
  {
    "title": "sandkit.engine.api.blueprints.exportAllString()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Export all blueprints as one string.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "exportallstring"
  },
  {
    "title": "sandkit.engine.api.blueprints.exportString()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Export one blueprint as a string.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "exportstring"
  },
  {
    "title": "sandkit.engine.api.blueprints.getAll()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all saved blueprints.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "getall"
  },
  {
    "title": "sandkit.engine.api.blueprints.importString()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Import a blueprint from a string.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "importstring"
  },
  {
    "title": "sandkit.engine.api.blueprints.load()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Load a blueprint into the active session.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "load"
  },
  {
    "title": "sandkit.engine.api.blueprints.save()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Save the current selection as a blueprint.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "save"
  },
  {
    "title": "sandkit.engine.api.clipboard",
    "body": "Internal sandkit.engine.api.clipboard — build clipboard copy, paste, and history. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.clipboard.activate()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Activate the clipboard tool or mode.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "activate"
  },
  {
    "title": "sandkit.engine.api.clipboard.clear()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Clear the current clipboard contents.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "clear"
  },
  {
    "title": "sandkit.engine.api.clipboard.get()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current clipboard payload.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "get"
  },
  {
    "title": "sandkit.engine.api.clipboard.getHistory()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return clipboard history entries.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "gethistory"
  },
  {
    "title": "sandkit.engine.api.clipboard.getSignalLinks()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return signal links stored on the clipboard.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "getsignallinks"
  },
  {
    "title": "sandkit.engine.api.clipboard.selectFromHistory()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Restore a clipboard entry from history.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "selectfromhistory"
  },
  {
    "title": "sandkit.engine.api.clipboard.set()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Set the clipboard payload.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "set"
  },
  {
    "title": "sandkit.engine.api.colorPicker",
    "body": "Internal sandkit.engine.api.colorPicker — structure color palette UI helpers. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": ""
  },
  {
    "title": "const",
    "body": "Defined in: sandkit/engine/api/colorPicker.d.ts:12 Sentinel value for cycling through predefined colors.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": ""
  },
  {
    "title": "const",
    "body": "Defined in: sandkit/engine/api/colorPicker.d.ts:14 Sentinel value for no color selected.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": ""
  },
  {
    "title": "const",
    "body": "Defined in: sandkit/engine/api/colorPicker.d.ts:16 List of predefined palette colors.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": ""
  },
  {
    "title": "const",
    "body": "Defined in: sandkit/engine/api/colorPicker.d.ts:18 Sentinel value for a random palette color.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.colorPicker.closePalette()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Close the active color palette UI.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "closepalette"
  },
  {
    "title": "sandkit.engine.api.colorPicker.getActivePalette()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the active palette identifier.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "getactivepalette"
  },
  {
    "title": "sandkit.engine.api.colorPicker.getCycleColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the next color in the cycle.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "getcyclecolor"
  },
  {
    "title": "sandkit.engine.api.colorPicker.getRandomColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return a random predefined color.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "getrandomcolor"
  },
  {
    "title": "sandkit.engine.api.colorPicker.hexToRgba()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Convert a hex color string to RGBA components.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "hextorgba"
  },
  {
    "title": "sandkit.engine.api.colorPicker.renderColorButton()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Render a color-picker button in the UI.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "rendercolorbutton"
  },
  {
    "title": "sandkit.engine.api.colorPicker.renderColorSection()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Render a color section in the UI.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "rendercolorsection"
  },
  {
    "title": "sandkit.engine.api.colorPicker.renderPalette()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Render the full color palette UI.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "renderpalette"
  },
  {
    "title": "sandkit.engine.api.colorPicker.rgbaToHex()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Convert RGBA components to a hex color string.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "rgbatohex"
  },
  {
    "title": "sandkit.engine.api.colorPicker.setActivePalette()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Set the active palette identifier.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "setactivepalette"
  },
  {
    "title": "sandkit.engine.api.colorPicker.togglePalette()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Open or close the color palette UI.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "togglepalette"
  },
  {
    "title": "sandkit.engine.api.coloringTool",
    "body": "Internal sandkit.engine.api.coloringTool — paint-bucket and flood-fill structure coloring. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.coloringTool.colorStructure()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Apply a color to one structure.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "colorstructure"
  },
  {
    "title": "sandkit.engine.api.coloringTool.floodFillColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Flood-fill connected structures with a color.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "floodfillcolor"
  },
  {
    "title": "sandkit.engine.api.coloringTool.getColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the color on a structure.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "getcolor"
  },
  {
    "title": "sandkit.engine.api.coloringTool.isColorableStructure()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether a structure can be colored.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "iscolorablestructure"
  },
  {
    "title": "sandkit.engine.api.coloringTool.isMatchColorMode()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether match-color mode is active.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "ismatchcolormode"
  },
  {
    "title": "sandkit.engine.api.coloringTool.isPaintBucketMode()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether paint-bucket mode is active.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "ispaintbucketmode"
  },
  {
    "title": "sandkit.engine.api.coloringTool.setColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Set the color on a structure.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "setcolor"
  },
  {
    "title": "sandkit.engine.api.coloringTool.toggleMatchColorMode()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Toggle match-color mode on or off.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "togglematchcolormode"
  },
  {
    "title": "sandkit.engine.api.coloringTool.togglePaintBucketMode()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Toggle paint-bucket mode on or off.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "togglepaintbucketmode"
  },
  {
    "title": "sandkit.engine.api.conveyors",
    "body": "Internal sandkit.engine.api.conveyors — conveyor type registration. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.conveyors",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.conveyors.registerType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a custom conveyor type.",
    "path": "/api/sandkit.engine.api.conveyors",
    "id": "registertype"
  },
  {
    "title": "sandkit.engine.api.debug",
    "body": "Internal sandkit.engine.api.debug — debug overlay registration. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.debug",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.debug.register()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a debug overlay or helper.",
    "path": "/api/sandkit.engine.api.debug",
    "id": "register"
  },
  {
    "title": "sandkit.engine.api.drones",
    "body": "Internal sandkit.engine.api.drones — drone spawn and removal. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.drones",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.drones.kill()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Remove one or more drones.",
    "path": "/api/sandkit.engine.api.drones",
    "id": "kill"
  },
  {
    "title": "sandkit.engine.api.drones.spawn()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Spawn a drone instance.",
    "path": "/api/sandkit.engine.api.drones",
    "id": "spawn"
  },
  {
    "title": "sandkit.engine.api.entities",
    "body": "Internal sandkit.engine.api.entities — entity type registration, spawn, and queries. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.entities",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.entities.createLight()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Create a light entity attached to a parent.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "createlight"
  },
  {
    "title": "sandkit.engine.api.entities.getAll()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all live entities.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "getall"
  },
  {
    "title": "sandkit.engine.api.entities.getAllByType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all entities of one type.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "getallbytype"
  },
  {
    "title": "sandkit.engine.api.entities.getAllTypeDefs()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all registered entity type definitions.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "getalltypedefs"
  },
  {
    "title": "sandkit.engine.api.entities.getSprite()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the sprite for an entity.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "getsprite"
  },
  {
    "title": "sandkit.engine.api.entities.getTypeDef()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return one entity type definition by id.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "gettypedef"
  },
  {
    "title": "sandkit.engine.api.entities.launch()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Launch an entity with velocity or trajectory.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "launch"
  },
  {
    "title": "sandkit.engine.api.entities.registerSpawner()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register an entity spawner behavior.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "registerspawner"
  },
  {
    "title": "sandkit.engine.api.entities.registerType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a custom entity type.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "registertype"
  },
  {
    "title": "sandkit.engine.api.entities.spawn()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Spawn an entity instance.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "spawn"
  },
  {
    "title": "sandkit.engine.api.entities.startCapture()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Start capturing entities for a tool or effect.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "startcapture"
  },
  {
    "title": "sandkit.engine.api.extensions",
    "body": "Internal sandkit.engine.api.extensions — structure extension definitions. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.extensions",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.extensions.define()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Define a structure extension type.",
    "path": "/api/sandkit.engine.api.extensions",
    "id": "define"
  },
  {
    "title": "sandkit.engine.api.factory",
    "body": "Internal sandkit.engine.api.factory — factory tier progression and process tracking. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.factory",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.factory.addViabilityGold()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Add viability gold toward the next factory tier.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "addviabilitygold"
  },
  {
    "title": "sandkit.engine.api.factory.canUnlockNextTier()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the next factory tier can be unlocked.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "canunlocknexttier"
  },
  {
    "title": "sandkit.engine.api.factory.ensureProcessAtLeast()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Ensure at least the given process count has been recorded.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "ensureprocessatleast"
  },
  {
    "title": "sandkit.engine.api.factory.flushDeferredLevelUps()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Apply deferred factory level-ups.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "flushdeferredlevelups"
  },
  {
    "title": "sandkit.engine.api.factory.getLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current factory level.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "getlevel"
  },
  {
    "title": "sandkit.engine.api.factory.getProcessCount()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return total recorded process count.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "getprocesscount"
  },
  {
    "title": "sandkit.engine.api.factory.getProcessRate()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current process rate.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "getprocessrate"
  },
  {
    "title": "sandkit.engine.api.factory.recordProcess()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Record one factory process event.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "recordprocess"
  },
  {
    "title": "sandkit.engine.api.factory.unlockNextTier()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Unlock the next factory tier.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "unlocknexttier"
  },
  {
    "title": "sandkit.engine.api.foliage",
    "body": "Internal sandkit.engine.api.foliage — procedural foliage generation and clusters. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.foliage",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.foliage.generate()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Generate foliage for a region or world chunk.",
    "path": "/api/sandkit.engine.api.foliage",
    "id": "generate"
  },
  {
    "title": "sandkit.engine.api.foliage.getClusters()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return foliage cluster data.",
    "path": "/api/sandkit.engine.api.foliage",
    "id": "getclusters"
  },
  {
    "title": "sandkit.engine.api.foliage.getContainer()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the foliage render container.",
    "path": "/api/sandkit.engine.api.foliage",
    "id": "getcontainer"
  },
  {
    "title": "sandkit.engine.api.foliage.hasProcgenData()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether procgen foliage data exists for a location.",
    "path": "/api/sandkit.engine.api.foliage",
    "id": "hasprocgendata"
  },
  {
    "title": "sandkit.engine.api.foundationColorPicker",
    "body": "Internal sandkit.engine.api.foundationColorPicker — foundation tile color lookup. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.foundationColorPicker",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.foundationColorPicker.getColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the color on a foundation tile.",
    "path": "/api/sandkit.engine.api.foundationColorPicker",
    "id": "getcolor"
  },
  {
    "title": "sandkit.engine.api.game",
    "body": "Internal sandkit.engine.api.game — game session start, save, and load. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.game",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.game.load()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Load a saved game into the session.",
    "path": "/api/sandkit.engine.api.game",
    "id": "load"
  },
  {
    "title": "sandkit.engine.api.game.save()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Save the current session.",
    "path": "/api/sandkit.engine.api.game",
    "id": "save"
  },
  {
    "title": "sandkit.engine.api.game.start()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Start a new game session.",
    "path": "/api/sandkit.engine.api.game",
    "id": "start"
  },
  {
    "title": "sandkit.engine.api.heatTransfer",
    "body": "Internal sandkit.engine.api.heatTransfer — temperature diffusion and absorption. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.heatTransfer.absorbAdjacentElements()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Absorb heat from adjacent elements into a cell.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "absorbadjacentelements"
  },
  {
    "title": "sandkit.engine.api.heatTransfer.addTemperature()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Add temperature to a cell or region.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "addtemperature"
  },
  {
    "title": "sandkit.engine.api.heatTransfer.computeDiffusedTemperatures()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Compute diffused temperatures for connected cells.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "computediffusedtemperatures"
  },
  {
    "title": "sandkit.engine.api.heatTransfer.computeEqualizedTemperature()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Compute one equalized temperature across connected cells.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "computeequalizedtemperature"
  },
  {
    "title": "sandkit.engine.api.heatTransfer.consumeTemperatureNear()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Consume temperature near a point or cell.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "consumetemperaturenear"
  },
  {
    "title": "sandkit.engine.api.heatTransfer.ensureTemperature()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Ensure a cell has at least the given temperature.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "ensuretemperature"
  },
  {
    "title": "sandkit.engine.api.heatTransfer.equalizeConnected()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Equalize temperature across a connected component.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "equalizeconnected"
  },
  {
    "title": "sandkit.engine.api.launchers",
    "body": "Internal sandkit.engine.api.launchers — launcher type registration. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.launchers",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.launchers.registerType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a custom launcher type.",
    "path": "/api/sandkit.engine.api.launchers",
    "id": "registertype"
  },
  {
    "title": "sandkit.engine.api.lightColorPicker",
    "body": "Internal sandkit.engine.api.lightColorPicker — light color lookup. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.lightColorPicker",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.lightColorPicker.getColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the color on a light structure.",
    "path": "/api/sandkit.engine.api.lightColorPicker",
    "id": "getcolor"
  },
  {
    "title": "sandkit.engine.api.matters",
    "body": "Internal sandkit.engine.api.matters — matter type registration and solid updates. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.matters",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.matters.getMatterTypeFromId()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Resolve a matter type from an id string.",
    "path": "/api/sandkit.engine.api.matters",
    "id": "getmattertypefromid"
  },
  {
    "title": "sandkit.engine.api.matters.register()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a custom matter type.",
    "path": "/api/sandkit.engine.api.matters",
    "id": "register"
  },
  {
    "title": "sandkit.engine.api.matters.runSolidUpdate()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Run one solid-matter update step.",
    "path": "/api/sandkit.engine.api.matters",
    "id": "runsolidupdate"
  },
  {
    "title": "sandkit.engine.api.misc",
    "body": "Internal sandkit.engine.api.misc — miscellaneous structure behavior registration. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.misc",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.misc.register()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a miscellaneous structure behavior.",
    "path": "/api/sandkit.engine.api.misc",
    "id": "register"
  },
  {
    "title": "sandkit.engine.api.portals",
    "body": "Internal sandkit.engine.api.portals — portal marker queries. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.portals",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.portals.getMarkers()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return portal markers in the world.",
    "path": "/api/sandkit.engine.api.portals",
    "id": "getmarkers"
  },
  {
    "title": "sandkit.engine.api.prefabData",
    "body": "Internal sandkit.engine.api.prefabData — prefab artifact and metadata lookup. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.prefabData",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.prefabData.getAll()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all prefab data entries.",
    "path": "/api/sandkit.engine.api.prefabData",
    "id": "getall"
  },
  {
    "title": "sandkit.engine.api.prefabData.getAllMetadata()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return metadata for all prefabs.",
    "path": "/api/sandkit.engine.api.prefabData",
    "id": "getallmetadata"
  },
  {
    "title": "sandkit.engine.api.prefabData.getArtifactLocations()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return artifact locations for prefabs.",
    "path": "/api/sandkit.engine.api.prefabData",
    "id": "getartifactlocations"
  },
  {
    "title": "sandkit.engine.api.prefabData.getAtCell()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return prefab data at one grid cell.",
    "path": "/api/sandkit.engine.api.prefabData",
    "id": "getatcell"
  },
  {
    "title": "sandkit.engine.api.prefabData.getMetadata()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return metadata for one prefab.",
    "path": "/api/sandkit.engine.api.prefabData",
    "id": "getmetadata"
  },
  {
    "title": "sandkit.engine.api.prefabDecor",
    "body": "Internal sandkit.engine.api.prefabDecor — prefab decorative placement. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.prefabDecor",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.prefabDecor.getPlacementByName()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return a decor placement definition by name.",
    "path": "/api/sandkit.engine.api.prefabDecor",
    "id": "getplacementbyname"
  },
  {
    "title": "sandkit.engine.api.prefabDecor.replaceDecor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Replace decor instances in a region or prefab.",
    "path": "/api/sandkit.engine.api.prefabDecor",
    "id": "replacedecor"
  },
  {
    "title": "sandkit.engine.api.prefabulator",
    "body": "Internal sandkit.engine.api.prefabulator — blueprint structure serialization for prefabs. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.prefabulator",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.prefabulator.localizeBlueprintStructures()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Convert serialized blueprint structures to world-local coordinates.",
    "path": "/api/sandkit.engine.api.prefabulator",
    "id": "localizeblueprintstructures"
  },
  {
    "title": "sandkit.engine.api.prefabulator.serializeBlueprintStructures()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Serialize blueprint structures for prefab storage.",
    "path": "/api/sandkit.engine.api.prefabulator",
    "id": "serializeblueprintstructures"
  },
  {
    "title": "sandkit.engine.api.prismaline",
    "body": "Internal sandkit.engine.api.prismaline — prismaline resource consume and availability. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.prismaline",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.prismaline.consume()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Consume prismaline from the player or world.",
    "path": "/api/sandkit.engine.api.prismaline",
    "id": "consume"
  },
  {
    "title": "sandkit.engine.api.prismaline.getAvailable()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return available prismaline amount.",
    "path": "/api/sandkit.engine.api.prismaline",
    "id": "getavailable"
  },
  {
    "title": "sandkit.engine.api.prismaline.getConsumed()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return total prismaline consumed so far.",
    "path": "/api/sandkit.engine.api.prismaline",
    "id": "getconsumed"
  },
  {
    "title": "sandkit.engine.api.prismite",
    "body": "Internal sandkit.engine.api.prismite — prismite resource consume and availability. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.prismite",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.prismite.consume()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Consume prismite from the player or world.",
    "path": "/api/sandkit.engine.api.prismite",
    "id": "consume"
  },
  {
    "title": "sandkit.engine.api.prismite.getAvailable()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return available prismite amount.",
    "path": "/api/sandkit.engine.api.prismite",
    "id": "getavailable"
  },
  {
    "title": "sandkit.engine.api.prismite.getConsumed()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return total prismite consumed so far.",
    "path": "/api/sandkit.engine.api.prismite",
    "id": "getconsumed"
  },
  {
    "title": "sandkit.engine.api.queue",
    "body": "Internal sandkit.engine.api.queue — deferred tick queue with handlers. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.queue",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.queue.enqueue()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Enqueue work to run on a future tick.",
    "path": "/api/sandkit.engine.api.queue",
    "id": "enqueue"
  },
  {
    "title": "sandkit.engine.api.queue.enqueueInTicks()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Enqueue work to run after a tick delay.",
    "path": "/api/sandkit.engine.api.queue",
    "id": "enqueueinticks"
  },
  {
    "title": "sandkit.engine.api.queue.enqueueSkipTick()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Enqueue work that skips the current tick.",
    "path": "/api/sandkit.engine.api.queue",
    "id": "enqueueskiptick"
  },
  {
    "title": "sandkit.engine.api.queue.process()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Process pending queue items for the current tick.",
    "path": "/api/sandkit.engine.api.queue",
    "id": "process"
  },
  {
    "title": "sandkit.engine.api.queue.registerHandler()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a handler for a queue item type.",
    "path": "/api/sandkit.engine.api.queue",
    "id": "registerhandler"
  },
  {
    "title": "sandkit.engine.api.queue.removeByKey()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Remove queued items by key.",
    "path": "/api/sandkit.engine.api.queue",
    "id": "removebykey"
  },
  {
    "title": "sandkit.engine.api.shadows",
    "body": "Internal sandkit.engine.api.shadows — shadow map refresh for regions. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.shadows",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.shadows.refresh()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Refresh shadows for the whole visible area.",
    "path": "/api/sandkit.engine.api.shadows",
    "id": "refresh"
  },
  {
    "title": "sandkit.engine.api.shadows.refreshRadius()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Refresh shadows within a circular radius.",
    "path": "/api/sandkit.engine.api.shadows",
    "id": "refreshradius"
  },
  {
    "title": "sandkit.engine.api.shadows.refreshRect()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Refresh shadows within a rectangle.",
    "path": "/api/sandkit.engine.api.shadows",
    "id": "refreshrect"
  },
  {
    "title": "sandkit.engine.api.strataform",
    "body": "Internal sandkit.engine.api.strataform — strataform event triggers and type registration. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.strataform",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.strataform.getDefaultConfig()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the default strataform configuration.",
    "path": "/api/sandkit.engine.api.strataform",
    "id": "getdefaultconfig"
  },
  {
    "title": "sandkit.engine.api.strataform.getRegisteredTypes()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all registered strataform types.",
    "path": "/api/sandkit.engine.api.strataform",
    "id": "getregisteredtypes"
  },
  {
    "title": "sandkit.engine.api.strataform.registerType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a custom strataform type.",
    "path": "/api/sandkit.engine.api.strataform",
    "id": "registertype"
  },
  {
    "title": "sandkit.engine.api.strataform.trigger()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Trigger a strataform event at a location.",
    "path": "/api/sandkit.engine.api.strataform",
    "id": "trigger"
  },
  {
    "title": "sandkit.engine.api.strataform.triggerByType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Trigger a strataform event by type id.",
    "path": "/api/sandkit.engine.api.strataform",
    "id": "triggerbytype"
  },
  {
    "title": "sandkit.engine.api.swarmConsole",
    "body": "Internal sandkit.engine.api.swarmConsole — swarm convergence console state. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.swarmConsole.decrementConvergenceBuffer()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Decrease the convergence buffer by one step.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "decrementconvergencebuffer"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getCrystalMined()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return total crystal mined for swarm consoles.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getcrystalmined"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getDiskRadiusCells()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the disk radius in cells for a console.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getdiskradiuscells"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getEntityType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the entity type used by swarm consoles.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getentitytype"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getNearestConvergence()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the nearest convergence point.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getnearestconvergence"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getPendingConvergence()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the pending convergence target.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getpendingconvergence"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getPlacedConsoles()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all placed swarm console structures.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getplacedconsoles"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getRadiusPx()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the console effect radius in pixels.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getradiuspx"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.isSpawnJammed()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether swarm spawn is currently jammed.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "isspawnjammed"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.registerEntityType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register the entity type for swarm consoles.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "registerentitytype"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.resetAllConvergenceBuffers()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Reset convergence buffers on all consoles.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "resetallconvergencebuffers"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.setSpawnJammed()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Set whether swarm spawn is jammed.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "setspawnjammed"
  },
  {
    "title": "sandkit.engine.api.sweeperDrone",
    "body": "Internal sandkit.engine.api.sweeperDrone — sweeper drone selection control. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.sweeperDrone",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.sweeperDrone.cancelSelection()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Cancel the active sweeper drone selection.",
    "path": "/api/sandkit.engine.api.sweeperDrone",
    "id": "cancelselection"
  },
  {
    "title": "sandkit.engine.api.teleportZones",
    "body": "Internal sandkit.engine.api.teleportZones — player teleport zone management. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.teleportZones.add()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Add a teleport zone to the world.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "add"
  },
  {
    "title": "sandkit.engine.api.teleportZones.getAll()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all teleport zones.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "getall"
  },
  {
    "title": "sandkit.engine.api.teleportZones.getAtCell()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the teleport zone at one grid cell.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "getatcell"
  },
  {
    "title": "sandkit.engine.api.teleportZones.getById()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return one teleport zone by id.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "getbyid"
  },
  {
    "title": "sandkit.engine.api.teleportZones.remove()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Remove a teleport zone.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "remove"
  },
  {
    "title": "sandkit.engine.api.teleportZones.spawnDefaultParticles()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Spawn default particles at a teleport zone.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "spawndefaultparticles"
  },
  {
    "title": "sandkit.engine.api.teleportZones.teleportPlayerTo()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Teleport the player to a zone or position.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "teleportplayerto"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild",
    "body": "Internal sandkit.engine.api.tutorialBuild — tutorial build-step constraints and targets. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.areAllTargetsBuilt()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether all active tutorial targets are built.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "arealltargetsbuilt"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.areFamilyTargetsBuilt()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether all targets in a structure family are built.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "arefamilytargetsbuilt"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.canPlaceAtActiveTarget()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether placement is allowed at the active target.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "canplaceatactivetarget"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.getFoundationMoveDests()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return foundation move destination cells for the tutorial step.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "getfoundationmovedests"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.getFoundationMoveSources()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return foundation move source cells for the tutorial step.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "getfoundationmovesources"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.getTargets()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return build targets for the current tutorial step.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "gettargets"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.hasDefinition()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether a tutorial build definition exists.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "hasdefinition"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.isStepConstrained()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the current step restricts building.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "isstepconstrained"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.matchesFoundationMove()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether a foundation move matches tutorial rules.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "matchesfoundationmove"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.matchesFoundationRemove()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether a foundation remove matches tutorial rules.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "matchesfoundationremove"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.shouldProtectActiveTargetAt()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the active target should be protected at a cell.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "shouldprotectactivetargetat"
  },
  {
    "title": "sandkit.engine.api.usageTracker",
    "body": "Internal sandkit.engine.api.usageTracker — tool and structure usage statistics. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.usageTracker",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.usageTracker.clear()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Clear recorded usage statistics.",
    "path": "/api/sandkit.engine.api.usageTracker",
    "id": "clear"
  },
  {
    "title": "sandkit.engine.api.usageTracker.getLatest()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the most recently used item or structure.",
    "path": "/api/sandkit.engine.api.usageTracker",
    "id": "getlatest"
  },
  {
    "title": "sandkit.engine.api.usageTracker.getMostUsed()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the most frequently used item or structure.",
    "path": "/api/sandkit.engine.api.usageTracker",
    "id": "getmostused"
  },
  {
    "title": "sandkit.engine.api.wall",
    "body": "Internal sandkit.engine.api.wall — wall tile palette and cell data. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.wall",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.wall.getPaletteData()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return wall palette data for rendering.",
    "path": "/api/sandkit.engine.api.wall",
    "id": "getpalettedata"
  },
  {
    "title": "sandkit.engine.api.wall.getWallDataAt()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return wall tile data at one cell.",
    "path": "/api/sandkit.engine.api.wall",
    "id": "getwalldataat"
  },
  {
    "title": "sandkit.engine.api.wall.getWallDataSize()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the byte size of wall tile data.",
    "path": "/api/sandkit.engine.api.wall",
    "id": "getwalldatasize"
  },
  {
    "title": "sandkit.engine.api.wall.setWallDataAt()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Set wall tile data at one cell.",
    "path": "/api/sandkit.engine.api.wall",
    "id": "setwalldataat"
  },
  {
    "title": "sandkit.engine.api.workerLocal",
    "body": "Internal sandkit.engine.api.workerLocal — per-worker ephemeral key-value storage. Internal API. Prefer sandkit.api when a public method exists. Available on worker threads only. Values do not persist across workers.",
    "path": "/api/sandkit.engine.api.workerLocal",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.workerLocal.clear()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Worker-local context first on workers; otherwise game state first, then method-specific arguments. args Remove all keys from worker-local storage.",
    "path": "/api/sandkit.engine.api.workerLocal",
    "id": "clear"
  },
  {
    "title": "sandkit.engine.api.workerLocal.get()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Worker-local context first on workers; otherwise game state first, then method-specific arguments. args Return a value by key, or undefined when missing.",
    "path": "/api/sandkit.engine.api.workerLocal",
    "id": "get"
  },
  {
    "title": "sandkit.engine.api.workerLocal.getOrInit()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Worker-local context first on workers; otherwise game state first, then method-specific arguments. args Return a value by key, initializing it when missing.",
    "path": "/api/sandkit.engine.api.workerLocal",
    "id": "getorinit"
  },
  {
    "title": "sandkit.engine.api.workerLocal.set()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Worker-local context first on workers; otherwise game state first, then method-specific arguments. args Store a value by key.",
    "path": "/api/sandkit.engine.api.workerLocal",
    "id": "set"
  },
  {
    "title": "sandkit.engine",
    "body": "Internal sandkit.engine — state-first engine APIs and Retro Console. Runtime paths: sandkit.engine.api. and sandkit.engine.state (same object as sandkit.state). Available on both the main thread (main.js) and worker thread (worker.js). The public sandkit.api surface still differs by runtime. Internal API. Prefer sandkit.api when a public method exists. These declarations are best-effort stubs. There is no guarantee they are complete or correct.",
    "path": "/api/sandkit.engine",
    "id": ""
  },
  {
    "title": "sandkit.engine",
    "body": "Defined in: sandkit/engine/index.d.ts:132 Internal Host sandkit.engine object (main and worker). Internal API. Prefer sandkit.api when a public method exists. At runtime sandkit.engine.state === sandkit.state. Properties api Defined in: sandkit/engine/index.d.ts:133 state Defined in: sandkit/engine/index.d.ts:134",
    "path": "/api/sandkit.engine",
    "id": "sandkitengine"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- width number height number width height Method Signature Description --- --- --- clearScreen() (value?: RetroConsolePixel): void Clear the framebuffer. Optional fill value defaults to off. drawPixel() (x: number, y: number, value: RetroConsolePixel): void Set one pixel in the framebuffer. clearScreen() drawPixel() Internal Low-resolution display buffer for a Retro Console game.",
    "path": "/api/sandkit.engine",
    "id": "retroconsoledisplay"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- x number y number x y Internal Directional input from the Retro Console controls.",
    "path": "/api/sandkit.engine",
    "id": "retroconsoleinput"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- width number height number width height Internal Display size options for a registered Retro Console game.",
    "path": "/api/sandkit.engine",
    "id": "retroconsolegameoptions"
  },
  {
    "title": "string",
    "body": "Property Type Description --- --- --- id string name string options? RetroConsoleGameOptions id name options? Method Signature Description --- --- --- init() (display: RetroConsoleDisplay): TState Create initial game state and draw the first frame. update() (display: RetroConsoleDisplay, state: TState): TState Advance one frame and return updated game state. handleInput()? (display: RetroConsoleDisplay, state: TState, input: RetroConsoleInput): TState Handle player input when provided. init() update() handleInput()? Internal Retro Console game definition passed to RetroConsoleApi.registerGame. TState = unknown",
    "path": "/api/sandkit.engine",
    "id": "retroconsolegame"
  },
  {
    "title": "&lt;TState&gt;(game: RetroConsoleGame&lt;TState&gt;): void",
    "body": "Method Signature Description --- --- --- registerGame() &lt;TState&gt;(game: RetroConsoleGame&lt;TState&gt;): void Register a Retro Console mini-game. registerGame() Internal sandkit.engine.api.retroConsole registration API.",
    "path": "/api/sandkit.engine",
    "id": "retroconsoleapi"
  },
  {
    "title": "SandkitEngineApi",
    "body": "Defined in: sandkit/engine/index.d.ts:32 Internal Composed sandkit.engine.api shape. Overlap namespaces mirror sandkit.api with state-first signatures. Engine-only namespaces are declared under api/. Properties action Defined in: sandkit/engine/index.d.ts:34 authorization Defined in: sandkit/engine/index.d.ts:35 building Defined in: sandkit/engine/index.d.ts:36 camera Defined in: sandkit/engine/index.d.ts:37 collector Defined in: sandkit/engine/index.d.ts:38 constants Defined in: sandkit/engine/index.d.ts:39 cooldown Defined in: sandkit/engine/index.d.ts:40 discoveries Defined in: sandkit/engine/index.d.ts:41 effects Defined in: sandkit/engine/index.d.ts:42 elements Defined in: sandkit/engine/index.d.ts:43 energy Defined in: sandkit/engine/index.d.ts:44 events Defined in: sandkit/engine/index.d.ts:45 excavation Defined in: sandkit/engine/index.d.ts:46 fire Defined in: sandkit/engine/index.d.ts:47 grid Defined in: sandkit/engine/index.d.ts:48 hooks Defined in: sandkit/engine/index.d.ts:49 i18n Defined in: sandkit/engine/index.d.ts:50 input Defined in: sandkit/engine/index.d.ts:51 items Defined in: sandkit/engine/index.d.ts:52 lights Defined in: sandkit/engine/index.d.ts:53 maps Defined in: sandkit/engine/index.d.ts:54 patterns Defined in: sandkit/engine/index.d.ts:55 player Defined in: sandkit/engine/index.d.ts:56 processing Defined in: sandkit/engine/index.d.ts:57 progression Defined in: sandkit/engine/index.d.ts:58 projectiles Defined in: sandkit/engine/index.d.ts:59 random Defined in: sandkit/engine/index.d.ts:60 raycast Defined in: sandkit/engine/index.d.ts:61 reactions Defined in: sandkit/engine/index.d.ts:62 rendering Defined in: sandkit/engine/index.d.ts:63 resources Defined in: sandkit/engine/index.d.ts:64 scene Defined in: sandkit/engine/index.d.ts:65 schedule Defined in: sandkit/engine/index.d.ts:66 signals Defined in: sandkit/engine/index.d.ts:67 sound Defined in: sandkit/engine/index.d.ts:68 sprites Defined in: sandkit/engine/index.d.ts:69 storage Defined in: sandkit/engine/index.d.ts:70 structures Defined in: sandkit/engine/index.d.ts:71 tech Defined in: sandkit/engine/index.d.ts:72 terrains Defined in: sandkit/engine/index.d.ts:73 tools Defined in: sandkit/engine/index.d.ts:74 triggers Defined in: sandkit/engine/index.d.ts:75 ui Defined in: sandkit/engine/index.d.ts:76 upgrades Defined in: sandkit/engine/index.d.ts:77 utils Defined in: sandkit/engine/index.d.ts:78 workers Defined in: sandkit/engine/index.d.ts:79 world Defined in: sandkit/engine/index.d.ts:80 augments Defined in: sandkit/engine/index.d.ts:83 auralite Defined in: sandkit/engine/index.d.ts:84 blueprints Defined in: sandkit/engine/index.d.ts:85 clipboard Defined in: sandkit/engine/index.d.ts:86 colorPicker Defined in: sandkit/engine/index.d.ts:87 coloringTool Defined in: sandkit/engine/index.d.ts:88 conveyors Defined in: sandkit/engine/index.d.ts:89 debug Defined in: sandkit/engine/index.d.ts:90 drones Defined in: sandkit/engine/index.d.ts:91 entities Defined in: sandkit/engine/index.d.ts:92 extensions Defined in: sandkit/engine/index.d.ts:93 factory Defined in: sandkit/engine/index.d.ts:94 foliage Defined in: sandkit/engine/index.d.ts:95 foundationColorPicker Defined in: sandkit/engine/index.d.ts:96 game Defined in: sandkit/engine/index.d.ts:97 heatTransfer Defined in: sandkit/engine/index.d.ts:98 launchers Defined in: sandkit/engine/index.d.ts:99 lightColorPicker Defined in: sandkit/engine/index.d.ts:100 matters Defined in: sandkit/engine/index.d.ts:101 misc Defined in: sandkit/engine/index.d.ts:102 portals Defined in: sandkit/engine/index.d.ts:103 prefabData Defined in: sandkit/engine/index.d.ts:104 prefabDecor Defined in: sandkit/engine/index.d.ts:105 prefabulator Defined in: sandkit/engine/index.d.ts:106 prismaline Defined in: sandkit/engine/index.d.ts:107 prismite Defined in: sandkit/engine/index.d.ts:108 queue Defined in: sandkit/engine/index.d.ts:109 shadows Defined in: sandkit/engine/index.d.ts:110 strataform Defined in: sandkit/engine/index.d.ts:111 swarmConsole Defined in: sandkit/engine/index.d.ts:112 sweeperDrone Defined in: sandkit/engine/index.d.ts:113 teleportZones Defined in: sandkit/engine/index.d.ts:114 tutorialBuild Defined in: sandkit/engine/index.d.ts:115 usageTracker Defined in: sandkit/engine/index.d.ts:116 wall Defined in: sandkit/engine/index.d.ts:117 workerLocal Defined in: sandkit/engine/index.d.ts:118 config Defined in: sandkit/engine/index.d.ts:119 extend Defined in: sandkit/engine/index.d.ts:120 retroConsole Defined in: sandkit/engine/index.d.ts:121",
    "path": "/api/sandkit.engine",
    "id": "sandkitengineapi"
  },
  {
    "title": "sandkit.engine.RetroConsolePixel",
    "body": "Internal Pixel value for the Retro Console framebuffer.",
    "path": "/api/sandkit.engine",
    "id": "retroconsolepixel"
  },
  {
    "title": "SandkitState",
    "body": "Defined in: sandkit/engine/state.d.ts:12 Internal Live game state exposed on sandkit.engine.state. Properties environment Defined in: sandkit/engine/state.d.ts:13 Index Signature \\[key: string\\]: unknown context multithreading sandkit Defined in: sandkit/engine/state.d.ts:18 Index Signature \\[key: string\\]: unknown events gameReady graphics hooks keyBindings mods registeredLauncherTypes session Defined in: sandkit/engine/state.d.ts:28 shared Defined in: sandkit/engine/state.d.ts:29 store Defined in: sandkit/engine/state.d.ts:30",
    "path": "/api/sandkit.engine",
    "id": "sandkitstate"
  },
  {
    "title": "sandkit.enums.AbilityType",
    "body": "Defined in: sandkit/enums/index.d.ts:9 Item ability categories (dig, shoot, spray, laser).",
    "path": "/api/sandkit.enums.AbilityType",
    "id": ""
  },
  {
    "title": "sandkit.enums.AbilityType.Dig",
    "body": "",
    "path": "/api/sandkit.enums.AbilityType",
    "id": "dig"
  },
  {
    "title": "sandkit.enums.AbilityType.Shoot",
    "body": "",
    "path": "/api/sandkit.enums.AbilityType",
    "id": "shoot"
  },
  {
    "title": "sandkit.enums.AbilityType.Spray",
    "body": "",
    "path": "/api/sandkit.enums.AbilityType",
    "id": "spray"
  },
  {
    "title": "sandkit.enums.AbilityType.Laser",
    "body": "",
    "path": "/api/sandkit.enums.AbilityType",
    "id": "laser"
  },
  {
    "title": "sandkit.enums.ActionState",
    "body": "Defined in: sandkit/enums/index.d.ts:17 Phases of a held or repeated player action.",
    "path": "/api/sandkit.enums.ActionState",
    "id": ""
  },
  {
    "title": "sandkit.enums.ActionState.Start",
    "body": "",
    "path": "/api/sandkit.enums.ActionState",
    "id": "start"
  },
  {
    "title": "sandkit.enums.ActionState.Active",
    "body": "",
    "path": "/api/sandkit.enums.ActionState",
    "id": "active"
  },
  {
    "title": "sandkit.enums.ActionState.End",
    "body": "",
    "path": "/api/sandkit.enums.ActionState",
    "id": "end"
  },
  {
    "title": "sandkit.enums.ActionType",
    "body": "Defined in: sandkit/enums/index.d.ts:24 High-level action channel (weapon, building, tool, mod).",
    "path": "/api/sandkit.enums.ActionType",
    "id": ""
  },
  {
    "title": "sandkit.enums.ActionType.Weapon",
    "body": "",
    "path": "/api/sandkit.enums.ActionType",
    "id": "weapon"
  },
  {
    "title": "sandkit.enums.ActionType.Building",
    "body": "",
    "path": "/api/sandkit.enums.ActionType",
    "id": "building"
  },
  {
    "title": "sandkit.enums.ActionType.Tool",
    "body": "",
    "path": "/api/sandkit.enums.ActionType",
    "id": "tool"
  },
  {
    "title": "sandkit.enums.ActionType.Mod",
    "body": "",
    "path": "/api/sandkit.enums.ActionType",
    "id": "mod"
  },
  {
    "title": "sandkit.enums.AuthorizationType",
    "body": "Defined in: sandkit/enums/index.d.ts:32 Zone rules that restrict player abilities.",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": ""
  },
  {
    "title": "sandkit.enums.AuthorizationType.NoJetpack",
    "body": "",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": "nojetpack"
  },
  {
    "title": "sandkit.enums.AuthorizationType.NoGrab",
    "body": "",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": "nograb"
  },
  {
    "title": "sandkit.enums.AuthorizationType.NoBuild",
    "body": "",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": "nobuild"
  },
  {
    "title": "sandkit.enums.AuthorizationType.NoTool",
    "body": "",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": "notool"
  },
  {
    "title": "sandkit.enums.AuthorizationType.NoExcavation",
    "body": "",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": "noexcavation"
  },
  {
    "title": "sandkit.enums.AuthorizationType.NoToolExceptFlamethrower",
    "body": "",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": "notoolexceptflamethrower"
  },
  {
    "title": "sandkit.enums.BuildMode",
    "body": "Defined in: sandkit/enums/index.d.ts:42 Linear vs rectangular structure placement.",
    "path": "/api/sandkit.enums.BuildMode",
    "id": ""
  },
  {
    "title": "sandkit.enums.BuildMode.Linear",
    "body": "",
    "path": "/api/sandkit.enums.BuildMode",
    "id": "linear"
  },
  {
    "title": "sandkit.enums.BuildMode.Rectangular",
    "body": "",
    "path": "/api/sandkit.enums.BuildMode",
    "id": "rectangular"
  },
  {
    "title": "sandkit.enums.BuildingClearance",
    "body": "Defined in: sandkit/enums/index.d.ts:48 Result of a build placement check.",
    "path": "/api/sandkit.enums.BuildingClearance",
    "id": ""
  },
  {
    "title": "sandkit.enums.BuildingClearance.Available",
    "body": "",
    "path": "/api/sandkit.enums.BuildingClearance",
    "id": "available"
  },
  {
    "title": "sandkit.enums.BuildingClearance.FullyBlocked",
    "body": "",
    "path": "/api/sandkit.enums.BuildingClearance",
    "id": "fullyblocked"
  },
  {
    "title": "sandkit.enums.BuildingClearance.PartiallyBlocked",
    "body": "",
    "path": "/api/sandkit.enums.BuildingClearance",
    "id": "partiallyblocked"
  },
  {
    "title": "sandkit.enums.BuildingClearance.CanBeReplaced",
    "body": "",
    "path": "/api/sandkit.enums.BuildingClearance",
    "id": "canbereplaced"
  },
  {
    "title": "sandkit.enums.CellType",
    "body": "Defined in: sandkit/enums/index.d.ts:56 Terrain / special cell kinds in the simulation grid.",
    "path": "/api/sandkit.enums.CellType",
    "id": ""
  },
  {
    "title": "sandkit.enums.CellType.Empty",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "empty"
  },
  {
    "title": "sandkit.enums.CellType.Element",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "element"
  },
  {
    "title": "sandkit.enums.CellType.Dirt",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "dirt"
  },
  {
    "title": "sandkit.enums.CellType.SporeSoil",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "sporesoil"
  },
  {
    "title": "sandkit.enums.CellType.Fog",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "fog"
  },
  {
    "title": "sandkit.enums.CellType.FogJetpackBlock",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "fogjetpackblock"
  },
  {
    "title": "sandkit.enums.CellType.FogWater",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "fogwater"
  },
  {
    "title": "sandkit.enums.CellType.FreezingIceSoil",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "freezingicesoil"
  },
  {
    "title": "sandkit.enums.CellType.Divider",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "divider"
  },
  {
    "title": "sandkit.enums.CellType.Grass",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "grass"
  },
  {
    "title": "sandkit.enums.CellType.Moss",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "moss"
  },
  {
    "title": "sandkit.enums.CellType.GoldSoil",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "goldsoil"
  },
  {
    "title": "sandkit.enums.CellType.Petal",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "petal"
  },
  {
    "title": "sandkit.enums.CellType.FogLava",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "foglava"
  },
  {
    "title": "sandkit.enums.CellType.Fluxite",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "fluxite"
  },
  {
    "title": "sandkit.enums.CellType.Block",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "block"
  },
  {
    "title": "sandkit.enums.CellType.SlidingBlock",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "slidingblock"
  },
  {
    "title": "sandkit.enums.CellType.SlidingBlockLeft",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "slidingblockleft"
  },
  {
    "title": "sandkit.enums.CellType.SlidingBlockRight",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "slidingblockright"
  },
  {
    "title": "sandkit.enums.CellType.ConveyorLeft",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "conveyorleft"
  },
  {
    "title": "sandkit.enums.CellType.ConveyorRight",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "conveyorright"
  },
  {
    "title": "sandkit.enums.CellType.ShakerLeft",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "shakerleft"
  },
  {
    "title": "sandkit.enums.CellType.ShakerRight",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "shakerright"
  },
  {
    "title": "sandkit.enums.CellType.Stone",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "stone"
  },
  {
    "title": "sandkit.enums.CellType.VelocitySoaker",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "velocitysoaker"
  },
  {
    "title": "sandkit.enums.CellType.Ice",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "ice"
  },
  {
    "title": "sandkit.enums.CellType.Grower",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "grower"
  },
  {
    "title": "sandkit.enums.CellType.NascentWater",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "nascentwater"
  },
  {
    "title": "sandkit.enums.CellType.SandiumSoil",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "sandiumsoil"
  },
  {
    "title": "sandkit.enums.CellType.Obsidian",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "obsidian"
  },
  {
    "title": "sandkit.enums.CellType.Crackstone",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "crackstone"
  },
  {
    "title": "sandkit.enums.ComponentId",
    "body": "Defined in: sandkit/enums/index.d.ts:91 UI component ids for HUD and menu routing.",
    "path": "/api/sandkit.enums.ComponentId",
    "id": ""
  },
  {
    "title": "sandkit.enums.ComponentId.Hotbar",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "hotbar"
  },
  {
    "title": "sandkit.enums.ComponentId.SoundBoxConfig",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "soundboxconfig"
  },
  {
    "title": "sandkit.enums.ComponentId.Root",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "root"
  },
  {
    "title": "sandkit.enums.ComponentId.Menu",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "menu"
  },
  {
    "title": "sandkit.enums.ComponentId.Management",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "management"
  },
  {
    "title": "sandkit.enums.ComponentId.FilterConfig",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "filterconfig"
  },
  {
    "title": "sandkit.enums.ComponentId.Resources",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "resources"
  },
  {
    "title": "sandkit.enums.ComponentId.TechTree",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "techtree"
  },
  {
    "title": "sandkit.enums.ComponentId.Tutorial",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "tutorial"
  },
  {
    "title": "sandkit.enums.ComponentId.Loader",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "loader"
  },
  {
    "title": "sandkit.enums.ComponentId.Options",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "options"
  },
  {
    "title": "sandkit.enums.ComponentId.ShortcutHelper",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "shortcuthelper"
  },
  {
    "title": "sandkit.enums.ComponentId.Upgrades",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "upgrades"
  },
  {
    "title": "sandkit.enums.ComponentId.Tooltip",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "tooltip"
  },
  {
    "title": "sandkit.enums.ComponentId.Notifications",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "notifications"
  },
  {
    "title": "sandkit.enums.ComponentId.Objectives",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "objectives"
  },
  {
    "title": "sandkit.enums.ComponentId.DroneAdminList",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "droneadminlist"
  },
  {
    "title": "sandkit.enums.ComponentId.HotbarOverlays",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "hotbaroverlays"
  },
  {
    "title": "sandkit.enums.ComponentId.IntroScreen",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "introscreen"
  },
  {
    "title": "sandkit.enums.ComponentId.StoryNotifications",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "storynotifications"
  },
  {
    "title": "sandkit.enums.ComponentId.FactoryProgress",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "factoryprogress"
  },
  {
    "title": "sandkit.enums.ComponentId.Dialogs",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "dialogs"
  },
  {
    "title": "sandkit.enums.ComponentId.GlobalOverlays",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "globaloverlays"
  },
  {
    "title": "sandkit.enums.ComponentId.Lexicon",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "lexicon"
  },
  {
    "title": "sandkit.enums.ComponentId.ModsScreen",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "modsscreen"
  },
  {
    "title": "sandkit.enums.ComponentId.CustomMapsScreen",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "custommapsscreen"
  },
  {
    "title": "sandkit.enums.ComponentId.CinematicPanel",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "cinematicpanel"
  },
  {
    "title": "sandkit.enums.ComponentId.Feedback",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "feedback"
  },
  {
    "title": "sandkit.enums.DroneType",
    "body": "Defined in: sandkit/enums/index.d.ts:123 Autonomous drone kinds.",
    "path": "/api/sandkit.enums.DroneType",
    "id": ""
  },
  {
    "title": "sandkit.enums.DroneType.Digger",
    "body": "",
    "path": "/api/sandkit.enums.DroneType",
    "id": "digger"
  },
  {
    "title": "sandkit.enums.DroneType.Hauler",
    "body": "",
    "path": "/api/sandkit.enums.DroneType",
    "id": "hauler"
  },
  {
    "title": "sandkit.enums.ElementType",
    "body": "Defined in: sandkit/enums/index.d.ts:129 Built-in element type ids (prefer API string ids when registering mods).",
    "path": "/api/sandkit.enums.ElementType",
    "id": ""
  },
  {
    "title": "sandkit.enums.ElementType.Sand",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "sand"
  },
  {
    "title": "sandkit.enums.ElementType.Particle",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "particle"
  },
  {
    "title": "sandkit.enums.ElementType.Water",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "water"
  },
  {
    "title": "sandkit.enums.ElementType.WetSand",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "wetsand"
  },
  {
    "title": "sandkit.enums.ElementType.Sandium",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "sandium"
  },
  {
    "title": "sandkit.enums.ElementType.Residue",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "residue"
  },
  {
    "title": "sandkit.enums.ElementType.Gold",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "gold"
  },
  {
    "title": "sandkit.enums.ElementType.Gloom",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "gloom"
  },
  {
    "title": "sandkit.enums.ElementType.Shake",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "shake"
  },
  {
    "title": "sandkit.enums.ElementType.Steam",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "steam"
  },
  {
    "title": "sandkit.enums.ElementType.Fire",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "fire"
  },
  {
    "title": "sandkit.enums.ElementType.FreezingIce",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "freezingice"
  },
  {
    "title": "sandkit.enums.ElementType.Flame",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "flame"
  },
  {
    "title": "sandkit.enums.ElementType.BurntResidue",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "burntresidue"
  },
  {
    "title": "sandkit.enums.ElementType.Seed",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "seed"
  },
  {
    "title": "sandkit.enums.ElementType.WetSeed",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "wetseed"
  },
  {
    "title": "sandkit.enums.ElementType.Seedling",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "seedling"
  },
  {
    "title": "sandkit.enums.ElementType.Petalium",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "petalium"
  },
  {
    "title": "sandkit.enums.ElementType.Lava",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "lava"
  },
  {
    "title": "sandkit.enums.ElementType.Basalt",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "basalt"
  },
  {
    "title": "sandkit.enums.ItemId",
    "body": "Defined in: sandkit/enums/index.d.ts:153 Built-in hotbar item ids.",
    "path": "/api/sandkit.enums.ItemId",
    "id": ""
  },
  {
    "title": "sandkit.enums.ItemId.Shovel",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "shovel"
  },
  {
    "title": "sandkit.enums.ItemId.Grabber",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "grabber"
  },
  {
    "title": "sandkit.enums.ItemId.Demolisher",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "demolisher"
  },
  {
    "title": "sandkit.enums.ItemId.GrapplingHook",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "grapplinghook"
  },
  {
    "title": "sandkit.enums.ItemId.Vacuum",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "vacuum"
  },
  {
    "title": "sandkit.enums.ItemId.Gun",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "gun"
  },
  {
    "title": "sandkit.enums.ItemId.Copier",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "copier"
  },
  {
    "title": "sandkit.enums.ItemId.RocketLauncher",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "rocketlauncher"
  },
  {
    "title": "sandkit.enums.ItemId.Digger",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "digger"
  },
  {
    "title": "sandkit.enums.ItemId.Shotgun",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "shotgun"
  },
  {
    "title": "sandkit.enums.ItemId.Teleporter",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "teleporter"
  },
  {
    "title": "sandkit.enums.ItemId.Flamethrower",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "flamethrower"
  },
  {
    "title": "sandkit.enums.ItemId.PipeRemover",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "piperemover"
  },
  {
    "title": "sandkit.enums.ItemId.Hauler",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "hauler"
  },
  {
    "title": "sandkit.enums.ItemId.Cryoblaster",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "cryoblaster"
  },
  {
    "title": "sandkit.enums.ItemId.MegaShotgun",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "megashotgun"
  },
  {
    "title": "sandkit.enums.ItemType",
    "body": "Defined in: sandkit/enums/index.d.ts:173 Item category (weapon, tool, consumable, mod).",
    "path": "/api/sandkit.enums.ItemType",
    "id": ""
  },
  {
    "title": "sandkit.enums.ItemType.Weapon",
    "body": "",
    "path": "/api/sandkit.enums.ItemType",
    "id": "weapon"
  },
  {
    "title": "sandkit.enums.ItemType.Tool",
    "body": "",
    "path": "/api/sandkit.enums.ItemType",
    "id": "tool"
  },
  {
    "title": "sandkit.enums.ItemType.Consumable",
    "body": "",
    "path": "/api/sandkit.enums.ItemType",
    "id": "consumable"
  },
  {
    "title": "sandkit.enums.ItemType.Mod",
    "body": "",
    "path": "/api/sandkit.enums.ItemType",
    "id": "mod"
  },
  {
    "title": "sandkit.enums.KeyBinding",
    "body": "Defined in: sandkit/enums/index.d.ts:181 Named input bindings (settings keys).",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": ""
  },
  {
    "title": "sandkit.enums.KeyBinding.OpenBuildMenu",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "openbuildmenu"
  },
  {
    "title": "sandkit.enums.KeyBinding.GrapplingHook",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "grapplinghook"
  },
  {
    "title": "sandkit.enums.KeyBinding.Escape",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "escape"
  },
  {
    "title": "sandkit.enums.KeyBinding.OpenTechTree",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "opentechtree"
  },
  {
    "title": "sandkit.enums.KeyBinding.OpenInventory",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "openinventory"
  },
  {
    "title": "sandkit.enums.KeyBinding.ReverseBuildDirection",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "reversebuilddirection"
  },
  {
    "title": "sandkit.enums.KeyBinding.Marquee",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "marquee"
  },
  {
    "title": "sandkit.enums.KeyBinding.Pause",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "pause"
  },
  {
    "title": "sandkit.enums.KeyBinding.Copy",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "copy"
  },
  {
    "title": "sandkit.enums.KeyBinding.Paste",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "paste"
  },
  {
    "title": "sandkit.enums.KeyBinding.Flip",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "flip"
  },
  {
    "title": "sandkit.enums.KeyBinding.Delete",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "delete"
  },
  {
    "title": "sandkit.enums.KeyBinding.PauseCamera",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "pausecamera"
  },
  {
    "title": "sandkit.enums.KeyBinding.OpenUpgrades",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "openupgrades"
  },
  {
    "title": "sandkit.enums.KeyBinding.BuildMode",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "buildmode"
  },
  {
    "title": "sandkit.enums.KeyBinding.Demolish",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "demolish"
  },
  {
    "title": "sandkit.enums.KeyBinding.Hover",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "hover"
  },
  {
    "title": "sandkit.enums.KeyBinding.Ruler",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "ruler"
  },
  {
    "title": "sandkit.enums.KeyBinding.Left",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "left"
  },
  {
    "title": "sandkit.enums.KeyBinding.Right",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "right"
  },
  {
    "title": "sandkit.enums.KeyBinding.Boost",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "boost"
  },
  {
    "title": "sandkit.enums.KeyBinding.Descend",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "descend"
  },
  {
    "title": "sandkit.enums.KeyBinding.SprintBoost",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "sprintboost"
  },
  {
    "title": "sandkit.enums.KeyBinding.OverrideReplaceStructures",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "overridereplacestructures"
  },
  {
    "title": "sandkit.enums.KeyBinding.QuickSave",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "quicksave"
  },
  {
    "title": "sandkit.enums.KeyBinding.QuickLoad",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "quickload"
  },
  {
    "title": "sandkit.enums.KeyBinding.ToggleGameHud",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "togglegamehud"
  },
  {
    "title": "sandkit.enums.KeyState",
    "body": "Defined in: sandkit/enums/index.d.ts:212 Key transition state for input polling.",
    "path": "/api/sandkit.enums.KeyState",
    "id": ""
  },
  {
    "title": "sandkit.enums.KeyState.Up",
    "body": "",
    "path": "/api/sandkit.enums.KeyState",
    "id": "up"
  },
  {
    "title": "sandkit.enums.KeyState.Down",
    "body": "",
    "path": "/api/sandkit.enums.KeyState",
    "id": "down"
  },
  {
    "title": "sandkit.enums.KeyState.Pressed",
    "body": "",
    "path": "/api/sandkit.enums.KeyState",
    "id": "pressed"
  },
  {
    "title": "sandkit.enums.KeyState.Released",
    "body": "",
    "path": "/api/sandkit.enums.KeyState",
    "id": "released"
  },
  {
    "title": "sandkit.enums.KeyState.All",
    "body": "",
    "path": "/api/sandkit.enums.KeyState",
    "id": "all"
  },
  {
    "title": "sandkit.enums.MatterType",
    "body": "Defined in: sandkit/enums/index.d.ts:221 Physical behaviour category for elements (mirrors shared API enum).",
    "path": "/api/sandkit.enums.MatterType",
    "id": ""
  },
  {
    "title": "sandkit.enums.MatterType.Solid",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "solid"
  },
  {
    "title": "sandkit.enums.MatterType.Liquid",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "liquid"
  },
  {
    "title": "sandkit.enums.MatterType.Particle",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "particle"
  },
  {
    "title": "sandkit.enums.MatterType.Gas",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "gas"
  },
  {
    "title": "sandkit.enums.MatterType.Static",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "static"
  },
  {
    "title": "sandkit.enums.MatterType.Slushy",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "slushy"
  },
  {
    "title": "sandkit.enums.MatterType.Wisp",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "wisp"
  },
  {
    "title": "sandkit.enums.MatterType.Powder",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "powder"
  },
  {
    "title": "sandkit.enums.PickupType",
    "body": "Defined in: sandkit/enums/index.d.ts:413 Pickups and interactable world items.",
    "path": "/api/sandkit.enums.PickupType",
    "id": ""
  },
  {
    "title": "sandkit.enums.PickupType.Artifact",
    "body": "",
    "path": "/api/sandkit.enums.PickupType",
    "id": "artifact"
  },
  {
    "title": "sandkit.enums.PickupType.GlyphKey",
    "body": "",
    "path": "/api/sandkit.enums.PickupType",
    "id": "glyphkey"
  },
  {
    "title": "sandkit.enums.PickupType.Stratacore",
    "body": "",
    "path": "/api/sandkit.enums.PickupType",
    "id": "stratacore"
  },
  {
    "title": "sandkit.enums.PickupType.Orb",
    "body": "",
    "path": "/api/sandkit.enums.PickupType",
    "id": "orb"
  },
  {
    "title": "sandkit.enums.ProjectileType",
    "body": "Defined in: sandkit/enums/index.d.ts:233 Projectile kinds spawned by weapons and tools.",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": ""
  },
  {
    "title": "sandkit.enums.ProjectileType.Bullet",
    "body": "",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": "bullet"
  },
  {
    "title": "sandkit.enums.ProjectileType.Rocket",
    "body": "",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": "rocket"
  },
  {
    "title": "sandkit.enums.ProjectileType.GrapplingHook",
    "body": "",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": "grapplinghook"
  },
  {
    "title": "sandkit.enums.ProjectileType.Fire",
    "body": "",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": "fire"
  },
  {
    "title": "sandkit.enums.ProjectileType.Digger",
    "body": "",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": "digger"
  },
  {
    "title": "sandkit.enums.ProjectileType.Mod",
    "body": "",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": "mod"
  },
  {
    "title": "sandkit.enums.ReloadType",
    "body": "Defined in: sandkit/enums/index.d.ts:243 Weapon reload behaviour.",
    "path": "/api/sandkit.enums.ReloadType",
    "id": ""
  },
  {
    "title": "sandkit.enums.ReloadType.Clip",
    "body": "",
    "path": "/api/sandkit.enums.ReloadType",
    "id": "clip"
  },
  {
    "title": "sandkit.enums.ReloadType.Single",
    "body": "",
    "path": "/api/sandkit.enums.ReloadType",
    "id": "single"
  },
  {
    "title": "sandkit.enums.ReloadType.OverTime",
    "body": "",
    "path": "/api/sandkit.enums.ReloadType",
    "id": "overtime"
  },
  {
    "title": "sandkit.enums.Scene",
    "body": "Defined in: sandkit/enums/index.d.ts:250 Top-level game scene (menu, intro, deploy, in-game).",
    "path": "/api/sandkit.enums.Scene",
    "id": ""
  },
  {
    "title": "sandkit.enums.Scene.MainMenu",
    "body": "",
    "path": "/api/sandkit.enums.Scene",
    "id": "mainmenu"
  },
  {
    "title": "sandkit.enums.Scene.Intro",
    "body": "",
    "path": "/api/sandkit.enums.Scene",
    "id": "intro"
  },
  {
    "title": "sandkit.enums.Scene.Deploy",
    "body": "",
    "path": "/api/sandkit.enums.Scene",
    "id": "deploy"
  },
  {
    "title": "sandkit.enums.Scene.Game",
    "body": "",
    "path": "/api/sandkit.enums.Scene",
    "id": "game"
  },
  {
    "title": "sandkit.enums.StructureType",
    "body": "Defined in: sandkit/enums/index.d.ts:258 Built-in structure type ids.",
    "path": "/api/sandkit.enums.StructureType",
    "id": ""
  },
  {
    "title": "sandkit.enums.StructureType.ConveyorLeft",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "conveyorleft"
  },
  {
    "title": "sandkit.enums.StructureType.ConveyorRight",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "conveyorright"
  },
  {
    "title": "sandkit.enums.StructureType.ShakerLeft",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "shakerleft"
  },
  {
    "title": "sandkit.enums.StructureType.ShakerRight",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "shakerright"
  },
  {
    "title": "sandkit.enums.StructureType.LauncherUp",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "launcherup"
  },
  {
    "title": "sandkit.enums.StructureType.LauncherLeft",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "launcherleft"
  },
  {
    "title": "sandkit.enums.StructureType.LauncherRight",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "launcherright"
  },
  {
    "title": "sandkit.enums.StructureType.SplitterLeft",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "splitterleft"
  },
  {
    "title": "sandkit.enums.StructureType.SplitterRight",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "splitterright"
  },
  {
    "title": "sandkit.enums.StructureType.Dropper",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "dropper"
  },
  {
    "title": "sandkit.enums.StructureType.Foundation",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "foundation"
  },
  {
    "title": "sandkit.enums.StructureType.FoundationAngledLeft",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "foundationangledleft"
  },
  {
    "title": "sandkit.enums.StructureType.FoundationTriangleLeftDel",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "foundationtriangleleftdel"
  },
  {
    "title": "sandkit.enums.StructureType.FoundationAngledRight",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "foundationangledright"
  },
  {
    "title": "sandkit.enums.StructureType.FoundationTriangleRightDel",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "foundationtrianglerightdel"
  },
  {
    "title": "sandkit.enums.StructureType.Collector",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "collector"
  },
  {
    "title": "sandkit.enums.StructureType.FilterLeft",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "filterleft"
  },
  {
    "title": "sandkit.enums.StructureType.FilterRight",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "filterright"
  },
  {
    "title": "sandkit.enums.StructureType.SlidingFoundation",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "slidingfoundation"
  },
  {
    "title": "sandkit.enums.StructureType.VelocitySoaker",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "velocitysoaker"
  },
  {
    "title": "sandkit.enums.StructureType.Grower",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "grower"
  },
  {
    "title": "sandkit.enums.StructureType.SoundBox",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "soundbox"
  },
  {
    "title": "sandkit.enums.StructureType.Pipe",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "pipe"
  },
  {
    "title": "sandkit.enums.StructureType.Pump",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "pump"
  },
  {
    "title": "sandkit.enums.StructureType.LiquidVent",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "liquidvent"
  },
  {
    "title": "sandkit.enums.StructureType.Light",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "light"
  },
  {
    "title": "sandkit.enums.StructureType.FluxEmanator",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "fluxemanator"
  },
  {
    "title": "sandkit.enums.Tech",
    "body": "Defined in: sandkit/enums/index.d.ts:289 Tech tree node ids (mixed numeric and string keys).",
    "path": "/api/sandkit.enums.Tech",
    "id": ""
  },
  {
    "title": "sandkit.enums.Tech.Shaker",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "shaker"
  },
  {
    "title": "sandkit.enums.Tech.Conveyors",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "conveyors"
  },
  {
    "title": "sandkit.enums.Tech.Guns1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "guns1"
  },
  {
    "title": "sandkit.enums.Tech.Filters1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "filters1"
  },
  {
    "title": "sandkit.enums.Tech.Flamethrower",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "flamethrower"
  },
  {
    "title": "sandkit.enums.Tech.Gun",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "gun"
  },
  {
    "title": "sandkit.enums.Tech.KineticPress",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "kineticpress"
  },
  {
    "title": "sandkit.enums.Tech.Guns2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "guns2"
  },
  {
    "title": "sandkit.enums.Tech.Drones1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "drones1"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading2"
  },
  {
    "title": "sandkit.enums.Tech.Filters2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "filters2"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading3"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading4"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading5",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading5"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading6",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading6"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading7",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading7"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading8",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading8"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading9",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading9"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading10",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading10"
  },
  {
    "title": "sandkit.enums.Tech.PlanterBox",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "planterbox"
  },
  {
    "title": "sandkit.enums.Tech.Thermo",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "thermo"
  },
  {
    "title": "sandkit.enums.Tech.Rocket",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "rocket"
  },
  {
    "title": "sandkit.enums.Tech.Pipes",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "pipes"
  },
  {
    "title": "sandkit.enums.Tech.StaticLights",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "staticlights"
  },
  {
    "title": "sandkit.enums.Tech.Drones2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "drones2"
  },
  {
    "title": "sandkit.enums.Tech.Smelter",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "smelter"
  },
  {
    "title": "sandkit.enums.Tech.Tools4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "tools4"
  },
  {
    "title": "sandkit.enums.Tech.Guns3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "guns3"
  },
  {
    "title": "sandkit.enums.Tech.Pipes2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "pipes2"
  },
  {
    "title": "sandkit.enums.Tech.ConveyorsMk2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "conveyorsmk2"
  },
  {
    "title": "sandkit.enums.Tech.Lights2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "lights2"
  },
  {
    "title": "sandkit.enums.Tech.Refining6",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "refining6"
  },
  {
    "title": "sandkit.enums.Tech.Refining7",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "refining7"
  },
  {
    "title": "sandkit.enums.Tech.Guns4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "guns4"
  },
  {
    "title": "sandkit.enums.Tech.Guns5",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "guns5"
  },
  {
    "title": "sandkit.enums.Tech.Tools5",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "tools5"
  },
  {
    "title": "sandkit.enums.Tech.Tools6",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "tools6"
  },
  {
    "title": "sandkit.enums.Tech.Filters3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "filters3"
  },
  {
    "title": "sandkit.enums.Tech.Filters4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "filters4"
  },
  {
    "title": "sandkit.enums.Tech.Pipes3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "pipes3"
  },
  {
    "title": "sandkit.enums.Tech.Pipes4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "pipes4"
  },
  {
    "title": "sandkit.enums.Tech.Logistics3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logistics3"
  },
  {
    "title": "sandkit.enums.Tech.Logistics4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logistics4"
  },
  {
    "title": "sandkit.enums.Tech.Lights3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "lights3"
  },
  {
    "title": "sandkit.enums.Tech.Lights4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "lights4"
  },
  {
    "title": "sandkit.enums.Tech.Drones3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "drones3"
  },
  {
    "title": "sandkit.enums.Tech.Drones4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "drones4"
  },
  {
    "title": "sandkit.enums.Tech.Alien",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "alien"
  },
  {
    "title": "sandkit.enums.Tech.Electricity",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "electricity"
  },
  {
    "title": "sandkit.enums.Tech.AlienCore",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "aliencore"
  },
  {
    "title": "sandkit.enums.Tech.Emanators1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "emanators1"
  },
  {
    "title": "sandkit.enums.Tech.AlienPlasmaConduits",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "alienplasmaconduits"
  },
  {
    "title": "sandkit.enums.Tech.AlienQuantumMatrix",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "alienquantummatrix"
  },
  {
    "title": "sandkit.enums.Tech.AlienPlasmaCore",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "alienplasmacore"
  },
  {
    "title": "sandkit.enums.Tech.AlienVoidEngine",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "alienvoidengine"
  },
  {
    "title": "sandkit.enums.Tech.FlareGun",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "flaregun"
  },
  {
    "title": "sandkit.enums.Tech.Sweeper",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "sweeper"
  },
  {
    "title": "sandkit.enums.Tech.Utilities3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "utilities3"
  },
  {
    "title": "sandkit.enums.Tech.Cryoblaster",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "cryoblaster"
  },
  {
    "title": "sandkit.enums.Tech.Vacuum",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "vacuum"
  },
  {
    "title": "sandkit.enums.Tech.Utilities6",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "utilities6"
  },
  {
    "title": "sandkit.enums.Tech.Utilities7",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "utilities7"
  },
  {
    "title": "sandkit.enums.Tech.Filters",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "filters"
  },
  {
    "title": "sandkit.enums.Tech.AdvancedFilters",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "advancedfilters"
  },
  {
    "title": "sandkit.enums.Tech.Infrastructure3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "infrastructure3"
  },
  {
    "title": "sandkit.enums.Tech.Decorations1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "decorations1"
  },
  {
    "title": "sandkit.enums.Tech.Decorations2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "decorations2"
  },
  {
    "title": "sandkit.enums.Tech.Decorations3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "decorations3"
  },
  {
    "title": "sandkit.enums.Tech.Blocks1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "blocks1"
  },
  {
    "title": "sandkit.enums.Tech.Drill",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "drill"
  },
  {
    "title": "sandkit.enums.Tech.SteamTurbine",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "steamturbine"
  },
  {
    "title": "sandkit.enums.Tech.Electricity3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "electricity3"
  },
  {
    "title": "sandkit.enums.Tech.Electricity4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "electricity4"
  },
  {
    "title": "sandkit.enums.Tech.Logic1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logic1"
  },
  {
    "title": "sandkit.enums.Tech.Logic2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logic2"
  },
  {
    "title": "sandkit.enums.Tech.Logic3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logic3"
  },
  {
    "title": "sandkit.enums.Tech.Logic4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logic4"
  },
  {
    "title": "sandkit.enums.Tech.Various1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "various1"
  },
  {
    "title": "sandkit.enums.Tech.Various2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "various2"
  },
  {
    "title": "sandkit.enums.Tech.Various3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "various3"
  },
  {
    "title": "sandkit.enums.Tech.Locator",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "locator"
  },
  {
    "title": "sandkit.enums.Tech.QuantumPortal",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "quantumportal"
  },
  {
    "title": "sandkit.enums.Tech.VoidRift",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "voidrift"
  },
  {
    "title": "sandkit.enums.Tech.Blink",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "blink"
  },
  {
    "title": "sandkit.enums.Tech.Recall",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "recall"
  },
  {
    "title": "sandkit.enums.Tech.ImplosionGun",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "implosiongun"
  },
  {
    "title": "sandkit.enums.Tech.Refining8",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "refining8"
  },
  {
    "title": "sandkit.enums.Tech.Tools7",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "tools7"
  },
  {
    "title": "sandkit.enums.Tech.Diggers",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "diggers"
  },
  {
    "title": "sandkit.enums.Tech.Haulers",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "haulers"
  },
  {
    "title": "sandkit.enums.Tech.Map",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "map"
  },
  {
    "title": "sandkit.enums.Tech.ColoringTool",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "coloringtool"
  },
  {
    "title": "sandkit.enums.Tech.SignalGate",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "signalgate"
  },
  {
    "title": "sandkit.enums.Tech.GrapplingHook",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "grapplinghook"
  },
  {
    "title": "sandkit.enums.Tech.GlassFoundation",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "glassfoundation"
  },
  {
    "title": "sandkit.enums.Tech.PrecisionTools",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "precisiontools"
  },
  {
    "title": "sandkit.enums.Tech.SignalDevices",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "signaldevices"
  },
  {
    "title": "sandkit.enums.Tech.SignalControls",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "signalcontrols"
  },
  {
    "title": "sandkit.enums.Tech.LogicGates",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logicgates"
  },
  {
    "title": "sandkit.enums.Tech.RetroConsole",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "retroconsole"
  },
  {
    "title": "sandkit.enums.Tech.WallTool",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "walltool"
  },
  {
    "title": "sandkit.enums.Tech.Corraller",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "corraller"
  },
  {
    "title": "sandkit.enums.Tech.PlainFoundation",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "plainfoundation"
  },
  {
    "title": "sandkit.enums.Tech.ClearingFrame",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "clearingframe"
  },
  {
    "title": "sandkit.enums.Tech.Heatmap",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "heatmap"
  },
  {
    "title": "sandkit.enums.Tech.MiningLaser",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "mininglaser"
  },
  {
    "title": "sandkit.enums.Tech.GoldBattery",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "goldbattery"
  },
  {
    "title": "sandkit.enums.Tech.Hover",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "hover"
  },
  {
    "title": "sandkit.enums.Tech.SprintBoost",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "sprintboost"
  },
  {
    "title": "sandkit.enums.Tech.CritterFence",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "critterfence"
  },
  {
    "title": "sandkit.enums.Tech.FluxEmanator",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "fluxemanator"
  },
  {
    "title": "sandkit.enums.TechStatus",
    "body": "Defined in: sandkit/enums/index.d.ts:404 Visibility and research state of a tech node.",
    "path": "/api/sandkit.enums.TechStatus",
    "id": ""
  },
  {
    "title": "sandkit.enums.TechStatus.Available",
    "body": "",
    "path": "/api/sandkit.enums.TechStatus",
    "id": "available"
  },
  {
    "title": "sandkit.enums.TechStatus.Visible",
    "body": "",
    "path": "/api/sandkit.enums.TechStatus",
    "id": "visible"
  },
  {
    "title": "sandkit.enums.TechStatus.Researched",
    "body": "",
    "path": "/api/sandkit.enums.TechStatus",
    "id": "researched"
  },
  {
    "title": "sandkit.enums.TechStatus.Unknown",
    "body": "",
    "path": "/api/sandkit.enums.TechStatus",
    "id": "unknown"
  },
  {
    "title": "sandkit.enums.TechStatus.Hidden",
    "body": "",
    "path": "/api/sandkit.enums.TechStatus",
    "id": "hidden"
  },
  {
    "title": "sandkit.enums.WorldItemType",
    "body": "Defined in: sandkit/enums/index.d.ts:423 Use PickupType instead.",
    "path": "/api/sandkit.enums.WorldItemType",
    "id": "",
    "deprecated": true
  },
  {
    "title": "sandkit.enums.WorldItemType.Artifact",
    "body": "",
    "path": "/api/sandkit.enums.WorldItemType",
    "id": "artifact",
    "deprecated": true
  },
  {
    "title": "sandkit.enums.WorldItemType.GlyphKey",
    "body": "",
    "path": "/api/sandkit.enums.WorldItemType",
    "id": "glyphkey",
    "deprecated": true
  },
  {
    "title": "sandkit.enums.WorldItemType.Stratacore",
    "body": "",
    "path": "/api/sandkit.enums.WorldItemType",
    "id": "stratacore",
    "deprecated": true
  },
  {
    "title": "sandkit.enums.WorldItemType.Orb",
    "body": "",
    "path": "/api/sandkit.enums.WorldItemType",
    "id": "orb",
    "deprecated": true
  },
  {
    "title": "sandkit.enums",
    "body": "- AbilityType - ActionState - ActionType - AuthorizationType - BuildMode - BuildingClearance - CellType - ComponentId - DroneType - ElementType - ItemId - ItemType - KeyBinding - KeyState - MatterType - ProjectileType - ReloadType - Scene - StructureType - Tech - TechStatus - PickupType - WorldItemType",
    "path": "/api/sandkit.enums",
    "id": ""
  },
  {
    "title": "SandkitEnums",
    "body": "Defined in: sandkit/enums/index.d.ts:431 Composed sandkit.enums object. Properties AbilityType Defined in: sandkit/enums/index.d.ts:432 ActionState Defined in: sandkit/enums/index.d.ts:433 ActionType Defined in: sandkit/enums/index.d.ts:434 AuthorizationType Defined in: sandkit/enums/index.d.ts:435 BuildMode Defined in: sandkit/enums/index.d.ts:436 BuildingClearance Defined in: sandkit/enums/index.d.ts:437 CellType Defined in: sandkit/enums/index.d.ts:438 ComponentId Defined in: sandkit/enums/index.d.ts:439 DroneType Defined in: sandkit/enums/index.d.ts:440 ElementType Defined in: sandkit/enums/index.d.ts:441 ItemId Defined in: sandkit/enums/index.d.ts:442 ItemType Defined in: sandkit/enums/index.d.ts:443 KeyBinding Defined in: sandkit/enums/index.d.ts:444 KeyState Defined in: sandkit/enums/index.d.ts:445 MatterType Defined in: sandkit/enums/index.d.ts:446 ProjectileType Defined in: sandkit/enums/index.d.ts:447 ReloadType Defined in: sandkit/enums/index.d.ts:448 Scene Defined in: sandkit/enums/index.d.ts:449 StructureType Defined in: sandkit/enums/index.d.ts:450 Tech Defined in: sandkit/enums/index.d.ts:451 TechStatus Defined in: sandkit/enums/index.d.ts:452 PickupType Defined in: sandkit/enums/index.d.ts:453 WorldItemType Defined in: sandkit/enums/index.d.ts:457 Deprecated Use PickupType instead.",
    "path": "/api/sandkit.enums",
    "id": "sandkitenums"
  },
  {
    "title": "sandkit",
    "body": "Live sandkit object — shape, ambient binding docs, and nested bags. Mirrors on-disk src/sandkit/ and the host free variable: api, engine, enums, react, state. Prefer the free name sandkit in mod code (src/global.d.ts); do not import a value binding.",
    "path": "/api/sandkit",
    "id": ""
  },
  {
    "title": "SandkitApi",
    "body": "Defined in: sandkit/api/sandkit-api.d.ts:8 Composed main-thread sandkit.api object type. Each property matches a namespace under sandkit.api. . Namespace members are documented in their module files. Use this type when typing the host sandkit.api value as a whole. Properties action Defined in: sandkit/api/sandkit-api.d.ts:10 Player action and custom action data. assets Defined in: sandkit/api/sandkit-api.d.ts:12 Mod asset URLs and provider selection. authorization Defined in: sandkit/api/sandkit-api.d.ts:14 Build authorization checks. building Defined in: sandkit/api/sandkit-api.d.ts:16 Building mode and placement. blueprints Defined in: sandkit/api/sandkit-api.d.ts:18 Structure blueprint serialize and localize helpers. camera Defined in: sandkit/api/sandkit-api.d.ts:20 Camera position and bounds. collector Defined in: sandkit/api/sandkit-api.d.ts:22 Collector machine helpers. constants Defined in: sandkit/api/sandkit-api.d.ts:24 Shared game constants. cooldown Defined in: sandkit/api/sandkit-api.d.ts:26 Cooldown timers. discoveries Defined in: sandkit/api/sandkit-api.d.ts:28 Discovery tracking. effects Defined in: sandkit/api/sandkit-api.d.ts:30 Visual and gameplay effects. elements Defined in: sandkit/api/sandkit-api.d.ts:32 Element types and cell mutations. entities Defined in: sandkit/api/sandkit-api.d.ts:34 Entity spawn, capture, and lifecycle. energy Defined in: sandkit/api/sandkit-api.d.ts:36 Energy network helpers. events Defined in: sandkit/api/sandkit-api.d.ts:38 Game event subscription. excavation Defined in: sandkit/api/sandkit-api.d.ts:40 Excavation helpers. fire Defined in: sandkit/api/sandkit-api.d.ts:42 Fire and burning helpers. factory Defined in: sandkit/api/sandkit-api.d.ts:44 Factory progression level and process counters. game Defined in: sandkit/api/sandkit-api.d.ts:46 Game session start helpers. gameConfig Defined in: sandkit/api/sandkit-api.d.ts:48 Game configuration values. grid Defined in: sandkit/api/sandkit-api.d.ts:53 Cell queries, deferred mutations, fog, and redraw. Official name for the former api.world surface. hooks Defined in: sandkit/api/sandkit-api.d.ts:55 Intercept and modify hooks. i18n Defined in: sandkit/api/sandkit-api.d.ts:57 Localization strings. input Defined in: sandkit/api/sandkit-api.d.ts:59 Input state and bindings. items Defined in: sandkit/api/sandkit-api.d.ts:61 Item definitions and inventory. lights Defined in: sandkit/api/sandkit-api.d.ts:63 Dynamic light sources. maps Defined in: sandkit/api/sandkit-api.d.ts:65 Map selection and session start. mods Defined in: sandkit/api/sandkit-api.d.ts:67 Mod asset provider lookup. patterns Defined in: sandkit/api/sandkit-api.d.ts:69 Excavation pattern helpers. pipes Defined in: sandkit/api/sandkit-api.d.ts:71 Pipe network queries and enablement. pickups Defined in: sandkit/api/sandkit-api.d.ts:73 World pickup spawn, collect, and lookup. player Defined in: sandkit/api/sandkit-api.d.ts:75 Player position, movement, and inventory. processing Defined in: sandkit/api/sandkit-api.d.ts:77 Processing recipe registration. progression Defined in: sandkit/api/sandkit-api.d.ts:79 Story progression completion. projectiles Defined in: sandkit/api/sandkit-api.d.ts:81 Projectile spawn and lifecycle. random Defined in: sandkit/api/sandkit-api.d.ts:83 Game random number helpers. raycast Defined in: sandkit/api/sandkit-api.d.ts:85 World raycast queries. reactions Defined in: sandkit/api/sandkit-api.d.ts:87 Element contact reactions. rendering Defined in: sandkit/api/sandkit-api.d.ts:89 Screen drawing and overlay canvas. resources Defined in: sandkit/api/sandkit-api.d.ts:91 Fluxite and energy resources. scene Defined in: sandkit/api/sandkit-api.d.ts:93 Active game scene. schedule Defined in: sandkit/api/sandkit-api.d.ts:95 Next-tick callback scheduling. settings Defined in: sandkit/api/sandkit-api.d.ts:97 Game settings read and change events. shared Defined in: sandkit/api/sandkit-api.d.ts:99 Cross-thread shared buffers. signals Defined in: sandkit/api/sandkit-api.d.ts:101 Signal target registration. sound Defined in: sandkit/api/sandkit-api.d.ts:103 Sound playback and stop controls. sprites Defined in: sandkit/api/sandkit-api.d.ts:105 Sprite load and transforms. storage Defined in: sandkit/api/sandkit-api.d.ts:107 Per-mod and local storage. structureBehaviors Defined in: sandkit/api/sandkit-api.d.ts:109 Conveyor and launcher behaviors. structures Defined in: sandkit/api/sandkit-api.d.ts:111 Structure registration and queries. tech Defined in: sandkit/api/sandkit-api.d.ts:113 Tech tree definitions and locks. terrains Defined in: sandkit/api/sandkit-api.d.ts:115 Terrain registration and mutations. time Defined in: sandkit/api/sandkit-api.d.ts:117 Game time and tick counter. tools Defined in: sandkit/api/sandkit-api.d.ts:119 Tool-specific helpers. triggers Defined in: sandkit/api/sandkit-api.d.ts:121 Interval trigger registration. ui Defined in: sandkit/api/sandkit-api.d.ts:123 UI overlays, dialogs, and navigation. upgrades Defined in: sandkit/api/sandkit-api.d.ts:125 Upgrade categories and levels. utils Defined in: sandkit/api/sandkit-api.d.ts:127 Vector math helpers. workers Defined in: sandkit/api/sandkit-api.d.ts:129 Worker post-update control. world Defined in: sandkit/api/sandkit-api.d.ts:133 Deprecated Use grid for cell APIs and pickups for world items.",
    "path": "/api/sandkit",
    "id": "sandkitapi"
  },
  {
    "title": "Sandkit",
    "body": "Property Type Description --- --- --- api SandkitApi Public mod API. See sandkit.api. apiVersion number Sandkit API version number (live value is 1). engine SandkitEngine Internal State-first internals. See SandkitEngine. enums SandkitEnums Runtime enum bags. See sandkit.enums. react SandkitReact Host React package. See SandkitReact. state SandkitState Game state. Same object as sandkit.engine.state at runtime. See SandkitState. api apiVersion engine enums react state Shape of the host-injected sandkit free variable in mod main.js. Example Accessing the API",
    "path": "/api/sandkit",
    "id": "sandkit"
  },
  {
    "title": "sandkit.react",
    "body": "",
    "path": "/api/sandkit.react",
    "id": ""
  },
  {
    "title": "SandkitReact",
    "body": "Defined in: sandkit/react.d.ts:8 Host React runtime at sandkit.react. Kept intentionally shallow so TypeDoc does not ingest @types/react / DOM. Mods should import react through the template JSX runtime, not this bag directly, unless you need to reach the host copy at runtime. Indexable Additional host exports not listed here. Properties Fragment? Defined in: sandkit/react.d.ts:36 Fragment symbol (host copy). Component? Defined in: sandkit/react.d.ts:38 Base class component (host copy). PureComponent? Defined in: sandkit/react.d.ts:40 Pure class component (host copy). StrictMode? Defined in: sandkit/react.d.ts:42 Strict mode wrapper (host copy). Suspense? Defined in: sandkit/react.d.ts:44 Suspense boundary (host copy). version? Defined in: sandkit/react.d.ts:46 React version string from the host bundle. Methods createElement()? Defined in: sandkit/react.d.ts:10 Create a React element (host copy). Parameters args ...unknown[] Returns unknown createContext()? Defined in: sandkit/react.d.ts:12 Create a React context (host copy). Parameters args ...unknown[] Returns unknown createRef()? Defined in: sandkit/react.d.ts:14 Create a ref object (host copy). Parameters args ...unknown[] Returns unknown forwardRef()? Defined in: sandkit/react.d.ts:16 Wrap a component to forward refs (host copy). Parameters args ...unknown[] Returns unknown memo()? Defined in: sandkit/react.d.ts:18 Memoize a component (host copy). Parameters args ...unknown[] Returns unknown lazy()? Defined in: sandkit/react.d.ts:20 Lazy-load a component (host copy). Parameters args ...unknown[] Returns unknown useState()? Defined in: sandkit/react.d.ts:22 State hook (host copy). Parameters args ...unknown[] Returns unknown useEffect()? Defined in: sandkit/react.d.ts:24 Effect hook (host copy). Parameters args ...unknown[] Returns unknown useLayoutEffect()? Defined in: sandkit/react.d.ts:26 Layout effect hook (host copy). Parameters args ...unknown[] Returns unknown useMemo()? Defined in: sandkit/react.d.ts:28 Memo hook (host copy). Parameters args ...unknown[] Returns unknown useCallback()? Defined in: sandkit/react.d.ts:30 Callback hook (host copy). Parameters args ...unknown[] Returns unknown useRef()? Defined in: sandkit/react.d.ts:32 Ref hook (host copy). Parameters args ...unknown[] Returns unknown useContext()? Defined in: sandkit/react.d.ts:34 Context hook (host copy). Parameters args ...unknown[] Returns unknown",
    "path": "/api/sandkit.react",
    "id": "sandkitreact"
  },
  {
    "title": "shared.asset",
    "body": "",
    "path": "/api/shared.asset",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- id number Runtime asset id. type number Asset category discriminator used by the renderer. id type Reference to a loaded sprite or texture asset.",
    "path": "/api/shared.asset",
    "id": "assetref"
  },
  {
    "title": "shared.engine",
    "body": "",
    "path": "/api/shared.engine",
    "id": ""
  },
  {
    "title": "shared.engine.EngineFn",
    "body": "Argument Type Description --- --- --- args ...unknown[] args Internal Stub for an unresolved engine method.",
    "path": "/api/shared.engine",
    "id": "enginefn"
  },
  {
    "title": "shared.engine.EngineOverlapNs",
    "body": "Internal Loose bag for namespaces that overlap sandkit.api (different names / state-first).",
    "path": "/api/shared.engine",
    "id": "engineoverlapns"
  },
  {
    "title": "shared.jsonvalue",
    "body": "",
    "path": "/api/shared.jsonvalue",
    "id": ""
  },
  {
    "title": "shared.jsonvalue.JsonObjectV1",
    "body": "JSON object with string keys and JsonValueV1 values. Use for open-ended config bags and serialized mod data. Indexable",
    "path": "/api/shared.jsonvalue",
    "id": "jsonobjectv1"
  },
  {
    "title": "shared.jsonvalue.JsonValueV1",
    "body": "JSON value: primitive, object, array, or null. Does not include undefined — omit keys instead.",
    "path": "/api/shared.jsonvalue",
    "id": "jsonvaluev1"
  },
  {
    "title": "shared.nominal",
    "body": "",
    "path": "/api/shared.nominal",
    "id": ""
  },
  {
    "title": "shared.nominal.LooseString",
    "body": "Known string literals plus any other string. T string collapses to string and drops autocomplete. T extends string",
    "path": "/api/shared.nominal",
    "id": "loosestring"
  },
  {
    "title": "shared.nominal.LooseNumber",
    "body": "Known numeric literals plus any other number. T number collapses to number and drops autocomplete. T extends number",
    "path": "/api/shared.nominal",
    "id": "loosenumber"
  },
  {
    "title": "shared.nominal.TaggedNumber",
    "body": "Number handle that does not mix with a different tag. Plain number is not assignable; numeric literals and enum members are. Type Declaration \\ \\ tag? Tag extends string",
    "path": "/api/shared.nominal",
    "id": "taggednumber"
  },
  {
    "title": "shared.nominal.CellId",
    "body": "Packed simulation cell id from world.getCellIdAtCell.",
    "path": "/api/shared.nominal",
    "id": "cellid"
  },
  {
    "title": "shared.player",
    "body": "",
    "path": "/api/shared.player",
    "id": ""
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- x number Player hitbox left edge in world pixels. y number Player hitbox top edge in world pixels. width number Player hitbox width in world pixels. height number Player hitbox height in world pixels. velocity Vector2 Current movement velocity in pixels per second. threshold Vector2 Movement threshold accumulator used by physics. onGround boolean Spawn flag. Live physics does not update this field. Use sandkit.api.player.isOnGround() (solid cells 1px below the hitbox). speedCapOverdrive { x: object; x.dir: dir: null; x.active: active: boolean; x.bonus: bonus: number; x.releaseTime: releaseTime: number; x.releaseBonus: releaseBonus: number; y: object; y.dir: dir: null; y.active: active: boolean; y.bonus: bonus: number; y.releaseTime: releaseTime: number; y.releaseBonus: releaseBonus: number } Temporary speed-cap bonuses applied on each axis. inventory InventoryItem[] Items currently held in the player inventory. buildings number[] Structure type ids the player has unlocked for building. tech { Index Signature: \\[key: string & 124; number\\]: object } Tech tree nodes and their unlock metadata. lockedTechs { Index Signature: \\[key: string\\]: boolean } Tech ids explicitly locked for this save. action null Active world action, or null when idle. hotbar { activeSlotIndex: number; hotbarIndex: number; bars: AssetRef[][] } Hotbar slots, active indices, and item sprites. grapplingHook boolean True when the grappling hook is equipped or active. cooldowns { boostParticle: object; boostParticle.time: time: number; boostParticle.last: last: number; hoverParticle: object; hoverParticle.time: time: number; hoverParticle.last: last: number; slowdown: object; slowdown.last: last: number } Cooldown timestamps for movement particles and slowdown. isHovering boolean True when hover movement mode is active. weaponsMeta { rocketLauncher: object; rocketLauncher.ammo: ammo: object; rocketLauncher.ammo.current: current: number; rocketLauncher.ammo.reload: reload: object; rocketLauncher.ammo.reload.last: last: number; rocketLauncher.ammo.reloading: reloading: boolean } Per-weapon runtime metadata. x y width height velocity threshold onGround speedCapOverdrive inventory buildings tech lockedTechs action hotbar grapplingHook cooldowns isHovering weaponsMeta Live player state snapshot (read-only shape for mods). Reflects sandkit.engine.state / store player fields exposed to mods.",
    "path": "/api/shared.player",
    "id": "player"
  },
  {
    "title": "number",
    "body": "Property Type Description --- --- --- id number itemType number abilities { type: number; levelRequirement: number; attributes: object; Index Signature: \\[key: string\\]: object; cooldown: object; cooldown.time: time: number; cooldown.last: last: number } nameKey string descriptionKey string categoryKey &quot;excavation&quot; & 124; &quot;utility&quot; & 124; &quot;drones&quot; sprite? AssetRef id itemType abilities nameKey descriptionKey categoryKey sprite? One hotbar or inventory item entry.",
    "path": "/api/shared.player",
    "id": "inventoryitem"
  },
  {
    "title": "shared.player.CellCoordinates",
    "body": "Grid cell position as [cellX, cellY]. Cell coordinates match sandkit.api. AtCell helpers: column first, then row.",
    "path": "/api/shared.player",
    "id": "cellcoordinates"
  },
  {
    "title": "shared.player.Vector2",
    "body": "Property Type Description --- --- --- x number Horizontal component. y number Vertical component. x y 2D vector in world or cell space. World positions use pixels. Cell helpers may return pixel or cell units depending on the API.",
    "path": "/api/shared.player",
    "id": "vector2"
  },
  {
    "title": "Sandkit API types",
    "body": "TypeScript declarations and community docs for the live Sandustry sandkit modding API. Package name: @sandustry-modding/types. Originally a fork of flamableassassin/sandustry-modding-types. The docs site ships API reference pages, modding guides, and JSON Schema for modinfo.json / patches.json. Folder layout mirrors runtime shape so you can jump from code to the matching .d.ts path. Path Runtime object ------------------------------- ----------------------------------------------------------------------- src/sandkit/api/ sandkit.api (main thread) src/sandkit/engine/api/ sandkit.engine.api src/sandkit/engine/state.d.ts sandkit.engine.state / sandkit.state src/sandkit/enums/ sandkit.enums src/sandkit/react.d.ts sandkit.react src/sandkit/index.d.ts Composed Sandkit root type src/global.d.ts Ambient sandkit free variable and type aliases src/worker/ Worker-thread sandkit.api (see WorkerSandkitApi) src/shared/ Internal base shapes reused by main and worker declarations src/configs/ modinfo.json / patches.json TypeScript types (not a runtime object) src/electron/ Renderer preload bridge (window.electron; not a runtime sandkit object) At runtime, every API bag is a plain object with function properties — not a TypeScript namespace. MCP checks on a live game session show: - sandkit.api, sandkit.api.ui, sandkit.api.ui.overlays, and sandkit.engine.api.game are all typeof \"object\" with Object.prototype - Nested keys hold functions or further plain objects Declaration files use export namespace because it is the usual .d.ts pattern for nested object APIs. It matches how you call the API (sandkit.api.ui.update) and supports export import when main and worker share base shapes under shared/. interface or type object literals would also work for runtime shape, but they do not support the export import re-export style used across main, worker, and shared modules.",
    "path": "/api/types",
    "id": ""
  },
  {
    "title": "Sandkit API types.Ambient types (preferred)",
    "body": "Pull the host sandkit ambient into your project with a triple-slash reference. Put it at the top of main.js / worker.js, or in a small ambient .d.ts that your tsconfig / jsconfig includes: That works in .ts and .js (including checked JS with checkJs). Do not list @sandustry-modding/types under compilerOptions.types. That list only loads packages from node modules/@types (for example \"react\" or \"node\"). Deep declaration modules are also available, for example: - Main mod (main.js): use the ambient free name sandkit. Type aliases such as SandkitApi are global; do not import a value binding. - Worker mod (worker.js): type sandkit.api as WorkerSandkitApi. Worker and main APIs overlap but are not interchangeable. - Shared folder: not a runtime namespace. It holds domain shapes and API bases that main and worker modules extend. - Configs folder: modinfo.json and patches.json TypeScript types (@sandustry-modding/types/configs). Not part of the live sandkit object. JSON Schema: https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json and https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json - Electron folder: renderer preload bridge (@sandustry-modding/types/electron). Ambient electron on @sandustry-modding/types. Docs: Electron bridge. Edit .d.ts files under src/. Regenerate the Docsify API reference and JSON Schema after JSDoc or config-type changes. npm run generate merges scripts/api-gen/overrides.json, the official Sandkit API HTML, and src/sandkit/api/ declarations. It writes scripts/api-gen/generated/api-catalog.json, refreshes scripts/api-gen/generated/namespace-summaries.json, and reports gaps in docs/generated/api-gaps.md. Edit namespace descriptions and alias mappings in scripts/api-gen/overrides.json. npm run scrape walks the live sandkit object in a running Sandustry renderer (CDP :9222) and writes scripts/api-gen/generated/runtime-api.json. Start the game with the debug port open (F5 or npm run sandustry from the mod template), load a save, then run scrape from this repo. Guides live under docs/guides/ (setup, Workshop, and Sandkit domain pages). Regenerate the Docsify API reference and JSON Schema from these declarations: Output lands in docs/api/ and docs/schemas/. npm run generate overwrites those API pages in place. It does not delete docs/api/. Browse namespaces from Search on the docs site. npm run generate writes docs/ sidebar.md for direct pages. On an API namespace page the sidebar also lists that namespace and its children. The combined page is docs/full.md. npm run docs runs that step, then serves the docs site. npm run docs:links fails when a markdown link does not resolve to a Docsify page or heading id. npm run validate fails when committed schemas do not match src/configs/. npm run docs:archive-sandkit asks for a base file name, then writes docs/official-api/ .md from https://sandustry.com/sandkit.html.",
    "path": "/api/types",
    "id": ""
  },
  {
    "title": "Electron bridge",
    "body": "The Electron bridge is the renderer-side API that talks to Sandustry's main process over IPC. It is not part of sandkit. The game exposes it as window.electron from the preload script (preload.js). Mod code can use the ambient free name electron (same object as window.electron). Most mods only use sandkit.api. Reach for electron when you need host integration that Sandkit does not wrap: - Writing to the host log file (electron.log) - Opening the local mods folder or uploading a dev build to Workshop - Reading distribution channel, Steam Deck detection, or OS language preferences at startup - Platform achievements, cloud saves, or Steam Workshop helpers (Steam builds) - Custom map editor file I/O (.custommap files on disk) The game itself uses the bridge for saves, settings, fullscreen, and platform licensing. Treat save and settings helpers as host internals unless you have a specific reason to call them from a mod. Install @sandustry-modding/types and load the ambient bindings: You can annotate with global types (ElectronBridge, ElectronLogLevel, ElectronPlatform) or import explicit shapes: Bundled mods from the mod template also receive const electron = globalThis.window?.electron at the top of main.js. That keeps bare electron. calls safe when the preload bridge is present. Methods fall into three groups. Sync (sendSync) — safe during early startup. Examples: getPlatformSync(), getSettingsSync(), saveExistsSync(). Async (invoke) — returns a Promise. Examples: save(), load(), platform.cloudSave(), localMods.list(). Fire-and-forget (send) — no return value; the main process handles the message later. Examples: log(), openDevTools(), macRightMouse.watch(). Each member in the generated reference lists its IPC channel in a IPC: line. The top-level object is ElectronBridge. Nested bags group related calls: Property Role Generated reference --- --- --- localMods Local dev mod folder and Steam upload ElectronLocalModsApi platform Steam / MS Store account, achievements, cloud, overlay ElectronPlatformApi platform.workshop Steam Workshop subscribe, download, and discovery ElectronWorkshopApi platform.overlay In-game overlay browser for https: URLs ElectronPlatformOverlayApi customMaps Custom map editor save / load / list / delete ElectronCustomMapsApi macRightMouse macOS right-click emulation probes ElectronMacRightMouseApi Area Examples Reference --- --- --- Startup probes getPlatformSync(), getModdingEnabledSync(), getIsSteamDeckSync() ElectronBridge App lifecycle onAppSuspend(), onAppResume(), appQuit() ElectronBridge Logging log(level, scope, message) → logs/main.log ElectronBridge · ElectronLogLevel Saves & settings save(), load(), getSaveFiles(), saveSettings() ElectronBridge · result types below Window setFullscreen(), toggleFullscreen(), openDevTools() ElectronBridge Platform (MS Store) checkLicense(), Xbox sign-in / license listeners ElectronBridge · ElectronLicenseCheckResult Environment getSystemInfo() (local, no IPC) ElectronSystemInfo Invoke handlers return small result objects instead of throwing for expected failures. Type Used for --- --- ElectronOperationResult Generic { success, path?, error? } from saves, settings, and window calls ElectronLoadResult Parsed save body or load error ElectronExportSaveResult Raw .save bytes for backup ElectronImportSaveResult Import from exported bytes ElectronLocalModsListResult Local mod summaries (ok, data, errorCode) ElectronLocalModsUploadResult Workshop upload from a local folder Primitive aliases: ElectronPlatform, ElectronLogLevel, ElectronIpcListener. getPlatformSync() returns \"steam\", \"msstore\", \"gog\", or another channel string. Some nested APIs are Steam-only. MS Store builds return { ok: false, errorCode: 'unsupported platform' } or no-op success where noted in the type docs. Xbox sign-in and license listeners never fire on Steam. File patching (isFilePatchingActiveSync()) is active on Steam when Workshop bundle patches are registered. Every interface, property, method, @param, and @returns note lives on one page: electron — generated API reference Declaration sources are split under src/electron/ in the npm package (bridge, platform, workshop, local-mods, and related modules). Deep imports are available, for example @sandustry-modding/types/electron/bridge. - configs — modinfo.json, patches.json, and workshop.json (mod files, not runtime APIs) - Sandkit API home — sandkit.api reference and modding guides - Changelog — package history including electron types in 0.6.0",
    "path": "/electron-bridge",
    "id": ""
  },
  {
    "title": "API catalog gaps",
    "body": "Generated by npm run generate. Edit descriptions and expected members in scripts/api-gen/overrides.json. - Official source: https://sandustry.com/sandkit.html - Generated: 2026-09-07T00:17:37.615Z - Namespaces: 67 - Official methods (HTML): 268 - Declared methods (types): 472 - Open gaps: 28",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.source",
    "body": "- source.isAvailable - source.getBankIndex - source.getSlotCount - source.getAction - source.activateSlot - source.clearSlot - source.dispose",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.local",
    "body": "- local.get - local.set - local.remove",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.physics",
    "body": "- physics.normal - physics.skip - physics.aggressiveSkip",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.items",
    "body": "- items.getRegisteredIds - items.spriteMounts",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.signals",
    "body": "- signals.registerSenderType — Register a signal sender structure type - signals.setOutputAtCell — Write signal output at a structure cell",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.worker",
    "body": "- worker.getIndex - worker.getCount",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.cooldown",
    "body": "- cooldown.start — Official name; types expose check and isReady",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.elements",
    "body": "- elements.moveBetweenCells",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.input",
    "body": "- input.getMousePositionAtWorld",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.main",
    "body": "- main.emitEvent",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.overrideHandle",
    "body": "- overrideHandle.remove",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.player",
    "body": "- player.inventory.hasById — Test whether inventory contains an item id",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.resources",
    "body": "- resources.refresh",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.structures",
    "body": "- structures.processing.context.commit",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.visibilityHandle",
    "body": "- visibilityHandle.restore",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "Guides",
    "body": "Step-by-step guides for Sandustry mod authors. These pages focus on mod files, types, and the Sandkit API. For project setup, watch builds, and Workshop upload commands, use the mod template. - Getting started — what a mod is, required files, and a minimal example - The mod lifecycle — compilation, load order, events, and hooks - modinfo.json reference — manifest fields, limits, and capabilities - Patching with patches.json — bundle find-and-replace patches - Worker mods — simulation-worker entry and shared buffers - Publishing to Steam Workshop — packaging and workshop.json - World and grid — cells, elements, terrains, maps, pickups - Structures and factory — buildings, pipes, recipes, blueprints - Energy and signals — power networks, collector, signal targets - Player and items — inventory, tools, camera, input, placement - UI — HUD, overlays, dialogs, hotbar - Tech and progression — research, upgrades, discoveries - Entities and drones — creatures, projectiles, pickups - Hooks, storage, and assets — events, i18n, sound, sprites - Engine vs public API — sandkit.api, engine, state, enums - Search — find namespaces and members by live sandkit path - Full API reference — every namespace on one page - TypeScript types — modinfo.json, patches.json, and workshop.json - JSON Schema — raw schema URLs for editors",
    "path": "/guides/README",
    "id": ""
  },
  {
    "title": "Energy, signals, and collector",
    "body": "This guide covers public sandkit.api helpers for power networks, the global energy pool, signal targets, and collector pickups. API reference: sandkit.api.energy. Official host docs: Sandkit API 0.5.6. sandkit.api.energy and sandkit.api.collector run on the main thread. Do not call them from workerEntry. See Worker mods for worker-safe APIs. Resource Typical use API surface -------- ----------- ----------- Power (energy) Building costs, batteries, conductor networks sandkit.api.energy, sandkit.api.resources.updateEnergy Gold Selling, economy, collector structures sandkit.api.collector Gold is not electrical power. Collector structures use factory registration and sandkit.api.collector for pickup value. Read calls inspect state without changing networks or pools. Namespace Read members --------- ------------ energy getNetworkAtCell, getNetworkFreeCapacityAtCell collector getValueFromCellId, getValueByType, isCellIdCollectable, isCellIdCollectableForSprite Write calls change stored energy, network contents, or collector state. Namespace Write members --------- ------------- energy registerType, addAtCell, consume, consumeExcludingNetworkAtCell resources updateEnergy, collectFluxiteAtCell collector notifyPickupAtCell signals targets.register (handler registration) Register structures with registerType. A conductor forwards energy; storage holds energy up to optional capacity. Set energyType when multiple network kinds share one structure id. addAtCell adds energy at a cell and returns the amount actually added. consume draws from the global energy pool. When allOrNothing is true, the call returns zero unless the full amount is available. consumeExcludingNetworkAtCell spends from every network except the one at the given cell. getNetworkAtCell returns nodes with x, y, and type. getNetworkFreeCapacityAtCell returns unused storage in the network at that cell. Full member list: sandkit.api.energy. updateEnergy changes the player energy store by a delta (negative to spend). The official runtime name is adjustEnergy; types use updateEnergy. Set deferUi: true to skip an immediate HUD refresh. collectFluxiteAtCell handles fluxite collection at a cell. See sandkit.api.resources. sandkit.api.collector handles value and collectability for gold-bearing cells. Pair it with structure registration in factory. isCellIdCollectable and isCellIdCollectableForSprite gate pickup and sprite logic. Call notifyPickupAtCell after a pickup at the cell. Member reference: sandkit.api.collector. sandkit.api.signals.targets registers handlers when a signal reaches a structure type. The handler receives structure and SignalTargetPayloadV1 (combined, inputCount, onCount in the official API). Sender and interactable helpers exist in the official docs but are not in the published type declarations yet. - sandkit.api.energy — network registration, add, consume, query - sandkit.api.resources — updateEnergy, collectFluxiteAtCell - sandkit.api.collector — collector value and pickup helpers - sandkit.api.signals — signal target registration - factory — collector and other structure registration - Worker mods — thread boundaries for mod scripts - Official Sandkit API — host runtime reference",
    "path": "/guides/energy",
    "id": ""
  },
  {
    "title": "Engine and host shape",
    "body": "Sandustry injects a global sandkit object into every mod entry and workerEntry script. The loader binds it as a free variable. Do not import sandkit as a module. Member signatures live in the generated API pages linked below. This page explains how the top-level bags relate. Property Role Docs --- --- --- api Public mod API (main thread) sandkit.api apiVersion Sandkit API version (1 on current builds) — engine Internal state-first twin of many namespaces sandkit.engine enums Runtime enum bags from the game sandkit.enums react Host React copy for UI mods sandkit.react state Live game state (same object as sandkit.engine.state) sandkit.engine At runtime, sandkit.state === sandkit.engine.state. Prefer sandkit.api for mod logic. Reach for sandkit.state only when you already need raw state and no public helper exists. sandkit.api is the stable namespace tree for mods on the main thread. Each property is a namespace (grid, hooks, player, and others). Use these paths in new code. When the same name exists on sandkit.engine.api, prefer the public method. Public calls do not take game state as the first argument. Engine calls are state-first and marked internal in the type package. Main-thread-only namespaces include assets, events, gameConfig, hooks, i18n, mods, pickups, settings, shared, structureBehaviors, and time. Workers expose a smaller sandkit.api surface. See Worker mods. sandkit.engine has two properties: - sandkit.engine.api — state-first helpers and engine-only namespaces - sandkit.engine.state — live game state bags Overlap namespaces on sandkit.engine.api mirror public sandkit.api names (grid, hooks, player, and others) with different signatures. Engine-only namespaces include augments, clipboard, conveyors, debug, drones, entities, factory, game, queue, retroConsole, workerLocal, and others. Full list: sandkit.engine. Treat sandkit.engine as an escape hatch. Do not start new mods on engine paths when a public equivalent exists. sandkit.state is typed as SandkitState. Confirmed top-level bags: - environment — runtime context and multithreading flags - sandkit — loader-owned sandkit runtime data - session — active session snapshot - shared — cross-thread shared data - store — persistent game store Shapes under those bags are stubs in the type package. Confirm fields on a live object before you depend on them. sandkit.enums exposes runtime enum objects from the game. Use them when an API expects a numeric or string enum value. Examples: Registered enums include AbilityType, ActionState, ActionType, AuthorizationType, BuildMode, BuildingClearance, CellType, ComponentId, DroneType, ElementType, ItemId, ItemType, KeyBinding, KeyState, MatterType, PickupType, ProjectileType, ReloadType, Scene, StructureType, Tech, and TechStatus. WorldItemType is deprecated; use PickupType. Prefer resolving string ids through API helpers (for example elements.getTypeById) when you register custom content. Numeric enum values can change between game versions. sandkit.react is a shallow copy of the host React package. It exposes optional helpers such as createElement, useState, useEffect, Fragment, and version. Mods that use JSX through the mod template should rely on the template JSX runtime. Use sandkit.react only when you must reach the host copy at runtime. Host integration outside Sandkit lives on window.electron. The ambient free name electron is the same object. That bridge is not part of sandkit. Use it for logging, local mod folders, platform probes, and other IPC helpers. Details: Electron bridge. Load ambient bindings with a triple-slash reference or your project types config. Global types include Sandkit, SandkitApi, SandkitEngine, SandkitState, SandkitEnums, and SandkitReact. Worker scripts should cast sandkit.api to WorkerSandkitApi. - Worker mods — main vs worker sandkit.api - The mod lifecycle — when scripts run - sandkit.api — public namespace reference - sandkit.engine — internal engine reference - Search — browse members by live path",
    "path": "/guides/engine",
    "id": ""
  },
  {
    "title": "Entities, drones, and world objects",
    "body": "This page covers live world objects: creatures and mod entities, drones, projectiles, and pickups. Use public sandkit.api namespaces on the main thread. Official signatures: Sandkit API. These namespaces are not on WorkerSandkitApi. Use worker hooks for grid and element logic instead. See Worker mods. sandkit.api.entities manages critters and other registered entity types. Positions are in world pixels. Method Role --- --- getById(entityId) One live instance by runtime id. getAllByType(entityTypeId) All instances of one string type id. spawnAtWorld(entityTypeId, worldX, worldY) Spawn at a position. remove(entityId) Remove from the world. launch(entityId, angleRadians, speed?) Launch with angle and optional speed. startCapture(entityId) Start capture (for example corraller vacuum). collect(entityId) Force collect into inventory or storage. Each Entity has id, x, y, and optional targetX / targetY. Extra fields depend on the type. Query by known type ids: Spawn and launch only when your mod owns that behavior. Test in a save copy first. API reference: sandkit.api.entities. Hauler and sweeper drones have no public sandkit.api namespace. The game exposes them through internal sandkit.engine.api.drones. Method Role --- --- spawn(...) Spawn a drone (internal). kill(...) Remove one or more drones (internal). Engine methods take game state as the first argument. Prefer hooks and factory APIs when they fit your mod. Do not call engine.api.drones from normal mod code unless you accept breakage across game updates. sandkit.api.projectiles registers mod projectile types and spawns shots. Method Role --- --- register(definition) Register a mod projectile definition. getDefinitionById(projectileId) Look up a registered definition. createBlueprintFromId(projectileId) Build a spawn blueprint. getAll() All active projectiles. getById(projectileId) One projectile by runtime id. remove(projectile) Remove a projectile instance. spawnAtWorld(worldX, worldY, angle, blueprint) Spawn at position and angle. Register once at load. Spawn with a blueprint from your registered id: Each Projectile has id, x, and y. API reference: sandkit.api.projectiles. sandkit.api.pickups spawns and collects interactable world items. The instance type is WorldItem. PickupType enum values: Value Name --- --- 1 Artifact 2 GlyphKey 3 Stratacore 4 Orb Method Role --- --- spawnAtWorld(type, worldX, worldY, data?, light?) Spawn a pickup. remove(pickup) Remove from the world. pickUp(pickup) Collect into inventory. Returns true on success. getAll() All active pickups. getById(pickupId) One pickup by runtime id. Optional WorldItemLight sets brightness, size, and color on a point light at spawn. destroy is deprecated; use remove. API reference: sandkit.api.pickups. There is no public sandkit.api namespace for portals or teleport zones. Those live on internal sandkit.engine.api.portals and sandkit.engine.api.teleportZones. Treat engine teleport helpers as unstable. Public surfaces you can use instead: - sandkit.api.player.teleportToGround() — move the player to solid ground. - sandkit.api.hooks.intercept(\"teleport:effect:create\", …) — change teleport visual effects. - sandkit.api.elements.teleportBetweenCells(...) — move an element between grid cells (not the player). For player movement mods, prefer player and hook APIs over engine zone management. - sandkit.api.entities - sandkit.api.projectiles - sandkit.api.pickups - sandkit.api.player - sandkit.api.hooks - Worker mods - Official Sandkit API",
    "path": "/guides/entities",
    "id": ""
  },
  {
    "title": "Factory and structures",
    "body": "Structures, pipes, machines, and factory progression live under sandkit.api on the main thread. Use this page to pick the right namespace before you open member docs. API reference: sandkit.api.structures. Most factory APIs fall into two groups. Query helpers read the live map. They do not change the world. Examples: structures.getAtCell, pipes.isAtCell, factory.getLevel, authorization.canBuildAtCell. Mutate helpers register definitions, place or remove structures, or change per-cell state. Examples: structures.register, structures.buildAtCell, structures.updateData, structures.processing.setEnabledAtCell. On the main thread, structures.buildAtCell and structures.removeAtCell defer writes until the sim is idle. Prefer hooks such as building:place when you need to react to player placement instead of forcing builds yourself. Register a structure definition once at mod load. The game uses it for the build menu, placement rules, and rendering. World map helpers work on built instances. Resolve a cell, iterate a type, or patch instance data: structures.getDefinitionByType, structures.getAvailableTypes, and structures.isLockedByType bridge menu state and the map. Workers share lookup and mutation helpers via sandkit.api.structures (worker). Registration and deferred build/remove calls are main-thread only. Player-driven placement uses the building session namespace, not structure registration. building.selectStructure starts a preview. building.isBlockedAtCell and building.getSnappedPositionAtCell support placement UI logic. building.cancelPlacement ends the session. Built-in conveyor and pipe ids live on building.StructureType. Player input and hotbar flow: Player guide. API: sandkit.api.building. structures.registerPlacementConfig adds hotbar fields (channel, mode, and similar) stored on each placed instance. Authorization zones gate where the player may build, grab, or use tools. authorization.canBuildAtCell, canGrabAtCell, and canUseToolAtCell answer permission checks at a cell. authorization.getZoneIdAtCell and getPlayerZoneId return the active zone. Main thread only — sandkit.api.authorization. Pipe helpers query fluid tiles and toggle flow at a cell. pipes.getConnectedVentsAtCell returns vent positions linked to a pipe segment. API: sandkit.api.pipes. Vanilla machines use recipes registered at load time. You can register through structures.recipes.register (machine id plus recipe shape) or the top-level sandkit.api.processing helpers (registerGrower, registerShaker, registerKineticPress). Custom tick logic uses structures.processing.register. The callback receives a structure instance and a context with grid queries and commit for batched mutations. Processing enablement is separate from recipe registration. structures.processing.isEnabledAtCell reads whether a machine runs at a cell. structures.processing.setEnabledAtCell turns processing on or off (for example when a signal disables a line). Worker threads expose structures.processing.isEnabledAtCell only. Registration and setEnabledAtCell stay on the main thread. See sandkit.api.structures.processing and structures.recipes. Factory viability tier and process counters are read-only through sandkit.api.factory. Process ids: shakeWetSand, pressBurntResidue, growFlowers, condenseFlorin. Use getProcessRate for the current completion rate of each process. Tier unlock writers live on sandkit.engine.api.factory; prefer the public getters above when they are enough. API: sandkit.api.factory. blueprints.serializeStructures turns live instances into portable records. blueprints.localizeStructures resolves ids before paste in another world. API: sandkit.api.blueprints. Conveyors and launchers need physics hooks beyond a static definition. structureBehaviors.registerConveyorType wires transport for a structure id. structureBehaviors.registerLauncherType registers up, left, and right launcher variants together. API: sandkit.api.structureBehaviors. Area Main (sandkit.api) Worker (WorkerSandkitApi) ---- -------------------- --------------------------- Structure lookup / updateData Yes Yes — worker structures register, buildAtCell, removeAtCell Yes No building, authorization, pipes, factory, blueprints Yes No structures.processing.register, setEnabledAtCell Yes No structures.processing.isEnabledAtCell Yes Yes — worker processing structureBehaviors, processing recipes Yes (load time) No See Worker mods for typing and bundle workflow. - sandkit.api.structures — definitions, placement, build/remove, recipes - Worker mods — simulation worker entry and shared buffers - Player guide — hotbar, placement session, and input - Search — browse all Sandkit namespaces - Official Sandkit API — host API from the game",
    "path": "/guides/factory",
    "id": ""
  },
  {
    "title": "Getting started",
    "body": "A Sandustry mod is a folder the game loads from the OS mods directory or Steam Workshop. The folder needs a manifest and at least one script entry point. - Sandustry with the [mods] beta (Steam → Library → Properties → Betas). - Node 24 if you use the mod template for TypeScript builds. - @sandustry-modding/types for Sandkit API types and editor JSON Schema URLs. Example modinfo.json: Example main.js: Field details: modinfo.json reference. Type shapes: configs. The community mod template compiles main.ts to main.js and copies the bundle into the game mods folder. Quick start there: Then press F5 in VS Code (or run npm run sandustry) to launch the game with your mod. - The mod lifecycle — how mods load and when your code runs - World and grid — cells, elements, and grid.mutate - UI — toasts, overlays, and HUD - Search — browse the generated Sandkit API - Official Sandkit API — host API from the game",
    "path": "/guides/getting-started",
    "id": ""
  },
  {
    "title": "The mod lifecycle",
    "body": "This page describes when mod code runs and how the loader orders mods. It complements the official Sandkit docs. 1. Sandustry reads each enabled mod folder. 2. The loader parses modinfo.json (or the built output from modinfo.ts). 3. Optional patches.json rewrites game bundles at process start. 4. The main entry script runs in the renderer. 5. Optional workerEntry runs in simulation workers. Patches apply once per game process. Renderer hot reload does not re-apply patches. Restart the game after patch changes. Details: Patching with patches.json. A mod must declare at least one capability in modinfo.json: - entry — main-thread script (main.js) - workerEntry — simulation-worker script (worker.js) - configOverrides, shaderOverrides, textureOverrides, provides, or map — data-only mods See modinfo.json reference and configs: ModInfo. Mods sort by loadOrder (lower first). Ties break on id alphabetically. Use dependencies to require other mod ids before yours loads. The loader skips mods whose dependencies are missing or disabled. The host injects a global sandkit object into entry and workerEntry. Do not import sandkit as a module. In TypeScript or checked JavaScript: Use the free name sandkit in main.js. In worker.js, type sandkit.api as WorkerSandkitApi — see Worker mods. Prefer public Sandkit APIs over bundle patches. - sandkit.api.hooks.register(event, handler) — subscribe to named game events - sandkit.api.events — worker-thread event surface (see Worker mods) Search the API for event names: Search. On 0.5.5+ , use hooks, configOverrides, and register APIs before you rewrite game bundles. The mod template npm run dev watches source and writes main.js into the game mods folder. Restart the game for worker scripts and patches. npm run dev:release matches a Workshop upload build (no debug patches or source maps). - Getting started - sandkit.api.hooks - Mod template builds",
    "path": "/guides/mod-lifecycle",
    "id": ""
  },
  {
    "title": "modinfo.json reference",
    "body": "modinfo.json is the manifest for one mod folder. It tells the loader which scripts to run and which optional assets to apply. TypeScript types: configs: ModInfo. JSON Schema: schemas/modinfo.json. Author either modinfo.json or modinfo.ts. When both exist in the same folder, modinfo.ts wins in the mod template build. The game folder name is id , not name. Field Type Role ----- ---- ---- manifestVersion 1 Manifest schema version. Use 1. id string OS mods folder and Workshop identity (author.mod). name string Display name in Options → Mods. version string Mod version (for example 0.0.1). apiVersion number Sandkit API generation. Use 1. Field Type Role ----- ---- ---- entry string Main-thread script relative to the mod root (main.js). workerEntry string Simulation-worker script (worker.js). Required for worker hooks. At least one capability is required. See Worker mods for workerEntry. Field Type Role ----- ---- ---- description string Short description for Options and Workshop fallback text. author string Author display name. patches string Path to patches.json (default: patches.json at mod root). gameVersion object Declared compatible game version range (minimum, maximum). dependencies string[] Other mod ids that must load first. loadOrder number Sort key (lower loads earlier). configSchema object Options UI fields for player settings. Full field list: configs: ModInfo. Set gameVersion to declare compatibility: - Patch-only mods (bundle rewrites tied to old minified text): set maximum to the last tested game version. - Sandkit API mods (hooks, configOverrides, 0.5.5+): set minimum to \"0.5.5\" or higher. Mods can ship data without executable entry points: - configOverrides — merge into game config - shaderOverrides / textureOverrides — asset replacements - provides — register content ids for other mods - map — custom world map definition See configs for each shape. The mod template documents defineModInfo, modinfo.ts patch exports, and config schema UI. - Getting started - Patching with patches.json - JSON Schema for modinfo.json",
    "path": "/guides/modinfo",
    "id": ""
  },
  {
    "title": "Patching with patches.json",
    "body": "patches.json applies exact (or regex) rewrites to Sandustry JavaScript bundles at mod load. Types: configs: BundlePatch. JSON Schema: schemas/patches.json. On 0.5.5+ , prefer the public Sandkit API (api.hooks, configOverrides, register) before you rewrite game bundles. Use a patch only when the public API cannot do the job. Patches break when the game updates. Minified find strings move. Re-test every patch after a game update. The loader applies patches.json at mod load (once per process). Renderer hot reload does not re-apply them. Stop and start the game. Save reload is not enough. Ship a bare array at the mod root: For IDE validation, point $schema at the published URL or bind the schema by file path in your editor. The game loads a bare array without $schema. Wrapped document form (editors only): Unwrap to a bare array before shipping, or map the schema by path in VS Code. file value Bundle ------------ ------ js/bundle.js Main renderer bundle js/simulation-worker.js Simulation workers js/manager-worker.js Manager worker js/utility-worker.js Utility worker Pair main and worker patches with the same atomicGroup id when both must succeed or fail together. Operation Effect --------- ------ replace Replace the matched substring insertBefore Insert code before the match insertAfter Insert code after the match delete Remove the matched substring Set expectedMatches so a failed find fails fast. Patch code runs outside the game bundle IIFE. Put shared runtime helpers on globalThis when patch code must call them. Declare compatibility in modinfo.json: - Patch-only mods: cap gameVersion.maximum at the last tested release. - API mods: set gameVersion.minimum to \"0.5.5\" or higher. The mod template documents patches.ts, definePatches, and debugPatches. When both patches.json and patches.ts exist, patches.ts wins . - The mod lifecycle - configs: patches - Example patches.json",
    "path": "/guides/patches",
    "id": ""
  },
  {
    "title": "Player, inventory, and input",
    "body": "This page covers main-thread Sandkit APIs for the player body, hotbar, tools, camera, input, and structure placement. Use it from main.js when your mod reads or changes player state. API reference: sandkit.api.player. Hotbar UI and HUD overlays are in UI guide. Simulation runs in workers. Player-facing helpers run on the main thread only. Namespace Thread --------- ------ player inventory, unlocks, teleport, and movement setters Main player position and collision queries Main and worker items, action, cooldown, camera, input, building Main Workers expose read-only position and collision helpers only. See Worker mods. Use isOnGround() for ground contact. The store.player.onGround snapshot is not updated during play. isCollidingWithCell, isWithinRadiusOfCell, and isPositionClearAtWorld test grid overlap and fit. teleportToGround() moves the player down until solid ground is found. These mutate save state. Prefer them over editing store.player directly. sandkit.api.items registers mod items and queries the active hotbar slot. getActive() returns a registered item definition or undefined for structure blueprint slots. getDefinitionById(itemId) and updateDefinition(itemId, partial) read or patch registered definitions. sandkit.api.action tracks the hotbar slot the player is using. getActive() and getSelected() return { id, type } for any slot type. Structure slots leave items.getActive() as undefined. check starts the timer when ready and returns true. isReady returns true when the duration has elapsed. setSize and getSize use cell radius. isLoaded is true when the grabber buffer holds elements. setFocusAtWorld and releaseFocus return true when the operation succeeds. getMouseCellPosition returns the cell under the cursor. triggerBinding, pressBinding, releaseBinding, and resetMouseState fire handlers without hardware input. sandkit.api.building drives the placement preview and selection. selectStructure accepts StructureType or a registered structure id and returns the selection or null. getSnappedPositionAtCell returns snapped world pixels. isBlockedAtCell is true when placement is blocked. - UI guide — HUD, hotbar clicks, and overlays - Worker mods — simulation worker entry - sandkit.api.player — position, inventory, unlocks - sandkit.api.items — item registration - sandkit.api.building — placement helpers",
    "path": "/guides/player",
    "id": ""
  },
  {
    "title": "Tech, upgrades, and progression",
    "body": "Sandustry gates content through the Research tree, tool upgrades, the discovery log, and story steps. Mod code registers new entries and reads or sets player state through sandkit.api on the main thread. Prefer these public APIs over bundle patches. See The mod lifecycle for load timing. sandkit.api.tech defines nodes, checks lock and research state, and wires unlocks. Register a standalone tech entry: Place a node on the grid with a parent: Query or change state: Use getDefinitionById and updateDefinition to read or patch an existing entry. addDefinition is deprecated; call registerDefinition instead. Built-in tech ids autocomplete through sandkit.enums.Tech. Custom mods use string ids. Listen for purchases with sandkit.api.events.on(\"tech:unlocked\", handler). Full member list: sandkit.api.tech. sandkit.api.upgrades adds Management-tab upgrade rows for items such as tools and drones. Register a category, then an upgrade definition: Read or set the purchased level: Use updateDefinition to patch costs or level caps after registration. Details: sandkit.api.upgrades. sandkit.api.discoveries marks element and terrain types in the player discovery log. Main thread only. Details: sandkit.api.discoveries. sandkit.api.progression.complete marks a tutorial or objective step done. It returns true when the game accepts the request. The request shape includes a required id string and optional extra fields. Confirm objective ids in your target save before you call this in release mods. Details: sandkit.api.progression. Conservatory nodes are tech entries that spend tickets and unlock structures or items. Append extra unlocks to a built-in or mod reward node: Ticket balance and creature counts live in save state, not in a separate Sandkit namespace. Details: sandkit.api.tech.conservatory. There is no sandkit.api.tutorial or sandkit.api.objectives namespace. Use progression.complete for scripted completion when the game exposes a matching step id. Use hooks for read-only reactions: Tutorial build placement checks live under sandkit.engine.api.tutorialBuild, not sandkit.api. See sandkit.engine.api.tutorialBuild only when you must integrate with vanilla build steps. Factory tier, production points, and viability bars are factory progression, not Research. See Factory and structures for sandkit.api.factory. - sandkit.api.tech - sandkit.api.upgrades - sandkit.api.discoveries - sandkit.api.progression - sandkit.enums.Tech - sandkit.api.events - Factory and structures",
    "path": "/guides/progression",
    "id": ""
  },
  {
    "title": "Publishing to Steam Workshop",
    "body": "This page covers workshop.json and how it links a local mod folder to a Steam Workshop item. Build and upload commands live in the mod template. After the first successful upload, the publisher writes workshop/workshop.json in your mod repo: Field Role ----- ---- schemaVersion File format version. Must be 1. publishedFileId Steam Workshop item id. Managed by the publisher — do not hand-edit. Types: configs: WorkshopJson. JSON Schema: schemas/workshop.json. You do not need workshop.json before the first upload. The mod template npm run publish flow: 1. Runs npm run build to stage build/ /. 2. Sends listing metadata from workshop/workshop.md (or modinfo.description). 3. Creates the Workshop item when no publishedFileId exists. 4. Writes workshop/workshop.json with the new id. Prepare before upload: - workshop/preview.png (or preview.gif) — listing image - workshop/workshop.md — Steam description (Markdown converted to BBCode at upload) - CHANGELOG.md — change notes (Keep a Changelog format) Do not put links or raw URLs in workshop.md — Steam Workshop virus scan rejects them. npm run build copies the release bundle plus workshop.json only into build/ /. Preview images stay under workshop/ and upload separately as the listing image. README.md, CHANGELOG.md, and screenshots stay in the repo, not in the content folder. From the mod template repo: Full SteamCMD setup, credentials, and flags: Builds guide. Declare compatible game versions in modinfo.json. Steam Workshop Link to Game Version should match your gameVersion caps for patch-heavy mods. - modinfo.json reference - Getting started - Steam Workshop for Sandustry",
    "path": "/guides/publishing",
    "id": ""
  },
  {
    "title": "Runtime services",
    "body": "These sandkit.api namespaces handle subscriptions, persistence, assets, localization, audio, sprites, and timing. They run on the main thread unless noted below. Member signatures live in the generated API pages linked below. sandkit.api.hooks registers callbacks at internal hook points. Both methods return an unsubscribe function. - hooks.intercept(hookId, callback, options?) — observe or cancel an action - hooks.modify(hookId, callback, options?) — mutate hook payload before the game applies it Intercept callbacks receive (args, context). Call context.cancel() to skip the action. Modify callbacks receive (args) only. Options include priority, itemIds, entityTypes, structureTypes, projectileTypes, weaponIds, triggerIds, and resourceIds where supported. Custom string hook ids are allowed. API: sandkit.api.hooks. sandkit.api.events is a frozen pub/sub bus. - events.on(eventId, callback) — subscribe; returns unsubscribe - events.emit(eventId, payload) — emit to all subscribers Common ids include game:ready, game:started, frame:render, building:placed, and resource:collected. Custom string event ids are allowed. API: sandkit.api.events. Workers use the same method names with different ids and optional guard filters. Type sandkit.api as WorkerSandkitApi — see Worker mods. Save-scoped JSON keyed by mod id: - storage.ensure(modId) - storage.get(modId, key) - storage.set(modId, key, value) - storage.remove(modId, key) Session-only keys (no mod id scope): - storage.local.get(key) - storage.local.set(key, value) - storage.local.remove(key) Use your modinfo.json id as modId. Prefix local keys with your mod id to avoid collisions. Values must be JSON-serializable. API: sandkit.api.storage. - assets.getUrl(relativePath) — URL under the calling mod folder - assets.getSelectedProvider(kind) — selected provider or null - assets.selectProvider(kind, providerId) — select or clear - mods.getProviders(kind) — readonly AssetProviderV1 list Provider fields: id, kind, optional localId and modId, and modName. API: sandkit.api.assets, sandkit.api.mods. Member Role --- --- t(key, params?) Translate with placeholders register(locale, translations) Add strings for a locale getLocale() Active locale code setLocale(locale) Switch locale (Promise) hasTranslation(key, locale?) Test key presence getLanguages() Known language metadata getAvailableLocales() Locales with registered strings formatNumber(value, options?) Locale number format joinKey(...parts) Build a dotted key (key deprecated) getName(definition) Resolve nameKey or name getDescription(definition) Resolve descriptionKey or description createTranslatable(key, fallback) Translatable object (translatable deprecated) setGlobal(key, value) Static or lazy global helper getGlobal(key) Read global helper removeGlobal(key) Remove helper (clearGlobal deprecated) getGlobals() All global helpers formatKeyForDisplay(keyCode) Display label for a key code API: sandkit.api.i18n. - sound.play(soundId, options?) — returns SoundHandle - sound.playActive(soundId, options?) - sound.playLayers(layers, options?) - sound.calculateDistanceOptionsAtWorld(worldX, worldY, baseVolume?) - sound.stopBySoundId(soundId) (stopById deprecated) - sound.stopActive() - sound.stopAll() API: sandkit.api.sound. - sprites.load(spriteId, path, options?) - sprites.loadFromMod(spriteId, relativePath, options?) - sprites.getById(spriteId) - sprites.hideAllPlayerModSprites() - sprites.rotatePlayerModSprites(angle) API: sandkit.api.sprites. - schedule.nextTick(callback) — run on the next game tick - time.getTimeMs() — elapsed game time in milliseconds - time.getTick() — current simulation tick API: sandkit.api.schedule, sandkit.api.time. - settings.get(fieldId) — one field value - settings.getAll() — readonly map of all fields - settings.onChange(callback) — subscribe; returns unsubscribe API: sandkit.api.settings. Register i18n.register during load. Use schedule.nextTick to defer work to the next tick. Load order and timing: The mod lifecycle. - The mod lifecycle — load order and when code runs - Worker mods — worker hooks and events - sandkit.api.hooks — intercept and modify reference - Search — browse all Sandkit namespaces",
    "path": "/guides/runtime",
    "id": ""
  },
  {
    "title": "UI and HUD",
    "body": "sandkit.api.ui is the main-thread API for HUD updates, overlays, dialogs, and React UI in the renderer. Use it from your mod entry script. Workers share only toast — see Worker mods. Full reference: sandkit.api.ui. For reusable React widgets from the mod template kit, see the kit UI overview (separate from Sandkit api.ui). React hooks (useRefresh, useScale, useGameEvent, useHotbar, navigation.useFocusable) and mount APIs (inject, regions, overrides) run in main.js. Build UI with sandkit.react.createElement inside render functions and injected components. Vanilla HUD pieces are registered UI components. Pass a ComponentId string (for example \"resources\", \"hotbar\", \"options\") to update to push new state. Call useRefresh in a React subtree to re-render when those components change. openPauseMenu opens the Esc pause menu (Continue, Save, Load, Options, Exit). There is no separate API to edit the Options screen schema; use inject or overrides.register for custom panels. Show short feedback with toast: ToastOptions controls cooldown, style, and auto-dismiss. LocalizedText accepts plain strings, { key, params? }, or sandkit.api.i18n.translatable values. showTooltip shows a message tooltip near the cursor or target: Modal dialogs return promises. Use them from async handlers or await in hook callbacks. API Returns --- --- alert Promise confirm Promise prompt Promise select Promise Example choice picker: Prefer regions.mount over deprecated overlays. Known OverlaySlot values include \"hotbar\" and \"global\". regions.setVisible hides a region until you call restore() on the returned handle. placement: \"docked\" sits on the hotbar; \"raised\" sits above panels such as Filter Config. inject mounts a React component at a ComponentId slot and returns an unmount function. overrides.register wraps a built-in component — useful to add content beside Resources or Hotbar without replacing vanilla logic. hotbar.createBankSource adds extra action banks. Pair it with components.ActionSlot in a region mount. getBankCount, getActiveBankIndex, getActiveSlotIndex, and getSlotKeyLabel work outside React. components.Panel, components.Button, and components.ActionSlot match vanilla styling. Use them inside regions.mount render functions or injected components. navigation.useFocusable registers a focusable element in a scope. navigation.useFocusScope sets scope priority, default focus, and back handling. getControllerFocusClass returns the focus-ring class for controller input. Hook Purpose --- --- useScale Current UI scale factor useGameEvent Subscribe to sandkit.api.events in UI code useRefresh Re-render when listed components update hotbar.useHotbar Hotbar bank and slot state - The mod lifecycle — when entry runs - sandkit.api.ui — full namespace - sandkit.api.ui.regions — region mounts - sandkit.api.ui.hotbar — hotbar banks and slots - sandkit.api.ui.components — Panel, Button, ActionSlot - sandkit.api.ui.navigation — controller focus - sandkit.enums.ComponentId — HUD component ids - Official Sandkit API — host docs",
    "path": "/guides/ui",
    "id": ""
  },
  {
    "title": "Worker mods",
    "body": "Simulation logic runs in worker threads. Mods that hook element updates, grid mutation, or other sim-side behavior need a workerEntry script. API reference: sandkit.api.worker. Worker types: WorkerSandkitApi in @sandustry-modding/types/worker. Add workerEntry to modinfo.json: If the mod folder has worker.ts, the mod template build sets \"worker.js\" when this field is omitted. A mod still needs at least one capability (entry, workerEntry, overrides, provides, or map). Worker-only mods are valid when workerEntry and worker hooks are enough. See modinfo.json reference. The host injects sandkit into workerEntry the same way as entry. Worker and main sandkit.api surfaces overlap but are not interchangeable. Prefer declarations under worker/ in this package. Do not assume main-thread-only methods exist in workers. Thread Type Docs ------ ---- ---- Main (main.js) sandkit.api (full SandkitApi) sandkit.api Worker (worker.js) WorkerSandkitApi sandkit.api.worker Main thread has UI, player, and building helpers workers lack. Workers have hooks, events, grid, elements, and other sim namespaces. Some APIs pass SharedArrayBuffer data between main and workers. Read member docs before you cache buffer views across frames. Search: Search → sandkit.api.worker. Worker patches target js/simulation-worker.js (and other worker bundles). Use the same atomicGroup on paired main and worker patches when both must apply together. See Patching with patches.json. npm run dev hot-reloads main.js in the renderer. Restart the game after worker.js or patch changes. - The mod lifecycle - sandkit.engine — internal engine API (prefer sandkit.api when both exist) - Mod template",
    "path": "/guides/worker-mods",
    "id": ""
  },
  {
    "title": "World simulation",
    "body": "Sandustry simulates sand, liquids, terrain, and world items on a fixed cell grid. Mods read and change that grid through sandkit.api namespaces on the main thread or in simulation workers. Each grid cell stores a packed cell id for empty space, solid terrain , or a falling element . Inspect cells with grid.isCellEmptyAtCell, grid.isTerrainAtCell, elements.getTypeAtCell, and terrains.getTypeAtCell. Elements carry matter categories (solid, liquid, gas, powder, and others) on their definition. Terrains carry hit points, excavation rules, and optional drops when destroyed. API: sandkit.api.grid, sandkit.api.elements, sandkit.api.terrains. sandkit.api.grid covers grid size, reads, fog, redraw, and area scans. Main thread only: mutate, revealFogAtCell, redrawAroundCell, forEachCellInCircle, and forEachCellInRectangle. Workers expose reads, reportActivityAtCell, excavateAtCell, and getDimensions — see sandkit.api.grid (worker). On the main thread, direct elements.createAtCell and terrains.replaceAtCell calls are deferred . Reads in the same frame still see the old grid until mutations apply. grid.mutate batches writes through a writer with writer.elements and writer.terrains. Each side exposes createAtCell, replaceAtCell, and removeAtCell. Details: grid.mutate. In worker code, call elements.createAtCell and terrain helpers directly — mutations apply immediately. Register custom content on the main thread with elements.register and terrains.register. Resolve ids with getTypeById / getIdByType, patch with updateDefinition, and add tooltips with elements.addInteractionInfo. sandkit.api.maps.getActive() returns the active custom map (main and workers). Main thread also has getAvailable(), start(mapId), and getArtifactLocations(). See sandkit.api.maps and sandkit.api.maps (worker). Pickups are world items with pixel positions, separate from grid cells. Also: pickUp, remove, getAll, and getById. API: sandkit.api.pickups. sandkit.api.reactions.registerContact registers pairwise element recipes when two types touch. Pass inputA, inputB, outputA, outputB, and optional orientation. API: sandkit.api.reactions. API Role --- --- sandkit.api.excavation Named dig profiles via registerProfile sandkit.api.patterns Pattern matrices with createCircle and excavateAtCell sandkit.api.grid Single-cell dig with excavateAtCell Use hooks.modify(\"excavation:prepare\", …) on the main thread to swap profiles for a tool or projectile. sandkit.api.fire.canBurnElementAtCell and burnElementAtCell handle ignition. Main-thread burns are deferred; workers burn immediately — sandkit.api.fire (worker). sandkit.api.raycast.castFromWorld traces a ray in world pixels and returns a hit or null. API: sandkit.api.raycast. sandkit.api.world is a deprecated alias for grid-related helpers and nested pickups. Use sandkit.api.grid and sandkit.api.pickups instead. Replace world.runWhenSimulationIdle with grid.mutate. Element updates and other sim-side logic run in worker threads. Mods that hook that behavior need workerEntry and worker-scoped APIs. Read Worker mods before you add worker hooks. Worker mutations: sandkit.api.elements (worker), sandkit.api.terrains (worker). - Worker mods — workerEntry and WorkerSandkitApi - The mod lifecycle — when main and worker scripts run - sandkit.api.grid — grid reads, mutate, fog, and iteration - Search — browse all Sandkit namespaces",
    "path": "/guides/world",
    "id": "",
    "deprecated": true
  },
  {
    "title": "JSON Schema files",
    "body": "Generated from @sandustry-modding/types/configs (ModInfo, BundlePatchesFile, and WorkshopJson in src/configs/). Prefer the official Sandkit docs when a schema and the game disagree. After GitHub Pages publishes docs/, use these raw schema URLs: File Schema URL ---- ---------- modinfo.json https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json patches.json https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json workshop.json https://sandustry-modding.github.io/SandustryTypes/schemas/workshop.json Point $schema at the URL for the file you edit.",
    "path": "/schemas",
    "id": ""
  },
  {
    "title": "`modinfo.json`",
    "body": "",
    "path": "/schemas",
    "id": ""
  },
  {
    "title": "`patches.json`",
    "body": "The game loads a bare array . For inline $schema, wrap the list (editors only — unwrap to a bare array before shipping, or map the schema by path): A bare [ ... ] array also validates. You can instead bind the schema by path (for example VS Code json.schemas) and keep the game array form in the file.",
    "path": "/schemas",
    "id": ""
  },
  {
    "title": "`workshop.json`",
    "body": "Created by the in-game publisher or npm run publish after the first Steam Workshop upload. Do not hand-edit publishedFileId. Import the same shapes from the npm package: See configs for the full type reference. From the package repo root: npm run validate fails when committed schemas do not match the TypeScript defs.",
    "path": "/schemas",
    "id": ""
  }
];
