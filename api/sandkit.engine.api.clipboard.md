# sandkit.engine.api.clipboard

**`Internal`**

`sandkit.engine.api.clipboard` — build clipboard copy, paste, and history.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.clipboard.activate :id=activate

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L15" target="_blank" rel="noopener">clipboard.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.clipboard.activate(...args: unknown[]): unknown">

```ts
activate(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Activate the clipboard tool or mode.

</div>

<div class="smt-member-card">

### sandkit.engine.api.clipboard.clear :id=clear

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L20" target="_blank" rel="noopener">clipboard.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.clipboard.clear(...args: unknown[]): unknown">

```ts
clear(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Clear the current clipboard contents.

</div>

<div class="smt-member-card">

### sandkit.engine.api.clipboard.get :id=get

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L25" target="_blank" rel="noopener">clipboard.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.clipboard.get(...args: unknown[]): unknown">

```ts
get(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the current clipboard payload.

</div>

<div class="smt-member-card">

### sandkit.engine.api.clipboard.getHistory :id=gethistory

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L30" target="_blank" rel="noopener">clipboard.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.clipboard.getHistory(...args: unknown[]): unknown">

```ts
getHistory(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return clipboard history entries.

</div>

<div class="smt-member-card">

### sandkit.engine.api.clipboard.getSignalLinks :id=getsignallinks

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L35" target="_blank" rel="noopener">clipboard.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.clipboard.getSignalLinks(...args: unknown[]): unknown">

```ts
getSignalLinks(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return signal links stored on the clipboard.

</div>

<div class="smt-member-card">

### sandkit.engine.api.clipboard.selectFromHistory :id=selectfromhistory

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L40" target="_blank" rel="noopener">clipboard.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.clipboard.selectFromHistory(...args: unknown[]): unknown">

```ts
selectFromHistory(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Restore a clipboard entry from history.

</div>

<div class="smt-member-card">

### sandkit.engine.api.clipboard.set :id=set

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L45" target="_blank" rel="noopener">clipboard.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.clipboard.set(...args: unknown[]): unknown">

```ts
set(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set the clipboard payload.

</div>
