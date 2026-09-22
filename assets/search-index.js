window.SMT_SEARCH_INDEX = [
  {
    "title": "Changelog",
    "body": "All notable changes to this project are documented in this file. The format is based on Keep a Changelog, and this project adheres to Semantic Versioning.",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Added",
    "body": "- Standalone /tools/ pages, including a .save metadata editor at /tools/map/. - Docs OKF tab opens a live graph viewer for the Open Knowledge Format bundle.",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Changed",
    "body": "- The /tools/map/ save editor is metadata-first. Terrain paint is optional and collapsed. - The OKF graph viewer starts on domain indexes, groups nodes by domain, and keeps cross-domain links out of the layout so the map is readable. - The OKF viewer fills the viewport on small screens. The detail panel resizes from the split edge. - Generate writes API pages, schemas, and search assets into the sibling docs site clone (../docs). - This package no longer keeps a docs/ tree.",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Added",
    "body": "- Domain guides for world, factory, energy, player, UI, progression, entities, runtime services, and engine vs public API - sandkit.api.ui.select and related dialog, region, override, hotbar, and component APIs - npm run docs:links checks markdown links against docs pages and heading ids - Docs sidebar Settings toggle hides deprecated API members and search hits - Full API page heading ids use hyphens so the id is not printed after the member name",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Changed",
    "body": "- Generated API members use a request-style card (signature, argument table, description) with the site gold and orange colours - Argument table union types use an HTML pipe so the table does not show a backslash - Deprecated member callouts sit directly below the member heading. - Hook-id maps use a small heading and a TypeScript fence for the args type. Deprecated hook ids use the same Deprecated marker as other members. - npm run generate overwrites docs/api/ pages in place and does not delete that folder - The current in-page heading uses the gold header colour - In-page TypeDoc hashes are rewritten to ?id= heading links - Docs sidebar lists direct pages. On an API namespace page it also lists that namespace and its child namespaces. - Search is the place to open generated Sandkit API pages. Empty query lists names and one-line descriptions. Nested members stay on the namespace page and in typed search.",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Removed",
    "body": "- TypeDoc References re-export lists at the bottom of generated API pages - TypeDoc Namespaces child lists at the top of generated API pages Child namespaces stay in the sidebar. - TypeDoc See headings that only link Official docs. - docs/modules.md alias page. Old /modules URLs still open Search. - Accidental docs/api/ media.search.md copy of the Search page. https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.6.0",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Added",
    "body": "- ElectronBridge and related types for the renderer preload bridge (@sandustry-modding/types/electron, deep imports via @sandustry-modding/types/electron/ ; ambient electron, ElectronBridge, ElectronLogLevel, and ElectronPlatform on @sandustry-modding/types; full @param / @returns JSDoc on each bridge method) - Modding guides under docs/guides/ (getting started, lifecycle, manifest, patches, workers, Workshop) - docs/electron-bridge.md — English overview of the renderer preload bridge with links to the generated api/electron.md reference - WorkshopJson type for workshop.json (@sandustry-modding/types/configs) - scripts/namespace-summaries.json — one-line descriptions and worker flags for each sandkit.api namespace - scripts/api-catalog/overrides.json — namespace copy, official→declared aliases, and expected missing members - npm run generate:api-catalog — build scripts/generated/api-catalog.json and docs/generated/api-gaps.md from overrides, official HTML, and declarations",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Changed",
    "body": "- Split electron declarations into focused modules under src/electron/ (bridge, platform, workshop, local-mods, and related files) - ModInfo.entry is optional when another manifest capability is declared (texture-only, map-only, and similar mods) - Docs home page and sidebar link to guides; site title and description updated - API namespace index (docs/modules.md) shows stats, descriptions, method counts, and worker badges per namespace - Namespace summary copy in scripts/namespace-summaries.json rewritten for clarity - docs:api runs generate:api-catalog first; method counts use the catalog (nested members and re-exports included) - npm run release pushes the release branch, publishes to npm, pushes tag v , and creates a GitHub release from CHANGELOG.md https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.5.0",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Added",
    "body": "- Sandkit 0.5.6 API surface: - api.terrains.meltAtCell(cellX, cellY) (main and worker) - api.events event building:removing (fires before building:removed) - Worker intercept hook fire:terrain:burn (requires guard.terrainType) - resource:collection:prepare feedback value \"reduced\" - ElementDefinition.metaColor (discovery and lexicon label color as 0xRRGGBB) - ElementDefinition.isGrabbable and ElementDefinition.isTransportable (grabber and conveyor) - JSON Schema files for modinfo.json and patches.json under docs/schemas/ (GitHub Pages URLs; see JSON Schema) - npm run docs:schemas generates those schemas from src/configs/ via ts-json-schema-generator; validate checks they are not stale - ConfigSchemaChoice.description / descriptionKey (same help fields as number and boolean) - Optional ModInfo.$schema for editor schema association (ignored by the game) - Optional BundlePatchesDocument ($schema + patches) so editors can attach a schema URL; bare arrays still validate - BundlePatch.occurrence (\"all\" or a 1-based index) from the game patch loader - Official Sandkit HTML archive script (npm run docs:archive-sandkit) writing Markdown under docs/official-api/",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Fixed",
    "body": "- Generated modinfo.json schema rejected $schema and choice settings that set descriptionKey https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.4.0",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Added",
    "body": "- npm run release script: changelog/registry/auth checks, validate, then npm publish (optional --dry-run) - src/configs/ types for modinfo.json and patches.json (@sandustry-modding/types/configs), with JSDoc on every key - Stronger structure definition fields: tooltipHover, spanTiles, linkedClearance, spritesheet/ui render blocks - Stronger TechDefinition fields used by tech nodes (cost, unlocks, currencyType, branch) - JSDoc @example blocks on many Sandkit members (main, worker, and configs) - Prebuilt search index (docs/assets/search-index.js) so API search works without a runtime crawl - Nested namespace roots in the docs sidebar (sandkit, sandkit.api, worker, engine, react)",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Changed",
    "body": "- Official @see links use a short “Official docs” label that deep-links to Sandkit HTML sections - Docs search ranks full runtime paths (sandkit.api.settings.get()) instead of local member names only - Move Full API reference to the bottom of the docs root nav block - Drop the page TOC plugin and the nested docs/api/ sidebar.md in favor of one site sidebar https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.3.1",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Fixed",
    "body": "- Deep package imports such as @sandustry-modding/types/sandkit/engine (Node exports matches one path segment; map file and index.d.ts targets under src/) - Ship root CHANGELOG.md and LICENSE in the npm tarball - Document ambient setup with /// (do not list this package under compilerOptions.types)",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Added",
    "body": "- npm run validate gate: declaration typecheck, unit tests, and packed-tarball consumer probes https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.3.0",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Changed",
    "body": "- Move declaration sources into src/ (src/sandkit, src/worker, src/shared, src/global.d.ts). Package subpaths such as @sandustry-modding/types/sandkit/engine stay the same - Show local names for API member headings in the API reference (full runtime path stays under each heading) https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.2.0",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Added",
    "body": "- Official Sandkit API coverage from sandustry.com/sandkit.html: api.entities, api.pipes, api.factory, api.game, api.blueprints, api.pickups, api.grid.mutate, and related worker surfaces - JSDoc @see links back to the official Sandkit page on documented members",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Changed",
    "body": "- Canonical mutation names match official docs (createAtCell, grid.mutate, getTypeById, and similar). Old names stay as @deprecated aliases ( WhenIdle, api.world, getTypeFromId, and similar) https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.1.1",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Changed",
    "body": "- Export subpaths (./ ) so mods can import declaration modules such as @sandustry-modding/types/sandkit/engine https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.1.0",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Changelog.Added",
    "body": "- Initial public release of @sandustry-modding/types - TypeScript declarations for main-thread sandkit (sandkit/api, sandkit/engine, sandkit/enums, sandkit/react) - Worker-thread declarations under worker/ (WorkerSandkitApi) - Shared base shapes under shared/ for main and worker reuse - Ambient sandkit free variable and type aliases via global.d.ts - API reference generated from the declarations",
    "path": "/Changelog",
    "id": ""
  },
  {
    "title": "Sandustry Modding",
    "body": "Community docs for Sandustry mods: Sandkit API reference, domain guides, the TypeScript mod template kit, and an OKF viewer for the game knowledge bundle. Browser tools live under Tools, including a save editor for .save metadata. Install types as @sandustry-modding/types. Project setup lives in the mod template README. New to modding? Start with the step-by-step guides: - Getting started — what a mod is, required files, and a minimal example - The mod lifecycle — compilation, load order, events, and hooks - Worker mods — simulation-worker entry and shared buffers - Publishing to Steam Workshop — packaging and workshop.json Sandkit domains: - World and grid — cells, elements, terrains, maps, pickups - Structures and factory — buildings, pipes, recipes, blueprints - Energy and signals — power networks, collector, signal targets - Player and items — inventory, tools, camera, input, placement - UI — HUD, overlays, dialogs, hotbar - Tech and progression — research, upgrades, discoveries - Entities and drones — creatures, projectiles, pickups - Hooks, storage, and assets — events, i18n, sound, sprites - Engine vs public API — sandkit.api, engine, state, enums All guides → - Builds — watch rebuild, Workshop upload, Tailwind - modinfo.ts — typed manifest helpers - configSchema — in-game Options for mods - patches.ts — definePatches and debug patches - Modkit — shared helpers - React — JSX via sandkit.react - UI kit — reusable HUD widgets Open generated Sandkit pages from Search. Empty search lists namespaces. Typed search finds methods and types by live sandkit path. Direct pages: - Electron — host preload bridge (window.electron), not part of sandkit - Overview — when to use the bridge and IPC patterns - API — generated electron reference - Mod files — not runtime sandkit objects - modinfo.json — manifest fields, limits, and capabilities - patches.json — bundle find-and-replace patches - Types — install @sandustry-modding/types, Search, JSON Schema - Full API reference — every namespace on one page Install and browse @sandustry-modding/types on the Types pages. Use Search for namespaces and members. - Tools — standalone browser tools (save editor) - Changelog — types package and docs history - Official Sandkit API — host API from the game - npm package - Mod template — starter mod and setup guide - Official Sandustry wiki From a local SandustryTypes clone next to this site (the mod template puts this repo in docs/): That writes api/, full.md, schemas/, and the search index. It does not overwrite this sidebar.md when kit pages are present.",
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
    "body": "Internal sandkit.engine.api.shadows — shadow map refresh for regions. Internal API. Prefer sandkit.api when a public method exists. Methods take SandkitState as the first argument.",
    "path": "/api/sandkit.engine.api.shadows",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.shadows.refresh()",
    "body": "Argument Type Description --- --- --- state SandkitState Live game state (sandkit.engine.state). cellX number Grid column of the target cell. cellY number Grid row of the target cell. state cellX cellY Recompute the shadow value at one world cell.",
    "path": "/api/sandkit.engine.api.shadows",
    "id": "refresh"
  },
  {
    "title": "sandkit.engine.api.shadows.refreshRadius()",
    "body": "Argument Type Description --- --- --- state SandkitState Live game state (sandkit.engine.state). cellX number Grid column at the center of the region. cellY number Grid row at the center of the region. radius? number Half-width of the square in cells (default 8). state cellX cellY radius? Recompute shadows in a square neighborhood around a cell.",
    "path": "/api/sandkit.engine.api.shadows",
    "id": "refreshradius"
  },
  {
    "title": "sandkit.engine.api.shadows.refreshRect()",
    "body": "Argument Type Description --- --- --- state SandkitState Live game state (sandkit.engine.state). minCellX number Inclusive minimum column. minCellY number Inclusive minimum row. maxCellX number Inclusive maximum column. maxCellY number Inclusive maximum row. padding? number Extra cells expanded on each side before refresh (default 8). state minCellX minCellY maxCellX maxCellY padding? Recompute shadows in an axis-aligned rectangle of cells.",
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
    "body": "Pull the host sandkit ambient into your project with a triple-slash reference. Put it at the top of main.js / worker.js, or in a small ambient .d.ts that your tsconfig / jsconfig includes: That works in .ts and .js (including checked JS with checkJs). Do not list @sandustry-modding/types under compilerOptions.types. That list only loads packages from node modules/@types (for example \"react\" or \"node\"). Deep declaration modules are also available, for example: - Main mod (main.js): use the ambient free name sandkit. Type aliases such as SandkitApi are global; do not import a value binding. - Worker mod (worker.js): type sandkit.api as WorkerSandkitApi. Worker and main APIs overlap but are not interchangeable. - Shared folder: not a runtime namespace. It holds domain shapes and API bases that main and worker modules extend. - Configs folder: modinfo.json and patches.json TypeScript types (@sandustry-modding/types/configs). Not part of the live sandkit object. JSON Schema: https://sandustry-modding.github.io/schemas/modinfo.json and https://sandustry-modding.github.io/schemas/patches.json - Electron folder: renderer preload bridge (@sandustry-modding/types/electron). Ambient electron on @sandustry-modding/types. Docs: Electron bridge. Edit .d.ts files under src/. Regenerate the API reference and JSON Schema after JSDoc or config-type changes. npm run generate merges scripts/api-gen/overrides.json, the official Sandkit API HTML, and src/sandkit/api/ declarations. It writes scripts/api-gen/generated/api-catalog.json, refreshes scripts/api-gen/generated/namespace-summaries.json, and reports gaps in scripts/api-gen/generated/api-gaps.md. Edit namespace descriptions and alias mappings in scripts/api-gen/overrides.json. npm run scrape walks the live sandkit object in a running Sandustry renderer (CDP :9222) and writes scripts/api-gen/generated/runtime-api.json. Start the game with the debug port open (F5 or npm run sandustry from the mod template), load a save, then run scrape from this repo. Guides and the docs site live in sandustry-modding.github.io. Clone that repo as ../docs (the mod template does this during npm run setup). Regenerate the API reference and JSON Schema from these declarations: Output lands in api/ and schemas/ on that clone. npm run generate overwrites those API pages in place. It does not delete api/. Browse namespaces from Search on the docs site. On an API namespace page the sidebar also lists that namespace and its children. The combined page is full.md. npm run docs runs that step, then serves the docs site. npm run docs:links fails when a markdown link does not resolve to a docs page or heading id. npm run validate fails when committed schemas on the docs site do not match src/configs/. npm run docs:archive-sandkit asks for a base file name, then writes official-api/ .md from https://sandustry.com/sandkit.html.",
    "path": "/api/types",
    "id": ""
  },
  {
    "title": "Builds",
    "body": "The game runs main.js as a script body (new Function). The loader wraps the body in an async function and puts sandkit in scope. Bundle with esbuild format: \"esm\" and do not export from the entry — the output must have no import / export. Command debugPatches Sourcemaps Output --------------------- -------------- ---------- ---------------------------------------------------------------- npm run build Omitted Off build/ / only (no OS mods folder, no dist/ links) npm run dev Included Inline OS mods folder while watching; kept unless DEV CLEANUP=true or all npm run dev:release Omitted Off OS mods folder while watching (same cleanup as dev) --game / --debug Included Inline Game mods folder --no-debug forces a release-style bundle even when watch or game flags are set (npm run dev:release uses this). --mod builds one mod folder (repeat --mod for several). npm run dev follows .tmp/dev-mod-selection.json from F5 / dev:pick, and merges companions from .env DEV ALWAYS MODS (see .env.example). Debug builds (npm run dev, --game, --debug) install to the OS mods folder (dist/ links there). npm run build discovers every src/ /modinfo.ts. Use npm run examples or npm run build -- --examples for examples/ /modinfo.ts. Those commands clone SandustryExamples into examples/ when that folder is missing. Debug builds emit inline source maps on main.js (needed for new Function eval). Use --sourcemap to force maps on a release build, or --no-sourcemap to omit them from a debug build. MOD DEBUG is true in dev builds and false in release. All builds alias console to console.ts and inject it so bare console. calls get a [modId] prefix and are written to the game log file. All builds alias modkit/internal/esbuild/console.ts as console and inject it (same pattern as the react alias). Each line goes to DevTools with a [modId] prefix and to window.electron.log (IPC log:write). Debug builds also add console.ts to the source map ignoreList so breakpoints skip the shim when stepping. Use createLogger from @modkit/log when you want a custom scope tag without going through console. The shim uses globalThis.console internally so it does not recurse. The game ships Tailwind v3.4.19 inside bundle.js. That stylesheet is purged: only classes the HUD uses are present. A class such as w-[28rem] has no rule until the mod adds it. Sandkit loads main.js only. There is no CSS file in the mod manifest. The build still has to insert a tag. Import shared @modkit/ui/tailwind.css from the mod entry. Import @modkit/ui/options.css only when you use OptionsSlider / OptionsSliderRow. The kit re-exports those React components from modkit/ui/options/index.ts so esbuild does not pick options.css instead. The build inlines CSS as text (no main.css in the mod folder). The compiled Tailwind sheet is only the utilities this bundle uses : esbuild lists the source files it packed, then Tailwind scans those files. Unused modkit/ui components do not add CSS. Mods that never import those files skip the compile. The insert lives in overlay-hotkey/main.ts (style -tailwind). A renderer hot reload re-inserts the sheet when that code runs again. Restart the game if the overlay does not update. Do not enable Tailwind preflight. The game already resets , ::before, ::after. A second preflight can change the HUD. Live preview.html pages and PNGs live under docs/ui/canvas (not in modkit/ui). Preview utilities are in docs/ui/canvas/ preview/utilities.css.",
    "path": "/builds",
    "id": ""
  },
  {
    "title": "Builds.Verify",
    "body": "Static check against an extracted sandustry/source/dist/js/bundle.js (npm run setup): Selector In the game CSS ------------------ --------------- .flex { Yes .bg-black { Yes .bg-opacity-85 { Yes .w-\\[28rem\\] { No .underline { No In game: 1. Run npm run dev, then npm run sandustry (or F5 ). 2. Press Alt+E . The overlay panel must be 28rem (448px) wide. The help sentence must be underlined. 3. In DevTools, document.getElementById(\" -tailwind\") must exist. When npm run dev stops (Ctrl+C, terminal close, or process exit), it removes the OS mod folders this template built in that watch session only if .env has DEV CLEANUP=true (default false keeps them). Set DEV CLEANUP=all to remove every mod folder in dist/ instead. The dist/ link stays. Use npm run build when you want release staging under build/. npm run dev watches the F5 / dev:pick choice (.tmp/dev-mod-selection.json) plus any companions from DEV ALWAYS MODS in .env / .env.example. DEV MODS is selection (default) or all. Copy .env.example to .env (or run npm run setup). Sandustry writes one folder. Sandustry (all mods) writes all. SANDUSTRY MONITOR picks the display for npm run sandustry and F5 (left, right, primary, or 0, 1, …). Linux uses xrandr and wmctrl. Windows uses PowerShell Screen and --start-maximized. macOS and other OSes ignore monitor selection and use 0,0. See README troubleshooting. If npm run dev is already running, it restarts the bundle when that file changes (unless DEV MODS=all). It does not uninstall other owned OS folders (Workshop items and other local mods stay). Use npm run dev:pick for a keyboard picker before the watch starts. All mods is the first row. Mods are grouped under src and mods . Type to filter the list, Space toggles mods, Enter confirms (All, checked mods, or the highlighted mod). Pass --mod to skip the picker and pin that set. Non-TTY dev:pick uses the last selection, or all mods when none is stored. F5 (VS Code) has two launches. Sandustry shows a Quick Pick of one mod and writes that folder to the shared watch selection. It opens that mod’s Steam test world (worldId = modinfo.id). Other owned OS folders stay installed. Load Game groups by worldId. Each test world uses modinfo.id as worldId and world name , so the left WORLDS list has one row per mod. In-game Save and Autosave for that session use that same worldId ( -autosave-N.save). F5 loads the newest save in that world (meta.timestamp), not only .save. F5 does not change last-played: Continue for your campaign stays on last-played. F5 does not uninstall other owned OS folders. npm run setup and the first F5 create the Steam .save from Empty.save when it is missing and shrink it to 1024×1024. They do not write a .save into the mod source folder. If the Steam test world already exists, F5 does not overwrite it. After CDP :9222 responds, F5 navigates ?db load= . Sandustry (all mods) writes “all mods” and Continues. Keep npm run dev running: it follows the same selection. Both wait until CDP :9222 responds, then attach the debugger to the renderer . They do not rebuild the mod themselves. Restart in the debugger toolbar kills that Electron process and starts a new one, then the renderer attach reconnects — a page reload does not restart workers or re-apply patches. If attach fails or ports linger, press F5 again or run the sandustry:stop task. The watch rebuilds when you save a file in the bundle graph (mod sources and imported modkit/ files), modinfo.ts, or static files under mod/. A Tailwind CSS change queues a second rebuild after the current one finishes, so the next save is not dropped. Restart the game (F5) after worker.js or patches.json changes. Save reload (?db load=) does not re-apply those on Steam. Renderer attach loads source maps from scripts named sandkit-workshop:// /main.js (and from the OS mods folder / dist/). Debug builds rewrite inline maps to file:// sources, add a sandkit loader line offset, set matching sourceURL, and mark the aliased console.ts as ignore-listed so breakpoints resolve to mod source instead of the console shim. npm run publish uses SteamCMD. It uses a dedicated install (downloads Valve’s official archive on first use): - Linux / macOS: /.cache/sandustry-steamcmd/ - Windows: %LOCALAPPDATA%\\sandustry-steamcmd\\ It does not use the Steam client’s steamcmd or Debian /usr/games/steamcmd, which share /.local/share/Steam and clear the login cache when Steam runs. Log into the Steam client as the Workshop item owner first (so publish can read your account name). SteamCMD keeps a separate credential cache under home/ in that folder (a private HOME / USERPROFILE for SteamCMD). The first publish prompts for your Steam password (and Steam Guard if needed), then caches it. Later publishes reuse that cache with short status lines. Full SteamCMD output goes to .tmp/steamcmd-publish.log. In a terminal, npm run publish shows an arrow-key list of src/ mods (not examples/), then a confirm step (Upload / Cancel). The command runs npm run build for that folder. The bundle lands in build/ / (Workshop staging). Staging gets the release bundle plus workshop.json only. Preview images stay under workshop/ and are sent only as SteamCMD previewfile (listing image), not inside the content folder. README.md, CHANGELOG.md, and workshop/screenshots/ stay in the repo. SteamCMD uploads content from build/ /. workshop/workshop.md supplies the Steam description in Markdown; npm run publish converts it to Steam BBCode at upload time. npm run build and npm run dev also copy only workshop.json, and remove leftover README.md, CHANGELOG.md, preview images, and screenshots/ from the game folder. First publish: you do not need workshop/workshop.json or an in-game Workshop create step. If the mod has workshop/preview.png (or preview.gif) and workshop/workshop.md (or modinfo.description), npm run publish sends publishedfileid 0 to SteamCMD, creates the item, then writes src/ /workshop/workshop.json with the new id. Later publishes update that item. workshop.md syntax: / headings, bold , numbered lists (1.), and bullet lists (-). Do not add links or raw URLs — Steam Workshop virus scan rejects them and publish will fail. Legacy workshop.txt (raw BBCode) still works if you keep it instead. Steam change notes come from that mod's CHANGELOG.md (Keep a Changelog). Write them for players: what changed in play, not how it was built. npm run publish uses the section that matches modinfo.version (for example 0.2.0 or [0.2.0] - 2026-08-22). If that heading is missing, it uses Unreleased and warns you to rename the heading to the version. If there is no changelog, it sends the version string. The confirm step prints the full Steam change-notes text before Upload / Cancel. Pushes, pull requests, and manual runs execute .github/workflows/ci.yml on Ubuntu and Windows (Node 24). Each job runs npm ci, npm run build, and a Tailwind example build (--examples --mod overlay-hotkey). --examples clones SandustryExamples into examples/. On Windows , CI also builds a fake Sandustry install under .tmp/ci-sandustry/ (scripts/setup/prepare-ci-game.js), sets SANDUSTRY, and runs npm run setup. That checks Node, links, asar extract, and junctions without Steam. The workflow does not run npm run publish. Publish needs SteamCMD credentials.",
    "path": "/builds",
    "id": ""
  },
  {
    "title": "Mod `configSchema`",
    "body": "configSchema in modinfo.ts defines settings the player edits under Options → Mods . Read values with sandkit.api.settings.get(key). Subscribe with settings.onChange. Put feature switches here instead of hard-coded flags. Canonical showcase: settings. Game validation lives in sandustry/source/workshop-mods.js (validateConfigSchema). The Options UI renders the same three types. The game accepts only these type values: type Control in Options → Mods Value type --------- -------------------------------------------------- ---------- boolean Switch boolean number Number box; range slider when both min and max number choice Select list string There is no free-text string field and no enum field. Use choice when the player picks one of a fixed set of string values.",
    "path": "/config-schema",
    "id": ""
  },
  {
    "title": "Mod `configSchema`.Shared keys",
    "body": "Every field needs: - type — one of the three values above - default — must match the type (and for choice, must match an option value) - labelKey — localization key or plain label Optional: - descriptionKey — localization key or plain help text under the label Field ids must match ^[a-zA-Z][a-zA-Z0-9 .-] $, cannot be reserved, and cannot start with . Max 64 fields per mod.",
    "path": "/config-schema",
    "id": ""
  },
  {
    "title": "enabled",
    "body": "",
    "path": "/config-schema",
    "id": ""
  },
  {
    "title": "volume",
    "body": "Optional min, max, and step (positive finite). default must sit inside min/max when those are set. When both min and max are set, Options shows a range slider next to the number box.",
    "path": "/config-schema",
    "id": ""
  },
  {
    "title": "priority",
    "body": "options is a list of { value, labelKey } objects (1–64). default must equal one value. Each value is a nonempty string up to 128 characters. settings.get / getAll return string number boolean null (ConfigValueV1). Check the type before you use the value. Call isEnabled in main.ts when the mod must respect Mod enabled . The build does not skip the entry for that setting. See utils.md. TypeScript shapes come from @sandustry-modding/types/configs (re-exported by modkit/modinfo.ts). Keep them aligned with the game validator — do not add field types the game rejects.",
    "path": "/config-schema",
    "id": ""
  },
  {
    "title": "Features",
    "body": "TypeScript: Split mods across files in src/ /; esbuild bundles to main.js. React HUD: JSX overlays via the UI kit (sandkit.react). Tailwind: Build injects only the utility classes your bundle uses. Hot reload: npm run dev rebuilds main.js on save. Restart the game for workers and patches. Typed modinfo.ts: Manifest and patches in one file per mod folder. VS Code: F5 launches the game (Linux/Windows). Keep npm run dev running.",
    "path": "/discord-post",
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
    "body": "Step-by-step guides for Sandustry mod authors. These pages focus on mod files, types, and the Sandkit API. For project setup, watch builds, and Workshop upload commands, use the mod template. - Getting started — what a mod is, required files, and a minimal example - The mod lifecycle — compilation, load order, events, and hooks - Worker mods — simulation-worker entry and shared buffers - Publishing to Steam Workshop — packaging and workshop.json - World and grid — cells, elements, terrains, maps, pickups - Structures and factory — buildings, pipes, recipes, blueprints - Energy and signals — power networks, collector, signal targets - Player and items — inventory, tools, camera, input, placement - UI — HUD, overlays, dialogs, hotbar - Tech and progression — research, upgrades, discoveries - Entities and drones — creatures, projectiles, pickups - Hooks, storage, and assets — events, i18n, sound, sprites - Engine vs public API — sandkit.api, engine, state, enums - Search — find namespaces and members by live sandkit path - Full API reference — every namespace on one page - modinfo.json — manifest fields, limits, and capabilities - patches.json — bundle find-and-replace patches - TypeScript types — modinfo.json, patches.json, and workshop.json - JSON Schema — raw schema URLs for editors",
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
    "title": "modinfo.json reference",
    "body": "modinfo.json is the manifest for one mod folder. It tells the loader which scripts to run and which optional assets to apply. TypeScript types: configs: ModInfo. JSON Schema: schemas/modinfo.json. Author either modinfo.json or modinfo.ts. When both exist in the same folder, modinfo.ts wins in the mod template build. The game folder name is id , not name. Field Type Role ----- ---- ---- manifestVersion 1 Manifest schema version. Use 1. id string OS mods folder and Workshop identity (author.mod). name string Display name in Options → Mods. version string Mod version (for example 0.0.1). apiVersion number Sandkit API generation. Use 1. Field Type Role ----- ---- ---- entry string Main-thread script relative to the mod root (main.js). workerEntry string Simulation-worker script (worker.js). Required for worker hooks. At least one capability is required. See Worker mods for workerEntry. Field Type Role ----- ---- ---- description string Short description for Options and Workshop fallback text. author string Author display name. patches string Path to patches.json (default: patches.json at mod root). gameVersion object Declared compatible game version range (minimum, maximum). dependencies string[] Other mod ids that must load first. loadOrder number Sort key (lower loads earlier). configSchema object Options UI fields for player settings. Full field list: configs: ModInfo. Set gameVersion to declare compatibility: - Patch-only mods (bundle rewrites tied to old minified text): set maximum to the last tested game version. - Sandkit API mods (hooks, configOverrides, 0.5.5+): set minimum to \"0.5.5\" or higher. Mods can ship data without executable entry points: - configOverrides — merge into game config - shaderOverrides / textureOverrides — asset replacements - provides — register content ids for other mods - map — custom world map definition See configs for each shape. The mod template documents defineModInfo, modinfo.ts patch exports, and config schema UI. - Getting started - Patching with patches.json - JSON Schema for modinfo.json",
    "path": "/modinfo.json",
    "id": ""
  },
  {
    "title": "Mod manifest (`modinfo.json` / `modinfo.ts`)",
    "body": "Manifest for one mod. Use either JSON or TypeScript. The build supports both. When both modinfo.json and modinfo.ts exist in the same folder, modinfo.ts wins . Author modinfo.json with $schema for IDE validation: Import it from main.ts: Use defineModInfo in modinfo.ts: Or import JSON through the helper: Patch exports can live on modinfo.ts (export { patches } from \"./patches\"). The build writes modinfo.json into dist/ / (and build/ / on npm run build) without $schema. The game folder name is id , not the repo folder and not name . Shapes: @sandustry-modding/types/configs (ModInfo), via modkit/modinfo.ts. Settings UI: configSchema. Bundle rewrites: Patches. Layout: repository README. Canonical starter: src/template/modinfo.json. Settings showcase: settings. Field Type Role ----------------- -------- --------------------------------------------------------------------------------------- manifestVersion 1 Manifest schema. Use 1. id string OS mods folder and Workshop identity. Use author.mod (for example author.template). name string Display name in Options → Mods and the loader. version string Mod version (for example 0.0.1). Steam changenotes match this to CHANGELOG.md. apiVersion number Sandkit API generation. Use 1. The build fails if id or name is missing or blank. Field Type Default / notes ------------------ ------------------------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- entry string Main-thread script. Default in types is main.js. Set \"main.js\". workerEntry string Worker script. If the folder has worker.ts, the build sets \"worker.js\" when this field is omitted. description string Loader / Workshop fallback when workshop/workshop.md is missing. author string Author label. dependencies string[] Other mods by id . Empty list is fine. loadOrder number Load order hint. Lower sorts earlier in host analysis. Entry eval may still follow save/session order. gameVersion ModGameVersion Optional minimum and maximum strings (0.5.5+). Set minimum: \"0.5.5\" when the mod needs new hooks or APIs. Use Steam Workshop Link to Game Version to cap patch mods at 0.5.2. configSchema object Options → Mods fields. Max 64. See configSchema. configOverrides Record Paths under config/. shaderOverrides ShaderOverrides Maps shader IDs to relative .glsl paths (for example sky → shaders/sky.glsl). textureOverrides sheets or path strings Paths under assets/. A sheet needs path, frameWidth, frames, intervalMs. provides ModProvide[] Asset provider bundles. Each entry has kind, id, and textureOverrides (same shape as top-level textureOverrides). map ModMapDefinition Custom map under map/ (blueprints, width, height, spawn, optional unstuck / deployment / bounds / lighting / parallax / colour maps). See Patches. Prefer patches.json at the mod root. patches.ts still works for typed helpers or debugPatches. src/template/modinfo.json is the starter JSON manifest. Use the id field in code when you need the mod id. Do not hard-code a second copy of the id string. workshop/workshop.json is not part of the manifest. It uses schemaVersion: 1 and publishedFileId. See Builds.",
    "path": "/modinfo",
    "id": ""
  },
  {
    "title": "Modkit",
    "body": "Shared kit for Sandustry mods. It includes: - React runtime — sandkit.react wired through modkit/internal/esbuild/react.ts and JSX runtimes - Utils — small helpers (safe, settings, scene checks, retro console, live config) - Integration tests — Node helpers that talk to the extracted game in Chromium (CDP :9224) - UI — shared React components under modkit/ui/. Live canvases and PNGs live under docs/ui/canvas/. - Modinfo helpers — defineModInfo over @sandustry-modding/types/configs (ModInfo) - Patch helpers — definePatches and patch types in @modkit/patches Mods import this folder through the @modkit/ path alias. The game still loads a single bundled main.js (esbuild esm, no entry exports). Do not emit import / export in the output. Sibling mods (for example sandustry-doom-mod) can use a symlink to this folder instead of a copy. Topic Page ------------------ ----------------------------------------------------------------------- Sandkit API types SandustryTypes React and JSX react.md Utils utils.md Live config live-config.md Integration tests test.md Mod configSchema config-schema.md Manifest fields ../modinfo.md UI components ../ui/ Bundle patches ../patches.md - [ ] Move modkit into a published npm package so mods can depend on a versioned release instead of a copied or symlinked modkit/ folder.",
    "path": "/modkit/README",
    "id": ""
  },
  {
    "title": "Live config",
    "body": "Tunable numbers and flags for a mod. The values live on a named globalThis key. The F3 debug overlay edits them. Player Options still use configSchema. Use live config for debug knobs, not for shipped player settings. Call createLiveConfig from main.ts (and worker.ts when workers read the values). Read config.oakTrunkHeight in the function that uses it. Turn on F3 debug overlay in Options → Mods → Dev Tools . Press F3 . The live-config panel is in the top-left. Pick the mod. Change a field. Reset restores defaults. The panel lists every handle registered on globalThis.modkitLiveConfig. Field names in the panel are the raw config keys. Replace the object to overlay defaults: The sim worker has its own globalThis. In worker.ts call handle.get() and handle.listen(api). Edits on the F3 panel write a float64 shared buffer (modkit:live-config: ). Worker get() copies those slots onto the live object. listen still applies modkit:live-config event payloads when they arrive on that thread. Densities and structure shapes that run only at register time still apply at load. createLiveConfig keeps the raw object keys as labels. It groups keys by prefix (debug, pine, oak, wood, compost / dirt / wet, sieve). Chance and grow-start numbers get min 0 and max 1. Override fields when a group or range must differ.",
    "path": "/modkit/live-config",
    "id": ""
  },
  {
    "title": "React runtime",
    "body": "Sandustry exposes React on sandkit.react. The template does not bundle a separate React copy. TypeScript and esbuild resolve react imports to thin shims in modkit/internal/esbuild/. modkit/internal/esbuild/react.ts reads the live runtime: In mod code, write normal React imports: At build time, esbuild maps react → modkit/internal/esbuild/react.ts. TypeScript (tsconfig.json): esbuild (scripts/build/esbuild.config.mjs):",
    "path": "/modkit/react",
    "id": ""
  },
  {
    "title": "`modkit/internal/esbuild/jsx-runtime.ts`",
    "body": "Automatic JSX runtime backed by sandkit.react. Exports Fragment, jsx, and jsxs. When runtime.jsx / runtime.jsxs exist on sandkit.react, those are used. Otherwise the shim falls back to createElement.",
    "path": "/modkit/react",
    "id": ""
  },
  {
    "title": "`modkit/internal/esbuild/jsx-dev-runtime.ts`",
    "body": "Dev runtime exports jsxDEV. When sandkit.react.jsxDEV is missing, it falls back to production jsx from jsx-runtime.ts. The game loads main.js as a plain script body: esbuild settings: Option Value Why ---------- ----------- ------------------------------- format \"esm\" Bare script body (loader wraps) platform \"browser\" Renderer context bundle true One main.js output The build banner states: - Generated output — edit src/ and rebuild - No import / export in the output - sandkit is already in scope Do not rely on ES modules at runtime. All dependencies must be bundled into main.js. esbuild resolves @modkit/... to files under modkit/ (same as TypeScript paths). Example: Put mod UI under src/ /ui/. Import components from @modkit/ui or local files. Register overlays with api.ui.inject from src/ /main.ts. Host widgets (Button, Panel, ActionSlot) wrap api.ui.components so you can write JSX instead of sandkit.react.createElement. See ../ui/ for shared UI components.",
    "path": "/modkit/react",
    "id": ""
  },
  {
    "title": "Integration tests",
    "body": "Node helpers for tests that talk to the extracted game in Chromium. Import from .integration.test.ts only. setupGame() connects once per test file. Later calls in that file reuse the session. The file closes the CDP socket when it finishes so the Node test worker can exit. npm test runs unit files only ( .test.ts, not .integration.test.ts). It does not start Chromium. npm run test:integration: 1. Builds src/ with --debug into dist/. Builds examples/ too when that folder is present (or when you pass --examples, which clones SandustryExamples). 2. Boots sandustry/source/dist in headless Chromium (CDP :9224 ). 3. Waits for boot to finish (game:ready, loading removed, Game scene). 4. Runs every .integration.test.ts with --test-concurrency=1 (async spawn so the host HTTP server keeps serving /mods/... during the run). Use npm run test:integration:view to open a visible Chrome window instead of headless. That script passes --view to the runner. On Linux it needs DISPLAY.",
    "path": "/modkit/test",
    "id": ""
  },
  {
    "title": "Integration tests.Performance",
    "body": "The host is heavy: it boots the full game in Chromium with sim workers and WebGL. To reduce lag on your machine (and on Steam Sandustry): Goal Command --------------------------- -------------------------------------------- Run one mod only nr test:integration template Run one mod with a window nr test:integration:view collector-element Run example samples only nr test:integration --examples Skip the full example build pass a mod folder (or --mod) Local runs: - Use the GPU (SwiftShader only in CI, for screenshot baselines). - Cap navigator.hardwareConcurrency at 4 so vanilla spawns about 2 sim workers (not cores − 2). - Launch Chrome under nice -n 10 and limit raster / renderer processes. - Allow Chrome timer throttling (full frame-rate flags stay on in CI only). - Pause the sim after boot until a test needs live frames. Pass a mod folder name (or --mod ) to build that mod, load only that mod in the host, and run only its integration tests. Repeat folders / --mod to select several. Pass --examples to build every sample and run only examples/ / .integration.test.ts. If the host is not running, setupGame() throws. Run integration files only through npm run test:integration. When the tests finish, the host stops. Do not open Chrome DevTools on that window while the tests run. That steals CDP from the runner. This host does not attach to Steam or F5, and it does not stop them. Item Path / value -------------- ---------------------------------------------------------------------------------------------- Game files sandustry/source/dist (npm run setup) Chrome profile .tmp/sandustry-test-chrome/ Test mods copy .tmp/sandustry-test/mods/ CDP 9224 (Steam / F5 stay on 9222 ) HTTP http://127.0.0.1:4173 with COOP/COEP Window Headless by default; npm run test:integration:view for a visible window Viewport Locked once at host boot (1280×720). :view does not re-apply Emulation metrics per test file It copies every built mod from dist/ (then fills gaps from the OS mods folder) and enables them. --mod copies only those mods. It loads the tracked Void save modkit/test/fixtures/Empty.save with ?db load= (vanilla file name is {id}.save). A harness mod sets globalThis.sandkit. Dev-tools can fetch main.js from /mods/ /. Vanilla HUD textures stay at /mods/ .png from extracted dist/mods/. The host rewrites the served js/bundle.js so assets.getUrl / map blueprints accept HTTP rootUrl (vanilla join allows file: only). sessionStorage.splashShown is set; ?db load= still runs vanilla shader wait. Import @modkit/test from test files only. The esbuild alias rejects a game bundle import. The module also throws if document exists. npm test strips types. Assign constructor arguments to fields in the constructor body. Use import type for type-only imports. Name integration files .integration.test.ts (for example src/template/template.integration.test.ts). Tests that write the same world (for example player position) must run in order. Use describe(..., { concurrency: false }, () = { ... }). Call Role ------------------------------------ --------------------------------------------------------------------------------------------- game.evaluate(fn, ...args) Run fn in the renderer. Arguments must be JSON values. Closures do not capture Node locals. game.waitFor(read, match, options) Poll read in the page until match is true in Node. game.buildStructures(placements) Build several structures in one renderer turn and wait for every anchor. game.buildLayout(layout) Expand a visual fixture diagram into phased structure placements. game.setSimulationPaused(paused) Pause or resume the simulation without opening the in-game pause menu. game.pauseSimulation() Pause the simulation. game.resumeSimulation() Resume the simulation. game.runSimulation(durationMs) Run live simulation for a wall-clock duration, then restore the prior pause state. game.orderedModIds() Return live manifest.id values from the ordered mod list. game.screenshot(options) Capture a PNG of the compositor (WebGL plus DOM). Returns a Buffer. game.withModMain(id, fn) Edit the test-host main.js, then restore the original bytes. game.tryReadModMain(id) Return the test-host bundle, or null. waitFor defaults: 8000 ms timeout, 250 ms interval. Return values from evaluate must be JSON-serializable.",
    "path": "/modkit/test",
    "id": ""
  },
  {
    "title": "Integration tests.Structure fixtures",
    "body": "game.buildStructures(placements) builds a batch of structures and waits for their anchors to appear. Each placement uses cell coordinates and can include options or seeded data. Seeded data is applied after the structure anchor exists, which makes it reliable for custom structure initialization. The helper resumes the simulation while building, then restores its previous pause state. An empty placement list is a no-op. For fixtures that are easier to understand as a diagram, use game.buildLayout(). Each character represents one structure on a 4-cell grid; . leaves a cell empty: Use phases when placement order matters. Every phase is expanded and built before the next phase begins: The top-left character is placed at origin; columns and rows add four cells per step. Use either top-level cells and legend, or phases, but not both.",
    "path": "/modkit/test",
    "id": ""
  },
  {
    "title": "await",
    "body": "The integration host starts with the simulation paused. Use runSimulation() for a bounded behavior check; it resumes the simulation for the requested wall-clock duration and restores the state afterward: For longer workflows, use resumeSimulation() and pauseSimulation() explicitly. setSimulationPaused(value) is useful when a test needs to restore or assert a specific state. These helpers change the engine session state directly and do not open the game’s pause menu. expect(game).toHaveScreenshot(name) captures, then compares against a PNG next to the test file. expect(png).toMatchSnapshot(name) compares a buffer you already captured. Value checks stay on node:assert. Item Value ---------------- -------------------------------------------------------- Baseline folder .integration.test.ts-snapshots/ File name {name}-chromium-{platform}.png Fail artifacts .tmp/sandustry-test-screenshots/ Update baselines npm run test:integration -- --test-update-snapshots Missing snapshot Write the PNG, then fail. In CI, fail without a write. Retry Same as waitFor: 8000 ms timeout, 250 ms interval Capture options: Option Role ------------ ---------------------------------------------- clip CSS-pixel rectangle selector Clip to a DOM node (getBoundingClientRect) mask CSS selectors painted FF00FF before capture path Write the PNG to that path animations \"disabled\" (default) or \"allow\" Compare options: maxDiffPixels, maxDiffPixelRatio, threshold (default 0.2). Game rules: - The host uses SwiftShader only in CI so PNG baselines match across machines. Local runs prefer the GPU. - The test page reports hardwareConcurrency as 4 so vanilla keeps about two sim workers. - Chrome launches under nice -n 10 (Unix) with fewer raster threads. - After boot the host pauses the sim (session.paused) until a test needs live frames. - animations: \"disabled\" pauses the sim (session.paused), then waits on a short timer. It does not open the pause menu. It does not use requestAnimationFrame (pause can stop the page frame loop and hang CDP). - Prefer selector or mask for HUD clocks and other live UI. Kit smoke: modkit/test/game.integration.test.ts. Template: src/template/template.integration.test.ts. Samples: every examples/ / .integration.test.ts.",
    "path": "/modkit/test",
    "id": ""
  },
  {
    "title": "Utils",
    "body": "Small helpers under modkit/utils/. Import from @modkit/utils. Runs fn in a try/catch. On success, returns the result. On error, returns fallback (default null). Use it when Sandkit calls may throw or return unexpected shapes (for example settings or scene queries). Reads a boolean from sandkit.api.settings.get(\"enabled\"). When the setting is missing or not a boolean, it defaults to true. Define custom fields in configSchema. See config-schema.md. Call isEnabled in main.ts or a feature hook when the mod must respect Mod enabled . The build does not skip the entry for that setting. It does wrap the main entry in try / catch and logs failures with console.error. Returns false on main-menu and intro scenes; true everywhere else. Uses sandkit.api.scene.getActive() and sandkit.enums.Scene when available. Falls back to numeric scene ids 1 (MainMenu) and 2 (Intro) when enums are missing. Registers a game on the in-world Retro Console via sandkit.engine.api.retroConsole.registerGame. Returns false when retroConsole.registerGame is not available (logs a warning). Returns true after a successful registration. Types re-exported from @modkit/utils: Type Role ------------------------- ------------------------------------ RetroConsoleGame Game definition passed to the engine RetroConsoleGameOptions Options on the game object RetroConsoleApi Engine retro console API shape RetroConsoleDisplay Display interface RetroConsoleInput Input interface RetroConsolePixel Pixel type Full shapes live in @sandustry-modding/types (sandkit/engine) and the Sandkit API reference. Tunable debug numbers on a globalThis key, with an F3 live-config panel. See live-config.md. File Exports ------------------ ------------------------------------------- index.ts Re-exports all public API safe.ts safe settings.ts isEnabled scene.ts inGame retro-console.ts registerRetroGame and retro console types live-config.ts createLiveConfig and live-config registry",
    "path": "/modkit/utils",
    "id": ""
  },
  {
    "title": "OKF viewer",
    "body": "Browse the Open Knowledge Format bundle as a graph. The first view shows domain boxes and index nodes only. Pick a domain box to show the concepts in that domain. Use Expand all when you want the full map. Pick a node to read the concept. Agents still start at llms.txt and Consume.",
    "path": "/okf/README",
    "id": ""
  },
  {
    "title": "API gaps",
    "body": "Track signature and surface drift across the three API layers agents use. Baseline: game 0.5.6 , apiVersion 1 . Signature truth: official Sandkit HTML. Layer Role When it lies --- --- --- Official HTML Signature truth for public methods Lags a new game build until the host page updates Live sandkit / sandkit.engine.api Runtime object in mod entry and probes CDP evaluate may not see ambient sandkit; state.sandkit.engine often absent @sandustry-modding/types + /api/ .md Browse aid and tsc Generated from types + HTML ingest; can include undeclared live aliases or miss new members When layers disagree on a public method, follow official HTML. When official HTML is silent but live exposes a member, treat it as undocumented live until the host page lists it. Verified CDP :9222 evening pass via webpack 46781 (FH) when ambient sandkit is undefined in evaluate. Surface Official HTML Live / extract OKF domain --- --- --- --- sandkit.api.processing Not a top-level namespace heading Present on engine bag: registerGrower, registerShaker, registerKineticPress Factory processing sandkit.api.world Deprecated alias of api.grid Present on engine bag (getDimensions, pickups, WhenIdle, …) Grid, world alias, and pickups sandkit.api.tech.getStatusById — undefined on engine tech keys; use isResearched / isLocked or parseTechTree Tech status shared.upgrades mirror — false ; store.upgrades is truthy on probed save Upgrades Official HTML marks these; generated /api/ pages may still list them. Prefer the canonical name in mod code. Canonical Deprecated live alias OKF pointer --- --- --- api.grid api.world (partial — also owns pickups, WhenIdle) World API api.processing.register api.structures.addProcessor Processing api.pickups.remove destroy World items api.tech.registerDefinition addDefinition Tech api.terrains hitPoints hp Terrains api.ui.regions.mount api.ui.overlays.register Overlay API AtCell / WhenIdle suffixes Shorter At / bare names on several bags Domain concept for the namespace Full alias tables live in domain concepts — do not duplicate every row here. Call Drift Proof --- --- --- api.factory.getProcessCount() No-arg call throws (Cannot read properties of undefined (reading 'shared') on 0.5.6 FH) Factory engine.api.factory.getProcessCount(state) State-first; returned 4000 on dev-tools autosave probe Engine API Public entities.spawnAtWorld Arity 3 on api Worker entry API Engine entities.spawn Arity 4 (state first) Worker entry API These affect how you read the API, not what the game ships. Issue Workaround --- --- Ambient sandkit undefined in MCP evaluate script on 0.5.6 debug.state, webpack module 46781 (FH) — Evaluate state.sandkit.engine absent on probed saves Same FH hook or domain extract notes Worker sandkit.api not reachable on :9222 Renderer proxy + extract — Worker attach window.sandkit vs ambient sandkit Both can work in mod entry; evaluate scope differs — Globals Symptom Action --- --- Member on live object, missing from /api/ page Check official HTML; file gap in SandustryTypes Member on /api/ page, absent on older game build Pin mod target version; see Version alignment sandkit.engine.api namespaces Types under src/sandkit/engine/; many are engine-only — Engine API - api.grid vs api.world alias behavior — documented in World API. - Worker official namespace list — Worker entry API. - Public api.processing registration surface — Factory processing. - Live-only table rows above — re-probed on CDP :9222 with FH hook (2026-09-15). - TechStatus.Unknown / Hidden — reserved enum values; vanilla assigns only 0–2 (TechStatus). - Namespace routing - How to read Sandkit - Version alignment",
    "path": "/okf/api/gaps",
    "id": "",
    "deprecated": true
  },
  {
    "title": "Generated API docs on this site",
    "body": "This page describes the generated Sandkit reference tree on this site. It does not duplicate the 171 namespace pages under /api/. Follow /okf/consume.md for OKF load order.[^consume] Path Role --- --- /api/ .md One Markdown page per Sandkit namespace or enum group (171 files today)[^docs-agents] /full.md Every generated namespace concatenated on one long page[^site-readme] /types/ Install, Search, and JSON Schema docs for @sandustry-modding/types[^types-readme] /types/search.md Interactive search over namespace names and member paths[^types-readme] /assets/search-index.js Search index rebuilt with the API pages[^types-readme] Electron bridge, modinfo.json, and patches.json also have generated or hand-maintained reference pages outside the core sandkit tree. See the site sidebar under Types for those entries. Declarations live in SandustryTypes.[^docs-agents] Run npm run generate in that repo when it sits next to this site clone (the mod template places this repo in docs/). That step merges .d.ts files, scripts/api-gen/overrides.json, and the official Sandkit HTML into catalog output.[^types-readme] It writes into api/, full.md, schemas, and the search index. Do not hand-edit files under /api/ or /full.md in this site repo. Report gaps in SandustryTypes instead. Load the smallest page that answers your question. Do not open /full.md by default. You know… Open… --- --- Top-level sandkit.api /api/sandkit.api.md A nested bag, for example grid /api/sandkit.api.grid.md Engine surface /api/sandkit.engine.md or a child under sandkit.engine.api. An enum group A page under /api/sandkit.enums. Only a member name or path fragment /types/search.md, then follow the link to one /api/ page Start from Search with an empty query to list namespace names and short descriptions.[^types-readme] Type a path such as sandkit.api.ui.toast to jump to the owning namespace page. Read that single page and stop when you have the member you need. Use /full.md only when you must scan many unrelated namespaces in one pass, for example diffing or wide inventory work. Prefer Search plus one /api/ page for normal mod tasks. Generated pages add JSDoc text, cross-links, and community type detail. They can include declared members that are not yet listed on sandustry.com/sandkit.html. They can also lag a new game build until SandustryTypes is regenerated. Always confirm runtime signatures on the official HTML. See /okf/api/how-to-read-sandkit.md for the full read order. - OKF index - How to read Sandkit - Official Sandkit reference [^consume]: Load order — /okf/consume.md. [^docs-agents]: Regeneration policy — /AGENTS.md. [^types-readme]: Generator commands — /types/. [^site-readme]: Browse section — /.",
    "path": "/okf/api/generated-docs",
    "id": ""
  },
  {
    "title": "How to read Sandkit",
    "body": "Use this playbook when you need a method signature, parameter shape, or runtime namespace path. Follow /okf/consume.md first if you have not loaded the OKF bundle yet.[^consume] Treat https://sandustry.com/sandkit.html as signature truth for the live Sandkit API.[^official-sandkit] Read parameter names, return types, and namespace headings from that page before you write mod code. Do not invent APIs, parameters, or return shapes. When this site and the official HTML disagree, follow the official HTML. After npm run setup in the mod template repo, open .tmp/Sandkit - Sandustry Modding API.html at the template repo root.[^template-agents] That file is a local copy of the official page for offline search and agent context. It lives in the template repo, not on this docs site. This OKF bundle does not ship that HTML file. The community site mirrors declarations into browse-friendly Markdown. Use /types/search.md to list namespaces or search by live sandkit path. Open one namespace page under /api/ when you know the bag you need, for example /api/sandkit.api.md or /api/sandkit.api.grid.md. See /okf/api/generated-docs.md for what those files are and how they are built.[^generated-docs] Use generated pages as a browse aid and index. Cross-check any signature against the official HTML before you rely on it. Do not load /full.md unless you truly need every namespace on one page. Install @sandustry-modding/types for editor autocomplete and compile-time checks in the mod template. Those declarations can run ahead of or behind the game build you target. When types and official HTML disagree, follow the official HTML.[^types-package] Use /types/ for install and ambient reference setup. 1. Name the runtime path you need, for example sandkit.api.grid.get. 2. Confirm the signature on sandustry.com/sandkit.html. 3. Optionally open the matching /api/ page or Search hit on this site for cross-links and JSDoc text. 4. Optionally match the path in @sandustry-modding/types for TypeScript in the template. 5. Stop when the official page answers the question. - OKF index - Generated docs - Namespace routing - API gaps - Official Sandkit reference - Types package reference [^consume]: Load order — /okf/consume.md. [^official-sandkit]: Official host API — https://sandustry.com/sandkit.html. [^template-agents]: Local snapshot path — template AGENTS.md. [^generated-docs]: Generated tree — /okf/api/generated-docs.md. [^types-package]: Secondary types — /okf/references/types-package.md.",
    "path": "/okf/api/how-to-read-sandkit",
    "id": ""
  },
  {
    "title": "API",
    "body": "Sandkit reference concepts for agents. Prefer one concept per question. - How to read Sandkit - Generated docs - Namespace routing — sandkit.api → OKF domain map - API gaps — official HTML vs types vs live drift",
    "path": "/okf/api/index",
    "id": ""
  },
  {
    "title": "Namespace routing",
    "body": "Use this table to pick one OKF domain after consume. Generated member lists: /api/sandkit.api. .md or /types/search.md. sandkit.engine.api. twins are documented under Internals when they are state-first or engine-only. Prefer public sandkit.api. in mod code. sandkit.api namespace OKF domain Concept entry --- --- --- grid World Grid, world alias, and pickups world (deprecated) World Same — alias of grid mutate/dims + pickups, WhenIdle elements World Elements terrains World Terrains excavation World Grid and elements reactions World Grid and elements fire World Grid and elements maps World Maps API constants World World API (physics, cell sizes) workers World Workers and scheduling hooks World Workers and scheduling events World Workers and scheduling schedule World Workers and scheduling patterns World Grid and elements random World Grid and elements raycast World Grid and elements sandkit.api namespace OKF domain Concept entry --- --- --- structures Factory Structures structureBehaviors Factory Conveyors processing Factory Processing pipes Factory Pipes factory Factory Factory level and processes authorization Factory Authorization zones building Factory / Player Building mode, Placement config blueprints Factory Blueprints collector Factory / Energy Collector, Gold collector queue Factory Queue sandkit.api namespace OKF domain Concept entry --- --- --- energy Energy sandkit.api.energy signals Energy sandkit.api.signals resources Energy sandkit.api.resources Engine-only twins (engine.api.energy, signal runtime Jd.Q): Engine energy, Engine signals. sandkit.api namespace OKF domain Concept entry --- --- --- player Player Player state player.inventory Player Inventory and items player.buildings Player Building mode tools Player Tools and grabber input Player Input camera Player Camera action Player Action items Player Items cooldown Player Player Engine-only coloring tools: Coloring. sandkit.api namespace OKF domain Concept entry --- --- --- ui UI HUD and overlays ui.regions UI Overlay API ui.hotbar UI Toolbox ui.components UI Overlay API ui.navigation UI Overlay API ui.overrides UI Overlay API scene UI DOM and scenes i18n UI Screens sound UI Feedback effects UI / World Feedback (VFX); worker hooks in World workers rendering UI HUD sprites UI HUD lights UI / World Background layers sandkit.api namespace OKF domain Concept entry --- --- --- tech Progression Tech tech.conservatory Progression Conservatory upgrades Progression Upgrades discoveries Progression Discoveries progression Progression Objectives Built-in tech grid data (not a public API): webpack module 77135 — Tech tree structure. sandkit.api namespace OKF domain Concept entry --- --- --- entities Entities Entities projectiles Entities Projectiles pickups Entities World items Drones and launchers are engine-first: Drones, Launchers. sandkit.api namespace OKF domain Concept entry --- --- --- game Internals Engine API (start is a mutator) gameConfig Internals Engine config mods Internals Mods host settings Internals State bags shared Internals State bags, Shared buffers assets Internals Mods host storage Internals State bags utils API Generated /api/sandkit.api.utils.md triggers World Grid and elements time Internals State bags Official worker namespaces are a subset of the main table. See Worker entry API for the exact list. Worker facade also exposes deprecated api.world — prefer api.grid on workers. Path OKF domain Concept entry --- --- --- sandkit.engine.api Internals Engine API sandkit.engine.config / extend Internals Engine config and extend sandkit.engine.state Internals Same object as sandkit.state — State bags sandkit.enums Domain enums Each domain enums.md or generated /api/sandkit.enums. sandkit.react UI Overlay API Webpack shortcut to engine.api on CDP: module 46781 export FH — Webpack module ids. - API gaps - How to read Sandkit - Generated docs",
    "path": "/okf/api/namespace-routing",
    "id": ""
  },
  {
    "title": "Consume Sandustry OKF",
    "body": "Follow this order when you need Sandustry modding knowledge from the public docs site. Read /okf/AGENTS.md first when you write OKF content. OKF is game-only — not mod template, modkit, or third-party mods. 1. Read llms.txt at the site root. 2. Read this consume playbook. 3. Pick one domain index that matches your task. 4. Open one concept file from that domain. 5. Stop when the concept answers your question. 6. Open more concepts only when the first file is not enough. For a live Sandustry session, pick the Live domain first. Use MCP namespace sandustry for attach, evaluate, and UI automation. Do not kill Sandustry. Ask the user for a hard reload. Choose the domain that best fits the work. Do not read every domain index up front. Task focus Domain index --- --- Live CDP attach, evaluate script, void-world batches Live Sandkit namespaces, methods, types API Mod template setup, lifecycle, publishing Mod template README and /guides/getting-started.md — not OKF Grid, elements, terrains World Structures, pipes, factory Factory Energy networks, signals Energy Player, inventory, items Player HUD, overlays, UI kit UI Tech, upgrades, progression Progression Drones, projectiles, entities Entities Engine, workers, internals Internals Official API, types, template links References Treat the official Sandkit API as signature truth for runtime shapes. Use OKF and generated pages here as indexed guides. Do not invent APIs or parameters. - index.md in each folder lists concepts for that folder. - log.md records OKF bundle changes. - Only the root OKF index carries okf version frontmatter.",
    "path": "/okf/consume",
    "id": ""
  },
  {
    "title": "sandkit.api.energy",
    "body": "Main thread only. Live keys for Early Access 0.5.5. Method Role --- --- registerType(structureId, type, options?) Register conductor or storage on a structure type. addAtCell(cellX, cellY, amount, options?) Add energy into the network at the cell. Returns amount added. consume(amount, options?) Take from the global energy pool (store.resources.energy). allOrNothing optional. consumeExcludingNetworkAtCell(cellX, cellY, amount) Consume from networks except the one at the cell. getNetworkAtCell(cellX, cellY) Connected conductor/storage nodes. Official type uses cellX / cellY; engine returns { x, y, type } (same numbers). Empty [] when the start cell has no registered energy structure or only excludeFromNetwork storage (for example goldBattery). getNetworkFreeCapacityAtCell(cellX, cellY) Free storage capacity in that network (sums maxEnergy - storedEnergy on reachable storage nodes).",
    "path": "/okf/energy/api-energy",
    "id": ""
  },
  {
    "title": "`addAtCell` partial fill (0.5.6 extract)",
    "body": "Internal storage charge (Pt) adds min(requested, maxEnergy - storedEnergy) per node. addAtCell returns requested - remaining after the BFS pass (return r - p in bundle). Example: network free capacity 400 , call addAtCell(cell, 1000) → return 400 , storedEnergy increases by 400 only.",
    "path": "/okf/energy/api-energy",
    "id": ""
  },
  {
    "title": "sandkit.api.energy.`energyType` (types vs runtime)",
    "body": "EnergyAddOptions.energyType and EnergyRegisterTypeOptions.energyType exist in SandustryTypes only. The 0.5.6 shipping bundle has zero energyType string references — confirmed in bundle.js grep and live state.sandkit.mods.energy JSON (bundleHasEnergyType: false on CDP :9222). Vanilla uses one global pool (store.resources.energy, shared.energy). No structure data rows carry an energyType field on the probed saves. Multi-network mods would need a future engine build or mod hook; there is no vanilla multi-pool sample to collect.",
    "path": "/okf/energy/api-energy",
    "id": ""
  },
  {
    "title": "Live network sample (CDP `:9222`, 0.5.6)",
    "body": "Dev-tools save after placement (webpack FH.structures.build, Block terrain under snap cells): - electricityConnector at (264, 260) and (268, 260) . - getNetwork(264, 260) → [{ x: 264, y: 260, type: \"electricityConnector\" }, { x: 268, y: 260, type: \"electricityConnector\" }]. - goldBattery registers with excludeFromNetwork — not included in graph traversal; query from a battery cell returns [] unless a conductor shares the cell. Engine twin (sandkit.engine.api.energy) uses shorter names: add, getNetwork, getNetworkFreeCapacity, consumeExcludingNetwork. See Engine energy. Storage nodes keep structure.data.storedEnergy and structure.data.maxEnergy (default 16 on goldBattery tiles, 100 on powerBrick). - Official Sandkit API — signature truth for runtime shapes. - sandkit.api.energy — generated member page. - Networks and signals — domain overview.",
    "path": "/okf/energy/api-energy",
    "id": ""
  },
  {
    "title": "sandkit.api.resources (energy)",
    "body": "Fluxite is out of scope. Energy-related methods only. Live keys for Early Access 0.5.5. Method Role --- --- adjustEnergy(amount, options?) Delta on the global pool. Syncs shared.energy[0] when the SAB exists. deferUi: true skips immediate HUD refresh. updateEnergy(amount, options?) Deprecated alias of adjustEnergy. refresh(resourceId) Refresh a resource display (not energy-specific). collectFluxiteAtCell Not energy — ignore unless the user asks about fluxite. Prefer sandkit.api.energy.consume and addAtCell for network logic. Use adjustEnergy for direct pool changes. HUD Energy row reads store.resources.energy (mirrors shared.energy[0]). See HUD and overlays. - Official Sandkit API — signature truth for runtime shapes. - sandkit.api.resources — generated member page. - Shared state — shared.energy SAB layout.",
    "path": "/okf/energy/api-resources",
    "id": ""
  },
  {
    "title": "sandkit.api.signals",
    "body": "Main thread only. Official HTML (0.5.5) lists four public entry points. Runtime detail is in Engine signals runtime. Path Method Role --- --- --- sandkit.api.signals.targets register(structureTypeOrId, apply) Receiver handler when incoming links change. sandkit.api.signals.interactables register(structureTypeOrId, handler) Override structure interact (click) behavior. sandkit.api.signals registerSenderType(structureId, getOutput?) Register a structure type as a signal sender. sandkit.api.signals setOutputAtCell(cellX, cellY, on) Set sender output at a structure origin cell. targets.register wraps sandkit.engine.api.signals.targets.register. The handler receives: - structure — structure instance at the receiver cell. - payload — official shape { combined, inputCount, onCount }. combined is true when any incoming link to that receiver is on. inputCount is incoming link count. onCount is how many of those are on. interactables.register handler receives structure only. Use for custom toggle or lever logic. Call api.structures.update(structure) when mutating structure.data. registerSenderType optional getOutput(structure) returns boolean output. Vanilla senders use this. Mods can also drive output with setOutputAtCell. setOutputAtCell is a mutator . Do not call in read-only probes. Types may still list StructureType, Structure, SignalTargetPayloadV1 as unknown. Prefer the official payload above. There is no public sandkit.api.signals.link. Linking is in-game UI or engine signals.link. - Official Sandkit API — signature truth for runtime shapes. - sandkit.api.signals — generated member page. - Networks and signals — domain overview.",
    "path": "/okf/energy/api-signals",
    "id": ""
  },
  {
    "title": "Clipboard signal links",
    "body": "Engine: sandkit.engine.api.clipboard.getSignalLinks() (state-first). Returns the link array on the build clipboard, or null. Related: get, set(structures, signalLinks?), getHistory, selectFromHistory, activate, clear. Copy tool also stashes links in session.action.customData.signalLinks. Array of: from is sender structure origin cell. to is receiver structure origin cell. Coordinates are structure grid cells (same space as structures.getAtCell). Keyed by sender \"x,y\". Values are { x, y, on }[] pointing at receiver cells. No from field inside entries. Undo and move capture uses originalSignalLinks and removedSignalLinks on structure events. Blueprint save (engine.api.blueprints.save) copies getSignalLinks() into stored blueprint metadata. Do not paste full link arrays into chat. Report counts and one sample entry only. store.mods.signals.links on a save with six sender buckets: Sender key Receiver entries --- --- \"712,2432\" [{ x: 720, y: 2432, on: false }] \"720,2432\" [{ x: 724, y: 2432, on: true }] \"724,2432\" two receivers, both on: true \"728,2428\" [{ x: 732, y: 2428, on: false }] \"732,2428\" [{ x: 720, y: 2432, on: false }] \"728,2416\" [] (sender with no outgoing links) hideWires was false. Session mods.signals.links shares the same object reference as the store copy. - Engine signals runtime — session links map layout. - Factory: structures and pipes — structure origin cells and placement.",
    "path": "/okf/energy/clipboard",
    "id": ""
  },
  {
    "title": "Engine energy",
    "body": "Internal: sandkit.engine.api.energy (state-first, pass state as arg 0). Prefer public sandkit.api.energy in mods. Engine Public wrapper --- --- registerType registerType add addAtCell consume consume consumeExcludingNetwork consumeExcludingNetworkAtCell getNetwork getNetworkAtCell getNetworkFreeCapacity getNetworkFreeCapacityAtCell Also on engine only: addBatch. Registry written by registerType. Live on this save: Structure id Type Notable options --- --- --- powerBrick storage priority: 1, maxEnergy: 1000, spritesheetThresholds: [0,1,600,1000], onCharge goldBattery storage excludeFromNetwork, canConsume, spritesheetThresholds: [0,1,8,16], onConsume steamTurbine conductor — electricityConnector conductor — snowmaker conductor — state.sandkit.mods.energyPriorities — live [0, 1] (storage drain order). Networks walk orthogonal neighbors at 4-cell spacing (structure snap grid). Nodes with excludeFromNetwork (goldBattery) are omitted from graph traversal but still store energy locally. sandkit.engine.api.energy.add(state, cellX, cellY, amount, options?) returns a number : total energy actually stored in the network. Each storage node receives min(remaining, maxEnergy - storedEnergy); the function returns amount - leftover after the queue walk. Public sandkit.api.energy is main thread only . Simulation workers still bundle engine.api.energy (getNetwork, storage drain, onConsume / onCharge). Workers write shared.energyChange with Atomics when environment.context !== Main (charge FX cell coords in slots [2]/[3]). goldBattery storedEnergy / onConsume logic runs on workers; main thread mirrors HUD from shared.energy. CDP :9222 cannot evaluate script inside worker globals — see Worker attach. Do not call energy.add from probes unless the user asks. Registered on energy.registerType options. Engine calls them during network charge and consume passes.",
    "path": "/okf/energy/engine-energy",
    "id": ""
  },
  {
    "title": "Engine energy.`onCharge(state, structure, amountCharged)`",
    "body": "Arg Type Role --- --- --- state game state First arg to all engine APIs structure structure instance Cell origin, data.storedEnergy, data.maxEnergy amountCharged number Energy delta added this tick (after cap vs maxEnergy) Called from internal Ot after storedEnergy and spritesheet index update. If omitted, engine plays default charge light at structure center. Vanilla powerBrick: creates charge lights at 4 (x+2), 4 (y+2). Registry flags on state.sandkit.mods.structures.powerBrick: disallowSelection: true, disallowPick: true. FH.structures.isUnlocked(state, \"powerBrick\") is false on the dev-tools save even when store.player.tech.copperMold is true. The power brick is not a normal build-menu placement. Player-facing obtain path (i18n + bundle): unlock copperMold tech, place a Copper Mold , fill it with liquid copper — the mold converts into a powerBrick storage tile. Copier paste with copiedStructure is blocked: engine build returns null when disallowSelection is set and copiedStructure is passed (0.5.6 bundle guard). goldBattery and electricityConnector accept copiedStructure paste on the same save. Webpack probe mutator FH.structures.build(state, { x, y }, \"powerBrick\") does place instances (bypasses player unlock and copier rules). Use that only on probe saves — not as a gameplay unlock path. No debug.admin.run command grants powerBrick or skips the mold fill step.",
    "path": "/okf/energy/engine-energy",
    "id": ""
  },
  {
    "title": "Engine energy.`onConsume(state, structure, consumeAmount)`",
    "body": "Arg Type Role --- --- --- state game state First arg structure structure instance Storage node being drained consumeAmount number Requested drain from this node (min(poolRemaining, storedEnergy)) Return: optional number. When returned value < consumeAmount, the shortfall is restored to structure.data.storedEnergy and not deducted from the global energy pool. Vanilla goldBattery: consumes up to four florinol cells in the 4×4 footprint per call; returns count of cells removed (creates florinolSoil terrain). canConsume blocks drain when the player overlaps the structure. - sandkit.api.energy — public wrapper surface. - Engine and workers — when to use engine vs public API.",
    "path": "/okf/energy/engine-energy",
    "id": ""
  },
  {
    "title": "Engine signals runtime",
    "body": "Public surface: sandkit.api.signals (targets, interactables, registerSenderType, setOutputAtCell). Full runtime is engine-internal (Jd.Q in bundle). Persisted slice: store.mods.signals. Field Live Role --- --- --- links object Wire graph (same ref as runtime). hideWires boolean Live false on this save. Built at init. Live counts on this save (0.5.6): 17 sender types, 12 receiver types, 5 interactable handlers, 6 link buckets. Probe note: senderTypes and receiverTypes are Set instances. Use .size, not Object.keys() (returns [] on Sets). Field Role --- --- links Map keyed \"senderX,senderY\" to { x, y, on }[] receiver cells. pendingLink In-progress link tool { x, y } or null. senderTypes Set of structure type ids that can emit. senderOutputGetters Map boolean . receiverTypes Set of types with targets.register handlers. receiverApply Map . incomingByReceiver Derived index \"rx,ry\" to link entries. dirtyReceivers Receivers needing recompute (loop cap 128). lastAppliedCombined / lastAppliedInputCount / lastAppliedOnCount Dedup caches. interactableHandlers Structure interact overrides. onTargetRegistered Internal hook when a receiver type registers. init, registerReceiverType, set, setAll, getCombinedAt, getIncomingCountAt, getOnCountAt, link, unlink, unlinkAllAt, hasLink, getAnchorPoint, drawWireSegment, plus link-mode interactAtCell. registerSenderType, registerInteractable, and set output are exposed on sandkit.api.signals as registerSenderType, interactables.register, and setOutputAtCell. Event: signals:userChanged (undo history). Combinational loop toast when dirtyReceivers does not drain. Full id lists with English display names: Signal structure catalog. Live counts (0.5.6): 17 senders, 12 receivers, 5 interactables. Logic gates appear in both sender and receiver sets. Sensors, signalSwitch, and signalButton are send-only; signalLamp is send-only. Sprite and gate logic uses getCombinedAt. - Clipboard signal links — blueprint and clipboard link shapes. - Probe — safe session signal counts.",
    "path": "/okf/energy/engine-signals",
    "id": ""
  },
  {
    "title": "Gaps",
    "body": "Confirmed absent (not a live-sample gap): - energyType multi-network pools — types-only in SandustryTypes; 0.5.6 bundle and live mods.energy registrations have no energyType key (sandkit.api.energy) Documented elsewhere: - Sender, receiver, and interactable id lists with English names — Signal structure catalog - onCharge / onConsume callback argument shapes — Engine energy - store.mods.signals.links on-disk shape — Clipboard signal links (live sample with six buckets) - getNetworkAtCell populated shape — sandkit.api.energy (engine { x, y, type }; live connector pair on CDP :9222) - energy.addAtCell partial-fill return — sandkit.api.energy (extract return requested - remaining) - Worker-thread energy simulation scope — Engine energy (internal engine on sim workers; no public worker API; CDP worker attach blocked) Documented (CDP :9222, 0.5.6 dev-tools save): - powerBrick copier paste blocked by disallowSelection; intended path is copper mold + liquid copper — Engine energy. - FH.structures.build places powerBrick, goldBattery, and electricityConnector on probe saves when terrain exists under the snap cell. Heat coupling: World: grid and elements. Signal tool clicks: UI: HUD and overlays.",
    "path": "/okf/energy/gaps",
    "id": ""
  },
  {
    "title": "Gold, collector, and power overlap",
    "body": "Resource HUD / store Shared SAB Purpose --- --- --- --- Energy store.resources.energy shared.energy[0] Power pool for buildings, siphon, costs with currencyId: \"energy\". Gold store.resources.gold shared.gold[0] Economy currency (collectors, selling). Event resources:goldChanged. Gold is not electrical energy. Only document gold when it feeds power (goldBattery) or shares worker-sync patterns. Structure type goldBattery. Registered as energy storage with excludeFromNetwork: true. It does not join conductor graphs. - Counts florinol (and gold-element) tiles in its 4×4 footprint. - Charges global energy via the same shared.energy path as other storage. - Uses shared.energyBatteryDirty per tile for worker/main sync (1 dirty, 2 locked while updating). - Charge FX uses rate limit key goldBattery:charge. sandkit.api.collector — pickup value for gold-bearing cells. shared.collectorGoldCount is a per-tile density map for collector structures, not energy. Tile admission (which elements may enter Collector tiles) is still Gold and liquidGold only in 0.5.5, even when collectable.value is set. See Factory: structures and pipes. Only overlap with energy: both use multithreaded SAB sync patterns similar to energyChange and goldChange. Element type gold in the world is distinct from store.resources.gold. Collectors and batteries bridge elements to currencies. - Shared state — gold, goldChange, collectorGoldCount SABs. - Engine energy — goldBattery registry options.",
    "path": "/okf/energy/gold-collector",
    "id": ""
  },
  {
    "title": "Energy",
    "body": "Power networks, collector behavior, and signal targets. - Networks and signals - API: energy - API: signals - API: resources (energy) - Shared state - Engine energy - Engine signals runtime - Signal structure catalog - Clipboard signal links - Gold, collector, and power - Gaps - Probe",
    "path": "/okf/energy/index",
    "id": ""
  },
  {
    "title": "Networks and signals",
    "body": "Load this concept when your mod registers energy network types, adds or consumes power, updates the global energy pool, handles collector gold value, or wires signal targets to structures.[^energy-guide] The energy guide states that sandkit.api.energy and sandkit.api.collector run on the main thread only. It separates electrical power from gold economy and collector structures. It lists read versus write members across energy, resources, collector, and signals. It documents conductor and storage network registration with optional capacity and energyType. It covers addAtCell, global consume, and network queries at a cell. It explains updateEnergy for the player energy store and fluxite collection. It walks through collector value queries, collectability checks, and pickup notification. It shows signal target registration with payload fields that toggle processing or other behavior. It points to factory registration for collector structures. - Official Sandkit API — signature truth for runtime shapes. - How to read Sandkit — how to use generated member pages under /api/. - Generated namespaces named in the guide: - sandkit.api.energy - sandkit.api.resources - sandkit.api.collector - sandkit.api.signals - API: energy — sandkit.api.energy live keys and storage node data. - API: signals — public sender, target, and interactable registration. - API: resources (energy) — global pool adjustEnergy and HUD sync. - Shared state — shared.energy, energyChange, and gold SABs. - Engine energy — state.sandkit.mods.energy registry and engine method map. - Engine signals runtime — session and persisted signal state. - Clipboard signal links — blueprint vs runtime link shapes. - Gold, collector, and power — two currencies and goldBattery overlap. - Gaps — open runtime questions. - Probe — safe MCP reads for energy and signals. - Factory: structures and pipes — structure registration and structures.processing.setEnabledAtCell for signal handlers. - Engine and workers — energy APIs are not available in workerEntry. [^energy-guide]: Primary guide — /guides/energy.md.",
    "path": "/okf/energy/networks-and-signals",
    "id": ""
  },
  {
    "title": "Energy probe",
    "body": "Read-only inspection via live Sandustry MCP evaluate script. Return JSON-serializable data only. sandkit is ambient in MCP evaluate script. Check typeof window.sandkit. debug.state === sandkit.state. - debug.state.shared SAB heads: energy, energyChange, energyBatteryDirty, gold, goldChange, collectorGoldCount — use { len, head: Array.from(arr.slice(0, 8)) }, never dump full tile grids. - debug.state.store.resources.energy and .gold. - debug.state.sandkit.mods.energy keys and { type, optionKeys } per structure id. - debug.state.session.mods.signals counts: senderTypes.size, receiverTypes.size, Object.keys(links).length. - One sample link: first links bucket key and first entry { x, y, on }. - debug.state.store.mods.signals keys (links, hideWires). - sandkit.api.energy, signals, resources, collector key lists via Object.keys (when sandkit is in scope) or webpack module source string. - sandkit.api.energy.addAtCell, consume, consumeExcludingNetworkAtCell. - sandkit.api.resources.adjustEnergy and updateEnergy. - sandkit.api.signals.targets.register, interactables.register, registerSenderType, setOutputAtCell (writes handler maps and sender state). - Engine signal link, unlink, set, setAll, registerReceiverType. - sandkit.engine.api.clipboard.set, activate, clear. - Gaps — open runtime questions. - Shared state — SAB field layout.",
    "path": "/okf/energy/probe",
    "id": ""
  },
  {
    "title": "Shared state (energy-adjacent)",
    "body": "debug.state.shared holds worker-safe SABs. Do not dump full tile arrays (length 921600 on this map). Field Type (live) Role --- --- --- energy Uint32Array(1) Global energy counter. Index 0 mirrors store.resources.energy. energyChange Uint32Array(4) Worker to main sync for energy updates.",
    "path": "/okf/energy/shared-state",
    "id": ""
  },
  {
    "title": "Shared state (energy-adjacent).energyChange layout",
    "body": "Index Role --- --- 0 Last synced energy total. 1 Pending worker change count (Atomics). 2 Source cell X (optional charge FX). 3 Source cell Y (optional charge FX). Main thread writes store.resources.energy and refreshes HUD when energy[0] diverges from energyChange[0]. Field Type (live) Role --- --- --- energyBatteryDirty Uint8Array(tileW × tileH) Dirty flags for goldBattery structures. Values 0 idle, 1 dirty, 2 processing. Not a generic power-grid map. Field Type (live) Role --- --- --- gold Uint32Array(1) Player gold currency (sell / shop). Mirrors store.resources.gold. goldChange Uint32Array(4) Same 4-slot pattern as energyChange for worker gold pickup sync. collectorGoldCount Uint8Array(tileW × tileH) Per-tile gold element count under Collector structures (max 255). Economy adjacency only. Gold and energy are separate currencies. goldBattery converts element gold in its footprint into global energy . See Gold, collector, and power. - Engine and workers — shared bag and thread boundaries. - Probe — safe SAB read patterns.",
    "path": "/okf/energy/shared-state",
    "id": ""
  },
  {
    "title": "Signal structure catalog",
    "body": "Vanilla signal wiring ids and English names mined from sandustry/source/dist/js/bundle.js (0.5.6 extract). Runtime registration: Engine signals runtime. Structures registered with signals.registerSenderType. Logic gates appear in both sender and receiver sets. Structure id English name Notes --- --- --- signalSensor Signal Sensor ON when 4×4 cell above is full signalPulseSensor Pulse Sensor Emits a pulse on change signalPresenceSensor Presence Sensor ON when player is nearby signalGate Door Also a receiver and interactable signalSwitch Signal Switch Send-only toggle signalButton Signal Button Send-only momentary signalLamp Signal Lamp Send-only indicator signalBuffer Buffer Send and receive signalRepeater Repeater Send and receive signalNor NOR Gate Send and receive signalAnd AND Gate Send and receive signalOr OR Gate Send and receive signalNand NAND Gate Send and receive signalXor XOR Gate Send and receive signalXnor XNOR Gate Send and receive signalNot NOT Gate Send and receive signalToggle Toggle (T-FlipFlop) Send, receive, and interactable Structures registered with engine registerReceiverType (wrapped by signals.targets.register). Structure id English name --- --- signalGate Door signalLamp Signal Lamp signalBuffer Buffer signalRepeater Repeater signalNor NOR Gate signalAnd AND Gate signalOr OR Gate signalNand NAND Gate signalXor XOR Gate signalXnor XNOR Gate signalNot NOT Gate signalToggle Toggle (T-FlipFlop) Send-only types: signalSensor, signalPulseSensor, signalPresenceSensor, signalSwitch, signalButton. Structures registered with signals.interactables.register. Player use overrides default building behavior. Structure id English name Role --- --- --- swarmConsole Aura Extractor Swarm console UI signalGate Door Open/close and default-open mode signalSwitch Signal Switch Flip on/off signalButton Signal Button Momentary pulse signalToggle Toggle (T-FlipFlop) Flip stored state - API: signals — public registration surface. - Clipboard signal links — persisted wire graph.",
    "path": "/okf/energy/structure-catalog",
    "id": ""
  },
  {
    "title": "Creature instance fields",
    "body": "Built-in critters register through sandkit.engine.api.entities.registerType. Each spawn(id, x, y) returns the initial instance object. Capture fields (capturing, captureProgress) are set later by corraller flow. Common fields across types: id, type (string typeId), x, y, vx, vy, targetX, targetY, targetTimer, phase, maxSpeed, particleAccum, age. Flying light-bug. Extra fields at spawn: Field Notes --- --- orbitCX, orbitCY Orbit center (starts at spawn position). orbitAngle Random initial angle. orbitRadius Random between configured min/max pixel radii. Spawner config: fogType Fog, chance 1.25e-6, cluster radius 20, extra 1–2. Underground water-burst critter. Spawn uses random velocity scaled to 20% of chosen speed. No orbit fields. Spawner: fogType FogWater, chance 2e-4, cluster extra 1 only. Ground weaver (display name Redweaver in i18n). Snapped to cell center at spawn. Extra fields: Field Notes --- --- direction 0–3 grid step direction. stepTimer Countdown to next step. stepsLeft Steps remaining in burst. cellX, cellY Grid coords. flashTimer, cooldownTimer Animation / action timers. onInit resets particleAccum, age, capture flags, and ensures direction/step timers exist. Display name Voltblub in i18n. Grounded electric critter. Extra fields: Field Notes --- --- grounded Starts false. anchorSet Starts false. sparkCooldown From factory helper at spawn. Type def sets stopLaunchOnBlockedCell: true and petHeartOffsetYPixels: 30. Large flying void critter. Extra fields: Field Notes --- --- mode Starts at 0. scanTimer Randomized scan interval. cooldownTimer Action cooldown. faceDir -1 or 1. targetCX, targetCY Secondary target center (initialized 0). F3 Game tab creature buttons use i18n display names. Spawn calls use the string typeId from registerType. F3 / i18n label Live typeId sortOrder (extract) --- --- --- Shinelet shinelet 1 Lumling lumling 2 Redweaver resinWeaver 3 Voltblub eyes 4 Voidgrazer voidgrazer 5 No separate redweaver, voltblub, or title-case ids exist in the extract. - Live entities and capture - Entity gaps",
    "path": "/okf/entities/creature-fields",
    "id": ""
  },
  {
    "title": "Drones and projectiles",
    "body": "Load this concept when your mod spawns or removes critters, registers or fires projectiles, manages world pickups, or must know what has no public Sandkit namespace (drones, portals, teleport zones).[^entities-guide] The entities guide covers live world objects through public main-thread namespaces only. It documents entity lookup, spawn, launch, capture, and collect by runtime id and type id. It states hauler and sweeper drones have no public API and live on internal sandkit.engine.api.drones. It walks through projectile registration, blueprints, spawn at angle, and instance removal. It lists pickup types, spawn with optional light, collect, and deprecated destroy alias. It notes portals and teleport zones are engine-only and lists public alternatives for player and element movement. It directs sim-side grid logic to worker hooks instead of these namespaces. - Official Sandkit API — signature truth for runtime shapes. - How to read Sandkit — how to use generated member pages under /api/. - Generated namespaces named in the guide: - sandkit.api.entities - sandkit.api.projectiles - sandkit.api.pickups - sandkit.api.player - sandkit.api.hooks - Entity store keys — store.drones, store.projectiles, store.worldItems, session caches. - Live entities and capture — public and engine entity APIs, creature typeIds, spawners. - Creature instance fields — per-typeId spawn fields from extract. - Drones — hauler, digger, sweeper store model and internal spawn. - Projectiles — shot registration, blueprints, and store fields. - World items — pickups, prefab cache, and api.pickups. - Teleport zones and portals — grid zones and map markers. - Swarm console and sweeper — convergence minigame and sweeper selection. - Launchers — structure element launchers (not critter toss). - Enums — DroneType, ProjectileType, PickupType. - Gaps — facts not yet confirmed in live probes. - Probe — safe read-only MCP scripts. - World: grid and elements — grid pickups and element teleport between cells. - Player: inventory and items — player teleport and movement alternatives to engine zones. - Engine and workers — internal sandkit.engine.api.drones and worker thread boundaries. [^entities-guide]: Primary guide — /guides/entities.md.",
    "path": "/okf/entities/drones-and-projectiles",
    "id": ""
  },
  {
    "title": "Drones",
    "body": "store.drones is a flat array. Each drone: Field Type Notes -------- ---------------- ---------------------------------------------------------------- id number From store.meta.nextId.drone. type number or string Built-in: sandkit.enums.DroneType. Sweeper uses mod string id. x, y number World pixels. data object Type-specific state bag.",
    "path": "/okf/entities/drones",
    "id": ""
  },
  {
    "title": "Drones.`DroneType` (built-in)",
    "body": "Name Value ------ ----- Digger 1 Hauler 2",
    "path": "/okf/entities/drones",
    "id": ""
  },
  {
    "title": "Drones.Hauler `data` (from bundle)",
    "body": "Field Notes --- --- origin { x, y } world pixels — line start. target { x, y } or drop-off rect anchor. lineId, lineName Hauler line identity (defaults to drone id / generated name). materializeStart store.meta.time at spawn. movingToTarget, currentSpeed, pauseTimer Movement state (defaults applied on load). inventory Grabber-style cell grid (elements[], amount). retiring Set when drone finishes haul and heads to despawn. dissolveStart Set during line removal dissolve (excluded from hauler ambience count). Sprite toggles hauler / haulerClosed when inventory.amount 0.",
    "path": "/okf/entities/drones",
    "id": ""
  },
  {
    "title": "Live hauler mid-sim (CDP `:9222`, 0.5.6)",
    "body": "Dev save irishbruse.dev-tools-autosave-1. Spawned with FH.drones.spawn(state, 2, 1040, 1040, data) (in-memory probe; not saved). After one sim tick: inventory.elements is a 16-slot number array after spawn (not an empty array). movingToTarget flipped to false immediately after the first tick.",
    "path": "/okf/entities/drones",
    "id": ""
  },
  {
    "title": "Built-in `DroneType.Digger`",
    "body": "Enum value 1 exists on sandkit.enums.DroneType. No vanilla drones.spawn call uses DroneType.Digger in the 0.5.6 extract. The digger tool fires ProjectileType.Digger shots instead.",
    "path": "/okf/entities/drones",
    "id": ""
  },
  {
    "title": "Live `DroneType.Digger` instance (CDP `:9222`, 0.5.6)",
    "body": "In-memory probe via FH.drones.spawn(state, 1, 1000, 1000, data) on dev-tools save (not persisted): Spawn accepts the same origin / target world-pixel pair as hauler data. No vanilla save in the probe set contained a pre-existing type: 1 row.",
    "path": "/okf/entities/drones",
    "id": ""
  },
  {
    "title": "Drones.Sweeper (mod)",
    "body": "Item id sweeperDroneLauncher. Drone type is the mod string sweeper (not DroneType). data holds origin, circular target, movement timers, and grabber inventory: Field Notes --- --- origin Launch cell center in world pixels. target { center: { x, y }, radius } selection disc. currentTarget Active pickup target or null. movingToTarget, currentSpeed, pauseTimer Same pattern as hauler. initialPhase, initialDirection, initialDistance, maxInitialDistance Post-launch wander phase. inventory { element, hasItem } single-element grabber. returningToPlayer Recall phase flag. Uses sandkit.config(\"sweeperDrone\", …) for limits. UI: hotbar overlay hints (mods sweeperDrone keys).",
    "path": "/okf/entities/drones",
    "id": ""
  },
  {
    "title": "Live sweeper mid-sim (CDP `:9222`, 0.5.6)",
    "body": "Same dev save and probe session. Spawned with FH.drones.spawn(state, \"sweeper\", 1060, 1060, data): Campaign save b93kqvog6zn-exitsave had one vanilla reconDrone (type: \"reconDrone\") with hover/movement data, not hauler or sweeper. sandkit.engine.api.drones — internal , state-first. Method Role ---------------------------------------------- ----------------------------------------------- spawn(state, type, x, y, data?, spriteOpts?) Push to store.drones, refresh DroneAdminList. kill(state, drone) Remove from store and sprites. No public sandkit.api.drones. Mods use items with onDroneUpdate hooks on sandkit.mods.items[type]. ComponentId.DroneAdminList (18) — management screen for haulers. See HUD and overlays overlay table. Each frame: onDroneUpdate mod hook, else hauler sim. Sprite position = drone.x/y - camera. - Entity store keys - Swarm console and sweeper - Enums",
    "path": "/okf/entities/drones",
    "id": ""
  },
  {
    "title": "Live entities and capture",
    "body": "Capture critters, swarm particles, and mod-registered entity types. sandkit.api.entities — main entry only (not in Worker reference). Official signatures have no state-first arg . Method Role -------------------------------------------- ------------------------------------------ getById(entityId) One live instance by runtime id. getAllByType(entityTypeId) All instances of a string entityTypeId. spawnAtWorld(entityTypeId, worldX, worldY) Create instance (unsafe without user ask). remove(entityId) Despawn (unsafe). launch(entityId, angleRadians, speed?) Set motion and launch timers (unsafe). startCapture(entityId) Begin corraller capture (unsafe). collect(entityId) Force conservatory collect (unsafe). There is no public getAll(). For read-only probes, use getAllByType per known typeId, or engine.api.entities.getAll(state) below. Reference: sandkit.html — api.entities. sandkit.engine.api.entities — same domain, state-first on most calls. Still live on 0.5.5. Method Role ------------------------------------------------------------------------- ------------------------------------- getAll(state) All live entity instances. getAllByType(state, typeId) Filter by string typeId. getById(state, entityId) One instance. getAllTypeDefs(state?) / getTypeDef(typeId) Registered type metadata. getSprite(state, entityId) Pixi sprite for one entity. spawn(state, typeId, x, y, data?) Create (unsafe). Optional 5th data. removeById(state, entityId) Despawn (unsafe). launch(state, entity, angle, speed?) / launchById(state, entityId, …) Launch (unsafe). startCapture(state, entityId) Capture (unsafe). collectById(state, entityId) Collect (unsafe). registerType / registerSpawner Mod registration (unsafe). createLight Attach point light to entity. Prefer public names for mod code. Map ids: public remove/collect/launch take entityId; engine often takes state first. typeId sortOrder Notes ------------- --------- -------------------------------------------- shinelet 1 Small light critter. lumling 2 Flying critter. resinWeaver 3 Ground critter. Display name \"Resin Weaver\". eyes 4 Small swarm critter. voidgrazer 5 Large flying critter. Debug F3 lists \"Redweaver\" and \"Voltblub\" as creature buttons. Those are i18n display names for resinWeaver and eyes — see Creature instance fields. No live voltblub or redweaver typeId exists. Field Type Notes ----------------- ------- ------------------------ id number Runtime id. type string Same as typeId. x, y number World pixels. vx, vy number Velocity (flying types). capturing boolean Corraller vacuum active. captureProgress number 0-1 during capture. lightIndex number? Attached point light. Per-type fields include targetX/targetY, phase, orbitRadius, direction, grounded, mode, etc. Full tables: Creature instance fields. - Live world: api.entities.getAllByType(typeId) or engine.api.entities.getAll(state) — instances you can see and capture. - Inventory: store.creatures[typeId] = { available, found } — conservatory counts. Updated on entity:collected. First find grants conservatory tickets. 1. Corraller tool calls startCapture - sets capturing, captureProgress. 2. On complete - increments store.creatures[typeId], may toast first pickup, emits entity:collected. 3. Entity removed from the live list. registerSpawner(config) — not a callback. Takes one config object; engine stores it keyed by typeId. Field Required Notes --- --- --- typeId yes Must match a prior registerType id. fogType yes Terrain fog cell type candidates must pass before spawn. chance yes Per-cell spawn probability when fog clears. yStartOffsetFromMid yes Minimum Y row (world mid + offset). cluster optional { radius, extraMin, extraMax } — cluster extra spawns near hits. storageKey optional Defaults to typeId; persists chosen spawn cells under storage.ensure(state, key).spawnPositions. Runtime spawner state: internal map entry { config, spawnKeys: Set }. Fog-reveal pass fills spawnKeys, then instantiates via registered type spawn. Prefab entitySpawns also place prop entities at map load. Prop list cached in storage.ensure(state, \"entities\"). Debug display names: Creature instance fields. - Entity store keys - Swarm console and sweeper - Enums - Gaps",
    "path": "/okf/entities/entities",
    "id": ""
  },
  {
    "title": "Entity enums",
    "body": "Live on sandkit.enums (0.5.5). Reference: sandkit.html and node modules/@sandustry-modding/types/src/sandkit/enums/index.d.ts. Autonomous drone kinds in store.drones[].type. Member Value ------ ----- Digger 1 Hauler 2 Sweeper drones use a mod string type, not this enum. store.projectiles[].type. Member Value ------------- ----- Bullet 1 Rocket 2 GrapplingHook 3 Fire 4 Digger 5 Mod 6 Mod projectiles set type: Mod and carry mods payload keyed by registered string id. store.worldItems[].type and pickups.spawnAtWorld first arg. Member Value ---------- ----- Artifact 1 GlyphKey 2 Stratacore 3 Orb 4 String keys in entities and store.creatures: lumling, shinelet, resinWeaver, eyes, voidgrazer. See Live entities and capture. - Drones - Projectiles - World items",
    "path": "/okf/entities/enums",
    "id": ""
  },
  {
    "title": "Entity gaps",
    "body": "Still open (live probes with active entities still needed for some runtime-only paths): - None from the prior entity gap list. Resolved this pass (CDP :9222, 0.5.6): - Live DroneType.Digger drone instances — Drones (FH.drones.spawn(state, 1, …) in-memory probe) - Live getMarkers with GlyphKey unlock — Teleport zones and portals (b93kqvog6zn-exitsave, two portal rows; reconfirmed this pass) - Live hauler / sweeper data mid-sim — Drones (FH.drones.spawn on dev autosave; in-memory only) - Portal static table and runtime marker fields — Teleport zones and portals - Full stratacore id catalog for 0.5.6 — World items (terracortex only in store.stratacores) - F3 debug display name drift (five creatures) — Creature instance fields Resolved earlier (see linked concepts): - Per-creature instance fields — Creature instance fields - Sweeper drone data spawn shape — Drones - registerSpawner config (not a callback) — Live entities and capture - Base launcher velocities — Launchers - prefabWorldItemCache entry shape — World items - Grappling / Fire / Digger projectile attributes — Projectiles - Worker store.projectiles / store.drones (main store; not on worker public API) — Entity store keys Public api.entities has no getAll(): see Live entities and capture. store.gloom.emitterPositions was [] in the prior empty-entity probe save. - Probe",
    "path": "/okf/entities/gaps",
    "id": ""
  },
  {
    "title": "Entities",
    "body": "Drones, projectiles, pickups, portals, and swarm systems. - Drones and projectiles - Store - Live entities and capture - Creature instance fields - Drones - Projectiles - World items - Teleport zones and portals - Swarm console and sweeper - Launchers - Enums - Gaps - Probe",
    "path": "/okf/entities/index",
    "id": ""
  },
  {
    "title": "Launchers",
    "body": "Structure launchers (Up / Left / Right) fling elements from conveyors. Not the same as entities.launch (critter toss). Vanilla defaults live in manager-worker.js embedded transport config (also mirrored to state.sandkit.jsonConfigs.transport). Structure id Velocity (cells/s) Soft drop (cells/s) Schedule pass --- --- --- --- launcherUp (0, -44.4) (0, -30) standard (683 ms cadence) launcherLeft (-44.4, -44.4) (-30, -30) standard launcherRight (44.4, -44.4) (30, -30) standard launcherUpMk2 (0, -88.8) (0, -45) mk2 (341 ms cadence) launcherLeftMk2 (-88.8, -88.8) (-45, -45) mk2 launcherRightMk2 (88.8, -88.8) (45, 45) mk2 Mk2 mod types use engine.api.launchers.registerType with flat velocity / softDropVelocity pairs — see example below. Built-in ids use the table above without a mod registerType call. sandkit.engine.api.launchers.registerType(state, config) — called at mod init. Example config (mk2, live): - upType / leftType / rightType — structure ids registered in sandkit.mods.structures. - velocity — launch speed pair. - softDropVelocity — gentle drop speed. - runTickSharedBufferKey — shared worker buffer for tick sync. Registered types also appear in state.sandkit.registeredLauncherTypes[] (mirror of registrations). - Built-in StructureType.LauncherUp (5), LauncherLeft (6), LauncherRight (7). - Conveyor behavior: sandkit.api.structureBehaviors and engine.api.conveyors.registerType. - Worker trigger launchersMk2 fires on interval to stamp run tick into shared buffer. No public sandkit.api.launchers. Engine-only registration. - Factory: structures and pipes - Gaps",
    "path": "/okf/entities/launchers",
    "id": ""
  },
  {
    "title": "Entity probe",
    "body": "Read-only inspection via sandustry MCP evaluate script. Return JSON only. - sandkit.state.store array lengths and first-item key lists. - sandkit.api.entities.getById, getAllByType (no public getAll). - sandkit.engine.api.entities.getAll(state), getAllByType, getAllTypeDefs. - sandkit.engine.api.teleportZones.getAll getAtCell getById. - sandkit.engine.api.portals.getMarkers(state). - sandkit.engine.api.swarmConsole getters. - sandkit.api.projectiles.getAll(), getById, pickups.getAll(), getById. - sandkit.enums.DroneType, ProjectileType, PickupType. - store.stratacores, store.gloom.emitterPositions. - Object.keys on API bags. Round positions with Math.round. - api.entities.spawnAtWorld remove launch startCapture collect. - engine.api.drones.spawn kill. - engine.api.entities.spawn launch startCapture collectById removeById registerType registerSpawner. - engine.api.teleportZones.teleportPlayerTo add remove spawnDefaultParticles. - api.projectiles.spawnAtWorld remove register. - api.pickups.spawnAtWorld remove pickUp destroy. - swarmConsole.setSpawnJammed resetAllConvergenceBuffers decrementConvergenceBuffer registerEntityType. - sweeperDrone.cancelSelection. - Entity store keys - Gaps - Engine and workers",
    "path": "/okf/entities/probe",
    "id": ""
  },
  {
    "title": "Projectiles",
    "body": "store.projectiles — active shots. Common fields (live 0.5.5): Field Type Notes -------------------- --------------------- ------------------------------------------------------------------ id number From store.meta.nextId.projectile. type number sandkit.enums.ProjectileType. x, y number World pixels. initialAngle number Degrees at spawn. velocity { x, y } Current motion. threshold { x, y } Hit detection offset. duration { max, left? } Lifetime. -1 = no expiry. bounce { enabled, factor } Wall bounce. gravity { enabled, factor } Gravity toggle. rotateWithVelocity boolean Sprite rotation. ignoreUpgrades boolean Skip upgrade modifiers. attributes object Per-type data (see below). mods object? When type === Mod, keyed by mod projectile id. Sprite key: session.rendering.pixi.sprites.projectiles[id]. Built-in texture map: Bullet - \"bullet\", Rocket - \"rocket\", Digger - \"digger\". Type Keys set at spawn / sim --- --- GrapplingHook {} at fire — state lives on store.player.grapplingHook (fireTime, eyelet world point). Projectile removed when hook ends. Fire Nested under flamethrower blueprint: cooldowns.emitFire: { time, last }. Duration scaled by upgrades.flamethrower.range. Emits short-lived lights on cooldown tick. Digger hp (= digger upgrade level + 1), distanceOriginX/Y, trajectoryOriginX/Y; sim adds gravityBounce, bounced, despawning, despawnTimer when travel exceeds max radius. Rocket napalm: true when rocket warhead augment is owned. Mod projectiles store custom keys on attributes and/or mods[ ]. sandkit.api.projectiles — preferred for mods. Method Role ------------------------------------------------------- -------------------------------------------- register(definition) Add to sandkit.mods.projectiles. getDefinitionById(projectileId) Lookup mod definition. createBlueprintById(projectileId) Build spawn blueprint (opts, type: Mod). getAll() store.projectiles. getById(projectileId) One instance. spawnAtWorld(worldX, worldY, angleRadians, blueprint) Spawn (unsafe without user ask). remove(projectile) Despawn (unsafe). Deprecated alias: createBlueprintFromId(projectileId) - use createBlueprintById. Engine overlap exposes createBlueprint and spawn with state-first signatures. Prefer public names above. Reference: sandkit.html — api.projectiles. No sandkit.engine.api.projectiles namespace. Projectile sim lives in the main store push/filter helpers. - Entity store keys - Enums - Gaps",
    "path": "/okf/entities/projectiles",
    "id": ""
  },
  {
    "title": "Entity store keys",
    "body": "sandkit.state.store holds live runtime arrays on the main renderer state . Simulation workers receive a worker State facade; store.drones and store.projectiles are referenced in worker bundles for shared sim paths but are not exposed on the public worker sandkit.api surface. Treat drones and projectiles as main-thread store arrays for mod reads/writes. Types: node modules/@sandustry-modding/types/src/sandkit/engine/state.d.ts (thin stubs). Key Shape Notes ------------- -------------------------------------- --------------------------------------------------------------- drones Drone[] Autonomous units (digger, hauler, sweeper mod). projectiles Projectile[] Weapon and tool shots. worldItems WorldItem[] Pickups in the world. creatures Record Conservatory inventory counts. Not live world entities. stratacores string[] Collected stratacore ids (progression), not live pickups. gloom { emitterPositions: { x, y }[] } Gloom emitter positions. Element detail in World. Key Shape Notes --------------- ---------------- ------------------------------------------------------------------------- teleportZones TeleportZone[] Prefab and runtime zones. Bidirectional zones get a linked reverse entry. Key Type Notes ------------------------------ --------------- ------------------------------------------------------------------------------ session.teleportZoneCache Fn (grid map) Cell - zone lookup. Built from store.world.teleportZones entry rects. session.prefabWorldItemCache Fn (grid map) Cell - pending pickup spawn data before fog reveal. Cleared when item spawns. Critters and swarm particles live in sandkit.api.entities.getAllByType(typeId) or sandkit.engine.api.entities.getAll(state). Live 0.5.5 backing list: store.mods.entities.list (array of { id, type, x, y, ... }). Clear with .length = 0 for void-world wipes. engine.api.entities.kill is not on the live API — use list clear, public remove(entityId), or re-probe after updates. Types doc path storage.ensure(state, \"entities\").list may differ from live mod bag layout. store.meta.nextId.drone, .projectile, and entity nextId allocate runtime ids. session.rendering.pixi.sprites.drones[id], .projectiles[id], .worldItems[id], .sprites.entities[id] mirror store positions each frame. - Live entities and capture - Drones - Projectiles - World items - Teleport zones and portals",
    "path": "/okf/entities/store",
    "id": ""
  },
  {
    "title": "Swarm console and sweeper",
    "body": "sandkit.engine.api.swarmConsole — retro swarm convergence minigame. State-first. Method Read? Role -------------------------------------- ----- -------------------------------------------------- getCrystalMined(state) yes Shared worker atomic counter. getRadiusPx(state) yes Effect radius from mined crystals. getDiskRadiusCells() yes Disk radius in cells (live: scales with progress). getPlacedConsoles(state) yes { x, y }[] of placed console structures. getNearestConvergence(state, wx, wy) yes Closest convergence point + gate circle. getPendingConvergence(state) yes Active target or null. isSpawnJammed(state) yes Spawn blocked flag. getEntityType(typeId) yes Swarm particle type def. setSpawnJammed no Block spawns. resetAllConvergenceBuffers no Clear pending buffer. decrementConvergenceBuffer no Step convergence. registerEntityType no Register swarm particle visuals. Event: swarmConsole:crystalMinedChanged on shared counter update. Swarm entities use the same entities system with types registered here. Live example (maxed save): crystalMined: 10000, radiusPx: 320, diskRadiusCells: 61, placedConsoles: 0. sandkit.engine.api.sweeperDrone — one method: Method Read? Role ------------------------ ----- -------------------------------------- cancelSelection(state) no Cancel active drop-off selection mode. Sweeper drones are normal store.drones entries from the sweeper launcher item. See Drones. Config namespace: sandkit.config(\"sweeperDrone\"). No separate store key. - Live entities and capture - Drones",
    "path": "/okf/entities/swarm-sweeper",
    "id": ""
  },
  {
    "title": "Teleport zones and portals",
    "body": "Persisted: store.world.teleportZones[] Field Type Notes --------------------------- ------- ----------------------------------------------- id string Unique. Bidirectional zones add {id} reverse. prefabX, prefabY number Source prefab anchor (cells). entryX, entryY number Entry rect origin (cells). entryWidth, entryHeight number Entry hit box (cells). exitX, exitY number Exit position (cells). cooldown number Ms between uses. Default 500. bidirectional boolean Spawns linked reverse zone. linkedZoneId string? Paired zone id. Cache: session.teleportZoneCache — get(cellX, cellY) returns zone for any cell inside entry rect. Rebuilt on add/remove. sandkit.engine.api.teleportZones — state-first. Method Read? Role ---------------------------------------------- ----- ---------------------------- getAll(state) yes store.world.teleportZones. getById(state, id) yes One zone. getAtCell(state, cellX, cellY) yes Cache lookup. add / remove no Mutate store and cache. teleportPlayerTo(state, cellX, cellY, opts?) no Move player, optional VFX. spawnDefaultParticles no Entry/exit particles. Prefab loader calls add for each teleportZones block in prefab data (offsets from prefab center). sandkit.engine.api.portals.getMarkers(state) — read-only list for map UI. Returns { name, x, y }[] in world pixels (cell cellSize). Condition Result --- --- Portals locked (Qk === false) [] All portals consumed (oS === true) [] Unlocked and markers remain One row per runtime marker (below) Names come from i18n nameKey on the static table or runtime marker. Not the same as teleport zones. Teleport zones are grid rects with entry/exit. Portal markers are map waypoints.",
    "path": "/okf/entities/teleport-portals",
    "id": ""
  },
  {
    "title": "Static portal table (0.5.6 extract)",
    "body": "Storage key: store.mods.staticPortals (unlock flag under storage key \"staticPortals\"). Prefab catalog constant Yk: id nameKey prefabName offset (cells) --- --- --- --- glyph-room mods staticPortals glyphRoom name Glyph Room { x: 128, y: 136 } surface-cave mods staticPortals surfaceCave name Surface Cave { x: 157, y: 9 } On game init (when prefab data exists), each row resolves prefab center via prefabData.getAll() and pushes into runtime array Jk: Field Type Notes --- --- --- id string From static table nameKey string i18n key for map label cellX, cellY number Prefab center + offset Unlock: picking up a GlyphKey world item sets Qk = true and persists unlock. getMarkers maps Jk to { name: t(nameKey), x: cellX cellSize, y: cellY cellSize }. Live dev-tools save: store.mods.staticPortals was {} and getMarkers would return [] until unlock + prefab load.",
    "path": "/okf/entities/teleport-portals",
    "id": ""
  },
  {
    "title": "Live unlocked sample (CDP `:9222`, 0.5.6)",
    "body": "Campaign save b93kqvog6zn-exitsave. store.mods.staticPortals: { unlocked: true }. FH.portals.getMarkers(state): name x (px) y (px) cell (÷ cellSize 4) --- --- --- --- Glyph Room 6040 11168 (1510, 2792) Surface Cave 6772 7404 (1693, 1851) Coordinates are world pixels (cell cellSize), matching the static table + prefab center resolution in extract. - Entity store keys - Player: inventory and items — player teleport alternatives. - Gaps",
    "path": "/okf/entities/teleport-portals",
    "id": ""
  },
  {
    "title": "World items",
    "body": "store.worldItems — pickups in the world. Field Type Notes -------- ------ ------------------------------------ id number Runtime id. type number sandkit.enums.PickupType. x, y number World pixels. data object Per-type animation and display data.",
    "path": "/okf/entities/world-items",
    "id": ""
  },
  {
    "title": "World items.`data` by type",
    "body": "PickupType Value data keys (typical) ---------- ----- ------------------------------------------- Artifact 1 name, hoverData (bob), prefabSpecial GlyphKey 2 Same hover pattern as Artifact. Stratacore 3 circleData (orbit animation). Orb 4 breathData (scale pulse), lightPosition Optional data.lightIndex when spawned with a point light.",
    "path": "/okf/entities/world-items",
    "id": ""
  },
  {
    "title": "World items.Related store (not `worldItems`)",
    "body": "Key Shape Notes ------------------------------ ------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------- store.stratacores string[] Collected stratacore ids — see Stratacore ids below. Separate from live worldItems pickups. store.gloom.emitterPositions { x, y }[] Gloom emitter world positions. Element sim detail lives in World; listed here only because stratacore/gloom progression overlaps entity probes.",
    "path": "/okf/entities/world-items",
    "id": ""
  },
  {
    "title": "World items.Stratacore ids",
    "body": "0.5.6 extract + live dev-tools save ( debug.state, game 0.5.6 ): Id Role --- --- terracortex Only id pushed to store.stratacores on stratacore:secured World pickup before secure uses prefabSpecial: \"terracortex\" or \"strataform\" on PickupType.Stratacore rows. \"strataform\" is the pre-neutralized label; secured progression stores terracortex only. No other stratacore ids appear in bundle.js or locale keys in this build. sandkit.api.pickups: Method Role --------------------------------------------------- --------------------------------------- getAll() store.worldItems. getById(pickupId) Find by id. spawnAtWorld(type, worldX, worldY, data?, light?) Spawn (unsafe). type is PickupType. remove(pickup) Remove (unsafe). pickUp(pickup) Collect into inventory (unsafe). Deprecated live aliases: api.world.pickups (same namespace), destroy(pickup) - use remove. Reference: sandkit.html — api.pickups. Grid map (Fn) populated at map load from prefab metadata. Each cached cell stores: Field Type Notes --- --- --- type PickupType Artifact or GlyphKey from prefab name (Glyph Room → GlyphKey). name string Translated display name (ui worldItem artifact or glyph key). prefabSpecial string From prefab special field (may be empty). light object? Optional point-light preset (brightness, size, …) from prefab light tables. Population rules: - worldItemOffset cells → cache entry at offset from prefab origin. - worldItems[] and artifact blocks → Artifact entries. - Skips prefab name \"Void\". - Glyph Room prefabs use GlyphKey type. When fog reveals a cell, cache entry spawns a real store.worldItems item via pickups.spawnAtWorld and deletes the cache key. Probe: session.prefabWorldItemCache constructor name Fn; may have no numeric size. Artifact sensors in session.mainSensorCache can also spawn Artifact pickups on fog reveal (separate from prefab cache). - Entity store keys - Enums - Gaps",
    "path": "/okf/entities/world-items",
    "id": ""
  },
  {
    "title": "Authorization",
    "body": "Build and grab permission zones. Main thread only. Method Role ------------------------------------------------- --------------------------- canBuildAtCell(cellX, cellY) Player may place structures canGrabAtCell(cellX, cellY) Player may grab elements canUseTool(player, isFlamethrower?) Tool use at player position canUseToolAtCell(cellX, cellY, isFlamethrower?) Tool use at cell getZoneIdAtCell(cellX, cellY) Zone id at cell getPlayerZoneId() Zone id under player Engine twin (state first): canBuild, canGrab, canUseTool, canUseToolAt, getZoneIdAt, getPlayerZoneId. Field Live ----------------- ------------------------------------------------------------- width, height Match world grid (3840² campaign; 720 on irishbruse.dev-tools saves probed 0.5.6; 1024 on other dev autosaves) data Uint8Array len width × height , zone id per cell Zone 0 means unrestricted. getZoneIdAtCell / engine getZoneIdAt returns the raw cell value (0–12 on vanilla maps). Each zone id maps to a list of AuthorizationType flags. Engine precomputes a bitmask per zone for fast player-rect scans. Zone id Restrictions F3 overlay RGB --- --- --- 1 NoJetpack, NoGrab, NoBuild, NoTool 255, 0, 0 2 NoBuild, NoGrab, NoTool 255, 255, 0 3 NoBuild 255, 255, 255 4 NoExcavation 0, 0, 255 5 NoJetpack, NoGrab, NoBuild, NoExcavation 0, 255, 0 6 NoJetpack, NoGrab, NoBuild, NoTool, NoExcavation 255, 0, 255 7 NoGrab, NoBuild, NoExcavation 0, 255, 255 8 NoGrab, NoBuild, NoExcavation, NoTool 255, 128, 0 9 NoJetpack, NoGrab, NoTool, NoExcavation 128, 0, 255 10 NoBuild, NoGrab 0, 128, 255 11 NoToolExceptFlamethrower, NoBuild 128, 255, 0 12 NoJetpack, NoGrab, NoBuild, NoExcavation, NoToolExceptFlamethrower 128, 128, 0 canBuild / canBuildAtCell: false when the cell's zone list includes NoBuild (zone 3 is NoBuild-only). Tutorial override: active tutorial before BuildShaker step forces build allowed. When ambient sandkit.api.authorization is undefined in CDP evaluate, bind webpack module 46781 — Evaluate. Public Engine twin (FH.authorization) --- --- canBuildAtCell(x, y) canBuild(state, x, y) canGrabAtCell(x, y) canGrab(state, x, y) getZoneIdAtCell(x, y) getZoneIdAt(state, x, y) getPlayerZoneId() getPlayerZoneId(state) Live dev-tools save (irishbruse.dev-tools-exitsave, scene 4): (500,500) → zone 0 , canBuild true . Stamped zone 3 behavior unchanged from prior probe — see below. Live 0.5.6 probe: stamped zone 3 on a 5×5 block at (260,260) → 25 non-zero cells; center sample 3, outside stamp 0. Do not dump data in probe scripts. Sample sparse cells only. Member Value -------------------------- ----- NoJetpack 1 NoGrab 2 NoBuild 3 NoTool 4 NoExcavation 5 NoToolExceptFlamethrower 6 F3 config.debug.showAuthorizationZones — overlay (UI: HUD and overlays). - Placement blocked by terrain uses sandkit.api.building.isBlockedAtCell — separate from authorization. - Player session building: Player: inventory and items. - Enum values: Enums.",
    "path": "/okf/factory/authorization",
    "id": ""
  },
  {
    "title": "Blueprints (structures)",
    "body": "Public structure blueprint helpers for copy/paste and localization. Official HTML: api.blueprints. Method Role --------------------------------- ------------------------------------------------- serializeStructures(structures) Structure array - portable blueprint payload localizeStructures(structures) Blueprint payload - localized display structures Both are read-only on existing store.structures entries. Do not use them to place or remove structures. Input: two store.structures items. serializeStructures returns an array, each item has keys type, x, y (and more when present on source). localizeStructures(serialized) returns an array with the same top-level keys on the first item. Internal twin: engine.api.blueprints — prefer public api.blueprints for mods. - Player clipboard / coloring: Player: inventory and items. - Structure instance fields: Structures.",
    "path": "/okf/factory/blueprints",
    "id": ""
  },
  {
    "title": "Collector admission (vanilla 0.5.5)",
    "body": "Official sandkit.api.collector: getValueFromCellId, getValueByType, isCellIdCollectable, isCellIdCollectableForSprite, notifyPickupAtCell. No admission or prepare hook in the Sandkit HTML. Vanilla builds a per-type value map from collectable.value on mod elements (plus Gold = 1): Public getValueByType / isCellIdCollectable read that map. The bundle helper is getValueFromElementType. Tile admission (whether an element may enter a Collector footprint) is separate. In js/bundle.js, js/simulation-worker.js, and js/utility-worker.js the check is still: Only Gold and liquidGold pass by default. Other element types with collectable.value stay on the value map for payout queries, but they do not enter Collector tiles. - Element registration: collectable: { value: N } on api.elements.register / updateDefinition. - Economy vs energy: Energy: networks and signals. - Structure instances: Structures.",
    "path": "/okf/factory/collector",
    "id": ""
  },
  {
    "title": "Conveyors and launchers",
    "body": "Element transport on structures. Registration is engine-first, mods also use public structureBehaviors. Method Role ------------------------------------------------------------------------------------------------------------ ------------------------------------ registerConveyorType(structureId, options?) Mark structure as conveyor belt registerLauncherType({ upType, leftType, rightType, velocity, softDropVelocity, runTickSharedBufferKey? }) Register up/left/right launcher trio registerConveyorType options (types): transportOffset, velocity, maxTransportDistance, transportHeight, runWith ('left' 'right'), skipQueued. Method Role ------------------------------------------- ------------------------------------------------------ registerType(state, structureId, options) Same as above, posts RegisterConveyorType to workers Example (burner belt mod, live pattern): debug.config.conveyorDefaultSpeed: 0.05 on this build. Renderer engine.api.conveyors.registerType(state, structureId, options) posts IPC message RegisterConveyorType (59) to all simulation workers: Worker handler registerConveyorType(state, structureId, options): Field Default / role --- --- transportOffset { x: 0, y: -1 } velocity optional belt speed vector maxTransportDistance optional cap transportHeight 1 runWith \"left\" or \"right\" — adds type id to worker run list for that direction skipQueued optional — skip queued structures on belt Worker stores options in per-type map L[structureId] (getModConveyorOptions). Also ensures session.lookup.conveyorBeltsGroupedByX[ ][structureId] arrays exist and bumps conveyor version. CDP blocker: worker threads are not attachable on :9222 (Worker attach). Payload shape is confirmed from extract only; live worker evaluate script not available. No public sandkit.api.launchers. Use structureBehaviors.registerLauncherType or engine.api.launchers.registerType. Live state.sandkit.registeredLauncherTypes (0.5.6 CDP probe): Details: Entities: drones and projectiles. - sandkit.api.structures.isLauncherAtCell(x, y) — builtin LauncherUp/Left/Right plus registered launcher types. - Builtin conveyor cell types also exist in CellType (ConveyorLeft 19, ConveyorRight 20) for terrain grid overlap. shared.conveyorBeltsAnimationIndex — global belt animation tick (read via state). - store.machineryEngine.runLaunchers — launcher tick flag on this save: false. - Splitters, droppers, filters: structure types in Enums and UI building list.",
    "path": "/okf/factory/conveyors",
    "id": ""
  },
  {
    "title": "Enums",
    "body": "Live values from sandkit.enums on 0.5.5. Prefer string structure ids from API when registering mods. Name Value -------------------------- ----- ConveyorLeft 1 ConveyorRight 2 ShakerLeft 3 ShakerRight 4 LauncherUp 5 LauncherLeft 6 LauncherRight 7 SplitterLeft 8 SplitterRight 9 Dropper 10 Foundation 11 FoundationAngledLeft 12 FoundationTriangleLeftDel 13 FoundationAngledRight 14 FoundationTriangleRightDel 15 Collector 16 FilterLeft 17 FilterRight 18 SlidingFoundation 19 VelocitySoaker 20 Grower 21 SoundBox 22 Pipe 23 Pump 24 LiquidVent 25 Light 26 FluxEmanator 27 Mod structures use string ids (conveyorLeftMk2, signalButton, ...). store.structures[].type may be number or string. Duplicate enum also on sandkit.api.building.StructureType (same values). Member Value ---------------- ----- Available 1 FullyBlocked 2 PartiallyBlocked 3 CanBeReplaced 4 Used during placement checks. PartiallyBlocked and CanBeReplaced (with shape overlap) set structure.queued. See Authorization. Member Value ----------- ----- Linear 1 Rectangular 2 On structure definition buildModes, not on instances. - Full enum bag list: Internals: engine and workers. - CellType conveyor/shaker/grower terrain ids overlap logistics — World: grid and elements.",
    "path": "/okf/factory/enums",
    "id": ""
  },
  {
    "title": "Factory viability",
    "body": "Factory tier progression (HUD Viability ). Prefer public sandkit.api.factory for reads. Writers and tier math remain engine.api.factory (internal). Brief store summary also in Progression: tech and upgrades. This file has tier math and process ids. Effective displayed level: min(viability.level, factoryLevelCap ?? viability.level). Method Role ---------------------------- ------------------------------------- getLevel() Current factory tier (live save: 7) getProcessCount(processId) Completed count for one process id getProcessRate(processId) Current rate for one process id Official processId strings: processId Live count (maxed save) Required (tier gate) ------------------- ----------------------- -------------------- shakeWetSand 4000 4000 pressBurntResidue 3000 3000 growFlowers 4000 4000 condenseFlorin 10000 10000 getProcessCount() with no processId throws: Unknown factory process \"undefined\". Live rates on maxed save: all four ids return 0. Pass sandkit.state as first arg. Use when public getters are not enough. Method Live sample (maxed save) -------------------------------- ----------------------------- getLevel(state) 7 getProcessCount(state, index?) 4000 total, per index below getProcessRate(state, index?) 0 canUnlockNextTier(state) false Per-process counts (index - enum name): Index Name Required Live count ----- ------------------- -------- ---------- 0 ShakeWetSand 4000 4000 1 PressBurntResidue 3000 3000 2 GrowFlowers 4000 4000 3 CondenseFlorin 10000 10000 Writers (need user ask): addViabilityGold, unlockNextTier, recordProcess, ensureProcessAtLeast, flushDeferredLevelUps. Between tiers the game checks requirements in order: Id Type Amount Enabling tech (approx) ------------------- ------- --------------- ---------------------- shakeWetSand process 4000 Shaker pressBurntResidue process 3000 Kinetic Press growFlowers process 4000 Planter Box condenseFlorin process 10000 Thermo peakEnergy energy 100000 Gold Battery saturateAura aura swarm threshold swarmConsole Gold spent thresholds per tier band: 0, 30000, 150000, 400000, 1500000. Tier spacing array: [2, 5, 8, 11, 16, 23, 29]. Later tiers may also gate on auralite produced, prismite/prismaline available, and swarm crystal mined (engine checks). store.stratacores lists unlocked stratacore type ids. World pickups use PickupType.Stratacore — Entities: drones and projectiles. Toolbox UI: UI: HUD and overlays. Viability bar: UI: HUD and overlays (ComponentId.FactoryProgress).",
    "path": "/okf/factory/factory",
    "id": ""
  },
  {
    "title": "Gaps",
    "body": "Still open: - Live conveyor belt motion / worker L[structureId] instance at runtime (worker CDP unavailable — extract-only) - Snowmaker / steam dryer / synthesizer per-tick energy and adjacency numbers beyond i18n copy (partial extract only) Resolved on 0.5.6 CDP evaluate ( debug.state; ambient sandkit undefined): - sandkit.api.pipes. / authorization.canBuildAtCell — not reachable in evaluate scope; engine twins via webpack 46781 (FH.pipes. , FH.authorization. ) verified live — Pipes, Authorization - FH.structures.build(state, { x, y }, type) placement — pipe 23 , pump 24 , vent 25 , and energy mod types on dev-tools save when Block terrain exists under the cell — Feature save setup Documented from bundle extract (0.5.6): - Vanilla refinery recipe tables per slot — Vanilla refinery recipes - registerPlacementConfig field schemas and runtime storage — Placement config - engine.api.structures.getConfig return shape (C.VI[id]) — Placement config - Placement clearance preview rules (BuildingClearance, engine-only) — Structures - Thermal condenser / smelter tick gates (heat relay, lava / freezingIce RNG, smelter 25% skip) — Processing - Worker RegisterConveyorType IPC payload — Conveyors Resolved on 0.5.6 CDP probe ( debug.state; sandkit.api not ambient in evaluate): - store.pipes / pumpsCache instance dumps on a placed network (store + session.cache.pipes shift 2 ) - Pipe data.disabled breaks isEnabledAt / vent graph (bundle + inline probe matching engine module 34142 ) - getConnectedVentsAtCell shape { x, y }[]; pump data.connectedVents and data.liquidBuffer - Non-zero shared.authorization.data (zone 3 / NoBuild stamp, 25 cells on 720² dev save) - Zone id 1 – 12 restriction table and F3 RGB map — Authorization - Live store.options.sandkitPlacementConfig sample {} on vanilla bundle - Mod refinery recipe rows in state.sandkit.mods.recipes - state.sandkit.registeredLauncherTypes velocity object shape — Conveyors and launchers - session.cache.structures / session.cache.pipes keys: grid, blocksW, blocksH, sparse - Worker inventory from renderer: 14 sim threads + manager + utility — Worker attach store.queue empty on feature-empty saves is expected (len 0), not a missing API.",
    "path": "/okf/factory/gaps",
    "id": ""
  },
  {
    "title": "Factory",
    "body": "Structures, pipes, recipes, and factory-level systems. - Structures and pipes — overview and API pointers - Structures — instances, definitions, shape matrix, registry - Collector admission — Gold and liquidGold tile rules - Processing and recipes — machine recipes and custom processing - Vanilla refinery recipes — builtin thermal machine recipe tables - Placement config — hotbar fields and getConfig shape - Pipes and fluids — pipe store, pumps, vents - Factory viability — tier, process counts, stratacores - Blueprints — serialize and localize structure layouts - Conveyors and launchers — belt and launcher registration - Authorization — build and grab zones - Build queue — tick queue and placement backlog - Enums — StructureType, BuildingClearance, BuildMode - Gaps — facts not yet confirmed on probe saves - Probe — safe MCP reads for factory state",
    "path": "/okf/factory/index",
    "id": ""
  },
  {
    "title": "Pipes and fluids",
    "body": "Fluid transport structures are split from the main structure list. Method Role ----------------------------------------- --------------------------------------- isAtCell(cellX, cellY) Pipe segment at cell isEnabledAtCell(cellX, cellY) Pipe flow enabled at cell getConnectedVentsAtCell(cellX, cellY) Connected liquid vents ([] when none) setEnabledAtCell(cellX, cellY, enabled) mutate — do not call in probes Live on structure cell with no pipe: isAtCell / isEnabledAtCell - false, getConnectedVentsAtCell - []. Engine twin (state first): isAt, isEnabledAt, getConnectedVentsAt, setEnabledAt. setEnabledAt throws on worker context. When ambient sandkit.api.pipes is undefined in CDP evaluate, bind webpack module 46781 — Evaluate. Public Engine twin (FH.pipes) --- --- isAtCell(x, y) isAt(state, x, y) isEnabledAtCell(x, y) isEnabledAt(state, x, y) getConnectedVentsAtCell(x, y) getConnectedVentsAt(state, x, y) setEnabledAtCell(x, y, enabled) setEnabledAt(state, x, y, enabled) Live dev-tools save after FH.structures.build pipe 23 at (600,600): isAt true , isEnabledAt true on the pipe cell; pump cell (604,600) → isAt false (pump lives in store.structures, not store.pipes). Pumps and liquid vents still appear in store.structures via structures.getAtCell. Pipe segments live in store.pipes. Field Role --------------------- ---------------------------------------------------------------- store.pipes[] Pipe segments only (type === StructureType.Pipe / 23) store.pumpsCache[] Pump structures (type 24) for fast fluid graph updates session.cache.pipes Spatial block index (same pattern as session.cache.structures) Spatial cache uses cell log2(snapGridCellSize) (shift 2 when snapGridCellSize is 4 ). One object per snap block; session.cache. .get resolves the instance at a cell. Empty dev save: pipes length 0 , pumpsCache length 0 . Placed pipe (live 0.5.6 probe — store + session.cache.pipes): - type: 23 (Pipe) - x, y: snap-grid cell - data.pipeSpriteIndex: connection bitmask (0–15) from orthogonal neighbor pipes - data.disabled: when true, isEnabledAtCell is false and breaks fluid graph traversal Pump (type 24 ) in store.structures and store.pumpsCache: - data.connectedVents: { x, y }[] of liquid vents on the same connected pipe network - data.liquidBuffer: per-element-type counts (appears after pump tick runs; live probe saw {} on first frame) Liquid vent (type 25 ): - data.connectedVents: usually [] on the vent instance (pumps hold the vent list) Three-segment line at (256,256) → (264,256) with a vent at the end: middle pipe disabled: true makes isEnabledAt false on that cell and getConnectedVentsAt return [] from the pump side; re-enabled pipe restores vent link { x: 264, y: 256 }. Pump / liquid vent at a cell without adjacent pipe may get data.connectedVents: []. - Pipe goes to store.pipes, not store.structures. - Pump pushes into pumpsCache on place. - Pump and liquid vent require a pipe at the same cell. session.settings.pipesModeView — pipes overlay mode (foreground vs background tilemap). Pipe 23, Pump 24, LiquidVent 25 — Enums. - Building menu fluid tab: UI: HUD and overlays. - ItemId.PipeRemover (13) — player tool, not covered here.",
    "path": "/okf/factory/pipes",
    "id": ""
  },
  {
    "title": "Placement config",
    "body": "Hotbar overlay fields for per-placement options (channel, mode, and similar). Official types: SandustryTypes PlacementConfigDefinition and overloads on structures.registerPlacementConfig.",
    "path": "/okf/factory/placement-config",
    "id": ""
  },
  {
    "title": "Placement config.Field types",
    "body": "Integer (type: \"integer\"): Key Required Role --- --- --- id yes Stored key on store.options.sandkitPlacementConfig[structureId] label or labelKey one required UI label (plain string or i18n key) default no Fallback when unset min no Lower bound (default Number.MIN SAFE INTEGER) max no Upper bound as number or upgrade object (see below) Choice (type: \"choice\"): Key Required Role --- --- --- id yes Stored key label or labelKey one required Field label default no Default option value options yes (≥1) { value: string, label?: string, labelKey?: string }[] Each option needs label or labelKey. Duplicate field ids throw at registration time.",
    "path": "/okf/factory/placement-config",
    "id": ""
  },
  {
    "title": "Placement config.Integer `max` upgrade object",
    "body": "When max is an object, runtime resolves: from store.upgrades[itemId][upgradeId].level (or availableLevel).",
    "path": "/okf/factory/placement-config",
    "id": ""
  },
  {
    "title": "Placement config.Runtime storage (bundle)",
    "body": "Location Role --- --- In-memory Map keyed by structureId Registered field definitions store.options.sandkitPlacementConfig[structureId][fieldId] Current hotbar values while building Engine helpers (not on public sandkit.api): get definition by structure type, read/write field values, clamp integers. Registration also triggers HotbarOverlays UI refresh.",
    "path": "/okf/factory/placement-config",
    "id": ""
  },
  {
    "title": "Placement config.Vanilla usage",
    "body": "Shipping 0.5.6 bundle has no vanilla registerPlacementConfig calls — slot is mod-only today. Defs in state.sandkit.mods.structures do not carry a placementConfig key; config lives in the separate Map above.",
    "path": "/okf/factory/placement-config",
    "id": ""
  },
  {
    "title": "Live sample (0.5.6 CDP)",
    "body": "store.options.sandkitPlacementConfig on dev-tools saves: {} (no keys) until a mod calls registerPlacementConfig. Runtime init on first registration creates store.options.sandkitPlacementConfig[structureId][fieldId] with clamped integer or choice defaults. Implementation: C.VI[structureTypeOrId] — the same object written by structures.register.",
    "path": "/okf/factory/placement-config",
    "id": ""
  },
  {
    "title": "Placement config.Common definition keys (live)",
    "body": "Key Role --- --- id String structure id nameKey, descriptionKey, categoryKey i18n keys descriptionParams Interpolation for description order Tech/build menu sort buildModes Line, rectangle, single, … variants { id, angles }[] rotation variants render Spritesheet, size, offset, z, UI icon shape 4×4 CellType terrain matrix defaultData Initial structure.data on place copyData When false, sets skipCopyData: true for blueprint copy skipCopyData Skip data on blueprint paste disallowPick Block picker tool unlockedBy Tech id gate blockGridType Spatial index alias when id differs draw is stripped from the stored def and kept in a separate render callback table. Builtin numeric types (e.g. StructureType.Collector = 16) and string mod ids both resolve through getConfig.",
    "path": "/okf/factory/placement-config",
    "id": ""
  },
  {
    "title": "Placement config.Uses in engine",
    "body": "- Blueprint copy: copyData / skipCopyData gate whether structure.data is preserved. - Picker: disallowPick blocks pick with toast mods shortcuts cannotPickStructure. - Display name: nameKey or legacy name via i18n helper. - Structures — instance shape and public sandkit.api.structures surface. - Structures and pipes — placement session overview.",
    "path": "/okf/factory/placement-config",
    "id": ""
  },
  {
    "title": "Factory probe",
    "body": "Read-only inspection via sandustry MCP evaluate script. Return JSON-serializable data only. On 0.5.6 Steam/CDP :9222, ambient sandkit is usually undefined in evaluate scope. state.sandkit.engine.api is also absent on probed sessions. Use globalThis. debug.state for store, shared, and state.sandkit.mods. . When sandkit.api is reachable (0.5.5 or mod scope), debug.state === sandkit.state. When you need authorization. or pipes. reads on 0.5.6, bind FH from webpack module 46781 — Evaluate, Webpack module ids. Example: FH.authorization.canBuild(st, x, y), FH.pipes.isAt(st, x, y). Store-only fallbacks (no API): shared.authorization.data, session.cache.pipes — Pipes, Authorization. Pipe / auth API reads that need engine twins: confirm via bundle extract or replicate cache lookups (cell 2 for snapGridCellSize 4) — see Pipes. - Object.keys on sandkit.api.structures, .structureBehaviors, .authorization, .building, .collector, .factory, .pipes, .blueprints. - structures.getAtCell, getDefinitionByType, getAvailableTypes, isLockedByType, isTypeAtCell, hasBuiltAtCell, forEachOfType (read callbacks only). - structures.processing.isEnabledAtCell. - factory.getLevel, getProcessCount(processId), getProcessRate(processId) — processId required for count/rate. - pipes.isAtCell, isEnabledAtCell, getConnectedVentsAtCell. - blueprints.serializeStructures, localizeStructures on existing store.structures slices. - authorization.canBuildAtCell, canGrabAtCell, getZoneIdAtCell, getPlayerZoneId. - Store counts: store.structures, store.pipes, store.pumpsCache, store.queue, store.viability, store.stratacores, store.factoryLevelCap. - session.cache.structures, session.cache.pipes, session.factoryProcessRates. - state.sandkit.mods.structures keys, state.sandkit.registeredLauncherTypes. - shared.authorization — report { width, height } and sparse zone samples only. - sandkit.enums.StructureType, BuildingClearance, AuthorizationType. - structures.buildAtCell, removeAtCell, removeBetweenCells, removeAtCells (and WhenIdle aliases). - structures.processing.setEnabledAtCell, pipes.setEnabledAtCell. - structureBehaviors.register , structures.recipes.register, structures.processing.register. - building.selectStructure, cancelPlacement. - engine.api.factory.addViabilityGold, unlockNextTier, recordProcess, ensureProcessAtLeast. - engine.api.queue.enqueue , process. - engine.api.conveyors.registerType, engine.api.launchers.registerType. - debug.ensureQueuedStructuresAreBuilt. Open Gaps when probe data does not match a concept file.",
    "path": "/okf/factory/probe",
    "id": ""
  },
  {
    "title": "Processing and recipes",
    "body": "Machine recipes and per-cell processing toggles. Official HTML documents machine recipes as api.structures.recipes.register(id, definition): id slot Role ---------------------------------------------------------------- ----------------------------------- planterBox Grower input - output shaker Shaker weighted outputs above/below kineticPress Press velocity threshold + outputs condenser, steamDryer, synthesizer, snowmaker, smelter Weighted refinery outputs Recipe shapes: node modules/@sandustry-modding/types/src/sandkit/api/structures.d.ts (recipes.register overloads). Weighted outputs use { elementType, chance }. Live extra (not in official HTML): top-level sandkit.api.processing with registerGrower, registerShaker, registerKineticPress. Prefer structures.recipes.register. Engine twin: engine.api.structures.recipes.getWeightedRecipe, selectWeightedOutput, register. getWeightedRecipe(state, slot, inputType) only sees mod rows in mods.recipes. It returns null for vanilla shaker / grower / press inputs. recipes.shakers, growers, and kineticPresses start as []. Vanilla processing is hardcoded in the engine. Mod registerShaker stores { input, outputsAbove, outputsBelow }. Mod grower rows store { input, output, chance } (not outputs[]). getWeightedRecipe returns null for these vanilla inputs. Live scrape sources (game js/bundle.js): Source Pattern ---------------------- --------------------------------------------------------------------------------------------------------------------- Contacts [[r.RJ.Water,r.RJ.Sand,r.RJ.WetSand],…] Residue burn RJ.Residue]:()= ({output:{elementType:r.RJ.BurntResidue,chance:.25}}) Press / shaker outputs Locale structures\\ velocitySoaker\\ description / structures\\ shaker\\ description ({t:elements\\ …\\ name} tokens) Shaker gold chance RefineWetSand?.5:.25 (non-tutorial branch) Grower RJ.WetSeed&&…RJ.Seedling (description is harvest copy, not the seedling step) Input Engine path Outputs ------------- ----------------------------------------- ------------------------------------------------------------------------------------------ Wet Sand Shaker (ShakeWetSand) Residue (nearby empty cell) + Gold below at 0.25 (0.5 during tutorial RefineWetSand) Residue fire.burnElementAt (no def.flammable) Flame → Burnt Residue at 0.25 Burnt Residue Kinetic Press (PressBurntResidue) Gold + Seed Wet Seed Planter Box (fallback when no grower row) Seedling Flower harvest after Seedling is entity-side (Gold + Amethelis), not a grower recipe row. Vanilla builtin refinery tables (slot id vs structure id, chances, fuel rules): Vanilla refinery recipes. Worker-side structure ticks (not visible via renderer sandkit.api on CDP :9222). Facts from bundle.js / simulation-worker.js extract.",
    "path": "/okf/factory/processing",
    "id": ""
  },
  {
    "title": "Processing and recipes.Condenser (`thermofroster`, recipe slot `condenser`)",
    "body": "- Scans element cells adjacent to the 4×4 footprint (top and bottom edges, order shuffled each tick). - Requires getWeightedRecipe(state, \"condenser\", inputType) match. - Heat gate Th(state, originX, originY): - Adjacent thermalRelay heat via shared helper bh.dv (4×4 probe, offset -2 ), or - freezingIce on the row above: 10% RNG to remove one ice cell and pass. - On success: remove input, selectWeightedOutput (or single 1.0 output), create output element, particle burst. - Florin input path also calls factory.recordProcess(state, CondenseFlorin) (process index 3 ). Builtin condenser rows (also in mods.recipes.condensers when mods register): florin → florinol/gold; steam → water.",
    "path": "/okf/factory/processing",
    "id": ""
  },
  {
    "title": "Processing and recipes.Smelter (`smelter`, recipe slot `smelter`)",
    "body": "- Reads element on row above footprint (y - 1), x order shuffled each tick. - getWeightedRecipe(state, \"smelter\", inputType) — builtin table: gold → liquidGold ( 0.5 ), copper → liquidCopper ( 1.0 ). - 25% RNG early exit per tick (Math.random() < 0.25 → no smelt). - Heat gate (same helper family as condenser, offset +10 for relay probe): - Adjacent thermalRelay, or - lava on row below relay column: 10% RNG to remove lava cell. - On success: heatWave effect, remove input, create liquid output from weighted recipe.",
    "path": "/okf/factory/processing",
    "id": ""
  },
  {
    "title": "Processing and recipes.Snowmaker / steam dryer / synthesizer",
    "body": "Use the same getWeightedRecipe slot lookup pattern (snowmakers, steamDryers, synthesizers) with structure-specific tick hooks in the worker bundle. Snowmaker copy: consumes water above and energy (see structure i18n structures snowmaker description). Live 0.5.6 probe via debug.state (dev-tools autosave). Slots are arrays; vanilla builtin shaker/grower/press paths stay engine-hardcoded. Slot Rows Input (elementType) Outputs (elementType, chance) ------------- ---- --------------------- --------------------------------- condensers 2 22 (florin) 7 / Gold (0.5), 23 / florinol (0.5) condensers 10 / Steam 3 / Water (1.0) steamDryers 1 18 / Petalium 24 / dryPetalium (1.0) synthesizers 1 23 / florinol 26 / aurixite (1.0) snowmakers 1 3 / Water 12 / FreezingIce (1.0) smelters 2 7 / Gold 25 / liquidGold (0.5) smelters 36 / copper 37 / liquidCopper (1.0) Empty on this save: contacts, shakers, kineticPresses, growers (all len 0 ). sandkit.api.structures.processing: Method Role ------------------------------------------------------ ------------------------------------ register(id, { structureType, intervalMs, process }) Bind periodic callback isEnabledAtCell(cellX, cellY) Read whether processing runs at cell setEnabledAtCell(cellX, cellY, enabled) mutate per-cell enable flag Deprecated aliases (official HTML): api.structures.addProcessor - processing.register; isEnabledAt - isEnabledAtCell; setEnabledAt - setEnabledAtCell. context deprecated aliases: getElementTypeAtCell - getResolvedTypeAtCell; isCellEmpty - isCellEmptyAtCell. Canonical registration: Processing uses the triggers scheduler under the hood. Main thread only for setEnabledAtCell. Shakers, presses, growers, and thermo machines call engine.api.factory.recordProcess(state, processIndex) when they complete work. Public read ids: shakeWetSand, pressBurntResidue, growFlowers, condenseFlorin — see Factory viability. Read from element interactions (kind: \"structure\") plus structure i18n: Element Structure Result ------------- -------------------------------- ------------------------------------- Wet Sand Shaker Gold (↓, 25%) + Residue Residue Fire (kind: \"flammable\" only) Burnt Residue (25%) Burnt Residue Kinetic Press (velocitySoaker) Gold + Seed (drop from height) Wet Seed Planter Box (grower) Seedling (harvest → Gold + Amethelis) Gold Collector Credits Liquid Gold Collector Credits (collectable value 2) Steam Steam Turbine Energy Voidbloom Flux Emanator (gloomEmitter) Fluxite terrain Aurixite Shaker Auralite Florinol Florinol Battery / Synthesizer Energy / Aurixite - Thermal / refinery structure ids: UI: HUD and overlays (Thermal tab). - Energy condense path records CondenseFlorin process index: Energy: networks and signals.",
    "path": "/okf/factory/processing",
    "id": ""
  },
  {
    "title": "Build queue",
    "body": "Two related queues: deferred tick jobs and structures waiting to finish placement. engine.api.queue manages this array. Live save: length 0. Item shape (engine): Field Role --------------- -------------------------------------------- type Handler id registered with registerHandler executeAt store.meta.time when due data Payload object key Optional dedupe key notBeforeTick Optional minimum store.meta.tick Methods (state first): enqueue, enqueueInTicks, enqueueSkipTick, process, registerHandler, removeByKey. Do not call process without user ask. store.meta: time and tick drive scheduling. When placement clearance is PartiallyBlocked or CanBeReplaced with blocking terrain, the structure is pushed with queued: true. It builds when clearance clears. Live (0.5.5 probe save): 0 queued structures. debug.ensureQueuedStructuresAreBuilt forces completion — mutate , do not call in probes. Conveyor registration often passes skipQueued: true so belts do not transport until built. Main-thread placement and removal are deferred: - buildAtCell(x, y, structureTypeOrId, options?) - removeAtCell, removeBetweenCells, removeAtCells Deprecated aliases: buildAtCellWhenIdle, removeAtCellWhenIdle, removeBetweenCellsWhenIdle, removeAtCellsWhenIdle (official HTML). These are writes. Do not call without user ask. - BuildingClearance enum — Enums. - Engine batching: engine.api.structures.beginBatchWrite / endBatchWrite. - Conveyor skipQueued: Conveyors and launchers.",
    "path": "/okf/factory/queue",
    "id": ""
  },
  {
    "title": "Vanilla refinery recipes",
    "body": "Builtin thermal machines use structures.recipes.register recipe slots that differ from structure ids . Vanilla rows are hardcoded at boot and mirrored into state.sandkit.mods.recipes slots. getWeightedRecipe returns null for vanilla shaker, grower, and press inputs — see Processing and recipes. Source: sandustry/source/dist/js/bundle.js (0.5.6 extract). Recipe slot (recipes.register id) Structure id English name --- --- --- condenser thermofroster Condenser steamDryer thermodryer Steam Dryer synthesizer aurixiteCrystallizer Synthesizer snowmaker snowmaker Snowmaker smelter smelter Smelter Hardcoded source table wh in bundle. Registered at mods:internal-ready into slot condenser (vh). Input (element id) Outputs (elementType, chance) Notes --- --- --- florin Gold (0.5), florinol (0.5) Records CondenseFlorin process index steam Water (1.0) Deterministic Processing: structures.processing.register on thermofroster, interval 500 ms. Uses cold from adjacent thermalRelay or freezingIce above. Input (element id) Outputs (elementType, chance) Notes --- --- --- petalium dryPetalium (1.0) Requires steam in the cell row below (10% consume chance per tick) Input (element id) Outputs (elementType, chance) Notes --- --- --- florinol aurixite (1.0) Consumes 800 energy per conversion (Lb constant) Horizontal line structure. Element enters from the side; conversion queues on aurixiteCrystallizer:queueConvert. Input (element id) Outputs (elementType, chance) Notes --- --- --- water freezingIce (1.0) Consumes 1 energy per cycle Registered at boot with energy.registerType(..., \"conductor\"). Processing interval 100 ms. Spawns output in a random 2×2 cell block below the machine footprint. Hardcoded source table pg in bundle. Input (element id) Outputs (elementType, chance) Notes --- --- --- gold liquidGold (0.5) 25% tick abort before conversion roll copper liquidCopper (1.0) Requires lava below (10% consume chance) Processing interval 500 ms. Fueled by heat from thermalRelay or lava. Mods append to the same state.sandkit.mods.recipes slot arrays. Live probe sample: Processing and recipes. - Factory viability — condenseFlorin process id for factory tier checks. - Enums — builtin numeric structure types (thermal machines are string ids).",
    "path": "/okf/factory/refinery-recipes",
    "id": ""
  },
  {
    "title": "Structures and pipes",
    "body": "Load this concept when your mod registers or places structures, configures pipes, recipes, custom processing, factory level, blueprints, or conveyor and launcher behaviors.[^factory-guide] The factory guide separates query helpers from mutate helpers for structures and related systems. It explains structure definitions at mod load versus built instances on the world map. It documents deferred buildAtCell and removeAtCell on the main thread. It covers the building session namespace for player-driven placement previews. It describes authorization zones that gate build, grab, and tool use. It walks through pipe fluid tiles, flow toggles, and connected vents. It explains recipe registration for vanilla machines and custom processing callbacks with enablement flags. It notes read-only factory level and process counters. It covers blueprint serialize and localize for portable layouts. It documents structure behavior registration for conveyors and launchers. It includes a main-versus-worker capability table for factory namespaces. - Official Sandkit API — signature truth for runtime shapes. - How to read Sandkit — how to use generated member pages under /api/. - Generated namespaces named in the guide: - sandkit.api.structures and sandkit.api.structures (worker) - sandkit.api.building and building.StructureType - sandkit.api.authorization - sandkit.api.pipes - sandkit.api.processing - sandkit.api.structures.processing and worker processing - sandkit.api.structures.recipes - sandkit.api.factory - sandkit.api.blueprints - sandkit.api.structureBehaviors Vanilla facts for Early Access 0.5.5 live in these concept files. - Structures — instance shape, shape matrix, mod registry - Collector admission — value map vs tile admission - Processing and recipes — vanilla hardcoding and mod registration - Pipes and fluids — store.pipes and pump cache - Factory viability — tier math and process ids - Blueprints — copy and localize payloads - Conveyors and launchers — structureBehaviors registration - Authorization — zone grid and permission checks - Build queue — deferred placement and tick queue - Enums — StructureType and clearance values - Gaps — open questions on this probe save - Probe — safe MCP inspection patterns - Player: inventory and items — hotbar flow and the building placement session. - Energy: networks and signals — collector structures and signal-driven processing enablement. - Progression: tech and upgrades — factory tier is separate from the Research tree. - Engine and workers — worker-safe structure lookup versus main-thread registration. [^factory-guide]: Primary guide — /guides/factory.md.",
    "path": "/okf/factory/structures-and-pipes",
    "id": ""
  },
  {
    "title": "Structures",
    "body": "World structures live in store.structures[]. Spatial index: session.cache.structures (block grid). Pipes are separate — see Pipes and fluids. Field Role -------- ----------------------------------------------------------------------------------- type Builtin numeric id (e.g. 11 Foundation) or mod string id (e.g. conveyorLeftMk2) x, y Snap-grid cell origin queued true when placement waits on clearance (partial block or replace) filter Optional { elementType, mode } on filters (mode: \"allow\" seen live) data Per-structure bag (signals, pumps, prefab reset, sound box notes, ...) color Hex tint (coloring tool), e.g. \" 00ffff\" frame Boolean frame overlay on foundations Live save sample (0.5.5 campaign probe): 19 structures, 0 queued, fields color, data, filter, frame, queued, type, x, y. 0.5.6 dev-tools autosave (CDP :9222): 0 placed structures (void map); defs still loaded in registry. Signal types on belt: signalButton, signalToggle, signalGate, etc. Canonical methods plus deprecated aliases still on the live object (official HTML marks aliases): register, updateDefinition, registerVariant, forEachOfType, registerPlacementConfig, getAtCell, getDefinitionByType, getAvailableTypes, getTypeById, hasBuiltAtCell, isBlockedByPlayerAtCell, isLauncherAtCell, isType, isTypeAtCell, isLockedByType, mapValueToSpritesheetIndex, setSpritesheetIndex, setSpritesheetIndexAtCell, setSpritesheetIndexByValue, setSpritesheetIndexByValueAtCell, update, updateData, buildAtCell, removeAtCell, removeBetweenCells, removeAtCells. Deprecated aliases (use canonical name): Alias Canonical ---------------------------- ------------------------------------------------- addVariant registerVariant getUnlockedTypes getAvailableTypes getTypeFromId getTypeById isUnlockedByType isLockedByType (inverted semantics — see below) setData updateData buildAtCellWhenIdle buildAtCell removeAtCellWhenIdle removeAtCell removeBetweenCellsWhenIdle removeBetweenCells removeAtCellsWhenIdle removeAtCells Nested: - recipes.register — machine recipe slots (planterBox, shaker, kineticPress, refinery ids). - processing.register, processing.isEnabledAtCell, processing.setEnabledAtCell (deprecated aliases: isEnabledAt, setEnabledAt). Top-level deprecated: api.structures.addProcessor - processing.register. 44 grid (or larger for big structures). Each cell is a CellType terrain id , not a boolean. Value Meaning -------------- --------------------------------------------------------- 0 Empty — no terrain placed, sand/elements pass through 15 Block — solid foundation tile 19 / 20 ConveyorLeft / ConveyorRight mod terrain id Custom terrain from terrains.register (e.g. glass 45) - Fully transparent (logic): omit shape, or use all 0s. Filters, lights, collectors, liquid vents use no shape. - Partially transparent: mix 0 with terrain ids. Example: Velocity Soaker (type 20) — top row 24, rest 0. - useRawShape: true: pass the matrix straight to the terrain grid. Required for angled/partial footprints (splitters, glass triangles). Belts/filters: belts need it, filters must not use a belt shape or they become solid carriers. - Do not use 1 in shape — that is CellType.Element, not \"solid\". It leaves red debris tiles. Use 15 (Block) or a registered terrain id. Optional draw(state, structure, render) callback replaces per-cell sprite painting (multi-cell art, glass ghosts). render.z sets draw depth (lower = behind sand). state.sandkit.mods.structures — 65 defs on live 0.5.6 probe. Each has id, keys like nameKey, categoryKey, buildModes, variants, render, optional shape, draw. 25 defs include a shape matrix (sample: smelter, thermofroster, burnerBeltLeft). Sample smelter def keys: id, nameKey, descriptionKey, categoryKey, order, buildModes, variants, render, shape. Builtin defs via getDefinitionByType(16) expose buildModes, variants, nameKey, descriptionKey, categoryKey. getClearanceAtCell is not on public sandkit.api. Preview clearance uses internal helper (bundle name minified) with BuildingClearance enum — see Enums. Checks (in order): 1. Out of world bounds → FullyBlocked 2. alwaysAvailableZone / alwaysAvailablePositions overrides → Available 3. authorization.canBuild at cell → FullyBlocked when false 4. Player AABB overlap on solid shape → FullyBlocked 5. Existing structure at cell: CanBeReplaced when override-replace key held and footprint is queued or empty shape; else FullyBlocked 6. Partial terrain overlap on shaped defs → PartiallyBlocked (or FullyBlocked when rejectWhenBlocked) 7. Else → Available Linked placement (linkedClearance: \"allOrNothing\") promotes all cells in a batch to FullyBlocked if any cell is fully blocked. When structures.build receives copiedStructure in its options bag, unlock checks are skipped. Defs with disallowSelection: true still reject the build and return null — live: powerBrick with a fake copiedStructure → null; normal build via FH.structures.build without that flag succeeds on probe saves. disallowPick: true blocks copier pick; pair with disallowSelection on energy storage that must come from mold fill — Engine energy. State-first twin. Live extras vs public: build, removeAt, removeBetween, removeAtPositions, beginBatchWrite, endBatchWrite, getConfig, resolveTypeName, isBlockedByPlayer, isUnlocked, isTypeAt. engine.api.structures.recipes: getWeightedRecipe, register, selectWeightedOutput. getConfig(type) returns C.VI[type] — see Placement config. Numeric StructureType enum (1–27): see Enums. Mod types use string ids. getTypeById('collector') - 16. isLockedByType(type) returns true when the type is locked. For unlock checks use !isLockedByType(...) or getAvailableTypes().has(...). Do not rely on deprecated isUnlockedByType for numeric types. - Placement session: Player: inventory and items. - Building overlay names: UI: HUD and overlays. - Collectors: sandkit.api.collector (value at cell). Admission is Gold + liquidGold only — see Collector admission. Gold / energy overlap: Energy: networks and signals. - Launchers: Entities: drones and projectiles. - Blueprint copy: Blueprints.",
    "path": "/okf/factory/structures",
    "id": ""
  },
  {
    "title": "Sandustry modding OKF",
    "body": "Open Knowledge Format bundle for agents. Humans can open the OKF tab for a graph viewer, or keep using the sidebar. - OKF agent rules — game-only scope; read before editing OKF - How to consume this bundle - API — Sandkit reference and generated docs - World — grid, elements, terrains, maps - Factory — structures, pipes, recipes - Energy — power networks and signals - Player — inventory, items, input - UI — HUD, overlays, dialogs - Progression — tech, upgrades, discoveries - Entities — drones, projectiles, pickups - Internals — engine, workers, host bridge - Live — MCP attach, evaluate, triage, void-world batches - References — official Sandkit, types package, template repo - OKF log",
    "path": "/okf/index",
    "id": ""
  },
  {
    "title": "Renderer boot (Loader)",
    "body": "loading is the splash. After splash, Loader (ComponentId 11 ) shows i18n keys under ui loading . Progress max is 7 . PI(key, 7) sets Starting game . That label stays until boot removes loading. Progress Key Work -------- --------------------- ------------------------------------------ 1 bootstrapping Locale, debug localStorage, URL boot flags … images / sounds Asset fetch 4 initializingSystems Sound engine 7 startingGame Everything below until the overlay hides Compiling shaders… is a separate overlay (ui loading compilingShaders), not a Loader checklist row. Order after ?db load= / Continue: 1. Load save (electron.load when the host check in Electron bridge is true; otherwise IndexedDB). Parse store, wall, matrix, shadow, authorization. 2. Build Pixi/session, then allocate SharedArrayBuffers for store.world.size (vanilla 3840 × 3840 ): cellIds 56 MB, mapData 56 MB, wall + shadow 14 MB each, plus 1000000 element slots and simulation worker threads (count = max(2, hardwareConcurrency - 2), cap 18 — see Workers runtime). 3. pj() — key bindings + Pixi overlay containers (ET.init). 4. Run external mods. 5. regenerateOutlineElementsShader. 6. await foliage.generate(). 7. Nested loop over every cell (height then width): getCellId, write map raster, optional authorization stamp. Empty cells still pay this cost. 8. If packed shadow.data length is not shadowMap.data.length, full shadows.refresh. Else data.set. 9. await SI — Compiling shaders… overlay until warmup finishes. SI is null when sessionStorage.splashShown is set and the URL has no db load. Then this wait is skipped and outline GPU compile does not run. 10. Fade loading out. An empty Void save is 11 KB on disk. A full world is 1.3 MB . Disk size does not skip steps 2, 7, or 8. The boot catch logs Initialization failed: plus a dump of the thrown value (Error.message / stack when it is an Error). An Image onerror Event dumps as {\"isTrusted\":true} (no URL). That usually means a required texture 404. Vanilla HUD icons load from dist/mods/ .png (bundle paths like mods/minimap icon.png). Custom-map blueprints and api.assets.getUrl join rootUrl with a relative path. Vanilla requires file: (pathToFileURL(folder + sep)). An HTTP rootUrl throws Asset path resolves outside the mod folder. before the image fetch. Marks on globalThis. hrBoot (ms from bundle start). Fast boot on , skip shader off : - Splash / assets until Starting game : 0.2 s - Save load: 0.4 s - Pixi / session before SAB: 0.9 s - SAB alloc: 0.2 s - Worker init: 0.2 s - pj() bindings / overlay init: 8.5 s - Mods + outline regen + foliage: under 0.1 s - After foliage until hide (mostly await SI shader wait): 28 s - Total to hide Loader: 39 s Raster and shadow rebuild were skipped by fast boot. They were not the remaining wait. Path: /.config/sandustry/saves/ .save. 1. First line: JSON meta (id, timestamp, playTime, worldId, worldName, seed, …). 2. After the first newline: gzip of JSON { store, wall, matrix, shadow, authorization }. matrix / shadow / authorization use packed lists (RLE-style), not full typed arrays. Void decompresses to 213 KB . The live sim still uses full 3840 buffers. - Loader ComponentId: HUD and overlays - Grid sizes: Grid and chunks - Save IPC: Electron bridge",
    "path": "/okf/internals/boot",
    "id": ""
  },
  {
    "title": "Custom maps IPC",
    "body": "Renderer API: window.electron.customMaps (see Electron bridge). Preload method IPC channel Args Returns --- --- --- --- save(id, name, data) custom-map-save { id, name, data } { success, path? } or { success: false, error } load(id) custom-map-load map id string full map object or null list() custom-map-list none metadata array delete(id) custom-map-delete map id string { success } or { success: false, error } Path: / .custommap. Two-line text file (same pattern as saves): 1. Line 1 — JSON metadata extracted at save time: { id, name, seed, createdAt, version, params } from data. 2. Line 2 — full JSON data blob passed to save. load parses line 2 only. list reads line 1 from every .custommap file and sorts by createdAt descending. - id and name in the invoke args are present but the written metadata comes from fields on data. - Map id is sanitized with the same filename sanitizer as saves. - MS Store path: returns { success: false, error: 'No active Xbox user' } when no custom maps folder is available. - Electron bridge - Mods host — map blueprint size limits",
    "path": "/okf/internals/custom-maps-ipc",
    "id": ""
  },
  {
    "title": "`__debug` and F3",
    "body": "window. debug is a renderer helper bag. debug.state is the same object as sandkit.state. admin.run(commandString) forwards to the internal admin runner. Do not call in probes or mods. Verified commandString values (0.5.6 extract): Command Effect --- --- flamethrower Push flamethrower item into player inventory. vacuum Push vacuum item. gun Push gun item. rocket Push rocket launcher item. digger Push digger item. shotgun Push shotgun item. megashotgun Push mega shotgun item. teleporter Push teleporter item. thruster Push mod item thruster. implosionGun Push mod item implosionGun. toast Show admin tutorial-finished toast (persistent). triggers Dump event trigger counts (non-verbose). triggers verbose Dump trigger counts with detail. triggers clear Zero counts on main and workers, then dump after 10 s. Key Live -------------------------------- ----------------------------------------- admin { run, spawnCustomLight } — do not call config Game config object (read OK) state Alias of sandkit.state checkElementPositions fn arity 0 ensureQueuedStructuresAreBuilt fn arity 0 — mutates getSaveFolder fn arity 0 getSchedulingMode fn arity 0 setSchedulingMode fn arity 1 — mutates moveCamera fn arity 2 — mutates tally fn arity 0 trackMemoryConsumption fn arity 1 Current game extract: read sandustry/source/package.json after npm run setup. Probe debug.config.version in a live session. Do not assume the table below on 0.5.5+. Field Value (0.5.2 session) --------------------------- --------------------------- version \"0.5.2\" cellSize 4 chunkSize 40 snapGridCellSize 4 fps 60 lockFps false gravity 216 upflow -21.6 conveyorDefaultSpeed 0.05 obstacleBreakpoint 100 startingResources 0 blueprintEncoding \"binary\" useMultithreading true useExperimentalRenderer false playerSize { width: 12, height: 30 } customMaps.showCustomMaps false mods.showSubscribedMods false config.debug flags (keys only): active, badDisplays, brushShape, brushSize, brushThrottle, cellInspector, controls, countEvents, defaultBaseHue, doNotDrawStructures, drawChunkFade, drawChunks, drawRulers, flashlight, gameOfLife, highlightBrush, i18nDebug, lightSize, overrideLightSize, overrideTerrainShadow, preventDuplicateCells, selectedLightIndex, showAuthorizationZones, showFilters, showLights, showProximityFade, showProximityFadeSelectedOnly, showThreadLoad, showUnderlyingCellsInStructures, stopOnDebugCellUpdate, strictSafeguards, terrainShadowValue. F3 panel chrome is covered in HUD and overlays. Engine overlay register: sandkit.engine.api.debug.register.",
    "path": "/okf/internals/debug",
    "id": ""
  },
  {
    "title": "Electron bridge",
    "body": "Source of truth: sandustry/source/preload.js. Main handlers: sandustry/source/main.js. Live keys match preload. Bridge object: window.electron (ambient free name: electron). Types: @sandustry-modding/types/electron (ElectronBridge, result helpers, nested APIs). Full @param / @returns JSDoc lives on each method in that module. Ambient: electron, ElectronBridge, ElectronLogLevel, ElectronPlatform, and window.electron on @sandustry-modding/types. Webpack helper b8() is true when navigator.userAgent contains \"Electron\" or window.process.type === \"renderer\". electron.load / save run only then. Otherwise the renderer uses IndexedDB (A(e)). A Chromium host that is not Electron must set one of those before js/bundle.js. Throw text Save not found: \" \" is the same for a failed electron.load and a missing IndexedDB save. Method IPC ----------------------------------- ----------------------------------------------------------------------------- getPlatformSync() get-platform-sync — \"steam\" / \"msstore\" / \"gog\" getIsSteamDeckSync() get-is-steam-deck-sync getPreferredSystemLanguagesSync() get-preferred-system-languages-sync getLastPlayedGameSync() get-last-played-game-sync — JSON string { id } saveExistsSync(id) save-exists-sync getSettingsSync() get-settings-sync isFilePatchingActiveSync() is-file-patching-active-sync — true when patch protocol has patched sources getSystemInfo() is local (no IPC): platform, arch, electronVersion, chromeVersion, nodeVersion. - Saves: save, saveSerialized, load, loadRaw, deleteSave, exportSave, importSave, getSaveFiles, getSaveFolder — on-disk layout: Renderer boot - Last played: saveLastPlayedGame, clearLastPlayedGame - Settings: saveSettings - Window: setFullscreen, openDevTools (send, not invoke) - Quit / browser: appQuit, openExternalBrowser - Platform: diagnostics, checkLicense, writeGameEvent, platformPrimeAchievements, platformShowReauthPrompt - Nested: localMods. , customMaps. , platform. (achievements, cloud, workshop, overlay) - Custom maps IPC detail: Custom maps IPC - Log: log(level, scope, message) → log:write fire-and-forget - Xbox listeners: onXboxUserSignedOut SignedIn, onXboxLicenseLost (Steam: never fire) - Sleep: onAppSuspend, onAppResume Steam only. sandustry-patch privileged scheme. setupProtocolInterceptor in main.js runs when workshopPatches.length 0. isFilePatchingActiveSync is true when interceptor is up and patched source map is non-empty.",
    "path": "/okf/internals/electron",
    "id": ""
  },
  {
    "title": "Engine and workers",
    "body": "Load this concept when you need the top-level sandkit shape, must choose public sandkit.api over sandkit.engine, register hooks or events, use storage or assets, or add a workerEntry script with WorkerSandkitApi.[^engine-guide][^runtime-guide][^worker-mods-guide] The engine guide explains the injected global sandkit object in every mod entry and worker entry script. It maps api, apiVersion, engine, enums, react, and state and when to prefer public helpers. It documents sandkit.engine.api as a state-first internal twin and lists engine-only namespaces. It describes top-level state bags under environment, session, shared, and store. It covers runtime enum bags and the separate window.electron host bridge. It notes TypeScript globals and casting sandkit.api to WorkerSandkitApi in workers. The runtime guide covers cross-cutting main-thread services unless noted for workers. It documents hooks.intercept and hooks.modify with options and unsubscribe returns. It explains the frozen events pub/sub bus with common event ids. It lists save-scoped and session-local storage helpers keyed by mod id. It covers assets, mod providers, i18n, sound, sprites, schedule, time, and settings namespaces. It gives a subscribe-on-load and persist-on-change pattern tied to mod lifecycle timing. The worker mods guide is procedural for simulation-side mods. It shows workerEntry in modinfo.json and template build defaults. It stresses that main and worker sandkit.api surfaces overlap but are not interchangeable. It compares full SandkitApi to WorkerSandkitApi documentation paths. It notes shared buffers, paired worker patches, and that worker changes need a game restart after dev hot reload of main scripts. - Official Sandkit API — signature truth for runtime shapes. - How to read Sandkit — how to use generated member pages under /api/. - Generated top-level and runtime namespaces named in the guides: - sandkit.api and sandkit.api.worker - sandkit.engine - sandkit.enums - sandkit.react - sandkit.api.hooks - sandkit.api.events - sandkit.api.storage - sandkit.api.assets - sandkit.api.mods - sandkit.api.i18n - sandkit.api.sound - sandkit.api.sprites - sandkit.api.schedule - sandkit.api.time - sandkit.api.settings - Host bridge: Electron bridge — not part of sandkit. - World: grid and elements — worker element hooks and grid mutation rules. - Factory: structures and pipes — main versus worker factory capability table. - Player: inventory and items — main-thread-only player namespaces. - UI: HUD and overlays — main-thread React UI versus worker toast. - Progression: tech and upgrades — events and load timing for registration. [^engine-guide]: Engine and host shape — /guides/engine.md. [^runtime-guide]: Runtime services — /guides/runtime.md. [^worker-mods-guide]: Worker mods — /guides/worker-mods.md.",
    "path": "/okf/internals/engine-and-workers",
    "id": ""
  },
  {
    "title": "Engine config and extend",
    "body": "Both live on sandkit.engine.api (internal). Prefer public sandkit.api in mods unless you already hold state. Not a plain namespace. It is Object.assign of a reader function plus helpers: Member Signature Role --- --- --- (state, key) arity 2 Read merged mod JSON config for key. Delegates to internal resolver that merges defaults with per-mod overrides and legacy URL overrides. getLegacy() arity 0 Returns the static legacy game config object (r.A / debug.config — cell size, gravity, multithreading flags, etc.). set(state, value) arity 2 Write config override into state (internal persistence path). Public mods use sandkit.config(\"namespace\", defaults) at load time. That registers defaults the (state, key) reader merges later. Do not confuse engine.api.config(state, key) with the public sandkit.config function. Arg Type Role --- --- --- state game state Required first arg (state-first API). namespace string Target bag key on the internal API extension map (Vt). impl object or value Implementation merged at Vt[namespace]. Implementation: extend:(state, namespace, impl) = { Vt[namespace] = impl }. Used by the engine to register internal namespace fragments. Mods should not call this unless mirroring engine boot patterns. - Engine API - debug — debug.config is the legacy static object from getLegacy().",
    "path": "/okf/internals/engine-config",
    "id": ""
  },
  {
    "title": "Engine API",
    "body": "sandkit.engine.api is the state-first twin of public sandkit.api. Prefer public methods. Engine calls take game state as args[0] . Types: node modules/@sandustry-modding/types/src/sandkit/engine/. Reference: SandustryTypes. Live counts (0.5.5): public 60 namespaces, engine 88 . sandkit.engine.state === sandkit.state. assets, gameConfig, mods, pickups, settings, shared, structureBehaviors, time. Public workers is only setPostUpdateEnabled. Public mods is only getProviders. Also on engine with state-first signatures: blueprints (serialize/localize structures), entities (getById, getAllByType, spawnAtWorld, remove, launch, startCapture, collect), factory (getLevel, getProcessCount, getProcessRate), pipes, processing, game ( start({ skipIntro? }) — mutator, probes must not call it). Official HTML omits top-level api.processing and deprecated api.world ; prefer api.grid . Public api.entities coexists with engine.api.entities (engine has extra register/spawn helpers). Arity table: Worker entry API. Ns Methods (live) ------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- augments getDig/Gun/Phase/RocketAmmo/RocketReload/SprintCap Level, hasBigDig, hasBulletSpeed, hasBulletTracer, hasKickstartBoost, hasPhaseDash, hasPhaseDashCharge, hasRideBoost, hasRocketDamage, hasRocketWarhead, hasSprintPower, hasTripleShot auralite ensureProducedAtLeast, getProduced blueprints delete, exportAllString, exportString, getAll, importString, load, save clipboard activate, clear, get, getHistory, getSignalLinks, selectFromHistory, set colorPicker CYCLE/NO/RANDOM COLOR, PREDEFINED COLORS, close/get/set/toggle palette, hex/rgba, render\\ coloringTool colorStructure, floodFillColor, get/setColor, isColorableStructure, isMatchColorMode, isPaintBucketMode, toggle\\ config reader arity 2 + getLegacy / set — see Engine config and extend conveyors registerType debug register drones kill, spawn entities createLight, getAll, getAllByType, getAllTypeDefs, getSprite, getTypeDef, launch, registerSpawner, registerType, spawn, startCapture extend arity 3 (state, namespace, impl) — see Engine config and extend extensions define factory addViabilityGold, canUnlockNextTier, ensureProcessAtLeast, flushDeferredLevelUps, getLevel, getProcessCount, getProcessRate, recordProcess, unlockNextTier foliage generate, getClusters, getContainer, hasProcgenData foundationColorPicker getColor game load, save, start — save(state, name, id?) returns save id string, omit id for new slot, pass id to overwrite. Loader Starting game : Renderer boot heatTransfer absorbAdjacentElements, addTemperature, computeDiffused/EqualizedTemperature, consumeTemperatureNear, ensureTemperature, equalizeConnected launchers registerType lightColorPicker getColor matters getMatterTypeFromId, register, runSolidUpdate misc register portals getMarkers prefabData getAll, getAllMetadata, getArtifactLocations, getAtCell, getMetadata prefabDecor getPlacementByName, replaceDecor prefabulator localizeBlueprintStructures, serializeBlueprintStructures prismaline / prismite consume, getAvailable, getConsumed queue enqueue, enqueueInTicks, enqueueSkipTick, process, registerHandler, removeByKey retroConsole registerGame shadows refresh, refreshRadius, refreshRect strataform getDefaultConfig, getRegisteredTypes, registerType, trigger, triggerByType swarmConsole decrementConvergenceBuffer, getCrystalMined, getDiskRadiusCells, getEntityType, getNearestConvergence, getPendingConvergence, getPlacedConsoles, getRadiusPx, isSpawnJammed, registerEntityType, resetAllConvergenceBuffers, setSpawnJammed sweeperDrone cancelSelection teleportZones add, getAll, getAtCell, getById, remove, spawnDefaultParticles, teleportPlayerTo tutorialBuild areAll/FamilyTargetsBuilt, canPlaceAtActiveTarget, getFoundationMoveDests/Sources, getTargets, hasDefinition, isStepConstrained, matchesFoundationMove/Remove, shouldProtectActiveTargetAt usageTracker clear, getLatest, getMostUsed wall getPaletteData, getWallDataAt, getWallDataSize, setWallDataAt workerLocal clear, get, getOrInit, set Overlap namespaces (action, building, camera, …) exist on both bags with different signatures. Use sandkit.api in mods unless you already hold state.",
    "path": "/okf/internals/engine",
    "id": ""
  },
  {
    "title": "Gaps",
    "body": "Still open: - Live attach to simulation / manager / utility workers (extract surface: Workers runtime, Worker entry API, Worker attach) — CDP :9222 still exposes one renderer page on 0.5.6 (re-checked this pass) - platforms/msstore.js and platforms/gog.js source bodies — not shipped in Steam app.asar; platform interface and detection documented in Store platforms; per-store cloud / achievement IPC shapes stay unknown until a non-Steam build is extracted - Webpack module ids after the next game build (re-grep — Webpack module ids) Resolved in this pass: - shared.sim / store.world / related shared raster headers (no full dumps) — Shared buffer headers; live 0.5.6 probe on CDP :9222 - Live worker-thread sandkit parity (main vs worker namespaces, extract facade) — Worker entry API - MS Store / GOG availability in Steam channel — confirmed missing from live Steam app.asar file list; detection and main-process guards in Store platforms Resolved earlier (2026-09-15): - MS Store / GOG platform detection and Steam-only extract limits — Store platforms - Noise constructor API (seed, simplex2/3, perlin2/3) — Procgen Noise - webpackChunksand v1 probe ids 46781 (FH) and 77135 (tech grid) on 0.5.6 — Webpack module ids - engine.api.config / extend — Engine config and extend - debug.admin.run command strings — debug - Custom maps IPC payloads — Custom maps IPC - Fixed sim worker count (dynamic, not 14) — Renderer boot, Workers runtime Deprecated aliases on the public API: see API gaps. api.factory.getProcessCount() without an id throws — see Factory: structures and pipes. This Steam session: typeof window.sandkit === \"object\" and ambient sandkit both work in mod entry. CDP evaluate on 0.5.6 often lacks ambient sandkit — use debug.state or webpack FH. Still verify after reload.",
    "path": "/okf/internals/gaps",
    "id": ""
  },
  {
    "title": "Globals",
    "body": "Renderer window extras (0.5.5 vanilla). Standard DOM APIs omitted. Name Role --------------------- ----------------------------------------- electron Preload contextBridge — Electron bridge debug Dev helpers — debug Noise Procgen simplex/perlin class — Procgen Noise webpackChunksand v1 Webpack chunk array (length 1 after load) — Webpack module ids reflow Number (layout tick, changes over time) sandkit top-level keys (live 0.5.5): api, apiVersion, engine, enums, react, state. Injected into mod entry / workerEntry per official HTML (Function wrap around entrySource). Vanilla does not assign window.sandkit. Empty getSandkitMods still reaches Game HUD. Ambient sandkit in MCP evaluate script needs a loaded entry (Steam session with mods, or a harness that sets globalThis.sandkit). This Steam 0.5.5 session: typeof window.sandkit === \"object\". After reload, verify again (may be \"undefined\"). Official API reference: official Sandkit. Prefer api.grid ; live api.world is a deprecated alias of grid mutate/dims plus pickups, runWhenSimulationIdle, redrawAroundCellWhenIdle (world.mutate === grid.mutate on live 0.5.5). sandkit.apiVersion is 1 . Enums on this build: AbilityType, ActionState, ActionType, AuthorizationType, BuildMode, BuildingClearance, CellType, ComponentId, DroneType, ElementType ( Gloom ), ItemId, ItemType, KeyBinding, KeyState, MatterType, PickupType ( Stratacore ), ProjectileType, ReloadType, Scene, StructureType, Tech (221 keys), TechStatus, WorldItemType. ComponentId: 31 keys.",
    "path": "/okf/internals/globals",
    "id": ""
  },
  {
    "title": "Internals",
    "body": "Engine entry, workers, host bridge, extract tree, and non-public surfaces. Live host map for Early Access 0.5.5 . Public mod calls: official Sandkit API (apiVersion 1 ); types at SandustryTypes. Extracted tree: sandustry/source/ (npm run setup). Do not treat the published type reference as complete; confirm on the live object. 0.5.5 notes: sandkit keys — api, apiVersion, engine, enums, react, state. Official HTML documents api.grid; live api.world is a deprecated alias (same mutate, plus pickups, runWhenSimulationIdle, redrawAroundCellWhenIdle). api.game.start({ skipIntro? }) is official but a mutator — document only in probes. store.gloom.emitterPositions, store.createdVersion, store.machineryEngine.runLaunchers. - Engine and workers - Workers runtime - Engine config and extend - Custom maps IPC - Globals - Electron bridge - Engine API - Worker entry API - State bags - Shared buffer headers — typed-array lengths and roles - debug - Extract tree - Renderer boot - Mods host - Store platforms — Steam / MS Store / GOG detection - Procgen Noise — window.Noise constructor - Webpack module ids — probe ids for 0.5.6 - Gaps - Probe",
    "path": "/okf/internals/index",
    "id": ""
  },
  {
    "title": "Host mod loader",
    "body": "sandustry/source/workshop-mods.js (game process). Manifest and patch limits: /modinfo.json.md, /patches.md. Limit Value ------------------ ------------------------------------------------ Manifest file modinfo.json, version 1 API version 1 Manifest max 64 KiB patches.json max 1 MiB, 256 patches/mod Patch id ^[a-zA-Z0-9 .-]+$, max 128 chars Operations replace, remove, insertBefore, insertAfter, wrap Source file max 1 MiB Texture file max 16 MiB (png/webp/jpg/jpeg) Map blueprint max 64 MiB Map config max 1 MiB Map dimension 3840 Color mappings 64 Config fields 64 Choice options 64 configOverrides 32 files, 256 KiB each shaderOverrides 8 files, 256 KiB each Texture overrides 128 (total across static + provider bundles) Asset providers 32 Manifest id: same charset as patch id, not proto / prototype / constructor; must not start with sandkit. Field Role ----------------- ------------------------------------------------------------------------------------------------------------------ gameVersion Optional { minimum?, maximum? } semver-like strings. Loader skips the mod when the running game is out of range. shaderOverrides Maps shader ids to relative .glsl paths under the mod folder. A manifest must still declare at least one of: entry, workerEntry, configOverrides, shaderOverrides, textureOverrides, provides, or map. Sandkit signatures: official Sandkit Each external mod record carries workshop.discoveredVia: Tag Meaning ------------ -------------------------------------------------------------------------------------------------------------------------------- local App-data mods folder (developer / side-loaded) subscribed Steam subscribed workshop item root-scan Numeric folder under the Steam workshop content root. Subscribed items often have only this tag. Depot-shipped mods also use it. Inspector labels: - local → Local - subscribed → Workshop - root-scan with workshop.itemId → Workshop (e.g. Laser Overcharge) - root-scan only, no item id → Core mod Elements from shipped mod content (not owned by a loaded external mod id) are also labeled Core mod in the Elements tab. Built-in enum types stay Core .",
    "path": "/okf/internals/mods-host",
    "id": ""
  },
  {
    "title": "Procgen Noise",
    "body": "window.Noise is a renderer global for procedural generation. It is not part of sandkit.api. Do not confuse it with Pixi NoiseFilter (shader uniform noise). Listed in Globals. Vendored tables also live under dist/js/procgen/noisejs in the extract. Argument Type Behavior --- --- --- seed number (optional) Passed to seed(); defaults to 0 when omitted Boot code also uses new Noise(Math.random()) before terrain passes. Method Args Returns --- --- --- seed(e) number Rebuilds perm / gradP tables simplex2(x, y) two numbers 2D simplex noise sample simplex3(x, y, z) three numbers 3D simplex noise sample perlin2(x, y) two numbers 2D Perlin noise sample perlin3(x, y, z) three numbers 3D Perlin noise sample seed coerces fractional seeds: values in (0, 1) are multiplied by 65536 before flooring. Terrain surface generation constructs Noise, calls seed with the world seed, then samples simplex2 in octave stacks (for example weights 0.5, 0.35, 0.15 on scaled coordinates). Cave and decor passes create fresh Noise instances with derived seeds. Mods rarely need this class — prefer sandkit.api.random and map APIs for gameplay logic. - Globals - Maps API - Background layers",
    "path": "/okf/internals/noise",
    "id": ""
  },
  {
    "title": "Store platforms",
    "body": "Sandustry ships three storefront builds from one Electron main process. The mod-template Steam extract (npm run setup) includes only platforms/steam.js. platforms/msstore.js and platforms/gog.js are not in that tree. A live Steam install app.asar file list (0.5.6) contains only: - platform.js - platforms/steam.js MS Store and GOG module bodies ship in other storefront builds , not in the Steam channel package. No public repo or extract in this workspace contains those files. Facts below come from sandustry/source/platform.js, main.js, and platforms/steam.js on extract 0.5.6 . detectPlatform() in platform.js returns { platform, branch }. Step Condition platform branch label --- --- --- --- 1 process.env.SANDUSTRY PLATFORM set env value SANDUSTRY PLATFORM 2 process.windowsStore truthy msstore process.windowsStore 3 MicrosoftGame.config next to process.execPath msstore MicrosoftGame.config-next-to-exe 4 resources/gog.marker exists under process.resourcesPath gog gog.marker-in-resources 5 default steam default createPlatform(name) loads ./platforms/ .js. Unknown names fall back to Steam with a console warning. Renderer reads the resolved name through electron.getPlatformSync() — Electron bridge. Feature Steam MS Store GOG --- --- --- --- platforms/ .js in extract steam.js only missing from Steam extract missing from Steam extract Workshop / localMods publish Yes No (PLATFORM NAME !== 'steam' guards) No File patching (sandustry-patch protocol) Yes No — scheme not registered No Steam overlay URL validation Yes N/A N/A DevTools menu (default) Yes Disabled (devTools: false) Same as Steam unless MS Store Xbox license / Gaming Services gates No Yes — msstoreStartupLicenseGate, msstoreStartupInitGate No onXboxUserSignedOut / license listeners No Yes when platform hooks exist No GPU overlay flags (OVERLAY GPU FLAGS) Applied Skipped on MS Store Applied Cloud save path helpers Steam cloud via steam.js MS Store cloud via platform module GOG module (not in extract) Achievements Steam API Platform module Platform module GOG-specific main.js branches were not found in the 0.5.6 extract — GOG uses the shared platform interface loaded from platforms/gog.js at runtime. createPlatform(name) loads ./platforms/ .js. Each module exports a common shape; main.js calls optional methods when present. Method / field Steam (steam.js) MS Store (inferred from main.js) GOG (inferred) --- --- --- --- init() Steamworks init + overlay GDK / Xbox init (msstoreStartupInitGate) Expected same contract isInitialized() yes yes yes getPlayerName(), getPlayerId(), getAppId() yes yes yes Achievement unlock / query / clear yes yes (module body unknown) yes (unknown) Cloud save/load/delete + raw yes yes via getCloudSavePath() yes (unknown) checkLicense() always { valid: true } Network + store license gate Unknown primeAchievements(ids) no-op Used on resume Unknown writeGameEvent(name, dimensions?, measurements?) no-op GDK XGameEvent (SessionStart, SessionEnd, telemetry) Unknown overlayOpenUrl(url) Steam overlay N/A on MS Store builds Unknown workshop bag Full Steam Workshop API Absent — guarded by PLATFORM NAME === 'steam' Absent getCloudSavePath() not used Required for save path helpers Unknown refreshGameSaveFolder() not used Called on powerMonitor resume Unknown flushPendingAchievementUnlocks() not used Called on resume Unknown onUserChange(cb) not used 'signed-in' / 'signed-out' → renderer IPC Unknown onLicenseChange(cb) not used Re-runs license gate; may send xbox-license-lost Unknown diagnostics() Steam init + app id Platform module (unknown fields) Unknown Do not invent MS Store or GOG cloud file names or achievement id maps from this table alone. - Sets app.setAppUserModelId from SANDUSTRY MSSTORE AUMID or default HoodedHorse.Sandustry znaey1dw2bdpr!Game. - Startup may block on Xbox init failure dialogs and Gaming Services install prompt (GAMING SERVICES URL). - License gate opens msxbox://game/?productId=9PPH71DV44T7 when unlicensed. - writeGameEvent telemetry hooks when the platform module provides them. - Save-folder refresh on resume uses platform.refreshGameSaveFolder when present. platforms/steam.js wraps steam.js with app id 2764460 . Implements achievements, cloud saves, overlay, and Workshop helpers guarded elsewhere by PLATFORM NAME === 'steam'. - Do not infer MS Store or GOG IPC shapes from the Steam extract alone. - Use electron.getPlatformSync() in a live session when behavior differs by channel. - OKF documents detection, guards, and interface calls here. - Per-store achievement ids, cloud manifest layout, and GDK event payloads stay open until platforms/msstore.js or platforms/gog.js is extracted from a matching storefront build. - Electron bridge - Extract layout - Gaps",
    "path": "/okf/internals/platforms",
    "id": ""
  },
  {
    "title": "Probe",
    "body": "Read-only inspection of live host objects. Return JSON-serializable data only. 1. Read keys and call sync getters only (getPlatformSync, getSystemInfo, isFilePatchingActiveSync). 2. Done when the named object's keys (or the matching internals reference) match the live object. Do not invoke: appQuit, save / load / deleteSave, saveSettings, setFullscreen, workshop subscribe/unsubscribe/download, achievement unlock/clear, engine.api.game. , debug.admin.run, debug.setSchedulingMode. - Object.keys / getOwnPropertyNames on sandkit, sandkit.engine.api, sandkit.state. , window.electron, debug. - Sync electron: getPlatformSync, getIsSteamDeckSync, getPreferredSystemLanguagesSync, isFilePatchingActiveSync, getLastPlayedGameSync, getSystemInfo, saveExistsSync. - Read fields on debug.config (plain data). sandkit.state === sandkit.engine.state === debug.state. - Any ipcRenderer.invoke that writes disk or Steam (save, settings, workshop, achievements, quit). - sandkit.engine.api.game.load save start and public sandkit.api.game.start. - Engine mutators (factory.unlockNextTier, drones.spawn, teleportZones.teleportPlayerTo, queue.process, wall.setWallDataAt). - debug.admin.run, debug.moveCamera, debug.setSchedulingMode, debug.ensureQueuedStructuresAreBuilt. For MCP evaluate script rules, see Evaluate.",
    "path": "/okf/internals/probe",
    "id": ""
  },
  {
    "title": "Workspace `sandustry/`",
    "body": "Gitignored. Created by npm run setup. Do not edit by hand; re-run setup after a game update. Path Role ----------------------------------- ----------------------------------------------------------------------- sandustry/source/ Full app.asar extract except node modules/ (refreshed each setup) sandustry/source/dist/ Renderer (index.html, js/bundle.js, …). Integration tests boot here sandustry/source/main.js Electron main sandustry/source/preload.js contextBridge → window.electron sandustry/source/workshop-mods.js Mod host / patch loader sandustry/logs/ Link to OS logs (main.log, …) sandustry/saves/ Link to OS saves sandustry/workshop/ Link to Steam Workshop content/2764460 Current extract: read sandustry/source/package.json version after setup. Entry main.js. Steamworks via steamworks.js. Legacy sandustry/ - / folders are removed on the next npm run setup. Pretty bundle for patch find strings: sandustry/source/.formatted-source/bundle.js when present. Copy finds from sandustry/source/dist/js/bundle.js after a game update (Patches). Author-facing layout: Template repo → Folder layout → sandustry/ .",
    "path": "/okf/internals/sandustry",
    "id": ""
  },
  {
    "title": "Shared buffer headers",
    "body": "OKF records constructor, length, and role for large typed arrays. Do not log full cellIds, elementData. , or horizon arrays in probes. Live sample: 0.5.6 , 1024 × 1024 dev-tools save (irishbruse.dev-tools-exitsave). Campaign 3840 × 3844 saves scale lengths by width height (see formulas below). Probe entry: debug.state on CDP :9222 — Evaluate. Field Live (1024) Scales with --- --- --- width, height 1024 Save / map size chunkSize 40 debug.config.chunkSize chunkWidth, chunkHeight 26, 26 ceil(width / chunkSize) elementCapacity 1 000 000 Fixed at boot liveElementCount[0] Active element count Runtime Field Constructor Length (1024 save) Length formula --- --- --- --- cellIds Uint32Array 1 048 576 width height chunkShouldUpdate Uint8Array 676 chunkWidth chunkHeight chunkShouldUpdateNext Uint8Array 676 same terrainType Uint8Array 1001 Fixed lookup table (terrain ids 1–1000) idStats Uint32Array 220 ceil(elementCapacity / 10 000) + 120 — Sim stats overflowPool Uint32Array 100 001 Fixed — Sim stats liveElementCount Uint32Array 1 Atomic counter nextElementSlab Uint32Array 1 Slab allocator head elementSlabsExhausted Uint32Array 1 Slab exhaustion flag nextDamagedId Uint32Array 1 Damaged-ground id allocator freeDamagedIds Uint32Array 999 000 Damaged-ground free stack freeDamagedIdCount Uint32Array 1 Stack depth Cell id encoding: Grid and chunks. All columns length elementCapacity (1 000 000 on live builds). Field Constructor Notes --- --- --- type Uint8Array Element type id x, y Uint16Array Cell coordinates velocityX, velocityY Float32Array px/s or sim units minVelocityX, minVelocityY Float32Array Velocity clamps thresholdX, thresholdY Float32Array Movement thresholds hasBeenUpdated Uint8Array Tick dirty flag isFreeFalling Uint8Array Physics state density Float32Array Matter density variantIndex Uint8Array Visual variant durationMax, durationLeft Float32Array Timed elements skipPhysics Uint8Array Physics opt-out movesYAxis, movesYAxisCount Uint16Array Vertical move tracking lastSideChecked Int16Array Collision side linkedElementIndex Uint32Array Paired element index hasDuration Uint8Array Duration active dataField1, dataField3 Uint16Array Mod / vanilla data slots dataField2 Int16Array Signed data slot dataField4 Float32Array Float data slot Index an element with elementIndex = cellId - 1 000 001. Sample one index only in probes. Field Constructor Length (1024 save) --- --- --- type Uint8Array 999 000 hp Uint16Array 999 000 Index with cellId - 1001 when 1001 ≤ cellId ≤ 1 000 000. Bag Fields Constructor / length (1024) --- --- --- mapData data, width, height Uint8Array len 4 194 304 (= width height 4) wallData data, width, height, paletteData data: Uint8Array len 1 048 576 ; paletteData: len 1020 shadowMap data, width, height Uint8Array len 1 048 576 authorization data, width, height Uint8Array len 1 048 576 — zone id per cell waterPresenceZones data, waterPresenceZonesWidth, waterPresenceZonesHeight Uint8Array len 1024 ; zone grid 32 × 32 on 1024-wide maps Zone grid: zoneCols = floor(width / 32), zoneRows = floor(height / 32). 3840-wide campaign saves use 120 × 120 zones — Sim stats. Field Constructor Length --- --- --- schedulingMode Uint8Array 1 hybridScheduling Uint8Array 1 Layout: Workers and scheduling. Session-owned object on debug.state.store.world. No typed-array cell rasters here — those live under shared.sim / shared.mapData. Key Live shape (1024 save) Role --- --- --- size { width, height } World size in cells horizon, groundHorizon number[], len width Per-column silhouette heights matrixTraverseDirection number Sim traverse direction updatedElementIndices array Pending element sync list deferredChunkReports array Chunk report queue fixtures object[] World fixture records lights object[] World light records sensors object[] Artifact / sensor placements teleportZones object[] Teleport zone defs Campaign saves add rows and non-empty decor arrays — store.world session metadata. - Never paste full buffer dumps into OKF or probe logs. - Lengths change with save grid size; always read width / height first. - Worker threads read the same SharedArrayBuffers; renderer debug.state is the supported probe path until worker CDP exists — Worker attach. - State bags - Grid and chunks - Sim stats buffers - Gaps",
    "path": "/okf/internals/shared-buffers",
    "id": ""
  },
  {
    "title": "State",
    "body": "sandkit.state keys: environment, sandkit, session, shared, store. Stubs in node modules/@sandustry-modding/types/src/sandkit/engine/state.d.ts are thinner than live. Large typed arrays under shared.sim, shared.mapData, and related bags are documented by header only — Shared buffer headers. Do not dump full buffers in probes. action, actionLocked, ambience, animations, building, buttons, cache, camera, cheat, cinematic, colors, construction, debug, effects, explosions, externalMods, factoryProcessRates, input, lerpCamera, lexicon, lightZones, lights, mainSensorCache, mods, monitor, movementSpeedMultiplier, music, nextTickCallbacks, notifications, overrideCamera, paused, platform, prefabWorldItemCache, reconMode, rendering, resolution, runtime, saving, scale, settings, soundBox, soundEngine, sprintBoost, teleportZoneCache, timestep, triggers, ui, view, visualParticles, windows, zoomLevel. Nested: session.ui — dialogs, discoveryPopups, hudHidden, introScreen, listeners, nextListenerId, overlays, tooltip, visible. session.debug — brush. session.cheat — bypassCosts. achievements, conservatory, createdVersion, creatures, discoveries, drones, factoryLevelCap, gloom, hints, integrity, lockedTechs, machineryEngine, meta, mods, objectives, options, owner, pipes, player, productionPoints, progression, projectiles, pumpsCache, queue, resources, scene, stratacores, structures, tutorial, upgrades, version, viability, world, worldItems. Notable 0.5.5 fields: version (game build, e.g. 0.5.5 ), createdVersion (save origin, may lag, e.g. 0.5.2 ), gloom.emitterPositions (array), machineryEngine.runLaunchers (boolean), stratacores (array). actionState, authorization, collectorGoldCount, conveyorBeltsAnimationIndex, debug, energy, energyBatteryDirty, energyChange, gold, goldChange, hybridScheduling, listenerPos, managerPerformance, mapData, mods, mouse, mutationSync, naturalAmbience, playerPos, productionPoints, reservoir, schedulingMode, shadowMap, sim, wallData, waterPresenceZones (+ Height/Width), workQueue, workerCompletion, workerDetailEnabled, workerDetailPerformance, workerPerformance. schedulingMode and hybridScheduling are Uint8Array length 1 (JSON prints { \"0\": 1 }). Layout: Workers and scheduling. events, gameReady, graphics, hooks, keyBindings, mods, registeredLauncherTypes.",
    "path": "/okf/internals/state",
    "id": ""
  },
  {
    "title": "Webpack module ids",
    "body": "The renderer exposes webpackChunksand v1 — a webpack chunk array (length 1 after load). Push a synthetic chunk to call webpack require (id) from CDP evaluate. Warning: numeric ids are build-specific . Re-verify after every game update. Capture behavior in OKF concepts; treat ids as probe shortcuts for 0.5.6 only. Replace MODULE ID from the table below. See Evaluate for full FH example. Module id Export / role Use when --- --- --- 46781 { FH, … } — FH is sandkit.engine.api state.sandkit.engine missing; need FH.energy, FH.structures.build, FH.maps.getArtifactLocations, etc. 77135 Tech registry: getTechGrid, getTechNodes, getTechConnections, getTechDefinition, addTechDefinition, … Research UI coords, built-in tech graph mining — Tech tree structure",
    "path": "/okf/internals/webpack-modules",
    "id": ""
  },
  {
    "title": "Webpack module ids.`46781` (`FH`) quick map",
    "body": "FH namespace Example call --- --- structures FH.structures.build(state, { x, y }, type) terrains FH.terrains.createAt(state, x, y, cellType) energy FH.energy.getNetwork(state, x, y) maps FH.maps.getArtifactLocations(state) elements FH.elements.getElementTypeFromId(state, id) collector FH.collector.getValueFromElementType(state, type) Full engine surface: Engine API.",
    "path": "/okf/internals/webpack-modules",
    "id": ""
  },
  {
    "title": "Webpack module ids.`77135` exports (partial)",
    "body": "getTechGrid() returns a 2D array (live 0.5.6 : 27×9 , 56 nodes). getTechConnections() returns edge data for rendering. parseTechTree logic lives in the same module (minified). Webpack maps numeric chunk ids to filenames inline in bundle.js. These files are human-scannable without module ids: Chunk file Role --- --- external-mod-worker-runtime.js Mod workerEntry facade — stable file name; internal module ids differ simulation-worker.js Simulation threads manager-worker.js Launcher / machinery manager utility-worker.js Utility thread Worker webpack module numbers inside simulation-worker.js share the id space with bundle.js but CDP cannot attach to them on 0.5.6 — Worker attach. Anti-pattern Why --- --- Document only n(38394) with no export name Id will change next build Assume sim-worker id 46781 without renderer check Same id may bind different code per chunk entry Use webpack hook for public sandkit.api when ambient sandkit works Prefer official API in mod entry scope 1. Read sandustry/source/package.json version. 2. Grep bundle.js for export name (getTechGrid, FH:) and note new id. 3. Update this page and any probe snippets in Evaluate / domain probes. 4. Log the change in OKF log. - Evaluate - Globals - Extract layout",
    "path": "/okf/internals/webpack-modules",
    "id": ""
  },
  {
    "title": "Worker entry (official)",
    "body": "Public worker sandkit.api is the Worker entry section of official Sandkit. The Steam renderer MCP session only sees the main object. Official worker namespaces: constants, collector, effects, elements (includes swapBetweenCells, moveBetweenCells, markMovementBlockedByIndex), events, hooks, fire, patterns, player (read helpers), random, terrains, ui.toast, utils, lights.temporary, main.emitEvent, maps.getActive, worker.getIndex / getCount, shared.buffers.require, structures (no register / buildAtCell), structures.processing.isEnabledAtCell, grid (no mutate / forEachCellIn ). Live worker attach (simulation / manager / utility) is still open. Do not assume main-thread aliases (api.world, api.processing, WhenIdle) exist on workers. Main-thread public API: SandkitApi ( 50 namespaces). Worker public API: WorkerSandkitApi ( 21 namespaces + deprecated world alias). Mod workerEntry loads external-mod-worker-runtime.js (chunk 247 ). Its sandkit.api keys match the worker type list below (verified on extract 0.5.6 ). Namespace Main sandkit.api Worker sandkit.api Notes --- --- --- --- constants yes yes Physics skip modes, etc. collector yes yes effects yes yes Worker: world coords only elements yes yes Worker adds swapBetweenCells, moveBetweenCells, movement-block helpers events yes yes Worker uses local adapter + emitToMain fire yes yes grid yes yes Worker: immediate cell ops; no mutate / forEachCellIn hooks yes yes Worker hooks are thread-local copies lights.temporary yes yes main no yes emitEvent to renderer only maps yes yes Worker: getActive only patterns yes yes player yes yes Worker: read / collision helpers only random yes yes shared.buffers yes yes Worker adds require for mod SABs structures yes yes Worker: no register / buildAtCell; has processing.isEnabledAtCell terrains yes yes ui.toast yes yes utils yes yes worker no yes getIndex() / getCount() world yes (deprecated) yes (deprecated) Alias of worker grid action, assets, authorization, building, blueprints, camera, cooldown, discoveries, entities, energy, excavation, factory, game, gameConfig, i18n, input, items, mods, pipes, pickups, processing, progression, projectiles, raycast, reactions, rendering, resources, scene, schedule, settings, signals, sound, sprites, storage, structureBehaviors, tech, time, tools, triggers, upgrades, workers yes no Main-thread or renderer-only Live worker evaluate is not available on CDP :9222. Treat this table and the extract facade as authoritative until worker CDP attach exists — Worker attach. Source: sandustry/source/dist/js/external-mod-worker-runtime.js. Loaded inside simulation and utility workers for external mod scripts. Top-level: api, apiVersion 1 , engine, enums, state. Worker sandkit.api namespaces: constants, collector, effects, elements, events, fire, grid, hooks, lights.temporary, main, maps, patterns, player, random, shared.buffers, structures, structures.processing, terrains, ui.toast, utils, worker, world. There is no worker entities, projectiles, pickups, or drones namespace on this facade. Thread index: sandkit.api.worker.getIndex() / getCount().",
    "path": "/okf/internals/worker-api",
    "id": ""
  },
  {
    "title": "Worker `api.player` (extract + 0.5.6)",
    "body": "Read-only helpers on worker sandkit.api.player: Method Maps to --- --- getPositionAtWorld() engine.api.player.getPosition(state) getWorldPosition() same reference as getPositionAtWorld isCollidingWithCell(x, y) engine.api.player.isCollidingWithCell(state, x, y) isWithinRadiusOfCell(x, y, r) engine.api.player.isWithinRadius(state, x, y, r) No mutators or inventory helpers on workers. Details: Player state and API. Boot and thread mesh: Workers runtime. Call Public Engine ------------------------- ---------------------------------------------------------------------------- ------------------------------------------------------------------------------------- entities spawn spawnAtWorld arity 3 spawn arity 4 (state first) factory getLevel arity 0 arity 1 (state) factory getProcessCount arity 1 (process id required) present on engine pipes isAtCell, isEnabledAtCell, getConnectedVentsAtCell, setEnabledAtCell isAt, isEnabledAt, getConnectedVentsAt, setEnabledAt blueprints serializeStructures, localizeStructures save, load, delete, getAll, exportString, importString, exportAllString",
    "path": "/okf/internals/worker-api",
    "id": ""
  },
  {
    "title": "Workers runtime",
    "body": "Three dedicated game workers load from sandustry/source/dist/js/: Worker file Worker name Role --- --- --- simulation-worker.js simulation-worker Element sim threads (one worker instance per thread) manager-worker.js manager-worker Manager-side sim coordination utility-worker.js utility-worker Utility-side work and external mod worker entry Factory vi(kind) picks the script. When electron.isFilePatchingActiveSync() is true, workers load via synchronous XHR + Blob URL so patched sources apply. Otherwise workers use new Worker(new URL(...)) against the bundled chunk paths. yi() builds the simulation thread list at boot. Count formula: Math.max(2, (navigator.hardwareConcurrency 4) - 2), capped at 18 . Each thread gets: - Its own simulation-worker instance with meta.startingIndex and meta.threadCount. - A dedicated MessageChannel port to the manager worker. - Pairwise MessageChannel ports to every other simulation thread (full mesh). Boot docs that mention a fixed 14 threads are outdated for this extract. Thread count follows hardware. environment.multithreading.simulation holds: - manager — manager worker handle. - utility — utility worker handle. - utilityChannel — MessageChannel to utility. - threads[] — simulation worker thread records above. - resolvers — cross-thread RPC completion tracking (done vs threads.length). - postAll(state, message) — broadcast to all simulation threads (used for launcher registration, tutorial steps, event count clears, structure updates, etc.). Shared buffers created at boot include shared.workerCompletion (size 2 threadCount 4 bytes as Float32Array). Simulation and utility workers load chunk 247 (external-mod-worker-runtime.js) when executing mod workerEntry scripts. createExternalWorkerEntryRuntime(state) builds a per-mod sandkit facade: - Top-level keys: api, apiVersion ( 1 ), engine, enums, state. - engine.api is a thin { api: sandkitInternal } wrapper (same pattern as main). - Worker sandkit.api namespaces (frozen facades): constants, collector, effects, elements, events, fire, grid, hooks, lights.temporary, main.emitEvent, maps.getActive, patterns, player, random, shared.buffers, structures, terrains, ui.toast, utils, worker.getIndex / getCount, world. Worker hook/event ids are aliased (terrain:updated → terrain:update, worker:update:post → update:post, etc.). Mod scripts run as new Function(\" sandkit\", ...) with sourceURL sandkit-workshop:// / . Shared buffers use keys external: : and must be created on the main entry before workers load. manager-worker.js embeds default transport JSON (conveyors, launchers cadence, game-of-life debug patterns). Launcher velocity defaults for built-in structure ids live there — see Launchers. MCP attach to simulation / manager / utility worker globals is still open on CDP :9222 (renderer-only targets on 0.5.6). See Worker attach for live checks and renderer proxy scripts. This page documents extract paths and runtime shape only. - Worker entry API - Renderer boot - Engine and workers",
    "path": "/okf/internals/workers-runtime",
    "id": ""
  },
  {
    "title": "Attach",
    "body": "Chrome DevTools MCP on the Sandustry Electron renderer. Official Sandkit API: official Sandkit. After attach, open the matching OKF domain for vanilla facts. 1. GetDynamicTools once for the tool you need (skip repeat discovery on the same tool). 2. list pages — pick title Sandustry , URL file://.../dist/index.html. 3. Remember pageId; it changes after reload, reconnect, or a new tab. Re-run list pages when a call fails or the game restarted. 4. Done when the next MCP call succeeds on that pageId. Port Instance ------- ---------------------------------------------------------------------------------- :9222 Player / Steam / F5 debug renderer :9224 Extracted-game Chromium (npm run test:integration, .tmp/sandustry-test-chrome) Never kill Sandustry. Ask the user for a hard reload when code or mods changed. Restart the game (F5) after worker.js or patches.json changes. Do not use save reload as a substitute on Steam. Screen work → UI: HUD and overlays for labels and panel maps. 1. take snapshot (prefer over screenshot). 2. Click uid from the latest snapshot. Uids die after DOM changes — snapshot again before the next click. 3. press key when focus matters; use includeSnapshot: true to confirm. If keys are swallowed, dispatch keydown via evaluate script or click Menu [Esc] . 4. fill form beats many fill/click pairs on the same form. 5. Done when the target label or state flag appears in the latest snapshot or script result. - Evaluate — read live state with evaluate script - Triage — when attach or click fails",
    "path": "/okf/live/attach",
    "id": ""
  },
  {
    "title": "Evaluate",
    "body": "Read live state with evaluate script. - Set waitForStableDom: false. - Return JSON-serializable data only; slice large strings (for example .slice(0, 2000)). - Batch related reads in one function — not one call per field. - Large output → filePath under .tmp/. Use the first path that works: Ambient sandkit worked in evaluate script on 0.5.5 (hasSandkit: true when sandkit.api exists). On 0.5.6 (live CDP :9222, agent-browser and sandustry MCP), typeof sandkit and globalThis.sandkit are both undefined in evaluate scope even in-game (scene 4). window.sandkit may still be missing on older builds — check typeof window.sandkit. Fall back to debug.state for store, shared, and state.sandkit.mods. reads. Use sandkit.api only when hasSandkit: true (mod entry scope or builds where ambient binding returns). Do not call mutators (api.game.start, saves, grid writes) unless the user asks. Mutator bans live in each domain probe reference.",
    "path": "/okf/live/evaluate",
    "id": ""
  },
  {
    "title": "Engine API when `sandkit` is missing (0.5.6)",
    "body": "When debug.state exists but state.sandkit.engine is absent, resolve the webpack engine bag once per session: Module 46781 exports FH (sandkit.engine.api). Use FH.structures.build(state, { x, y }, structureType) — not buildAtCell. Place Block terrain (FH.terrains.createAt) under snap cells before building. Read-only probes should prefer FH.maps.getArtifactLocations(state) and FH.energy.getNetwork(state, x, y). Full id table: Webpack module ids. Done when the returned shape answers the question (or Triage explains why not). - Probe internals — host object safe/unsafe lists - Script templates — reusable bundles - Attach — pick pageId before evaluate",
    "path": "/okf/live/evaluate",
    "id": ""
  },
  {
    "title": "Feature save setup",
    "body": "Most OKF gaps cite a feature-empty probe save (0 pipes, 0 energy structures, 0 entities, flat authorization). This playbook builds targeted saves so domain probes can read real instances. User must ask before any mutator in this file. These scripts write game state and disk saves. Pass waitForStableDom: false on every MCP call. Re-run list pages after reload; pageId changes. On live CDP :9222, ambient sandkit is often missing in evaluate script. Use the same resolver as Evaluate: When hasSandkit is false but hasDebug is true, bind helpers inside each script: Prefer sandkit.engine.api / eng for placement and spawn calls when public sandkit.api is unreachable from evaluate scope. Baseline Grid Typical load Best for --- --- --- --- Void world phases 3840² campaign or cleared save Manual void scripts + eng.game.save Empty canvas; you place only what you need Dev-tools autosave world 1024 × 1024 ?db load=irishbruse.dev-tools-autosave-1 (or your mod world id) Fast boot; mod registry loaded; F5 / Steam debug flow Template F5 test world 1024 × 1024 Template npm run dev + F5 Mod authoring; same grid math as dev autosave Dev autosave pattern (live 0.5.6): save id irishbruse.dev-tools-autosave-1, chunk grid 26 × 26 (676 chunk flags) — Grid and chunks. Void-world Phase 1 already clears store.pipes, store.pumpsCache, structures, and entities. Run void phases first when you need a clean slate on a campaign-sized map. First call omits existingId. Later calls pass the returned id to overwrite the same slot. See void-world Save as you go. Fix hotbar before other work on fresh worlds (activeSlotIndex: null crashes input) — void-world Phase 1. Place structures at snap-grid cells (config.snapGridCellSize 4 ). Use a small platform in void saves (Block terrain id 15 ) so the player can reach build cells.",
    "path": "/okf/live/feature-save-setup",
    "id": ""
  },
  {
    "title": "Feature save setup.Pipes and pumps",
    "body": "Unlocks factory gaps: store.pipes / pumpsCache dumps, pipes.isEnabledAtCell, getConnectedVentsAtCell, session.cache.pipes on a live network. Builtin ids: Pipe 23 , Pump 24 , LiquidVent 25 — Factory enums. Adjust cx/cy for 1024-grid saves (stay away from map edges). Verify with Factory probe reads.",
    "path": "/okf/live/feature-save-setup",
    "id": ""
  },
  {
    "title": "Feature save setup.Energy and signals",
    "body": "Unlocks energy gaps: getNetworkAtCell populated shape, energy.addAtCell partial-fill behavior (mutation — user ask), linked store.mods.signals.links buckets beyond empty save. Place a conductor/storage structure registered in state.sandkit.mods.energy (for example powerBrick, goldBattery). Use engine signal link / set only with user approval — Engine signals runtime. Minimal pattern (structure ids vary by registry — read keys first): For signal wire graphs, place a sender and receiver pair (signalButton → signalGate), then use in-game link tool or engine signals.link with user ask. Persisted graph: Clipboard signal links.",
    "path": "/okf/live/feature-save-setup",
    "id": ""
  },
  {
    "title": "Feature save setup.Entities (drones, projectiles, world items)",
    "body": "Unlocks entity gaps: live drone data, non-empty getMarkers, projectile attributes under motion. Use eng.entities.spawn / eng.drones.spawn only when the user asks — see Entity probe unsafe list. debug.admin.run('digger') etc. grant tools, not world entities — debug.",
    "path": "/okf/live/feature-save-setup",
    "id": ""
  },
  {
    "title": "Feature save setup.Authorization zones",
    "body": "Unlocks factory gap: non-zero shared.authorization.data samples. Turn on F3 show authorization zones (config.debug.showAuthorizationZones) to visually confirm — debug. Save label Features placed Primary gaps closed --- --- --- ProbePipes Pipe line + pump + vent Factory pipes API and store dumps ProbeEnergy Power brick / battery + optional signal link Energy getNetworkAtCell, signal links on disk ProbeEntities Drone or projectile spawn Entity instance data, counts by type ProbeAuth NoBuild stamp Authorization grid samples ProbeFactory Conveyor + launcher + queued build Factory queue, launcher registry live Combine features in one save when batching probes — keep grid area small on 1024² maps. After setup, run domain quick dumps (Factory probe, Energy probe, Entity probe) with debug.state paths only. Done when the target gap item in the domain gaps.md can move to a concept file or is marked confirmed. - Void world — full map wipe and platform - Evaluate — 0.5.6 entry resolution - Worker attach — worker-thread limits after feature saves - Extract layout — source paths when live placement is blocked",
    "path": "/okf/live/feature-save-setup",
    "id": ""
  },
  {
    "title": "Live",
    "body": "MCP and Chrome DevTools playbooks for attaching to a running Sandustry session. Official Sandkit API: official Sandkit. After attach, open the matching OKF domain for vanilla facts. - Attach - Evaluate - Worker attach - Feature save setup - Triage - Script templates - Void world",
    "path": "/okf/live/index",
    "id": ""
  },
  {
    "title": "Script templates",
    "body": "Pass waitForStableDom: false on every template unless the script opens UI. One call beats separate polls for mods, overlays, and reload state. Prefer over click chains when the goal is data, not UI walk coverage. Example args: (\"lexicon\", sk.enums.ComponentId.Lexicon). When snapshot uids are awkward (stacking, z-index): Pass element uids via args when the MCP tool supports snapshot references. Full save wipe — structures, terrain, background, map fog, player platform. User must ask. Topic File ---------------------------------------------- ----------------------------------------------------- Batch sizes, save-as-you-go, all phase scripts Void world Background buffers and Pixi layers Background layers Quick save helper:",
    "path": "/okf/live/scripts",
    "id": ""
  },
  {
    "title": "Triage",
    "body": "Signal Fix ------------------------------------ ---------------------------------------------------------------------------------------------------------------------------------------- list pages empty or errors Game not running, or debug port off. Steam/F5 uses :9222. Integration tests: npm run test:integration brings up Chromium on :9224. Page list has no Sandustry title Wait for load, or pick the file://.../dist/index.html renderer tab. Call fails after game reload Re-run list pages; stale pageId is the usual cause. Signal Fix ------------------------------------- -------------------------------------------------------------------------------------------------- hasSandkit: false, hasDebug: true Use debug.state paths from World / Internals. sandkit is not defined Mod scope symbol missing — open a save in Game scene first; see attach check in Scripts. scene not Game Main menu or loading — load a save, or wait for auto-load (modkit/test/session.ts retries). gameReady false or loading shown Boot still running (shader warmup can take 30s after scene Game). setupGame() waits for both. Exception in evaluate Wrap risky calls in try/catch inside the function; return { error: String(e) }. Huge inline response Re-run with filePath: \".tmp/...\". Signal Fix --------------------- ---------------------------------------------------------------------------------------------- uid not found Snapshot again; never reuse uids from an earlier turn. press key no effect Canvas stole focus — click Menu [Esc] or use evaluate script keydown on window. Pause row won't click Pause rows are often div.cursor-pointer — match innerText, not role. See UI. 1. list console messages with types: [\"error\",\"warn\"]. 2. For poll/debug: list network requests with resourceTypes: [\"fetch\",\"xhr\"]. 3. Ask the user for hard reload if behavior still matches old code. worker.js or patches.json changes need a process restart — stop and start; do not only reload the save. Signal Fix -------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------ Cannot read properties of undefined (reading 'handleAction') Hotbar on mod item (type: 4) or null slot — set bank 0 slot 0 to { id: 1, type: 1 }. See Void world triage. Player not moving in void No ground — place Block tiles (cellId 15) under player; setMovementMode('normal'), clear isHovering. action.getSelected() hotbar slot Cancel build mode: api.building.cancelPlacement(), clear session.building.activeStructureType. MCP evaluate script timeout on full grid Batch 256 rows for buffer clear, 128–512 for revealFogAtCell.",
    "path": "/okf/live/triage",
    "id": ""
  },
  {
    "title": "Void world (batched MCP)",
    "body": "Turn a live save into an empty void world via evaluate script. User must ask — these are mutators, not probe scripts. Grid: 3840 × 3840 cells (api.grid.getDimensions() / shared.sim.width / height — confirmed 0.5.5). Full-grid work must be batched or MCP times out and the renderer freezes. Pass waitForStableDom: false on every call. Re-run list pages after reload; pageId changes. Prefer public api.grid.revealFogAtCell for in-world fog (official HTML). Engine eng.world.revealFogAtCell(st, x, y) is the state-first twin — same effect; keep for scripts that already hold st. Work Rows per MCP call Notes ------------------------------------------------------------------ ----------------- -------------------------------- Buffer clear (cellIds, wallData, shadowMap, mapData) 256 Fast TypedArray.fill per row api.grid.revealFogAtCell (or engine.api.world.revealFogAtCell) 128–512 128 safe; 512 OK for map uncover Structures / background / player fix 1 call Small metadata Save every 1024 cleared rows or after each fog chunk group. Use engine save (queues session.saving, writes via main process): First save returns a new id string. Pass that id on later saves to overwrite the same slot. Run once before grid batches. Fixes activeSlotIndex: null on fresh worlds (prevents later input crashes). Replace startY / endY each call. Example: 0→256, 256→512, … 3584→3840 (15 calls). Optional save after every fourth batch: Clears procgen decor and hides Pixi background layers. See Background layers. The map screen uses a separate buffer from world revealFogAtCell: Field Path Live ----------- -------------------------- ------------------------------------------- Fog raster store.mods.map.fogBuffer 960960 (4:1 vs world cells) Size fogWidth, fogHeight 960 Compression fogBufferCompressed true = RLE triplets; false = flat array Small fix (one call — do not teleport-grid scan; that freezes): Close and reopen the map ( M ) after save. World-cell revealFogAtCell batches do not fill this UI buffer. Even after buffer clear, run revealFogAtCell in batches if in-world fog cells remain. Use 512-row chunks with saves. Public path (preferred): Engine-only equivalent: eng.world.revealFogAtCell(st, x, y) inside the same loops. Repeat with startY / endY: 512→1024, 1024→1536, … 3072→3840. Fog terrain ids: 4, 5, 6, 13 (Cells). Void worlds have no ground. Place Block terrain (cellId 15 ) and reset movement. Pick a weapon or tool hotbar slot — not a mod item or structure belt slot. Console: TypeError: Cannot read properties of undefined (reading 'handleAction'). Cause Fix ---------------------------------------------------------------- --------------------------------------------------------------------------------------------------------- Hotbar on mod item (type: 4) without handler Set hotbarIndex / activeSlotIndex to vanilla { id: 1, type: 1 } weapon or { id: 2, type: 3 } tool activeSlotIndex: null on new game Force bank 0, slot 0 before other mutations Build mode still targeting structure api.building.cancelPlacement(), clear session.building.activeStructureType action.getSelected() shows structure while hotbar shows weapon Trust hotbar.bars[bank][slot]; cancel build mode Movement in void: player falls until isOnGround is true — place Block (15) tiles under feet. - Background layer map: Background layers - Save IPC shape: Engine API (game.save) - Player hotbar / action: Player: inventory and items - MCP attach: Script templates attach check",
    "path": "/okf/live/void-world",
    "id": ""
  },
  {
    "title": "Worker attach",
    "body": "Chrome DevTools MCP on :9222 attaches to the renderer page only . Dedicated game workers (simulation-worker, manager-worker, utility-worker) do not appear as separate CDP targets on live 0.5.6 (Steam, dev-tools exit save loaded). Re-checked 2026-09-15 (/json/list on :9222): still one page target (file://…/dist/index.html). Use this playbook before assuming worker-thread sandkit probes will work. Check Live 0.5.6 result --- --- list pages / /json/list One target: title Sandustry , file://.../dist/index.html Target.setDiscoverTargets + Target.getTargets Same single page target — no worker rows (2026-09-15 re-check) Renderer evaluate script debug.state works; ambient sandkit undefined — see Evaluate Worker Worker handles do exist on the main thread after boot. They are not debuggable as their own pages with the current Electron CDP setup. Run on the attached renderer page (waitForStableDom: false): Live sample (0.5.6, 14 hardware threads): 14 simulation workers (startingIndex 0–13, threadCount 14), plus manager and utility handles. Thread count follows max(2, hardwareConcurrency - 2) capped at 18 — see Workers runtime. Webpack chunk map in sandustry/source/dist/js/bundle.js: Chunk id File Worker name option --- --- --- 937 simulation-worker.js simulation-worker 147 manager-worker.js manager-worker 360 utility-worker.js utility-worker Boot factory vi(kind) in the same bundle: - Normal load: new Worker(new URL(...), { name }) against bundled chunk URLs. - File patching active (electron.isFilePatchingActiveSync()): sync XHR of js/ + Blob URL worker (sets self.sandustryWorkerChunkBaseUrl). Mod workerEntry runtime loads chunk 247 → external-mod-worker-runtime.js inside simulation and utility workers. Facade shape: Worker entry API. manager-worker.js is a small standalone script (conveyor/launcher defaults JSON embedded). Simulation and utility bundles are large webpack chunks sharing module ids with the main game. Goal Renderer path --- --- Thread count / ids environment.multithreading.simulation.threads[].meta Scheduling mode shared.schedulingMode, debug.getSchedulingMode() — Workers and scheduling Chunk sim flags shared.sim.chunkShouldUpdate Worker timing bags shared.workerPerformance, workerCompletion, managerPerformance — sample heads only Energy / gold SABs shared.energy, shared.gold, … — Energy probe Store arrays copied to workers store.projectiles, store.drones — main store; not on worker public API — Entity store keys Mod worker sandkit surface Read external-mod-worker-runtime.js extract — parity table in Worker entry API; not live worker evaluate Do not post arbitrary messages to threads[i].worker from probes unless the user asks — that mutates sim state. - evaluate script inside a simulation, manager, or utility worker global. - List worker targets on :9222 (confirmed empty after Target.setDiscoverTargets). - Assume worker-thread sandkit.api matches renderer aliases (api.world, WhenIdle, etc.) — Worker entry API. Open cross-domain gaps that need worker attach: worker energy sim, worker structure mutations, per-thread chunk ownership, worker copies of upgrades/projectiles — see domain gaps.md files. Re-run: 1. /json/list — look for type: \"worker\" or dedicated worker URLs (simulation-worker.js, etc.). 2. Target.getTargets after Target.setDiscoverTargets({ discover: true }). 3. Attach with a worker targetId, then probe typeof sandkit, sandkit.api.worker.getIndex(), and sandkit.api.worker.getCount(). Log findings in Workers runtime and this page. - Attach — pick renderer pageId - Evaluate — debug.state entry resolution on 0.5.6 - Workers runtime — boot mesh and postAll - Feature save setup — build saves that exercise worker-side features from the renderer",
    "path": "/okf/live/worker-attach",
    "id": ""
  },
  {
    "title": "Item abilities",
    "body": "store.player.inventory[].abilities[] holds runtime ability objects. Each entry has type (sandkit.enums.AbilityType) and optional attributes. Probe source: debug.state.store.player.inventory on a mid-progress autosave (32 toolbox rows). type Enum member (typical) Items on this save --- --- --- 1 Dig Shovel (ItemId 1) — no attributes keys 2 Projectile (or weapon fire) Gun (6), Rocket launcher (8), Flamethrower (12), Digger (9) — attributes.projectileBlueprint Tools without combat projectiles (Grabber, Demolisher, Vacuum, Copier, Grappling hook, Cryoblaster, Hauler) have abilities: []. Mod belt items (itemType: 4, string ids) also have abilities: []; they rely on registered handleAction instead. Shared wrapper on gun, rocket launcher, flamethrower, and digger abilities: Item Ability count Notable attributes --- --- --- Gun (6) 3 blastRadius: 3; center shot + angle: ±5 spread variants Rocket launcher (8) 1 cooldowns.emitSmoke.time: 100 inside projectile attributes Flamethrower (12) 1 cooldowns.emitFire.time: 16; opts.duration: 0.64, noMuzzleFlash: true Digger (9) 1 hp: 1; red tracerLight on opts Gun live opts.speed is 600 . Rocket launcher opts.speed 100 , duration 3 . Flamethrower opts.speed 240 . Digger opts.speed 300 . No session.tools object on this save (null). Copier source, Digger recall, Teleporter targets, and Hauler route are not on session top-level keys. Check mod-specific store.mods. slices when probing those tools. - Items and hotbar - Player enums - Player gaps - Probe",
    "path": "/okf/player/abilities",
    "id": ""
  },
  {
    "title": "Action",
    "body": "Active tool or structure use state while the mouse button is down. Field Role ------------ ------------------------------------------------------------------------------- point { x, y } world pixel aim point state Map keyed by ActionState value (\"1\"=Start, \"2\"=Active, \"3\"=End) - bool customData Mod payload from api.action.setCustomData or null store.player.action stays null during play — do not use it for live action. Method Arity Notes --------------------- ----- ---------------------------------------------------------- getActive() 0 AssetRef in use (may differ from selected while holding) getSelected() 0 Hotbar AssetRef setCustomData(data) 1 mutate — attach to active handler Returns { id, type } where type is ItemType (structure slots use Mod=4 for placed structures). Member Value -------- ----- Weapon 1 Building 2 Tool 3 Mod 4 Member Value ------ ----- Start 1 Active 2 End 3 session.actionLocked blocks new actions when true. Input loop calls definition.handleAction(state, action). If the definition lookup is undefined, the renderer throws and movement stops. Trigger Fix -------------------------------------------------------------- ------------------------------------------------------------------------------- Hotbar type: 4 mod item without handler ( : ) Switch to vanilla weapon { id: 1, type: 1 } or tool { id: 2, type: 3 } New game activeSlotIndex: null Set hotbarIndex: 0, activeSlotIndex: 0 before mutations Build mode active structure api.building.cancelPlacement(), session.building.activeStructureType = null action.getSelected() may still report a structure id while hotbar.bars[bank][slot] shows a weapon — trust hotbar after canceling build mode. - Items and hotbar - Building mode - Enums - Probe",
    "path": "/okf/player/action",
    "id": ""
  },
  {
    "title": "Building mode",
    "body": "Placement mode and session flags — not structure catalogs. Structure recipes live in Factory: structures and pipes. Building UI overlays live in UI: HUD and overlays. Field Role --------------------- ------------------------------------------------ activeStructureType Selected type id or null start { x, y } anchor cell for drag placement placing Preview or placement in progress amountOfTiles Tile count for current drag lockedAngle Locked rotation or null ignoreAngleLock Skip angle lock (mod binding may override B ) There is no session.building.ghost field in the 0.5.6 extract or live dev-tools save. Placement preview is computed each frame, not stored on session.building. While placing is true, the engine builds a tile list for the drag shape. Each preview cell: Field Type Role --- --- --- x, y number Snap-grid cell origin structureType number or string Resolved type for that cell (includes launcher left/right splits, quantumPortal / quantumPortalExit pairs) clearance number or null sandkit.enums clearance value, or null when skipClearance",
    "path": "/okf/player/building",
    "id": ""
  },
  {
    "title": "Clearance enum (`sandkit.enums` — extract)",
    "body": "Member Value Preview flash --- --- --- Available 1 build flash FullyBlocked 2 build flash3 PartiallyBlocked 3 build flash2 CanBeReplaced 4 treated like partial in overlay linkedClearance: \"allOrNothing\" downgrades the batch if any cell is FullyBlocked. Preview draws overlay flashes at cell cellSize with fade timing during multi-tile drags. Field Role ------------------ --------------------------------------- marqueeActive Area select mode (KeyBinding.Marquee) demolisherActive Demolish mode (KeyBinding.Demolish) rulerActive Ruler overlay (KeyBinding.Ruler) Member Value ------------- ----- Linear 1 Rectangular 2 Used by structure definitions for drag shape — not stored on session.building directly. Method Arity Notes ---------------------------------------- ----- ---------------------------------------------------------- getSnappedPositionAtCell(cellX, cellY) 2 Snapped world { x, y } pixels isBlockedAtCell(cellX, cellY) 2 Placement blocked cancelPlacement() 0 mutate — clear preview selectStructure(typeOrId) 1 mutate — pick structure, returns resolved id or null StructureType enum: SandustryTypes. engine.api.building: getSnappedCellPosition(state, x, y), isBlockedByTerrainOrElements(state, x, y), cancelPlacement(state), selectStructure(state, id). session.cheat.bypassCosts — when true, placement ignores resource costs (Debug). Read-only unless user asks. - Factory: structures and pipes - Session state - Input - Enums",
    "path": "/okf/player/building",
    "id": ""
  },
  {
    "title": "Camera",
    "body": "Field Role -------- ----------------------------- x, y Camera center in world pixels Related session fields (read-only probes): Field Live sample ------------------------- ------------------------------- zoomLevel 1 overrideCamera false — scripted focus active lerpCamera false movementSpeedMultiplier 1 — pan speed when focused Method Arity Notes ------------------------------- ----- ---------------------------------------- snapToPlayer() 0 mutate setFocusAtWorld(x, y) 2 mutate — move focus, returns applied releaseFocus({ durationMs? }) 1 mutate — return to player engine.api.camera: snapToPlayer(state), setFocusAtWorld(state, x, y), releaseFocusToPlayer(state). debug.moveCamera mutates view. It needs explicit user ask — see Engine and workers. - Session state - Probe",
    "path": "/okf/player/camera",
    "id": ""
  },
  {
    "title": "Clipboard",
    "body": "Blueprint copy and paste buffer on sandkit.engine.api.clipboard. Binds to KeyBinding.Copy / Paste (live: Control+KeyC / Control+KeyV). Method Arity Notes ------------------------- ----- ---------------------------------------------------------------- get() 0 Current clipboard structure data or null getSignalLinks() 0 Signal link sidecar or null getHistory() 0 Array of past copies { id, timestamp, data, signalLinks? } set(data, signalLinks?) 2 mutate clear() 0 mutate selectFromHistory(id) 1 mutate — restore history entry activate() 0 mutate — paste preview, may close building or blueprint windows set(data, signalLinks?) and activate() both use the same normalized structure rows. Normalizer hf(state, rows) deep-clones the array and strips data when the structure config has copyData: false or skipCopyData: true.",
    "path": "/okf/player/clipboard",
    "id": ""
  },
  {
    "title": "Clipboard.Per-structure row",
    "body": "Field Type Notes --- --- --- type number or string Structure type id originalPos { x, y } Source cell before copy/move x, y number Position relative to selection anchor (snap-grid aligned) filter object? Cloned when present data object? Cloned when copyData allows; omitted for Collector and when config strips copy color string? Structure tint when set Paste/move also accepts optional signalLinks : { from:{x,y}, to:{x,y}, on:boolean }[] keyed by original cell positions.",
    "path": "/okf/player/clipboard",
    "id": ""
  },
  {
    "title": "Clipboard.`activate()` side effects",
    "body": "Calls the copier paste path: sets session.action.customData with mode: Copying, marqueeSelected: true, selectedStructures, optional signalLinks, and mouseOffset from selection bounds. Closes blueprint window when open. Clipboard history UI lives in UI: HUD and overlays under Building → Blueprints tab. - Input - Gaps - Probe",
    "path": "/okf/player/clipboard",
    "id": ""
  },
  {
    "title": "Coloring",
    "body": "Engine-only namespaces on sandkit.engine.api. There is no public sandkit.api twin. Method Role ---------------------------------------- --------------------------------------- getColor(state) Structure color hex (default ff0000) setColor(state, hex) mutate isPaintBucketMode(state) Paint bucket on togglePaintBucketMode(state) mutate — binding often B isMatchColorMode(state) Match-color mode toggleMatchColorMode(state) mutate colorStructure(structure, cell, color) mutate floodFillColor(state, cell, color, …) mutate isColorableStructure(structure) Type can be painted Symbol / method Role ------------------------------------------------------------ ------------------------- NO COLOR null RANDOM COLOR \"random\" CYCLE COLOR \"cycle\" PREDEFINED COLORS 16 hex swatches getActivePalette() Open palette id or null setActivePalette(id) mutate togglePalette(state, id, slot?) mutate closePalette(state, slot?) mutate hexToRgba / rgbaToHex Color conversion getRandomColor / getCycleColor Pick swatch renderColorButton / renderPalette / renderColorSection UI helpers Method Role ----------------- ---------------------------------------- getColor(state) Foundation tint (live default 555555) Method Role ----------------- ------------------------------------------------------------ getColor(state) Wall light RGBA array, random and cycle modes use picker helpers Persistent mod storage (via sandkit.engine storage helpers), not on the coloring item : store.mods key Live shape (idle save) --- --- foundationColorPicker { hasLastBatch, lastColor } — lastColor null until used lightColorPicker {} — active RGBA read through lightColorPicker.getColor(state) The coloring tool is a hotbar item (coloringTool sprite). Paint state is session/engine API only. Signature: floodFillColor(state, structure, color, matchColorMode?). Behavior Detail --- --- Connectivity 4-neighbor BFS on structures sharing the same type, stepping by snapGridCellSize matchColorMode true Only fills neighbors whose existing color matches the seed (including both unset) color Pass null / picker NO COLOR to clear Return Count of cells recolored Limits are structural (same type, optional color match), not a fixed cell cap in extract. On Steam CDP :9222, sandkit.engine.api is often unreachable. Use extract signatures above; mod bags are readable from debug.state.store.mods. - Gaps - Probe - Engine and workers",
    "path": "/okf/player/coloring",
    "id": ""
  },
  {
    "title": "Player enums",
    "body": "Live on sandkit.enums. . Generated docs: SandustryTypes. Member Value ----------- ----- Linear 1 Rectangular 2 Member Value -------- ----- Weapon 1 Building 2 Tool 3 Mod 4 Member Value ------ ----- Start 1 Active 2 End 3 Member Value ---------- ----- Weapon 1 Tool 2 Consumable 3 Mod 4 Member Value -------------- ----- Shovel 1 Grabber 2 Demolisher 3 GrapplingHook 4 Vacuum 5 Gun 6 Copier 7 RocketLauncher 8 Digger 9 Shotgun 10 Teleporter 11 Flamethrower 12 PipeRemover 13 Hauler 14 Cryoblaster 15 MegaShotgun 16 Hotbar structure slots use string ids (e.g. \"conveyor\") with type: 4 (Mod), not ItemId. Member Value ------ ----- Dig 1 Shoot 2 Spray 3 Laser 4 String ids for sandkit.api.input.getBoundKeys. Members include: OpenBuildMenu, OpenInventory, OpenTechTree, OpenUpgrades, GrapplingHook, Escape, Pause, Left, Right, Boost, Descend, Hover, SprintBoost, Marquee, Demolish, BuildMode, ReverseBuildDirection, OverrideReplaceStructures, Ruler, Copy, Paste, Flip, Delete, QuickSave, QuickLoad, ToggleGameHud, PauseCamera. Live key map: Input. - Player state and API - Items and hotbar - Action - Building mode",
    "path": "/okf/player/enums",
    "id": ""
  },
  {
    "title": "Player gaps",
    "body": "Still open: - Live sandkit.engine.api coloring probes on Steam CDP (mod bags on store.mods documented from debug.state) Resolved this pass (CDP :9222, 0.5.6 extract + live probes): - Worker-thread api.player read helpers — Player state and API - engine.api.tutorialBuild constraints and store.mods.tutorialBuild distinction — Tutorial - Teleporter locations[] — no entry schema in shipping 0.5.6; array unused — Tools and grabber Resolved in this pass (see linked concepts): - Per-tool runtime bags — Tools and grabber (inventory.data, session.action.customData, digger projectiles; not store.mods. for core tools) - Deck cursor flow in pad mode — Input - Building preview geometry (no session.building.ghost) — Building mode - Clipboard / copier structure-array schema — Clipboard - Coloring floodFillColor and store.mods picker bags — Coloring Documented elsewhere: - inventory.hasById string vs numeric — Player state and API - getRegisteredIds() mix — Items and hotbar - abilities[] matrix for toolbox items — Item abilities - Probe",
    "path": "/okf/player/gaps",
    "id": ""
  },
  {
    "title": "Player",
    "body": "Inventory, items, tools, camera, input, and placement. - Inventory and items - Player state and API - Items and hotbar - Item abilities - Tools and grabber - Building mode - Input - Camera - Action - Coloring - Clipboard - Session state - Player enums - Player gaps - Player probe",
    "path": "/okf/player/index",
    "id": ""
  },
  {
    "title": "Input",
    "body": "Key binding ids and live key codes — not the full Options Controls table. Full controls UI lives in UI: HUD and overlays. Field Role -------------------------------------- ----------------------------------------------------------------------------------------------------------------- mode \"kbm\" or deck mode currentLastKey, currentLastKeyCode Last key event keys Map of KeyboardEvent.code - pressed (KeyW, ShiftLeft, ...) bindingStates Per-binding hold state (often {}) action { move: { order: [] }, boost: bool } — movement intent mouse pressed, clicked, released, position, worldPosition, cellPosition, lastCellPosition, lastBigMoveX deckLastManagementTab, deckCursor Steam Deck UI — fields still exist when mode is \"kbm\" (see below) Method Arity Notes --------------------------------------- ----- -------------------------------------------------------------------- registerBinding(id, defaultKeys, def) 3 mutate getMousePositionAtCell() 0 { x, y } cell under cursor, alias getMouseCellPosition (same fn) getMousePositionAtWorld() 0 { x, y } world pixels under cursor getBoundKeys(bindingId) 1 Key strings from settings getDisplayKey(bindingId, fallback?) 2 UI label triggerBinding(id) 1 mutate — fire down handler pressBinding(id) 1 mutate — down without release releaseBinding(id) 1 mutate — fire up handler resetMouseState() 0 mutate isCtrlHeld() 0 Modifier isAltHeld() 0 Modifier getBoundKeys uses settings strings like \"Control+KeyC\". session.input.keys uses KeyboardEvent.code. Modifier aliases (Shift, Control, ...) expand to ShiftLeft / ShiftRight, etc. Probe: api.input.getBoundKeys(sandkit.enums.KeyBinding. ). Binding id Live keys ------------------------------ ------------------------------------------ OpenBuildMenu KeyQ OpenInventory Tab OpenTechTree KeyT OpenUpgrades KeyU GrapplingHook KeyG Escape Escape Pause KeyP Left / Right / Boost / Descend KeyA / KeyD / KeyW / KeyS Hover Space SprintBoost Shift Marquee KeyC Demolish KeyX BuildMode KeyR ReverseBuildDirection Alt OverrideReplaceStructures Control Ruler KeyV Copy / Paste / Flip Control+KeyC / Control+KeyV / Control+KeyH Delete Backspace QuickSave / QuickLoad F5 / F9 ToggleGameHud F4 PauseCamera KeyN Mod and per-save rebinding can change these. Re-probe before simulating keys. When session.input.mode is \"kbm\", deck helpers remain on the object but stay idle until deck mode is active. Live probe (0.5.6, kbm): Field Live value Role --- --- --- deckCursor.x, deckCursor.y 0, 0 Virtual cursor cell position deckCursor.initialized false Deck cursor not active on this session deckCursor.aimX, deckCursor.aimY 1, 0 Aim vector when deck aims deckLastManagementTab \"inventory\" Last management column tab for deck navigation Gamepad activity sets session.input.mode to \"pad\" and clears deckCursor.initialized. When mode !== \"pad\", the keyboard/mouse input path runs instead. During gameplay (not paused, menu closed): Aim mode When Cursor behavior --- --- --- Free Building active, grabber tool, or other free-aim tools On first use, deckCursor.{x,y} seeds from current mouse position (canvas-normalized). Left stick moves deckCursor and writes session.input.mouse.position. Sets mouse.available = true. Fixed Most weapons and tools mouse.position = player center + 40 deckCursor.aimX/Y offset from camera. Right stick updates aimX / aimY (normalized). Other pad routing (same handler): - Start (gamepad button 9): toggles pause menu. - Select (button 8): cycles management tabs using deckLastManagementTab. - D-pad while paused/menu: tab navigation helpers. - Left stick below threshold synthesizes KeyBinding.Left / Right key codes into session.input.action.move. - Triggers map to boost (session.input.action.boost). Return to \"kbm\" when Steam Input reports keyboard/mouse activity (lt loop checks (0,ue.A0)()). - Session state - Enums - UI: HUD and overlays - Probe",
    "path": "/okf/player/input",
    "id": ""
  },
  {
    "title": "Inventory and items",
    "body": "Load this concept when your mod moves the player, changes inventory or building unlocks, registers items or hotbar actions, binds input, adjusts camera focus, or drives structure placement from code.[^player-guide] The player guide lists main-thread versus worker availability for player-facing namespaces. It covers world position, velocity, movement mode, and ground contact queries. It documents inventory and building unlock mutators that prefer public APIs over raw store edits. It explains item registration, active hotbar slot queries, and definition patches. It distinguishes the action slot tracker from registered item definitions. It describes cooldown helpers for ability timing. It covers grabber tool size and load state. It documents camera snap, focus, and release. It walks through custom key bindings, mouse cell position, and synthetic binding triggers. It explains the building placement session with snap, block checks, and cancel. - Official Sandkit API — signature truth for runtime shapes. - How to read Sandkit — how to use generated member pages under /api/. - Generated namespaces named in the guide: - sandkit.api.player - sandkit.api.items - sandkit.api.action - sandkit.api.cooldown - sandkit.api.tools.grabber - sandkit.api.camera - sandkit.api.input - sandkit.api.building Live 0.5.5 vanilla facts for player probes: - Player state and API — store.player, api.player, cooldown, sprite tint - Items and hotbar — hotbar shape, api.items, action vs items - Tools and grabber — api.tools.grabber - Building mode — placement session and api.building - Input — keys, mouse, bindings - Camera — view center and focus - Action — active use state - Coloring — engine-only color pickers - Clipboard — blueprint buffer - Session state — player-related session keys - Item abilities — abilities[] types and projectile attributes - Player enums — ItemId, KeyBinding, and related enums - Player gaps — not confirmed yet - Player probe — safe read-only MCP rules - UI: HUD and overlays — hotbar UI, HUD updates, and overlay mounts. - Factory: structures and pipes — structure definitions paired with the building session. - Engine and workers — worker read-only player position and collision helpers. [^player-guide]: Primary guide — /guides/player.md.",
    "path": "/okf/player/inventory-and-items",
    "id": ""
  },
  {
    "title": "Items and hotbar",
    "body": "Hotbar UI clicks live in UI: HUD and overlays. This concept covers state shape and sandkit.api.items. Field Role ----------------- --------------------------------- activeSlotIndex 0-9 slot within the bank hotbarIndex 0-4 bank index bars AssetRef[][] — 5 banks 10 slots Each hotbar slot is { id, type }: - id — string structure or mod id (e.g. \"signalRepeater\") or numeric ItemId for tools and weapons. - type — sandkit.enums.ItemType (Weapon=1, Tool=2, Consumable=3, Mod=4). Empty slots are null. MCP cleanup pitfalls (0.5.5): Debug or max saves may inflate inventory.length (e.g. 410 filled slots with duplicates). Deduplicate to one entry per id:itemType. Keep 120 slots with null empties, or a dense array of unlocked items only. After bulk story completion, set store.mods.storyProgression.currentStep to the last completedSteps id — null breaks cold load from the save menu. Rewrite via electron.save / game.save after fixes; .save.backup beside the id holds the pre-write copy. Toolbox rows. Vanilla entries use numeric id (ItemId), itemType, abilities[], i18n keys (nameKey, descriptionKey, categoryKey). Example shovel: id: 1, itemType: 1, ability type: 1 (Dig). Full live matrix: Item abilities. Method Arity Notes ------------------------------- ----- --------------------------------------------------------------------------------------------------------------------------------------------------------- register(definition) 1 mutate — mod item updateDefinition(id, partial) 2 mutate getDefinitionById(id) 1 Mod definition getRegisteredIds() 0 Mixed list: numeric vanilla ItemId values plus string mod ids. Live 0.5.5 length 37 (includes debugPaintBrush, signalLinker, corraller, ...). spriteMounts - Live keys: onehand, backhand, cryoblaster (string mount ids) createById(id) 1 mutate — runtime instance, alias createFromId (same fn) getActive() 0 Definition for active hotbar slot; undefined when slot is a structure isActiveById(id, type?) 2 Compare active slot - action.getActive() / getSelected() return the hotbar AssetRef { id, type } (structure on belt, tool id, etc.). - items.getActive() returns a registered item definition only (tools, weapons, mods), not structures. When the active slot is a structure, action.getActive() has the structure id and items.getActive() is undefined. Fresh worlds can spawn with activeSlotIndex: null. Always set bank 0 and a non-null slot before bulk MCP mutations. Mod belt items (type: 4) may lack handleAction on the definition object — selecting them crashes the input loop. Prefer weapon (type: 1) or tool (type: 3) slots for testing void saves. Entities live in store.mods.entities.list (not store.creatures). Clear with .length = 0 when wiping worlds. - Player state and API - Action - Enums - UI: HUD and overlays",
    "path": "/okf/player/items",
    "id": ""
  },
  {
    "title": "Player state and API",
    "body": "store.player is the live physics snapshot. sandkit.api.player is the public write and read API. Types: node modules/@sandustry-modding/types/src/shared/player.d.ts. Field Role ----------------------- ------------------------------------------------- x, y Hitbox top-left in world pixels width, height Hitbox size (1230 vanilla) velocity, threshold Movement vectors onGround Stale in play — use api.player.isOnGround() speedCapOverdrive Per-axis sprint cap bonuses inventory 120 toolbox slots (InventoryItem[]) buildings Unlocked structure type ids (number[]) tech Tech tree node map action Usually null; active use is in session.action hotbar See Items and hotbar grapplingHook Hook equipped and active flag cooldowns boostParticle, hoverParticle, slowdown isHovering Hover flight mode weaponsMeta e.g. rocketLauncher.ammo Canonical names come from the official Sandkit API. Deprecated aliases remain on the live object (same function reference where noted). Method Arity Notes ------------------------------------ ----- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- getPositionAtWorld() 0 { x, y } world pixels setPositionAtWorld(x, y) 2 mutate ; alias setWorldPosition setVelocity(vx, vy) 2 mutate setMovementSpeedMultiplier(n) 1 1 = walk; 0 freezes, vanilla sprint needs 1 setMovementMode(\"normal\"\\ \"hover\") 1 mutate ; returns changed isOnGround() 0 Solid cell 1px below hitbox teleportToGround() 0 mutate isPositionClearAtWorld(x, y) 2 Hitbox fits, alias isWorldPositionClear isCollidingWithCell(x, y) 2 Worker-shared isWithinRadiusOfCell(x, y, r) 3 Worker-shared inventory.hasById(itemId) 1 Numeric ItemId only on live (1 Shovel true). Enum names and slugs (\"Shovel\", \"shovel\") return false . Missing tools on this save (Shotgun, Teleporter, PipeRemover, MegaShotgun) also return false. inventory.addById(itemId) 1 mutate ; alias addFromId buildings.unlockById(structureId) 1 mutate ; alias unlockByType buildings.removeById(structureId) 1 mutate Aliases confirmed live (0.5.5): getPositionAtWorld === getWorldPosition; inventory.addById === addFromId; buildings.unlockById === unlockByType. sandkit.engine.api.player mirrors the API with state first : getPosition(state), setPosition(state, x, y), isPositionClear(state, x, y), etc. Prefer sandkit.api in probes unless you already hold state. External mod worker runtime (external-mod-worker-runtime.js) exposes a subset on worker sandkit.api.player. All calls bind worker state internally. Method Engine twin Notes --- --- --- getPositionAtWorld() FH.player.getPosition(state) Alias getWorldPosition (same function ref). isCollidingWithCell(x, y) FH.player.isCollidingWithCell(state, x, y) Cell coordinates. isWithinRadiusOfCell(x, y, r) FH.player.isWithinRadius(state, x, y, r) Radius in cells. Not on workers: setPosition, setVelocity, setMovementMode, isOnGround, teleportToGround, isPositionClearAtWorld, inventory, buildings. See Worker entry API. Method Arity Notes ---------------------------------------- ----- --------------------------------------------------------- start(cooldown) 1 mutate — arm cooldown; HTML deprecated alias: check isReady(cooldown, durationOverrideMs?) 2 Read whether elapsed time allows reuse Live 0.5.5: start and check are separate functions (not same reference). store.player.cooldowns holds boostParticle, hoverParticle, slowdown objects passed to these methods. There is no public Sandkit API to tint the vanilla player body. Mods can reach the Pixi sprites on the main thread while the game scene is active: Useful display objects: body, weapon, forearm, container. Each part exposes Pixi tint as a packed RGB integer (0xffffff is the default white). Reset tint to 0xffffff when the effect ends so later frames do not keep the colour. This is main-thread only . Prefer sandkit.api.sprites helpers when you attach mod-owned sprites to the player. - Items and hotbar - Session state - Enums - Probe",
    "path": "/okf/player/player",
    "id": ""
  },
  {
    "title": "Player probe",
    "body": "Read-only inspection of live player objects. Return JSON-serializable data only. sandkit is ambient in MCP evaluate script on some sessions (F5 dev). On this Steam CDP attach (:9222), sandkit and window.sandkit were undefined while debug.state worked. Fall back to globalThis. debug.state for store and session reads when sandkit.api is missing. - Object.keys on sandkit.api.player, tools, building, input, camera, action, items. - Field reads on state.store.player, state.session.{camera,input,building,action,construction,cheat}. - Tool bags: hauler/teleporter inventory[].data, copier/hauler session.action.customData, digger store.projectiles — see Tools. - Sync getters: api.player.getPositionAtWorld(), api.player.isOnGround(), api.tools.grabber.getSize(), api.action.getActive(), api.input.getMousePositionAtCell(), api.items.getRegisteredIds(), eng.clipboard.get(), eng.coloringTool.getColor(state). - Enum objects: sandkit.enums.{BuildMode,ActionType,ActionState,KeyBinding,ItemId,ItemType,AbilityType}. - Player, camera, building, input, action, items, and grabber mutators . - Cooldown start, clipboard set / activate, and coloring setColor / togglePaintBucketMode. - debug.moveCamera and session.cheat.bypassCosts writes. Done when API key lists and samples match the concept files (or the gap is logged in Gaps). - Session state - Gaps",
    "path": "/okf/player/probe",
    "id": ""
  },
  {
    "title": "Session state",
    "body": "Subset of sandkit.state.session used for player, tools, and building probes. Full bag list: Engine and workers. Key Role ---------------------------------------- ------------------------------------------------------------------------------------ camera View center — Camera input Keys and mouse — Input building Placement drag — Building mode construction Marquee, demolish, and ruler flags action Active use state — Action actionLocked Blocks new actions cheat.bypassCosts Free placement movementSpeedMultiplier Session movement scale overrideCamera, lerpCamera Scripted camera zoomLevel Zoom factor reconMode Recon drone active (false when idle) sprintBoost { meter: 0-1, recharging: boolean } — live idle: { meter: 1, recharging: false } windows. Overlay open flags — full key list in DOM and scenes mods.signals Session signal runtime (energy domain) mods (top-level) On this save only signals under session.mods Key Role -------- ------------------------------------------------------------- player Full player snapshot — Player state and API Key Role ------------- -------------------------- playerPos Worker-synced position actionState Cross-thread action mirror mouse Shared mouse snapshot Do not dump large store.world or shared.sim buffers in probes. - Probe - Engine and workers",
    "path": "/okf/player/state",
    "id": ""
  },
  {
    "title": "Tools and grabber",
    "body": "Grabber is the main documented tool namespace. Other tools (Shovel, Demolisher, Copier, …) are hotbar ItemId entries with abilities — see Enums. There is no session.tools object. Vanilla tool state lives on inventory item data , session.action.customData , or store.projectiles (digger). Tool (ItemId) Primary bag Keys (when active) --- --- --- Copier (7) session.action.customData marqueeSelected, mode, start, end, selectedStructures[], signalLinks[], mouseOffset, optional pos, copiedStructure Digger (9) store.projectiles[] type === ProjectileType.Digger; recall sets attributes.despawning / despawnTimer on each Teleporter (11) Teleporter inventory item data { teleporting, locations[], actionStartTime } at spawn — see below Hauler (14) Hauler inventory item data + session.action.customData Item: pendingLine, nextLineId; session edit: { type:\"hauler\", mode:\"editEndpoint\", lineId, endpoint } store.mods. holds mod-system bags (color pickers, portals unlock flag, blueprints storage). It is not the copier/digger/teleporter/hauler runtime path.",
    "path": "/okf/player/tools",
    "id": ""
  },
  {
    "title": "Copier `customData.mode`",
    "body": "Uses sandkit.enums clipboard/move modes (extract: Selected, Moving, Copying). selectedStructures[] entries — see Clipboard structure schema.",
    "path": "/okf/player/tools",
    "id": ""
  },
  {
    "title": "Tools and grabber.Digger recall",
    "body": "Mouse2 (binding text in i18n) runs the diggerDroneCancel trigger. It marks every live ProjectileType.Digger with attributes.despawning = true and shrinks sprites until removal. No digger state bag on the inventory item (weapon uses abilities[] Shoot → digger projectile).",
    "path": "/okf/player/tools",
    "id": ""
  },
  {
    "title": "Tools and grabber.Teleporter item `data` (factory default)",
    "body": "Live probe after debug.admin.run(\"teleporter\") (CDP :9222, 0.5.6): Field Type Notes --- --- --- teleporting boolean Factory false. No other writes in 0.5.6 bundle.js. locations array Factory []. No push or index writes anywhere in the extract. actionStartTime number Factory 0. No other writes in the extract. The teleporter tool handler (module 15283) only lerps the camera on ActionState.Start. It does not read or write locations. locations[] entry schema: not defined in shipping 0.5.6. The array stays empty after admin item push and remains unused in vanilla code. Treat locations as a reserved bag slot, not an active save field.",
    "path": "/okf/player/tools",
    "id": ""
  },
  {
    "title": "Tools and grabber.Hauler item `data`",
    "body": "Accessor j(state, item?) ensures data on the hauler inventory row. Field Role --- --- pendingLine In-progress line before drop-off: { lineId, name, origin:{x,y}, target? } nextLineId Monotonic id allocator for new lines After drop-off confirmation, drones use store.drones[] — see Drones. Method Arity Notes ------------ ----- ----------------------------------------- getSize() 0 Radius in cells (live default 25 ) setSize(n) 1 mutate isActive() 0 Grabber is the selected tool isLoaded() 0 Buffer holds elements Path: sandkit.api.tools.grabber (not top-level api.grabber). Element opt-in: definition isGrabbable — see Grid and elements. Grab skips when isGrabbable === false. sandkit.engine.api.tools: getGrabberSize(state), setGrabberSize(state, n), isGrabberActive(state), isGrabberLoaded(state), blockSwitchIfGrabberLoaded(state). - session.construction.demolisherActive — demolish mode (binding KeyBinding.Demolish). - Grabber loaded state blocks some hotbar switches (blockSwitchIfGrabberLoaded on engine). - Items and hotbar - Building mode - Input - Probe",
    "path": "/okf/player/tools",
    "id": ""
  },
  {
    "title": "Conservatory",
    "body": "Side branch of Research (tickets, creatures, rewards). Research screen: HUD and overlays. sandkit.api.tech.conservatory.appendUnlock(techId, unlocks) — append extra unlocks to a conservatory reward tech. - techId: Tech string (built-in or mod id). - unlocks.structures (optional): structure id strings. - unlocks.items (optional): item id strings. Write — do not call during read-only probes. Purchased state is still store.player.tech[id]. - found : lifetime unique captures (first-time flag uses found === 0 before increment). - available : spendable count for corraller / mechanics that consume critters. - Tickets : spent on conservatory reward tech (currencyType: \"ticket\").",
    "path": "/okf/progression/conservatory",
    "id": ""
  },
  {
    "title": "Conservatory.Ticket curve (first capture only)",
    "body": "On collect, when the species had found === 0 before increment: 1. Count t = number of keys in store.creatures with found 0 after increment. 2. Add 2 t tickets to store.conservatory.tickets. Examples after each first-of-species capture (assuming no prior species): Capture order (species) t after Tickets granted ----------------------- --------- --------------- 1st species ever 1 2 2nd unique species 2 4 3rd 3 8 4th 4 16 5th 5 32 Repeat captures of the same species do not grant tickets. Corraller researched sets session.conservatoryAttention on first find. Toast uses firstPickupToastKey or default entities firstPickup. Legacy saves migrate plural keys (lumlings → lumling, shinelets → shinelet). Very old saves may seed initial tickets from creatures.resinWeaver.available. Five capturable typeId strings register in the extract. Display names in UI/i18n may differ. sortOrder typeId UI name (i18n) Notes --------- -------------- -------------- ------------------------------ 1 shinelet Shinelet Fog spawner; flying light-bug 2 lumling Lumling FogWater spawner 3 resinWeaver Redweaver Ground weaver 4 eyes Voltblub Grounded electric critter 5 voidgrazer Voidgrazer Large flying void critter There are no separate redweaver or voltblub type ids. Pet tuning namespaces shinelet and voltblub in options are unrelated ids. Corraller short-description keys use the typeId strings above. Detail fields: Creature instance fields. Conservatory rewards are rows in engine CONSERVATORY REWARDS (not on the main Research grid). Purchased state is still store.player.tech[id]. Id (enum) Tickets Requires Unlocks (summary) ------------------ ------- --------------- ------------------------------------------------------ ColoringTool (92) 1 — item coloringTool GlassFoundation (95) 1 — structure glassFoundation CritterFence (110) 1 — structure critterFence SignalGate (93) 1 — structure signalGate (UI label \"Door\") GrapplingHook (94) 5 — item GrapplingHook PrecisionTools (96) 5 — items caulk blaster, precision laser, prefabulator SignalDevices (97) 5 — signal structures + item signalLinker SignalControls (98) 5 SignalDevices toggles, buttons, pulse/presence sensors LogicGates (99) 5 SignalControls AND/OR/NOT/NAND/NOR/XOR/XNOR/repeater structures WallTool (101) 10 — item wallTool RetroConsole (100) 20 — structure retroConsole, item retroConsoleController Corraller tech (102) unlocks the conservatory tab when researched. - session.windows.conservatory.open - session.conservatoryAttention, session.conservatoryNewCreature (first capture UX) - store.hints.conservatoryIntroSeen Reward purchase is a tech unlock (not a separate store bag). - Tech tree structure — CONSERVATORY REWARDS source array - Tech — appendUnlock and researched state - Enums — Tech reward node ids - Store cluster — conservatory and creatures bags",
    "path": "/okf/progression/conservatory",
    "id": ""
  },
  {
    "title": "Discoveries",
    "body": "Public API: sandkit.api.discoveries. Main thread only. Method Role ------------------------------- -------------------------------------------------------------------- addElementByType(elementType) Append numeric ElementType to store.discoveries.elements if new. addTerrainByType(terrainType) Append numeric terrain type to store.discoveries.terrains if new. New saves seed starter lists (sand, gold, stone, ...). Live probe on a mid-game save: 65 elements, 5 terrains. Research unlock and world events also call internal discoveries.addElement / addTerrain. session.ui.discoveryPopups is an array of pending popup payloads. Length 0 when idle. Discovery log screen is under Research in the management UI. Lexicon overlaps discovery content. See Lexicon. - Enums — ElementType and CellType ids - Grid and elements — element and terrain registration - Store cluster — store.discoveries bag",
    "path": "/okf/progression/discoveries",
    "id": ""
  },
  {
    "title": "Enums",
    "body": "Live on sandkit.enums. Types: @sandustry-modding/types src/sandkit/enums/index.d.ts. Reference: SandustryTypes. Visibility and research state for UI (not the same as player.tech). Value Name Meaning ----- ---------- ------------------------------ 0 Available May be purchased now 1 Visible Shown but requirements not met 2 Researched Already bought 3 Unknown Enum reserved; vanilla UI unused 4 Hidden Enum reserved; vanilla UI unused Vanilla assigns only Available , Visible , and Researched via engine parseTechTree. Full derivation rules: TechStatus. Mixed numeric and string node ids. Numeric core examples: Shaker=1, Conveyors=2, Flamethrower=5, Gun=6, Hover=108, SprintBoost=109, Heatmap=105, Corraller=102. String examples: FluxEmanator=\"fluxEmanator\", plus mod string ids (aurixiteCrystallizer, swarmConsole, voidOrb, ...). Use String(Tech.Conveyors) (\"2\") or a registered string id (\"fluxEmanator\"). Enum key names (\"Conveyors\", \"Shaker\") return null from getDefinitionById. Lowercase slugs (\"conveyor\") also return null. Live sandkit.enums.Tech has 221 keys on 0.5.5 (numeric core + string mod ids). Types package core enum is in node modules/@sandustry-modding/types/src/sandkit/enums/index.d.ts lines 289-401 ( 110 built-in entries). - ElementType, CellType: discovery and lexicon element ids. - ItemId, StructureType: unlock targets on tech definitions. - DungeonId / Boss1: store.progression.dungeons keys. - TechStatus — runtime status derivation - Tech tree structure — grid branches and colors - Tech — getDefinitionById id format rules - Discoveries — ElementType discovery ids - Progression flags — DungeonId keys",
    "path": "/okf/progression/enums",
    "id": ""
  },
  {
    "title": "Gaps",
    "body": "Resolved in prior passes (see linked concepts): - Per-tech TechStatus without the Research UI helper — TechStatus. - Full conservatory roster and ticket curve — Conservatory. - Objective event ids completion rules — Objectives. - Tech tree structure — grid, edges, branches in Tech tree structure. Resolved this pass (CDP :9222, 0.5.6): - Public sandkit.api.tech.getStatusById — confirmed absent . Only engine parseTechTree derives status (TechStatus). - Vanilla upgrade itemId / upgradeId pairs — 38 leaves on store.upgrades in Upgrades. - Worker-thread store.upgrades — no mirror on debug.state.shared; main-thread store.upgrades is the source of truth. - Live grid coordinates for every string-id node — full getTechGrid() via webpack module 77135 in Tech tree structure. - Mod register() upgrade pairs vs store.upgrades leaves — metadata on sandkit.mods.upgrading (definition objects) vs runtime { level, availableLevel } on store; 10 mod pairs / 38 vanilla leaves on dev-tools save — Upgrades. - Lexicon display names for numeric grid ids 71, 81, 85, 86, 106 — unlock-target cross-ref in Tech tree structure. Resolved this pass: - TechStatus.Unknown / Hidden — reserved enum; vanilla parseTechTree never assigns 3 or 4 (TechStatus). Still open: - Re-probe if a future build assigns TechStatus 3 or 4 in live parseTechTree output. Public progression.complete domains are only tutorial and objective (HTML). No public API for tutorial, lexicon, or objectives besides that. Conservatory unlocks: api.tech.conservatory.appendUnlock. getDefinitionById / player.tech boolean map: Tech and Enums.",
    "path": "/okf/progression/gaps",
    "id": ""
  },
  {
    "title": "Progression",
    "body": "Tech trees, upgrades, discoveries, conservatory, tutorial, objectives, and factory-tier viability. - Tech and upgrades — kit guide index for Research, upgrades, and story steps - Tech — sandkit.api.tech, researched state, locks, definitions - Tech tree structure — built-in grid, edges, branch colors - TechStatus — Research UI status derivation (engine) - Upgrades — sandkit.api.upgrades, store shape, item ids - Discoveries — discovery log elements and terrains - Progression flags — sandkit.api.progression, dungeons, upgrade unlock - Viability — factory tier bar store fields - Conservatory — tickets, creatures, reward tech ids - Tutorial — store.tutorial step machine - Objectives — HUD cards and story progression - Lexicon — encyclopedia session entries - Enums — Tech, TechStatus, related ids - Store cluster — progression keys on store and session - Gaps — open questions and missing public APIs - Probe — read-only live inspection",
    "path": "/okf/progression/index",
    "id": ""
  },
  {
    "title": "Lexicon",
    "body": "In-game encyclopedia (elements, terrains, tech, items, upgrades, mods). No public sandkit.api.lexicon. Read session.lexicon. LexiconEntry shape (live): - kind: \"element\" \"terrain\" \"tech\" \"items\" \"upgrades\" \"projectiles\" \"misc\" ... - id: string key (e.g. \"1\", \"fluxEmanator\", \"grabber:scanner\") - name, description: resolved display strings - source: \"core\" \"mod\" - details: raw backing object compiled is false until the lexicon builder runs (first open or lazy init). On loaded end-game saves it may already be compiled: true with a full entries[] before you open the window (live probe: thousands of entries, elements/tech/items/upgrades). Before first compile: compiled: false, entries.length: 0. - store.discoveries lists numeric type ids the player has seen. - Lexicon entries add names, descriptions, and cross-links for UI search. Discovery popups (session.ui.discoveryPopups) are separate short toasts on first sight. Open via management UI or hotkey. Window state: session.windows.lexicon. - Discoveries — numeric type id lists - Store cluster — session.lexicon and window flags - HUD and overlays — management UI screens",
    "path": "/okf/progression/lexicon",
    "id": ""
  },
  {
    "title": "Objectives",
    "body": "Optional HUD story cards ( Objectives in top right). No public sandkit.api namespace for secondary cards. Primary story objectives use store.mods.storyProgression plus sandkit.engine.api.progression. sandkit.api.progression.complete({ domain, id? }): Call Behavior ----------------------------------------- --------------------------------------------- { domain: \"objective\", id: \" \" } Force-complete one registered secondary card { domain: \"objective\", id: \"all\" } Complete every active incomplete card { domain: \"tutorial\", ... } Skip tutorial (separate flow) Only ids in the built-in registry (qs in extract) succeed for single-id calls. sandkit.engine.api.progression: Method Role -------------------------------- ---------------------------------------------------------------------------- getSteps(state) All story step defs (objective.type: factoryLevel, waypoint, custom) getCurrentStep(state) Active step or null isStepCompleted(state, stepId) Step in completedSteps complete(state, stepId) Finish step when checks pass (returns false if blocked) triggerCurrentWaypoint(state) Advance waypoint step Factory-tier HUD labels ( Reach Factory Tier {level} ) come from story steps with objective.type === \"factoryLevel\". Built-in defs live in extract module 92659 (qs export). Each entry has titleKey, descriptionKey, optional check(state), optional nextObjectives, optional getDescription.",
    "path": "/okf/progression/objectives",
    "id": ""
  },
  {
    "title": "Objectives.Initial active set",
    "body": "New-game init (lF) seeds four cards: 1. research hover 2. build conveyor under water 3. find fluxite 4. upgrade grabber Mid-game saves may drop completed starters (for example research hover after Hover is researched). End-game probes often keep incomplete side branches only.",
    "path": "/okf/progression/objectives",
    "id": ""
  },
  {
    "title": "Objectives.Chain graph",
    "body": "Completing a card pushes any nextObjectives not already in active. Researching Hover tech also calls addObjective(\"hover\") from the tech unlock path.",
    "path": "/okf/progression/objectives",
    "id": ""
  },
  {
    "title": "Objectives.Auto-check cards",
    "body": "Id check(state) rule ------------------------ ---------------------------------------------------------------- research hover player.tech[Hover] === true research flamethrower player.tech[Flamethrower] === true research kinetic press player.tech[KineticPress] === true find fluxite resources.fluxite 0 upgrade grabber any store.upgrades.grabber[ ].availableLevel 0 find artifact resources.artifacts.found = 1 checkObjectives (bS) runs these checks after tech unlock and on other engine hooks. There is no fixed global tick interval in extract; polling is event-driven.",
    "path": "/okf/progression/objectives",
    "id": ""
  },
  {
    "title": "Objectives.Event-driven cards",
    "body": "Id Completion trigger (main thread) ------------------ ------------------------------------------------------------------------------------------------ build conveyor under water building:placed — conveyor-like structure (ConveyorLeft/Right, mk2, burner belt, or type string containing \"conveyor\") on a Water element tile burn residue Flamethrower fire ignites Residue → Flame (first time per session flag) melt ice Ice terrain destroyed by flamethrower spread (main) or worker posts ForceCompleteObjective vaporize water Fire ignites Water or FreezingIce element → Steam (main-thread flag) let it rain Worker cloud element:duration intercept — first cloud expiry posts ForceCompleteObjective hover Added when Hover tech unlocks; manual / keybind card (getDescription injects bind label) Worker → main IPC: message id ForceCompleteObjective (ManagerMessageType 45) calls the same completeObjective helper as main-thread EM(state, id).",
    "path": "/okf/progression/objectives",
    "id": ""
  },
  {
    "title": "Objectives.UI auto-remove",
    "body": "Completed cards carry completedAt. The Objectives React panel schedules removal after 5000 ms (Ku constant in extract). That is cosmetic; completion state persists until removed from active. Game boot registers the building:placed listener via init hook n4(state). Primary story (\"Investigate Anomaly\", SIGNAL DETECTED ) is driven by store.mods.storyProgression, not store.objectives.active. Both can show on the HUD at once. - Progression flags — progression.complete({ domain: \"objective\" }) - Viability — factory-tier story steps - Tech — research unlocks that feed auto-check objectives - HUD and overlays — Objectives panel layout",
    "path": "/okf/progression/objectives",
    "id": ""
  },
  {
    "title": "Probe",
    "body": "Read-only inspection of progression state. Return JSON-serializable data only. - Object.keys on sandkit.api.tech, upgrades, discoveries, progression. - sandkit.api.tech.getDefinitionById(id) (read). - sandkit.api.tech.isLockedById(id) (read). - sandkit.api.tech.isResearchedById(id) (read). - sandkit.api.upgrades.getLevelById(itemId, upgradeId) and getAvailableLevelById. - sandkit.api.factory.getLevel() (read). Process counts/rates: Structures and pipes. - Read sandkit.state.store: lockedTechs, player.tech, upgrades, discoveries, viability, conservatory, creatures, tutorial, progression, objectives, productionPoints, hints, factoryLevelCap. - Read sandkit.state.shared.productionPoints[0] (worker sync mirror). - Read sandkit.state.session.lexicon, session.ui.discoveryPopups, session.windows. - Read sandkit.enums.Tech and sandkit.enums.TechStatus. - sandkit.api.tech.setLockedById, registerDefinition, addDefinition, updateDefinition, registerNode, conservatory.appendUnlock. - sandkit.api.upgrades.register, registerCategory, updateDefinition, setLevelById. - sandkit.api.discoveries.addElementByType, addTerrainByType. - sandkit.api.progression.complete. - sandkit.engine.api.factory.addViabilityGold, unlockNextTier, recordProcess, ensureProcessAtLeast, flushDeferredLevelUps. - sandkit.engine.api.tutorialBuild. when it could affect placement checks during active tutorial. Do not click Research nodes, MAX EVERYTHING , buy tech, spend tickets, or call mutators during probes. getStatusById is absent on the public API (confirmed live). shared.upgrades is absent; workers read main-thread store.upgrades via engine sync, not a separate mirror bag. - Store cluster — key list for store reads - Gaps — what is not yet documented",
    "path": "/okf/progression/probe",
    "id": ""
  },
  {
    "title": "Progression",
    "body": "Public API: sandkit.api.progression. Official signatures: sandkit.html. Types: @sandustry-modding/types src/sandkit/api/progression.d.ts. Marks a tutorial or objective step complete. Returns true on success. Write - do not call during read-only probes. Example: progression.complete({ domain: \"objective\", id: \"all\" }). - upgradesUnlocked: gates the Upgrades management tab. - dungeons: keyed by enum value. New save: { 1: { done: false } } (Boss1 = 1). Setting upgradesUnlocked or dungeon done is done by game systems (boss win, debug cheats). No public getter besides reading store. Bag Role ------------------- ----------------------------- store.player.tech Tech tree purchases store.upgrades Tool and drone upgrade levels store.objectives Optional HUD objective cards store.tutorial Guided early-game steps store.viability Factory tier bar Objective id values beyond documented examples are not listed in public types. Confirm in extracted sandustry/ or live logs before calling. - Upgrades — upgradesUnlocked gate - Tutorial — progression.complete({ domain: \"tutorial\" }) - Objectives — objective id caveats - Store cluster — full progression key list",
    "path": "/okf/progression/progression",
    "id": ""
  },
  {
    "title": "Store",
    "body": "Progression-related keys on sandkit.state.store. Full bag list: Engine and workers. Key Type Role ------------------ ------------------------------------ ---------------------------------------------------------------------------- player.tech { [id]: boolean } Researched tech nodes lockedTechs { [id]: boolean } Per-save tech locks (live: 70 keys; true = locked, false = unlocked) upgrades nested level / availableLevel Tool upgrade state discoveries { elements[], terrains[] } Discovery log ids progression { upgradesUnlocked, dungeons } Meta progression flags tutorial step machine Early tutorial objectives { active[] } HUD objective cards viability { goldSpent, level, peakEnergy } Factory tier productionPoints number Lifetime production stat conservatory { tickets } Ticket currency creatures { [typeId]: { available, found } } Critter counts hints flags Intro toasts seen (upgradesIntroSeen, conservatoryIntroSeen, ...) factoryLevelCap number? Optional tier cap resources gold, fluxite, energy, artifacts Often used in objective checks stratacores array Collectible progression items Key Role ----------------------------------------------------------------- ------------------------ session.lexicon Encyclopedia entries session.ui.discoveryPopups Pending discovery toasts session.windows.techTree, upgrades, conservatory, lexicon { open: boolean } session.techTreeAttention, session.conservatoryAttention New-content badges shared.productionPoints[0] mirrors store.productionPoints for workers. - Tech — player.tech and lockedTechs - Upgrades — nested store.upgrades - Viability — viability and productionPoints - Probe — safe read paths for these keys",
    "path": "/okf/progression/store",
    "id": ""
  },
  {
    "title": "Tech and upgrades",
    "body": "Load this concept when your mod registers tech nodes, Management-tab upgrades, discovery log entries, tutorial or objective completion, or conservatory reward unlocks.[^progression-guide] The progression guide gates content through Research, upgrades, discoveries, and story steps on the main thread. It documents tech definition and node registration with parent links and unlock payloads. It lists lock and researched queries plus state mutators and definition patches. It notes tech:unlocked events and built-in ids via sandkit.enums.Tech. It covers upgrade categories, level costs, and purchased level getters and setters. It explains marking elements and terrains in the discovery log. It describes progression.complete for tutorial and objective steps with id caveats. It documents conservatory append-unlock for ticket-based reward nodes. It states there is no public tutorial or objectives namespace and points to events and engine tutorial build helpers instead. It separates factory tier viability from Research and links to the factory guide. - Official Sandkit API — signature truth for runtime shapes. - How to read Sandkit — how to use generated member pages under /api/. - Generated namespaces named in the guide: - sandkit.api.tech and sandkit.api.tech.conservatory - sandkit.api.upgrades - sandkit.api.discoveries - sandkit.api.progression - sandkit.api.events - sandkit.enums.Tech - sandkit.engine.api.tutorialBuild — internal; use only for vanilla build-step integration. Live vanilla facts for Early Access 0.5.5: - Tech — API, researched state, locks - Upgrades — categories, levels, item ids - Discoveries — element and terrain log - Progression flags — complete and dungeon flags - Viability — factory tier store fields - Conservatory — tickets and reward tech - Tutorial — step machine - Objectives — HUD cards and story steps - Lexicon — encyclopedia entries - Enums — Tech and TechStatus - Store cluster — progression keys summary - Gaps — open questions - Probe — read-only live inspection - Factory: structures and pipes — factory level and process counters are factory progression, not Research. - Engine and workers — events, hooks, and load timing from the runtime guide. [^progression-guide]: Primary guide — /guides/progression.md.",
    "path": "/okf/progression/tech-and-upgrades",
    "id": ""
  },
  {
    "title": "TechStatus",
    "body": "sandkit.enums.TechStatus is a UI visibility enum. It is not stored on store.player.tech. Researched nodes are booleans in that map only. There is no public sandkit.api.tech.getStatusById (confirmed absent on CDP :9222, 0.5.6). The Research screen derives status through engine parseTechTree(state). That function maps every grid node and attaches a status field. Value Name Role in vanilla tree ----- ---------- -------------------------------------------- 0 Available Node may be purchased now 1 Visible Shown; requirements or gates not met 2 Researched Already in store.player.tech 3 Unknown Enum reserved; vanilla parseTechTree never assigns 4 Hidden Enum reserved; vanilla parseTechTree never assigns For each node e and state t, vanilla sets status as follows. 1. Researched when store.player.tech[e.id] === true. 2. Else Shaker is always Available (starter node). 3. Else when e.requires is set: - Available when every required parent id is researched. - Visible otherwise. 4. Else when e.id === \"swarmConsole\": - Visible until a grid neighbor is researched. - Then Available when auralite.getProduced(state) = threshold (or cheat bypass). - Else Visible . 5. Else when e.radiusUnlockPx is set (alien radius nodes): - Available when crystal-mined distance from swarmConsole meets the px threshold (or cheat bypass). - Else Visible . 6. Else (normal neighbor reveal): - Available when at least one grid neighbor is researched. - Visible otherwise. 7. Tutorial gate: if tutorial is active and isTechAllowedDuringTutorial is false, downgrade Available → Visible . 8. Lock gate: if isTechLocked is true and not already researched, force Visible . Helper areTechRequirementsMet(state, def) normalizes requires to an array and checks each parent in player.tech. Source Use ------------------------------ ------------------------------------------------ sandkit.api.tech.isResearchedById Purchased state sandkit.api.tech.isLockedById Lock override in store.lockedTechs sandkit.api.tech.getDefinitionById Static def; no runtime status field sandkit.engine.api.tech.parseTechTree Full node list with status (internal) Prefer public researched/locked queries in mods. Mirror the rules above only when you must reproduce Research UI behavior offline. Unknown (3) and Hidden (4) exist on sandkit.enums.TechStatus in SandustryTypes and the 0.5.6 bundle enum block. Vanilla parseTechTree (webpack module 77135 ) only ever writes 0 , 1 , or 2 . Live proof (CDP :9222, dev-tools autosave, all tech purchased): - parseTechTree(state) → 56 nodes, every status is 2 (Researched). - No node with status 3 or 4 . Treat 3 / 4 as reserved for future UI or mod-facing status APIs. Do not expect them from vanilla Research on 0.5.6. If a future build assigns them, re-probe with FH.tech.parseTechTree or module 77135 . - Tech — public API and researched map - Enums — TechStatus numeric ids - Tech tree structure — grid, neighbors, branches - Tutorial — purchase gates during tutorial",
    "path": "/okf/progression/tech-status",
    "id": ""
  },
  {
    "title": "Tech tree structure",
    "body": "Built-in Research data lives in the engine tech module (extract module 77135). Mods extend it with sandkit.api.tech.registerDefinition and registerNode. Grid coordinates are internal ; the public API exposes definitions and researched state only. Symbol (extract) Engine accessor Contents ---------------- ---------------------- --------------------------------------------- P getTechGrid() 2D grid of node ids, connections, overpasses L getTechDefinition(id) Static defs: cost, branch, unlocks, requires O getTechConnections() Explicit edge pairs [from, to] R getTechColors() Branch name → hex color z CONSERVATORY REWARDS Ticket-priced reward defs (not on main grid) D getBranchParent(id) Mod branch-parent map; empty in vanilla parseTechTree(state) merges P, L, and O into nodes with row, col, neighbors, and runtime status. See TechStatus. Grid cells in P may be: - null — empty tile. - Tech enum value or string id — node occupying the cell. - { kind: \"connection\", from, to } — visual edge between two nodes. - { kind: \"overpass\", overFrom, overTo, underFrom, underTo } — edge drawn over another link. Vanilla grid is 27 rows × 9 columns on live 0.5.6 (getTechGrid() probe). Extract minified constant H=29 may include padding rows; trust live dimensions. Origin for layout math is the Shaker cell (getMainTreeOriginPosition). Branch id Color ------------- --------- refining 00ff00 logistics 0088ff exploration 00c1ff excavation ff3500 tools ffffff drones 6b6b6b alien D459C2 electricity ffd700 heat ff8800 lighting ffff00 fluids 00fff6 Row 0 centers Shaker (col 4). Row 1: Conveyors → Hover / SprintBoost branch, Map , FlareGun . Row 2: Filters side branch, SprintBoost , StaticLights . Row 3: KineticPress , Flamethrower . Lower rows add logistics strings (burnerBelt, thermalRelay, conveyorRightMk2), QuantumPortal , Pipes , PlanterBox , Gun , heat/electricity strings, Corraller , Haulers , alien strings (swarmConsole, voidOrb, fluxEmanator, prismalineWell, …), and mod-style ids on the same grid. CDP evaluate script cannot reach sandkit.engine.api.tech directly ( debug.state.sandkit holds mods metadata only). Use a webpack hook on module 77135 : Live probe: 27 rows, 9 cols, 56 node cells, 73 total non-null cells (includes connection and overpass objects).",
    "path": "/okf/progression/tech-tree",
    "id": ""
  },
  {
    "title": "Tech tree structure.Node coordinates (row, col)",
    "body": "r c id - - -- 0 4 1 (Shaker) 1 3 2 (Logistics) 1 5 108 (Hover) 1 7 91 (Map) 1 8 56 2 2 63 2 6 109 (Sprint Boost) 2 8 24 3 4 7 3 5 5 4 0 burnerBelt 4 1 thermalRelay 4 6 57 4 8 flashlight 5 2 82 5 6 59 6 2 23 6 4 20 6 5 6 7 0 heatCannon 7 2 104 7 6 60 7 8 105 8 2 kineticFieldEmitter 8 6 89 9 2 64 9 4 21 9 5 22 10 3 30 10 6 102 11 3 90 11 8 reconDrone 12 2 snowmaker 12 4 107 12 5 70 13 1 26 13 3 energySiphon 13 8 fluxEmanator 14 2 copperMold 14 7 voidOrb 15 1 electricityConnector 15 3 71 16 5 106 16 6 85 16 8 81 17 4 aurixiteCrystallizer 19 4 swarmConsole 20 3 entityCount1 20 5 volcanizer 21 2 entityCount2 21 3 spiralSwarm 21 4 prismiteWell 21 6 86 22 2 swarmZoning 22 3 swarmScouts 23 4 prismalineWell Cross-name numeric ids via Lexicon kind: \"tech\" or Enums. Full O connection list remains in the extract; getTechConnections() is on the same webpack module.",
    "path": "/okf/progression/tech-tree",
    "id": ""
  },
  {
    "title": "Numeric grid ids — Lexicon and unlock names (0.5.6)",
    "body": "Live Lexicon kind: \"tech\" entries for these ids show the numeric id as name (no dedicated tech {id} name i18n key). Resolve display names from getTechDefinition(id).descriptionKey slug or the unlock target: Grid id (row, col) Tech slug (descriptionKey) Unlock Display name (English) --- --- --- --- --- 71 (15, 3) steamTurbine structure steamTurbine Steam Turbine 81 (16, 8) locator item locator Locator 85 (16, 6) recall item recallDevice Recall Shard 86 (21, 6) implosionGun item implosionGun Void Gun 106 (16, 5) miningLaser item laser Laser Probe: webpack 77135 getTechDefinition(id) + FH.structures.getConfig / Lexicon kind: \"items\" / kind: \"structures\" on campaign save b93kqvog6zn-exitsave. O lists adjacency beyond orthogonal grid neighbors. Examples from vanilla: - [Shaker, Conveyors], [Conveyors, Filters], [Flamethrower, KineticPress] - [KineticPress, thermalRelay], [thermalRelay, burnerBelt], [Conveyors, ConveyorsMk2] - [Hover, Flamethrower], [Hover, Map], [Map, FlareGun], [Map, voidOrb], [voidOrb, Recall], [voidOrb, Locator] - [Gun, Rocket], [Rocket, Drill], [Drill, MiningLaser], [GoldBattery, Drill] - [Map, Corraller], [ConveyorsMk2, Haulers], [FlareGun, StaticLights], [StaticLights, flashlight] Ticket nodes are not placed on grid P. They are appended from CONSERVATORY REWARDS when building the full node list. See Conservatory for costs and unlock payloads. registerTechNode(id, definition, { parentId, preferredPosition? }): - Requires an existing parentId in L. - Picks the first free cell below the parent row (or preferredPosition). - Pushes [parentId, id] onto connection list O. - Does not populate branch-parent map D unless added elsewhere. updateTechDefinition / registerDefinition patch entries in L only. Defs with radiusUnlockPx compute distance from the swarmConsole grid cell to the node cell (tile spacing constant in extract). Purchase also checks mined-crystal progress (see TechStatus). - Tech — public Sandkit API - TechStatus — runtime status derivation - Conservatory — ticket reward rows - Enums — Tech ids on the grid",
    "path": "/okf/progression/tech-tree",
    "id": ""
  },
  {
    "title": "Tech",
    "body": "Public API: sandkit.api.tech. Official signatures: sandkit.html. Types: @sandustry-modding/types src/sandkit/api/tech.d.ts. Research screen layout: HUD and overlays. Method Role ------------------------------------------------------------ --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- getDefinitionById(techId) Return definition. Live lookups that work: numeric strings (\"1\", \"2\"), Tech.Conveyors (number 2 ), and registered string ids (\"fluxEmanator\"). Enum names (\"Conveyors\") and lowercase slugs (\"conveyor\", \"hover\") return null . isResearchedById(techId) true when the node is in store.player.tech. Prefer over reading the map directly. isLockedById(techId) true when locked. Id may be string or number (sandkit.enums.Tech). setLockedById(techId, locked) Write lock flag into store.lockedTechs. registerDefinition, updateDefinition, registerNode Mod registration. addDefinition is a deprecated alias of registerDefinition. conservatory.appendUnlock(techId, { structures?, items? }) Append structure or item unlocks to a conservatory reward tech. See Conservatory. Engine twin (state first): sandkit.engine.api.tech with getDefinition, isLocked, setLocked, registerNode, etc. Prefer public API in mods. store.player.tech is a map of researched nodes. Values are booleans (true = purchased). Live this save: 67 keys (\"1\", \"2\", ...). No { x, y } grid positions on the live object. - Keys are mixed : numeric enum values as strings (\"1\", \"22\") and string ids (\"fluxEmanator\", \"swarmConsole\"). - This is not TechStatus. UI derives Available / Visible / Researched from definitions, parents, and lockedTechs. store.lockedTechs overrides definition locked when the key exists. - Value true: locked (cannot buy). - Value false: explicitly unlocked (cheat/debug paths). - Missing key: fall back to static definition locked. Live end-game save (2025-08): 70 keys - 2 with value true (locked), 68 with false (explicit unlock). Missing key falls back to definition locked. getDefinitionById returns fields such as: - nameKey, descriptionKey, descriptionParams - cost, branch, currencyType (gold, ticket, auralite, ...) - requires (parent tech id or array) - unlocks.structures, unlocks.items, unlocks.map - isElectricity, electricityNodeStyle, isAlien, threshold, radiusUnlockPx Full enum list: Enums. Grid layout and branch colors: Tech tree structure. Runtime UI status (not on public API): TechStatus. During tutorial, only some tech may be bought. Engine checks isTechAllowedDuringTutorial (Shaker always; Conveyors after step UnlockLogistics). - Conservatory — ticket rewards and appendUnlock - Tutorial — step gates for tech purchases - Tech tree structure — grid, connections, branches - TechStatus — Research UI status derivation - Enums — Tech and TechStatus values - Store cluster — player.tech and lockedTechs",
    "path": "/okf/progression/tech",
    "id": ""
  },
  {
    "title": "Tutorial",
    "body": "Early guided steps. No public sandkit.api.tutorial. Read store.tutorial. New save: active: true, currentStep: 1 (Move), data populated. Completed tutorial: active: false, currentStep may remain at last value, data: {}. Value Name ----- ------------------------ 1 Move 2 Dig 3 Hotbar 4 PickUpSand 5 WetSand 6 RefineWetSand 7 SellGold 8 OpenTechTree 9 UnlockRefining 10 OpenBuildMenu 11 BuildShaker 12 RefineGoldWithShaker 13 UnlockLogistics 14 BuildConveyorAndLauncher 15 MoveFoundationBox 16 RemoveFoundationBox 17 ConfirmFinished 18 TutorialEnd sandkit.engine.api.tutorialBuild (FH.tutorialBuild via webpack 46781 ) exposes target cells and placement rules for constrained steps. State-first internal API. Types: @sandustry-modding/types src/sandkit/engine/api/tutorialBuild.d.ts. Do not confuse with store.mods.tutorialBuild. That bag holds storage flags under key \"tutorialBuild\" (sellGoldAutoBuilt, foundationBoxAutoBuilt). It is empty on dev-tools saves and unrelated to the engine API object.",
    "path": "/okf/progression/tutorial",
    "id": ""
  },
  {
    "title": "Methods (live 0.5.6)",
    "body": "Method Role when store.tutorial.active --- --- isStepConstrained(stepKey) true when the step has prefab target cells in MS[stepKey]. getTargets(stepKey) { x, y, type }[] snap-grid cells for buildShaker, buildConveyorAndLauncher, moveFoundationBox, or removeFoundationBox. areAllTargetsBuilt(stepKey) Every target cell has a matching built structure. areFamilyTargetsBuilt(stepKey, family) Subset check for family shaker, conveyor, or launcher. canPlaceAtActiveTarget(state, structureType, x, y) Returns false when placement would miss the active tutorial target. No-op when tutorial inactive. shouldProtectActiveTargetAt(x, y) Returns true when demolish/move should not remove a tutorial target cell. matchesFoundationMove({ moved }) Validates copier move payload { from, to, type }[] against moveFoundationBox targets. matchesFoundationRemove({ removed }) Validates foundation removal against removeFoundationBox targets. getFoundationMoveSources() / getFoundationMoveDests() Source and destination cell lists for the foundation-box move step. hasDefinition() true after prefab data.tutorialBuild.origin resolves (tutorial factory anchor kS). stepKey values: buildShaker, buildConveyorAndLauncher, moveFoundationBox, removeFoundationBox.",
    "path": "/okf/progression/tutorial",
    "id": ""
  },
  {
    "title": "Tutorial.Placement and demolish hooks",
    "body": "- Build placement (structures:place): canPlaceAtActiveTarget rejects off-target placements during constrained steps (currentStep = BuildShaker). - Demolish (structures:remove on main thread): shouldProtectActiveTargetAt skips protected cells unless byMove is set. - Structure-built tutorial advance : isStepConstrained gates which StructureType values count toward step completion (e.g. only shakers during BuildShaker). - Copier move during MoveFoundationBox: matchesFoundationMove must pass or the move is denied. When store.tutorial.active is false (live dev-tools / post-game saves): hasDefinition is false, getTargets returns [], canPlaceAtActiveTarget always allows, and shouldProtectActiveTargetAt always returns false.",
    "path": "/okf/progression/tutorial",
    "id": ""
  },
  {
    "title": "Prefab source (`data.tutorialBuild`)",
    "body": "Loaded from prefab metadata on prefabData:loaded. Shape (extract): Field Role --- --- origin { x, y } offset from prefab top-left; sets factory anchor kS. auto.buildings Auto-build queue after SellGold (collector cells only). foundationBox.buildings Foundation source cells (BS). Per-step keys (buildShaker, …) { buildings: [{ type, x?, y?, start?, end? }] } expanded to MS[stepKey] target cells. Shaker may be researched during tutorial. Conveyors allowed when currentStep = UnlockLogistics (13). Other tech may be blocked by UI and isTechAllowedDuringTutorial. - Tech — tutorial tech purchase gates - Progression flags — progression.complete({ domain: \"tutorial\" }) - Engine and workers — internal engine.api namespaces",
    "path": "/okf/progression/tutorial",
    "id": ""
  },
  {
    "title": "Upgrades",
    "body": "Public API: sandkit.api.upgrades. Official signatures: sandkit.html. Types: @sandustry-modding/types src/sandkit/api/upgrades.d.ts. Upgrades overlay: HUD and overlays. Method Role ---------------------------------------------- ------------------------------------------------------------------------- registerCategory(definition) Mod category (id, nameKey). register(definition) Mod upgrade. Also creates store.upgrades[itemId][upgradeId] if missing. updateDefinition(itemId, upgradeId, partial) Patch definition. Clamps levels to new maxLevel. getLevelById(itemId, upgradeId) Current purchased level. getAvailableLevelById(itemId, upgradeId) Max level the player may buy now. setLevelById(itemId, upgradeId, level) Set purchased level. Write - do not call during probes. store.upgrades is nested: store.upgrades[itemId][upgradeId]. Each leaf: - level: purchased rank. - availableLevel: cap from progression (often 0 until store.progression.upgradesUnlocked). grabber, jetpack, shovel, gun, rocketLauncher, hauler, digger, flamethrower, cryoblaster, drill, sweeper, implosionGun, thruster, vacuum, locator, laser.",
    "path": "/okf/progression/upgrades",
    "id": ""
  },
  {
    "title": "Vanilla `itemId:upgradeId` pairs (38 leaves, CDP 0.5.6)",
    "body": "itemId upgradeId --- --- grabber scanner, waterGrab, maxSize jetpack speed, rideBoost shovel speed, size, momentum gun speed, damage, bullets, tracer, velocity rocketLauncher reload, maxAmmo, napalm, damage hauler maxDrones, speed digger cooldown, hp, gravity, maxDrones flamethrower range, vaporize cryoblaster output drill bore sweeper maxDrones, selectionRadius, mouseLight implosionGun tankCapacity thruster pullStrength vacuum capacity, tankCount locator artifactGuidance laser beamFocus, cycleRate, cryoAblation sandkit.mods.upgrading holds mod register() metadata only — not vanilla core upgrade defs. Vanilla pairs (38 leaves) live only on store.upgrades and in bundled item scripts. They do not appear under sandkit.mods.upgrading.",
    "path": "/okf/progression/upgrades",
    "id": ""
  },
  {
    "title": "Mod metadata shape (CDP `:9222`, dev-tools save, 0.5.6)",
    "body": "Each registered item id maps to: Each UpgradeDefinition leaf includes id, nameKey, descriptionKey, maxLevel, costs[], and optional afterUpgradeId, oneOff, descriptionParams. The same itemId:upgradeId keys also exist on store.upgrades[itemId][upgradeId] as { level, availableLevel } after register(). Live dev-tools save: 7 item ids and 10 metadata pairs (workshop mod upgrades re-registered through Sandkit): itemId upgradeId --- --- drill bore grabber maxSize implosionGun tankCapacity locator artifactGuidance sweeper maxDrones, selectionRadius, mouseLight thruster pullStrength vacuum capacity, tankCount The remaining 28 vanilla store leaves (gun, jetpack, shovel, …) have no sandkit.mods.upgrading entry on this save. Probe Object.keys(state.sandkit.mods.upgrading[itemId].upgrades) for mod-added pairs; use store.upgrades for runtime levels. store.progression.upgradesUnlocked is false on a new save. When true, the Upgrades overlay is available and availableLevel may rise above 0. Mod definitions live under sandkit.state.sandkit.mods.upgrading and upgradeCategories. - Progression flags — upgradesUnlocked gate - Lexicon — upgrade entries in encyclopedia - Store cluster — nested store.upgrades bag",
    "path": "/okf/progression/upgrades",
    "id": ""
  },
  {
    "title": "Viability",
    "body": "Factory tier progression (HUD Viability bar). No dedicated sandkit.api.viability namespace. Read store fields and factory APIs. - store.productionPoints: main-thread copy of lifetime production tally. - store.shared.productionPoints[0]: worker-synced mirror (Atomics). - store.factoryLevelCap: optional hard cap (live maxed save: 7). Use Structures and pipes for sandkit.api.factory (getLevel, getProcessCount, getProcessRate) and internal engine.api.factory tier math. Do not duplicate process ids or tier gates here. Live 0.5.5 sample: api.factory.getLevel() = 7, matches store.viability.level. Viability bar and MAX LEVEL label: HUD and overlays. - Store cluster — viability and productionPoints keys - Objectives — factory-tier story steps",
    "path": "/okf/progression/viability",
    "id": ""
  },
  {
    "title": "Extract layout",
    "body": "sandustry/source/ is the extracted game app (not the mod template). It appears after npm run setup unpacks app.asar. Version label: sandustry/source/package.json (OKF extract baseline 0.5.6 ). Use this map before grepping the tree. OKF scope is shipping game facts only — see OKF agent rules. Path Role --- --- main.js Electron main process — windows, IPC, save IO, workshop, GPU log preload.js Renderer preload — window.electron bridge, DevTools IPC platform.js Platform detection and createPlatform() (Steam, MS Store, …) platforms/ Platform-specific helpers steam.js Steamworks integration workshop-mods.js Workshop subscribe, local mod discovery, manifest IO logger.js Main-process log writer local-mod-publisher.js Dev publish helper package.json Game name/version ( 0.5.6 on current extract) dist/ Shipped renderer assets and webpack bundles There is no TypeScript source tree in the extract — game logic lives in minified dist/js/ .js. Path Role --- --- dist/index.html Renderer entry (CDP attach URL) dist/js/bundle.js Main webpack bundle — boot, React UI, sim host, worker factory, window. debug dist/js/simulation-worker.js Simulation thread worker (webpack chunk 937 ) dist/js/manager-worker.js Manager worker (chunk 147 ) — small standalone script dist/js/utility-worker.js Utility worker (chunk 360 ) dist/js/external-mod-runtime.js Main-thread external mod runtime (chunk 134 ) dist/js/external-mod-worker-runtime.js Mod workerEntry facade (chunk 247 ) dist/js/locales/ .js Per-locale string tables dist/js/procgen/ noisejs, seedrandom vendored helpers dist/mods/ Builtin structure/HUD PNG sprites ( 126 files) dist/img/procgen/prefabs/ Prefab JSON configs (start, timer, rocket, …) dist/css/, dist/fonts/, dist/music/, dist/sfx/ Static assets Chunk id → filename map lives inline in bundle.js (147===e?\"manager-worker.js\":…). Question Start here --- --- Worker boot, thread count, postAll bundle.js — search yi=, vi=, multithreading — Workers runtime Mod worker sandkit.api list external-mod-worker-runtime.js — createExternalWorkerEntryRuntime Manager launcher defaults manager-worker.js — embedded JSON debug.admin.run commands bundle.js — search admin.run / command strings — debug Signal engine internals bundle.js — large minified module (referenced as Jd.Q in OKF) Structure / pipe / energy registration bundle.js + grep structure id strings Save format / IPC main.js — ipcMain save/load handlers — Electron bridge Renderer boot order bundle.js loader progress keys — Renderer boot - Prefer string literals (\"powerBrick\", \"signalGate\", \"buildAtCell\") over minified identifiers — names change every build. - Read standalone worker files directly when the question is worker-only (manager-worker.js is human-scannable). - bundle.js is multi-megabyte — use ripgrep with -o context or node slice scripts; do not load whole file into editor chat. - Webpack module numbers (e.g. n(38394)) are not stable across versions — capture behavior in OKF concepts, not module ids alone. - Cross-check public API on official Sandkit before documenting new members. Missing Where to look instead --- --- platforms/msstore.js, platforms/gog.js Not in any Steam-channel app.asar (confirmed 0.5.6 file list) — Store platforms Mod template npm scripts, F5 flow Template root README.md @modkit/ , template patches docs/modkit/ Generated /api/ pages SandustryTypes Live runtime values CDP probes — Live index - Official Sandkit - Types package - Workers runtime - Worker attach",
    "path": "/okf/references/extract-layout",
    "id": ""
  },
  {
    "title": "References",
    "body": "Canonical links and packages that sit outside a single domain. - Official Sandkit - Types package - Extract layout - Version alignment — game build vs OKF vs types - Template repo",
    "path": "/okf/references/index",
    "id": ""
  },
  {
    "title": "Official Sandkit API",
    "body": "The game ships the authoritative Sandkit reference on the web. Follow /okf/consume.md for OKF load order.[^consume] Field Value --- --- URL https://sandustry.com/sandkit.html[^official-sandkit] Scope Public mod API exposed as sandkit in mod scripts Use Signature truth for methods, parameters, and namespace headings Treat this page as the final word when it disagrees with generated docs or TypeScript declarations on this site. Do not invent members that are not documented there unless you verify them in a live game session. Agents working inside the mod template can also read .tmp/Sandkit - Sandustry Modding API.html after template setup. That file mirrors the official page for offline use. It is not part of this docs site. Maintainers can fetch historical official HTML into Markdown under /official-api/. Run npm run docs:archive-sandkit from SandustryTypes when that repo sits next to this site.[^types-readme] Current archives on this site: File Notes --- --- /official-api/0.5.5.md Snapshot archived from the official page[^archive-055] /official-api/0.5.6.md Snapshot archived from the official page[^archive-056] Use archives to compare API changes across game versions or to read the official page offline. Prefer the live sandustry.com page for the build you target today. See /Changelog.md for when coverage or archives landed in community docs.[^changelog] SandustryTypes npm run generate ingests the official HTML when building /api/ pages.[^types-readme] The generator also merges community .d.ts declarations and override text. Gaps between archive, generated pages, and the live official page are expected during game updates. Resolve signatures on the live official page first. - OKF index - How to read Sandkit - Generated docs - Types package [^consume]: Load order — /okf/consume.md. [^official-sandkit]: Live host API — https://sandustry.com/sandkit.html. [^archive-055]: Archive — /official-api/0.5.5.md. [^archive-056]: Archive — /official-api/0.5.6.md. [^changelog]: Docs history — /Changelog.md. [^types-readme]: Archive script — /types/.",
    "path": "/okf/references/official-sandkit",
    "id": ""
  },
  {
    "title": "Mod template repo",
    "body": "Agents that build or debug a mod work in the mod template repository on disk. This OKF bundle indexes vanilla game and Sandkit facts on this docs site. It does not replace the template install guide. Follow /okf/consume.md for OKF load order.[^consume] Field Value --- --- URL https://github.com/sandustry-modding/SandustryModTemplate[^template-repo] Role TypeScript mod starter, dev scripts, modkit/, game extract setup Install guide Template README.md — do not duplicate it here[^template-readme] Open the template README for quick start, commands, troubleshooting, and Workshop publish steps. Mod authoring guides live under /guides/ and /modkit/ — not in OKF. This site serves API reference, guides, and kit pages for browsing. Long install dumps belong in the template README only.[^docs-agents] OKF concept files link to the template repo instead of copying those sections. The template gitignores a docs/ folder at its repo root.[^template-readme] npm run setup and npm run docs clone sandustry-modding.github.io into that folder when it is missing.[^docs-agents] That clone is the same site you are reading when OKF is published to GitHub Pages. Agents editing OKF concepts edit the docs site repo, not the template's gitignored copy. Path Role --- --- src/ / One mod per folder with modinfo.json and entry script[^template-readme] modkit/ Shared kit imported as @modkit/ [^template-readme] dist/ Symlink to the OS Sandustry mods folder[^template-readme] sandustry/ Gitignored game extract and OS links; created by setup[^template-readme] .tmp/Sandkit - Sandustry Modding API.html Local official API snapshot for agents in the template[^template-agents] Full tables and OS paths live in the template README folder layout section.[^template-readme] Command Role --- --- npm run setup Verify install, extract app.asar to sandustry/source/, link dist, logs, saves, workshop[^template-readme] npm run dev Watch-build mods into dist/[^template-readme] npm run docs Clone this docs site into docs/ if needed, then serve it locally[^template-readme] Mod authoring: /guides/getting-started.md. API discovery: /okf/api/how-to-read-sandkit.md. Live attach and probe playbooks live under /okf/live/. Follow /okf/consume.md for load order. Use MCP namespace sandustry inside the template workspace. - OKF index - Types package - Official Sandkit [^consume]: Load order — /okf/consume.md. [^template-repo]: Mod template — https://github.com/sandustry-modding/SandustryModTemplate. [^template-readme]: Install and layout — template README.md. [^docs-agents]: Docs clone policy — /AGENTS.md. [^template-agents]: Local Sandkit HTML — template AGENTS.md.",
    "path": "/okf/references/template-repo",
    "id": ""
  },
  {
    "title": "Types package",
    "body": "Community TypeScript declarations mirror the Sandkit object shape for editors and tsc. They are a helper layer, not signature truth. Follow /okf/consume.md for OKF load order.[^consume] Field Value --- --- Name @sandustry-modding/types[^npm-types] Install npm install @sandustry-modding/types[^types-readme] Source repo SandustryTypes The mod template depends on this package for ambient sandkit typing in mod source. Use a triple-slash reference or include the types through your tsconfig / jsconfig as described on /types/.[^types-readme] Page Purpose --- --- /types/ Install, runtime map, and maintenance commands[^types-readme] /types/search.md Search namespaces and members by live path /types/schemas.md JSON Schema URLs for modinfo.json and patches.json Generated API Markdown lives under /api/ and is produced from the same SandustryTypes tree. See /okf/api/generated-docs.md for that split. Use @sandustry-modding/types and generated pages for navigation, JSDoc prose, and compile-time safety. Confirm method signatures on https://sandustry.com/sandkit.html before you ship mod code.[^official-sandkit] Declarations can include members not yet on the official page, or miss members until SandustryTypes is updated. When sources disagree, follow the official HTML. Need Open first --- --- Exact parameter list for a public method Official Sandkit HTML Editor autocomplete in the mod template @sandustry-modding/types and /types/ Find which namespace owns a path /types/search.md Manifest or patch JSON shape /types/schemas.md and /modinfo.json.md - OKF index - How to read Sandkit - Official Sandkit reference - Template repo [^consume]: Load order — /okf/consume.md. [^types-readme]: Site types docs — /types/. [^npm-types]: npm registry — https://www.npmjs.com/package/@sandustry-modding/types. [^official-sandkit]: Signature truth — https://sandustry.com/sandkit.html.",
    "path": "/okf/references/types-package",
    "id": ""
  },
  {
    "title": "Version alignment",
    "body": "Agents should know which game build OKF facts target and which reference layers may lag. Layer Version / label Location --- --- --- OKF live probes 0.5.6 CDP :9222 sessions noted in OKF log Extracted game app 0.5.6 sandustry/source/package.json after npm run setup sandkit.apiVersion 1 Unchanged across 0.5.5 → 0.5.6 probes Official HTML (live) Tracks current host build sandustry.com/sandkit.html Archived official HTML 0.5.5 , 0.5.6 /official-api/0.5.5.md, /official-api/0.5.6.md Generated /api/ .md Follows SandustryTypes generate Types package Webpack module ids 0.5.6 only Webpack module ids When a concept cites \"live 0.5.5\" in frontmatter but log entries say 0.5.6, prefer newer probe evidence and update the concept when behavior differs. Question Authoritative source --- --- Public method signature Official Sandkit HTML Vanilla behavior not on HTML Extract bundle.js + live probe TypeScript autocomplete @sandustry-modding/types — secondary Mod template workflow Template README.md — not OKF Topic Notes --- --- api.world deprecated alias Documented 0.5.5+; still on 0.5.6 live CDP ambient sandkit Worked on some 0.5.5 sessions; undefined in evaluate on probed 0.5.6 Webpack 46781 / 77135 Valid for 0.5.6 extract; re-grep after update MS Store / GOG platform modules Not in Steam extract — Store platforms Internals index \"0.5.5 notes\" Historical; engine key list still applies — verify on bump Full API drift table: API gaps. After a new Sandustry release: 1. Run npm run setup — refresh sandustry/source/. 2. Archive official HTML (npm run docs:archive-sandkit in SandustryTypes). 3. Regenerate /api/ from SandustryTypes. 4. Re-run live probes; update domain concepts and gaps.md. 5. Re-grep webpack ids; update Webpack module ids. 6. Append OKF log. - Official Sandkit - Extract layout - API gaps",
    "path": "/okf/references/version-alignment",
    "id": ""
  },
  {
    "title": "Keybindings",
    "body": "Options - Controls. + adds a second key. Enum: SandustryTypes and node modules/@sandustry-modding/types/src/sandkit/enums. Group Action Default --------- ------------------------------------- ------------------------- MOVEMENT Left / Right / Boost / Descend A D W S MOVEMENT Hover / Sprint Boost / Grappling Hook Space / Shift / G INTERFACE Toolbox / Build / Tech / Upgrades Tab / Q / T / U INTERFACE Radial / Map / Feedback / Toggle HUD E / M / F2 / F4 HOTBAR Pick Block Middle Click HOTBAR Banks 1-10 Alt+1 ... Alt+0 HOTBAR Prev/Next bank Alt+Scroll HOTBAR Prev/Next item Scroll BUILDING Marquee / Demolish / Build Mode C / X / R BUILDING Reverse dir / Replace / Ruler Alt / Ctrl / V EDITING Undo Cut Copy Paste Flip Delete Ctrl+Z X C V H, Backspace EDITING Cancel Right Click SAVE Quick Save / Load F5 / F9 COLORING Toggle Paint Bucket B CONSOLE Arrows Right-click cancel also: Corraller release, Digger recall, Pipes remove, Prefabulator cancel, Recon despawn, Signal unlink, Sweeper cancel, Wall remove. OTHER holds vanilla leftovers plus every mod binding, so it differs per session: Ignore Angle Lock B, Esc menu, trimCreativeConfigure K, trimHatchet [ ], ZoomIn/Out = -. Game F5 is Quick Save, not the VS Code launch, while the window has focus. - Options - Management overlay - Player: inventory and items",
    "path": "/okf/ui/bindings",
    "id": ""
  },
  {
    "title": "Building",
    "body": "Chrome: Management overlay. Sub-tabs Structures , Blueprints . Filters: All, Logistics, Production, Blocks, Economy, Lighting, Fluids, Special, Thermal, Energy, Logic, Misc. - Logistics: Conveyor Belt, Conveyor Belt Mk.2, Launcher, Launcher Mk.2, Filter, Advanced Filter, Conveyor Portal, Clearing Frame, Aerokinetic Fan, Filter Wall, Advanced Filter Wall - Production: Synthesizer, Harmonizer, Shaker, Kinetic Press, Planter Box - Blocks: Foundation, Critter Fence, Glass Foundation (GF), Door - Economy: Collector - Lighting: Wall Light - Fluids: Pipe, Pump, Liquid Vent - Special: Void Rift, Flux Emanator, Aura Extractor, Prismite Well, Prismaline Well - Thermal: Steam Dryer, Condenser, Snowmaker, Smelter, Thermal Buffer, Burner Belt, Pyro Dispenser - Energy: Copper Mold, Energy Siphon, Energy Connector, Florinol Battery, Power Brick, Steam Turbine - Logic: Signal Linker, Switch, Button, Sensor, Pulse Sensor, Presence Sensor, Buffer, Toggle (T-FlipFlop), AND/NAND/NOR/NOT/OR/XNOR/XOR, Signal Lamp, Repeater - Misc: short ids (collector, conveyor, filter, filterMk2, foundation, gloomEmitter, grower, heatCannon, launcher, light, liquidVent, pipe, pump, Retro Console, Game Controller, shaker, velocitySoaker) Saved Blueprints: IMPORT, EXPORT ALL. Empty: No saved blueprints. Clipboard History: No copies yet. - Management overlay - Factory: structures and pipes",
    "path": "/okf/ui/building",
    "id": ""
  },
  {
    "title": "Debug overlay",
    "body": "HUD Debug , or F3 if Hot Reload F3 overlay is on. Header DEBUG , Elem live/cap, close X. Tabs: Spawn, Overlays, Lighting, Game, Audio, Sim, Stats. Story Trigger Step / Finish Step and MAX EVERYTHING only when asked. Brush size minus/plus, presets 1-100, Circle/Square. Overwrite, Skip physics, Highlight brush, Prevent duplicates. Throttle 0-2000 ms. Paint: Elements, Ground. Disable Structure Rendering. Cell inspector. Lights overlay. Filter overlays. Authorization zone overlay. Light Size, Terrain Shadow Value. Flashlight Brightness, Size, Duration. Bad displays need config.debug.badDisplays = true then reload. Weapons: flamethrower, rocket, gun, shotgun, megashotgun, teleporter, vacuum, digger, thruster. Triggers / foliage / cheats / Hide UI / Verify Positions / Codex / Copy API Markdown / Randomize Tech Colors / Set Level / Simulate Artifact Pickup. Story steps this save: establish wet sand processing, establish burnt residue processing, investigate anomaly, retrieve void orb, establish peak energy, secure stratacore, resume factory expansion, produce auralite, saturate aura field, authorize aura expansion. Quick Save/Load Position and Game. Creatures: Voidgrazer, Lumling, Redweaver, Voltblub, Shinelet. Music rotation transport + playlist. Active sounds monitor. Sound mixer / Sound Board. Scheduling (Columns, 2-phase, Hybrid, Work-Stealing). UPS, tick ms, elements, chunks. Tick breakdown, worker timeline. ID slabs table. Block grid (types / 255, filter palette, tiles, SAB). Locale Stats / Locale Inspector. - HUD screen map - Research - Screen gaps",
    "path": "/okf/ui/debug",
    "id": ""
  },
  {
    "title": "DOM and scenes",
    "body": "Node Role ----------------- -------------------------- canvas World overlay-canvas 2D overlay canvas ui React HUD and menus Last body child Heatmap, zoom minus / plus Typical ui children in Game : Index Anchor Contents ----- --------------------------------- ------------------------------------------- 0 full screen, often display:none Hidden debug/perf 1 z-[10005] Global overlays / toasts 2 bottom center Hotbar 3 top left z-[9999] Resources, management column, Debug / Stats 4 top center Notifications 5 high z Dialogs / tooltips 6 top right Menu, Viability, Objectives 7 bottom left Shortcut helper Management overlay: z-[10004]. Pause dimmer: z-[10010]. sandkit.enums.Scene: MainMenu 1, Intro 2, Deploy 3, Game 4. Live probe: store.scene.active 4 (Game). Runtime session lives at debug.state.session (not store.session). Use this path in CDP evaluate script when sandkit is undefined. All probed with open: false during play: building, inventory, techTree, upgrades, menu, loader, options, lexicon, blueprints, modsScreen, customMapsScreen, conservatory, feedback. session.ui keys: visible, listeners, tooltip, introScreen, dialogs, discoveryPopups, hudHidden. - HUD screen map - Management overlay - Pause menu",
    "path": "/okf/ui/dom",
    "id": ""
  },
  {
    "title": "Feedback",
    "body": "Pause Send feedback or F2 . ComponentId.Feedback. Close . Category: Bug, Suggestion, Other. Message 0/5000. Auto-include: version, world id, tick, settings. Cancel / Submit (Submit needs text). - Pause menu - Keybindings - Overlay API",
    "path": "/okf/ui/feedback",
    "id": ""
  },
  {
    "title": "Screen gaps",
    "body": "Walked on CDP :9222 (0.5.6): Screens, Overlays, Research Conservatory, Pause menu exit dialog, Intro and Deploy (extract + partial live). Resolved this pass (CDP :9222, 0.5.6, 2026-09-15): - Workshop Mods — live Steam-unavailable walk + full subscribed-list UI from extract when mods.showSubscribedMods is true in Screens. Live subscribed rows still need platform.isInitialized() and the feature flag on a default-branch build. - Custom Maps — live coming-soon stub + full saved-map UI from extract when customMaps.showCustomMaps is true in Screens. - Radial (E) a11y — held- E keydown probe: zero aria-label nodes; clip-path id pattern documented in Overlays. Resolved in prior passes: - New → Intro / Deploy — Intro and Deploy. - World map (M) — Overlays. - Radial wedge list — store.player.buildings + Lexicon table in Overlays. - Tech tree graph display names — Lexicon kind: \"tech\" map in Research. Still open: - Workshop Mods subscribed row a11y walk when Steam initializes and showSubscribedMods is true (modding beta keeps the flag off). - Custom Maps saved-map row a11y walk when showCustomMaps is true. - Intro / Deploy full a11y walk on a verified first-run game.start without { skip: true }. - DOM and scenes - Debug overlay - Research",
    "path": "/okf/ui/gaps",
    "id": ""
  },
  {
    "title": "HUD and overlays",
    "body": "Load this concept when your mod updates vanilla HUD components, shows toasts or tooltips, opens dialogs, mounts React UI in overlay regions, extends the hotbar, or adds controller focus.[^ui-guide] The UI guide states that sandkit.api.ui runs on the main thread except worker-safe toast. It separates Sandkit api.ui from the mod template kit UI overview. It documents pushing state to built-in HUD components via ComponentId and useRefresh. It covers pause menu opening and custom panel injection when Options schema is not public. It explains toast variants, localized text shapes, and cursor tooltips. It lists modal dialog helpers that return promises. It prefers regions.mount over deprecated overlays with docked and raised placement. It covers inject, component overrides, and built-in Panel, Button, and ActionSlot widgets. It documents hotbar bank sources, slot selection, and hook-based hotbar state. It notes controller navigation scopes and UI scale hooks. Open one concept file when you need live Early Access 0.5.5 layout facts. Branch Concept -------------------------------------------------------------------- ---------------------------------------------------- canvas / ui layers, z-index, scenes DOM and scenes Resources, management column, hotbar, objectives, shortcuts, heatmap HUD screen map Esc pause rows, Discord, seed, Mods inspector Pause menu Options General / Video / Audio / Mods schema Options Save Game / Load Game dialogs Save and load Send feedback / F2 Feedback Shared Tab/Q/T/U overlay chrome Management overlay Toolbox items and Stratacores Toolbox Building structures and blueprints Building Research tech tree and Conservatory Research Upgrades cards Upgrades Debug F3 tabs (spawn, cheats, sim) Debug overlay Default keybindings Keybindings inject, regions, overrides, hotbar, select, ComponentId Overlay API Main menu, exit, workshop Mods, custom Maps Screens Radial, world map, Lexicon codex Overlays Screens not walked yet Screen gaps - Official Sandkit API — signature truth for runtime shapes. - How to read Sandkit — how to use generated member pages under /api/. - Generated namespaces named in the guide: - sandkit.api.ui and sandkit.api.ui (worker toast) - sandkit.api.ui.regions - sandkit.api.ui.hotbar - sandkit.api.ui.components - sandkit.api.ui.navigation - sandkit.api.ui.overrides - sandkit.enums.ComponentId - Player: inventory and items — hotbar slot logic and input bindings behind UI mounts. - Engine and workers — main-thread React via sandkit.react and worker toast-only surface. [^ui-guide]: Primary guide — /guides/ui.md.",
    "path": "/okf/ui/hud-and-overlays",
    "id": ""
  },
  {
    "title": "HUD screen map",
    "body": "Version chip v0.5.6 (live CDP snapshot, Sep 2026). This save: MAX LEVEL viability, objective gate Investigate Anomaly (store.mods.storyProgression.currentStep: investigate anomaly). ComponentIds: HudTopLeft (resources column), HudTopRight (menu, viability, objectives). Resources: Credits , Fluxite , Energy (icon + count). Live probe: all three counters at 0 on this autosave. Collapse chevron, then rows: Label Badge Overlay -------- ----- ------------------------------------------------ Toolbox Tab Toolbox Building Q Building Research T Research Upgrades U Upgrades Extra rows: sandkit.api.ui.registerManagementMenuButton — see Overlay API. Debug (Debug overlay). Hidden while DEBUG is open. Stats expand/collapse: Elem, Dmg (Next, Free), % IDs free, Lights static/fx, Structures, Particles, Mouse World/Cell, Heap, SAB (sim/other), Calc, Measured. Menu [Esc] (Pause menu). Viability . Objectives (story card). SECONDARY checklist. Bank up / n / down. Slots 1-9 and 0. Two empty buttons after 0. This session (bank 0): Shovel (1), Grabber (2), Grappling hook (4), Demolisher (4), Grabber (2), Vacuum (5), flareGun mod, Filter (18), Light (26), Velocity (20). activeSlotIndex was null on probe — set a slot before MCP mutations. Banks: Options Hotbars . Keys: Keybindings HOTBAR. Hide Shortcuts . Default chips: Ctrl+Z Undo, Space Hover, E Radial, C Select, X Delete, Middle Click Picker, V Ruler. Toggle Activity Heatmap , zoom minus / plus. F4 , or Options - General - Hide UI . Esc shows UI again. - DOM and scenes - Overlay API",
    "path": "/okf/ui/hud",
    "id": ""
  },
  {
    "title": "UI",
    "body": "HUD, overlays, dialogs, hotbar, and in-game screens. - HUD and overlays - DOM and scenes - HUD screen map - Pause menu - Options - Save and load - Feedback - Management overlay - Toolbox - Building - Research - Upgrades - Debug overlay - Keybindings - Overlay API - Screens - Intro and Deploy - Overlays - Screen gaps",
    "path": "/okf/ui/index",
    "id": ""
  },
  {
    "title": "Intro and Deploy scenes",
    "body": "store.scene.active: Intro = 2 , Deploy = 3 , Game = 4 . See DOM and scenes. UI component: ComponentId.IntroScreen ( 20 ) — Overlay API. Session flag: session.ui.introScreen.visible (default false on main menu). Scene triggers: three { done: false } entries while on Intro.",
    "path": "/okf/ui/intro-deploy",
    "id": ""
  },
  {
    "title": "Intro and Deploy scenes.Story copy (`story|intro|*` i18n keys)",
    "body": "Key English text --- --- story\\ intro\\ title MISSION BRIEF story\\ intro\\ subtitle Planet PX-47 Assignment story\\ intro\\ heading Archon Pri // Sentinel Command (resolved from character/org keys) story\\ intro\\ welcome Welcome, Prospector. story\\ intro\\ reason Orbital overseer briefing for the Heliodyne Sand Survey Program on PX-47. story\\ intro\\ detailsLabel Objective story\\ intro\\ details Extract sand and build an initial gold production factory. story\\ intro\\ notesTitle INTEL REPORT story\\ intro\\ note1 Archived data suggest an extinct high-tech civilization. story\\ intro\\ note2 Colossal entities (COL-Θ) roam the dunes, unresponsive to contact.",
    "path": "/okf/ui/intro-deploy",
    "id": ""
  },
  {
    "title": "Intro and Deploy scenes.Controls (i18n button labels)",
    "body": "Key Label --- --- story\\ intro\\ openButtonText ESTABLISH LINK story\\ intro\\ buttonText CONFIRM MISSION story\\ intro\\ skipIntro Skip Intro story\\ intro\\ sequenceReady SEQUENCE READY story\\ intro\\ launch LAUNCH After confirm, Zoe dispatch text plays (story\\ intro\\ zoeDispatchReady) and flow advances toward Deploy. Engine skip: sandkit.engine.api.game.start(state, { skip: true }) hides introScreen and jumps past Intro UI. Drop-pod cinematic. session.rendering.pixi.sprites.player.dropPod.visible becomes true . Skip when store.world.externalMap.deployment === \"skip\" (custom / debug maps). Otherwise the scene runs timed triggers (store.scene.triggers) with boost audio and camera motion until Game scene starts. Main-menu New on this modding-beta session went straight to the bootstrap loader (Starting game / Bootstrapping / Cancel ). Intro and Deploy did not appear in the a11y tree before load began. Returning to main menu via Cancel left scene 1 and did not overwrite an existing save. First-run or non-skip game.start paths still use scenes 2 and 3 per extract. A dedicated first-run save probe is still needed for full a11y capture. - Screens — main menu New row - DOM and scenes — Scene enum values - Screen gaps",
    "path": "/okf/ui/intro-deploy",
    "id": ""
  },
  {
    "title": "Management overlay",
    "body": "Full-screen z-[10004]. HUD column stays visible. Tab Key Detail -------- --- ------------------------------------------------ Toolbox Tab Toolbox Building Q Building Research T Research Upgrades U Upgrades Detail pane: Hover over an item to see details. Toolbox/Building: drag to hotbar; Disable Drag & Drop if clicks stick. Open with window keydown when a HUD button has focus. - HUD screen map - Keybindings - DOM and scenes",
    "path": "/okf/ui/management",
    "id": ""
  },
  {
    "title": "Options",
    "body": "Tabs: General , Video , Audio , Controls , Mods . Footer: Reset , Cancel , Save . Mods tab renders each loaded mod's configSchema — see Mods host. Controls list: Keybindings. INTERFACE: Language (e.g. Auto-detect (en)); UI Scale 50-150%; Hide UI (F4 / Esc). GAMEPLAY: Hotbars spinbutton 1-10; Autosave switch. WHEN UNFOCUSED: Keep Running; Mute Music; Mute Sounds. DISPLAY: Fullscreen. PERFORMANCE: Zoom 0-4; Frame Rate listbox (session: 144 FPS); Show FPS. ACCESSIBILITY: Cursor Size 0.5-3. Master Volume, Music Volume, SFX Volume — 0-100%. Per-mod configSchema headings. Types: boolean, number, choice. Schema: /config-schema.md. This session: HOT RELOAD DEV TOOLS: Mod enabled; Auto-load save; Start save (e.g. Mod storage); Disable autosave; Watch local mods; Open DevTools on load; F12 opens DevTools; F3 debug overlay. TEMPLATE: Mod enabled. - Pause menu - Keybindings",
    "path": "/okf/ui/options",
    "id": ""
  },
  {
    "title": "Overlay API",
    "body": "Declarations: node modules/@sandustry-modding/types/src/sandkit/api/ui.d.ts. Reference: SandustryTypes and official Sandkit API. Dialogs: toast, showTooltip, alert, confirm, prompt, select(options, opts?), openPauseMenu. Hooks: useGameEvent, useRefresh(componentIds), useScale(). Mount: inject, update. Regions: regions.mount, regions.setVisible. Overrides: overrides.register. Hotbar: hotbar.createBankSource, selectAction, getBankCount, getActiveBankIndex, getActiveSlotIndex, getSlotKeyLabel, useHotbar. Components: components.ActionSlot, components.Panel, components.Button. Navigation: navigation.useFocusable, navigation.useFocusScope, navigation.getControllerFocusClass (deprecated alias: controllerFocusClass). Engine: sandkit.engine.api.debug. regions.mount(regionId, mountId, options) — options.placement?: \"raised\" \"docked\" (\"docked\" sits on the hotbar; \"raised\" above panels such as Filter Config); options.order?; options.render(). Returns mountHandle with update(options) and unmount(). Deprecated aliases: overlays.register(slot, overlayId, render), overlays.update(slot), overlays.unregister(slot, overlayId). regions.setVisible(regionId, visible) returns visibilityHandle.restore(). overrides.register(componentId, wrapper) — wrapper(Original, props). Returns overrideHandle.remove(). Example componentId: \"resources\". createBankSource({ bankOffset, minimumBankCount? }) — isAvailable(), getBankIndex(), getSlotCount(), getAction(slotIndex), activateSlot(slotIndex), clearSlot(slotIndex), dispose(). Also: selectAction(action), getBankCount(), getActiveBankIndex(), getActiveSlotIndex(), getSlotKeyLabel(bindingId), useHotbar() - { bankCount, activeBankIndex, activeSlotIndex }. select(options, opts?) — options[].label, options[].value; opts.message?, opts.title?, opts.defaultValue?, opts.buttonLabel?. Returns chosen value or null. inject(id, Component) registers a global overlay. The overlay id is ${modId}:${id} (the sandkit for that mod supplies modId). Engine store: session.ui.overlays.global[overlayId] = { render }. The same slot+id replaces render and calls ui.update(GlobalOverlays). The dispose function holds a Symbol token. A later inject with the same id writes a new token. The old dispose then does nothing. regions.mount(\"hotbar\", mountId, { render }) (or deprecated overlays.register(\"hotbar\", overlayId, render)) writes session.ui.overlays.hotbar[overlayId] and updates HotbarOverlays . Same replace-by-id rule. Live sandkit.enums.ComponentId keyCount 31 (0.5.5). Id Screen --------------------- ---------------------------------------------------- Hotbar 1 Bottom hotbar SoundBoxConfig 2 Structure config Root 4 UI root Menu 5 Pause menu Management 6 Management overlay FilterConfig 7 Filter UI Resources 8 Top-left resources TechTree 9 Research Tutorial 10 Tutorial Loader 11 Loading Options 12 Options ShortcutHelper 13 HUD shortcuts Upgrades 14 Upgrades Tooltip 15 Tooltips Notifications 16 Top-center Objectives 17 Top-right objectives DroneAdminList 18 Drones HotbarOverlays 19 Extra hotbar chrome IntroScreen 20 Intro StoryNotifications 21 Story toasts FactoryProgress 22 Viability Dialogs 23 Modals GlobalOverlays 24 Full-screen overlays Lexicon 25 Codex ModsScreen 26 Pause Mods CustomMapsScreen 27 Custom maps CinematicPanel 28 Cinematics Feedback 29 Feedback MainMenuActions 30 Main menu actions HudTopLeft 31 HUD screen map top-left HudTopRight 32 HUD screen map top-right - HUD and overlays — kit guide index for api.ui. - sandkit.api.ui and sandkit.api.ui (worker toast). - sandkit.api.ui.regions, sandkit.api.ui.hotbar, sandkit.api.ui.components. - sandkit.enums.ComponentId.",
    "path": "/okf/ui/overlay-api",
    "id": ""
  },
  {
    "title": "Overlays",
    "body": "Full-screen or canvas-mounted UI that is not the management overlay (Management overlay) or pause dimmer. Binding: RadialMenuOpen → KeyE (Keybindings, session.settings.keyBindings.RadialMenuOpen). Opens while E is held (keydown without immediate keyup). Items come from store.player.buildings unlocked structure ids (numeric and string mod ids). Rendering: SVG pie slices centered on the cursor. Each wedge uses a (example live id: radial-clip-2:11-0 for structure type 11 wedge 0 ). Icons render inside divs clipped to the slice. They are not exposed as named controls in the accessibility tree.",
    "path": "/okf/ui/overlays",
    "id": ""
  },
  {
    "title": "Overlays.Accessibility (held **E**, CDP `:9222`, 2026-09-15)",
    "body": "Probe Result ----- ------ agent-browser press e Did not open the radial (keyup fires immediately) keydown on window / document without keyup Opens radial (FH.ui.radialMenu.isOpen() → true ) [aria-label] count while open 0 (entire document) SVG path / g aria-label or title null on all sampled wedge nodes agent-browser snapshot -i while held No wedge refs; only HUD hotbar groups remain Automation should map wedge order to store.player.buildings indices and Lexicon kind: \"buildings\" names. Do not rely on aria-label text — vanilla does not set it on 0.5.6.",
    "path": "/okf/ui/overlays",
    "id": ""
  },
  {
    "title": "Overlays.Live wedge list (dev autosave, 61 entries)",
    "body": "id Name --- --- 11 Foundation 16 Collector 4 Shaker 2 Conveyor Belt 5 Launcher 18 Filter 26 Wall Light 20 Kinetic Press burnerBeltRight Burner Belt thermalRelay Thermal Buffer quantumPortal Conveyor Portal 23 Pipe 24 Pump 25 Liquid Vent 21 Planter Box heatCannonUp Pyro Dispenser clearingFrameRight Clearing Frame kineticFieldEmitter Aerokinetic Fan filterRightMk2 Advanced Filter thermodryer Steam Dryer thermofroster Condenser conveyorRightMk2 Conveyor Belt Mk.2 launcherUpMk2 Launcher Mk.2 snowmaker Snowmaker goldBattery Florinol Battery smelter Smelter 27 Flux Emanator copperMold Copper Mold voidRift Void Rift electricityConnector Energy Connector steamTurbine Steam Turbine aurixiteCrystallizer Synthesizer swarmConsole Aura Extractor prismiteWell Prismite Well prismalineWell Prismaline Well earthStratacore Earth Stratacore glassFoundation Glass Foundation critterFence Critter Fence signalGate Door signalSwitch Signal Switch signalLamp Signal Lamp signalBuffer Buffer signalSensor Signal Sensor signalToggle Toggle (T-FlipFlop) signalButton Signal Button signalPulseSensor Pulse Sensor signalPresenceSensor Presence Sensor signalAnd AND Gate signalOr OR Gate signalNot NOT Gate signalNand NAND Gate signalNor NOR Gate signalXor XOR Gate signalXnor XNOR Gate signalRepeater Repeater retroConsole Retro Console sandustryTestBlocksSource (mod test block, no Lexicon name) sandustryTestBlocksTrash (mod test block) sandustryTestBlocksThermalSource (mod test block) sandustryTestBlocksCold (mod test block) sandustryTestBlocksPower (mod test block) Automation note: close pause / management windows first, then dispatch keydown without matching keyup. Re-snapshot after keyup to release the menu. Binding: OpenMap → KeyM (session.settings.keyBindings.OpenMap). Requires map tech 91 unlocked (store.player.tech[\"91\"]). Handler also checks in-game gate functions before opening.",
    "path": "/okf/ui/overlays",
    "id": ""
  },
  {
    "title": "Layers (live 0.5.6)",
    "body": "Layer Role --- --- canvas World render overlay-canvas 2D overlay (display: block while probed) ui child z-[10005] Full-screen global overlays (pointer-events-none) Bottom-right HUD Toggle Activity Heatmap , zoom − / + (HUD screen map) M did not add map tile nodes to the a11y tree on CDP walks. The map body is canvas / fixed DOM without interactive a11y children. session.windows has no dedicated map key. Opened from Debug → Game → Codex (session.windows.lexicon, ComponentId Lexicon 25). Control Role ------------------ ----------------------------------------- Show JSON Raw entry payload Close Dismiss Category tabs Counts on each tab (live save below) Type to filter… Search box Clear / Focus Filter helpers Entry list Buttons: title, description, Core/Mod, id: Details pane Select an entry to see details. Live category counts (dev autosave, mods loaded): Tab Count ------------ ----- Elements 50 Terrains 43 Buildings 92 Items 36 Projectiles 2 Upgrades 25 Tech 56 Misc 12 Tech tab lists full node names and descriptions (e.g. Logistics , Map , voidOrb ). Use this when the Research tech-tree graph only shows ✓ checkmarks (Research). - Debug overlay - Screens - Screen gaps",
    "path": "/okf/ui/overlays",
    "id": ""
  },
  {
    "title": "Pause menu",
    "body": "Menu [Esc] or Escape . Dimmer z-[10010]. HUD stays behind. Rows are w-64 cursor-pointer (not buttons), except Dev Tools . Label Opens ------------- -------------------------------------------------- Unstuck Teleport Send feedback Feedback (also F2) Continue Close pause Save Save and load Load Save and load Options Options Exit Leave run Underscores: C ontinue, S ave, L oad, O ptions, E xit. Footer: Discord https://discord.gg/HJNk5eMnmt, Early Access 0.5.6 seed: (live example g5uk0hk7), Copy info for bug report . Exit opens the Exit game dialog (save checkbox, main menu / desktop / cancel). API: sandkit.api.ui.openPauseMenu(). - HUD screen map - DOM and scenes",
    "path": "/okf/ui/pause",
    "id": ""
  },
  {
    "title": "Research",
    "body": "Chrome: Management overlay. Sub-tabs Tech Tree , Conservatory . Graph (SVG) inside the management overlay. Sub-tab button Tech Tree (sibling Conservatory ). Live a11y on CDP :9222 (0.5.6): - Dozens of clickable nodes labeled ✓ only (unlocked). - At least one node shows badge text AUTHORIZED (not clickable like checkmarks). - Visible cost label on graph: Aura 10,000 (repeated near nodes). - Node display names are not in the research graph a11y tree (only ✓ , AUTHORIZED , and cost labels). Map graph nodes to Lexicon kind: \"tech\" entries (session.lexicon.entries, 56 on dev autosave). Each entry has id, name, and optional details.nameKey. Graph id (examples) Lexicon name --- --- 1 Shaker 2 Logistics 91 Map 108 Hover voidOrb voidOrb swarmConsole swarmConsole fluxEmanator fluxEmanator Full grid coordinates: Tech tree structure. Numeric ids without Lexicon name strings (e.g. 71 , 106 ) resolve via unlock-target i18n — see Numeric grid ids. Sub-tab button Conservatory . Headings Creatures and Rewards (h2). Creatures (live 5/5 on dev autosave): each row is image + name + flavor + Captured: count. Name Flavor (short) ---------- --------------------------------------------------- Shinelet Delicate light-bug in the dark Lumling Springborn cavern drifter, water bursts Redweaver Threads strings of Redsand Voltblub Electric creature for solid energy blocks Voidgrazer Liquefies Voidhusk into Voidjuice Rewards (live 11/11): clickable tickets with unlock blurbs — Coloring Tool, Glass Foundation, Critter Fence, Door, Grappling Hook, Precision Tools, Signal Devices, Signal Controls, Logic Gates, Wall Tool, Retro Console. - Management overlay - Progression: tech and upgrades - Debug overlay",
    "path": "/okf/ui/research",
    "id": ""
  },
  {
    "title": "Save and load",
    "body": "Opened from the Pause menu. Close X. SAVE NAME textbox. Empty name uses the placeholder (e.g. Save 21). OR OVERWRITE EXISTING : name, age, Lv, playtime, credits, fluxite. Confirm Save only when asked. Import .save , close X. Left WORLDS (name, level, save count, time, credits, fluxite). Right: Factory Lv, seed: , Copy seed . Tags EXIT , QUICK , AUTO . Load / Export / Delete stay disabled until a row is selected. - Pause menu - Keybindings — Quick Save F5, Quick Load F9",
    "path": "/okf/ui/save-load",
    "id": ""
  },
  {
    "title": "Screens",
    "body": "Live walk on CDP :9222 (F5 dev session, Early Access 0.5.6 ). store.scene.active is 1 on the main menu and 4 in a run. Left column rows (cursor-pointer, not ): Label Role --------- ----------------------------- Continue Resume last autosave / run New Start new game flow Load Save and load from title Options Options Quit Leave application Mods Workshop Mods overlay Maps Custom Maps overlay Top-left: Debug , Stats ▸ (same labels as in-game HUD). Right panel: heading Modding Beta Branch , developer note (F2 feedback, switch to default branch for vanilla), Lantto signature, social links. Footer: Discord (live member counts), Reddit • YouTube , Early Access 0.5.6 , Send feedback , Credits . session.windows keys from DOM and scenes apply once a run starts. Title screen itself uses ComponentId MainMenuActions (30) per Overlay API. Pause Exit opens a modal (not a pause row). Control Type ------------------------------- ----------------- Heading Exit Game h2 Save the game before exiting checkbox, default on Exit to Main Menu row Exit to Desktop row Cancel row Opened from main-menu Mods (sets session.windows.modsScreen.open, ComponentId ModsScreen 26). This is not the in-game Options → Mods configSchema inspector (Options).",
    "path": "/okf/ui/screens",
    "id": ""
  },
  {
    "title": "Feature flag (0.5.6 modding beta)",
    "body": "Game config mods.showSubscribedMods is false on the modding beta branch (webpack module 90823 ). When the flag is off, the screen never loads the subscribed list even if Steam initializes.",
    "path": "/okf/ui/screens",
    "id": ""
  },
  {
    "title": "Screens.Live walk (CDP `:9222`, Steam binary, 2026-09-15)",
    "body": "Part a11y text ----- --------- Title Workshop Mods Body Steam is not available. Launch the game via Steam to use Workshop mods. Close button electron.platform.isInitialized() returned false in the same session. platform.workshop.getSubscribedItems() returned { ok: false, error: \"Steam not initialized\" }. electron.localMods.list() still worked (irishbruse.selection-capture in the local folder). platform.workshop.getSandkitMods() returned the loaded mod manifest set. When showSubscribedMods is true and Steam initializes, the bundle renders the full workshop UI below.",
    "path": "/okf/ui/screens",
    "id": ""
  },
  {
    "title": "Full UI when `showSubscribedMods` is true (extract 0.5.6)",
    "body": "Section Controls / copy ------- ---------------- Header Workshop Mods , Close (Escape dismisses) Browse Browse Workshop + hint (Steam Workshop subscribe flow) Install by id Workshop Item ID text field, Install / Installing... Subscribed list Subscribed Mods ({count}) heading Empty subscribed No mods installed. + hint to enter an id or browse Row (per item) Title (or Mod {id} fallback), ID: {id} , status pill Status pills Installed , Downloading {percent}% , Pending , Update Available , Subscribed Row actions Open in Workshop , Unsubscribe Local mods Loaded local mods ({count}) , version • folder, author, Open , Upload Create mods Create mods , documentation blurb, Open folder , restart hint Workshop IPC (renderer): electron.platform.workshop.getSubscribedItems, getItem, installInfo, downloadInfo, subscribe, unsubscribe — Electron bridge. Alternate bodies when gated: Condition Body copy key --------- ------------- showSubscribedMods false, Steam init ok ui\\ mods\\ comingSoon (switch to mods Steam branch) Electron runtime, Steam not init ui\\ mods\\ steamUnavailable + ui\\ mods\\ launchViaSteam (live walk above) Non-Steam platform ui\\ mods\\ platformUnavailable Non-Electron runtime ui\\ mods\\ desktopOnly Opened from main-menu Maps (session.windows.customMapsScreen.open, ComponentId CustomMapsScreen ).",
    "path": "/okf/ui/screens",
    "id": ""
  },
  {
    "title": "Feature flag (0.5.6 modding beta)",
    "body": "Game config customMaps.showCustomMaps is false on the modding beta branch. When off, the screen shows only the coming-soon stub (live walk below).",
    "path": "/okf/ui/screens",
    "id": ""
  },
  {
    "title": "Screens.Live walk (CDP `:9222`, 2026-09-15)",
    "body": "Part a11y text ----- --------- Title Custom Maps Body Coming soon... Close button electron.customMaps.list() returned [] on the same session (IPC works; no saved maps).",
    "path": "/okf/ui/screens",
    "id": ""
  },
  {
    "title": "Full UI when `showCustomMaps` is true (extract 0.5.6)",
    "body": "Section Controls / copy ------- ---------------- Header Custom Maps , Close (Escape) List heading Saved Maps ({count}) Empty No custom maps saved. Row Map name, Seed: {seed} , created date, Play (starts new game), delete (trash icon, ui\\ common\\ delete) Errors ui\\ customMaps\\ error\\ load, ui\\ customMaps\\ error\\ delete Persistence: renderer electron.customMaps → main-process custom-map- IPC. On-disk .custommap layout: Custom maps IPC. The enabled UI also mirrors saves in renderer IndexedDB before syncing through IPC. New starts game.start (bootstrap loader on live modding-beta session). Intro (scene 2 ) and Deploy (scene 3 ) precede Game when not skipped. Full story copy, controls, and skip paths: Intro and Deploy. Live note: this CDP session jumped from New to the loader without Intro/Deploy a11y nodes. Cancel on the loader returned to main menu without overwriting saves. - Main-menu Load slot list (same component family as in-run load). - Intro / Deploy a11y on a verified first-run save. - Intro and Deploy - Pause menu - DOM and scenes - Screen gaps",
    "path": "/okf/ui/screens",
    "id": ""
  },
  {
    "title": "Toolbox",
    "body": "Chrome: Management overlay. Sub-tabs Items , Stratacores . Filters: All, Excavation, Utility, Tools, Drones, Construction, Transportation, Misc. Tiers repeat the same name. Unique: - Excavation: Shovel, Gun, Mega Shotgun, Rocket Launcher, Shotgun, Drill (energy), Laser (energy), Void Gun (Voidjuice), Propulsion Trowel - Utility: Grabber, Cryoblaster, Flamethrower, Grappling Hook, Vacuum, Flare Gun, Flashlight, Volcanizer, Recall Shard, Locator, Corraller - Tools: Teleporter - Drones: Digger, Hauler, Sweeper, Recon - Construction: Caulk Blaster, Precision Laser, Prefabulator, Coloring Tool, Wall Tool - Transportation: Blinker - Misc: trimHatchet ( TR ) This save: Terracortex , CLICK TO DEPLOY , 1 collected . - Management overlay - Upgrades",
    "path": "/okf/ui/toolbox",
    "id": ""
  },
  {
    "title": "Upgrades",
    "body": "Chrome: Management overlay. Filters: All, Utility, Tools, Drones, Augments. Hide Max . Fluxite in header. This maxed save marks every row MAX : Tool Upgrades ----------------- ------------------------------------------------- GRABBER Material Scanner, Expanded Capacity, Hydro Sponge FLAMETHROWER Extended Range, Vapor Blast CRYOBLASTER Permafrost Surge VACUUM Tank Capacity, Extra Tanks DRILL Bore Bit VOID GUN Tank Capacity PROPULSION TROWEL Thrust Power LOCATOR Triangulation Lens SHOVEL Digging Speed, Broader Shovel GUN Rapid Fire, Tracer Rounds, Velocity Rounds ROCKET LAUNCHER Extended Magazine, Heavy Payload HAULER DRONE Drone Fleet, Quantum Propulsion DIGGER DRONE Drone Fleet SWEEPER DRONE Swarm Expansion, Wider Sweep, Guiding Light - Management overlay - Progression: tech and upgrades - Toolbox",
    "path": "/okf/ui/upgrades",
    "id": ""
  },
  {
    "title": "Background layers",
    "body": "Visual background is not only shared.sim.cellIds. Void-world wipes must clear these buffers too. Buffer Path Bytes per cell Role ------------------ ----------------------- -------------- --------------------- Terrain / elements shared.sim.cellIds 4 (uint32) Foreground sim Wall tiles shared.wallData.data 1 Background wall paint Terrain shadow shared.shadowMap.data 1 Shadow overlay Map raster shared.mapData.data 4 (RGBA) Procgen map imagery Clear per row in batch passes. Do not dump full arrays in probe responses. Field Path Role --------------- --------------------------- ---------------------------------- Horizon columns store.world.horizon len 3840, ground silhouette height Ground horizon store.world.groundHorizon len 3840 Fixtures store.world.fixtures World fixture list Lights store.world.lights World light records Teleport zones store.world.teleportZones Zone defs Sensors store.world.sensors Sensor defs .fill(0) on horizons; .length = 0 on arrays. Field Path -------------------------- ------------------------------------------ Placements store.mods.prefabData.placements Foliage copy store.mods.foliage.data.prefabPlacements Placed sprites (store) store.mods.foliage.placedFoliage Procgen clusters store.mods.foliage.data.procgenClusters Foliage clusters engine.api.foliage.getClusters(state) Foliage Pixi container engine.api.foliage.getContainer(state) Clear all placement arrays, placedFoliage, and removeChildren() on foliage container. Prefab arrays can be empty while placedFoliage still holds live sprite records (Void save: 2015 entries, same count as Pixi children). Parallax and map overlay sprites — hide (visible: false, alpha: 0) and clear children: Key Role ---------------------------------- ---------------------------------- mountainsSprite Distant mountains treesSmallSprite Small trees parallax treesSprite Trees parallax bgL04Sprite Background layer 4 bgL04Extension Layer 4 extension backgroundEntitiesContainer Decor entities ( 28 children live) mapSprite Map / fog overlay texture wallTilemap / shadowMapTilemap Wall and shadow tilemaps Also set filter.uniformGroup.uniforms.uDrawUndergroundFog = false when present. Large foliage draw container may live on pixi.app.stage (hundreds of children) — hide that container if decor respawns after redraw. - Fog cells in sim: terrain ids 4, 5, 6, 13 (CellType.Fog ). - revealFogAtCell updates exploration and may spawn cached world items — see Entities: drones and projectiles. - After direct buffer clear, fog ids are already 0; batched revealFogAtCell still helps the map UI if black fog remains. - Wall, heat, shadows, foliage - store.world session metadata - Maps API",
    "path": "/okf/world/background-layers",
    "id": ""
  },
  {
    "title": "Cells: types, elements, matter",
    "body": "Three layers overlap at each grid cell. 1. Cell id (shared.sim.cellIds) — empty, terrain, damaged ground, or element slot. 2. Element type — numeric handle when id is in the element range. See ElementType enum and mod registrations. 3. Matter type — physics category (Solid, Liquid, Gas, …) on the element definition . Matter type is not stored per cell directly. Use api.grid.isCellEmptyAtCell, isTerrainAtCell, elements.getTypeAtCell, elements.getMatterTypeAtCell, and terrains.getTypeAtCell in mod code. Official signatures: sandkit.html. Built-in terrain kinds include Empty (0), Element (1), Dirt, fog variants (Fog 4, FogJetpackBlock 5, FogWater 6, FogLava 13), Stone, Ice (25), Obsidian, and others. Live fog sample: cellId 4 (Fog) at (200, 1720). Live terrain sample: cellId 25 (Ice). Mod terrains register into ids up to 1000 (terrainType table length 1001). Sand (1), Water (3), Gold (7), Gloom (8) , Lava (19), Petalium (18), Basalt (20), and others. Mod elements extend via elements.register. Live: state.sandkit.mods.elements has 31 registered ids (sample: caulk, florin, liquidGold). Artifact (1), GlyphKey (2), Stratacore (3) , Orb (4). Deprecated enum alias: WorldItemType. Value Name ----- -------- 1 Solid 2 Liquid 3 Particle 4 Gas 5 Static 6 Slushy 7 Wisp 8 Powder Resolve through elements.getMatterTypeAtCell or definition matterType. Workshop mods may use values outside 1–8 via engine.api.matters.register. Engine-only matters.register / getMatterTypeFromId: see Engine and workers. - getTypeAtCell returns the raw stored type. - getResolvedTypeAtCell / getResolvedTypeFromCellId apply overlays and particles. - getInfoAtCell returns { elementType, isParticle, cellId, elementIndex }. Elements can move with velocity in elementData. Use isFreeFallingAtCell, getVelocityAtCell, and convertToParticleAtCell. See Elements API. - Grid and chunks - Elements API - Terrains API",
    "path": "/okf/world/cells",
    "id": ""
  },
  {
    "title": "`api.elements`",
    "body": "Official: sandkit.html — api.elements. Types: @sandustry-modding/types src/sandkit/api/elements.d.ts, src/shared/api/elements.d.ts. Main entry handles registration and deferred cell mutations. Worker entry applies immediate mutations plus extra move and swap helpers (see Worker-only below). Method Role ----------------------------------------- ------------------------------------------------------------------------------------------------------- getTypeById(elementId) String id → type handle. Builtins (residue, wetSand) resolve even when absent from mods.elements getIdByType(elementType) Type handle → string id getDefinitionByType(elementType) Mod definition getTypeAtCell, getResolvedTypeAtCell Type at cell getResolvedTypeFromCellId(cellId) Type from packed id getInfoAtCell Type, particle flag, indices getMatterTypeAtCell Matter category isTypeAtCell, isFreeFallingAtCell Boolean checks getVelocityAtCell, getDataFieldAtCell Per-cell data Deprecated alias: getTypeFromId → getTypeById. Method Role ----------------------------------------------------------------------------- -------------------------------- getRegisteredTypes() All type handles register(definition) New element → { elementType } updateDefinition(typeOrId, partial) Patch definition addInteractionInfo(typeOrId, interaction) Tooltip interactions getNameByType(elementType) Display name findFreeCellInStructure(structureCellX, structureCellY, structureSizeCells) Footprint search Deferred on main. Reads see the old grid until mutations apply. Methods: createAtCell, replaceAtCell, removeAtCell, teleportBetweenCells, setVelocityAtCell, addParticleVelocityAtCell, convertToParticleAtCell, convertFromParticleAtCell, setDataFieldAtCell, refreshColorAtCell, setPhysicsAtCell, setDurationAtCell. Each has a deprecated WhenIdle alias (same function). setPhysicsAtCell takes api.constants.physics values — see Grid, world alias, and pickups. For coordinated element and terrain changes, prefer api.grid.mutate(writer = …). Present on worker entry only (undefined on main renderer 0.5.5): Method Deprecated alias -------------------------------------------------------------------- ----------------------------------- moveBetweenCells(fromCellX, fromCellY, toCellX, toCellY) — swapBetweenCells(firstCellX, firstCellY, secondCellX, secondCellY) swapCells markMovementBlockedByIndex(elementIndex) markMovementBlockedByElementIndex Worker createAtCell / replaceAtCell / etc. apply immediately (no WhenIdle aliases in worker docs). Public TypeScript (@sandustry-modding/types shared elements.d.ts). Pass to register / updateDefinition. getDefinitionByType returns the live snapshot (may include extra keys below). Field Role -------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- id String id for mods (modId:localId). Builtins often omit id on the engine config; resolve with getIdByType / nameKey nameKey i18n key for display name (elements\\ sand\\ name, or mod key from api.i18n.register) density Copied onto the cell at spawn (elementData.density). Heavier sinks through lighter. Examples: Water 100, Sand 150, Gold 300, Steam/Fire 25 matterType Physics category: sandkit.enums.MatterType Solid(1) … Powder(8). See Cells. Some workshop mods use values outside 1–8 via engine matters isGrabbable? Grabber skips only when === false. Omit or true allows grab. Some grab UI paths still refuse Liquid/Gas isTransportable? Conveyors treat omit as true ; false blocks. Liquid / Gas / Static matter also skip transport regardless defaultDataFields? Spawn defaults for field1…field4 → elementData.dataField1…4. Override per place with createAtCell dataFields / getDataFieldAtCell / setDataFieldAtCell colors See colors below getExtraProps? See getExtraProps below",
    "path": "/okf/world/elements",
    "id": ""
  },
  {
    "title": "`api.elements`.`colors`",
    "body": "Key Role ------------------------ --------------------------------------------------------------------------------------------------- variants Palette of [r,g,b] (types) or live [r,g,b,a] tuples. Spawn picks a random variantIndex (0–3). variantFromDataField1? Map per-cell dataField1 onto variants for draw / refreshColorAtCell variantFromDataField1 options (engine color path): Option Default when omitted Role ------------- -------------------- ------------------------------------------------------------------------------------- rangeMin 1 Clamp low for dataField1 rangeMax variants.length Clamp high invert true Flip position inside the range before picking a variant useGradient falsy When true, lerp between adjacent variants; when false, discrete index into variants Live samples: Coolant { rangeMin:0, rangeMax:100, invert:false, useGradient:true }; Water Pressure { rangeMin:1, rangeMax:700, invert:true, useGradient:true }. Live color scheme also exists under session.colors.scheme.element[type] (may diverge from the definition object). Engine-only variantFromVelocity is not on the public type.",
    "path": "/okf/world/elements",
    "id": ""
  },
  {
    "title": "`api.elements`.`getExtraProps`",
    "body": "Optional () = ({ data: Record }). On create, the engine merges the return value into the spawn bag. Builtin data keys that write dataField : Element data keys Maps to -------- ------------------------------ ---------------------- Steam energy (default 10) dataField1 Fire temperature (default 1000) dataField1 Seedling seedlings, grows, runway dataField1, 2, 3 Matter-type getExtraProps on the physics table (Liquid axis counters, Particle velocity bag) is separate from element definitions. Key Role -------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------- descriptionKey / description Lexicon copy metaColor RGB packed as 0xRRGGBB materialId Render / sim material index hidden Hide from some UI duration / durationRandom Lifetime seconds horizontalSpeed Sideways motion (example: Lava 0.1) flammable Burn output id, chance, fire duration. Builtins may omit this object collectable.value Collector gold mixes Contact mix { elementType, result } interactions Tooltip kinds (flammable, freezable, …). Residue is kind: \"flammable\" only; engine fire writes Burnt Residue at 25% — see Sim crafting Built-in enum: sandkit.enums.ElementType — Sand (1) … Basalt (20), Gloom (8) . String id for mods is definition.id; for builtins parse nameKey (elements sand name). Live: state.sandkit.mods.elements — 32 registered ids this session (sample: caulk, florin, liquidGold, irishbruse.trees:pineCone). - Cells: types, elements, matter - Sim crafting - Engine and workers — worker entry surface",
    "path": "/okf/world/elements",
    "id": ""
  },
  {
    "title": "Gaps",
    "body": "Still open: - Worker-thread sandkit.api parity spot-check via CDP worker attach (extract facade documented — Worker entry API; no worker CDP target on 0.5.6) Moved to concepts: scheduling typed arrays (Workers and scheduling), per-thread column/chunk ownership formulas (Workers and scheduling), grid.mutate flush vs chunkShouldUpdateNext promotion (Grid and chunks), no shared heat SAB (Wall, heat, shadows, foliage), getDataAtCell { cellType, hitPoints, hp } (Terrains API), Gloom / Stratacore (Cells), mod terrain cellType table 31–55 (Terrains API), variable grid / chunk count formula (Grid and chunks), artifact location merge and sensor name mapping (Maps API), live getArtifactLocations() on campaign save b93kqvog6zn-exitsave (Maps API). - World probe playbook — safe live inspection",
    "path": "/okf/world/gaps",
    "id": ""
  },
  {
    "title": "Grid and elements",
    "body": "Load this concept when your mod reads or writes the cell grid, registers elements or terrains, handles maps, pickups, reactions, excavation, fire, raycast, or worker element hooks.[^world-guide] The world guide explains how Sandustry simulates sand, liquids, and terrain on a fixed cell grid. It covers packed cell ids, element matter categories, and terrain hit points with excavation rules. It documents grid queries, fog, redraw, and area iteration on the main thread versus workers. It explains deferred writes through grid.mutate and immediate mutations in worker code. It walks through registering custom elements and terrains with id resolution and tooltips. It describes custom maps via maps.getActive, session start, and artifact locations. It covers world pickups at pixel positions separate from grid cells. It documents contact reactions between element pairs. It lists excavation profiles, pattern matrices, and single-cell dig helpers. It notes fire ignition and world-pixel raycast tracing. It flags deprecated sandkit.api.world aliases and points to worker entry for sim-side hooks. - Official Sandkit API — signature truth for runtime shapes. - How to read Sandkit — how to use generated member pages under /api/. - Generated namespaces named in the guide: - sandkit.api.grid and sandkit.api.grid (worker) - sandkit.api.elements and sandkit.api.elements (worker) - sandkit.api.terrains and sandkit.api.terrains (worker) - sandkit.api.maps and sandkit.api.maps (worker) - sandkit.api.pickups - sandkit.api.reactions - sandkit.api.excavation - sandkit.api.patterns - sandkit.api.fire (worker) - sandkit.api.raycast Use these concepts for runtime shapes, buffer sizes, and enum samples confirmed on live Early Access 0.5.5 . Topic Concept --- --- Read-only live inspection World probe Grid size, cell ids, chunks Grid and chunks CellType, ElementType, MatterType Cells api.grid, api.world, pickups Grid, world alias, and pickups api.elements Elements API api.terrains Terrains API Grid iteration Grid iteration api.maps Maps API Reactions, excavation, fire Sim crafting store.world store.world session metadata Wall, heat, shadows Wall, heat, shadows, foliage Background rasters and Pixi Background layers Workers and scheduling Workers and scheduling idStats and water zones Sim stats buffers Unconfirmed items Open gaps - Engine and workers — workerEntry, WorkerSandkitApi, and thread boundaries. - Entities: drones and projectiles — world pickups overlap with sandkit.api.pickups. - Factory: structures and pipes — structures sit on the same grid. [^world-guide]: Primary guide — /guides/world.md.",
    "path": "/okf/world/grid-and-elements",
    "id": ""
  },
  {
    "title": "`api.grid` iteration",
    "body": "Main thread only. Cell iteration helpers live here. Full grid surface: Grid, world alias, and pickups. Official: sandkit.html — api.grid. Types: @sandustry-modding/types src/sandkit/api/grid.d.ts. Method Role ------------------------------------------------------------------------- ----------------------------------- forEachCellInRectangle(cellX, cellY, widthCells, heightCells, callback) Each cell in axis-aligned rectangle forEachCellInCircle(centerCellX, centerCellY, radiusCells, callback) Each cell inside circle Deprecated alias: forEachCellInRect → forEachCellInRectangle. Callbacks receive (cellX, cellY). Use with read-only elements. / grid. queries inside mod code. Prefer manual loops with bounds checks against sim.width / sim.height: For circle sampling, filter with (dx dx + dy dy) <= radius radius. Return aggregates (counts, first match) instead of large result payloads. - Grid, world alias, and pickups - Grid and chunks",
    "path": "/okf/world/grid-api",
    "id": ""
  },
  {
    "title": "Grid and chunks",
    "body": "Read these fields from debug.config only. Field Live value -------------------- ------------------------------ cellSize 4 px per cell chunkSize 40 cells useMultithreading true obstacleBreakpoint 100 (terrain materialId cap) Campaign and Void saves allocate 3840 × 3840 cells. Custom or dev saves can be smaller — the sim, authorization grid, and mapData raster all match that save's width and height. Live 0.5.6 dev-tools autosave (irishbruse.dev-tools-autosave-1): 1024 × 1024 cells, chunkWidth/chunkHeight 26 × 26 , chunk flag arrays len 676 (= 26²). Formula: chunkWidth = ceil(width / chunkSize), same for height; chunkShouldUpdate.length = chunkWidth chunkHeight. Field Live (3840 campaign) Live (1024 dev save) Role -------------------------------------------- --------------------------- -------------------- ------------------------------------------- width, height 3840 3840 1024 1024 Grid size in cells chunkSize 40 40 Cells per chunk edge (matches config) chunkWidth, chunkHeight 96 96 26 26 Chunk count per axis cellIds Uint32Array, len 14745600 len 1048576 Packed id per cell chunkShouldUpdate, chunkShouldUpdateNext Uint8Array, len 9216 len 676 Per-chunk sim dirty flags elementCapacity 1000000 Max element slots liveElementCount Uint32Array[1] Active elements ( 1.210 in probe) idStats Uint32Array, len 220 Slab + worker sim counters — see Sim stats overflowPool Uint32Array, len 100001 Element id overflow stack — see Sim stats terrainType Uint8Array, len 1001 Lookup table for terrain ids 1-1000 nextDamagedId, freeDamagedIds, freeDamagedIdCount uint32 pools Damaged-ground id allocator — Shared buffer headers nextElementSlab, elementSlabsExhausted Uint32Array[1] each Element slab allocator heads Full elementData column list: Shared buffer headers. Compute chunk index as chunkY chunkWidth + chunkX. Compute chunkX as floor(cellX / chunkSize). Two Uint8Array flags per chunk: chunkShouldUpdate (current frame) and chunkShouldUpdateNext (pending). Step When Effect --- --- --- Sim activity During worker / element update reportToChunkAtCellPos sets chunkShouldUpdateNext[chunkIndex] = 1 (plus neighbor chunks at edges) Frame open Start of main frame:update lX(shared.sim) copies chunkShouldUpdateNext → chunkShouldUpdate, then zeroes chunkShouldUpdateNext Mutation flush Immediately after, same frame ZG(state) drains the deferred mutation queue (module 79030) Mutation queue flush order inside ZG: 1. Per-cell deferred applies (Lu queue). 2. runWhenSimulationIdle callbacks (f6 queue). 3. runAfterMutations callbacks (a6 queue). sandkit.api.grid.mutate registers into that queue (main thread only). Reads inside the mutate callback still see the pre-flush grid. Mutations become visible to sim after the flush runs — after chunk flags for this frame were already promoted from chunkShouldUpdateNext. Worker entry grid writes are immediate and do not use this queue. Extracted bundle constants match live cellIds decoding. Range Kind ----------------------- -------------------------------------------------- 0 Empty 1-1000 Terrain (CellType / registered terrain) 1001-1 000 000 Damaged ground (hp in sim.damagedGround) 1 000 001-2 000 000 Element slot (elementIndex = cellId - 1 000 001) Index one cell as i = cellY width + cellX. Read cellIds[i] only. Do not log the full array. Index sim.damagedGround.type[] and .hp[] with cellId - 1001. Live sample: cellId 1512 maps to type 2 (Dirt) with hp 3. sim.elementData holds structure-of-arrays fields. Full column table (0.5.6 live): Shared buffer headers. Commonly cited fields: type, x, y, velocityX, velocityY, isFreeFalling, dataField1-4, durationLeft, skipPhysics. Live sample: cellId 1001935 maps to index 1934 with element type 18 (Petalium). Buffer Ctor Notes ----------------------- ------------ ----------------------------- shared.wallData.data Uint8Array Wall tile byte per cell shared.shadowMap.data Uint8Array Terrain shadow value per cell shared.mapData.data (typed) Map metadata raster Sample one index or a coarse stride only. Do not dump these arrays. - Cells: types, elements, matter - Wall, heat, shadows, foliage - Background layers - Workers and scheduling",
    "path": "/okf/world/grid-chunks",
    "id": ""
  },
  {
    "title": "World",
    "body": "Grid, elements, terrains, maps, and simulation-facing world APIs. - Grid and elements — domain overview and kit guide index - World probe — read-only live inspection playbook - Grid and chunks — dimensions, cell id encoding, chunk flags - Cells: types, elements, matter — CellType, ElementType, MatterType - Grid, world alias, and pickups — api.grid, deprecated api.world, api.pickups - Elements API — registration, reads, main vs worker mutations - Terrains API — terrain ops, registration, shadows - Grid iteration — rectangle and circle helpers - Maps API — custom maps, artifacts, mapData raster - Sim crafting — reactions, excavation, fire, patterns, random - store.world session metadata — horizon, fixtures, player position - Wall, heat, shadows, foliage — engine-only buffers and APIs - Background layers — rasters, prefabs, Pixi parallax - Workers and scheduling — threads, scheduling mode, chunk flags - Sim stats buffers — idStats, overflowPool, water zones - Open gaps — unconfirmed facts after 0.5.5 pass",
    "path": "/okf/world/index",
    "id": ""
  },
  {
    "title": "`api.maps`",
    "body": "Custom map selection, artifact markers, and session start. Not the in-game simulation grid. Official: sandkit.html — api.maps. Types: @sandustry-modding/types src/sandkit/api/maps.d.ts, src/shared/api/maps.d.ts. map.width / map.height in modinfo.json are integers from 1 to 3840 (loader MAX MAP DIMENSION). Campaign / Void saves still allocate 3840 x 3840 . A custom map can be smaller. Method Role ------------------------ -------------------------------------------- getAvailable() Maps the player can start start(mapId) Start custom map ( mutates session) getActive() Current custom map metadata, or null getArtifactLocations() { cellX, cellY, name }[] for map artifacts Call getArtifactLocations() after game:ready when placing UI markers.",
    "path": "/okf/world/maps",
    "id": ""
  },
  {
    "title": "Runtime merge (0.5.6 extract)",
    "body": "maps.getArtifactLocations(state) builds one array from two sources: 1. prefabData.getArtifactLocations() when present — each row { cellX: x, cellY: y, name } from prefab metadata. 2. store.world.sensors — artifact sensor placements with English names: - Artifact1 sensor type (live store: numeric type: 1 ) → Zorvix-22 - any other artifact sensor type → Q7-Arynth Live dev-tools save (irishbruse.dev-tools-exitsave, CDP :9222): sensors.length === 0, getArtifactLocations() → [] .",
    "path": "/okf/world/maps",
    "id": ""
  },
  {
    "title": "Live campaign sample (CDP `:9222`, 0.5.6)",
    "body": "Save b93kqvog6zn-exitsave (Flintpit, 3840 × 3840 ). store.world.sensors: one row { x: 1535, y: 2229, type: 1 } (numeric sensor type 1 = first artifact sensor). FH.maps.getArtifactLocations(state) returned 10 rows: cellX cellY name --- --- --- 836 1984 Artifact 669 3071 Artifact 1181 3486 Artifact 1057 2498 Artifact 690 2541 Artifact 2014 2014 Artifact 2310 2553 Artifact 2599 2303 Artifact 1252 3053 Artifact 1535 2229 Zorvix-22 Nine prefab rows use the generic label Artifact . The sensor-backed row at (1535, 2229) maps to Zorvix-22 (matches extract rule: first artifact sensor type → Zorvix-22). store.resources.artifacts: { available: 10, found: 10 }. Live 0.5.5 vanilla save: getActive() null, getAvailable() []. AvailableMapV1: { id, name?, … }. maps.start loads blueprint PNGs through the same join as api.assets.getUrl: new URL(relative, rootUrl). Vanilla throws Asset path resolves outside the mod folder unless rootUrl and the result use the file: protocol and the result stays under rootUrl/ (not equal to the folder URL). The host sets rootUrl from pathToFileURL(folder + sep) in workshop-mods.js. map.colorMappings values are built-in CellType names (lookup is case-insensitive) that have a terrain definition. Official HTML examples: GoldSoil, SandiumSoil, Obsidian. Structure Block (cellId 15) is not a terrain id. Unknown names throw references unknown built-in terrain. Reserved RGB keys (terrain blueprint format, workshop-mods.js): 255, 255, 255, 170, 170, 170, 0, 0, 255, 102, 0, 255, 102, 204, 255, 255, 0, 0, 153, 0, 0. Probe: store.scene.active 4 (in-game Scene enum). shared.mapData keys: data, width, height — procgen / map raster separate from shared.sim. mapData.width and mapData.height match shared.sim.width / height on the active save (not always 3840). Save shape mapData size data length (= w × h × 4 RGBA) ---------- -------------- ---------------------------------- Campaign 3840 × 3840 58982400 Dev 1024 1024 × 1024 4194304 Clear per row when wiping void-world batches. Background layer details: Background layers. Custom map IPC and UI: see HUD and overlays and Engine and workers. - Background layers - Open gaps — artifact location samples",
    "path": "/okf/world/maps",
    "id": ""
  },
  {
    "title": "World probe",
    "body": "Read-only inspection of the live world sim. Return JSON-serializable data only. Attach with sandustry MCP, then use evaluate script with waitForStableDom: false. Done when live keys match the reference concept for that branch (or the gap is logged in Open gaps). Object Use ----------------------------- ------------------------------------------------------ debug.state Same as sandkit.state. Main probe bag. debug.config cellSize, chunkSize, gravity, multithreading flag. debug.getSchedulingMode() Sync read of scheduling mode (0-2). Ambient sandkit (and sandkit.api) is available in the renderer when the game is loaded; window.sandkit is often missing. For vanilla buffer reads, debug.state is enough ( debug.state === sandkit.state). Use sandkit.api for live key/signature checks. Do not call mutators in probes. Host IPC and admin surfaces: Engine and workers. F3 overlays: HUD and overlays. - Object.keys on debug.state.store.world, debug.state.shared.sim, debug.state.environment.multithreading. - Read debug.config.cellSize, chunkSize, useMultithreading, obstacleBreakpoint. - Read one shared.sim.cellIds[y width + x] and decode with id ranges in Grid and chunks. - Read scalar fields from shared.sim.elementData. [elementIndex] for one index. - Read one shared.wallData.data[i], shared.shadowMap.data[i], shared.waterPresenceZones[zoneIndex] (see Sim stats for zone math). - Coarse stride scans (for example step 40) for counts, not full grid dumps. - debug.getSchedulingMode(). Do not dump cellIds, wallData.data, or shadowMap.data. Do not invoke without explicit user approval: - engine.api.game. , debug.admin.run, save/load IPC, spawn/kill helpers - setWallDataAt, heat/foliage/shadow engine mutators, matters.register - grid.excavateAtCell, grid.mutate, revealFogAtCell, reportActivityAtCell, redrawAroundCell - Element/terrain createAtCell / replaceAtCell / removeAtCell, damageAtCell, setHitPointsAtCell - pickups.spawnAtWorld, pickups.remove, pickups.pickUp - debug.setSchedulingMode, debug.moveCamera Branch Concept ------------------------------------------ ------------------------------------------------------------------ Grid size, cell id ranges, chunks Grid and chunks CellType vs element vs matter Cells api.grid, api.world alias, pickups Grid, world alias, and pickups api.elements (main vs worker) Elements API api.terrains Terrains API Grid iteration helpers Grid iteration api.maps Maps API Reactions, excavation, fire, patterns Sim crafting store.world, horizon, fixtures store.world session metadata Wall, heat, shadows, foliage (engine) Wall, heat, shadows, foliage Background rasters, prefabs, Pixi parallax Background layers Workers, scheduling, chunk flags Workers and scheduling idStats, overflowPool, water zones Sim stats buffers Not confirmed yet Open gaps",
    "path": "/okf/world/probe",
    "id": ""
  },
  {
    "title": "Reactions, excavation, fire, patterns, random",
    "body": "Registration and pattern helpers for world sim. Official: sandkit.html. registerContact(definition): - inputA, inputB — element string ids - outputA, outputB — element string ids or null - orientation (optional): \"any\" \"stacked\" Live store (0.5.5): registered contacts land in state.sandkit.mods.recipes.contacts (often empty). Contact mix lookup also merges: 1. Engine builtins (not in recipes.contacts): Water+Sand→WetSand, Water+Seed→WetSeed, Water+Lava→Steam, Water+Flame→Steam — table in js/bundle.js as [[r.RJ.Water,r.RJ.Sand,r.RJ.WetSand],…] 2. Element defs with mixes[]: { elementType, result, secondaryResult? } (example: Void Petal + Redsand → Voidbloom) 3. Mod registerContact rows (participant-bound A/B outputs; skipped when a mix already covers the pair) Same recipes bag also holds mod machine rows: condensers, steamDryers, synthesizers, snowmakers, smelters, growers, shakers, kineticPresses. Vanilla shaker / grower / press work is not in those arrays (they start empty). Hardcoded machine paths: see Factory: structures and pipes. registerProfile(id, definition): - definition.pattern, definition.power, definition.options (same flags as grid.excavateAtCell) - definition.terrainRules[]: { cellType, damage, outputElementType } — deprecated alias terrainType → cellType Method Role ------------------------------------ -------------------- canBurnElementAtCell(cellX, cellY) Burn eligibility burnElementAtCell(cellX, cellY) Ignite ( mutates ) Main entry deprecated alias: burnElementAtCellWhenIdle → burnElementAtCell. Engine twin: engine.api.fire.canBurnElementAt / burnElementAt. Residue is burnable with no def.flammable object (only interactions: [{ kind: \"flammable\" }]). burnElementAt replaces it with Flame whose data.output is Burnt Residue at chance 0.25 . Water also lists kind: \"flammable\" with no burn product. Mod elements that set flammable.outputElementId use that object instead. Method Role --------------------------------------------------------------------- ------------------------- createCircle(diameterCells) number[][] mask excavateAtCell(cellX, cellY, pattern, outVelocity, power, options?) Pattern dig ( mutates ) Method Role ----------------- ----------------- int(min, max) Inclusive integer float(min, max) Inclusive float - Elements API - Terrains API - Grid, world alias, and pickups",
    "path": "/okf/world/sim-crafting",
    "id": ""
  },
  {
    "title": "Sim stats buffers",
    "body": "Read-only layout for shared.sim.idStats, shared.sim.overflowPool, and shared.waterPresenceZones. Confirmed on live 0.5.5 (3840 x 3840 grid, elementCapacity 1000000). Uint32Array, length Nl(elementCapacity) + 120 (live: 220 ). Constant Value Source ------------- -------------------- ---------------------------------------------- Nl(cap) ceil(cap / 10 000) Slab count for element pools Worker blocks 24 × 5 stats Debug Stats worker timeline (se.J$, se.vT)",
    "path": "/okf/world/sim-stats",
    "id": ""
  },
  {
    "title": "Sim stats buffers.Slab header (indices `0 … Nl-1`)",
    "body": "One uint32 per 10000 element-capacity slab. Live sample: mostly 14 at idle, also 0, terrain/element ids, and 4294967295 (UINT32 MAX) for unused slots.",
    "path": "/okf/world/sim-stats",
    "id": ""
  },
  {
    "title": "Sim stats buffers.Per-worker block (indices `Nl + workerIndex * 5`)",
    "body": "Five counters written at end of worker tick: Offset Role (bundle) ------ ----------------------------------------- +0 Queue length +1 Alloc counter +2 Alloc rate input (Stats tab derives /s) +3 Recycle counter +4 max(0, tickSpan - idleSpan + 1) Probe one block only: idStats[Nl + workerIndex 5 + off] for workerIndex 0-23. Uint32Array, length 100001 . Index Role ----- --------------------------------------------- 0 Atomic stack pointer (number of pooled ids) 1… Pooled element ids popped when slabs are full Live idle save: index 0 is 0; tail slots are 0. Do not mutate; workers use Atomics.load / compareExchange. Coarse water-activity raster for ambience (flow sound pan/volume), not per-cell water sim. Field Live (3840) Live (1024 dev save) Role -------------------------- -------------------------- -------------------------- ------------------------------------------------------------ waterPresenceZones Uint8Array len 14400 Uint8Array len 1024 0 = dry zone, non-zero (usually 1) = water seen recently waterPresenceZonesWidth 120 32 Zone columns waterPresenceZonesHeight 120 32 Zone rows Zone size in cells: floor(worldWidth / zoneWidth) → 32 cells/edge when zoneWidth = floor(width / 32). Zone index: zoneY waterPresenceZonesWidth + zoneX where zoneX = floor(cellX / 32), zoneY = floor(cellY / 32). Writers set Atomics.store(zones, index, 1) on water activity ( 1% sample rate in bundle). Readers scan a radius around the player for nearest wet zone. Indexed access may appear as numeric keys on the typed array. Prefer zones[index] or Atomics.load, not Object.keys dumps. - Grid and chunks - Workers and scheduling - HUD and overlays — Debug Stats tab UI",
    "path": "/okf/world/sim-stats",
    "id": ""
  },
  {
    "title": "`store.world`",
    "body": "Session-owned world metadata on debug.state.store.world. Not the same object as shared.sim buffers. Complete key list on 0.5.6 dev-tools save ( 1024² ): size, updatedElementIndices, deferredChunkReports, matrixTraverseDirection, horizon, groundHorizon, fixtures, lights, sensors, teleportZones. Key Live shape (1024 dev save) Live shape (3840 campaign) Role -------------------------- ------------------------------- ------------------------------- -------------------------- size { width: 1024, height: 1024 } { width: 3840, height: 3840 } World size in cells horizon, groundHorizon arrays, len width arrays, len 3840 Per-column horizon heights matrixTraverseDirection number (1) number (1) Sim traverse direction updatedElementIndices array (often empty) array Pending element sync list deferredChunkReports array (often empty) array Chunk report queue fixtures array array, len 70 World fixtures lights array array, len 438 World light records sensors array array, len ≥1 World sensors teleportZones array array, len 621 Teleport zone defs Buffer headers for sim rasters live under shared. , not store.world — Shared buffer headers. shared.playerPos is array-like. Index 0 = x px, 1 = y px (not .x / .y). Cell coords: floor(playerPos[0] / config.cellSize), same for y. World pickups use sandkit.api.pickups (runtime list), not store.world keys. Structures, drones, and pipes live in other store. bags. See Engine and workers. - Background layers - Grid and chunks",
    "path": "/okf/world/store-world",
    "id": ""
  },
  {
    "title": "`api.terrains`",
    "body": "Terrain uses numeric cell types (same id space as CellType and damaged-ground transitions). Official: sandkit.html — api.terrains. Types: @sandustry-modding/types src/shared/api/terrains.d.ts, src/sandkit/api/terrains.d.ts. Method Role ----------------------------------------------- ------------------------------------ getTypeById(terrainId) String id → cell type getIdByType(terrainType) Cell type → string id getTypeAtCell, getDataAtCell Type and hit points at cell isAtCell, isTypeAtCell(…, terrainId) Presence checks isCellIdTerrain(cellId) True for terrain id range damageAtCell(…, damage) Apply hit-point damage ( mutates ) createAtCell, replaceAtCell, removeAtCell Terrain ops ( mutate ) setHitPointsAtCell(…, hitPoints) Set hit points ( mutates ) Deprecated aliases: getTypeFromId → getTypeById; setHpAtCell / setHpAtCellWhenIdle → setHitPointsAtCell; main-thread WhenIdle on create/replace/remove. getDataAtCell returns { cellType, hitPoints, hp }. Prefer hitPoints ; hp is a deprecated alias (live 0.5.5 returns both keys). On the main thread, terrain mutations are deferred like element writes. Worker entry applies them immediately. TerrainMutationOptions: { skipShadow?: boolean }. Method Role ----------------------------------------- ----------------- register(definition) → { cellType } updateDefinition(cellTypeOrId, partial) Patch definition TerrainDefinition: id, nameKey, hp, materialId (must be 100 and < 150), metaColor, colorHSL, excavationRequirements, interactions, output. debug.state.sandkit.mods.terrains — 25 keys on live 0.5.6 (dev-tools autosave, CDP :9222). Each def exposes cellType (numeric terrain id), id (string), nameKey, hp, and optional materialId, colorHSL, interactions, output. String id cellType ------------------- ---------- solidite 31 voidFlowerSoil 32 spreadingTerrain 33 sand2 34 earth 35 gameOfLifeRandom 36 golGrow 37 crystal 38 sandstone 39 dune 40 limestone 41 bedrock 42 gameOfLifeStrict 43 copper 44 glassTerrain 45 dissolvingTerrain 46 puffMushroom 47 fogFreezingIce 48 blackrock 49 florinolSoil 50 auraliteCrystal 51 vine 52 caldera 53 shatterstone 54 deepstone 55 Built-in CellType ids 1–30 are unchanged. Mod registrations occupy 31–55 on this build (still within the 1–1000 terrain range). Terrain create/remove can trigger shadow updates unless skipShadow: true. Engine refresh details: Wall, heat, shadows, foliage. - Cells: types, elements, matter - Grid and chunks - Sim crafting — excavation profiles",
    "path": "/okf/world/terrains",
    "id": ""
  },
  {
    "title": "Wall, heat, shadows, foliage",
    "body": "Public mod API has no wall or heat namespaces. These are engine-only on sandkit.engine.api (state-first, arg0 = game state). See Engine and workers. Do not call setWallDataAt or heat/foliage mutators during read-only probes. See World probe playbook. Field Live ----------------- --------------------------------- data Uint8Array, len 14745600 (3840) width, height 3840 paletteData len 1020 Engine methods: getWallDataAt, getWallDataSize, getPaletteData, setWallDataAt. Sample one byte: wallData.data[cellY width + cellX]. Player cell probe: byte 0 . Field Live ----------------- ------------------ data Uint8Array, 3840 width, height 3840 Engine (sandkit.engine.api.shadows, state-first): Method Args after state --- --- refresh cellX, cellY refreshRadius cellX, cellY, radius? (default 8; square neighborhood) refreshRect minCellX, minCellY, maxCellX, maxCellY, padding? (default 8) Terrain ops honor skipShadow in terrains API. debug.config.debug.overrideTerrainShadow / terrainShadowValue — F3 debug flags. Overlay UI: HUD and overlays. heatTransfer: absorbAdjacentElements, addTemperature, computeDiffusedTemperatures, computeEqualizedTemperature, consumeTemperatureNear, ensureTemperature, equalizeConnected. No dedicated heat SAB on shared. (only wallData matches a heat/temp name filter). Fire definition getExtraProps().data.temperature is 1000 (default, not a per-cell grid). Per-cell lifetime uses elementData.durationLeft / durationMax. Do not dump elementData arrays. foliage: generate, getClusters, getContainer, hasProcgenData. Prefab placements and Pixi parallax sprites for void-world clears: Background layers. matters: getMatterTypeFromId, register, runSolidUpdate. One live mod matter registration in state.sandkit.mods.matters. - Background layers - Terrains API - Grid and chunks",
    "path": "/okf/world/wall-heat-foliage",
    "id": ""
  },
  {
    "title": "Workers and scheduling",
    "body": "debug.config.useMultithreading — true (live 0.5.6, CDP :9222). Game version on probe save: 0.5.6 . Part Role --------------------------- -------------------------------- manager Sim manager worker handle utility, utilityChannel Utility worker side channel threads 14 entries resolvers Promise resolvers for worker RPC Each threads[i].meta: Field Live --------------- -------------------- startingIndex 0 ... 13 (thread id) threadCount 14 ports 14 MessagePorts managerPort Manager port Thread meta.startingIndex is the worker id 0..13 , not a Y-band start. Simulation partitions work by chunk column index on X , not by cell Y band. Helpers live in the main bundle (isChunkIndexInThread, isCellXInThread, getThreadIndexFromCellX). chunkSize is 40 ( debug.config.chunkSize). Helper Formula (symbols) --- --- getThreadColumnSize() 2 chunkSize → 80 cells per thread column getNumberOfThreadColumns(state) floor(world.width / getThreadColumnSize()) getThreadIndexFromCellX(cellX, threadCount) floor(cellX / (2 chunkSize)) % threadCount → floor(cellX / 80) % threadCount on live config isChunkIndexInThread(chunkIndex, threadIndex, threadCount) 2 floor(chunkIndex / 2) % (2 threadCount) == 2 threadIndex isCellXInThread(cellX, threadIndex, threadCount) isChunkIndexInThread(floor(cellX/chunkSize), threadIndex, threadCount) isCellXAtThreadSeam(cellX) cellX === floor(cellX/(2 chunkSize)) (2 chunkSize) or cellX === that + (2 chunkSize - 1) On a 1024 -wide dev save with 14 threads: floor(1024/80) = 12 thread columns; index wraps with % 14. Workers also receive per-column MessagePort meshes at boot (threads[i].meta.ports). Worker-thread sandkit.api omits grid.mutate and energy. — see Worker entry API. Internal sandkit.engine.api.energy still runs inside simulation workers for storage ticks and shared.energyChange — see Engine energy. On shared , not debug.config (config has no scheduling keys on live 0.5.5). JSON often prints { \"0\": 1 } because these are length-1 typed arrays , not per-worker maps. Field Live Notes ----------------------------- ------------------------- ---------------------------------------------------------------------------- shared.schedulingMode Uint8Array length 1 Index 0 is 1 on this save shared.hybridScheduling Uint8Array length 1 Index 0 is 1 on this save debug.getSchedulingMode() returns 1 Same value as schedulingMode[0]. Do not call setSchedulingMode in probes Do not call debug.setSchedulingMode without user ask. shared.sim.chunkShouldUpdate and chunkShouldUpdateNext — Uint8Array, len chunkWidth chunkHeight . 3840-grid save: len 9216 (= 96 × 96 chunks). 1024-grid dev save: len 676 (= 26 × 26 chunks). Value 1 = chunk marked for update (live sample at map center chunk). shared.workerPerformance (len 56), workerDetailPerformance, workerCompletion, workQueue, managerPerformance — timing and queues. Do not dump. sandkit.api.workers.setPostUpdateEnabled(enabled) — toggle worker post-update hooks only. Worker-thread sandkit shape: see Engine and workers. - Grid and chunks - Sim stats buffers - Open gaps",
    "path": "/okf/world/workers",
    "id": ""
  },
  {
    "title": "`api.grid`, `api.world`, and `api.pickups`",
    "body": "Official signatures: sandkit.html — api.grid, api.pickups. Types: @sandustry-modding/types src/sandkit/api/grid.d.ts, src/sandkit/api/pickups.d.ts. Main entry grid mutations are deferred. Reads see the old grid until they apply. Worker entry mutations are immediate. For state-dependent writes on main, use api.grid.mutate.",
    "path": "/okf/world/world-api",
    "id": ""
  },
  {
    "title": "`api.grid`, `api.world`, and `api.pickups`.Sync queries (main and worker)",
    "body": "Method Role ------------------------------------------------------------- ----------------------------- getDimensions() { widthCells, heightCells } getCellIdAtCell(cellX, cellY) Packed cell id isCellEmptyAtCell(cellX, cellY) True when id is 0 isTerrainAtCell(cellX, cellY) True when id is terrain range reportActivityAtCell(cellX, cellY) Wake chunk ( mutates ) excavateAtCell(cellX, cellY, outVelocity, damage, options?) Dig terrain ( mutates ) ExcavateOptions: fromGun, fromDrill, fromRocketExplosion, useLiteralOutVelocity, destroyNonDestructible, forceRemoveAll, drillTierDamage.",
    "path": "/okf/world/world-api",
    "id": ""
  },
  {
    "title": "`api.grid`, `api.world`, and `api.pickups`.Main thread only",
    "body": "Method Role ------------------------------------------------------------------------- ---------------------------------------------------------- mutate(callback) Deferred element/terrain writes via writer ( mutates ) revealFogAtCell(cellX, cellY) Clear fog ( mutates ) redrawAroundCell(cellX, cellY, rangeCells) Request render refresh forEachCellInRectangle(cellX, cellY, widthCells, heightCells, callback) Rectangle iteration forEachCellInCircle(centerCellX, centerCellY, radiusCells, callback) Circle iteration Deprecated alias: forEachCellInRect → forEachCellInRectangle. mutate(writer = …) writer exposes writer.elements and writer.terrains with createAtCell, replaceAtCell, and removeAtCell. Bare api.elements. and api.terrains. on main are also deferred. Main-thread mutators have deprecated WhenIdle aliases (same functions). Fog terrain ids: CellType.Fog (4), FogJetpackBlock (5), FogWater (6), FogLava (13). Live on renderer 0.5.5. Official docs mark api.world as a deprecated alias of api.grid for dims, mutate, and cell queries. Live object also exposes: Key Canonical ---------------------------------------------------- ------------------------------------- runWhenSimulationIdle(callback) api.grid.mutate(callback) redrawAroundCellWhenIdle(cellX, cellY, rangeCells) api.grid.redrawAroundCell(…) pickups api.pickups (same object reference) Prefer api.grid and api.pickups in new mod code. Use with elements.setPhysicsAtCell(cellX, cellY, physicsState). Key Value ---------------- ----- normal 0 skip 1 aggressiveSkip 2 Method Role --------------------------------------------------- ------------------------------------------------ spawnAtWorld(type, worldX, worldY, data?, light?) Spawn pickup ( mutates ); type: PickupType remove(pickup) Remove pickup pickUp(pickup) Collect to inventory getAll() List active pickups getById(pickupId) Lookup by id Deprecated alias: destroy(pickup) → remove(pickup). WorldItem: { id, x, y, type, data }. Built-in PickupType: Artifact (1), GlyphKey (2), Stratacore (3), Orb (4). Deprecated enum alias: WorldItemType. When only debug is available, read debug.state.shared.sim.cellIds and decode with id ranges in Grid and chunks. - Grid iteration - Elements API - Entities: drones and projectiles — world pickups overlap",
    "path": "/okf/world/world-api",
    "id": ""
  },
  {
    "title": "Patching with patches.json",
    "body": "patches.json applies exact (or regex) rewrites to Sandustry JavaScript bundles at mod load. Types: configs: BundlePatch. JSON Schema: schemas/patches.json. On 0.5.5+ , prefer the public Sandkit API (api.hooks, configOverrides, register) before you rewrite game bundles. Use a patch only when the public API cannot do the job. Patches break when the game updates. Minified find strings move. Re-test every patch after a game update. The loader applies patches.json at mod load (once per process). Renderer hot reload does not re-apply them. Stop and start the game. Save reload is not enough. Ship a bare array at the mod root: For IDE validation, point $schema at the published URL or bind the schema by file path in your editor. The game loads a bare array without $schema. Wrapped document form (editors only): Unwrap to a bare array before shipping, or map the schema by path in VS Code. file value Bundle ------------ ------ js/bundle.js Main renderer bundle js/simulation-worker.js Simulation workers js/manager-worker.js Manager worker js/utility-worker.js Utility worker Pair main and worker patches with the same atomicGroup id when both must succeed or fail together. Operation Effect --------- ------ replace Replace the matched substring insertBefore Insert code before the match insertAfter Insert code after the match delete Remove the matched substring Set expectedMatches so a failed find fails fast. Patch code runs outside the game bundle IIFE. Put shared runtime helpers on globalThis when patch code must call them. Declare compatibility in modinfo.json: - Patch-only mods: cap gameVersion.maximum at the last tested release. - API mods: set gameVersion.minimum to \"0.5.5\" or higher. The mod template documents patches.ts, definePatches, and debugPatches. When both patches.json and patches.ts exist, patches.ts wins . - The mod lifecycle - configs: patches - Example patches.json",
    "path": "/patches.json",
    "id": ""
  },
  {
    "title": "Patch definitions",
    "body": "On 0.5.5+ , prefer the public Sandkit API (local copy). Use api.hooks , configOverrides , and register APIs before you rewrite game bundles. patches.json breaks when the game updates. Minified find strings move. Re-test every patch after a game update. Set gameVersion in the manifest to declare compatibility (Mod manifest): - Patch-only mods (bundle rewrites tied to old minified text): set maximum: \"0.5.2\" , or use Steam Workshop Link to Game Version with the same cap. - New API mods (hooks, configOverrides, 0.5.5 Sandkit): set minimum: \"0.5.5\" . Patches are exact (or regex) rewrites of Sandustry JavaScript under js/. The loader applies patches.json at mod load (Steam: once per process). Renderer hot reload does not re-apply them. Stop and start the game (F5). Save reload is not enough. Use a patch only when the public API cannot do the job. Keep each find / code string small. Set expectedMatches. Patch code runs outside the game bundle IIFE. Put shared runtime helpers on globalThis when patch code must call them. Types: @sandustry-modding/types/configs (BundlePatch), via modkit/patches.ts. Manifest: Mod manifest. Canonical multi-file example: collector-element/patches.json. For IDE validation of generated patches.json, use schema URL https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json (configured in this repo's .vscode/settings.json). Runtime output stays a bare JSON array. Use patches.json at the mod root (bare array). IDE validation uses .vscode/settings.json and PATCHES JSON SCHEMA. patches.ts (definePatches) still works when you need typed helpers or debugPatches. When both patch files exist, patches.ts wins . Manifest modinfo.ts patch exports also win over patches.json. Export When it is written -------------- ---------------------------------------------------------------------------------------- patches Always (patches.json) debugPatches Dev / --debug only. From patches.ts / modinfo.ts only. Merged after patches. Release (npm run build, npm run dev:release) omits debugPatches. Dev (npm run dev) includes both. The browser bundle stubs @modkit/patches so patch payloads stay out of main.js. scripts/lib/build-patches.js checks each patch before it writes JSON: - id is a non-empty string and unique in the written list - file matches js/ .js (one folder, .js only) - operation is insertBefore, replace, or wrap - expectedMatches is an integer - exactly one of find (non-empty string) or regex ({ pattern, flags? }) - replace / insertBefore need non-empty code - wrap needs before and after strings The game loader also fails the mod if the live match count is not expectedMatches. Do not edit dist/ /patches.json by hand. Change the export and rebuild. Field Role ------------------ --------------------------------------------------------------------------------------------------------- id Unique patch id (required) file Target under js/ (required). Typical: js/bundle.js, js/simulation-worker.js, js/utility-worker.js find Exact substring (required unless regex) regex { pattern, flags? } instead of find expectedMatches Required match count operation replace, insertBefore, or wrap code Body for replace and insertBefore before / after Required for wrap atomicGroup Optional name. Every patch in the group must apply, or none do Match with exact find when the text is stable. Use regex only when a literal match is not stable.",
    "path": "/patches",
    "id": ""
  },
  {
    "title": "Patch definitions.`insertBefore`",
    "body": "Insert code immediately before each match.",
    "path": "/patches",
    "id": ""
  },
  {
    "title": "Patch definitions.`replace`",
    "body": "Replace each match with code. The collector sample replaces a Gold / liquidGold type check with a collector-value check on three files, one atomicGroup: Copy find from the extracted bundle in sandustry/source/. Do not reuse old minified snippets after a game update.",
    "path": "/patches",
    "id": ""
  },
  {
    "title": "Patch definitions.`wrap`",
    "body": "Wrap each match as before + match + after. Use this when you must keep the original text and add a prefix and suffix. Or keep the list in patches.ts and re-export:",
    "path": "/patches",
    "id": ""
  },
  {
    "title": "Sandkit API types",
    "body": "TypeScript declarations and community docs for the live Sandustry sandkit modding API. Package name: @sandustry-modding/types. Originally a fork of flamableassassin/sandustry-modding-types. The docs site ships API reference pages, modding guides, and JSON Schema for modinfo.json / patches.json. Folder layout mirrors runtime shape so you can jump from code to the matching .d.ts path. Path Runtime object ------------------------------- ----------------------------------------------------------------------- src/sandkit/api/ sandkit.api (main thread) src/sandkit/engine/api/ sandkit.engine.api src/sandkit/engine/state.d.ts sandkit.engine.state / sandkit.state src/sandkit/enums/ sandkit.enums src/sandkit/react.d.ts sandkit.react src/sandkit/index.d.ts Composed Sandkit root type src/global.d.ts Ambient sandkit free variable and type aliases src/worker/ Worker-thread sandkit.api (see WorkerSandkitApi) src/shared/ Internal base shapes reused by main and worker declarations src/configs/ modinfo.json / patches.json TypeScript types (not a runtime object) src/electron/ Renderer preload bridge (window.electron; not a runtime sandkit object) At runtime, every API bag is a plain object with function properties — not a TypeScript namespace. MCP checks on a live game session show: - sandkit.api, sandkit.api.ui, sandkit.api.ui.overlays, and sandkit.engine.api.game are all typeof \"object\" with Object.prototype - Nested keys hold functions or further plain objects Declaration files use export namespace because it is the usual .d.ts pattern for nested object APIs. It matches how you call the API (sandkit.api.ui.update) and supports export import when main and worker share base shapes under shared/. interface or type object literals would also work for runtime shape, but they do not support the export import re-export style used across main, worker, and shared modules.",
    "path": "/types/README",
    "id": ""
  },
  {
    "title": "Sandkit API types.Ambient types (preferred)",
    "body": "Pull the host sandkit ambient into your project with a triple-slash reference. Put it at the top of main.js / worker.js, or in a small ambient .d.ts that your tsconfig / jsconfig includes: That works in .ts and .js (including checked JS with checkJs). Do not list @sandustry-modding/types under compilerOptions.types. That list only loads packages from node modules/@types (for example \"react\" or \"node\"). Deep declaration modules are also available, for example: - Main mod (main.js): use the ambient free name sandkit. Type aliases such as SandkitApi are global; do not import a value binding. - Worker mod (worker.js): type sandkit.api as WorkerSandkitApi. Worker and main APIs overlap but are not interchangeable. - Shared folder: not a runtime namespace. It holds domain shapes and API bases that main and worker modules extend. - Configs folder: modinfo.json and patches.json TypeScript types (@sandustry-modding/types/configs). Not part of the live sandkit object. JSON Schema: https://sandustry-modding.github.io/schemas/modinfo.json and https://sandustry-modding.github.io/schemas/patches.json - Electron folder: renderer preload bridge (@sandustry-modding/types/electron). Ambient electron on @sandustry-modding/types. Docs: Electron bridge. Edit .d.ts files under src/. Regenerate the API reference and JSON Schema after JSDoc or config-type changes. npm run generate merges scripts/api-gen/overrides.json, the official Sandkit API HTML, and src/sandkit/api/ declarations. It writes scripts/api-gen/generated/api-catalog.json, refreshes scripts/api-gen/generated/namespace-summaries.json, and reports gaps in scripts/api-gen/generated/api-gaps.md. Edit namespace descriptions and alias mappings in scripts/api-gen/overrides.json. npm run scrape walks the live sandkit object in a running Sandustry renderer (CDP :9222) and writes scripts/api-gen/generated/runtime-api.json. Start the game with the debug port open (F5 or npm run sandustry from the mod template), load a save, then run scrape from this repo. Guides and this docs site live in sandustry-modding.github.io. Clone that repo as ../docs (the mod template does this during npm run setup). Regenerate the API reference and JSON Schema from these declarations: Output lands in api/ and schemas/ on that clone. npm run generate overwrites those API pages in place. It does not delete api/. Browse namespaces from Search on this site. On an API namespace page the sidebar also lists that namespace and its children. The combined page is full.md. npm run docs runs that step, then serves the docs site. npm run docs:links fails when a markdown link does not resolve to a docs page or heading id. npm run validate fails when committed schemas on the docs site do not match src/configs/. npm run docs:archive-sandkit asks for a base file name, then writes official-api/ .md from https://sandustry.com/sandkit.html.",
    "path": "/types/README",
    "id": ""
  },
  {
    "title": "JSON Schema files",
    "body": "Generated from @sandustry-modding/types/configs (ModInfo, BundlePatchesFile, and WorkshopJson in src/configs/). Prefer the official Sandkit docs when a schema and the game disagree. After GitHub Pages publishes docs/, use these raw schema URLs: File Schema URL ---- ---------- modinfo.json https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json patches.json https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json workshop.json https://sandustry-modding.github.io/SandustryTypes/schemas/workshop.json Point $schema at the URL for the file you edit.",
    "path": "/types/schemas",
    "id": ""
  },
  {
    "title": "`modinfo.json`",
    "body": "",
    "path": "/types/schemas",
    "id": ""
  },
  {
    "title": "`patches.json`",
    "body": "The game loads a bare array . For inline $schema, wrap the list (editors only — unwrap to a bare array before shipping, or map the schema by path): A bare [ ... ] array also validates. You can instead bind the schema by path (for example VS Code json.schemas) and keep the game array form in the file.",
    "path": "/types/schemas",
    "id": ""
  },
  {
    "title": "`workshop.json`",
    "body": "Created by the in-game publisher or npm run publish after the first Steam Workshop upload. Do not hand-edit publishedFileId. Import the same shapes from the npm package: See configs for the full type reference. From the package repo root: npm run validate fails when committed schemas do not match the TypeScript defs.",
    "path": "/types/schemas",
    "id": ""
  },
  {
    "title": "UI kit",
    "body": "Live canvases for replica HUD pieces under modkit/ui. Host widgets (Button, Panel, ActionSlot) have no static canvas. See overview for imports, the component index, and shared styles. Isolated preview pages use ?embed=Name. HotkeyBadge UiBox InfoBanner PanelCard MenuButton ResourceRow SectionHeading ObjectiveCard SecondaryObjectiveRow ObjectiveHighlight ShortcutChip ShortcutBar ShortcutBarItem ShortcutBarDivider CompoundHotkeys HotbarSlot HotbarIcon OverlayRoot FixedAnchor Interactive OptionsPanel OptionsSection OptionsRow OptionsSelect OptionsSliderRow OptionsSlider OptionsSwitch OptionsNumberInput OptionsButton",
    "path": "/ui/README",
    "id": ""
  },
  {
    "title": "ActionSlot",
    "body": "Host widget from sandkit.api.ui.components.ActionSlot. Use this for a live hotbar action cell bound to a bank source. This is not HotbarSlot. There is no static canvas. The widget only renders inside Sandustry. Prop Type Default Description ----------- ------------------ ------- ---------------------------------------------------- source HotbarBankSource — Bank source from api.ui.hotbar.createBankSource. slotIndex number — Slot index in the bank. action Action — Action shown in the slot. keyLabel string — Optional key label on the slot. active boolean — When true, draw the slot as selected. onSelect () = void — Called when the player selects the slot. onClear () = void — Called when the player clears the slot. API: sandkit.api.ui.components.ActionSlot.",
    "path": "/ui/action-slot",
    "id": ""
  },
  {
    "title": "Button",
    "body": "Host widget from sandkit.api.ui.components.Button. Use this for the in-game button chrome. This is not OptionsButton or MenuButton. There is no static canvas. The widget only renders inside Sandustry. Prop Type Default Description ----------- ----------------------------- ------- ------------------------------------ children ReactNode — Button label or content. active boolean — When true, draw as selected. border boolean — When false, hide the border. disabled boolean — When true, ignore clicks. small boolean — When true, use the small size. variant \"primary\" \\ \"danger\" — Visual style. className string — Extra class names. style CSSProperties — Inline style. onClick () = void — Click handler. API: sandkit.api.ui.components.Button.",
    "path": "/ui/button",
    "id": ""
  },
  {
    "title": "CompoundHotkeys",
    "body": "Renders multi-key hotkeys in Ctrl + Z style with HotkeyBadge and + separators. Preview: Prop Type Default Description ------ ---------- ------- ------------------------------- keys string[] — Key labels in order (required). This component has no className or style props.",
    "path": "/ui/compound-hotkeys",
    "id": ""
  },
  {
    "title": "FixedAnchor",
    "body": "A fixed-position HUD anchor with pointer-events-none shell. Use Interactive inside for clickable children. Preview: Prop Type Default Description ----------- --------------------------------------------------------------- ------------ ------------------------------------------ children ReactNode — Anchored content (required). className string \"\" Extra CSS classes. style CSSProperties — Inline styles merged with anchor position. anchor \"top-left\" \\ \"top-right\" \\ \"bottom-left\" \\ \"bottom-center\" \"top-left\" Screen corner and transform-origin. zIndex number 9999 CSS z-index.",
    "path": "/ui/fixed-anchor",
    "id": ""
  },
  {
    "title": "HotbarIcon",
    "body": "A pixel-art sprite scaled for display inside HotbarSlot. Preview: Prop Type Default Description ----------- --------------- ------- --------------------------------------------- src string — Image URL (required). width number 16 Source sprite width in pixels. height number 16 Source sprite height in pixels. scale number 2 CSS transform scale. className string \"\" Extra CSS classes on the img element. style CSSProperties — Inline styles merged with pixel-art defaults.",
    "path": "/ui/hotbar-icon",
    "id": ""
  },
  {
    "title": "HotbarSlot",
    "body": "A single hotbar cell with slot number, icon area, and optional outline. Preview: Prop Type Default Description ----------- ------------------ ------- ----------------------------------------------------------- slot string \\ number — Slot index shown in the corner (required). children ReactNode — Icon or content in the slot (required). outlined boolean false When true, adds a black outline around the inner icon area. className string \"\" Extra CSS classes. style CSSProperties — Inline styles merged over hotbarSlotBackground. draggable boolean false HTML draggable attribute on the slot. onClick () = void — When set, slot acts as a button.",
    "path": "/ui/hotbar-slot",
    "id": ""
  },
  {
    "title": "HotkeyBadge",
    "body": "Shows a single keyboard key label with Sandustry HUD badge styling. Preview: Prop Type Default Description ----------- --------------- ------- --------------------------------------------- children string — Key label text (required). className string \"\" Extra CSS classes. style CSSProperties — Inline styles merged over hotkeyBadgeStyle.",
    "path": "/ui/hotkey-badge",
    "id": ""
  },
  {
    "title": "InfoBanner",
    "body": "A compact label and value row with an optional action button. Preview: Prop Type Default Description ------------- ------------ ------- --------------------------------------------- label string — Muted label on the left (required). value ReactNode — Highlighted value in accent color (required). actionLabel string — When set, shows a button with this label. onAction () = void — Click handler for the action button.",
    "path": "/ui/info-banner",
    "id": ""
  },
  {
    "title": "Interactive",
    "body": "Wraps children so they receive pointer events inside a pointer-events-none overlay shell. Preview: Prop Type Default Description ----------- ----------- ------- ---------------------------------------------------- children ReactNode — Interactive content (required). className string \"\" Extra CSS classes appended to pointer-events-auto. This component has no style prop.",
    "path": "/ui/interactive",
    "id": ""
  },
  {
    "title": "Management menu row",
    "body": "Add a vanilla-style row under Upgrades (same look as Toolbox / Building / Research / Upgrades). The row mounts in the management column and follows expand / collapse. Prefer registerManagementMenuButton from src/ /main.ts. Live demo: management-button. Use the React ManagementMenuButton only when the icon must be a React node or active must update every render. Hover plays blip; click plays click when those sounds exist. hotkey is badge text only — it does not bind a key. Param Type Default Description --------- ------------ ------- -------------------------------------------------------------------- id string — Stable row id. Prefer ${modId}:name (required). icon string — SVG markup for the 20×20 slot. Use fill=\"currentColor\" (required). label string — Row label (required). hotkey string — Badge text only (required). onClick () = void — Click handler. active boolean true When false, the row is removed. Returns a dispose function. Call it to remove the row by hand. Rows stack under Upgrades in registration order. Each row root is placed as a direct sibling of the vanilla column rows (same as Toolbox / Building). The first register injects a host overlay; the last dispose removes it. Prop Type Default Description ----------------- ------------ --------------------- ------------------------------------------- id string — Stable row id (unique per row) (required). icon ReactNode — Icon on the left (required). label string — Row label (required). hotkey string — Hotkey badge text (required). highlightLetter string first char of label Letter highlighted on hover. active boolean true When false, the row is removed. onClick () = void — Click handler (also plays vanilla click). Register the component through api.ui.inject (or use registerManagementMenuButton instead).",
    "path": "/ui/management-menu-button",
    "id": ""
  },
  {
    "title": "MenuButton",
    "body": "A menu row with icon, label, highlighted first letter, and hotkey badge. Preview: Prop Type Default Description ----------------- ------------------ --------------------- --------------------------------------------- icon ReactNode — Icon shown on the left (required). label string — Button label text (required). hotkey string — Hotkey label inside HotkeyBadge (required). highlightLetter string first char of label Letter highlighted on hover. width number \\ string 208 Row width. collapsed boolean false Hide label + hotkey (management column fold). className string \"\" Extra CSS classes. style CSSProperties — Inline styles merged with width. onClick () = void — When set, row acts as a button.",
    "path": "/ui/menu-button",
    "id": ""
  },
  {
    "title": "ObjectiveCard",
    "body": "A primary objective card with category label, title, and optional icon. Preview: Prop Type Default Description ------------------- --------------- ------------------- ------------------------------------------ category string — Uppercase category label (required). title string — Objective title (required). icon ReactNode — Optional icon in the top-right corner. categoryClassName string \"text-purple-400\" Tailwind classes for the category label. className string \"\" Extra CSS classes. style CSSProperties — Inline styles merged with card background.",
    "path": "/ui/objective-card",
    "id": ""
  },
  {
    "title": "ObjectiveHighlight",
    "body": "An inline span to highlight resource names inside objective text. Preview: Prop Type Default Description ---------- ----------- ---------------------- ---------------------------- children ReactNode — Highlighted text (required). color string \"rgb(249, 117, 255)\" Text color. This component has no className or style props. It applies bold weight and objectiveTextShadow from shared styles.",
    "path": "/ui/objective-highlight",
    "id": ""
  },
  {
    "title": "OptionsButton",
    "body": "Secondary action button in the options panel (for example Hide UI). Preview: Prop Type Default Description ----------- --------------- ------- -------------------- children ReactNode — Button label. disabled boolean false Disables the button. onClick () = void — Click handler. className string \"\" Extra CSS classes. style CSSProperties — Inline styles.",
    "path": "/ui/options-button",
    "id": ""
  },
  {
    "title": "OptionsNumberInput",
    "body": "Compact number field for options rows. Preview: Prop Type Default Description ------------ ------------------------- ------- --------------------- value number — Current value. min number — Minimum. max number — Maximum. step number \\ \"any\" — Step size. onChange (value: number) = void — Valid number changes. aria-label string — Accessible name. className string \"\" Extra CSS classes. style CSSProperties — Inline styles.",
    "path": "/ui/options-number-input",
    "id": ""
  },
  {
    "title": "OptionsPanel",
    "body": "Column wrapper for options tabs. Uses the same Tailwind classes as the in-game Options dialog (max-w-lg mx-auto px-1). Preview: Prop Type Default Description ----------- --------------- ------- ------------------------------------------------------------------------------------------------------------------- children ReactNode — Section content. surface boolean false In-game panel chrome (ui-box, card-2). center boolean false Center in a full-width options column. overlay boolean false HUD layout (no auto margins). With surface, opaque fill and Debug-window edges (rounded-lg, border-gray-700). className string \"\" Extra CSS classes. style CSSProperties — Inline styles.",
    "path": "/ui/options-panel",
    "id": ""
  },
  {
    "title": "OptionsRow",
    "body": "Label on the left, control on the right. Optional description under the label. Preview: Prop Type Default Description ------------- --------------- ------- ------------------------- label ReactNode — Primary label (required). description ReactNode — Smaller gray helper text. children ReactNode — Control on the right. className string \"\" Extra CSS classes. style CSSProperties — Inline styles.",
    "path": "/ui/options-row",
    "id": ""
  },
  {
    "title": "OptionsSection",
    "body": "Uppercase yellow section heading for options tabs. Optional intro line under the heading. Preview: Prop Type Default Description ------------- --------------- ------- -------------------------------------- title string — Section title (required). first boolean false First section — no top border. description string — Optional gray intro under the heading. children ReactNode — Rows and controls. className string \"\" Extra CSS classes on . style CSSProperties — Inline styles.",
    "path": "/ui/options-section",
    "id": ""
  },
  {
    "title": "OptionsSelect",
    "body": "Listbox dropdown for language and choice settings. Keyboard: Arrow keys, Enter, Escape. Preview: Prop Type Default Description ----------- ------------------------- ------- ------------------------------ value string — Selected option value. options OptionsSelectOption[] — { value, label } list. onChange (value: string) = void — Called when user picks a row. disabled boolean false Disables the trigger button. className string \"\" Extra classes on root wrapper. style CSSProperties — Inline styles.",
    "path": "/ui/options-select",
    "id": ""
  },
  {
    "title": "OptionsSliderRow",
    "body": "Slider row with label and value readout (for example UI scale). Preview: Prop Type Default Description ------------- ------------------------------ ------------------ ----------------------- label ReactNode — Row label. value number — Current value. min number — Range minimum. max number — Range maximum. step number \\ \"any\" — Step size. onChange (value: number) = void — Value change handler. onStart () = void — Mouse down on slider. onRelease () = void — Mouse up on slider. formatValue (value: number) = ReactNode (v) = \\${v}%\\` Readout next to slider. className string \"\" Extra CSS classes. style CSSProperties — Inline styles. Import @modkit/ui/options.css` for slider thumb styling.",
    "path": "/ui/options-slider-row",
    "id": ""
  },
  {
    "title": "OptionsSlider",
    "body": "Range input with Sandustry options-slider chrome. Preview: Prop Type Default Description ------------ ------------------------- ------- --------------------- value number — Current value. min number — Range minimum. max number — Range maximum. step number \\ \"any\" — Step size. onChange (value: number) = void — Value change handler. onStart () = void — Mouse down on slider. onRelease () = void — Mouse up on slider. aria-label string — Accessible name. className string \"\" Extra CSS classes. style CSSProperties — Inline styles. Import @modkit/ui/options.css for thumb and track styling.",
    "path": "/ui/options-slider",
    "id": ""
  },
  {
    "title": "OptionsSwitch",
    "body": "Pill toggle from the game options panel. Preview: Prop Type Default Description ----------- ---------------------------- ------- --------------------------------------- checked boolean — On state. onChange (checked: boolean) = void — Called when user toggles. subtle boolean false Ring style for dense mod config panels. className string \"\" Extra CSS classes. style CSSProperties — Inline styles.",
    "path": "/ui/options-switch",
    "id": ""
  },
  {
    "title": "OverlayRoot",
    "body": "Full-screen fixed overlay root that matches ui fixed layers. Pointer events pass through by default. Preview: Prop Type Default Description ----------- --------------- ------- --------------------------- children ReactNode — Overlay content (required). className string \"\" Extra CSS classes. style CSSProperties — Inline styles.",
    "path": "/ui/overlay-root",
    "id": ""
  },
  {
    "title": "UI kit",
    "body": "Shared React components under modkit/ui/. Import from @modkit/ui. Each page has a live preview (Storybook-style iframe) plus props and a usage snippet. Browse all previews on the gallery. Host widgets wrap sandkit.api.ui.components. They only render inside Sandustry. Component Page ------------------------------ -------------------------------------------------------- Button button.md Panel panel.md ActionSlot action-slot.md HotkeyBadge hotkey-badge.md UiBox ui-box.md InfoBanner info-banner.md PanelCard panel-card.md MenuButton menu-button.md registerManagementMenuButton management-menu-button.md ManagementMenuButton management-menu-button.md ResourceRow resource-row.md SectionHeading section-heading.md ObjectiveCard objective-card.md SecondaryObjectiveRow secondary-objective-row.md ObjectiveHighlight objective-highlight.md ShortcutChip shortcut-chip.md ShortcutBar shortcut-bar.md ShortcutBarItem shortcut-bar-item.md ShortcutBarDivider shortcut-bar-divider.md CompoundHotkeys compound-hotkeys.md HotbarSlot hotbar-slot.md HotbarIcon hotbar-icon.md OverlayRoot overlay-root.md FixedAnchor fixed-anchor.md Interactive interactive.md OptionsPanel options-panel.md OptionsSection options-section.md OptionsRow options-row.md OptionsSelect options-select.md OptionsSlider options-slider.md OptionsSliderRow options-slider-row.md OptionsSwitch options-switch.md OptionsNumberInput options-number-input.md OptionsButton options-button.md @modkit/ui re-exports modkit/ui/shared/styles.ts: Export Role ---------------------- -------------------------------------- ACCENT Sandustry yellow rgb(255, 231, 0) hotkeyBadgeStyle HUD badge background, border, and glow objectiveTextShadow Text shadow on objective rows sectionGradientLeft Left fade for section headings sectionGradientRight Right fade for section headings hotbarSlotBackground Radial fill for hotbar slots menuButtonShineStyle Shine sweep size for menu buttons The game Tailwind stylesheet is purged. Classes the HUD does not use (for example w-[28rem], underline) do nothing until this mod inserts utilities. Import @modkit/ui/tailwind.css and insert the string into a tag. The build compiles only class names from files esbuild packed into main.js. See overlay-hotkey/main.ts. Options rows, switches, fields, and buttons use the same Tailwind classes as the in-game Options dialog. Import the components from @modkit/ui (not @modkit/ui/options — that path is options.css). Import @modkit/ui/options.css only for OptionsSlider / OptionsSliderRow (thumb and track). Insert that string into a tag the same way. Live canvases live under docs/ui/canvas. Preview utilities are in canvas/ preview/utilities.css. Slider chrome lives in modkit/ui/options/options.css (imported into preview chrome.css). HUD classes (ui-box, hotkey-badge, card-2) stay in chrome.css. See builds.md.",
    "path": "/ui/overview",
    "id": ""
  },
  {
    "title": "PanelCard",
    "body": "A dark, rounded panel card with optional click handling. Preview: Prop Type Default Description ----------- ------------------ ------- ------------------------------------------------------------------ children ReactNode — Card content (required). width number \\ string 200 Card width. className string \"\" Extra CSS classes. style CSSProperties — Inline styles merged with width. onClick () = void — When set, card acts as a button (role=\"button\", tabIndex={0}).",
    "path": "/ui/panel-card",
    "id": ""
  },
  {
    "title": "Panel",
    "body": "Host widget from sandkit.api.ui.components.Panel. Use this for the in-game panel chrome with an optional title. This is not PanelCard or OptionsPanel. There is no static canvas. The widget only renders inside Sandustry. Prop Type Default Description ----------- --------------- ------- ------------------------ title LocalizedText — Optional panel title. children ReactNode — Panel body. className string — Extra class names. style CSSProperties — Inline style. API: sandkit.api.ui.components.Panel.",
    "path": "/ui/panel",
    "id": ""
  },
  {
    "title": "ResourceRow",
    "body": "A resource counter row with icon and value on a left gradient background. Preview: Prop Type Default Description ----------- --------------- ------- ------------------------------------------------ icon ReactNode — Icon or sprite on the left (required). value ReactNode — Resource amount or label (required). iconWidth number 24 Width of the icon column in pixels. className string \"\" Extra CSS classes. style CSSProperties — Inline styles merged over sectionGradientLeft.",
    "path": "/ui/resource-row",
    "id": ""
  },
  {
    "title": "SecondaryObjectiveRow",
    "body": "A secondary objective line with optional trailing text and click handling. Preview: Prop Type Default Description ----------- ------------------ ------- --------------------------------------------------- children ReactNode — Objective text (required). trailing ReactNode — Optional right-side content (for example progress). width number \\ string 200 Row inner width. className string \"\" Extra CSS classes. style CSSProperties — Inline styles merged with row background. onClick () = void — When set, row acts as a button.",
    "path": "/ui/secondary-objective-row",
    "id": ""
  },
  {
    "title": "SectionHeading",
    "body": "A section title with optional alignment, size, and gradient background. Preview: Prop Type Default Description ----------- ---------------------- -------- ------------------------------------------- children ReactNode — Heading text (required). align \"left\" \\ \"right\" \"left\" Text alignment and gradient direction. size \"sm\" \\ \"md\" \\ \"lg\" \"md\" Font size preset. className string \"\" Extra CSS classes. style CSSProperties — Inline styles merged over section gradient.",
    "path": "/ui/section-heading",
    "id": ""
  },
  {
    "title": "ShortcutBarDivider",
    "body": "A vertical divider line between items in ShortcutBar. Preview: This component has no props.",
    "path": "/ui/shortcut-bar-divider",
    "id": ""
  },
  {
    "title": "ShortcutBarItem",
    "body": "A horizontal shortcut entry inside ShortcutBar. Preview: Prop Type Default Description ----------- ------------ ------- ---------------------------------------------------------------------------------- hotkeys ReactNode — Hotkey display on the left (required). Use CompoundHotkeys for multi-key combos. label string — Shortcut label (required). active boolean false When true, applies active color and pulse dot. className string \"\" Extra CSS classes. onClick () = void — When set, item acts as a button. This component has no style prop.",
    "path": "/ui/shortcut-bar-item",
    "id": ""
  },
  {
    "title": "ShortcutBar",
    "body": "A horizontal bar that groups shortcut items. Preview: Prop Type Default Description ----------- --------------- ------- ---------------------------------------------------------------------- children ReactNode — ShortcutBarItem, ShortcutBarDivider, or other children (required). className string \"\" Extra CSS classes. style CSSProperties — Inline styles.",
    "path": "/ui/shortcut-bar",
    "id": ""
  },
  {
    "title": "ShortcutChip",
    "body": "A vertical shortcut tile with hotkey, label, and optional active state. Preview: Prop Type Default Description ----------- --------------- ------- --------------------------------------------------------------- hotkey ReactNode — Hotkey display; strings render inside HotkeyBadge (required). label string — Shortcut label below the hotkey (required). active boolean false When true, applies active glow and pulse dot. className string \"\" Extra CSS classes. style CSSProperties — Inline styles. onClick () = void — When set, chip acts as a button.",
    "path": "/ui/shortcut-chip",
    "id": ""
  },
  {
    "title": "UiBox",
    "body": "A simple container with the ui-box class for Sandustry panel chrome. Preview: Prop Type Default Description ----------- --------------- ------- --------------------------------------- children ReactNode — Panel content (required). className string \"\" Extra CSS classes appended to ui-box. style CSSProperties — Inline styles.",
    "path": "/ui/ui-box",
    "id": ""
  }
];
