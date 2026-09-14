# sandkit.api.structures.processing

Per-structure processing enablement and registration.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.processing.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L515" target="_blank" rel="noopener">structures.d.ts:515</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.processing.register(id: string &amp; object, definition: StructureProcessingDefinitionV1): void">

```ts
register(id: string & object, definition: StructureProcessingDefinitionV1): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| id | `string` & `object` | Unique processing registration id. |
| definition | <code>[`StructureProcessingDefinitionV1`](api/sandkit.api.structures.md?id=structureprocessingdefinitionv1)</code> | Structure type, interval, and callback. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### definition <!-- {docsify-ignore} -->

</div>

Register a custom processing definition by id.

#### Example

```ts
api.structures.processing.register(
  "exampleStructure:process",
  {
    structureType: "exampleStructure",
    intervalMs: 250,
    process: (structure, context) => {
      const empty = context.isCellEmptyAtCell(
        structure.x,
        structure.y,
      );
    },
  },
);
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.processing.setEnabledAtCell :id=setenabledatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L526" target="_blank" rel="noopener">structures.d.ts:526</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.processing.setEnabledAtCell(...args: [number, number, boolean]): boolean">

```ts
setEnabledAtCell(...args: [number, number, boolean]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `boolean`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Enable or disable processing at a cell.

True when the enabled state changed.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.processing.setEnabledAt~~ :id=setenabledat

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L532" target="_blank" rel="noopener">structures.d.ts:532</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [setEnabledAtCell](api/sandkit.api.structures.processing.md?id=setenabledatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.processing.setEnabledAt(...args: [number, number, boolean]): boolean">

```ts
setEnabledAt(...args: [number, number, boolean]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `boolean`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>
