# sandkit.api.signals.interactables

Structure interact (click) handler registration.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.signals.interactables.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L66" target="_blank" rel="noopener">signals.d.ts:66</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.signals.interactables.register(structureTypeOrId: unknown, handler: (structure: unknown) =&gt; void): void">

```ts
register(structureTypeOrId: unknown, handler: (structure: unknown) => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureTypeOrId | `unknown` | Structure type id or enum value. |
| handler | <code>(`structure`: `unknown`) =&gt; `void`</code> | Called with the structure instance. |

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
