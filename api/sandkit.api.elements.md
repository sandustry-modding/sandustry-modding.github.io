# sandkit.api.elements

`sandkit.api.elements` — register elements and read or change cells on the main thread.
Main thread only.

## Enumerations <!-- {docsify-ignore} -->

- [MatterType](api/sandkit.api.elements.MatterType.md)

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.elements.InteractionStructureMetadata :id=interactionstructuremetadata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L78" target="_blank" rel="noopener">elements.d.ts:78</a></p>

| Property | Type | Description |
| --- | --- | --- |
| textKey? | <code>string</code> | i18n key for custom interaction label text. |
| crossedOutWhen? | <code>{ dataField: number; equals: number }</code> | Hide the label when a data field matches a value. |
| visibleWhen? | <code>{ dataField: number; equals: number }</code> | Show the label only when a data field matches a value. |
| onlyWhenTranslated? | <code>boolean</code> | Require the text key to exist in the active locale. |

<div class="smt-member-anchors">

##### textKey? <!-- {docsify-ignore} -->

##### crossedOutWhen? <!-- {docsify-ignore} -->

##### visibleWhen? <!-- {docsify-ignore} -->

##### onlyWhenTranslated? <!-- {docsify-ignore} -->

</div>

Optional tooltip metadata on structure interactions.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementCreateOptions :id=elementcreateoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L80" target="_blank" rel="noopener">elements.d.ts:80</a></p>

| Property | Type | Description |
| --- | --- | --- |
| data? | <code>Record&lt;string, unknown&gt;</code> | Initial element data bag. |
| density? | <code>number</code> | Override element density. |
| durationTicks? | <code>number</code> | Set both max and remaining duration in simulation ticks. |
| ~~duration?~~ | <code>number</code> | Deprecated alias. |
| isFreeFalling? | <code>boolean</code> | Override free-fall state on spawn. |
| dataFields? | <code>{ field1: number; field2: number; field3: number; field4: number }</code> | Override default data fields 1–4. |
| particle? | <code>{ velocity: Vector2 }</code> | Spawn as a particle with the given velocity. |
| skipCollectorCheck? | <code>boolean</code> | Skip collector accounting when placing the element. |

<div class="smt-member-anchors">

##### data? <!-- {docsify-ignore} -->

##### density? <!-- {docsify-ignore} -->

##### durationTicks? <!-- {docsify-ignore} -->

##### ~~duration?~~ <!-- {docsify-ignore} -->

##### isFreeFalling? <!-- {docsify-ignore} -->

##### dataFields? <!-- {docsify-ignore} -->

##### particle? <!-- {docsify-ignore} -->

##### skipCollectorCheck? <!-- {docsify-ignore} -->

</div>

Options for [createAtCell](?id=createatcell), replace, and related create helpers.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementRemovalOptions :id=elementremovaloptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L116" target="_blank" rel="noopener">elements.d.ts:116</a></p>

| Property | Type | Description |
| --- | --- | --- |
| skipCollectorCheck? | <code>boolean</code> | Skip collector accounting when removing the element. |

<div class="smt-member-anchors">

##### skipCollectorCheck? <!-- {docsify-ignore} -->

</div>

Options for element removal helpers.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.elements.InteractionDestroyer :id=interactiondestroyer

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L90" target="_blank" rel="noopener">elements.d.ts:90</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionDestroyer = object">

```ts
InteractionDestroyer = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| kind | <code>&quot;destroyer&quot;</code> |  |
| items | <code>readonly string[]</code> | Item ids removed by this interaction (for example `"drill"`). |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

##### items <!-- {docsify-ignore} -->

</div>

Interaction that destroys specific items.

</div>

<div class="smt-member-card">

### sandkit.api.elements.InteractionStructure :id=interactionstructure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L97" target="_blank" rel="noopener">elements.d.ts:97</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionStructure = InteractionStructureMetadata &amp; object">

```ts
InteractionStructure = InteractionStructureMetadata & object
```

</div>

Interaction that affects specific structures.

#### Type Declaration

##### kind

```ts
kind: "structure"
```

##### structures

```ts
structures: readonly string[]
```

Structure ids shown in the interaction tooltip.

</div>

<div class="smt-member-card">

### sandkit.api.elements.InteractionEntity :id=interactionentity

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L104" target="_blank" rel="noopener">elements.d.ts:104</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionEntity = object">

```ts
InteractionEntity = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| kind | <code>&quot;entity&quot;</code> |  |
| entities | <code>readonly string[]</code> | Entity type ids referenced by the interaction. |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

##### entities <!-- {docsify-ignore} -->

</div>

Interaction that affects specific entities.

</div>

<div class="smt-member-card">

### sandkit.api.elements.InteractionFlammable :id=interactionflammable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L111" target="_blank" rel="noopener">elements.d.ts:111</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionFlammable = object">

```ts
InteractionFlammable = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| kind | <code>&quot;flammable&quot;</code> |  |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

</div>

Interaction that marks the element as flammable.

</div>

<div class="smt-member-card">

### sandkit.api.elements.InteractionMeltable :id=interactionmeltable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L113" target="_blank" rel="noopener">elements.d.ts:113</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionMeltable = object">

```ts
InteractionMeltable = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| kind | <code>&quot;meltable&quot;</code> |  |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

</div>

Interaction that marks the element as meltable.

</div>

<div class="smt-member-card">

### sandkit.api.elements.InteractionFreezable :id=interactionfreezable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L115" target="_blank" rel="noopener">elements.d.ts:115</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionFreezable = object">

```ts
InteractionFreezable = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| kind | <code>&quot;freezable&quot;</code> |  |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

</div>

Interaction that marks the element as freezable.

</div>

<div class="smt-member-card">

### sandkit.api.elements.InteractionCustom :id=interactioncustom

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L117" target="_blank" rel="noopener">elements.d.ts:117</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionCustom = InteractionStructureMetadata &amp; object">

```ts
InteractionCustom = InteractionStructureMetadata & object
```

</div>

Interaction handled by custom mod logic and tooltip text.

#### Type Declaration

##### kind

```ts
kind: "custom"
```

</div>

<div class="smt-member-card">

### sandkit.api.elements.Interaction :id=interaction

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L120" target="_blank" rel="noopener">elements.d.ts:120</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.Interaction = InteractionDestroyer | InteractionStructure | InteractionEntity | InteractionFlammable | InteractionMeltable | InteractionFreezable | InteractionCustom">

```ts
Interaction = InteractionDestroyer | InteractionStructure | InteractionEntity | InteractionFlammable | InteractionMeltable | InteractionFreezable | InteractionCustom
```

</div>

Union of element interaction kinds for tool and structure logic.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementType :id=elementtype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L19" target="_blank" rel="noopener">elements.d.ts:19</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementType = ElementType | TaggedNumber&lt;&quot;elementType&quot;&gt;">

```ts
ElementType = ElementType | TaggedNumber<"elementType">
```

</div>

Numeric element type handle.
Built-in [ElementTypeEnum](api/sandkit.enums.ElementType.md) values autocomplete; [getTypeById](?id=gettypebyid) returns a tagged handle.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementId :id=elementid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L25" target="_blank" rel="noopener">elements.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementId = LooseString&lt;never&gt;">

```ts
ElementId = LooseString<never>
```

</div>

Mod or built-in element string id.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementRef :id=elementref

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L31" target="_blank" rel="noopener">elements.d.ts:31</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementRef = ElementType | ElementId">

```ts
ElementRef = ElementType | ElementId
```

</div>

Type handle or string id accepted by lookup helpers.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementDefinition :id=elementdefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L52" target="_blank" rel="noopener">elements.d.ts:52</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementDefinition = object">

```ts
ElementDefinition = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> |  |
| nameKey | <code>string</code> |  |
| defaultDataFields? | <code>{ Index Signature: \[`key`: `string`\]: `number` }</code> |  |
| colors | <code>{ variantFromDataField1: object; variantFromDataField1.rangeMin: rangeMin?: number; variantFromDataField1.rangeMax: rangeMax?: number; variantFromDataField1.invert: invert?: boolean; variantFromDataField1.useGradient: useGradient?: boolean; variants: [number, number, number][] }</code> |  |
| density | <code>number</code> |  |
| matterType | <code>MatterType</code> |  |
| metaColor? | <code>number</code> | UI/meta color as 0xRRGGBB. |
| isGrabbable? | <code>boolean</code> | When true, the grabber can pick up this element. |
| isTransportable? | <code>boolean</code> | When true, conveyors can move this element. |
| getExtraProps? | <code>{ Returns: object; data: Record&lt;PropertyKey, any&gt; }</code> |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### nameKey <!-- {docsify-ignore} -->

##### defaultDataFields? <!-- {docsify-ignore} -->

##### colors <!-- {docsify-ignore} -->

##### density <!-- {docsify-ignore} -->

##### matterType <!-- {docsify-ignore} -->

##### metaColor? <!-- {docsify-ignore} -->

##### isGrabbable? <!-- {docsify-ignore} -->

##### isTransportable? <!-- {docsify-ignore} -->

##### getExtraProps? <!-- {docsify-ignore} -->

</div>

Mod-registered element definition snapshot.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.elements.getRegisteredTypes :id=getregisteredtypes

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L133" target="_blank" rel="noopener">elements.d.ts:133</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getRegisteredTypes(): ElementType[]">

```ts
getRegisteredTypes(): ElementType[]
```

</div>

Returns all registered element type ids.

[`ElementType`](?id=elementtype)[]

</div>

<div class="smt-member-card">

### sandkit.api.elements.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L142" target="_blank" rel="noopener">elements.d.ts:142</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.register(definition: ElementDefinition): object">

```ts
register(definition: ElementDefinition): object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | <code>[`ElementDefinition`](?id=elementdefinition)</code> | Full element definition to register. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Registers a new element and returns its assigned type id.

Object with the assigned `elementType`. elementType: ElementType

</div>

<div class="smt-member-card">

### sandkit.api.elements.updateDefinition :id=updatedefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L158" target="_blank" rel="noopener">elements.d.ts:158</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.updateDefinition(elementTypeOrId: ElementRef, partial: Partial&lt;ElementDefinition&gt;): void">

```ts
updateDefinition(elementTypeOrId: ElementRef, partial: Partial<ElementDefinition>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementTypeOrId | <code>[`ElementRef`](?id=elementref)</code> | Numeric type or string id. |
| partial | `Partial`<[`ElementDefinition`](?id=elementdefinition)> | Fields to merge onto the definition. |

<div class="smt-member-anchors">

##### elementTypeOrId <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

</div>

Updates fields on an existing element definition.

#### Example

```ts
api.elements.updateDefinition("exampleElement", {
  showInFilterPicker: false,
});
```

</div>

<div class="smt-member-card">

### sandkit.api.elements.addInteractionInfo :id=addinteractioninfo

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L170" target="_blank" rel="noopener">elements.d.ts:170</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.addInteractionInfo(elementTypeOrId: ElementRef, interaction: Interaction): void">

```ts
addInteractionInfo(elementTypeOrId: ElementRef, interaction: Interaction): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementTypeOrId | <code>[`ElementRef`](?id=elementref)</code> | Numeric type or string id. |
| interaction | <code>[`Interaction`](?id=interaction)</code> | Interaction entry to append. |

<div class="smt-member-anchors">

##### elementTypeOrId <!-- {docsify-ignore} -->

##### interaction <!-- {docsify-ignore} -->

</div>

Adds an interaction entry to an element definition.

</div>

<div class="smt-member-card">

### sandkit.api.elements.getNameByType :id=getnamebytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L178" target="_blank" rel="noopener">elements.d.ts:178</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getNameByType(elementType: ElementType): string">

```ts
getNameByType(elementType: ElementType): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementType | <code>[`ElementType`](?id=elementtype)</code> | Numeric element type. |

<div class="smt-member-anchors">

##### elementType <!-- {docsify-ignore} -->

</div>

Returns the display name for an element type.

</div>

<div class="smt-member-card">

### sandkit.api.elements.findFreeCellInStructure :id=findfreecellinstructure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L189" target="_blank" rel="noopener">elements.d.ts:189</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSizeCells: number): Vector2 | null">

```ts
findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSizeCells: number): Vector2 | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureCellX | `number` | Structure anchor cell column. |
| structureCellY | `number` | Structure anchor cell row. |
| structureSizeCells | `number` | Structure footprint size in cells. |

<div class="smt-member-anchors">

##### structureCellX <!-- {docsify-ignore} -->

##### structureCellY <!-- {docsify-ignore} -->

##### structureSizeCells <!-- {docsify-ignore} -->

</div>

Finds a free cell inside a structure footprint, or null.

[`Vector2`](api/shared.player.md?id=vector2) &#124; `null` Cell coordinates of a free cell, or null when none.

</div>

<div class="smt-member-card">

### sandkit.api.elements.createAtCell :id=createatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L218" target="_blank" rel="noopener">elements.d.ts:218</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void">

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`ElementRef`](?id=elementref), [`ElementCreateOptions`](?id=elementcreateoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Create an element at a cell. Main-entry writes are deferred; reads see the old grid.

#### Examples

**Main entry**

```ts
api.elements.createAtCell(cellX, cellY, "water", {
  durationTicks: 60,
});
```

**options.durationTicks**

```ts
api.elements.createAtCell(cellX, cellY, "steam", {
  durationTicks: 120,
});
```

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.createAtCellWhenIdle~~ :id=createatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L226" target="_blank" rel="noopener">elements.d.ts:226</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [createAtCell](api/sandkit.api.elements.md?id=createatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.createAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void">

```ts
createAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`ElementRef`](?id=elementref), [`ElementCreateOptions`](?id=elementcreateoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.replaceAtCell :id=replaceatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L239" target="_blank" rel="noopener">elements.d.ts:239</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void">

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`ElementRef`](?id=elementref), [`ElementCreateOptions`](?id=elementcreateoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Replace the element at a cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.replaceAtCellWhenIdle~~ :id=replaceatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L247" target="_blank" rel="noopener">elements.d.ts:247</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [replaceAtCell](api/sandkit.api.elements.md?id=replaceatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.replaceAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void">

```ts
replaceAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`ElementRef`](?id=elementref), [`ElementCreateOptions`](?id=elementcreateoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.removeAtCell :id=removeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L259" target="_blank" rel="noopener">elements.d.ts:259</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.removeAtCell(...args: number, number, [ElementRemovalOptions]): void">

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`ElementRemovalOptions`](?id=elementremovaloptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove the element at a cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.removeAtCellWhenIdle~~ :id=removeatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L267" target="_blank" rel="noopener">elements.d.ts:267</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [removeAtCell](api/sandkit.api.elements.md?id=removeatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.removeAtCellWhenIdle(...args: number, number, [ElementRemovalOptions]): void">

```ts
removeAtCellWhenIdle(...args: number, number, [ElementRemovalOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`ElementRemovalOptions`](?id=elementremovaloptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.teleportBetweenCells :id=teleportbetweencells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L280" target="_blank" rel="noopener">elements.d.ts:280</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void">

```ts
teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| fromCellX | `number` | Source cell column. |
| fromCellY | `number` | Source cell row. |
| toCellX | `number` | Destination cell column. |
| toCellY | `number` | Destination cell row. |

<div class="smt-member-anchors">

##### fromCellX <!-- {docsify-ignore} -->

##### fromCellY <!-- {docsify-ignore} -->

##### toCellX <!-- {docsify-ignore} -->

##### toCellY <!-- {docsify-ignore} -->

</div>

Move an element between cells. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.teleportBetweenCellsWhenIdle~~ :id=teleportbetweencellswhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L291" target="_blank" rel="noopener">elements.d.ts:291</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [teleportBetweenCells](api/sandkit.api.elements.md?id=teleportbetweencells) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void">

```ts
teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| fromCellX | `number` |  |
| fromCellY | `number` |  |
| toCellX | `number` |  |
| toCellY | `number` |  |

<div class="smt-member-anchors">

##### fromCellX <!-- {docsify-ignore} -->

##### fromCellY <!-- {docsify-ignore} -->

##### toCellX <!-- {docsify-ignore} -->

##### toCellY <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.setVelocityAtCell :id=setvelocityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L311" target="_blank" rel="noopener">elements.d.ts:311</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setVelocityAtCell(...args: number, number, [Vector2]): void">

```ts
setVelocityAtCell(...args: number, number, [Vector2]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set particle velocity at a cell. Main-entry writes are deferred; reads see the old grid.

#### Example

```ts
api.elements.setVelocityAtCell(cellX, cellY, { x: 0, y: -120 });
```

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.setVelocityAtCellWhenIdle~~ :id=setvelocityatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L317" target="_blank" rel="noopener">elements.d.ts:317</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [setVelocityAtCell](api/sandkit.api.elements.md?id=setvelocityatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setVelocityAtCellWhenIdle(...args: number, number, [Vector2]): void">

```ts
setVelocityAtCellWhenIdle(...args: number, number, [Vector2]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.addParticleVelocityAtCell :id=addparticlevelocityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L338" target="_blank" rel="noopener">elements.d.ts:338</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.addParticleVelocityAtCell(...args: number, number, [Vector2, number]): void">

```ts
addParticleVelocityAtCell(...args: number, number, [Vector2, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2), `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Add velocity to a particle at a cell. Main-entry writes are deferred; reads see the old grid.

#### Example

```ts
api.elements.addParticleVelocityAtCell(
  cellX,
  cellY,
  { x: 4, y: -8 },
  120,
);
```

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.addParticleVelocityAtCellWhenIdle~~ :id=addparticlevelocityatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L346" target="_blank" rel="noopener">elements.d.ts:346</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [addParticleVelocityAtCell](api/sandkit.api.elements.md?id=addparticlevelocityatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.addParticleVelocityAtCellWhenIdle(...args: number, number, [Vector2, number]): void">

```ts
addParticleVelocityAtCellWhenIdle(...args: number, number, [Vector2, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2), `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.convertToParticleAtCell :id=converttoparticleatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L367" target="_blank" rel="noopener">elements.d.ts:367</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.convertToParticleAtCell(...args: number, number, [Vector2]): void">

```ts
convertToParticleAtCell(...args: number, number, [Vector2]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Convert a cell element to a particle. Main-entry writes are deferred; reads see the old grid.

#### Example

```ts
api.elements.convertToParticleAtCell(
  cellX,
  cellY,
  { x: 0, y: -120 },
);
```

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.convertToParticleAtCellWhenIdle~~ :id=converttoparticleatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L373" target="_blank" rel="noopener">elements.d.ts:373</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [convertToParticleAtCell](api/sandkit.api.elements.md?id=converttoparticleatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.convertToParticleAtCellWhenIdle(...args: number, number, [Vector2]): void">

```ts
convertToParticleAtCellWhenIdle(...args: number, number, [Vector2]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.convertFromParticleAtCell :id=convertfromparticleatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L384" target="_blank" rel="noopener">elements.d.ts:384</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.convertFromParticleAtCell(...args: CellCoordinates): void">

```ts
convertFromParticleAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Convert a particle back to a solid element. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.convertFromParticleAtCellWhenIdle~~ :id=convertfromparticleatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L390" target="_blank" rel="noopener">elements.d.ts:390</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [convertFromParticleAtCell](api/sandkit.api.elements.md?id=convertfromparticleatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.convertFromParticleAtCellWhenIdle(...args: CellCoordinates): void">

```ts
convertFromParticleAtCellWhenIdle(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.setDataFieldAtCell :id=setdatafieldatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L401" target="_blank" rel="noopener">elements.d.ts:401</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): void">

```ts
setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `1` &#124; `2` &#124; `3` &#124; `4`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set a data field on the element at a cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.setDataFieldAtCellWhenIdle~~ :id=setdatafieldatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L409" target="_blank" rel="noopener">elements.d.ts:409</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [setDataFieldAtCell](api/sandkit.api.elements.md?id=setdatafieldatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setDataFieldAtCellWhenIdle(...args: [number, number, 1 | 2 | 3 | 4, number]): void">

```ts
setDataFieldAtCellWhenIdle(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `1` &#124; `2` &#124; `3` &#124; `4`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.refreshColorAtCell :id=refreshcoloratcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L420" target="_blank" rel="noopener">elements.d.ts:420</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.refreshColorAtCell(...args: CellCoordinates): void">

```ts
refreshColorAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Refresh the rendered color at a cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.refreshColorAtCellWhenIdle~~ :id=refreshcoloratcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L426" target="_blank" rel="noopener">elements.d.ts:426</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [refreshColorAtCell](api/sandkit.api.elements.md?id=refreshcoloratcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.refreshColorAtCellWhenIdle(...args: CellCoordinates): void">

```ts
refreshColorAtCellWhenIdle(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.setPhysicsAtCell :id=setphysicsatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L436" target="_blank" rel="noopener">elements.d.ts:436</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setPhysicsAtCell(...args: [number, number, number]): void">

```ts
setPhysicsAtCell(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set the physics skip mode at a cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.setPhysicsAtCellWhenIdle~~ :id=setphysicsatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L442" target="_blank" rel="noopener">elements.d.ts:442</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [setPhysicsAtCell](api/sandkit.api.elements.md?id=setphysicsatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setPhysicsAtCellWhenIdle(...args: [number, number, number]): void">

```ts
setPhysicsAtCellWhenIdle(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.setDurationAtCell :id=setdurationatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L465" target="_blank" rel="noopener">elements.d.ts:465</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setDurationAtCell(...args: [number, number, number, object]): void">

```ts
setDurationAtCell(...args: [number, number, number, object]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`, `object`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set element duration at a cell. Main-entry writes are deferred; reads see the old grid.

#### Example

**Main entry**

```ts
api.elements.setDurationAtCell(
  cellX,
  cellY,
  120,
  { updateMax: true },
);
```

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.setDurationAtCellWhenIdle~~ :id=setdurationatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L473" target="_blank" rel="noopener">elements.d.ts:473</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [setDurationAtCell](api/sandkit.api.elements.md?id=setdurationatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setDurationAtCellWhenIdle(...args: [number, number, number, object]): void">

```ts
setDurationAtCellWhenIdle(...args: [number, number, number, object]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`, `object`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.getIdByType :id=getidbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L127" target="_blank" rel="noopener">elements.d.ts:127</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getIdByType(elementType: ElementType): string &amp; object">

```ts
getIdByType(elementType: ElementType): string & object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementType | <code>[`ElementType`](?id=elementtype)</code> | Numeric element type. |

<div class="smt-member-anchors">

##### elementType <!-- {docsify-ignore} -->

</div>

Return the mod string id for a numeric element type.

`string` & `object`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getTypeById :id=gettypebyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L135" target="_blank" rel="noopener">elements.d.ts:135</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getTypeById(elementId: string &amp; object): ElementType">

```ts
getTypeById(elementId: string & object): ElementType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementId | `string` & `object` | Mod-registered element id. |

<div class="smt-member-anchors">

##### elementId <!-- {docsify-ignore} -->

</div>

Resolve a mod element string id to a type handle.

[`ElementType`](?id=elementtype)

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.getTypeFromId~~ :id=gettypefromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L141" target="_blank" rel="noopener">elements.d.ts:141</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [getTypeById](api/sandkit.api.elements.md?id=gettypebyid) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getTypeFromId(elementId: string &amp; object): ElementType">

```ts
getTypeFromId(elementId: string & object): ElementType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementId | `string` & `object` |  |

<div class="smt-member-anchors">

##### elementId <!-- {docsify-ignore} -->

</div>

[`ElementType`](?id=elementtype)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L149" target="_blank" rel="noopener">elements.d.ts:149</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getDefinitionByType(elementType: ElementType): ElementDefinition | undefined">

```ts
getDefinitionByType(elementType: ElementType): ElementDefinition | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementType | <code>[`ElementType`](?id=elementtype)</code> | Numeric element type. |

<div class="smt-member-anchors">

##### elementType <!-- {docsify-ignore} -->

</div>

Look up the definition for a type handle.

[`ElementDefinition`](?id=elementdefinition) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getTypeAtCell :id=gettypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L158" target="_blank" rel="noopener">elements.d.ts:158</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getTypeAtCell(...args: CellCoordinates): ElementType | null">

```ts
getTypeAtCell(...args: CellCoordinates): ElementType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the raw element type at a cell (may differ from resolved type).

[`ElementType`](?id=elementtype) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getResolvedTypeAtCell :id=getresolvedtypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L167" target="_blank" rel="noopener">elements.d.ts:167</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null">

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the resolved element type after overlays and particles.

[`ElementType`](?id=elementtype) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getResolvedTypeFromCellId :id=getresolvedtypefromcellid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L175" target="_blank" rel="noopener">elements.d.ts:175</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getResolvedTypeFromCellId(cellId: CellId): ElementType | null">

```ts
getResolvedTypeFromCellId(cellId: CellId): ElementType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellId | <code>[`CellId`](api/shared.nominal.md?id=cellid)</code> | Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.md?id=getcellidatcell). |

<div class="smt-member-anchors">

##### cellId <!-- {docsify-ignore} -->

</div>

Return the resolved element type from a packed cell id.

[`ElementType`](?id=elementtype) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getInfoAtCell :id=getinfoatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L184" target="_blank" rel="noopener">elements.d.ts:184</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null">

```ts
getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return element index, particle flag, and ids at a cell.

\{ `elementType`: [`ElementType`](?id=elementtype); `isParticle`: `boolean`; `cellId`: [`CellId`](api/shared.nominal.md?id=cellid); `elementIndex`: `number`; \} &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getMatterTypeAtCell :id=getmattertypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L195" target="_blank" rel="noopener">elements.d.ts:195</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getMatterTypeAtCell(...args: CellCoordinates): MatterType | null">

```ts
getMatterTypeAtCell(...args: CellCoordinates): MatterType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the matter category at a cell, or null when empty.

[`MatterType`](api/sandkit.api.elements.MatterType.md) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.isTypeAtCell :id=istypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L205" target="_blank" rel="noopener">elements.d.ts:205</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.isTypeAtCell(...args: number, number, [ElementRef]): boolean">

```ts
isTypeAtCell(...args: number, number, [ElementRef]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`ElementRef`](?id=elementref)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the cell holds the given element type or id.

</div>

<div class="smt-member-card">

### sandkit.api.elements.isFreeFallingAtCell :id=isfreefallingatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L214" target="_blank" rel="noopener">elements.d.ts:214</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.isFreeFallingAtCell(...args: CellCoordinates): boolean">

```ts
isFreeFallingAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the element at the cell is falling.

</div>

<div class="smt-member-card">

### sandkit.api.elements.getVelocityAtCell :id=getvelocityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L223" target="_blank" rel="noopener">elements.d.ts:223</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getVelocityAtCell(...args: CellCoordinates): { x: number; y: number; } | null">

```ts
getVelocityAtCell(...args: CellCoordinates): { x: number; y: number; } | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return per-cell velocity for moving elements.

\{ `x`: `number`; `y`: `number`; \} &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getDataFieldAtCell :id=getdatafieldatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L233" target="_blank" rel="noopener">elements.d.ts:233</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4]): number | null">

```ts
getDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4]): number | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `1` &#124; `2` &#124; `3` &#124; `4`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Read element data field 1–4 at a cell.

`number` &#124; `null`

</div>
