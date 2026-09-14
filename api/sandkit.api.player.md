# sandkit.api.player

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.player.setPositionAtWorld :id=setpositionatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L31" target="_blank" rel="noopener">player.d.ts:31</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.setPositionAtWorld(worldX: number, worldY: number): void">

```ts
setPositionAtWorld(worldX: number, worldY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World x position in pixels. |
| worldY | `number` | World y position in pixels. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

</div>

Set the player world position.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.player.setWorldPosition~~ :id=setworldposition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L40" target="_blank" rel="noopener">player.d.ts:40</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [setPositionAtWorld](api/sandkit.api.player.md?id=setpositionatworld) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.player.setWorldPosition(worldX: number, worldY: number): void">

```ts
setWorldPosition(worldX: number, worldY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World x position in pixels. |
| worldY | `number` | World y position in pixels. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.player.setVelocity :id=setvelocity

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L49" target="_blank" rel="noopener">player.d.ts:49</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.setVelocity(velocityX: number, velocityY: number): void">

```ts
setVelocity(velocityX: number, velocityY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| velocityX | `number` | Horizontal velocity in pixels per second. |
| velocityY | `number` | Vertical velocity in pixels per second. |

<div class="smt-member-anchors">

##### velocityX <!-- {docsify-ignore} -->

##### velocityY <!-- {docsify-ignore} -->

</div>

Set the player velocity.

</div>

<div class="smt-member-card">

### sandkit.api.player.setMovementSpeedMultiplier :id=setmovementspeedmultiplier

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L58" target="_blank" rel="noopener">player.d.ts:58</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.setMovementSpeedMultiplier(multiplier: number): void">

```ts
setMovementSpeedMultiplier(multiplier: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| multiplier | `number` | Speed scale factor (`1` is default walk). `0` freezes movement. Vanilla Sprint Boost (Shift burst + meter) only runs when this value is exactly `1`. |

<div class="smt-member-anchors">

##### multiplier <!-- {docsify-ignore} -->

</div>

Set the movement speed multiplier.

</div>

<div class="smt-member-card">

### sandkit.api.player.setMovementMode :id=setmovementmode

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L67" target="_blank" rel="noopener">player.d.ts:67</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.setMovementMode(mode: &quot;normal&quot; | &quot;hover&quot;): boolean">

```ts
setMovementMode(mode: "normal" | "hover"): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| mode | `"normal"` &#124; `"hover"` | `"normal"` for default physics, or `"hover"` for hover flight. |

<div class="smt-member-anchors">

##### mode <!-- {docsify-ignore} -->

</div>

Set movement mode to normal or hover.

True when the mode changes.

</div>

<div class="smt-member-card">

### sandkit.api.player.isOnGround :id=isonground

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L77" target="_blank" rel="noopener">player.d.ts:77</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.isOnGround(): boolean">

```ts
isOnGround(): boolean
```

</div>

Return true when the player is on ground.
Tests solid cells 1 pixel below the hitbox. Do not use `player.onGround`
on the store snapshot — that flag is not updated during play.

True when the player touches solid ground.

</div>

<div class="smt-member-card">

### sandkit.api.player.teleportToGround :id=teleporttoground

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L83" target="_blank" rel="noopener">player.d.ts:83</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.teleportToGround(): void">

```ts
teleportToGround(): void
```

</div>

Move the player down until ground is found.

</div>

<div class="smt-member-card">

### sandkit.api.player.isPositionClearAtWorld :id=ispositionclearatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L93" target="_blank" rel="noopener">player.d.ts:93</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.isPositionClearAtWorld(worldX: number, worldY: number): boolean">

```ts
isPositionClearAtWorld(worldX: number, worldY: number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World x position in pixels to test. |
| worldY | `number` | World y position in pixels to test. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

</div>

Return true when the world position has no collision.

True when the player hitbox fits at the position.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.player.isWorldPositionClear~~ :id=isworldpositionclear

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L99" target="_blank" rel="noopener">player.d.ts:99</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [isPositionClearAtWorld](api/sandkit.api.player.md?id=ispositionclearatworld) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.player.isWorldPositionClear(worldX: number, worldY: number): boolean">

```ts
isWorldPositionClear(worldX: number, worldY: number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` |  |
| worldY | `number` |  |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

</div>

</div>
