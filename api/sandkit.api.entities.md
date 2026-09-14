# sandkit.api.entities

Entity spawn, capture, and lifecycle helpers.

Available as `sandkit.api.entities`.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.entities.Entity :id=entity

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L70" target="_blank" rel="noopener">entities.d.ts:70</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| x | <code>number</code> |  |
| y | <code>number</code> |  |
| targetX? | <code>number</code> |  |
| targetY? | <code>number</code> |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

##### targetX? <!-- {docsify-ignore} -->

##### targetY? <!-- {docsify-ignore} -->

</div>

Active entity instance in the world.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.entities.getById :id=getbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L14" target="_blank" rel="noopener">entities.d.ts:14</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.entities.getById(entityId: number): Entity | undefined">

```ts
getById(entityId: number): Entity | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| entityId | `number` | Runtime entity id. |

<div class="smt-member-anchors">

##### entityId <!-- {docsify-ignore} -->

</div>

Return one live entity by runtime id.

[`Entity`](?id=entity) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.entities.getAllByType :id=getallbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L22" target="_blank" rel="noopener">entities.d.ts:22</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.entities.getAllByType(entityTypeId: string): Entity[]">

```ts
getAllByType(entityTypeId: string): Entity[]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| entityTypeId | `string` | Registered entity type string id. |

<div class="smt-member-anchors">

##### entityTypeId <!-- {docsify-ignore} -->

</div>

Return all live entities of one type.

[`Entity`](?id=entity)[]

</div>

<div class="smt-member-card">

### sandkit.api.entities.spawnAtWorld :id=spawnatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L33" target="_blank" rel="noopener">entities.d.ts:33</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.entities.spawnAtWorld(entityTypeId: string, worldX: number, worldY: number): Entity">

```ts
spawnAtWorld(entityTypeId: string, worldX: number, worldY: number): Entity
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| entityTypeId | `string` | Registered entity type string id. |
| worldX | `number` | Spawn x position in world pixels. |
| worldY | `number` | Spawn y position in world pixels. |

<div class="smt-member-anchors">

##### entityTypeId <!-- {docsify-ignore} -->

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

</div>

Spawn an entity at world position.

[`Entity`](?id=entity) The spawned entity instance.

</div>

<div class="smt-member-card">

### sandkit.api.entities.remove :id=remove

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L41" target="_blank" rel="noopener">entities.d.ts:41</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.entities.remove(entityId: number): void">

```ts
remove(entityId: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| entityId | `number` | Runtime entity id. |

<div class="smt-member-anchors">

##### entityId <!-- {docsify-ignore} -->

</div>

Remove an entity from the world.

</div>

<div class="smt-member-card">

### sandkit.api.entities.launch :id=launch

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L51" target="_blank" rel="noopener">entities.d.ts:51</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.entities.launch(entityId: number, angleRadians: number, speed?: number): void">

```ts
launch(entityId: number, angleRadians: number, speed?: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| entityId | `number` | Runtime entity id. |
| angleRadians | `number` | Launch angle in radians. |
| speed? | `number` | Optional launch speed. |

<div class="smt-member-anchors">

##### entityId <!-- {docsify-ignore} -->

##### angleRadians <!-- {docsify-ignore} -->

##### speed? <!-- {docsify-ignore} -->

</div>

Launch an entity with angle and optional speed.

</div>

<div class="smt-member-card">

### sandkit.api.entities.startCapture :id=startcapture

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L59" target="_blank" rel="noopener">entities.d.ts:59</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.entities.startCapture(entityId: number): void">

```ts
startCapture(entityId: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| entityId | `number` | Runtime entity id. |

<div class="smt-member-anchors">

##### entityId <!-- {docsify-ignore} -->

</div>

Start capture for an entity (for example vacuum capture).

</div>

<div class="smt-member-card">

### sandkit.api.entities.collect :id=collect

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L67" target="_blank" rel="noopener">entities.d.ts:67</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.entities.collect(entityId: number): void">

```ts
collect(entityId: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| entityId | `number` | Runtime entity id. |

<div class="smt-member-anchors">

##### entityId <!-- {docsify-ignore} -->

</div>

Collect an entity (for example into inventory or storage).

</div>
