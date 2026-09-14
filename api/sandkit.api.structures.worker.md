# sandkit.api.structures (worker)

**`Internal`**

Shared `sandkit.api.structures` base — structure lookup and mutation.

 Base namespace reused by main and worker declarations.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.StructureData :id=structuredata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L201" target="_blank" rel="noopener">structures.d.ts:201</a></p>

| Property | Type | Description |
| --- | --- | --- |
| elementId? | <code>string &#124; null</code> |  |
| elementType? | <code>TaggedNumber&lt;&quot;elementType&quot;&gt; &#124; null</code> |  |

<div class="smt-member-anchors">

##### elementId? <!-- {docsify-ignore} -->

##### elementType? <!-- {docsify-ignore} -->

</div>

Per-structure custom data bag.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.Structure :id=structure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L208" target="_blank" rel="noopener">structures.d.ts:208</a></p>

| Property | Type | Description |
| --- | --- | --- |
| x | <code>number</code> |  |
| y | <code>number</code> |  |
| trapped? | <code>boolean</code> |  |
| data? | <code>StructureData</code> |  |

<div class="smt-member-anchors">

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

##### trapped? <!-- {docsify-ignore} -->

##### data? <!-- {docsify-ignore} -->

</div>

Live structure instance in the world grid.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.StructureType :id=structuretype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L217" target="_blank" rel="noopener">structures.d.ts:217</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureType = StructureType | TaggedNumber&lt;&quot;structureType&quot;&gt;">

```ts
StructureType = StructureType | TaggedNumber<"structureType">
```

</div>

Numeric structure type handle. Built-in enum values autocomplete.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureId :id=structureid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L219" target="_blank" rel="noopener">structures.d.ts:219</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureId = LooseString&lt;never&gt;">

```ts
StructureId = LooseString<never>
```

</div>

Mod or built-in structure string id.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureRef :id=structureref

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L221" target="_blank" rel="noopener">structures.d.ts:221</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureRef = StructureType | StructureId">

```ts
StructureRef = StructureType | StructureId
```

</div>

Type handle or string id accepted by lookup helpers.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.forEachOfType :id=foreachoftype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L25" target="_blank" rel="noopener">structures.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) =&gt; void): void">

```ts
forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureTypeOrId | <code>[`StructureRef`](?id=structureref)</code> | Structure type value or string id. |
| callback | <code>(`structure`: [`Structure`](?id=structure)) =&gt; `void`</code> | Called once per matching structure instance. |

<div class="smt-member-anchors">

##### structureTypeOrId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

</div>

Invoke a callback for every structure of the given type.

#### Example

**Worker entry**

```ts
api.structures.forEachOfType("exampleStructure", (structure) => {
  processStructure(structure);
});
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.getAtCell :id=getatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L37" target="_blank" rel="noopener">structures.d.ts:37</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getAtCell(...args: CellCoordinates): Structure | null">

```ts
getAtCell(...args: CellCoordinates): Structure | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the structure at a cell, or null when none.

[`Structure`](?id=structure) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.structures.getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L45" target="_blank" rel="noopener">structures.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getDefinitionByType(structureType: StructureRef): any">

```ts
getDefinitionByType(structureType: StructureRef): any
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureType | <code>[`StructureRef`](?id=structureref)</code> | Structure type value or string id. |

<div class="smt-member-anchors">

##### structureType <!-- {docsify-ignore} -->

</div>

Return the mod-registered or built-in definition for a structure type.

</div>

<div class="smt-member-card">

### sandkit.api.structures.getTypeById :id=gettypebyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L53" target="_blank" rel="noopener">structures.d.ts:53</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getTypeById(structureId: string &amp; object): StructureType">

```ts
getTypeById(structureId: string & object): StructureType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureId | `string` & `object` | Structure string id. |

<div class="smt-member-anchors">

##### structureId <!-- {docsify-ignore} -->

</div>

Map a structure string id to its runtime type value.

[`StructureType`](?id=structuretype)

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.getTypeFromId~~ :id=gettypefromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L59" target="_blank" rel="noopener">structures.d.ts:59</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [getTypeById](api/sandkit.api.structures.worker.md?id=gettypebyid) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getTypeFromId(structureId: string &amp; object): StructureType">

```ts
getTypeFromId(structureId: string & object): StructureType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureId | `string` & `object` |  |

<div class="smt-member-anchors">

##### structureId <!-- {docsify-ignore} -->

</div>

[`StructureType`](?id=structuretype)

</div>

<div class="smt-member-card">

### sandkit.api.structures.hasBuiltAtCell :id=hasbuiltatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L68" target="_blank" rel="noopener">structures.d.ts:68</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.hasBuiltAtCell(...args: CellCoordinates): boolean">

```ts
hasBuiltAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when a completed structure occupies the cell.

</div>

<div class="smt-member-card">

### sandkit.api.structures.isType :id=istype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L77" target="_blank" rel="noopener">structures.d.ts:77</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isType(structure: Structure | null, structureId: string &amp; object): boolean">

```ts
isType(structure: Structure | null, structureId: string & object): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](?id=structure) &#124; `null`</code> | Structure instance, or null. |
| structureId | `string` & `object` | Structure string id to compare. |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### structureId <!-- {docsify-ignore} -->

</div>

Return true when the structure matches the given id.

</div>

<div class="smt-member-card">

### sandkit.api.structures.isTypeAtCell :id=istypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L87" target="_blank" rel="noopener">structures.d.ts:87</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isTypeAtCell(...args: [number, number, string &amp; object]): boolean">

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

Return true when the cell structure matches the given id.

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndex :id=setspritesheetindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L96" target="_blank" rel="noopener">structures.d.ts:96</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setSpritesheetIndex(structure: Structure, index: number): void">

```ts
setSpritesheetIndex(structure: Structure, index: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](?id=structure)</code> | Target structure instance. |
| index | `number` | Spritesheet frame index. |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### index <!-- {docsify-ignore} -->

</div>

Set the spritesheet frame index on a structure instance.

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndexAtCell :id=setspritesheetindexatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L106" target="_blank" rel="noopener">structures.d.ts:106</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setSpritesheetIndexAtCell(...args: [number, number, number]): void">

```ts
setSpritesheetIndexAtCell(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set spritesheet frame index for the structure at a cell.

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndexByValue :id=setspritesheetindexbyvalue

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L116" target="_blank" rel="noopener">structures.d.ts:116</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void">

```ts
setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](?id=structure)</code> | Target structure instance. |
| value | `number` | Numeric value mapped through thresholds. |
| thresholds | `number`[] | Ascending threshold values. |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### value <!-- {docsify-ignore} -->

##### thresholds <!-- {docsify-ignore} -->

</div>

Pick spritesheet index from a value and threshold table on a structure.

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndexByValueAtCell :id=setspritesheetindexbyvalueatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L131" target="_blank" rel="noopener">structures.d.ts:131</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setSpritesheetIndexByValueAtCell(...args: [number, number, number, number[]]): void">

```ts
setSpritesheetIndexByValueAtCell(...args: [number, number, number, number[]]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`, `number`[]\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Same as [setSpritesheetIndexByValue](?id=setspritesheetindexbyvalue) for the structure at a cell.

</div>

<div class="smt-member-card">

### sandkit.api.structures.update :id=update

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L147" target="_blank" rel="noopener">structures.d.ts:147</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.update(structure: Structure, options?: object): void">

```ts
update(structure: Structure, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](?id=structure)</code> | Structure instance to update. |
| options? | <code>When `propagateToWorkers` is true, sync to worker threads.</code> |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Push structure field changes to simulation.

#### Example

**Worker entry**

```ts
api.structures.update(structure, { propagateToWorkers: true });
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.updateData :id=updatedata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L166" target="_blank" rel="noopener">structures.d.ts:166</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.updateData(structure: Structure, partial: any, options?: object): void">

```ts
updateData(structure: Structure, partial: any, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](?id=structure)</code> | Structure instance to update. |
| partial | `any` | Fields to merge onto `structure.data`. |
| options? | <code>When `propagateToWorkers` is true, sync to worker threads.</code> |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Merge partial data onto a structure.

#### Example

**Worker entry**

```ts
api.structures.updateData(
  structure,
  { mode: "allow" },
  { propagateToWorkers: true },
);
```

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.setData~~ :id=setdata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L176" target="_blank" rel="noopener">structures.d.ts:176</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [updateData](api/sandkit.api.structures.worker.md?id=updatedata) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setData(structure: Structure, partial: any, options?: object): void">

```ts
setData(structure: Structure, partial: any, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](?id=structure)</code> |  |
| partial | `any` |  |
| options? | <code>{ propagateToWorkers: boolean }</code> |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

</div>
