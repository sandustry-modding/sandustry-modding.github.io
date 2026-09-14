# sandkit.engine.api.blueprints

**`Internal`**

`sandkit.engine.api.blueprints` — blueprint save, load, and import/export.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.blueprints.delete :id=delete

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L15" target="_blank" rel="noopener">blueprints.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.blueprints.delete(...args: unknown[]): unknown">

```ts
delete(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Delete a saved blueprint. Runtime property name is `delete`.

</div>

<div class="smt-member-card">

### sandkit.engine.api.blueprints.exportAllString :id=exportallstring

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L21" target="_blank" rel="noopener">blueprints.d.ts:21</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.blueprints.exportAllString(...args: unknown[]): unknown">

```ts
exportAllString(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Export all blueprints as one string.

</div>

<div class="smt-member-card">

### sandkit.engine.api.blueprints.exportString :id=exportstring

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L26" target="_blank" rel="noopener">blueprints.d.ts:26</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.blueprints.exportString(...args: unknown[]): unknown">

```ts
exportString(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Export one blueprint as a string.

</div>

<div class="smt-member-card">

### sandkit.engine.api.blueprints.getAll :id=getall

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L31" target="_blank" rel="noopener">blueprints.d.ts:31</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.blueprints.getAll(...args: unknown[]): unknown">

```ts
getAll(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return all saved blueprints.

</div>

<div class="smt-member-card">

### sandkit.engine.api.blueprints.importString :id=importstring

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L36" target="_blank" rel="noopener">blueprints.d.ts:36</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.blueprints.importString(...args: unknown[]): unknown">

```ts
importString(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Import a blueprint from a string.

</div>

<div class="smt-member-card">

### sandkit.engine.api.blueprints.load :id=load

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L41" target="_blank" rel="noopener">blueprints.d.ts:41</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.blueprints.load(...args: unknown[]): unknown">

```ts
load(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Load a blueprint into the active session.

</div>

<div class="smt-member-card">

### sandkit.engine.api.blueprints.save :id=save

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L46" target="_blank" rel="noopener">blueprints.d.ts:46</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.blueprints.save(...args: unknown[]): unknown">

```ts
save(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Save the current selection as a blueprint.

</div>
