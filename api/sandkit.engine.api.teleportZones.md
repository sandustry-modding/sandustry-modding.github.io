# sandkit.engine.api.teleportZones

**`Internal`**

`sandkit.engine.api.teleportZones` — player teleport zone management.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.teleportZones.add :id=add

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L15" target="_blank" rel="noopener">teleportZones.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.teleportZones.add(...args: unknown[]): unknown">

```ts
add(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Add a teleport zone to the world.

</div>

<div class="smt-member-card">

### sandkit.engine.api.teleportZones.getAll :id=getall

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L20" target="_blank" rel="noopener">teleportZones.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.teleportZones.getAll(...args: unknown[]): unknown">

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

Return all teleport zones.

</div>

<div class="smt-member-card">

### sandkit.engine.api.teleportZones.getAtCell :id=getatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L25" target="_blank" rel="noopener">teleportZones.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.teleportZones.getAtCell(...args: unknown[]): unknown">

```ts
getAtCell(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the teleport zone at one grid cell.

</div>

<div class="smt-member-card">

### sandkit.engine.api.teleportZones.getById :id=getbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L30" target="_blank" rel="noopener">teleportZones.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.teleportZones.getById(...args: unknown[]): unknown">

```ts
getById(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return one teleport zone by id.

</div>

<div class="smt-member-card">

### sandkit.engine.api.teleportZones.remove :id=remove

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L35" target="_blank" rel="noopener">teleportZones.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.teleportZones.remove(...args: unknown[]): unknown">

```ts
remove(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove a teleport zone.

</div>

<div class="smt-member-card">

### sandkit.engine.api.teleportZones.spawnDefaultParticles :id=spawndefaultparticles

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L40" target="_blank" rel="noopener">teleportZones.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.teleportZones.spawnDefaultParticles(...args: unknown[]): unknown">

```ts
spawnDefaultParticles(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Spawn default particles at a teleport zone.

</div>

<div class="smt-member-card">

### sandkit.engine.api.teleportZones.teleportPlayerTo :id=teleportplayerto

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L45" target="_blank" rel="noopener">teleportZones.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.teleportZones.teleportPlayerTo(...args: unknown[]): unknown">

```ts
teleportPlayerTo(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Teleport the player to a zone or position.

</div>
