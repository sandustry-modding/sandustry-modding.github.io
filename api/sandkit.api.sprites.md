# sandkit.api.sprites

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.sprites.SpriteLoadOptions :id=spriteloadoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L44" target="_blank" rel="noopener">sprites.d.ts:44</a></p>

| Property | Type | Description |
| --- | --- | --- |
| tint? | <code>number</code> | Packed RGB tint applied after load. |

<div class="smt-member-anchors">

##### tint? <!-- {docsify-ignore} -->

</div>

Options for [load](?id=load) and [loadFromMod](?id=loadfrommod).

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.sprites.LoadedSprite :id=loadedsprite

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L41" target="_blank" rel="noopener">sprites.d.ts:41</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sprites.LoadedSprite = unknown">

```ts
LoadedSprite = unknown
```

</div>

Loaded sprite handle (runtime texture or display object).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.sprites.load :id=load

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L15" target="_blank" rel="noopener">sprites.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sprites.load(spriteId: string, path: string, options?: SpriteLoadOptions): Promise&lt;void&gt;">

```ts
load(spriteId: string, path: string, options?: SpriteLoadOptions): Promise<void>
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| spriteId | `string` | Id used with [getById](?id=getbyid). |
| path | `string` | URL or asset path to load. |
| options? | <code>[`SpriteLoadOptions`](?id=spriteloadoptions)</code> | Optional tint and load options. |

<div class="smt-member-anchors">

##### spriteId <!-- {docsify-ignore} -->

##### path <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Load a sprite from a URL path.

`Promise`&lt;`void`&gt;

</div>

<div class="smt-member-card">

### sandkit.api.sprites.loadFromMod :id=loadfrommod

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L22" target="_blank" rel="noopener">sprites.d.ts:22</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sprites.loadFromMod(spriteId: string, relativePath: string, options?: SpriteLoadOptions): Promise&lt;void&gt;">

```ts
loadFromMod(spriteId: string, relativePath: string, options?: SpriteLoadOptions): Promise<void>
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| spriteId | `string` | Id used with [getById](?id=getbyid). |
| relativePath | `string` | Path relative to the mod folder. |
| options? | <code>[`SpriteLoadOptions`](?id=spriteloadoptions)</code> | Optional tint and load options. |

<div class="smt-member-anchors">

##### spriteId <!-- {docsify-ignore} -->

##### relativePath <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Load a sprite from the calling mod folder.

`Promise`&lt;`void`&gt;

</div>

<div class="smt-member-card">

### sandkit.api.sprites.getById :id=getbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L31" target="_blank" rel="noopener">sprites.d.ts:31</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sprites.getById(spriteId: string): unknown">

```ts
getById(spriteId: string): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| spriteId | `string` | Sprite id from [load](?id=load) or [loadFromMod](?id=loadfrommod). |

<div class="smt-member-anchors">

##### spriteId <!-- {docsify-ignore} -->

</div>

Return a loaded sprite by id.

</div>

<div class="smt-member-card">

### sandkit.api.sprites.hideAllPlayerModSprites :id=hideallplayermodsprites

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L33" target="_blank" rel="noopener">sprites.d.ts:33</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sprites.hideAllPlayerModSprites(): void">

```ts
hideAllPlayerModSprites(): void
```

</div>

Hide all player mod-attached sprites.

</div>

<div class="smt-member-card">

### sandkit.api.sprites.rotatePlayerModSprites :id=rotateplayermodsprites

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L38" target="_blank" rel="noopener">sprites.d.ts:38</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sprites.rotatePlayerModSprites(angle: number): void">

```ts
rotatePlayerModSprites(angle: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| angle | `number` | Rotation in radians. |

<div class="smt-member-anchors">

##### angle <!-- {docsify-ignore} -->

</div>

Rotate all player mod-attached sprites by angle.

</div>
