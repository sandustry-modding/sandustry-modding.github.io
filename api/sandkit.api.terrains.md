# sandkit.api.terrains

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.TerrainDefinition :id=terraindefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L69" target="_blank" rel="noopener">terrains.d.ts:69</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainDefinition = object">

```ts
TerrainDefinition = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique mod-scoped terrain id. |
| nameKey? | <code>string</code> | i18n key for the terrain display name. |
| hp? | <code>number</code> | Default terrain hit points. |
| materialId? | <code>number</code> | Material id used for rendering. Must be > obstacle breakpoint and < 150. |
| metaColor? | <code>number</code> | UI/meta color as 0xRRGGBB. |
| colorHSL? | <code>[number, number, number]</code> | Base terrain color as HSL components. |
| excavationRequirements? | <code>readonly string[]</code> | Tool item ids required to excavate this terrain. |
| interactions? | <code>readonly Interaction[]</code> | Tooltip interactions shown for this terrain. |
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

Terrain definition shape with typed element interactions.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainDataAtCell :id=terraindataatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L203" target="_blank" rel="noopener">terrains.d.ts:203</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainDataAtCell = object">

```ts
TerrainDataAtCell = object
```

</div>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L222" target="_blank" rel="noopener">terrains.d.ts:222</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainMutationOptions = object">

```ts
TerrainMutationOptions = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| skipShadow? | <code>boolean</code> | Skip shadow updates around the changed cell. |

<div class="smt-member-anchors">

##### skipShadow? <!-- {docsify-ignore} -->

</div>

Options for terrain create, replace, or remove calls.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainType :id=terraintype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L231" target="_blank" rel="noopener">terrains.d.ts:231</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainType = CellType | TaggedNumber&lt;&quot;terrainType&quot;&gt;">

```ts
TerrainType = CellType | TaggedNumber<"terrainType">
```

</div>

Numeric terrain / [CellTypeEnum](api/sandkit.enums.CellType.md) handle.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainId :id=terrainid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L237" target="_blank" rel="noopener">terrains.d.ts:237</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainId = LooseString&lt;never&gt;">

```ts
TerrainId = LooseString<never>
```

</div>

Mod or built-in terrain string id.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainRef :id=terrainref

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L243" target="_blank" rel="noopener">terrains.d.ts:243</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L20" target="_blank" rel="noopener">terrains.d.ts:20</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L28" target="_blank" rel="noopener">terrains.d.ts:28</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L34" target="_blank" rel="noopener">terrains.d.ts:34</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [getTypeById](api/sandkit.api.terrains.md?id=gettypebyid) instead.

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L42" target="_blank" rel="noopener">terrains.d.ts:42</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L45" target="_blank" rel="noopener">terrains.d.ts:45</a></p>

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

Return terrain cell type at a cell, or null.

[`TerrainType`](?id=terraintype) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getDataAtCell :id=getdataatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L48" target="_blank" rel="noopener">terrains.d.ts:48</a></p>

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

Return terrain data at a cell, or null.

[`TerrainDataAtCell`](?id=terraindataatcell) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.terrains.isAtCell :id=isatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L51" target="_blank" rel="noopener">terrains.d.ts:51</a></p>

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

Return true when any terrain exists at the cell.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.isTypeAtCell :id=istypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L54" target="_blank" rel="noopener">terrains.d.ts:54</a></p>

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

Return true when terrain at the cell matches a string id.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.isCellIdTerrain :id=iscellidterrain

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L57" target="_blank" rel="noopener">terrains.d.ts:57</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.isCellIdTerrain(cellId: CellId): boolean">

```ts
isCellIdTerrain(cellId: CellId): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellId | <code>[`CellId`](api/shared.nominal.md?id=cellid)</code> |  |

<div class="smt-member-anchors">

##### cellId <!-- {docsify-ignore} -->

</div>

Return true when a cell id represents terrain.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.damageAtCell :id=damageatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L60" target="_blank" rel="noopener">terrains.d.ts:60</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L63" target="_blank" rel="noopener">terrains.d.ts:63</a></p>

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

Melt terrain at a cell (for example ice to water).

</div>

<div class="smt-member-card">

### sandkit.api.terrains.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L101" target="_blank" rel="noopener">terrains.d.ts:101</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.register(definition: TerrainDefinition): object">

```ts
register(definition: TerrainDefinition): object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | <code>[`TerrainDefinition`](?id=terraindefinition)</code> | Terrain definition to register. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Register a new terrain definition.

Object with the assigned `cellType`. cellType: TerrainType

</div>

<div class="smt-member-card">

### sandkit.api.terrains.updateDefinition :id=updatedefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L110" target="_blank" rel="noopener">terrains.d.ts:110</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.updateDefinition(cellTypeOrId: TerrainRef, partial: Partial&lt;TerrainDefinition&gt;): void">

```ts
updateDefinition(cellTypeOrId: TerrainRef, partial: Partial<TerrainDefinition>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellTypeOrId | <code>[`TerrainRef`](?id=terrainref)</code> | Numeric cell type or terrain string id. |
| partial | `Partial`<[`TerrainDefinition`](?id=terraindefinition)> | Fields to merge onto the definition. |

<div class="smt-member-anchors">

##### cellTypeOrId <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

</div>

Patch fields on an existing terrain definition.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.createAtCell :id=createatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L124" target="_blank" rel="noopener">terrains.d.ts:124</a></p>

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

Create terrain at a cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.terrains.createAtCellWhenIdle~~ :id=createatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L132" target="_blank" rel="noopener">terrains.d.ts:132</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [createAtCell](api/sandkit.api.terrains.md?id=createatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.createAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
createAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`TerrainRef`](?id=terrainref), [`TerrainMutationOptions`](?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.terrains.replaceAtCell :id=replaceatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L145" target="_blank" rel="noopener">terrains.d.ts:145</a></p>

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

Replace terrain at a cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.terrains.replaceAtCellWhenIdle~~ :id=replaceatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L153" target="_blank" rel="noopener">terrains.d.ts:153</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [replaceAtCell](api/sandkit.api.terrains.md?id=replaceatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.replaceAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
replaceAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`TerrainRef`](?id=terrainref), [`TerrainMutationOptions`](?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.terrains.removeAtCell :id=removeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L165" target="_blank" rel="noopener">terrains.d.ts:165</a></p>

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

Remove terrain at a cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.terrains.removeAtCellWhenIdle~~ :id=removeatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L173" target="_blank" rel="noopener">terrains.d.ts:173</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [removeAtCell](api/sandkit.api.terrains.md?id=removeatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.removeAtCellWhenIdle(...args: number, number, [TerrainMutationOptions]): void">

```ts
removeAtCellWhenIdle(...args: number, number, [TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`TerrainMutationOptions`](?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.terrains.setHitPointsAtCell :id=sethitpointsatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L185" target="_blank" rel="noopener">terrains.d.ts:185</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.setHitPointsAtCell(...args: [number, number, number]): void">

```ts
setHitPointsAtCell(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set terrain hit points at a cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.terrains.setHpAtCell~~ :id=sethpatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L191" target="_blank" rel="noopener">terrains.d.ts:191</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [setHitPointsAtCell](api/sandkit.api.terrains.md?id=sethitpointsatcell) instead.

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

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.terrains.setHpAtCellWhenIdle~~ :id=sethpatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L197" target="_blank" rel="noopener">terrains.d.ts:197</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [setHitPointsAtCell](api/sandkit.api.terrains.md?id=sethitpointsatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.setHpAtCellWhenIdle(...args: [number, number, number]): void">

```ts
setHpAtCellWhenIdle(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>
