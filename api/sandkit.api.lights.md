# sandkit.api.lights

`sandkit.api.lights` — temporary lights and persistent world lights.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.lights.TemporaryLightHandle :id=temporarylighthandle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L122" target="_blank" rel="noopener">lights.d.ts:122</a></p>

| Property | Type | Description |
| --- | --- | --- |
| lightId | <code>number &#124; null</code> | Assigned temporary light id, or null when creation failed. |
| ~~index~~ | <code>number &#124; null</code> | Deprecated alias. |

<div class="smt-member-anchors">

##### lightId <!-- {docsify-ignore} -->

##### ~~index~~ <!-- {docsify-ignore} -->

</div>

Handle returned from [temporary.createAtWorld](api/sandkit.api.lights.temporary.md?id=createatworld).

</div>

<div class="smt-member-card">

### sandkit.api.lights.PersistentLightOptions :id=persistentlightoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L136" target="_blank" rel="noopener">lights.d.ts:136</a></p>

| Property | Type | Description |
| --- | --- | --- |
| brightness? | <code>number</code> | Light brightness multiplier. |
| size? | <code>number</code> | Light radius in pixels. |
| color? | <code>[number, number, number, number]</code> | RGBA color components. |

<div class="smt-member-anchors">

##### brightness? <!-- {docsify-ignore} -->

##### size? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

</div>

Options for persistent world lights.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.lights.TemporaryLightOptions :id=temporarylightoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L133" target="_blank" rel="noopener">lights.d.ts:133</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.TemporaryLightOptions = TemporaryLightOptions">

```ts
TemporaryLightOptions = TemporaryLightOptions
```

</div>

Options for temporary lights.

</div>

<div class="smt-member-card">

### sandkit.api.lights.PersistentLightHandle :id=persistentlighthandle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L147" target="_blank" rel="noopener">lights.d.ts:147</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.PersistentLightHandle = unknown">

```ts
PersistentLightHandle = unknown
```

</div>

Handle returned from [persistent.createAtWorld](api/sandkit.api.lights.persistent.md?id=createatworld).

</div>
