# sandkit.api.terrains (worker)

**`Internal`**

Worker-thread `sandkit.api.terrains` — terrain lookup and immediate cell mutations.

Worker-entry mutations apply immediately. Main thread defers matching helpers in
`sandkit.api.terrains`.

 Worker subset; not interchangeable with main-thread
`sandkit.api.terrains`.

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.TerrainDefinition :id=terraindefinition

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:16</p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainDefinition = TerrainDefinition">

```ts
TerrainDefinition = TerrainDefinition
```

</div>

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainDataAtCell :id=terraindataatcell

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:17</p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainDataAtCell = TerrainDataAtCell">

```ts
TerrainDataAtCell = TerrainDataAtCell
```

</div>

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainMutationOptions :id=terrainmutationoptions

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:18</p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainMutationOptions = TerrainMutationOptions">

```ts
TerrainMutationOptions = TerrainMutationOptions
```

</div>

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainType :id=terraintype

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:19</p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainType = TerrainType">

```ts
TerrainType = TerrainType
```

</div>

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainId :id=terrainid

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:20</p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainId = TerrainId">

```ts
TerrainId = TerrainId
```

</div>

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainRef :id=terrainref

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:21</p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainRef = TerrainRef">

```ts
TerrainRef = TerrainRef
```

</div>

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.getIdByType :id=getidbytype

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:29</p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getIdByType(terrainType: TerrainType): string &amp; object">

```ts
getIdByType(terrainType: TerrainType): string & object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| terrainType | <code>[`TerrainType`](api/sandkit.api.terrains.md?id=terraintype)</code> | Numeric terrain cell type. |

<div class="smt-member-anchors">

##### terrainType <!-- {docsify-ignore} -->

</div>

Return the mod string id for a numeric terrain type.

`string` & `object`

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getTypeById :id=gettypebyid

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:37</p>

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

[`TerrainType`](api/sandkit.api.terrains.md?id=terraintype)

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.terrains.getTypeFromId~~ :id=gettypefromid

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:43</p>

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

[`TerrainType`](api/sandkit.api.terrains.md?id=terraintype)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:51</p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getDefinitionByType(terrainType: TerrainType): TerrainDefinition | undefined">

```ts
getDefinitionByType(terrainType: TerrainType): TerrainDefinition | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| terrainType | <code>[`TerrainType`](api/sandkit.api.terrains.md?id=terraintype)</code> | Numeric terrain cell type. |

<div class="smt-member-anchors">

##### terrainType <!-- {docsify-ignore} -->

</div>

Look up the definition for a terrain type.

[`TerrainDefinition`](api/sandkit.api.terrains.md?id=terraindefinition) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getTypeAtCell :id=gettypeatcell

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:60</p>

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

[`TerrainType`](api/sandkit.api.terrains.md?id=terraintype) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getDataAtCell :id=getdataatcell

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:70</p>

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

[`TerrainDataAtCell`](api/sandkit.api.terrains.md?id=terraindataatcell) &#124; `null` Cell type and hit points, or null when the cell is not terrain.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.isAtCell :id=isatcell

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:79</p>

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

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:89</p>

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

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:97</p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.isCellIdTerrain(cellId: CellId): boolean">

```ts
isCellIdTerrain(cellId: CellId): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellId | <code>[`CellId`](api/shared.nominal.md?id=cellid)</code> | Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.worker.md?id=getcellidatcell). |

<div class="smt-member-anchors">

##### cellId <!-- {docsify-ignore} -->

</div>

Return true when a packed cell id refers to terrain.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.damageAtCell :id=damageatcell

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:107</p>

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

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:116</p>

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

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:127</p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.md?id=terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.md?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Place terrain at an empty cell. Worker-entry writes are immediate.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.replaceAtCell :id=replaceatcell

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:140</p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.md?id=terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.md?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Replace existing terrain at a cell. Worker-entry writes are immediate.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.removeAtCell :id=removeatcell

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:152</p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.removeAtCell(...args: number, number, [TerrainMutationOptions]): void">

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.md?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove terrain from a cell. Worker-entry writes are immediate.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.setHitPointsAtCell :id=sethitpointsatcell

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:165</p>

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

<p class="smt-member-defined">Defined in: worker/api/terrains.d.ts:171</p>

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
