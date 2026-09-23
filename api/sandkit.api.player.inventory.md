# sandkit.api.player.inventory

Player inventory helpers.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.player.inventory.hasById :id=hasbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L132" target="_blank" rel="noopener">player.d.ts:132</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.inventory.hasById(itemId: string | number): boolean">

```ts
hasById(itemId: string | number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| itemId | `string` &#124; `number` | Registered item id or numeric [items.ItemId](api/sandkit.api.items.md?id=itemid). Live checks use numeric vanilla ids; string enum names may return false. |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

</div>

Return true when inventory contains the item id.

</div>

<div class="smt-member-card">

### sandkit.api.player.inventory.addById :id=addbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L140" target="_blank" rel="noopener">player.d.ts:140</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.inventory.addById(itemId: string): void">

```ts
addById(itemId: string): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| itemId | `string` | Registered item id string. |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

</div>

Add an item to inventory by item id.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.player.inventory.addFromId~~ :id=addfromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L146" target="_blank" rel="noopener">player.d.ts:146</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [addById](api/sandkit.api.player.inventory.md?id=addbyid) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.player.inventory.addFromId(itemId: string): void">

```ts
addFromId(itemId: string): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| itemId | `string` |  |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

</div>

</div>
