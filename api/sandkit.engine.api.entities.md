# sandkit.engine.api.entities

**`Internal`**

`sandkit.engine.api.entities` — entity type registration, spawn, and queries.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.entities.createLight :id=createlight

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L15" target="_blank" rel="noopener">entities.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.entities.createLight(...args: unknown[]): unknown">

```ts
createLight(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Create a light entity attached to a parent.

</div>

<div class="smt-member-card">

### sandkit.engine.api.entities.getAll :id=getall

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L20" target="_blank" rel="noopener">entities.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.entities.getAll(...args: unknown[]): unknown">

```ts
getAll(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return all live entities.

</div>

<div class="smt-member-card">

### sandkit.engine.api.entities.getAllByType :id=getallbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L25" target="_blank" rel="noopener">entities.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.entities.getAllByType(...args: unknown[]): unknown">

```ts
getAllByType(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return all entities of one type.

</div>

<div class="smt-member-card">

### sandkit.engine.api.entities.getAllTypeDefs :id=getalltypedefs

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L30" target="_blank" rel="noopener">entities.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.entities.getAllTypeDefs(...args: unknown[]): unknown">

```ts
getAllTypeDefs(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return all registered entity type definitions.

</div>

<div class="smt-member-card">

### sandkit.engine.api.entities.getSprite :id=getsprite

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L35" target="_blank" rel="noopener">entities.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.entities.getSprite(...args: unknown[]): unknown">

```ts
getSprite(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the sprite for an entity.

</div>

<div class="smt-member-card">

### sandkit.engine.api.entities.getTypeDef :id=gettypedef

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L40" target="_blank" rel="noopener">entities.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.entities.getTypeDef(...args: unknown[]): unknown">

```ts
getTypeDef(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return one entity type definition by id.

</div>

<div class="smt-member-card">

### sandkit.engine.api.entities.launch :id=launch

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L45" target="_blank" rel="noopener">entities.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.entities.launch(...args: unknown[]): unknown">

```ts
launch(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Launch an entity with velocity or trajectory.

</div>

<div class="smt-member-card">

### sandkit.engine.api.entities.registerSpawner :id=registerspawner

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L50" target="_blank" rel="noopener">entities.d.ts:50</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.entities.registerSpawner(...args: unknown[]): unknown">

```ts
registerSpawner(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Register an entity spawner behavior.

</div>

<div class="smt-member-card">

### sandkit.engine.api.entities.registerType :id=registertype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L55" target="_blank" rel="noopener">entities.d.ts:55</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.entities.registerType(...args: unknown[]): unknown">

```ts
registerType(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Register a custom entity type.

</div>

<div class="smt-member-card">

### sandkit.engine.api.entities.spawn :id=spawn

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L60" target="_blank" rel="noopener">entities.d.ts:60</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.entities.spawn(...args: unknown[]): unknown">

```ts
spawn(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Spawn an entity instance.

</div>

<div class="smt-member-card">

### sandkit.engine.api.entities.startCapture :id=startcapture

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L65" target="_blank" rel="noopener">entities.d.ts:65</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.entities.startCapture(...args: unknown[]): unknown">

```ts
startCapture(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Start capturing entities for a tool or effect.

</div>
