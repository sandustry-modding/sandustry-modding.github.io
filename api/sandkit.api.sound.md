# sandkit.api.sound

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.sound.SoundHandle :id=soundhandle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L77" target="_blank" rel="noopener">sound.d.ts:77</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| stop() | <code>(): void</code> | Stop this sound instance. |

<div class="smt-member-anchors">

##### stop() <!-- {docsify-ignore} -->

</div>

Handle returned from a play call.

</div>

<div class="smt-member-card">

### sandkit.api.sound.SoundLayer :id=soundlayer

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L83" target="_blank" rel="noopener">sound.d.ts:83</a></p>

| Property | Type | Description |
| --- | --- | --- |
| soundId | <code>string</code> | Sound id for this layer. |
| volume? | <code>number</code> | Layer volume multiplier. |
| delay? | <code>number</code> | Delay in milliseconds before this layer plays. |
| playbackRate? | <code>number</code> | Playback rate for this layer. |

<div class="smt-member-anchors">

##### soundId <!-- {docsify-ignore} -->

##### volume? <!-- {docsify-ignore} -->

##### delay? <!-- {docsify-ignore} -->

##### playbackRate? <!-- {docsify-ignore} -->

</div>

One layer in a layered sound.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.sound.SoundOptions :id=soundoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L96" target="_blank" rel="noopener">sound.d.ts:96</a></p>

| Property | Type | Description |
| --- | --- | --- |
| volume? | <code>number</code> | Volume multiplier (0–1 typical). |
| playbackRate? | <code>number</code> | Playback rate multiplier. |
| position? | <code>{ x: number; y: number }</code> | World position for distance attenuation. |
| loop? | <code>boolean</code> | When true, loop until stopped. |
| rateLimitKey? | <code>string</code> | Key used with rateLimitMs to dedupe rapid replays. |
| rateLimitMs? | <code>number</code> | Minimum ms between plays with the same rateLimitKey. |

<div class="smt-member-anchors">

##### volume? <!-- {docsify-ignore} -->

##### playbackRate? <!-- {docsify-ignore} -->

##### position? <!-- {docsify-ignore} -->

##### loop? <!-- {docsify-ignore} -->

##### rateLimitKey? <!-- {docsify-ignore} -->

##### rateLimitMs? <!-- {docsify-ignore} -->

</div>

Options passed to sound play helpers.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.sound.SoundLayersOptions :id=soundlayersoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L113" target="_blank" rel="noopener">sound.d.ts:113</a></p>

| Property | Type | Description |
| --- | --- | --- |
| position? | <code>{ x: number; y: number }</code> | World position applied to all layers. |
| volume? | <code>number</code> | Volume multiplier applied to all layers. |
| rateLimitKey? | <code>string</code> | Key used with rateLimitMs to dedupe rapid replays. |
| rateLimitMs? | <code>number</code> | Minimum ms between plays with the same rateLimitKey. |

<div class="smt-member-anchors">

##### position? <!-- {docsify-ignore} -->

##### volume? <!-- {docsify-ignore} -->

##### rateLimitKey? <!-- {docsify-ignore} -->

##### rateLimitMs? <!-- {docsify-ignore} -->

</div>

Shared options for [playLayers](?id=playlayers).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.sound.play :id=play

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L16" target="_blank" rel="noopener">sound.d.ts:16</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sound.play(soundId: string, options?: SoundOptions): SoundHandle">

```ts
play(soundId: string, options?: SoundOptions): SoundHandle
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| soundId | `string` | Registered sound identifier. |
| options? | <code>[`SoundOptions`](?id=soundoptions)</code> | Volume, position, playback rate, and rate-limit options. |

<div class="smt-member-anchors">

##### soundId <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Play a sound by id with optional options.

[`SoundHandle`](?id=soundhandle)

</div>

<div class="smt-member-card">

### sandkit.api.sound.playActive :id=playactive

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L25" target="_blank" rel="noopener">sound.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sound.playActive(soundId: string, options?: SoundOptions): SoundHandle">

```ts
playActive(soundId: string, options?: SoundOptions): SoundHandle
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| soundId | `string` | Registered sound identifier. |
| options? | <code>[`SoundOptions`](?id=soundoptions)</code> | Volume, position, playback rate, and rate-limit options. |

<div class="smt-member-anchors">

##### soundId <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Play a sound on the active sound channel.

[`SoundHandle`](?id=soundhandle)

</div>

<div class="smt-member-card">

### sandkit.api.sound.playLayers :id=playlayers

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L34" target="_blank" rel="noopener">sound.d.ts:34</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sound.playLayers(layers: SoundLayer[], options?: SoundLayersOptions): SoundHandle[]">

```ts
playLayers(layers: SoundLayer[], options?: SoundLayersOptions): SoundHandle[]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| layers | <code>[`SoundLayer`](?id=soundlayer)[]</code> | Layer definitions (sound id, volume, delay, and per-layer options). |
| options? | <code>[`SoundLayersOptions`](?id=soundlayersoptions)</code> | Shared position, volume, and rate-limit options for all layers. |

<div class="smt-member-anchors">

##### layers <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Play multiple sound layers with shared options.

[`SoundHandle`](?id=soundhandle)[]

</div>

<div class="smt-member-card">

### sandkit.api.sound.calculateDistanceOptionsAtWorld :id=calculatedistanceoptionsatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L44" target="_blank" rel="noopener">sound.d.ts:44</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sound.calculateDistanceOptionsAtWorld(worldX: number, worldY: number, baseVolume?: number): SoundOptions">

```ts
calculateDistanceOptionsAtWorld(worldX: number, worldY: number, baseVolume?: number): SoundOptions
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World X coordinate in pixels. |
| worldY | `number` | World Y coordinate in pixels. |
| baseVolume? | `number` | Base volume before distance attenuation. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### baseVolume? <!-- {docsify-ignore} -->

</div>

Build distance-based volume options for a world position.

[`SoundOptions`](?id=soundoptions)

</div>

<div class="smt-member-card">

### sandkit.api.sound.stopBySoundId :id=stopbysoundid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L56" target="_blank" rel="noopener">sound.d.ts:56</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sound.stopBySoundId(soundId: string): void">

```ts
stopBySoundId(soundId: string): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| soundId | `string` | Registered sound identifier to stop. |

<div class="smt-member-anchors">

##### soundId <!-- {docsify-ignore} -->

</div>

Stop a sound by id.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.sound.stopById~~ :id=stopbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L62" target="_blank" rel="noopener">sound.d.ts:62</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [stopBySoundId](api/sandkit.api.sound.md?id=stopbysoundid) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.sound.stopById(soundId: string): void">

```ts
stopById(soundId: string): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| soundId | `string` |  |

<div class="smt-member-anchors">

##### soundId <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.sound.stopActive :id=stopactive

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L68" target="_blank" rel="noopener">sound.d.ts:68</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sound.stopActive(): void">

```ts
stopActive(): void
```

</div>

Stop the active sound channel.

</div>

<div class="smt-member-card">

### sandkit.api.sound.stopAll :id=stopall

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L74" target="_blank" rel="noopener">sound.d.ts:74</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.sound.stopAll(): void">

```ts
stopAll(): void
```

</div>

Stop all playing sounds.

</div>
