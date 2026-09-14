# sandkit.api.lights.temporary (worker)

Short-lived visual effect lights.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.lights.temporary.TemporaryLightHandle :id=temporarylighthandle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L18" target="_blank" rel="noopener">lights.d.ts:18</a></p>

| Property | Type | Description |
| --- | --- | --- |
| lightId | <code>number &#124; null</code> | Runtime light id, or null when the pool is full. |
| ~~index?~~ | <code>number &#124; null</code> | Deprecated alias. |

<div class="smt-member-anchors">

##### lightId <!-- {docsify-ignore} -->

##### ~~index?~~ <!-- {docsify-ignore} -->

</div>

Handle returned by [createAtWorld](?id=createatworld).

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.lights.temporary.TemporaryLightOptions :id=temporarylightoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L15" target="_blank" rel="noopener">lights.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.temporary.TemporaryLightOptions = TemporaryLightOptions">

```ts
TemporaryLightOptions = TemporaryLightOptions
```

</div>

Options for [createAtWorld](?id=createatworld).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.lights.temporary.createAtWorld :id=createatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L44" target="_blank" rel="noopener">lights.d.ts:44</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.temporary.createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle">

```ts
createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World x position in pixels. |
| worldY | `number` | World y position in pixels. |
| options? | <code>[`TemporaryLightOptions`](api/sandkit.api.effects.md?id=temporarylightoptions)</code> | Brightness, duration, colour, and dedup settings. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Create a temporary light at world coordinates.

[`TemporaryLightHandle`](?id=temporarylighthandle)

#### Example

**Worker entry**

```ts
const light = api.lights.temporary.createAtWorld(worldX, worldY, {
  durationTicks: 15,
});
const lightId = light.lightId;
```

</div>
