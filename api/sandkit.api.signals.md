# sandkit.api.signals

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.signals.StructureType :id=structuretype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L107" target="_blank" rel="noopener">signals.d.ts:107</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.signals.StructureType = StructureType">

```ts
StructureType = StructureType
```

</div>

Structure type handle.

</div>

<div class="smt-member-card">

### sandkit.api.signals.Structure :id=structure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L109" target="_blank" rel="noopener">signals.d.ts:109</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.signals.Structure = Structure">

```ts
Structure = Structure
```

</div>

Live structure instance.

</div>

<div class="smt-member-card">

### sandkit.api.signals.SignalTargetPayloadV1 :id=signaltargetpayloadv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L111" target="_blank" rel="noopener">signals.d.ts:111</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.signals.SignalTargetPayloadV1 = object">

```ts
SignalTargetPayloadV1 = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| combined | <code>boolean</code> |  |
| inputCount | <code>number</code> |  |
| onCount | <code>number</code> |  |

<div class="smt-member-anchors">

##### combined <!-- {docsify-ignore} -->

##### inputCount <!-- {docsify-ignore} -->

##### onCount <!-- {docsify-ignore} -->

</div>

Payload delivered to a signal target handler.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.signals.registerSenderType :id=registersendertype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L86" target="_blank" rel="noopener">signals.d.ts:86</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.signals.registerSenderType(structureId: string, getOutput?: (structure: Structure) =&gt; boolean): void">

```ts
registerSenderType(structureId: string, getOutput?: (structure: Structure) => boolean): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureId | `string` | Structure type id. |
| getOutput? | <code>(`structure`: [`Structure`](api/sandkit.api.structures.worker.md?id=structure)) =&gt; `boolean`</code> | Optional getter; return true when the sender should be on. |

<div class="smt-member-anchors">

##### structureId <!-- {docsify-ignore} -->

##### getOutput? <!-- {docsify-ignore} -->

</div>

Register a structure type as a signal sender.

#### Example

```ts
api.signals.registerSenderType("exampleSensor", (structure) => {
  return structure.data.charge >= structure.data.threshold;
});
```

</div>

<div class="smt-member-card">

### sandkit.api.signals.setOutputAtCell :id=setoutputatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L104" target="_blank" rel="noopener">signals.d.ts:104</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.signals.setOutputAtCell(cellX: number, cellY: number, on: boolean): void">

```ts
setOutputAtCell(cellX: number, cellY: number, on: boolean): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellX | `number` | Structure origin cell X. |
| cellY | `number` | Structure origin cell Y. |
| on | `boolean` | Desired output state. |

<div class="smt-member-anchors">

##### cellX <!-- {docsify-ignore} -->

##### cellY <!-- {docsify-ignore} -->

##### on <!-- {docsify-ignore} -->

</div>

Set sender output at a structure origin cell.

#### Example

```ts
api.structures.forEachOfType("exampleSensor", (structure) => {
  api.signals.setOutputAtCell(structure.x, structure.y, structure.data.active);
});
```

</div>
