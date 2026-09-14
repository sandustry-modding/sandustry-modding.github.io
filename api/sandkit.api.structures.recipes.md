# sandkit.api.structures.recipes

Structure recipe registration by machine kind.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.recipes.register :id=register

#### Call Signature

```ts
register(id: "planterBox", definition: PlanterBoxRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:447](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L447)

Register a planter box recipe.

##### Parameters

###### id

`"planterBox"`

Machine recipe slot id.

###### definition

[`PlanterBoxRecipeDefinitionV1`](api/sandkit.api.processing.md?id=planterboxrecipedefinitionv1)

Grower recipe definition.

##### Returns

`void`

##### Example

```ts
api.structures.recipes.register("kineticPress", {
  input: "sand",
  outputs: [
    { elementType: "compressedSand", chance: 1 },
  ],
  minimumDownwardVelocityCellsPerSecond: 20,
});
```

#### Call Signature

```ts
register(id: "shaker", definition: ShakerRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:456](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L456)

Register a shaker recipe.

##### Parameters

###### id

`"shaker"`

Machine recipe slot id.

###### definition

[`ShakerRecipeDefinitionV1`](api/sandkit.api.processing.md?id=shakerrecipedefinitionv1)

Shaker recipe definition.

##### Returns

`void`

#### Call Signature

```ts
register(id: "kineticPress", definition: KineticPressRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:465](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L465)

Register a kinetic press recipe.

##### Parameters

###### id

`"kineticPress"`

Machine recipe slot id.

###### definition

[`KineticPressRecipeDefinitionV1`](api/sandkit.api.processing.md?id=kineticpressrecipedefinitionv1)

Kinetic press recipe definition.

##### Returns

`void`

#### Call Signature

```ts
register(id: "condenser" | "steamDryer" | "synthesizer" | "snowmaker" | "smelter", definition: WeightedRefineryRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:474](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L474)

Register a weighted refinery machine recipe.

##### Parameters

###### id

`"condenser"` \| `"steamDryer"` \| `"synthesizer"` \| `"snowmaker"` \| `"smelter"`

Refinery machine id.

###### definition

[`WeightedRefineryRecipeDefinitionV1`](api/sandkit.api.structures.md?id=weightedrefineryrecipedefinitionv1)

Weighted input/output recipe.

##### Returns

`void`

</div>
