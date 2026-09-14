# sandkit.api.effects

`sandkit.api.effects` — visual effects, particles, and lasers at world positions.
Main thread only. Temporary lights live under [lights.temporary](api/sandkit.api.lights.temporary.md).

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.effects.LaserEffectOptions :id=lasereffectoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L115" target="_blank" rel="noopener">effects.d.ts:115</a></p>

| Property | Type | Description |
| --- | --- | --- |
| width? | <code>number</code> | Beam width in pixels. |
| brightness? | <code>number</code> | Beam brightness multiplier. |
| color? | <code>number</code> | Beam color as a packed integer. |
| glow? | <code>boolean</code> | When true, draws a glow around the beam. |

<div class="smt-member-anchors">

##### width? <!-- {docsify-ignore} -->

##### brightness? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

##### glow? <!-- {docsify-ignore} -->

</div>

Options for laser beam effects.

</div>

<div class="smt-member-card">

### sandkit.api.effects.LaserEffectHandle :id=lasereffecthandle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L127" target="_blank" rel="noopener">effects.d.ts:127</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| destroy() | <code>(): void</code> | Removes the laser from the scene. |

<div class="smt-member-anchors">

##### destroy() <!-- {docsify-ignore} -->

</div>

Handle returned by createLaserAtWorld.

</div>

<div class="smt-member-card">

### sandkit.api.effects.DistortionEffectOptions :id=distortioneffectoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L133" target="_blank" rel="noopener">effects.d.ts:133</a></p>

| Property | Type | Description |
| --- | --- | --- |
| style? | <code>&quot;implode&quot; &#124; &quot;explode&quot;</code> | Distortion style: implode or explode. |
| duration? | <code>number</code> | Effect duration in seconds. |
| maxRadius? | <code>number</code> | Maximum radius of the wave. |
| intensity? | <code>number</code> | Visual intensity of the distortion. |
| color? | <code>[number, number, number, number]</code> | RGBA color components for the effect. |

<div class="smt-member-anchors">

##### style? <!-- {docsify-ignore} -->

##### duration? <!-- {docsify-ignore} -->

##### maxRadius? <!-- {docsify-ignore} -->

##### intensity? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

</div>

Options for distortion wave effects.

</div>

<div class="smt-member-card">

### sandkit.api.effects.EffectOptions :id=effectoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L48" target="_blank" rel="noopener">effects.d.ts:48</a></p>

| Property | Type | Description |
| --- | --- | --- |
| duration? | <code>number</code> |  |
| maxRadius? | <code>number</code> |  |
| intensity? | <code>number</code> |  |

<div class="smt-member-anchors">

##### duration? <!-- {docsify-ignore} -->

##### maxRadius? <!-- {docsify-ignore} -->

##### intensity? <!-- {docsify-ignore} -->

</div>

Generic duration and radius options for world effects.

</div>

<div class="smt-member-card">

### sandkit.api.effects.TemporaryLightOptions :id=temporarylightoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L54" target="_blank" rel="noopener">effects.d.ts:54</a></p>

| Property | Type | Description |
| --- | --- | --- |
| brightness? | <code>number</code> |  |
| duration? | <code>number</code> |  |
| durationMs? | <code>number</code> |  |
| size? | <code>number</code> |  |
| color? | <code>[number, number, number, number]</code> |  |
| decay | <code>number</code> | Light decay rate after spawn. |
| unclamped? | <code>boolean</code> |  |
| skipDedup? | <code>boolean</code> |  |
| useLightZones? | <code>boolean</code> |  |
| noopIfFull? | <code>boolean</code> |  |
| priority? | <code>number</code> |  |
| dedupKey | <code>string</code> | Dedupe key when the light pool is full or dedup is enabled. |

<div class="smt-member-anchors">

##### brightness? <!-- {docsify-ignore} -->

##### duration? <!-- {docsify-ignore} -->

##### durationMs? <!-- {docsify-ignore} -->

##### size? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

##### decay <!-- {docsify-ignore} -->

##### unclamped? <!-- {docsify-ignore} -->

##### skipDedup? <!-- {docsify-ignore} -->

##### useLightZones? <!-- {docsify-ignore} -->

##### noopIfFull? <!-- {docsify-ignore} -->

##### priority? <!-- {docsify-ignore} -->

##### dedupKey <!-- {docsify-ignore} -->

</div>

Options for [createLightAtWorld](?id=createlightatworld).

</div>

<div class="smt-member-card">

### sandkit.api.effects.ParticleEffectOptions :id=particleeffectoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L71" target="_blank" rel="noopener">effects.d.ts:71</a></p>

| Property | Type | Description |
| --- | --- | --- |
| count? | <code>number</code> |  |
| velocity? | <code>Vector2</code> |  |
| minSpeed? | <code>number</code> |  |
| maxSpeed? | <code>number</code> |  |
| color? | <code>number</code> | Hex code. No alpha. |
| minSize? | <code>number</code> |  |
| maxSize? | <code>number</code> |  |
| minLifetime? | <code>number</code> |  |
| maxLifetime? | <code>number</code> |  |
| background? | <code>boolean</code> |  |
| imageName? | <code>string</code> |  |
| fadeOutOnly? | <code>boolean</code> |  |
| fadeStart? | <code>number</code> |  |
| fadeEnd? | <code>number</code> |  |
| damp? | <code>number</code> |  |

<div class="smt-member-anchors">

##### count? <!-- {docsify-ignore} -->

##### velocity? <!-- {docsify-ignore} -->

##### minSpeed? <!-- {docsify-ignore} -->

##### maxSpeed? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

##### minSize? <!-- {docsify-ignore} -->

##### maxSize? <!-- {docsify-ignore} -->

##### minLifetime? <!-- {docsify-ignore} -->

##### maxLifetime? <!-- {docsify-ignore} -->

##### background? <!-- {docsify-ignore} -->

##### imageName? <!-- {docsify-ignore} -->

##### fadeOutOnly? <!-- {docsify-ignore} -->

##### fadeStart? <!-- {docsify-ignore} -->

##### fadeEnd? <!-- {docsify-ignore} -->

##### damp? <!-- {docsify-ignore} -->

</div>

Options for [createParticlesAtWorld](?id=createparticlesatworld).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.effects.createAtWorld :id=createatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L24" target="_blank" rel="noopener">effects.d.ts:24</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void">

```ts
createAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| effectId | `string` | Registered effect id (for example `heatWave`). |
| worldX | `number` | World X coordinate in pixels. |
| worldY | `number` | World Y coordinate in pixels. |
| options? | <code>[`EffectOptions`](?id=effectoptions)</code> | Duration, radius, and intensity settings. |

<div class="smt-member-anchors">

##### effectId <!-- {docsify-ignore} -->

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Creates a named screen effect at world coordinates.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.effects.createEffectAtWorld~~ :id=createeffectatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L35" target="_blank" rel="noopener">effects.d.ts:35</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [createAtWorld](api/sandkit.api.effects.md?id=createatworld) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createEffectAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void">

```ts
createEffectAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| effectId | `string` |  |
| worldX | `number` |  |
| worldY | `number` |  |
| options? | <code>[`EffectOptions`](?id=effectoptions)</code> |  |

<div class="smt-member-anchors">

##### effectId <!-- {docsify-ignore} -->

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.effects.createLightAtWorld~~ :id=createlightatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L63" target="_blank" rel="noopener">effects.d.ts:63</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [lights.temporary.createAtWorld](api/sandkit.api.lights.temporary.md?id=createatworld) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createLightAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): object">

```ts
createLightAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` |  |
| worldY | `number` |  |
| options? | <code>[`TemporaryLightOptions`](?id=temporarylightoptions)</code> |  |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

lightId: number &#124; null optional index?: number &#124; null

</div>

<div class="smt-member-card">

### sandkit.api.effects.createDistortionWaveAtWorld :id=createdistortionwaveatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L84" target="_blank" rel="noopener">effects.d.ts:84</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createDistortionWaveAtWorld(worldX: number, worldY: number, options?: DistortionEffectOptions): void">

```ts
createDistortionWaveAtWorld(worldX: number, worldY: number, options?: DistortionEffectOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World X coordinate in pixels. |
| worldY | `number` | World Y coordinate in pixels. |
| options? | <code>[`DistortionEffectOptions`](?id=distortioneffectoptions)</code> | Style, duration, radius, intensity, and color. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Creates a distortion wave effect at world coordinates.

#### Example

```ts
api.effects.createDistortionWaveAtWorld(worldX, worldY, {
  style: "implode",
});
```

</div>

<div class="smt-member-card">

### sandkit.api.effects.createLaserAtWorld :id=createlaseratworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L100" target="_blank" rel="noopener">effects.d.ts:100</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createLaserAtWorld(startWorldX: number, startWorldY: number, endWorldX: number, endWorldY: number, options?: LaserEffectOptions): LaserEffectHandle">

```ts
createLaserAtWorld(startWorldX: number, startWorldY: number, endWorldX: number, endWorldY: number, options?: LaserEffectOptions): LaserEffectHandle
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| startWorldX | `number` | Beam start world X in pixels. |
| startWorldY | `number` | Beam start world Y in pixels. |
| endWorldX | `number` | Beam end world X in pixels. |
| endWorldY | `number` | Beam end world Y in pixels. |
| options? | <code>[`LaserEffectOptions`](?id=lasereffectoptions)</code> | Width, brightness, color, and glow options. |

<div class="smt-member-anchors">

##### startWorldX <!-- {docsify-ignore} -->

##### startWorldY <!-- {docsify-ignore} -->

##### endWorldX <!-- {docsify-ignore} -->

##### endWorldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Creates a laser beam between two world points. Returns a handle to destroy it.

[`LaserEffectHandle`](?id=lasereffecthandle)

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.effects.removeLightById~~ :id=removelightbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L112" target="_blank" rel="noopener">effects.d.ts:112</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [lights.temporary.removeById](api/sandkit.api.lights.temporary.md?id=removebyid) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.effects.removeLightById(lightId: number): void">

```ts
removeLightById(lightId: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| lightId | `number` |  |

<div class="smt-member-anchors">

##### lightId <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.effects.createParticlesAtWorld :id=createparticlesatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L28" target="_blank" rel="noopener">effects.d.ts:28</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createParticlesAtWorld(worldX: number, worldY: number, options?: ParticleEffectOptions): void">

```ts
createParticlesAtWorld(worldX: number, worldY: number, options?: ParticleEffectOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World x position in pixels. |
| worldY | `number` | World y position in pixels. |
| options? | <code>[`ParticleEffectOptions`](?id=particleeffectoptions)</code> | Count, velocity, colour, and lifetime settings. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Emit particles at world coordinates.

</div>
