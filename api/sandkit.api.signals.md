# sandkit.api.signals

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.signals.StructureType :id=structuretype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L105" target="_blank" rel="noopener">signals.d.ts:105</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.signals.StructureType = unknown">

```ts
StructureType = unknown
```

</div>

Structure type id or enum value.

</div>

<div class="smt-member-card">

### sandkit.api.signals.Structure :id=structure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L107" target="_blank" rel="noopener">signals.d.ts:107</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.signals.Structure = unknown">

```ts
Structure = unknown
```

</div>

Structure instance in the world.

</div>

<div class="smt-member-card">

### sandkit.api.signals.SignalTargetPayloadV1 :id=signaltargetpayloadv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L109" target="_blank" rel="noopener">signals.d.ts:109</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.signals.SignalTargetPayloadV1 = unknown">

```ts
SignalTargetPayloadV1 = unknown
```

</div>

Payload delivered to a signal target handler.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.signals.registerSenderType :id=registersendertype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L84" target="_blank" rel="noopener">signals.d.ts:84</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.signals.registerSenderType(structureId: string, getOutput?: (structure: unknown) =&gt; boolean): void">

```ts
registerSenderType(structureId: string, getOutput?: (structure: unknown) => boolean): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureId | `string` | Structure type id. |
| getOutput? | <code>(`structure`: `unknown`) =&gt; `boolean`</code> | Optional getter; return true when the sender should be on. |

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L102" target="_blank" rel="noopener">signals.d.ts:102</a></p>

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
