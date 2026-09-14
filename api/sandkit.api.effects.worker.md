# sandkit.api.effects (worker)

**`Internal`**

Worker-thread `sandkit.api.effects` — world-space visual effects on workers.

Temporary lights live under [lights.temporary](api/sandkit.api.lights.temporary.worker.md), not here.

 Worker-only surface; main thread exposes additional effect helpers.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.effects.createAtWorld :id=createatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/effects.d.ts#L25" target="_blank" rel="noopener">effects.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void">

```ts
createAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| effectId | `string` | Registered effect id. |
| worldX | `number` | World x position in pixels. |
| worldY | `number` | World y position in pixels. |
| options? | <code>[`EffectOptions`](api/sandkit.api.effects.md?id=effectoptions)</code> | Duration, radius, and intensity settings. |

<div class="smt-member-anchors">

##### effectId <!-- {docsify-ignore} -->

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Spawn a named screen-space or world effect.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.effects.createEffectAtWorld~~ :id=createeffectatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/effects.d.ts#L36" target="_blank" rel="noopener">effects.d.ts:36</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [createAtWorld](api/sandkit.api.effects.worker.md?id=createatworld) instead.

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
| options? | <code>[`EffectOptions`](api/sandkit.api.effects.md?id=effectoptions)</code> |  |

<div class="smt-member-anchors">

##### effectId <!-- {docsify-ignore} -->

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

</div>
