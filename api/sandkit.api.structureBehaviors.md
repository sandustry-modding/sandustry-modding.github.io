# sandkit.api.structureBehaviors

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structureBehaviors.registerConveyorType :id=registerconveyortype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structureBehaviors.d.ts#L24" target="_blank" rel="noopener">structureBehaviors.d.ts:24</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structureBehaviors.registerConveyorType(structureId: string, options?: object): void">

```ts
registerConveyorType(structureId: string, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureId | `string` | Structure type id string. |
| options? | <code>Transport offset, velocity, distance, and run direction.</code> |  |

<div class="smt-member-anchors">

##### structureId <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Register conveyor behavior for a structure type.

#### Example

```ts
api.structureBehaviors.registerConveyorType(
  "exampleConveyor",
  { runWith: "right" },
);
```

</div>

<div class="smt-member-card">

### sandkit.api.structureBehaviors.registerLauncherType :id=registerlaunchertype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structureBehaviors.d.ts#L39" target="_blank" rel="noopener">structureBehaviors.d.ts:39</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structureBehaviors.registerLauncherType(definition: object): void">

```ts
registerLauncherType(definition: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | <code>Launcher type ids, velocities, and optional shared buffer key.</code> |  |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Register launcher behavior for up, left, and right launcher types.

</div>
