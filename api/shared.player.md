# shared.player

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### shared.player.Player :id=player

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L34" target="_blank" rel="noopener">player.d.ts:34</a></p>

| Property | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Player hitbox left edge in world pixels. |
| y | <code>number</code> | Player hitbox top edge in world pixels. |
| width | <code>number</code> | Player hitbox width in world pixels. |
| height | <code>number</code> | Player hitbox height in world pixels. |
| velocity | <code>Vector2</code> | Current movement velocity in pixels per second. |
| threshold | <code>Vector2</code> | Movement threshold accumulator used by physics. |
| onGround | <code>boolean</code> | Spawn flag. Live physics does not update this field. Use `sandkit.api.player.isOnGround()` (solid cells 1px below the hitbox). |
| speedCapOverdrive | <code>{ x: object; x.dir: dir: null; x.active: active: boolean; x.bonus: bonus: number; x.releaseTime: releaseTime: number; x.releaseBonus: releaseBonus: number; y: object; y.dir: dir: null; y.active: active: boolean; y.bonus: bonus: number; y.releaseTime: releaseTime: number; y.releaseBonus: releaseBonus: number }</code> | Temporary speed-cap bonuses applied on each axis. |
| inventory | <code>InventoryItem[]</code> | Items currently held in the player inventory. |
| buildings | <code>number[]</code> | Structure type ids the player has unlocked for building. |
| tech | <code>{ Index Signature: \[`key`: `string` &#124; `number`\]: `object` }</code> | Tech tree nodes and their unlock metadata. |
| lockedTechs | <code>{ Index Signature: \[`key`: `string`\]: `boolean` }</code> | Tech ids explicitly locked for this save. |
| action | <code>null</code> | Active world action, or null when idle. |
| hotbar | <code>{ activeSlotIndex: number; hotbarIndex: number; bars: AssetRef[][] }</code> | Hotbar slots, active indices, and item sprites. |
| grapplingHook | <code>boolean</code> | True when the grappling hook is equipped or active. |
| cooldowns | <code>{ boostParticle: object; boostParticle.time: time: number; boostParticle.last: last: number; hoverParticle: object; hoverParticle.time: time: number; hoverParticle.last: last: number; slowdown: object; slowdown.last: last: number }</code> | Cooldown timestamps for movement particles and slowdown. |
| isHovering | <code>boolean</code> | True when hover movement mode is active. |
| weaponsMeta | <code>{ rocketLauncher: object; rocketLauncher.ammo: ammo: object; rocketLauncher.ammo.current: current: number; rocketLauncher.ammo.reload: reload: object; rocketLauncher.ammo.reload.last: last: number; rocketLauncher.ammo.reloading: reloading: boolean }</code> | Per-weapon runtime metadata. |

<div class="smt-member-anchors">

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

##### width <!-- {docsify-ignore} -->

##### height <!-- {docsify-ignore} -->

##### velocity <!-- {docsify-ignore} -->

##### threshold <!-- {docsify-ignore} -->

##### onGround <!-- {docsify-ignore} -->

##### speedCapOverdrive <!-- {docsify-ignore} -->

##### inventory <!-- {docsify-ignore} -->

##### buildings <!-- {docsify-ignore} -->

##### tech <!-- {docsify-ignore} -->

##### lockedTechs <!-- {docsify-ignore} -->

##### action <!-- {docsify-ignore} -->

##### hotbar <!-- {docsify-ignore} -->

##### grapplingHook <!-- {docsify-ignore} -->

##### cooldowns <!-- {docsify-ignore} -->

##### isHovering <!-- {docsify-ignore} -->

##### weaponsMeta <!-- {docsify-ignore} -->

</div>

Live player state snapshot (read-only shape for mods).

Reflects `sandkit.engine.state` / store player fields exposed to mods.

</div>

<div class="smt-member-card">

### shared.player.InventoryItem :id=inventoryitem

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L146" target="_blank" rel="noopener">player.d.ts:146</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| itemType | <code>number</code> |  |
| abilities | <code>{ type: number; levelRequirement: number; attributes: object; Index Signature: \[`key`: `string`\]: `object`; cooldown: object; cooldown.time: time: number; cooldown.last: last: number }</code> |  |
| nameKey | <code>string</code> |  |
| descriptionKey | <code>string</code> |  |
| categoryKey | <code>&quot;excavation&quot; &#124; &quot;utility&quot; &#124; &quot;drones&quot;</code> |  |
| sprite? | <code>AssetRef</code> |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### itemType <!-- {docsify-ignore} -->

##### abilities <!-- {docsify-ignore} -->

##### nameKey <!-- {docsify-ignore} -->

##### descriptionKey <!-- {docsify-ignore} -->

##### categoryKey <!-- {docsify-ignore} -->

##### sprite? <!-- {docsify-ignore} -->

</div>

One hotbar or inventory item entry.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### shared.player.CellCoordinates :id=cellcoordinates

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L14" target="_blank" rel="noopener">player.d.ts:14</a></p>

<div class="smt-member-sig" data-sig="shared.player.CellCoordinates = [number, number]">

```ts
CellCoordinates = [number, number]
```

</div>

Grid cell position as `[cellX, cellY]`.

Cell coordinates match `sandkit.api.*AtCell` helpers: column first, then row.

</div>

<div class="smt-member-card">

### shared.player.Vector2 :id=vector2

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L22" target="_blank" rel="noopener">player.d.ts:22</a></p>

<div class="smt-member-sig" data-sig="shared.player.Vector2 = object">

```ts
Vector2 = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Horizontal component. |
| y | <code>number</code> | Vertical component. |

<div class="smt-member-anchors">

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

</div>

2D vector in world or cell space.

World positions use pixels. Cell helpers may return pixel or cell units
depending on the API.

</div>
