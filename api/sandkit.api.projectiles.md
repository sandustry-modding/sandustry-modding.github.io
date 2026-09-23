# sandkit.api.projectiles

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.projectiles.ProjectileDefinition :id=projectiledefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L68" target="_blank" rel="noopener">projectiles.d.ts:68</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.projectiles.ProjectileDefinition = object">

```ts
ProjectileDefinition = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> |  |
| sprite | <code>{ id: string; tint: number }</code> |  |
| getOptions | <code>() =&gt; Record&lt;string, unknown&gt;</code> | Returns spawn-time physics and visual options. |
| getModData? | <code>(state: SandkitState, projectile: Projectile) =&gt; Record&lt;string, unknown&gt;</code> | Optional per-projectile mutable data factory. |

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L82" target="_blank" rel="noopener">projectiles.d.ts:82</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.projectiles.ProjectileBlueprint = object">

```ts
ProjectileBlueprint = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| opts | <code>Record&lt;string, unknown&gt;</code> |  |
| type | <code>ProjectileType</code> |  |

<div class="smt-member-anchors">

##### opts <!-- {docsify-ignore} -->

##### type <!-- {docsify-ignore} -->

</div>

Blueprint used to spawn a projectile.

</div>

<div class="smt-member-card">

### sandkit.api.projectiles.Projectile :id=projectile

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L88" target="_blank" rel="noopener">projectiles.d.ts:88</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.projectiles.Projectile = object">

```ts
Projectile = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| x | <code>number</code> |  |
| y | <code>number</code> |  |
| type | <code>ProjectileType</code> |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

##### type <!-- {docsify-ignore} -->

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L16" target="_blank" rel="noopener">projectiles.d.ts:16</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L22" target="_blank" rel="noopener">projectiles.d.ts:22</a></p>

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

### sandkit.api.projectiles.createBlueprintById :id=createblueprintbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L29" target="_blank" rel="noopener">projectiles.d.ts:29</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.projectiles.createBlueprintById(projectileId: string): ProjectileBlueprint">

```ts
createBlueprintById(projectileId: string): ProjectileBlueprint
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

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.projectiles.createBlueprintFromId~~ :id=createblueprintfromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L35" target="_blank" rel="noopener">projectiles.d.ts:35</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [createBlueprintById](api/sandkit.api.projectiles.md?id=createblueprintbyid) instead.

</div>
</div>

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

[`ProjectileBlueprint`](?id=projectileblueprint)

</div>

<div class="smt-member-card">

### sandkit.api.projectiles.getAll :id=getall

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L38" target="_blank" rel="noopener">projectiles.d.ts:38</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L44" target="_blank" rel="noopener">projectiles.d.ts:44</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L50" target="_blank" rel="noopener">projectiles.d.ts:50</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L60" target="_blank" rel="noopener">projectiles.d.ts:60</a></p>

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
| blueprint | <code>[`ProjectileBlueprint`](?id=projectileblueprint)</code> | Blueprint from [createBlueprintById](?id=createblueprintbyid). |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### angle <!-- {docsify-ignore} -->

##### blueprint <!-- {docsify-ignore} -->

</div>

Spawn a projectile at world position with angle and blueprint.

[`Projectile`](?id=projectile) The spawned projectile instance.

</div>
