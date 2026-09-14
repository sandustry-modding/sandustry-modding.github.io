# sandkit

Live `sandkit` object — shape, ambient binding docs, and nested bags.

Mirrors on-disk `src/sandkit/` and the host free variable: `api`, `engine`,
`enums`, `react`, `state`. Prefer the free name `sandkit` in mod code
(`src/global.d.ts`); do not import a value binding.

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.api :id=sandkitapi

```ts
SandkitApi = object
```

Defined in: [sandkit/api/sandkit-api.d.ts:8](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L8)

Composed main-thread `sandkit.api` object type.

Each property matches a namespace under `sandkit.api.*`.
Namespace members are documented in their module files.
Use this type when typing the host `sandkit.api` value as a whole.

#### Properties

##### action

```ts
action: action
```

Defined in: [sandkit/api/sandkit-api.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L10)

Player action and custom action data.

##### assets

```ts
assets: assets
```

Defined in: [sandkit/api/sandkit-api.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L12)

Mod asset URLs and provider selection.

##### authorization

```ts
authorization: authorization
```

Defined in: [sandkit/api/sandkit-api.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L14)

Build authorization checks.

##### building

```ts
building: building
```

Defined in: [sandkit/api/sandkit-api.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L16)

Building mode and placement.

##### blueprints

```ts
blueprints: blueprints
```

Defined in: [sandkit/api/sandkit-api.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L18)

Structure blueprint serialize and localize helpers.

##### camera

```ts
camera: camera
```

Defined in: [sandkit/api/sandkit-api.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L20)

Camera position and bounds.

##### collector

```ts
collector: collector
```

Defined in: [sandkit/api/sandkit-api.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L22)

Collector machine helpers.

##### constants

```ts
constants: constants
```

Defined in: [sandkit/api/sandkit-api.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L24)

Shared game constants.

##### cooldown

```ts
cooldown: cooldown
```

Defined in: [sandkit/api/sandkit-api.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L26)

Cooldown timers.

##### discoveries

```ts
discoveries: discoveries
```

Defined in: [sandkit/api/sandkit-api.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L28)

Discovery tracking.

##### effects

```ts
effects: effects
```

Defined in: [sandkit/api/sandkit-api.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L30)

Visual and gameplay effects.

##### elements

```ts
elements: elements
```

Defined in: [sandkit/api/sandkit-api.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L32)

Element types and cell mutations.

##### entities

```ts
entities: entities
```

Defined in: [sandkit/api/sandkit-api.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L34)

Entity spawn, capture, and lifecycle.

##### energy

```ts
energy: energy
```

Defined in: [sandkit/api/sandkit-api.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L36)

Energy network helpers.

##### events

```ts
events: events
```

Defined in: [sandkit/api/sandkit-api.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L38)

Game event subscription.

##### excavation

```ts
excavation: excavation
```

Defined in: [sandkit/api/sandkit-api.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L40)

Excavation helpers.

##### fire

```ts
fire: fire
```

Defined in: [sandkit/api/sandkit-api.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L42)

Fire and burning helpers.

##### factory

```ts
factory: factory
```

Defined in: [sandkit/api/sandkit-api.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L44)

Factory progression level and process counters.

##### game

```ts
game: game
```

Defined in: [sandkit/api/sandkit-api.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L46)

Game session start helpers.

##### gameConfig

```ts
gameConfig: gameConfig
```

Defined in: [sandkit/api/sandkit-api.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L48)

Game configuration values.

##### grid

```ts
grid: grid
```

Defined in: [sandkit/api/sandkit-api.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L53)

Cell queries, deferred mutations, fog, and redraw.
Official name for the former `api.world` surface.

##### hooks

```ts
hooks: hooks
```

Defined in: [sandkit/api/sandkit-api.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L55)

Intercept and modify hooks.

##### i18n

```ts
i18n: i18n
```

Defined in: [sandkit/api/sandkit-api.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L57)

Localization strings.

##### input

```ts
input: input
```

Defined in: [sandkit/api/sandkit-api.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L59)

Input state and bindings.

##### items

```ts
items: items
```

Defined in: [sandkit/api/sandkit-api.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L61)

Item definitions and inventory.

##### lights

```ts
lights: lights
```

Defined in: [sandkit/api/sandkit-api.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L63)

Dynamic light sources.

##### maps

```ts
maps: maps
```

Defined in: [sandkit/api/sandkit-api.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L65)

Map selection and session start.

##### mods

```ts
mods: mods
```

Defined in: [sandkit/api/sandkit-api.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L67)

Mod asset provider lookup.

##### patterns

```ts
patterns: patterns
```

Defined in: [sandkit/api/sandkit-api.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L69)

Excavation pattern helpers.

##### pipes

```ts
pipes: pipes
```

Defined in: [sandkit/api/sandkit-api.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L71)

Pipe network queries and enablement.

##### pickups

```ts
pickups: pickups
```

Defined in: [sandkit/api/sandkit-api.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L73)

World pickup spawn, collect, and lookup.

##### player

```ts
player: player
```

Defined in: [sandkit/api/sandkit-api.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L75)

Player position, movement, and inventory.

##### processing

```ts
processing: processing
```

Defined in: [sandkit/api/sandkit-api.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L77)

Processing recipe registration.

##### progression

```ts
progression: progression
```

Defined in: [sandkit/api/sandkit-api.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L79)

Story progression completion.

##### projectiles

```ts
projectiles: projectiles
```

Defined in: [sandkit/api/sandkit-api.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L81)

Projectile spawn and lifecycle.

##### random

```ts
random: random
```

Defined in: [sandkit/api/sandkit-api.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L83)

Game random number helpers.

##### raycast

```ts
raycast: raycast
```

Defined in: [sandkit/api/sandkit-api.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L85)

World raycast queries.

##### reactions

```ts
reactions: reactions
```

Defined in: [sandkit/api/sandkit-api.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L87)

Element contact reactions.

##### rendering

```ts
rendering: rendering
```

Defined in: [sandkit/api/sandkit-api.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L89)

Screen drawing and overlay canvas.

##### resources

```ts
resources: resources
```

Defined in: [sandkit/api/sandkit-api.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L91)

Fluxite and energy resources.

##### scene

```ts
scene: scene
```

Defined in: [sandkit/api/sandkit-api.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L93)

Active game scene.

##### schedule

```ts
schedule: schedule
```

Defined in: [sandkit/api/sandkit-api.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L95)

Next-tick callback scheduling.

##### settings

```ts
settings: settings
```

Defined in: [sandkit/api/sandkit-api.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L97)

Game settings read and change events.

##### shared

```ts
shared: shared
```

Defined in: [sandkit/api/sandkit-api.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L99)

Cross-thread shared buffers.

##### signals

```ts
signals: signals
```

Defined in: [sandkit/api/sandkit-api.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L101)

Signal target registration.

##### sound

```ts
sound: sound
```

Defined in: [sandkit/api/sandkit-api.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L103)

Sound playback and stop controls.

##### sprites

```ts
sprites: sprites
```

Defined in: [sandkit/api/sandkit-api.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L105)

Sprite load and transforms.

##### storage

```ts
storage: storage
```

Defined in: [sandkit/api/sandkit-api.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L107)

Per-mod and local storage.

##### structureBehaviors

```ts
structureBehaviors: structureBehaviors
```

Defined in: [sandkit/api/sandkit-api.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L109)

Conveyor and launcher behaviors.

##### structures

```ts
structures: structures
```

Defined in: [sandkit/api/sandkit-api.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L111)

Structure registration and queries.

##### tech

```ts
tech: tech
```

Defined in: [sandkit/api/sandkit-api.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L113)

Tech tree definitions and locks.

##### terrains

```ts
terrains: terrains
```

Defined in: [sandkit/api/sandkit-api.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L115)

Terrain registration and mutations.

##### time

```ts
time: time
```

Defined in: [sandkit/api/sandkit-api.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L117)

Game time and tick counter.

##### tools

```ts
tools: tools
```

Defined in: [sandkit/api/sandkit-api.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L119)

Tool-specific helpers.

##### triggers

```ts
triggers: triggers
```

Defined in: [sandkit/api/sandkit-api.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L121)

Interval trigger registration.

##### ui

```ts
ui: ui
```

Defined in: [sandkit/api/sandkit-api.d.ts:123](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L123)

UI overlays, dialogs, and navigation.

##### upgrades

```ts
upgrades: upgrades
```

Defined in: [sandkit/api/sandkit-api.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L125)

Upgrade categories and levels.

##### utils

```ts
utils: utils
```

Defined in: [sandkit/api/sandkit-api.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L127)

Vector math helpers.

##### workers

```ts
workers: workers
```

Defined in: [sandkit/api/sandkit-api.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L129)

Worker post-update control.

##### ~~world~~

```ts
world: world
```

Defined in: [sandkit/api/sandkit-api.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L133)

###### Deprecated

Use [grid](?id=grid) for cell APIs and [pickups](?id=pickups) for world items.

<div class="smt-member-card">

### sandkit.sandkit :id=sandkit

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L33" target="_blank" rel="noopener">index.d.ts:33</a></p>

<div class="smt-member-sig" data-sig="Sandkit = object">

```ts
Sandkit = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| api | <code>SandkitApi</code> | Public mod API. See [sandkit.api](api/sandkit.api.md). |
| apiVersion | <code>number</code> | Sandkit API version number (live value is `1`). |
| engine | <code>SandkitEngine</code> | **`Internal`** State-first internals. See [SandkitEngine](api/sandkit.engine.md?id=sandkitengine). |
| enums | <code>SandkitEnums</code> | Runtime enum bags. See [sandkit.enums](api/sandkit.enums.md). |
| react | <code>SandkitReact</code> | Host React package. See [SandkitReact](api/sandkit.react.md?id=sandkitreact). |
| state | <code>SandkitState</code> | Game state. Same object as `sandkit.engine.state` at runtime. See [SandkitState](api/sandkit.engine.md?id=sandkitstate). |

<div class="smt-member-anchors">

##### api <!-- {docsify-ignore} -->

##### apiVersion <!-- {docsify-ignore} -->

##### engine <!-- {docsify-ignore} -->

##### enums <!-- {docsify-ignore} -->

##### react <!-- {docsify-ignore} -->

##### state <!-- {docsify-ignore} -->

</div>

Shape of the host-injected `sandkit` free variable in mod `main.js`.

#### Example

**Accessing the API**

```ts
const api = sandkit.api; // Stable API

// Unstable engine escape hatch
const engineApi = sandkit.engine.api;
const engineState = sandkit.engine.state;
```

</div>
