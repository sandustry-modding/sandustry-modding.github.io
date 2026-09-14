# sandkit.api.camera

`sandkit.api.camera` — camera focus and follow control.
Main thread only.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.camera.snapToPlayer :id=snaptoplayer

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/camera.d.ts#L7" target="_blank" rel="noopener">camera.d.ts:7</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.camera.snapToPlayer(): void">

```ts
snapToPlayer(): void
```

</div>

Snap the camera to the player position.

</div>

<div class="smt-member-card">

### sandkit.api.camera.setFocusAtWorld :id=setfocusatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/camera.d.ts#L15" target="_blank" rel="noopener">camera.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.camera.setFocusAtWorld(worldX: number, worldY: number): boolean">

```ts
setFocusAtWorld(worldX: number, worldY: number): boolean
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

Move camera focus to world coordinates.

True when focus was applied.

</div>

<div class="smt-member-card">

### sandkit.api.camera.releaseFocus :id=releasefocus

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/camera.d.ts#L27" target="_blank" rel="noopener">camera.d.ts:27</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.camera.releaseFocus(options?: object): boolean">

```ts
releaseFocus(options?: object): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| options? | <code>Optional transition duration in milliseconds.</code> |  |

<div class="smt-member-anchors">

##### options? <!-- {docsify-ignore} -->

</div>

Release scripted focus and return control to the player.

True when focus was released.

#### Example

```ts
const released = api.camera.releaseFocus({ durationMs: 250 });
```

</div>
