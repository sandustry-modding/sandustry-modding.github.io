# sandkit.api.signals.interactables

Structure interact (click) handler registration.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.signals.interactables.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L68" target="_blank" rel="noopener">signals.d.ts:68</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.signals.interactables.register(structureTypeOrId: StructureRef, handler: (structure: Structure) =&gt; void): void">

```ts
register(structureTypeOrId: StructureRef, handler: (structure: Structure) => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureTypeOrId | <code>[`StructureRef`](api/sandkit.api.structures.md?id=structureref)</code> | Structure type id or enum value. |
| handler | <code>(`structure`: [`Structure`](api/sandkit.api.structures.md?id=structure)) =&gt; `void`</code> | Called with the structure instance. |

<div class="smt-member-anchors">

##### structureTypeOrId <!-- {docsify-ignore} -->

##### handler <!-- {docsify-ignore} -->

</div>

Register a handler when the player interacts with a structure type.

#### Example

```ts
api.signals.interactables.register("exampleLever", (structure) => {
  structure.data.on = !structure.data.on;
  api.structures.update(structure);
});
```

</div>
