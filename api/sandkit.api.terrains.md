# sandkit.api.terrains

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.TerrainDefinition :id=terraindefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L53" target="_blank" rel="noopener">terrains.d.ts:53</a></p>

| Property | Type | Description |
| --- | --- | --- |
| interactions? | <code>readonly Interaction[]</code> | Tooltip interactions shown for this terrain. |

<div class="smt-member-anchors">

##### interactions? <!-- {docsify-ignore} -->

</div>

Terrain definition shape with typed element interactions.

#### Extends

- `Omit`\<[`TerrainDefinition`](api/sandkit.api.terrains.worker.md?id=terraindefinition), `"interactions"`\>

#### Indexable

```ts
[key: string]: unknown
```

```ts
[key: number]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L68" target="_blank" rel="noopener">terrains.d.ts:68</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L77" target="_blank" rel="noopener">terrains.d.ts:77</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.updateDefinition(cellTypeOrId: TerrainRef, partial: Partial&lt;TerrainDefinition&gt;): void">

```ts
updateDefinition(cellTypeOrId: TerrainRef, partial: Partial<TerrainDefinition>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellTypeOrId | <code>[`TerrainRef`](api/sandkit.api.terrains.worker.md?id=terrainref)</code> | Numeric cell type or terrain string id. |
| partial | `Partial`<[`TerrainDefinition`](?id=terraindefinition)> | Fields to merge onto the definition. |

<div class="smt-member-anchors">

##### cellTypeOrId <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

</div>

Patch fields on an existing terrain definition.

</div>

<div class="smt-member-card">

### sandkit.api.terrains.createAtCell :id=createatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L91" target="_blank" rel="noopener">terrains.d.ts:91</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md?id=terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Create terrain at a cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.terrains.createAtCellWhenIdle~~ :id=createatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L99" target="_blank" rel="noopener">terrains.d.ts:99</a></p>

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
| args | <code>...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md?id=terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.terrains.replaceAtCell :id=replaceatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L112" target="_blank" rel="noopener">terrains.d.ts:112</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md?id=terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Replace terrain at a cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.terrains.replaceAtCellWhenIdle~~ :id=replaceatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L120" target="_blank" rel="noopener">terrains.d.ts:120</a></p>

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
| args | <code>...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md?id=terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.terrains.removeAtCell :id=removeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L132" target="_blank" rel="noopener">terrains.d.ts:132</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.removeAtCell(...args: number, number, [TerrainMutationOptions]): void">

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove terrain at a cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.terrains.removeAtCellWhenIdle~~ :id=removeatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L140" target="_blank" rel="noopener">terrains.d.ts:140</a></p>

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
| args | <code>...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.terrains.setHitPointsAtCell :id=sethitpointsatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L152" target="_blank" rel="noopener">terrains.d.ts:152</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L158" target="_blank" rel="noopener">terrains.d.ts:158</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L164" target="_blank" rel="noopener">terrains.d.ts:164</a></p>

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
