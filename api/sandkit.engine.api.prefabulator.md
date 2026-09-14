# sandkit.engine.api.prefabulator

**`Internal`**

`sandkit.engine.api.prefabulator` — blueprint structure serialization for prefabs.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.prefabulator.localizeBlueprintStructures :id=localizeblueprintstructures

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabulator.d.ts#L15" target="_blank" rel="noopener">prefabulator.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prefabulator.localizeBlueprintStructures(...args: unknown[]): unknown">

```ts
localizeBlueprintStructures(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Convert serialized blueprint structures to world-local coordinates.

</div>

<div class="smt-member-card">

### sandkit.engine.api.prefabulator.serializeBlueprintStructures :id=serializeblueprintstructures

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabulator.d.ts#L20" target="_blank" rel="noopener">prefabulator.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prefabulator.serializeBlueprintStructures(...args: unknown[]): unknown">

```ts
serializeBlueprintStructures(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Serialize blueprint structures for prefab storage.

</div>
