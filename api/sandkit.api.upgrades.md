# sandkit.api.upgrades

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.upgrades.UpgradeDefinition :id=upgradedefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L53" target="_blank" rel="noopener">upgrades.d.ts:53</a></p>

| Property | Type | Description |
| --- | --- | --- |
| itemId | <code>string</code> |  |
| itemNameKey? | <code>string</code> |  |
| categoryId? | <code>string</code> |  |
| upgrade | <code>{ id: string; nameKey: string; descriptionKey: string; maxLevel: number; costs: number[]; oneOff: boolean }</code> |  |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

##### itemNameKey? <!-- {docsify-ignore} -->

##### categoryId? <!-- {docsify-ignore} -->

##### upgrade <!-- {docsify-ignore} -->

</div>

Upgrade definition registered for an item.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.upgrades.UpgradeCategoryDefinition :id=upgradecategorydefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L69" target="_blank" rel="noopener">upgrades.d.ts:69</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Category identifier referenced by upgrades. |
| nameKey? | <code>string</code> | Display name translation key. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### nameKey? <!-- {docsify-ignore} -->

</div>

Upgrade category definition shape.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.upgrades.registerCategory :id=registercategory

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L13" target="_blank" rel="noopener">upgrades.d.ts:13</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.upgrades.registerCategory(definition: UpgradeCategoryDefinition): void">

```ts
registerCategory(definition: UpgradeCategoryDefinition): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | <code>[`UpgradeCategoryDefinition`](?id=upgradecategorydefinition)</code> | Category id and display metadata. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Register an upgrade category.

</div>

<div class="smt-member-card">

### sandkit.api.upgrades.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L18" target="_blank" rel="noopener">upgrades.d.ts:18</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.upgrades.register(definition: UpgradeDefinition): void">

```ts
register(definition: UpgradeDefinition): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | <code>[`UpgradeDefinition`](?id=upgradedefinition)</code> | Item id, upgrade id, costs, and level metadata. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Register an upgrade definition.

</div>

<div class="smt-member-card">

### sandkit.api.upgrades.updateDefinition :id=updatedefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L25" target="_blank" rel="noopener">upgrades.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.upgrades.updateDefinition(itemId: string, upgradeId: string, partial: Partial&lt;UpgradeDefinition&gt;): void">

```ts
updateDefinition(itemId: string, upgradeId: string, partial: Partial<UpgradeDefinition>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| itemId | `string` | Parent item id. |
| upgradeId | `string` | Upgrade id within the item. |
| partial | `Partial`<[`UpgradeDefinition`](?id=upgradedefinition)> | Fields to merge into the definition. |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

##### upgradeId <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

</div>

Patch fields on an existing upgrade definition.

</div>

<div class="smt-member-card">

### sandkit.api.upgrades.getLevelById :id=getlevelbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L35" target="_blank" rel="noopener">upgrades.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.upgrades.getLevelById(itemId: string, upgradeId: string): number">

```ts
getLevelById(itemId: string, upgradeId: string): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| itemId | `string` | Parent item id. |
| upgradeId | `string` | Upgrade id within the item. |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

##### upgradeId <!-- {docsify-ignore} -->

</div>

Return the current purchased level for an upgrade.

</div>

<div class="smt-member-card">

### sandkit.api.upgrades.getAvailableLevelById :id=getavailablelevelbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L41" target="_blank" rel="noopener">upgrades.d.ts:41</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.upgrades.getAvailableLevelById(itemId: string, upgradeId: string): number">

```ts
getAvailableLevelById(itemId: string, upgradeId: string): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| itemId | `string` | Parent item id. |
| upgradeId | `string` | Upgrade id within the item. |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

##### upgradeId <!-- {docsify-ignore} -->

</div>

Return the maximum available level for an upgrade.

</div>

<div class="smt-member-card">

### sandkit.api.upgrades.setLevelById :id=setlevelbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L50" target="_blank" rel="noopener">upgrades.d.ts:50</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.upgrades.setLevelById(itemId: string, upgradeId: string, level: number): void">

```ts
setLevelById(itemId: string, upgradeId: string, level: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| itemId | `string` | Parent item id. |
| upgradeId | `string` | Upgrade id within the item. |
| level | `number` | Level to set. |

<div class="smt-member-anchors">

##### itemId <!-- {docsify-ignore} -->

##### upgradeId <!-- {docsify-ignore} -->

##### level <!-- {docsify-ignore} -->

</div>

Set the purchased level for an upgrade.

</div>
