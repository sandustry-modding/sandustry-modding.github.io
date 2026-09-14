# sandkit.api.lights.persistent

Lights that persist in the world save.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.lights.persistent.createAtWorld :id=createatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L89" target="_blank" rel="noopener">lights.d.ts:89</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.persistent.createAtWorld(worldX: number, worldY: number, options?: PersistentLightOptions): unknown">

```ts
createAtWorld(worldX: number, worldY: number, options?: PersistentLightOptions): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World X coordinate in pixels. |
| worldY | `number` | World Y coordinate in pixels. |
| options? | <code>[`PersistentLightOptions`](api/sandkit.api.lights.md?id=persistentlightoptions)</code> | Brightness, size, color, and persistence options. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Create a persistent light at world coordinates.

#### Example

```ts
const light = api.lights.persistent.createAtWorld(
  worldX,
  worldY,
  { brightness: 1, size: 80 },
);
```

</div>

<div class="smt-member-card">

### sandkit.api.lights.persistent.removeAtWorld :id=removeatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L102" target="_blank" rel="noopener">lights.d.ts:102</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.persistent.removeAtWorld(worldX: number, worldY: number): void">

```ts
removeAtWorld(worldX: number, worldY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World X coordinate in pixels. |
| worldY | `number` | World Y coordinate in pixels. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

</div>

Remove the persistent light at world coordinates.

</div>

<div class="smt-member-card">

### sandkit.api.lights.persistent.fadeAtWorld :id=fadeatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L112" target="_blank" rel="noopener">lights.d.ts:112</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.persistent.fadeAtWorld(worldX: number, worldY: number, durationMs?: number): void">

```ts
fadeAtWorld(worldX: number, worldY: number, durationMs?: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World X coordinate in pixels. |
| worldY | `number` | World Y coordinate in pixels. |
| durationMs? | `number` | Fade duration in milliseconds. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### durationMs? <!-- {docsify-ignore} -->

</div>

Fade out the persistent light at world coordinates over durationMs.

</div>

<div class="smt-member-card">

### sandkit.api.lights.persistent.markDirty :id=markdirty

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L118" target="_blank" rel="noopener">lights.d.ts:118</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.persistent.markDirty(): void">

```ts
markDirty(): void
```

</div>

Mark persistent lights dirty so they are saved on the next flush.

</div>
