# sandkit.api.raycast

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.raycast.castFromWorld :id=castfromworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/raycast.d.ts#L18" target="_blank" rel="noopener">raycast.d.ts:18</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.raycast.castFromWorld(startWorldX: number, startWorldY: number, angle: number, maxDistance: number): Vector2 &amp; object | null">

```ts
castFromWorld(startWorldX: number, startWorldY: number, angle: number, maxDistance: number): Vector2 & object | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| startWorldX | `number` | Ray origin world X in pixels. |
| startWorldY | `number` | Ray origin world Y in pixels. |
| angle | `number` | Ray direction in radians. |
| maxDistance | `number` | Maximum ray length in pixels. |

<div class="smt-member-anchors">

##### startWorldX <!-- {docsify-ignore} -->

##### startWorldY <!-- {docsify-ignore} -->

##### angle <!-- {docsify-ignore} -->

##### maxDistance <!-- {docsify-ignore} -->

</div>

Cast a ray from world position. Return hit point and distance, or null.

[`Vector2`](api/shared.player.md?id=vector2) & `object` &#124; `null`

</div>
