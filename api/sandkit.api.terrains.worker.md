# sandkit.api.terrains (worker)

**`Internal`**

Shared `sandkit.api.terrains` base — terrain type lookup and cell mutation.

Worker-entry mutations are immediate. Main thread defers matching helpers in
`sandkit.api.terrains`.

 Base namespace reused by main and worker declarations.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.TerrainDefinition :id=terraindefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L19" target="_blank" rel="noopener">terrains.d.ts:19</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique mod-scoped terrain id. |
| nameKey? | <code>string</code> | i18n key for the terrain display name. |
| hp? | <code>number</code> | Default terrain hit points. |
| materialId? | <code>number</code> | Material id used for rendering. Must be > obstacle breakpoint and < 150. |
| metaColor? | <code>number</code> | UI/meta color as 0xRRGGBB. |
| colorHSL? | <code>[number, number, number]</code> | Base terrain color as HSL components. |
| excavationRequirements? | <code>readonly string[]</code> | Tool item ids required to excavate this terrain. |
| interactions? | <code>readonly object[]</code> | Tooltip interactions shown for this terrain. |
| output? | <code>{ elementType: ElementType; chance: number }</code> | Default element drop when the terrain is destroyed. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### nameKey? <!-- {docsify-ignore} -->

##### hp? <!-- {docsify-ignore} -->

##### materialId? <!-- {docsify-ignore} -->

##### metaColor? <!-- {docsify-ignore} -->

##### colorHSL? <!-- {docsify-ignore} -->

##### excavationRequirements? <!-- {docsify-ignore} -->

##### interactions? <!-- {docsify-ignore} -->

##### output? <!-- {docsify-ignore} -->

</div>

Terrain definition shape for register and [getDefinitionByType](?id=getdefinitionbytype).

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainDataAtCell :id=terraindataatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L48" target="_blank" rel="noopener">terrains.d.ts:48</a></p>

| Property | Type | Description |
| --- | --- | --- |
| cellType | <code>TerrainType</code> | Numeric terrain cell type. |
| hitPoints | <code>number &#124; null</code> | Current hit points, or null when the terrain has no hp. |
| ~~hp?~~ | <code>number &#124; null</code> | Deprecated alias. |

<div class="smt-member-anchors">

##### cellType <!-- {docsify-ignore} -->

##### hitPoints <!-- {docsify-ignore} -->

##### ~~hp?~~ <!-- {docsify-ignore} -->

</div>

Terrain cell data returned by [getDataAtCell](?id=getdataatcell).

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainMutationOptions :id=terrainmutationoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L217" target="_blank" rel="noopener">terrains.d.ts:217</a></p>

| Property | Type | Description |
| --- | --- | --- |
| skipShadow? | <code>boolean</code> | Skip shadow updates around the changed cell. |

<div class="smt-member-anchors">

##### skipShadow? <!-- {docsify-ignore} -->

</div>

Options for terrain create, replace, or remove calls.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.TerrainType :id=terraintype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L226" target="_blank" rel="noopener">terrains.d.ts:226</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainType = CellType | TaggedNumber&lt;&quot;terrainType&quot;&gt;">

```ts
TerrainType = CellType | TaggedNumber<"terrainType">
```

</div>

Numeric terrain / [CellTypeEnum](api/sandkit.enums.CellType.md) handle.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainId :id=terrainid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L232" target="_blank" rel="noopener">terrains.d.ts:232</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainId = LooseString&lt;never&gt;">

```ts
TerrainId = LooseString<never>
```

</div>

Mod or built-in terrain string id.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainRef :id=terrainref

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L238" target="_blank" rel="noopener">terrains.d.ts:238</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainRef = TerrainType | TerrainId">

```ts
TerrainRef = TerrainType | TerrainId
```

</div>

Type handle or string id accepted by mutation helpers.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.getIdByType :id=getidbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L69" target="_blank" rel="noopener">terrains.d.ts:69</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getIdByType(terrainType: TerrainType): string &amp; object">

```ts
getIdByType(terrainType: TerrainType): string & object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| terrainType | <code>[`TerrainType`](?id=terraintype)</code> | Numeric terrain cell type. |

<div class="smt-member-anchors">

##### terrainType <!-- {docsify-ignore} -->

</div>

Return the mod string id for a numeric terrain type.

`string` & `object`

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getTypeById :id=gettypebyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L77" target="_blank" rel="noopener">terrains.d.ts:77</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getTypeById(terrainId: string &amp; object): TerrainType">

```ts
getTypeById(terrainId: string & object): TerrainType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| terrainId | `string` & `object` | Mod-registered or built-in terrain id. |

<div class="smt-member-anchors">

##### terrainId <!-- {docsify-ignore} -->

</div>

Resolve a terrain string id to a numeric cell type.

[`TerrainType`](?id=terraintype)

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.terrains.getTypeFromId~~ :id=gettypefromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L83" target="_blank" rel="noopener">terrains.d.ts:83</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [getTypeById](api/sandkit.api.terrains.worker.md?id=gettypebyid) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getTypeFromId(terrainId: string &amp; object): TerrainType">

```ts
getTypeFromId(terrainId: string & object): TerrainType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| terrainId | `string` & `object` |  |

<div class="smt-member-anchors">

##### terrainId <!-- {docsify-ignore} -->

</div>

[`TerrainType`](?id=terraintype)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L91" target="_blank" rel="noopener">terrains.d.ts:91</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getDefinitionByType(terrainType: TerrainType): TerrainDefinition | undefined">

```ts
getDefinitionByType(terrainType: TerrainType): TerrainDefinition | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| terrainType | <code>[`TerrainType`](?id=terraintype)</code> | Numeric terrain cell type. |

<div class="smt-member-anchors">

##### terrainType <!-- {docsify-ignore} -->

</div>

Look up the definition for a terrain type.

[`TerrainDefinition`](?id=terraindefinition) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getTypeAtCell :id=gettypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L100" target="_blank" rel="noopener">terrains.d.ts:100</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getTypeAtCell(...args: CellCoordinates): TerrainType | null">

```ts
getTypeAtCell(...args: CellCoordinates): TerrainType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the terrain cell type at a cell, or null when none.

[`TerrainType`](?id=terraintype) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getDataAtCell :id=getdataatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L110" target="_blank" rel="noopener">terrains.d.ts:110</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getDataAtCell(...args: CellCoordinates): TerrainDataAtCell | null">

```ts
getDataAtCell(...args: CellCoordinates): TerrainDataAtCell | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return terrain cell type and hit points at a cell.

[`TerrainDataAtCell`](?id=terraindataatcell) &#124; `null` Cell type and hit points, or null when the cell is not terrain.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.isAtCell :id=isatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L119" target="_blank" rel="noopener">terrains.d.ts:119</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.isAtCell(...args: CellCoordinates): boolean">

```ts
isAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when any terrain occupies the cell.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.isTypeAtCell :id=istypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L129" target="_blank" rel="noopener">terrains.d.ts:129</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.isTypeAtCell(...args: [number, number, string &amp; object]): boolean">

```ts
isTypeAtCell(...args: [number, number, string & object]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `string` &amp; `object`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the cell terrain matches the given id.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.isCellIdTerrain :id=iscellidterrain

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L137" target="_blank" rel="noopener">terrains.d.ts:137</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.isCellIdTerrain(cellId: CellId): boolean">

```ts
isCellIdTerrain(cellId: CellId): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellId | <code>[`CellId`](api/shared.nominal.md?id=cellid)</code> | Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.md?id=getcellidatcell). |

<div class="smt-member-anchors">

##### cellId <!-- {docsify-ignore} -->

</div>

Return true when a packed cell id refers to terrain.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.damageAtCell :id=damageatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L147" target="_blank" rel="noopener">terrains.d.ts:147</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.damageAtCell(...args: [number, number, number]): void">

```ts
damageAtCell(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Apply damage to terrain at a cell.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.meltAtCell :id=meltatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L156" target="_blank" rel="noopener">terrains.d.ts:156</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.meltAtCell(...args: CellCoordinates): void">

```ts
meltAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Melt terrain at a cell (for example ice to water). Worker-entry writes are immediate.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.createAtCell :id=createatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L167" target="_blank" rel="noopener">terrains.d.ts:167</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`TerrainRef`](?id=terrainref), [`TerrainMutationOptions`](?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Place terrain at an empty cell. Worker-entry writes are immediate.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.replaceAtCell :id=replaceatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L180" target="_blank" rel="noopener">terrains.d.ts:180</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`TerrainRef`](?id=terrainref), [`TerrainMutationOptions`](?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Replace existing terrain at a cell. Worker-entry writes are immediate.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.removeAtCell :id=removeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L192" target="_blank" rel="noopener">terrains.d.ts:192</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.removeAtCell(...args: number, number, [TerrainMutationOptions]): void">

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`TerrainMutationOptions`](?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove terrain from a cell. Worker-entry writes are immediate.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.setHitPointsAtCell :id=sethitpointsatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L205" target="_blank" rel="noopener">terrains.d.ts:205</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.setHitPointsAtCell(...args: [number, number, number]): boolean">

```ts
setHitPointsAtCell(...args: [number, number, number]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set terrain hit points at a cell. Worker-entry writes are immediate.

True when hit points changed or the terrain was removed.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.terrains.setHpAtCell~~ :id=sethpatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L211" target="_blank" rel="noopener">terrains.d.ts:211</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [setHitPointsAtCell](api/sandkit.api.terrains.worker.md?id=sethitpointsatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.setHpAtCell(...args: [number, number, number]): boolean">

```ts
setHpAtCell(...args: [number, number, number]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>
