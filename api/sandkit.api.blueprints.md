# sandkit.api.blueprints

Structure blueprint serialize and localize helpers.

Available as `sandkit.api.blueprints`.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.blueprints.BlueprintStructure :id=blueprintstructure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L31" target="_blank" rel="noopener">blueprints.d.ts:31</a></p>

| Property | Type | Description |
| --- | --- | --- |
| x | <code>number</code> |  |
| y | <code>number</code> |  |

<div class="smt-member-anchors">

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

</div>

Serialized structure entry used in blueprints.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.blueprints.serializeStructures :id=serializestructures

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L16" target="_blank" rel="noopener">blueprints.d.ts:16</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.blueprints.serializeStructures(structures: readonly Structure[]): BlueprintStructure[]">

```ts
serializeStructures(structures: readonly Structure[]): BlueprintStructure[]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structures | <code>[`Structure`](api/sandkit.api.structures.worker.md?id=structure)[]</code> | Structure instances to encode. |

<div class="smt-member-anchors">

##### structures <!-- {docsify-ignore} -->

</div>

Serialize live structure instances into blueprint records.

[`BlueprintStructure`](?id=blueprintstructure)[]

</div>

<div class="smt-member-card">

### sandkit.api.blueprints.localizeStructures :id=localizestructures

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L26" target="_blank" rel="noopener">blueprints.d.ts:26</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.blueprints.localizeStructures(structures: readonly BlueprintStructure[]): BlueprintStructure[]">

```ts
localizeStructures(structures: readonly BlueprintStructure[]): BlueprintStructure[]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structures | <code>[`BlueprintStructure`](?id=blueprintstructure)[]</code> | Blueprint structure records to localize. |

<div class="smt-member-anchors">

##### structures <!-- {docsify-ignore} -->

</div>

Localize blueprint structure records for placement.

[`BlueprintStructure`](?id=blueprintstructure)[]

</div>
