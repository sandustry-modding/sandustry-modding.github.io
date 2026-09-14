# sandkit.api.projectiles

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.projectiles.ProjectileDefinition :id=projectiledefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L59" target="_blank" rel="noopener">projectiles.d.ts:59</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> |  |
| sprite | <code>{ id: string; tint: number }</code> |  |
| getOptions | <code>() =&gt; Record&lt;string, unknown&gt;</code> | Returns spawn-time physics and visual options. |
| getModData? | <code>(state: unknown, projectile: Projectile) =&gt; Record&lt;string, unknown&gt;</code> | Optional per-projectile mutable data factory. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### sprite <!-- {docsify-ignore} -->

##### getOptions <!-- {docsify-ignore} -->

##### getModData? <!-- {docsify-ignore} -->

</div>

Mod-registered projectile definition.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.projectiles.ProjectileBlueprint :id=projectileblueprint

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L73" target="_blank" rel="noopener">projectiles.d.ts:73</a></p>

| Property | Type | Description |
| --- | --- | --- |
| opts | <code>Record&lt;string, unknown&gt;</code> |  |
| type | <code>unknown</code> |  |

<div class="smt-member-anchors">

##### opts <!-- {docsify-ignore} -->

##### type <!-- {docsify-ignore} -->

</div>

Blueprint used to spawn a projectile.

</div>

<div class="smt-member-card">

### sandkit.api.projectiles.Projectile :id=projectile

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L79" target="_blank" rel="noopener">projectiles.d.ts:79</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| x | <code>number</code> |  |
| y | <code>number</code> |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

</div>

Active projectile instance.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.projectiles.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L13" target="_blank" rel="noopener">projectiles.d.ts:13</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.projectiles.register(definition: ProjectileDefinition): void">

```ts
register(definition: ProjectileDefinition): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | <code>[`ProjectileDefinition`](?id=projectiledefinition)</code> | Projectile id, sprite, and runtime options factory. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Register a projectile definition.

</div>

<div class="smt-member-card">

### sandkit.api.projectiles.getDefinitionById :id=getdefinitionbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L19" target="_blank" rel="noopener">projectiles.d.ts:19</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.projectiles.getDefinitionById(projectileId: string): ProjectileDefinition | undefined">

```ts
getDefinitionById(projectileId: string): ProjectileDefinition | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| projectileId | `string` | Registered projectile id. |

<div class="smt-member-anchors">

##### projectileId <!-- {docsify-ignore} -->

</div>

Return a projectile definition by string id.

[`ProjectileDefinition`](?id=projectiledefinition) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.projectiles.createBlueprintFromId :id=createblueprintfromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L26" target="_blank" rel="noopener">projectiles.d.ts:26</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.projectiles.createBlueprintFromId(projectileId: string): ProjectileBlueprint">

```ts
createBlueprintFromId(projectileId: string): ProjectileBlueprint
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| projectileId | `string` | Registered projectile id. |

<div class="smt-member-anchors">

##### projectileId <!-- {docsify-ignore} -->

</div>

Build a spawn blueprint from a projectile string id.

[`ProjectileBlueprint`](?id=projectileblueprint) Blueprint passed to [spawnAtWorld](?id=spawnatworld).

</div>

<div class="smt-member-card">

### sandkit.api.projectiles.getAll :id=getall

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L29" target="_blank" rel="noopener">projectiles.d.ts:29</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.projectiles.getAll(): Projectile[]">

```ts
getAll(): Projectile[]
```

</div>

Return all active projectiles.

[`Projectile`](?id=projectile)[]

</div>

<div class="smt-member-card">

### sandkit.api.projectiles.getById :id=getbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L35" target="_blank" rel="noopener">projectiles.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.projectiles.getById(projectileId: number): Projectile | undefined">

```ts
getById(projectileId: number): Projectile | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| projectileId | `number` | Runtime projectile id. |

<div class="smt-member-anchors">

##### projectileId <!-- {docsify-ignore} -->

</div>

Return a projectile by numeric id.

[`Projectile`](?id=projectile) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.projectiles.remove :id=remove

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L41" target="_blank" rel="noopener">projectiles.d.ts:41</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.projectiles.remove(projectile: Projectile): void">

```ts
remove(projectile: Projectile): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| projectile | <code>[`Projectile`](?id=projectile)</code> | Projectile instance to remove. |

<div class="smt-member-anchors">

##### projectile <!-- {docsify-ignore} -->

</div>

Remove a projectile from the world.

</div>

<div class="smt-member-card">

### sandkit.api.projectiles.spawnAtWorld :id=spawnatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L51" target="_blank" rel="noopener">projectiles.d.ts:51</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.projectiles.spawnAtWorld(worldX: number, worldY: number, angle: number, blueprint: ProjectileBlueprint): Projectile">

```ts
spawnAtWorld(worldX: number, worldY: number, angle: number, blueprint: ProjectileBlueprint): Projectile
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | Spawn x position in world pixels. |
| worldY | `number` | Spawn y position in world pixels. |
| angle | `number` | Launch angle in radians. |
| blueprint | <code>[`ProjectileBlueprint`](?id=projectileblueprint)</code> | Blueprint from [createBlueprintFromId](?id=createblueprintfromid). |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### angle <!-- {docsify-ignore} -->

##### blueprint <!-- {docsify-ignore} -->

</div>

Spawn a projectile at world position with angle and blueprint.

[`Projectile`](?id=projectile) The spawned projectile instance.

</div>
