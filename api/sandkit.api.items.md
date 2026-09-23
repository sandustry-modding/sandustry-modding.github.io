# sandkit.api.items

`sandkit.api.items` — register custom inventory items and query active items.
Main thread only.

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.items.ItemDefinition :id=itemdefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L10" target="_blank" rel="noopener">items.d.ts:10</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.items.ItemDefinition&lt;State = unknown, Action = unknown&gt; = object">

```ts
sandkit.api.items.ItemDefinition<State = unknown, Action = unknown> = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>ItemId</code> | Registered item id. |
| name? | <code>string</code> | Plain display name (when not using [nameKey](?id=namekey)). |
| nameKey? | <code>string</code> | Display name translation key. |
| handleAction? | <code>(state: State, action: Action) =&gt; unknown</code> | Handles item use actions. |
| afterRender? | <code>(state: State) =&gt; void</code> | Called after the item is rendered each frame. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### name? <!-- {docsify-ignore} -->

##### nameKey? <!-- {docsify-ignore} -->

##### handleAction? <!-- {docsify-ignore} -->

##### afterRender? <!-- {docsify-ignore} -->

</div>

Definition for a mod-registered inventory item.

`State` = `unknown` `Action` = `unknown`

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.items.ItemId :id=itemid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L80" target="_blank" rel="noopener">items.d.ts:80</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.items.ItemId = ItemId | LooseString&lt;never&gt;">

```ts
ItemId = ItemId | LooseString<never>
```

</div>

Inventory item id.
Built-in [ItemIdEnum](api/sandkit.enums.ItemId.md) values autocomplete; custom string ids are allowed.

</div>

<div class="smt-member-card">

### sandkit.api.items.ItemType :id=itemtype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L85" target="_blank" rel="noopener">items.d.ts:85</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.items.ItemType = ItemType | TaggedNumber&lt;&quot;itemType&quot;&gt;">

```ts
ItemType = ItemType | TaggedNumber<"itemType">
```

</div>

Item category handle.
Built-in [ItemTypeEnum](api/sandkit.enums.ItemType.md) values autocomplete.

</div>

<div class="smt-member-card">

### sandkit.api.items.ModItem :id=moditem

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L87" target="_blank" rel="noopener">items.d.ts:87</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.items.ModItem = unknown">

```ts
ModItem = unknown
```

</div>

Runtime item instance (not yet typed in declarations).

</div>

## Variables <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.items.spriteMounts :id=spritemounts

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L66" target="_blank" rel="noopener">items.d.ts:66</a></p>

<div class="smt-member-sig" data-sig="const spriteMounts: Readonly&lt;Record&lt;string, string&gt;&gt;">

```ts
const spriteMounts: Readonly<Record<string, string>>
```

</div>

Sprite mount id map for item display.
Live keys include `onehand`, `backhand`, and `cryoblaster`.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.items.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L28" target="_blank" rel="noopener">items.d.ts:28</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.items.register(definition: ItemDefinition): void">

```ts
register(definition: ItemDefinition): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | <code>[`ItemDefinition`](?id=itemdefinition)</code> | Item id, handlers, and display metadata. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Registers a new item definition.

</div>

<div class="smt-member-card">

### sandkit.api.items.updateDefinition :id=updatedefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L41" target="_blank" rel="noopener">items.d.ts:41</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.items.updateDefinition(itemId: ItemId, partial: Partial&lt;ItemDefinition&gt;): void">

```ts
updateDefinition(itemId: ItemId, partial: Partial<ItemDefinition>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| itemId | <code>[`ItemId`](?id=itemid)</code> | Registered item id. |
| partial | `Partial`<[`ItemDefinition`](?id=itemdefinition)> | Fields to merge into the definition. |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

</div>

Updates fields on an existing item definition.

#### Example

```ts
api.items.updateDefinition("exampleTool", {
  name: "Updated Example Tool",
});
```

</div>

<div class="smt-member-card">

### sandkit.api.items.getDefinitionById :id=getdefinitionbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L46" target="_blank" rel="noopener">items.d.ts:46</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.items.getDefinitionById(itemId: ItemId): ItemDefinition&lt;unknown, unknown&gt; | undefined">

```ts
getDefinitionById(itemId: ItemId): ItemDefinition<unknown, unknown> | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| itemId | <code>[`ItemId`](?id=itemid)</code> | Registered item id. |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

</div>

Returns the item definition for an id, or undefined.

[`ItemDefinition`](?id=itemdefinition)&lt;`unknown`, `unknown`&gt; &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.items.createById :id=createbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L51" target="_blank" rel="noopener">items.d.ts:51</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.items.createById(itemId: ItemId): unknown">

```ts
createById(itemId: ItemId): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| itemId | <code>[`ItemId`](?id=itemid)</code> | Registered item id. |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

</div>

Creates a runtime item instance from an id.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.items.createFromId~~ :id=createfromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L56" target="_blank" rel="noopener">items.d.ts:56</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [createById](api/sandkit.api.items.md?id=createbyid) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.items.createFromId(itemId: ItemId): unknown">

```ts
createFromId(itemId: ItemId): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| itemId | <code>[`ItemId`](?id=itemid)</code> | Registered item id. |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.items.getRegisteredIds :id=getregisteredids

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L61" target="_blank" rel="noopener">items.d.ts:61</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.items.getRegisteredIds(): (string | number | string &amp; object)[]">

```ts
getRegisteredIds(): (string | number | string & object)[]
```

</div>

Return registered item ids.
Mix of numeric vanilla [ItemId](?id=itemid) values and string mod ids.

(`string` &#124; `number` &#124; `string` & `object`)[]

</div>

<div class="smt-member-card">

### sandkit.api.items.getActive :id=getactive

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L68" target="_blank" rel="noopener">items.d.ts:68</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.items.getActive(): ItemDefinition&lt;unknown, unknown&gt; | undefined">

```ts
getActive(): ItemDefinition<unknown, unknown> | undefined
```

</div>

Returns the item definition for the active hotbar slot.

[`ItemDefinition`](?id=itemdefinition)&lt;`unknown`, `unknown`&gt; &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.items.isActiveById :id=isactivebyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L74" target="_blank" rel="noopener">items.d.ts:74</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.items.isActiveById(itemId: ItemId, itemType?: ItemType): boolean">

```ts
isActiveById(itemId: ItemId, itemType?: ItemType): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| itemId | <code>[`ItemId`](?id=itemid)</code> | Item id or numeric type to compare. |
| itemType? | <code>[`ItemType`](?id=itemtype)</code> | Optional item type discriminator. |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

##### itemType? <!-- {docsify-ignore} -->

</div>

Returns true when the given item is the active hotbar item.

</div>
