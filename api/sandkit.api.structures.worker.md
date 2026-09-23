# sandkit.api.structures (worker)

**`Internal`**

Worker-thread `sandkit.api.structures` — structure lookup and immediate updates.

Worker-entry updates apply immediately. Main thread defers build and remove helpers in
`sandkit.api.structures`.

 Worker subset; not interchangeable with main-thread
`sandkit.api.structures`.

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.StructureDefinition :id=structuredefinition

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:15</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureDefinition = StructureDefinition">

```ts
StructureDefinition = StructureDefinition
```

</div>

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureData :id=structuredata

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:16</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureData = StructureData">

```ts
StructureData = StructureData
```

</div>

</div>

<div class="smt-member-card">

### sandkit.api.structures.Structure :id=structure

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:17</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.Structure = Structure">

```ts
Structure = Structure
```

</div>

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureType :id=structuretype

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:18</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureType = StructureType">

```ts
StructureType = StructureType
```

</div>

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureId :id=structureid

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:19</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureId = StructureId">

```ts
StructureId = StructureId
```

</div>

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureRef :id=structureref

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:20</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureRef = StructureRef">

```ts
StructureRef = StructureRef
```

</div>

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.forEachOfType :id=foreachoftype

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:36</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) =&gt; void): void">

```ts
forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureTypeOrId | <code>[`StructureRef`](api/sandkit.api.structures.md?id=structureref)</code> | Structure type value or string id. |
| callback | <code>(`structure`: [`Structure`](api/sandkit.api.structures.md?id=structure)) =&gt; `void`</code> | Called once per matching structure instance. |

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

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:48</p>

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

[`Structure`](api/sandkit.api.structures.md?id=structure) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.structures.getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:56</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getDefinitionByType(structureType: StructureRef): StructureDefinition | undefined">

```ts
getDefinitionByType(structureType: StructureRef): StructureDefinition | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureType | <code>[`StructureRef`](api/sandkit.api.structures.md?id=structureref)</code> | Structure type value or string id. |

<div class="smt-member-anchors">

##### structureType <!-- {docsify-ignore} -->

</div>

Return the mod-registered or built-in definition for a structure type.

[`StructureDefinition`](api/sandkit.api.structures.md?id=structuredefinition) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.structures.getTypeById :id=gettypebyid

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:66</p>

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

[`StructureType`](api/sandkit.api.structures.md?id=structuretype-1)

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.getTypeFromId~~ :id=gettypefromid

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:72</p>

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

[`StructureType`](api/sandkit.api.structures.md?id=structuretype-1)

</div>

<div class="smt-member-card">

### sandkit.api.structures.hasBuiltAtCell :id=hasbuiltatcell

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:81</p>

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

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:90</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isType(structure: Structure | null, structureId: string &amp; object): boolean">

```ts
isType(structure: Structure | null, structureId: string & object): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](api/sandkit.api.structures.md?id=structure) &#124; `null`</code> | Structure instance, or null. |
| structureId | `string` & `object` | Structure string id to compare. |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### structureId <!-- {docsify-ignore} -->

</div>

Return true when the structure matches the given id.

</div>

<div class="smt-member-card">

### sandkit.api.structures.isTypeAtCell :id=istypeatcell

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:100</p>

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

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:109</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setSpritesheetIndex(structure: Structure, index: number): void">

```ts
setSpritesheetIndex(structure: Structure, index: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](api/sandkit.api.structures.md?id=structure)</code> | Target structure instance. |
| index | `number` | Spritesheet frame index. |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### index <!-- {docsify-ignore} -->

</div>

Set the spritesheet frame index on a structure instance.

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndexAtCell :id=setspritesheetindexatcell

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:119</p>

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

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:129</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void">

```ts
setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](api/sandkit.api.structures.md?id=structure)</code> | Target structure instance. |
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

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:144</p>

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

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:160</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.update(structure: Structure, options?: object): void">

```ts
update(structure: Structure, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](api/sandkit.api.structures.md?id=structure)</code> | Structure instance to update. |
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

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:179</p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.updateData(structure: Structure, partial: Partial&lt;StructureData&gt;, options?: object): void">

```ts
updateData(structure: Structure, partial: Partial<StructureData>, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](api/sandkit.api.structures.md?id=structure)</code> | Structure instance to update. |
| partial | `Partial`<[`StructureData`](?id=structuredata)> | Fields to merge onto `structure.data`. |
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

<p class="smt-member-defined">Defined in: worker/api/structures.d.ts:189</p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [updateData](api/sandkit.api.structures.worker.md?id=updatedata) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setData(structure: Structure, partial: Partial&lt;StructureData&gt;, options?: object): void">

```ts
setData(structure: Structure, partial: Partial<StructureData>, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](api/sandkit.api.structures.md?id=structure)</code> |  |
| partial | `Partial`<[`StructureData`](?id=structuredata)> |  |
| options? | <code>{ propagateToWorkers: boolean }</code> |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

</div>
