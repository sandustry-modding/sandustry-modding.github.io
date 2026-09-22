# sandkit.api.signals.targets

Signal target registration for structure types.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.signals.targets.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L47" target="_blank" rel="noopener">signals.d.ts:47</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.signals.targets.register(structureTypeOrId: StructureRef, apply: (structure: Structure, payload: SignalTargetPayloadV1) =&gt; void): void">

```ts
register(structureTypeOrId: StructureRef, apply: (structure: Structure, payload: SignalTargetPayloadV1) => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureTypeOrId | <code>[`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref)</code> | Structure type id or enum value. |
| apply | <code>(`structure`: [`Structure`](api/sandkit.api.structures.worker.md?id=structure), `payload`: [`SignalTargetPayloadV1`](api/sandkit.api.signals.md?id=signaltargetpayloadv1)) =&gt; `void`</code> | Called when a signal reaches a matching structure. |

<div class="smt-member-anchors">

##### structureTypeOrId <!-- {docsify-ignore} -->

##### apply <!-- {docsify-ignore} -->

</div>

Register a handler when a signal targets a structure type.

#### Example

```ts
api.signals.targets.register("exampleMachine", (structure, payload) => {
  api.structures.processing.setEnabledAtCell(structure.x, structure.y, payload.combined);
});
```

</div>
