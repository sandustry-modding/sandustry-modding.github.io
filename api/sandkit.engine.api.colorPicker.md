# sandkit.engine.api.colorPicker

**`Internal`**

`sandkit.engine.api.colorPicker` — structure color palette UI helpers.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Variables <!-- {docsify-ignore} -->

### CYCLE\_COLOR

```ts
const CYCLE\_COLOR: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L12)

Sentinel value for cycling through predefined colors.

### NO\_COLOR

```ts
const NO\_COLOR: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L14)

Sentinel value for no color selected.

### PREDEFINED\_COLORS

```ts
const PREDEFINED\_COLORS: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L16)

List of predefined palette colors.

### RANDOM\_COLOR

```ts
const RANDOM\_COLOR: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L18)

Sentinel value for a random palette color.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.colorPicker.closePalette :id=closepalette

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L23" target="_blank" rel="noopener">colorPicker.d.ts:23</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.colorPicker.closePalette(...args: unknown[]): unknown">

```ts
closePalette(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Close the active color palette UI.

</div>

<div class="smt-member-card">

### sandkit.engine.api.colorPicker.getActivePalette :id=getactivepalette

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L28" target="_blank" rel="noopener">colorPicker.d.ts:28</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.colorPicker.getActivePalette(...args: unknown[]): unknown">

```ts
getActivePalette(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the active palette identifier.

</div>

<div class="smt-member-card">

### sandkit.engine.api.colorPicker.getCycleColor :id=getcyclecolor

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L33" target="_blank" rel="noopener">colorPicker.d.ts:33</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.colorPicker.getCycleColor(...args: unknown[]): unknown">

```ts
getCycleColor(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the next color in the cycle.

</div>

<div class="smt-member-card">

### sandkit.engine.api.colorPicker.getRandomColor :id=getrandomcolor

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L38" target="_blank" rel="noopener">colorPicker.d.ts:38</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.colorPicker.getRandomColor(...args: unknown[]): unknown">

```ts
getRandomColor(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return a random predefined color.

</div>

<div class="smt-member-card">

### sandkit.engine.api.colorPicker.hexToRgba :id=hextorgba

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L43" target="_blank" rel="noopener">colorPicker.d.ts:43</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.colorPicker.hexToRgba(...args: unknown[]): unknown">

```ts
hexToRgba(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Convert a hex color string to RGBA components.

</div>

<div class="smt-member-card">

### sandkit.engine.api.colorPicker.renderColorButton :id=rendercolorbutton

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L48" target="_blank" rel="noopener">colorPicker.d.ts:48</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.colorPicker.renderColorButton(...args: unknown[]): unknown">

```ts
renderColorButton(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Render a color-picker button in the UI.

</div>

<div class="smt-member-card">

### sandkit.engine.api.colorPicker.renderColorSection :id=rendercolorsection

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L53" target="_blank" rel="noopener">colorPicker.d.ts:53</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.colorPicker.renderColorSection(...args: unknown[]): unknown">

```ts
renderColorSection(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Render a color section in the UI.

</div>

<div class="smt-member-card">

### sandkit.engine.api.colorPicker.renderPalette :id=renderpalette

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L58" target="_blank" rel="noopener">colorPicker.d.ts:58</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.colorPicker.renderPalette(...args: unknown[]): unknown">

```ts
renderPalette(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Render the full color palette UI.

</div>

<div class="smt-member-card">

### sandkit.engine.api.colorPicker.rgbaToHex :id=rgbatohex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L63" target="_blank" rel="noopener">colorPicker.d.ts:63</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.colorPicker.rgbaToHex(...args: unknown[]): unknown">

```ts
rgbaToHex(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Convert RGBA components to a hex color string.

</div>

<div class="smt-member-card">

### sandkit.engine.api.colorPicker.setActivePalette :id=setactivepalette

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L68" target="_blank" rel="noopener">colorPicker.d.ts:68</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.colorPicker.setActivePalette(...args: unknown[]): unknown">

```ts
setActivePalette(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set the active palette identifier.

</div>

<div class="smt-member-card">

### sandkit.engine.api.colorPicker.togglePalette :id=togglepalette

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L73" target="_blank" rel="noopener">colorPicker.d.ts:73</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.colorPicker.togglePalette(...args: unknown[]): unknown">

```ts
togglePalette(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Open or close the color palette UI.

</div>
