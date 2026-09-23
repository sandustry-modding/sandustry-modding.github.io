# sandkit.api.structures

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.StructureBuildMode :id=structurebuildmode

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L566" target="_blank" rel="noopener">structures.d.ts:566</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureBuildMode = object">

```ts
StructureBuildMode = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| type | <code>string</code> |  |
| directions? | <code>string[]</code> |  |
| spanTiles? | <code>number</code> | Fixed span length in tiles for line-linked structures. |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### directions? <!-- {docsify-ignore} -->

##### spanTiles? <!-- {docsify-ignore} -->

</div>

Build mode entry for a structure definition.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureVariant :id=structurevariant

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L577" target="_blank" rel="noopener">structures.d.ts:577</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureVariant = object">

```ts
StructureVariant = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>StructureRef</code> |  |
| angles | <code>number[]</code> |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### angles <!-- {docsify-ignore} -->

</div>

Rotated variant entry for a structure definition.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureTooltipHover :id=structuretooltiphover

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L609" target="_blank" rel="noopener">structures.d.ts:609</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureTooltipHover = object">

```ts
StructureTooltipHover = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| type | <code>&quot;custom&quot;</code> |  |
| dataFieldMessage | <code>{ message: string; messageKey: string; fields: readonly StructureTooltipHoverField[] }</code> |  |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### dataFieldMessage <!-- {docsify-ignore} -->

</div>

Custom hover tooltip driven by structure `data` fields.

#### Example

**Official example**

```ts
tooltipHover: {
  type: "custom",
  dataFieldMessage: {
    message: "Mode {mode}; channel {channel}.",
    messageKey: "mods|example|machineTooltip",
    fields: [
      {
        param: "mode",
        field: "mode",
        valueLabels: { input: "Receiving", output: "Sending" },
        valueKeys: {
          input: "mods|example|receiving",
          output: "mods|example|sending",
        },
      },
      { param: "channel", field: "channel", fallback: 1, round: true },
    ],
  },
}
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureTooltipHoverField :id=structuretooltiphoverfield

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L619" target="_blank" rel="noopener">structures.d.ts:619</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureTooltipHoverField = object">

```ts
StructureTooltipHoverField = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| param | <code>string</code> |  |
| field | <code>string</code> |  |
| fallback? | <code>string &#124; number</code> |  |
| round? | <code>boolean</code> |  |
| valueLabels? | <code>Record&lt;string, string&gt;</code> |  |
| valueKeys? | <code>Record&lt;string, string&gt;</code> |  |

<div class="smt-member-anchors">

##### param <!-- {docsify-ignore} -->

##### field <!-- {docsify-ignore} -->

##### fallback? <!-- {docsify-ignore} -->

##### round? <!-- {docsify-ignore} -->

##### valueLabels? <!-- {docsify-ignore} -->

##### valueKeys? <!-- {docsify-ignore} -->

</div>

One interpolated field in a [StructureTooltipHover](?id=structuretooltiphover) message.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureSpritesheet :id=structurespritesheet

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L629" target="_blank" rel="noopener">structures.d.ts:629</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureSpritesheet = object">

```ts
StructureSpritesheet = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| frameSize | <code>Size2</code> |  |
| frames | <code>number</code> |  |
| intervalMs | <code>number</code> |  |
| rowDataField? | <code>string</code> | When set, frame row follows this structure `data` field. |

<div class="smt-member-anchors">

##### frameSize <!-- {docsify-ignore} -->

##### frames <!-- {docsify-ignore} -->

##### intervalMs <!-- {docsify-ignore} -->

##### rowDataField? <!-- {docsify-ignore} -->

</div>

Spritesheet animation on a structure render block.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureRenderUi :id=structurerenderui

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L638" target="_blank" rel="noopener">structures.d.ts:638</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureRenderUi = object">

```ts
StructureRenderUi = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| imageName? | <code>string</code> |  |
| size? | <code>Size2</code> |  |
| offset? | <code>Vector2</code> |  |
| outline? | <code>boolean</code> |  |
| width? | <code>string</code> |  |
| height? | <code>string</code> |  |
| clipToBounds? | <code>boolean</code> |  |

<div class="smt-member-anchors">

##### imageName? <!-- {docsify-ignore} -->

##### size? <!-- {docsify-ignore} -->

##### offset? <!-- {docsify-ignore} -->

##### outline? <!-- {docsify-ignore} -->

##### width? <!-- {docsify-ignore} -->

##### height? <!-- {docsify-ignore} -->

##### clipToBounds? <!-- {docsify-ignore} -->

</div>

Hotbar / build-menu UI sprite settings.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureRender :id=structurerender

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L649" target="_blank" rel="noopener">structures.d.ts:649</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureRender = object">

```ts
StructureRender = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| imageName? | <code>string</code> |  |
| size? | <code>Size2</code> |  |
| offset? | <code>Vector2</code> |  |
| z? | <code>number</code> |  |
| ambienceGroup? | <code>string</code> |  |
| ui? | <code>StructureRenderUi</code> |  |
| spritesheet? | <code>StructureSpritesheet</code> |  |

<div class="smt-member-anchors">

##### imageName? <!-- {docsify-ignore} -->

##### size? <!-- {docsify-ignore} -->

##### offset? <!-- {docsify-ignore} -->

##### z? <!-- {docsify-ignore} -->

##### ambienceGroup? <!-- {docsify-ignore} -->

##### ui? <!-- {docsify-ignore} -->

##### spritesheet? <!-- {docsify-ignore} -->

</div>

Render settings for a structure definition.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureDefinition :id=structuredefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L663" target="_blank" rel="noopener">structures.d.ts:663</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureDefinition = object">

```ts
StructureDefinition = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>StructureId</code> |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

</div>

Registered structure definition snapshot (built-in or mod).

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureData :id=structuredata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L669" target="_blank" rel="noopener">structures.d.ts:669</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureData = object">

```ts
StructureData = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| elementId? | <code>string &#124; null</code> |  |
| elementType? | <code>TaggedNumber&lt;&quot;elementType&quot;&gt; &#124; null</code> |  |
| storedEnergy? | <code>number</code> |  |
| maxEnergy? | <code>number</code> |  |

<div class="smt-member-anchors">

##### elementId? <!-- {docsify-ignore} -->

##### elementType? <!-- {docsify-ignore} -->

##### storedEnergy? <!-- {docsify-ignore} -->

##### maxEnergy? <!-- {docsify-ignore} -->

</div>

Per-structure custom data bag.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.Structure :id=structure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L678" target="_blank" rel="noopener">structures.d.ts:678</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.Structure = object">

```ts
Structure = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| x | <code>number</code> |  |
| y | <code>number</code> |  |
| type? | <code>StructureRef</code> |  |
| queued? | <code>boolean</code> |  |
| filter? | <code>{ elementType: TaggedNumber&lt;&quot;elementType&quot;&gt;; mode: string }</code> |  |
| trapped? | <code>boolean</code> |  |
| data? | <code>StructureData</code> |  |
| color? | <code>string</code> |  |
| frame? | <code>boolean</code> |  |

<div class="smt-member-anchors">

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

##### type? <!-- {docsify-ignore} -->

##### queued? <!-- {docsify-ignore} -->

##### filter? <!-- {docsify-ignore} -->

##### trapped? <!-- {docsify-ignore} -->

##### data? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

##### frame? <!-- {docsify-ignore} -->

</div>

Live structure instance in the world grid.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureType :id=structuretype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L692" target="_blank" rel="noopener">structures.d.ts:692</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureType = StructureType | TaggedNumber&lt;&quot;structureType&quot;&gt;">

```ts
StructureType = StructureType | TaggedNumber<"structureType">
```

</div>

Numeric structure type handle. Built-in enum values autocomplete.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureId :id=structureid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L694" target="_blank" rel="noopener">structures.d.ts:694</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureId = LooseString&lt;never&gt;">

```ts
StructureId = LooseString<never>
```

</div>

Mod or built-in structure string id.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureRef :id=structureref

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L696" target="_blank" rel="noopener">structures.d.ts:696</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureRef = StructureType | StructureId">

```ts
StructureRef = StructureType | StructureId
```

</div>

Type handle or string id accepted by lookup helpers.

</div>

<div class="smt-member-card">

### sandkit.api.structures.SandkitStructureDefinition :id=sandkitstructuredefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L699" target="_blank" rel="noopener">structures.d.ts:699</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.SandkitStructureDefinition = StructureDefinition &amp; object">

```ts
SandkitStructureDefinition = StructureDefinition & object
```

</div>

Full structure definition registered with the game.

#### Type Declaration

##### name?

```ts
optional name?: string
```

##### nameKey?

```ts
optional nameKey?: string
```

##### description?

```ts
optional description?: string
```

##### descriptionKey?

```ts
optional descriptionKey?: string
```

##### categoryKey?

```ts
optional categoryKey?: string
```

##### order?

```ts
optional order?: number
```

##### buildModes?

```ts
optional buildModes?: StructureBuildMode[]
```

##### shape?

```ts
optional shape?: number[][]
```

##### variants?

```ts
optional variants?: StructureVariant[]
```

##### render?

```ts
optional render?: StructureRender
```

##### defaultData?

```ts
optional defaultData?: Partial<StructureData>
```

##### linkedClearance?

```ts
optional linkedClearance?: string
```

Linked placement clearance mode (for example `"allOrNothing"`).

##### tooltipHover?

```ts
optional tooltipHover?: StructureTooltipHover
```

Custom hover tooltip over the built structure.

##### rejectWhenBlocked?

```ts
optional rejectWhenBlocked?: boolean
```

Reject placement when the footprint is blocked.

##### alwaysUnlocked?

```ts
optional alwaysUnlocked?: boolean
```

Show in the build menu without research unlock.

##### descriptionParams?

```ts
optional descriptionParams?: Record<string, string | number>
```

Values interpolated into the structure description string.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureBuildOptions :id=structurebuildoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L731" target="_blank" rel="noopener">structures.d.ts:731</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureBuildOptions = object">

```ts
StructureBuildOptions = object
```

</div>

Options passed to [buildAtCell](?id=buildatcell).

#### Index Signature

\[`key`: `string`\]: `unknown`

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureRemovalOptions :id=structureremovaloptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L736" target="_blank" rel="noopener">structures.d.ts:736</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureRemovalOptions = object">

```ts
StructureRemovalOptions = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| removeCells? | <code>boolean</code> | Also remove underlying terrain cells in the footprint. |
| skipVisuals? | <code>boolean</code> | Skip visual teardown effects. |

<div class="smt-member-anchors">

##### removeCells? <!-- {docsify-ignore} -->

##### skipVisuals? <!-- {docsify-ignore} -->

</div>

Options passed to [removeAtCell](?id=removeatcell).

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureBulkRemovalOptions :id=structurebulkremovaloptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L744" target="_blank" rel="noopener">structures.d.ts:744</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureBulkRemovalOptions = object">

```ts
StructureBulkRemovalOptions = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| removeCells? | <code>boolean</code> |  |
| skipVisuals? | <code>boolean</code> |  |
| preserveUnselectable? | <code>boolean</code> | When set, only remove structures at these positions. |
| onlyPositions? | <code>Vector2[]</code> |  |

<div class="smt-member-anchors">

##### removeCells? <!-- {docsify-ignore} -->

##### skipVisuals? <!-- {docsify-ignore} -->

##### preserveUnselectable? <!-- {docsify-ignore} -->

##### onlyPositions? <!-- {docsify-ignore} -->

</div>

Options passed to bulk structure removal helpers.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureProcessingContext :id=structureprocessingcontext

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L756" target="_blank" rel="noopener">structures.d.ts:756</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureProcessingContext = object">

```ts
StructureProcessingContext = object
```

</div>

| Method | Signature | Description |
| --- | --- | --- |
| getResolvedTypeAtCell() | <code>(...args: CellCoordinates): ElementType &#124; null</code> | Return the resolved element type at a cell, or null. |
| ~~getElementTypeAtCell()~~ | <code>(...args: CellCoordinates): ElementType &#124; null</code> | Deprecated alias. |
| isCellEmptyAtCell() | <code>(...args: CellCoordinates): boolean</code> | Return true when the cell has no element or terrain. |
| ~~isCellEmpty()~~ | <code>(...args: CellCoordinates): boolean</code> | Deprecated alias. |
| commit() | <code>(mutations: unknown): void</code> | Commit batched grid mutations from the processing callback. |

<div class="smt-member-anchors">

##### getResolvedTypeAtCell() <!-- {docsify-ignore} -->

##### ~~getElementTypeAtCell()~~ <!-- {docsify-ignore} -->

##### isCellEmptyAtCell() <!-- {docsify-ignore} -->

##### ~~isCellEmpty()~~ <!-- {docsify-ignore} -->

##### commit() <!-- {docsify-ignore} -->

</div>

Context passed to structure processing callbacks.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.StructureProcessorDefinitionV1~~ :id=structureprocessordefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L794" target="_blank" rel="noopener">structures.d.ts:794</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [StructureProcessingDefinitionV1](api/sandkit.api.structures.md?id=structureprocessingdefinitionv1) with [processing.register](api/sandkit.api.structures.processing.md?id=register) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureProcessorDefinitionV1 = object">

```ts
StructureProcessorDefinitionV1 = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| ~~intervalMs~~ | <code>number</code> | Tick interval in milliseconds. Must be > 0. |
| ~~process~~ | <code>(structure: Structure, context: StructureProcessingContext) =&gt; void</code> | Synchronous callback invoked for each structure instance. |

<div class="smt-member-anchors">

##### ~~intervalMs~~ <!-- {docsify-ignore} -->

##### ~~process~~ <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.structures.PlacementConfigField :id=placementconfigfield

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L802" target="_blank" rel="noopener">structures.d.ts:802</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.PlacementConfigField = PlacementConfigIntegerField | PlacementConfigChoiceField">

```ts
PlacementConfigField = PlacementConfigIntegerField | PlacementConfigChoiceField
```

</div>

Placement hotbar field definition.

</div>

<div class="smt-member-card">

### sandkit.api.structures.PlacementConfigIntegerField :id=placementconfigintegerfield

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L805" target="_blank" rel="noopener">structures.d.ts:805</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.PlacementConfigIntegerField = object">

```ts
PlacementConfigIntegerField = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| type | <code>&quot;integer&quot;</code> |  |
| id | <code>string</code> |  |
| labelKey | <code>string</code> |  |
| min? | <code>number</code> |  |
| max? | <code>number</code> |  |
| default? | <code>number</code> |  |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### id <!-- {docsify-ignore} -->

##### labelKey <!-- {docsify-ignore} -->

##### min? <!-- {docsify-ignore} -->

##### max? <!-- {docsify-ignore} -->

##### default? <!-- {docsify-ignore} -->

</div>

Integer placement field with optional bounds.

</div>

<div class="smt-member-card">

### sandkit.api.structures.PlacementConfigChoiceField :id=placementconfigchoicefield

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L815" target="_blank" rel="noopener">structures.d.ts:815</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.PlacementConfigChoiceField = object">

```ts
PlacementConfigChoiceField = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| type | <code>&quot;choice&quot;</code> |  |
| id | <code>string</code> |  |
| labelKey | <code>string</code> |  |
| options | <code>readonly object[]</code> |  |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### id <!-- {docsify-ignore} -->

##### labelKey <!-- {docsify-ignore} -->

##### options <!-- {docsify-ignore} -->

</div>

Choice placement field with labeled options.

</div>

<div class="smt-member-card">

### sandkit.api.structures.PlacementConfigDefinition :id=placementconfigdefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L826" target="_blank" rel="noopener">structures.d.ts:826</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.PlacementConfigDefinition = object">

```ts
PlacementConfigDefinition = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| structureId | <code>StructureId</code> |  |
| fields | <code>PlacementConfigField[]</code> |  |

<div class="smt-member-anchors">

##### structureId <!-- {docsify-ignore} -->

##### fields <!-- {docsify-ignore} -->

</div>

Placement rule definition for a structure type.

</div>

<div class="smt-member-card">

### sandkit.api.structures.PlanterBoxRecipeDefinitionV1 :id=planterboxrecipedefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L832" target="_blank" rel="noopener">structures.d.ts:832</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.PlanterBoxRecipeDefinitionV1 = PlanterBoxRecipeDefinitionV1">

```ts
PlanterBoxRecipeDefinitionV1 = PlanterBoxRecipeDefinitionV1
```

</div>

Planter box recipe definition shape.

</div>

<div class="smt-member-card">

### sandkit.api.structures.ShakerRecipeDefinitionV1 :id=shakerrecipedefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L834" target="_blank" rel="noopener">structures.d.ts:834</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.ShakerRecipeDefinitionV1 = ShakerRecipeDefinitionV1">

```ts
ShakerRecipeDefinitionV1 = ShakerRecipeDefinitionV1
```

</div>

Shaker recipe definition shape.

</div>

<div class="smt-member-card">

### sandkit.api.structures.KineticPressRecipeDefinitionV1 :id=kineticpressrecipedefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L836" target="_blank" rel="noopener">structures.d.ts:836</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.KineticPressRecipeDefinitionV1 = KineticPressRecipeDefinitionV1">

```ts
KineticPressRecipeDefinitionV1 = KineticPressRecipeDefinitionV1
```

</div>

Kinetic press recipe definition shape.

</div>

<div class="smt-member-card">

### sandkit.api.structures.WeightedRefineryRecipeDefinitionV1 :id=weightedrefineryrecipedefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L839" target="_blank" rel="noopener">structures.d.ts:839</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.WeightedRefineryRecipeDefinitionV1 = object">

```ts
WeightedRefineryRecipeDefinitionV1 = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| input | <code>WeightedRecipeOutput[&quot;elementType&quot;]</code> |  |
| outputs | <code>WeightedRecipeOutput[]</code> |  |

<div class="smt-member-anchors">

##### input <!-- {docsify-ignore} -->

##### outputs <!-- {docsify-ignore} -->

</div>

Weighted refinery recipe definition shape.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureProcessingDefinitionV1 :id=structureprocessingdefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L845" target="_blank" rel="noopener">structures.d.ts:845</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureProcessingDefinitionV1 = object">

```ts
StructureProcessingDefinitionV1 = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| structureType | <code>StructureRef</code> |  |
| intervalMs | <code>number</code> |  |
| process | <code>(structure: Structure, context: StructureProcessingContext) =&gt; void</code> |  |

<div class="smt-member-anchors">

##### structureType <!-- {docsify-ignore} -->

##### intervalMs <!-- {docsify-ignore} -->

##### process <!-- {docsify-ignore} -->

</div>

Custom structure processing definition shape.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.forEachOfType :id=foreachoftype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L27" target="_blank" rel="noopener">structures.d.ts:27</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) =&gt; void): void">

```ts
forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureTypeOrId | <code>[`StructureRef`](?id=structureref)</code> |  |
| callback | <code>(`structure`: [`Structure`](?id=structure)) =&gt; `void`</code> |  |

<div class="smt-member-anchors">

##### structureTypeOrId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

</div>

Call callback for each structure of the given type.

#### Example

**Main entry**

```ts
api.structures.forEachOfType("exampleStructure", (structure) => {
  api.structures.updateData(structure, { active: true });
});
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.getAtCell :id=getatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L33" target="_blank" rel="noopener">structures.d.ts:33</a></p>

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

Return the structure at a cell, or null.

[`Structure`](?id=structure) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.structures.getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L36" target="_blank" rel="noopener">structures.d.ts:36</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getDefinitionByType(structureType: StructureRef): StructureDefinition | undefined">

```ts
getDefinitionByType(structureType: StructureRef): StructureDefinition | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureType | <code>[`StructureRef`](?id=structureref)</code> |  |

<div class="smt-member-anchors">

##### structureType <!-- {docsify-ignore} -->

</div>

Return the definition for a structure type.

[`StructureDefinition`](?id=structuredefinition) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.structures.getTypeById :id=gettypebyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L41" target="_blank" rel="noopener">structures.d.ts:41</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getTypeById(structureId: string &amp; object): StructureType">

```ts
getTypeById(structureId: string & object): StructureType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureId | `string` & `object` |  |

<div class="smt-member-anchors">

##### structureId <!-- {docsify-ignore} -->

</div>

Resolve a string structure id to its type.

[`StructureType`](?id=structuretype-1)

</div>

<div class="smt-member-card">

### sandkit.api.structures.hasBuiltAtCell :id=hasbuiltatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L44" target="_blank" rel="noopener">structures.d.ts:44</a></p>

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

Return true when a built structure exists at the cell.

</div>

<div class="smt-member-card">

### sandkit.api.structures.isType :id=istype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L47" target="_blank" rel="noopener">structures.d.ts:47</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isType(structure: Structure | null, structureId: string &amp; object): boolean">

```ts
isType(structure: Structure | null, structureId: string & object): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](?id=structure) &#124; `null`</code> |  |
| structureId | `string` & `object` |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### structureId <!-- {docsify-ignore} -->

</div>

Return true when a structure matches a string id.

</div>

<div class="smt-member-card">

### sandkit.api.structures.isTypeAtCell :id=istypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L50" target="_blank" rel="noopener">structures.d.ts:50</a></p>

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

Return true when the cell structure matches a string id.

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndex :id=setspritesheetindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L53" target="_blank" rel="noopener">structures.d.ts:53</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setSpritesheetIndex(structure: Structure, index: number): void">

```ts
setSpritesheetIndex(structure: Structure, index: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](?id=structure)</code> |  |
| index | `number` |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### index <!-- {docsify-ignore} -->

</div>

Set spritesheet index on a structure instance.

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndexAtCell :id=setspritesheetindexatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L56" target="_blank" rel="noopener">structures.d.ts:56</a></p>

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

Set spritesheet index on the structure at a cell.

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndexByValue :id=setspritesheetindexbyvalue

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L70" target="_blank" rel="noopener">structures.d.ts:70</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void">

```ts
setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](?id=structure)</code> |  |
| value | `number` |  |
| thresholds | `number`[] |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### value <!-- {docsify-ignore} -->

##### thresholds <!-- {docsify-ignore} -->

</div>

Map a value through thresholds to a spritesheet index on a structure.

#### Example

```ts
api.structures.setSpritesheetIndexByValue(
  structure,
  pressure,
  [0, 25, 50, 75],
);
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndexByValueAtCell :id=setspritesheetindexbyvalueatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L89" target="_blank" rel="noopener">structures.d.ts:89</a></p>

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

Map a value through thresholds to a spritesheet index at a cell.

#### Example

```ts
api.structures.setSpritesheetIndexByValueAtCell(
  cellX,
  cellY,
  pressure,
  [0, 25, 50, 75],
);
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.update :id=update

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L103" target="_blank" rel="noopener">structures.d.ts:103</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.update(structure: Structure, options?: object): void">

```ts
update(structure: Structure, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](?id=structure)</code> |  |
| options? | <code>{ propagateToWorkers: boolean }</code> |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Push structure state updates to the game and workers.

#### Example

**Main entry**

```ts
api.structures.update(structure, {
  propagateToWorkers: true,
});
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.updateData :id=updatedata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L117" target="_blank" rel="noopener">structures.d.ts:117</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.updateData(structure: Structure, partial: Partial&lt;StructureData&gt;, options?: object): void">

```ts
updateData(structure: Structure, partial: Partial<StructureData>, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](?id=structure)</code> |  |
| partial | `Partial`<[`StructureData`](?id=structuredata)> |  |
| options? | <code>{ propagateToWorkers: boolean }</code> |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Merge partial data onto a structure instance.

#### Example

**Main entry**

```ts
api.structures.updateData(
  structure,
  { mode: "allow" },
  { propagateToWorkers: true },
);
```

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.getTypeFromId~~ :id=gettypefromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L127" target="_blank" rel="noopener">structures.d.ts:127</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [getTypeById](api/sandkit.api.structures.md?id=gettypebyid) instead.

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

[`StructureType`](?id=structuretype-1)

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.setData~~ :id=setdata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L133" target="_blank" rel="noopener">structures.d.ts:133</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [updateData](api/sandkit.api.structures.md?id=updatedata) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setData(structure: Structure, partial: Partial&lt;StructureData&gt;, options?: object): void">

```ts
setData(structure: Structure, partial: Partial<StructureData>, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | <code>[`Structure`](?id=structure)</code> |  |
| partial | `Partial`<[`StructureData`](?id=structuredata)> |  |
| options? | <code>{ propagateToWorkers: boolean }</code> |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.structures.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L173" target="_blank" rel="noopener">structures.d.ts:173</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.register(definition: SandkitStructureDefinition, options?: object): void">

```ts
register(definition: SandkitStructureDefinition, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | <code>[`SandkitStructureDefinition`](?id=sandkitstructuredefinition)</code> | Full structure definition. |
| options? | <code>When `useRawShape` is true, keep the shape matrix as-is.</code> |  |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Register a new structure definition.

#### Example

```ts
api.structures.register({
  id: "exampleJunction",
  name: "Example Junction",
  nameKey: "structures|exampleJunction|name",
  description: "Links two fixed-span endpoints.",
  descriptionKey: "structures|exampleJunction|description",
  categoryKey: "logistics",
  buildModes: [{
    type: "line",
    directions: ["horizontal", "vertical"],
    spanTiles: 4,
  }],
  linkedClearance: "allOrNothing",
  tooltipHover,
  variants: [{
    id: "exampleJunction",
    angles: [-180, -90, 0, 90, 180],
  }],
  render: {
    imageName: "exampleJunction",
    size: { width: 16, height: 16 },
  },
});
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.updateDefinition :id=updatedefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L197" target="_blank" rel="noopener">structures.d.ts:197</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.updateDefinition(structureTypeOrId: StructureRef, partial: Partial&lt;SandkitStructureDefinition&gt;, options?: object): void">

```ts
updateDefinition(structureTypeOrId: StructureRef, partial: Partial<SandkitStructureDefinition>, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureTypeOrId | <code>[`StructureRef`](?id=structureref)</code> | Structure type value or string id. |
| partial | `Partial`<[`SandkitStructureDefinition`](?id=sandkitstructuredefinition)> | Fields to merge onto the definition. |
| options? | <code>When `useRawShape` is true, keep the shape matrix as-is.</code> |  |

<div class="smt-member-anchors">

##### structureTypeOrId <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Patch fields on an existing structure definition.

#### Example

```ts
api.structures.updateDefinition("exampleJunction", {
  buildModes: [{
    type: "line",
    directions: ["horizontal", "vertical"],
    spanTiles: 6,
  }],
});
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.registerVariant :id=registervariant

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L229" target="_blank" rel="noopener">structures.d.ts:229</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.registerVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void">

```ts
registerVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| baseStructureTypeOrId | <code>[`StructureRef`](?id=structureref)</code> | Base structure type or id. |
| variant | <code>Variant id and supported rotation angles.</code> |  |
| options? | <code>Optional build-mode wiring for the variant.</code> |  |

<div class="smt-member-anchors">

##### baseStructureTypeOrId <!-- {docsify-ignore} -->

##### variant <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Add a rotated variant to a base structure type.

#### Example

```ts
api.structures.registerVariant(
  "exampleStructure",
  {
    id: "exampleStructureVertical",
    angles: [-90, 90],
  },
  {
    addBuildMode: {
      type: "line",
      directions: ["vertical"],
      spanTiles: 4,
    },
  },
);
```

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.addVariant~~ :id=addvariant

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L239" target="_blank" rel="noopener">structures.d.ts:239</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [registerVariant](api/sandkit.api.structures.md?id=registervariant) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.addVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void">

```ts
addVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| baseStructureTypeOrId | <code>[`StructureRef`](?id=structureref)</code> |  |
| variant | <code>{ id: [`StructureRef`](?id=structureref); angles: `number`[] }</code> |  |
| options? | <code>{ addBuildMode: [`StructureBuildMode`](?id=structurebuildmode) }</code> |  |

<div class="smt-member-anchors">

##### baseStructureTypeOrId <!-- {docsify-ignore} -->

##### variant <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.structures.registerPlacementConfig :id=registerplacementconfig

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L278" target="_blank" rel="noopener">structures.d.ts:278</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.registerPlacementConfig(definition: PlacementConfigDefinition): void">

```ts
registerPlacementConfig(definition: PlacementConfigDefinition): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | <code>[`PlacementConfigDefinition`](?id=placementconfigdefinition)</code> | Hotbar placement field configuration. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Register placement rules for a structure.

#### Example

```ts
api.structures.registerPlacementConfig({
  structureId: "exampleStructure",
  fields: [
    {
      type: "integer",
      id: "channel",
      label: "Channel",
      default: 1,
      min: 1,
      max: 8,
    },
    {
      type: "choice",
      id: "mode",
      labelKey: "structures|exampleStructure|mode",
      default: "input",
      options: [
        { value: "input", label: "Input" },
        { value: "output", labelKey: "structures|exampleStructure|output" },
      ],
    },
  ],
});
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.getAvailableTypes :id=getavailabletypes

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L284" target="_blank" rel="noopener">structures.d.ts:284</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getAvailableTypes(): Set&lt;StructureRef&gt;">

```ts
getAvailableTypes(): Set<StructureRef>
```

</div>

Return structure types available for building.

`Set`&lt;[`StructureRef`](?id=structureref)&gt;

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.getUnlockedTypes~~ :id=getunlockedtypes

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L290" target="_blank" rel="noopener">structures.d.ts:290</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [getAvailableTypes](api/sandkit.api.structures.md?id=getavailabletypes) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getUnlockedTypes(): Set&lt;StructureRef&gt;">

```ts
getUnlockedTypes(): Set<StructureRef>
```

</div>

`Set`&lt;[`StructureRef`](?id=structureref)&gt;

</div>

<div class="smt-member-card">

### sandkit.api.structures.isBlockedByPlayerAtCell :id=isblockedbyplayeratcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L299" target="_blank" rel="noopener">structures.d.ts:299</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isBlockedByPlayerAtCell(...args: CellCoordinates): boolean">

```ts
isBlockedByPlayerAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the player blocks building at the cell.

</div>

<div class="smt-member-card">

### sandkit.api.structures.isLauncherAtCell :id=islauncheratcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L308" target="_blank" rel="noopener">structures.d.ts:308</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isLauncherAtCell(...args: CellCoordinates): boolean">

```ts
isLauncherAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when a launcher structure is at the cell.

</div>

<div class="smt-member-card">

### sandkit.api.structures.isLockedByType :id=islockedbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L319" target="_blank" rel="noopener">structures.d.ts:319</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isLockedByType(structureType: StructureRef): boolean">

```ts
isLockedByType(structureType: StructureRef): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureType | <code>[`StructureRef`](?id=structureref)</code> | Structure type value or string id. |

<div class="smt-member-anchors">

##### structureType <!-- {docsify-ignore} -->

</div>

Return structure lock state for a type.

Official docs list [isUnlockedByType](?id=isunlockedbytype) as a deprecated alias of this
function (same implementation and return value; names differ only).

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.isUnlockedByType~~ :id=isunlockedbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L325" target="_blank" rel="noopener">structures.d.ts:325</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [isLockedByType](api/sandkit.api.structures.md?id=islockedbytype) instead. Same function as [isLockedByType](api/sandkit.api.structures.md?id=islockedbytype); return value is not inverted.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isUnlockedByType(structureType: StructureRef): boolean">

```ts
isUnlockedByType(structureType: StructureRef): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureType | <code>[`StructureRef`](?id=structureref)</code> |  |

<div class="smt-member-anchors">

##### structureType <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.structures.mapValueToSpritesheetIndex :id=mapvaluetospritesheetindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L343" target="_blank" rel="noopener">structures.d.ts:343</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.mapValueToSpritesheetIndex(value: number, thresholds: number[]): number">

```ts
mapValueToSpritesheetIndex(value: number, thresholds: number[]): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| value | `number` | Numeric value to map. |
| thresholds | `number`[] | Ascending threshold values. |

<div class="smt-member-anchors">

##### value <!-- {docsify-ignore} -->

##### thresholds <!-- {docsify-ignore} -->

</div>

Map a numeric value through thresholds to a spritesheet index.

Spritesheet frame index.

#### Example

```ts
const index = api.structures.mapValueToSpritesheetIndex(
  pressure,
  [0, 25, 50, 75],
);
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.buildAtCell :id=buildatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L354" target="_blank" rel="noopener">structures.d.ts:354</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.buildAtCell(...args: number, number, [StructureRef, StructureBuildOptions]): void">

```ts
buildAtCell(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`StructureRef`](?id=structureref), [`StructureBuildOptions`](?id=structurebuildoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Build a structure at a cell. Main-thread writes are deferred.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.buildAtCellWhenIdle~~ :id=buildatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L362" target="_blank" rel="noopener">structures.d.ts:362</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [buildAtCell](api/sandkit.api.structures.md?id=buildatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.buildAtCellWhenIdle(...args: number, number, [StructureRef, StructureBuildOptions]): void">

```ts
buildAtCellWhenIdle(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`StructureRef`](?id=structureref), [`StructureBuildOptions`](?id=structurebuildoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.structures.removeAtCell :id=removeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L374" target="_blank" rel="noopener">structures.d.ts:374</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.removeAtCell(...args: number, number, [StructureRemovalOptions]): void">

```ts
removeAtCell(...args: number, number, [StructureRemovalOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`StructureRemovalOptions`](?id=structureremovaloptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove a structure at a cell. Main-thread writes are deferred.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.removeAtCellWhenIdle~~ :id=removeatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L382" target="_blank" rel="noopener">structures.d.ts:382</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [removeAtCell](api/sandkit.api.structures.md?id=removeatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.removeAtCellWhenIdle(...args: number, number, [StructureRemovalOptions]): void">

```ts
removeAtCellWhenIdle(...args: number, number, [StructureRemovalOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`StructureRemovalOptions`](?id=structureremovaloptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.structures.removeBetweenCells :id=removebetweencells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L396" target="_blank" rel="noopener">structures.d.ts:396</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.removeBetweenCells(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void">

```ts
removeBetweenCells(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| startCellX | `number` | Start cell column. |
| startCellY | `number` | Start cell row. |
| endCellX | `number` | End cell column. |
| endCellY | `number` | End cell row. |
| options? | <code>[`StructureBulkRemovalOptions`](?id=structurebulkremovaloptions)</code> | Optional bulk-removal flags. |

<div class="smt-member-anchors">

##### startCellX <!-- {docsify-ignore} -->

##### startCellY <!-- {docsify-ignore} -->

##### endCellX <!-- {docsify-ignore} -->

##### endCellY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Remove structures between two cells. Main-thread writes are deferred.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.removeBetweenCellsWhenIdle~~ :id=removebetweencellswhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L408" target="_blank" rel="noopener">structures.d.ts:408</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [removeBetweenCells](api/sandkit.api.structures.md?id=removebetweencells) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void">

```ts
removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| startCellX | `number` |  |
| startCellY | `number` |  |
| endCellX | `number` |  |
| endCellY | `number` |  |
| options? | <code>[`StructureBulkRemovalOptions`](?id=structurebulkremovaloptions)</code> |  |

<div class="smt-member-anchors">

##### startCellX <!-- {docsify-ignore} -->

##### startCellY <!-- {docsify-ignore} -->

##### endCellX <!-- {docsify-ignore} -->

##### endCellY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.structures.removeAtCells :id=removeatcells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L431" target="_blank" rel="noopener">structures.d.ts:431</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.removeAtCells(positions: Vector2[], options?: StructureBulkRemovalOptions): void">

```ts
removeAtCells(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| positions | <code>[`Vector2`](api/shared.player.md?id=vector2)[]</code> | Cell positions to clear. |
| options? | <code>[`StructureBulkRemovalOptions`](?id=structurebulkremovaloptions)</code> | Optional bulk-removal flags. |

<div class="smt-member-anchors">

##### positions <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Remove structures at many cells. Main-thread writes are deferred.

#### Example

```ts
api.structures.removeAtCells([
  { x: firstCellX, y: firstCellY },
  { x: secondCellX, y: secondCellY },
]);
```

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.removeAtCellsWhenIdle~~ :id=removeatcellswhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L437" target="_blank" rel="noopener">structures.d.ts:437</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [removeAtCells](api/sandkit.api.structures.md?id=removeatcells) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.removeAtCellsWhenIdle(positions: Vector2[], options?: StructureBulkRemovalOptions): void">

```ts
removeAtCellsWhenIdle(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| positions | <code>[`Vector2`](api/shared.player.md?id=vector2)[]</code> |  |
| options? | <code>[`StructureBulkRemovalOptions`](?id=structurebulkremovaloptions)</code> |  |

<div class="smt-member-anchors">

##### positions <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.structures.addProcessor~~ :id=addprocessor

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L446" target="_blank" rel="noopener">structures.d.ts:446</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [processing.register](api/sandkit.api.structures.processing.md?id=register) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.structures.addProcessor(structureId: StructureRef, definition: StructureProcessorDefinitionV1): void">

```ts
addProcessor(structureId: StructureRef, definition: StructureProcessorDefinitionV1): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureId | <code>[`StructureRef`](?id=structureref)</code> |  |
| definition | <code>[`StructureProcessorDefinitionV1`](?id=structureprocessordefinitionv1)</code> |  |

<div class="smt-member-anchors">

##### structureId <!-- {docsify-ignore} -->

##### definition <!-- {docsify-ignore} -->

</div>

</div>
