# sandkit.api.excavation

`sandkit.api.excavation` — register custom excavation tool dig profiles.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.excavation.ExcavationProfileDefinitionV1 :id=excavationprofiledefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L48" target="_blank" rel="noopener">excavation.d.ts:48</a></p>

| Property | Type | Description |
| --- | --- | --- |
| pattern? | <code>number[][]</code> | Dig pattern grid; non-zero cells are removed. |
| power | <code>number</code> | Dig strength applied to matched cells. Clamped to 0–1000. |
| options? | <code>ExcavationProfileOptions</code> | Optional profile-specific excavation flags. |
| terrainRules? | <code>readonly ExcavationTerrainRule[]</code> | Per-terrain output and damage rules. |

<div class="smt-member-anchors">

##### pattern? <!-- {docsify-ignore} -->

##### power <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

##### terrainRules? <!-- {docsify-ignore} -->

</div>

Excavation tool profile definition.

</div>

<div class="smt-member-card">

### sandkit.api.excavation.ExcavationProfileOptions :id=excavationprofileoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L60" target="_blank" rel="noopener">excavation.d.ts:60</a></p>

| Property | Type | Description |
| --- | --- | --- |
| fromGun? | <code>boolean</code> |  |
| fromRocketExplosion? | <code>boolean</code> |  |
| fromDrill? | <code>boolean</code> |  |
| useLiteralOutVelocity? | <code>boolean</code> |  |
| destroyNonDestructible? | <code>boolean</code> |  |
| forceRemoveAll? | <code>boolean</code> |  |
| drillTierDamage? | <code>number</code> | Clamped to 0–1000 when set. |

<div class="smt-member-anchors">

##### fromGun? <!-- {docsify-ignore} -->

##### fromRocketExplosion? <!-- {docsify-ignore} -->

##### fromDrill? <!-- {docsify-ignore} -->

##### useLiteralOutVelocity? <!-- {docsify-ignore} -->

##### destroyNonDestructible? <!-- {docsify-ignore} -->

##### forceRemoveAll? <!-- {docsify-ignore} -->

##### drillTierDamage? <!-- {docsify-ignore} -->

</div>

Options attached to an excavation profile definition.

</div>

<div class="smt-member-card">

### sandkit.api.excavation.ExcavationTerrainRule :id=excavationterrainrule

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L72" target="_blank" rel="noopener">excavation.d.ts:72</a></p>

| Property | Type | Description |
| --- | --- | --- |
| cellType | <code>TerrainRef</code> | Terrain cell type to match. |
| ~~terrainType?~~ | <code>TerrainRef</code> | Deprecated alias. |
| damage? | <code>number</code> | Damage applied when this rule matches. |
| outputElementType? | <code>ElementRef</code> | Element type produced when this terrain is excavated. |

<div class="smt-member-anchors">

##### cellType <!-- {docsify-ignore} -->

##### ~~terrainType?~~ <!-- {docsify-ignore} -->

##### damage? <!-- {docsify-ignore} -->

##### outputElementType? <!-- {docsify-ignore} -->

</div>

Terrain match rule within an excavation profile.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.excavation.registerProfile :id=registerprofile

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L45" target="_blank" rel="noopener">excavation.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.excavation.registerProfile(id: string, definition: ExcavationProfileDefinitionV1): void">

```ts
registerProfile(id: string, definition: ExcavationProfileDefinitionV1): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| id | `string` | Unique profile id (1–128 chars: letters, numbers, `.`, `_`, `:`, `-`). |
| definition | <code>[`ExcavationProfileDefinitionV1`](?id=excavationprofiledefinitionv1)</code> | Pattern, power, terrain rules, and profile options. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### definition <!-- {docsify-ignore} -->

</div>

Registers an excavation profile by id.

#### Example

```ts
const profileId = "example:voidGun";
const duneType = api.terrains.getTypeById("dune");
const sandType = api.elements.getTypeById("sand");

api.excavation.registerProfile(profileId, {
  power: 8,
  terrainRules: [
    {
      cellType: duneType,
      outputElementType: sandType,
    },
  ],
});

api.hooks.modify("excavation:prepare", (args) => {
  if (
    args.sourceKind !== "projectile"
    || args.sourceId !== "implosionGun"
  ) {
    return;
  }

  args.profileId = profileId;
});
```

</div>
