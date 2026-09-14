# configs

Sandkit mod file schemas: `modinfo.json`, `patches.json`, and `workshop.json`.

These are not runtime `sandkit` properties. Import from
`@sandustry-modding/types/configs` when typing mod folder config files.

JSON Schema (GitHub Pages):
https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json
https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json
https://sandustry-modding.github.io/SandustryTypes/schemas/workshop.json

## See

[JSON Schema docs](https://sandustry-modding.github.io/SandustryTypes/#/schemas)

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### configs.ConfigSchemaNumber :id=configschemanumber

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L134" target="_blank" rel="noopener">modinfo.d.ts:134</a></p>

| Property | Type | Description |
| --- | --- | --- |
| type | <code>&quot;number&quot;</code> | Discriminator. Must be `"number"`. |
| default | <code>number</code> | Value used when the player has not changed the setting. |
| min? | <code>number</code> | Inclusive lower bound for the setting. |
| max? | <code>number</code> | Inclusive upper bound for the setting. |
| step? | <code>number</code> | UI step size for the number control. |
| label? | <code>string</code> | Plain-text label shown in the settings UI. |
| labelKey? | <code>string</code> | i18n key for the settings label (preferred over [label](?id=label) when both exist). |
| description? | <code>string</code> | Plain-text help text for the setting. |
| descriptionKey? | <code>string</code> | i18n key for the setting help text. |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### default <!-- {docsify-ignore} -->

##### min? <!-- {docsify-ignore} -->

##### max? <!-- {docsify-ignore} -->

##### step? <!-- {docsify-ignore} -->

##### label? <!-- {docsify-ignore} -->

##### labelKey? <!-- {docsify-ignore} -->

##### description? <!-- {docsify-ignore} -->

##### descriptionKey? <!-- {docsify-ignore} -->

</div>

Number setting in `modinfo.json` `configSchema`.

</div>

<div class="smt-member-card">

### configs.ConfigSchemaBoolean :id=configschemaboolean

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L174" target="_blank" rel="noopener">modinfo.d.ts:174</a></p>

| Property | Type | Description |
| --- | --- | --- |
| type | <code>&quot;boolean&quot;</code> | Discriminator. Must be `"boolean"`. |
| default | <code>boolean</code> | Value used when the player has not changed the setting. |
| label? | <code>string</code> | Plain-text label shown in the settings UI. |
| labelKey? | <code>string</code> | i18n key for the settings label. |
| description? | <code>string</code> | Plain-text help text for the setting. |
| descriptionKey? | <code>string</code> | i18n key for the setting help text. |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### default <!-- {docsify-ignore} -->

##### label? <!-- {docsify-ignore} -->

##### labelKey? <!-- {docsify-ignore} -->

##### description? <!-- {docsify-ignore} -->

##### descriptionKey? <!-- {docsify-ignore} -->

</div>

Boolean setting in `modinfo.json` `configSchema`.

</div>

<div class="smt-member-card">

### configs.ConfigSchemaChoiceOption :id=configschemachoiceoption

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L202" target="_blank" rel="noopener">modinfo.d.ts:202</a></p>

| Property | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Stored value written when the player picks this option. |
| label? | <code>string</code> | Plain-text label for the option. |
| labelKey? | <code>string</code> | i18n key for the option label. |

<div class="smt-member-anchors">

##### value <!-- {docsify-ignore} -->

##### label? <!-- {docsify-ignore} -->

##### labelKey? <!-- {docsify-ignore} -->

</div>

One option inside a [ConfigSchemaChoice](?id=configschemachoice).

</div>

<div class="smt-member-card">

### configs.ConfigSchemaChoice :id=configschemachoice

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L218" target="_blank" rel="noopener">modinfo.d.ts:218</a></p>

| Property | Type | Description |
| --- | --- | --- |
| type | <code>&quot;choice&quot;</code> | Discriminator. Must be `"choice"`. |
| default | <code>string</code> | Default option [ConfigSchemaChoiceOption.value](?id=value). |
| label? | <code>string</code> | Plain-text label shown in the settings UI. |
| labelKey? | <code>string</code> | i18n key for the settings label. |
| description? | <code>string</code> | Plain-text help text for the setting. |
| descriptionKey? | <code>string</code> | i18n key for the setting help text. |
| options | <code>readonly ConfigSchemaChoiceOption[]</code> | Allowed choices for this setting. |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### default <!-- {docsify-ignore} -->

##### label? <!-- {docsify-ignore} -->

##### labelKey? <!-- {docsify-ignore} -->

##### description? <!-- {docsify-ignore} -->

##### descriptionKey? <!-- {docsify-ignore} -->

##### options <!-- {docsify-ignore} -->

</div>

Choice setting in `modinfo.json` `configSchema`.

</div>

<div class="smt-member-card">

### configs.TextureOverride :id=textureoverride

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L261" target="_blank" rel="noopener">modinfo.d.ts:261</a></p>

| Property | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path to the replacement image, relative to the mod root. |
| frameWidth? | <code>number</code> | Width in pixels of one animation frame. |
| frames? | <code>number</code> | Number of frames in the spritesheet. |
| intervalMs? | <code>number</code> | Milliseconds between animation frames. |

<div class="smt-member-anchors">

##### path <!-- {docsify-ignore} -->

##### frameWidth? <!-- {docsify-ignore} -->

##### frames? <!-- {docsify-ignore} -->

##### intervalMs? <!-- {docsify-ignore} -->

</div>

Animated (or static) texture replacement for a vanilla asset id.

</div>

<div class="smt-member-card">

### configs.ModProvide :id=modprovide

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L284" target="_blank" rel="noopener">modinfo.d.ts:284</a></p>

| Property | Type | Description |
| --- | --- | --- |
| kind | <code>string</code> | Kind of provided content (for example `"structureTextures"`). |
| id | <code>string</code> | Id of this provide entry within its kind. |
| textureOverrides? | <code>Record&lt;string, string&gt;</code> | Texture paths keyed by the vanilla or structure texture id they replace. |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

##### id <!-- {docsify-ignore} -->

##### textureOverrides? <!-- {docsify-ignore} -->

</div>

Optional content pack exposed by this mod for other mods or the game to consume.

</div>

<div class="smt-member-card">

### configs.ModMapBlueprints :id=modmapblueprints

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L305" target="_blank" rel="noopener">modinfo.d.ts:305</a></p>

| Property | Type | Description |
| --- | --- | --- |
| terrain? | <code>string</code> | Terrain color map image. |
| lights? | <code>string</code> | Lights layout image. |
| sensors? | <code>string</code> | Sensors layout image. |
| authorization? | <code>string</code> | Authorization zones image. |
| wall? | <code>string</code> | Wall layout image. |
| lightsMeta? | <code>string</code> | Lights metadata image. |
| decor? | <code>string</code> | Decor layout image. |
| config? | <code>string</code> | Map config JSON path. |

<div class="smt-member-anchors">

##### terrain? <!-- {docsify-ignore} -->

##### lights? <!-- {docsify-ignore} -->

##### sensors? <!-- {docsify-ignore} -->

##### authorization? <!-- {docsify-ignore} -->

##### wall? <!-- {docsify-ignore} -->

##### lightsMeta? <!-- {docsify-ignore} -->

##### decor? <!-- {docsify-ignore} -->

##### config? <!-- {docsify-ignore} -->

</div>

Blueprint image paths for a custom map pack.

Paths are relative to the mod root.

</div>

<div class="smt-member-card">

### configs.ModMapPoint :id=modmappoint

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L344" target="_blank" rel="noopener">modinfo.d.ts:344</a></p>

| Property | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | World X in pixels. |
| y | <code>number</code> | World Y in pixels. |

<div class="smt-member-anchors">

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

</div>

World-pixel spawn or unstuck point.

</div>

<div class="smt-member-card">

### configs.ModMapTopBounds :id=modmaptopbounds

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L359" target="_blank" rel="noopener">modinfo.d.ts:359</a></p>

| Property | Type | Description |
| --- | --- | --- |
| hard? | <code>number</code> | Hard top bound in world pixels. |
| soft? | <code>number</code> | Soft top bound in world pixels. |

<div class="smt-member-anchors">

##### hard? <!-- {docsify-ignore} -->

##### soft? <!-- {docsify-ignore} -->

</div>

Vertical camera / travel bounds for the custom map.

</div>

<div class="smt-member-card">

### configs.ModMapDepthLight :id=modmapdepthlight

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L374" target="_blank" rel="noopener">modinfo.d.ts:374</a></p>

| Property | Type | Description |
| --- | --- | --- |
| startY? | <code>number</code> | World Y where depth light scaling starts. |
| endY? | <code>number</code> | World Y where depth light scaling ends. |
| maxSize? | <code>number</code> | Maximum light size at the shallow end of the range. |
| minSize? | <code>number</code> | Minimum light size at the deep end of the range. |

<div class="smt-member-anchors">

##### startY? <!-- {docsify-ignore} -->

##### endY? <!-- {docsify-ignore} -->

##### maxSize? <!-- {docsify-ignore} -->

##### minSize? <!-- {docsify-ignore} -->

</div>

Depth-based light sizing for the custom map.

</div>

<div class="smt-member-card">

### configs.ModMapParallax :id=modmapparallax

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L397" target="_blank" rel="noopener">modinfo.d.ts:397</a></p>

| Property | Type | Description |
| --- | --- | --- |
| widthScale? | <code>number</code> | Horizontal scale of the parallax layer. |
| offsetY? | <code>number</code> | Vertical offset of the parallax layer in pixels. |

<div class="smt-member-anchors">

##### widthScale? <!-- {docsify-ignore} -->

##### offsetY? <!-- {docsify-ignore} -->

</div>

Parallax background tuning for the custom map.

</div>

<div class="smt-member-card">

### configs.ModMapColorMappingLayers :id=modmapcolormappinglayers

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L412" target="_blank" rel="noopener">modinfo.d.ts:412</a></p>

| Property | Type | Description |
| --- | --- | --- |
| background? | <code>string</code> | Background terrain id for this blueprint RGB. |
| foreground? | <code>string</code> | Foreground terrain id for this blueprint RGB. |

<div class="smt-member-anchors">

##### background? <!-- {docsify-ignore} -->

##### foreground? <!-- {docsify-ignore} -->

</div>

Color-map cell that paints both background and foreground terrain.

</div>

<div class="smt-member-card">

### configs.ModMapDefinition :id=modmapdefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L433" target="_blank" rel="noopener">modinfo.d.ts:433</a></p>

| Property | Type | Description |
| --- | --- | --- |
| blueprints | <code>ModMapBlueprints</code> | Paths to blueprint images and map config under the mod root. |
| width | <code>number</code> | Map width in cells. |
| height | <code>number</code> | Map height in cells. |
| spawn? | <code>ModMapPoint</code> | Player spawn position in world pixels. |
| unstuck? | <code>ModMapPoint</code> | Unstuck / rescue position in world pixels. |
| deployment? | <code>string</code> | Deployment mode for the map (for example `"skip"`). |
| topBounds? | <code>ModMapTopBounds</code> | Vertical travel bounds at the top of the world. |
| depthLight? | <code>ModMapDepthLight</code> | Depth-based light size curve. |
| parallax? | <code>ModMapParallax</code> | Parallax background tuning. |
| colorMappings? | <code>Record&lt;string, ModMapColorMapping&gt;</code> | Maps blueprint RGB keys (`"r, g, b"`) to terrain ids or layered terrain. |

<div class="smt-member-anchors">

##### blueprints <!-- {docsify-ignore} -->

##### width <!-- {docsify-ignore} -->

##### height <!-- {docsify-ignore} -->

##### spawn? <!-- {docsify-ignore} -->

##### unstuck? <!-- {docsify-ignore} -->

##### deployment? <!-- {docsify-ignore} -->

##### topBounds? <!-- {docsify-ignore} -->

##### depthLight? <!-- {docsify-ignore} -->

##### parallax? <!-- {docsify-ignore} -->

##### colorMappings? <!-- {docsify-ignore} -->

</div>

Custom map pack block in `modinfo.json`.

</div>

<div class="smt-member-card">

### configs.ModGameVersion :id=modgameversion

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L480" target="_blank" rel="noopener">modinfo.d.ts:480</a></p>

| Property | Type | Description |
| --- | --- | --- |
| minimum? | <code>string</code> | Lowest supported game version string. |
| maximum? | <code>string</code> | Highest supported game version string. |

<div class="smt-member-anchors">

##### minimum? <!-- {docsify-ignore} -->

##### maximum? <!-- {docsify-ignore} -->

</div>

Compatible game version range for the mod.

</div>

<div class="smt-member-card">

### configs.ModInfo :id=modinfo

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L503" target="_blank" rel="noopener">modinfo.d.ts:503</a></p>

| Property | Type | Description |
| --- | --- | --- |
| $schema? | <code>string</code> | Optional JSON Schema URL for editors (for example VS Code). Not read by the game loader. |
| manifestVersion | <code>1</code> | Manifest format version. Must be `1` for Sandkit `apiVersion` 1. |
| id | <code>string</code> | Unique mod id. Prefer `author.mod-name` (matches folder / Workshop identity). |
| name | <code>string</code> | Display name shown in the mod list and Workshop UI. |
| version | <code>string</code> | Semver-style mod version string. |
| apiVersion | <code>1</code> | Sandkit host API version this mod targets. Must be `1`. |
| entry? | <code>string</code> | Main-thread script path relative to the mod root (for example `"main.js"`). Omit for texture-only, map-only, or config-only mods that declare another capability instead. |
| workerEntry? | <code>string</code> | Simulation-worker script path relative to the mod root. Required when the mod registers worker hooks or uses worker-only APIs. |
| patches? | <code>string</code> | Path to the patches file relative to the mod root (usually `"patches.json"`). When omitted, a present `patches.json` may still auto-load per official docs. |
| description? | <code>string</code> | Long description shown in the mod list / Workshop. |
| author? | <code>string</code> | Author display name. |
| gameVersion? | <code>ModGameVersion</code> | Inclusive game version range this mod claims to support. |
| dependencies? | <code>string[]</code> | Other mod ids that should load with this mod. |
| loadOrder? | <code>number</code> | Relative load priority. Lower values load earlier; higher values load later. |
| configSchema? | <code>Record&lt;string, ConfigSchemaEntry&gt;</code> | Player-facing settings schema. Keys are setting ids; values define type and UI. Read at runtime with `api.settings.get`. |
| configOverrides? | <code>Record&lt;string, string&gt;</code> | Paths to JSON config overrides keyed by vanilla config id (for example `"drill"`). |
| shaderOverrides? | <code>Record&lt;string, string&gt;</code> | Paths to GLSL shader replacements keyed by shader id (for example `"sky"`). |
| textureOverrides? | <code>Record&lt;string, string &#124; TextureOverride&gt;</code> | Texture replacements keyed by vanilla texture id. A string value is a path; an object adds spritesheet frame metadata. |
| provides? | <code>ModProvide[]</code> | Optional content this mod publishes for others to consume. |
| map? | <code>ModMapDefinition</code> | Embedded custom map pack definition for this mod. |

<div class="smt-member-anchors">

##### $schema? <!-- {docsify-ignore} -->

##### manifestVersion <!-- {docsify-ignore} -->

##### id <!-- {docsify-ignore} -->

##### name <!-- {docsify-ignore} -->

##### version <!-- {docsify-ignore} -->

##### apiVersion <!-- {docsify-ignore} -->

##### entry? <!-- {docsify-ignore} -->

##### workerEntry? <!-- {docsify-ignore} -->

##### patches? <!-- {docsify-ignore} -->

##### description? <!-- {docsify-ignore} -->

##### author? <!-- {docsify-ignore} -->

##### gameVersion? <!-- {docsify-ignore} -->

##### dependencies? <!-- {docsify-ignore} -->

##### loadOrder? <!-- {docsify-ignore} -->

##### configSchema? <!-- {docsify-ignore} -->

##### configOverrides? <!-- {docsify-ignore} -->

##### shaderOverrides? <!-- {docsify-ignore} -->

##### textureOverrides? <!-- {docsify-ignore} -->

##### provides? <!-- {docsify-ignore} -->

##### map? <!-- {docsify-ignore} -->

</div>

Sandkit mod manifest (`modinfo.json`).

Required for every mod folder. Minimal script mods need
[manifestVersion](?id=manifestversion), [id](?id=id-1), [name](?id=name), [version](?id=version),
[apiVersion](?id=apiversion), and [entry](?id=entry).

At least one capability is required: [entry](?id=entry), [workerEntry](?id=workerentry),
[configOverrides](?id=configoverrides), [textureOverrides](?id=textureoverrides-1), [provides](?id=provides), or
[map](?id=map). `configSchema` alone does not count.

</div>

<div class="smt-member-card">

### configs.BundlePatchRegex :id=bundlepatchregex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L48" target="_blank" rel="noopener">patches.d.ts:48</a></p>

| Property | Type | Description |
| --- | --- | --- |
| pattern | <code>string</code> | JavaScript regex pattern source (without surrounding `/` delimiters). Capture groups may be referenced from [BundlePatch.code](?id=code) as `$1`, `$2`, … |
| flags? | <code>string</code> | Optional regex flags (for example `"g"` or `"m"`). |

<div class="smt-member-anchors">

##### pattern <!-- {docsify-ignore} -->

##### flags? <!-- {docsify-ignore} -->

</div>

Regex finder when the target is not a plain [BundlePatch.find](?id=find) string.

</div>

<div class="smt-member-card">

### configs.BundlePatch :id=bundlepatch

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L100" target="_blank" rel="noopener">patches.d.ts:100</a></p>

| Property | Type | Description |
| --- | --- | --- |
| file | <code>PatchTargetFile</code> | Compiled bundle to modify. |
| find? | <code>string</code> | Exact source substring to locate in the bundle. Mutually exclusive with [regex](?id=regex) in typical patches. |
| code? | <code>string</code> | Replacement or inserted source text. Official examples use `code`; some loaders also accept [replace](?id=replace). |
| replace? | <code>string</code> | Alias of [code](?id=code) used by some patch loaders and workshop mods. |
| operation? | <code>PatchOperation</code> | How to apply the match. Defaults to replace-style behaviour when omitted in common workshop patches. |
| expectedMatches? | <code>number &#124; &quot;any&quot;</code> | How many times `find` / `regex` must match. Use a number (often `1`) so the load fails on miss or over-match. Some loaders accept `"any"`. |
| regex? | <code>BundlePatchRegex</code> | Regex-based locator instead of a literal [find](?id=find) string. |
| before? | <code>string</code> | Text inserted before the match when [operation](?id=operation) is `"wrap"`. |
| after? | <code>string</code> | Text inserted after the match when [operation](?id=operation) is `"wrap"`. |
| id? | <code>string</code> | Optional stable id for logging and tooling. |
| atomicGroup? | <code>string</code> | Group id shared by patches that must all succeed or all fail together. Use the same string on paired main (`js/bundle.js`) and worker (`js/simulation-worker.js`) patches. |
| occurrence? | <code>number &#124; &quot;all&quot;</code> | Which match to rewrite when `find` / `regex` hits more than once. `"all"` (default when omitted in the loader) or a 1-based index. Must not exceed [expectedMatches](?id=expectedmatches) when both are numbers. |
| description? | <code>string</code> | Human-readable note for maintainers. Not required by the official schema. |

<div class="smt-member-anchors">

##### file <!-- {docsify-ignore} -->

##### find? <!-- {docsify-ignore} -->

##### code? <!-- {docsify-ignore} -->

##### replace? <!-- {docsify-ignore} -->

##### operation? <!-- {docsify-ignore} -->

##### expectedMatches? <!-- {docsify-ignore} -->

##### regex? <!-- {docsify-ignore} -->

##### before? <!-- {docsify-ignore} -->

##### after? <!-- {docsify-ignore} -->

##### id? <!-- {docsify-ignore} -->

##### atomicGroup? <!-- {docsify-ignore} -->

##### occurrence? <!-- {docsify-ignore} -->

##### description? <!-- {docsify-ignore} -->

</div>

One entry in `patches.json`.

The file is an array of these objects. Prefer `expectedMatches` so a missed
or duplicated match fails loudly. When several patches must succeed together
(for example main + worker), set the same [atomicGroup](?id=atomicgroup) on each.

#### Example

**patches.json example**

```ts
[
  {
    "file": "js/bundle.js",
    "find": "const message = 'Hello';",
    "operation": "replace",
    "code": "const message = 'Hello from my mod';",
    "expectedMatches": 1
  },
  {
    "file": "js/simulation-worker.js",
    "regex": {
      "pattern": "const ([a-z]+) = false;"
    },
    "operation": "replace",
    "code": "const $1 = true;",
    "expectedMatches": 1
  },
  {
    "file": "js/bundle.js",
    "find": "doThing();",
    "operation": "wrap",
    "before": "if (enabled) { ",
    "after": " }",
    "expectedMatches": 1
  }
]
```

</div>

<div class="smt-member-card">

### configs.BundlePatchesDocument :id=bundlepatchesdocument

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L181" target="_blank" rel="noopener">patches.d.ts:181</a></p>

| Property | Type | Description |
| --- | --- | --- |
| $schema? | <code>string</code> | Optional JSON Schema URL for editors (for example VS Code). Not read by the game loader. |
| patches | <code>BundlePatch[]</code> | Ordered patch list (same as the bare-array game format). |

<div class="smt-member-anchors">

##### $schema? <!-- {docsify-ignore} -->

##### patches <!-- {docsify-ignore} -->

</div>

Editor-friendly `patches.json` wrapper with an optional `$schema` URL.

The game loader expects a bare [BundlePatch](?id=bundlepatch) array. Prefer that array in
shipped mods. Use this object shape only when your editor needs inline `$schema`.

</div>

<div class="smt-member-card">

### configs.WorkshopJson :id=workshopjson

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/workshop.d.ts#L21" target="_blank" rel="noopener">workshop.d.ts:21</a></p>

| Property | Type | Description |
| --- | --- | --- |
| schemaVersion | <code>1</code> | File format version. Must be `1`. |
| publishedFileId | <code>string</code> | Steam Workshop published file id. Managed by the publisher. |

<div class="smt-member-anchors">

##### schemaVersion <!-- {docsify-ignore} -->

##### publishedFileId <!-- {docsify-ignore} -->

</div>

Links a local mod folder to its Steam Workshop item.

#### Example

**workshop.json**

```json
{
  "schemaVersion": 1,
  "publishedFileId": "1234567890"
}
```

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### configs.ConfigSchemaEntry :id=configschemaentry

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L255" target="_blank" rel="noopener">modinfo.d.ts:255</a></p>

<div class="smt-member-sig" data-sig="configs.ConfigSchemaEntry = ConfigSchemaNumber | ConfigSchemaBoolean | ConfigSchemaChoice">

```ts
ConfigSchemaEntry = ConfigSchemaNumber | ConfigSchemaBoolean | ConfigSchemaChoice
```

</div>

One entry under `modinfo.json` `configSchema`.

Keys of `configSchema` are setting ids read via `api.settings.get`.

</div>

<div class="smt-member-card">

### configs.ModMapColorMapping :id=modmapcolormapping

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L427" target="_blank" rel="noopener">modinfo.d.ts:427</a></p>

<div class="smt-member-sig" data-sig="configs.ModMapColorMapping = string | ModMapColorMappingLayers">

```ts
ModMapColorMapping = string | ModMapColorMappingLayers
```

</div>

One `map.colorMappings` value: a single terrain id, or layered background/foreground ids.

</div>

<div class="smt-member-card">

### configs.PatchTargetFile :id=patchtargetfile

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L23" target="_blank" rel="noopener">patches.d.ts:23</a></p>

<div class="smt-member-sig" data-sig="configs.PatchTargetFile = &quot;js/bundle.js&quot; | &quot;js/simulation-worker.js&quot; | &quot;js/manager-worker.js&quot; | &quot;js/utility-worker.js&quot; | string &amp; object">

```ts
PatchTargetFile = "js/bundle.js" | "js/simulation-worker.js" | "js/manager-worker.js" | "js/utility-worker.js" | string & object
```

</div>

Known compiled bundle paths the loader can patch.

| Value | Role |
| --- | --- |
| `js/bundle.js` | Main renderer |
| `js/manager-worker.js` | Manager worker |
| `js/simulation-worker.js` | Simulation workers |
| `js/utility-worker.js` | Utility worker |

</div>

<div class="smt-member-card">

### configs.PatchOperation :id=patchoperation

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L42" target="_blank" rel="noopener">patches.d.ts:42</a></p>

<div class="smt-member-sig" data-sig="configs.PatchOperation = &quot;replace&quot; | &quot;remove&quot; | &quot;insertBefore&quot; | &quot;insertAfter&quot; | &quot;wrap&quot;">

```ts
PatchOperation = "replace" | "remove" | "insertBefore" | "insertAfter" | "wrap"
```

</div>

Supported patch operations.

| Value | Behaviour |
| --- | --- |
| `replace` | Replace the matched text with [BundlePatch.code](?id=code) / [BundlePatch.replace](?id=replace) |
| `remove` | Delete the matched text |
| `insertBefore` | Insert [BundlePatch.code](?id=code) before the match |
| `insertAfter` | Insert [BundlePatch.code](?id=code) after the match |
| `wrap` | Surround the match with [BundlePatch.before](?id=before) and [BundlePatch.after](?id=after) |

</div>

<div class="smt-member-card">

### configs.BundlePatchesFile :id=bundlepatchesfile

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L198" target="_blank" rel="noopener">patches.d.ts:198</a></p>

<div class="smt-member-sig" data-sig="configs.BundlePatchesFile = BundlePatch[] | BundlePatchesDocument">

```ts
BundlePatchesFile = BundlePatch[] | BundlePatchesDocument
```

</div>

Root shape of `patches.json`: a bare [BundlePatch](?id=bundlepatch) array (game format),
or a [BundlePatchesDocument](?id=bundlepatchesdocument) object when the file includes `$schema`.

</div>
