# sandkit.api.pickups

World pickups — spawn, collect, and query pickup instances.

Available as `sandkit.api.pickups`.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.pickups.WorldItemLight :id=worlditemlight

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L20" target="_blank" rel="noopener">pickups.d.ts:20</a></p>

| Property | Type | Description |
| --- | --- | --- |
| brightness? | <code>number</code> | Light brightness multiplier. Default 1. |
| size? | <code>number</code> | Light radius in world pixels. Default 100. |
| color? | <code>[number, number, number] &#124; [number, number, number, number]</code> | RGB or RGBA color components in 0–1 range. |

<div class="smt-member-anchors">

##### brightness? <!-- {docsify-ignore} -->

##### size? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

</div>

Optional point light attached when spawning a pickup.

</div>

<div class="smt-member-card">

### sandkit.api.pickups.WorldItem :id=worlditem

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L30" target="_blank" rel="noopener">pickups.d.ts:30</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| x | <code>number</code> |  |
| y | <code>number</code> |  |
| type | <code>PickupType</code> |  |
| data | <code>Record&lt;string, unknown&gt;</code> |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

##### type <!-- {docsify-ignore} -->

##### data <!-- {docsify-ignore} -->

</div>

Active world pickup instance.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.pickups.PickupType :id=pickuptype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L11" target="_blank" rel="noopener">pickups.d.ts:11</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.PickupType = PickupType">

```ts
PickupType = PickupType
```

</div>

Official pickup type discriminator.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.pickups.WorldItemType~~ :id=worlditemtype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L17" target="_blank" rel="noopener">pickups.d.ts:17</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [PickupType](api/sandkit.api.pickups.md?id=pickuptype) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.WorldItemType = PickupType">

```ts
WorldItemType = PickupType
```

</div>

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.pickups.spawnAtWorld :id=spawnatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L49" target="_blank" rel="noopener">pickups.d.ts:49</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.spawnAtWorld(type: PickupType, worldX: number, worldY: number, data?: Record&lt;string, unknown&gt;, light?: WorldItemLight): WorldItem">

```ts
spawnAtWorld(type: PickupType, worldX: number, worldY: number, data?: Record<string, unknown>, light?: WorldItemLight): WorldItem
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| type | <code>[`PickupType`](api/sandkit.enums.PickupType.md)</code> | Pickup type discriminator. |
| worldX | `number` | World x position in pixels. |
| worldY | `number` | World y position in pixels. |
| data? | `Record`<`string`, `unknown`> | Optional per-item data bag copied onto the instance. |
| light? | <code>[`WorldItemLight`](?id=worlditemlight)</code> | Optional point light spawned with the pickup. |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### data? <!-- {docsify-ignore} -->

##### light? <!-- {docsify-ignore} -->

</div>

Spawn a pickup at world position.

[`WorldItem`](?id=worlditem) The spawned pickup instance.

</div>

<div class="smt-member-card">

### sandkit.api.pickups.remove :id=remove

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L63" target="_blank" rel="noopener">pickups.d.ts:63</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.remove(pickup: WorldItem): void">

```ts
remove(pickup: WorldItem): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pickup | <code>[`WorldItem`](?id=worlditem)</code> | Pickup returned from spawn or lookup helpers. |

<div class="smt-member-anchors">

##### pickup <!-- {docsify-ignore} -->

</div>

Remove a pickup instance from the world.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.pickups.destroy~~ :id=destroy

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L69" target="_blank" rel="noopener">pickups.d.ts:69</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [remove](api/sandkit.api.pickups.md?id=remove) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.destroy(pickup: WorldItem): void">

```ts
destroy(pickup: WorldItem): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pickup | <code>[`WorldItem`](?id=worlditem)</code> |  |

<div class="smt-member-anchors">

##### pickup <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.pickups.pickUp :id=pickup

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L78" target="_blank" rel="noopener">pickups.d.ts:78</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.pickUp(pickup: WorldItem): boolean">

```ts
pickUp(pickup: WorldItem): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pickup | <code>[`WorldItem`](?id=worlditem)</code> | Pickup to collect. |

<div class="smt-member-anchors">

##### pickup <!-- {docsify-ignore} -->

</div>

Pick up a world item into inventory.

True when the item was collected.

</div>

<div class="smt-member-card">

### sandkit.api.pickups.getAll :id=getall

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L84" target="_blank" rel="noopener">pickups.d.ts:84</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.getAll(): WorldItem[]">

```ts
getAll(): WorldItem[]
```

</div>

Return all active pickups.

[`WorldItem`](?id=worlditem)[]

</div>

<div class="smt-member-card">

### sandkit.api.pickups.getById :id=getbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L92" target="_blank" rel="noopener">pickups.d.ts:92</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.getById(pickupId: number): WorldItem | undefined">

```ts
getById(pickupId: number): WorldItem | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pickupId | `number` | Runtime pickup id. |

<div class="smt-member-anchors">

##### pickupId <!-- {docsify-ignore} -->

</div>

Return a pickup by numeric id.

[`WorldItem`](?id=worlditem) &#124; `undefined`

</div>
