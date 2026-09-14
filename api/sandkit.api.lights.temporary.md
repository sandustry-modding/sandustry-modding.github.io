# sandkit.api.lights.temporary

Short-lived visual effect lights.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.lights.temporary.createAtWorld :id=createatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L42" target="_blank" rel="noopener">lights.d.ts:42</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.temporary.createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle">

```ts
createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World X coordinate in pixels. |
| worldY | `number` | World Y coordinate in pixels. |
| options? | <code>[`TemporaryLightOptions`](api/sandkit.api.effects.md?id=temporarylightoptions)</code> | Brightness, duration, color, and dedup options. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Create a temporary light at world coordinates.

[`TemporaryLightHandle`](api/sandkit.api.lights.md?id=temporarylighthandle)

#### Examples

**Main entry**

```ts
const light = api.lights.temporary.createAtWorld(worldX, worldY, {
  brightness: 1,
  durationMs: 250,
  size: 80,
});
const lightId = light.lightId;
```

**options.durationTicks**

```ts
api.lights.temporary.createAtWorld(worldX, worldY, {
  durationTicks: 15,
});
```

**options.durationMs**

```ts
api.lights.temporary.createAtWorld(worldX, worldY, {
  durationMs: 250,
});
```

</div>

<div class="smt-member-card">

### sandkit.api.lights.temporary.removeById :id=removebyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L61" target="_blank" rel="noopener">lights.d.ts:61</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.temporary.removeById(lightId: number): void">

```ts
removeById(lightId: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| lightId | `number` | Light id returned from [createAtWorld](?id=createatworld). |

<div class="smt-member-anchors">

##### lightId <!-- {docsify-ignore} -->

</div>

Remove a temporary light by its id.

#### Example

```ts
if (light.lightId !== null) {
  api.lights.temporary.removeById(light.lightId);
}
```

</div>
