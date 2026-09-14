# sandkit.engine

**`Internal`**

`sandkit.engine` — state-first engine APIs and Retro Console.

Runtime paths: `sandkit.engine.api.<name>` and `sandkit.engine.state`
(same object as `sandkit.state`). Available on both the main thread
(`main.js`) and worker thread (`worker.js`). The public `sandkit.api`
surface still differs by runtime.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
These declarations are best-effort stubs. There is no guarantee they are
complete or correct.

## Interfaces <!-- {docsify-ignore} -->

### sandkit.engine :id=sandkitengine

Defined in: [sandkit/engine/index.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L132)

**`Internal`**

Host `sandkit.engine` object (main and worker).

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
At runtime `sandkit.engine.state === sandkit.state`.

#### Properties

##### api

```ts
api: SandkitEngineApi
```

Defined in: [sandkit/engine/index.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L133)

##### state

```ts
state: SandkitState
```

Defined in: [sandkit/engine/index.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L134)

<div class="smt-member-card">

### sandkit.engine.RetroConsoleDisplay :id=retroconsoledisplay

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L14" target="_blank" rel="noopener">retro-console.d.ts:14</a></p>

| Property | Type | Description |
| --- | --- | --- |
| width | <code>number</code> |  |
| height | <code>number</code> |  |

<div class="smt-member-anchors">

##### width <!-- {docsify-ignore} -->

##### height <!-- {docsify-ignore} -->

</div>

| Method | Signature | Description |
| --- | --- | --- |
| clearScreen() | <code>(value?: RetroConsolePixel): void</code> | Clear the framebuffer. Optional fill value defaults to off. |
| drawPixel() | <code>(x: number, y: number, value: RetroConsolePixel): void</code> | Set one pixel in the framebuffer. |

<div class="smt-member-anchors">

##### clearScreen() <!-- {docsify-ignore} -->

##### drawPixel() <!-- {docsify-ignore} -->

</div>

**`Internal`**

Low-resolution display buffer for a Retro Console game.

</div>

<div class="smt-member-card">

### sandkit.engine.RetroConsoleInput :id=retroconsoleinput

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L24" target="_blank" rel="noopener">retro-console.d.ts:24</a></p>

| Property | Type | Description |
| --- | --- | --- |
| x | <code>number</code> |  |
| y | <code>number</code> |  |

<div class="smt-member-anchors">

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

</div>

**`Internal`**

Directional input from the Retro Console controls.

</div>

<div class="smt-member-card">

### sandkit.engine.RetroConsoleGameOptions :id=retroconsolegameoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L30" target="_blank" rel="noopener">retro-console.d.ts:30</a></p>

| Property | Type | Description |
| --- | --- | --- |
| width | <code>number</code> |  |
| height | <code>number</code> |  |

<div class="smt-member-anchors">

##### width <!-- {docsify-ignore} -->

##### height <!-- {docsify-ignore} -->

</div>

**`Internal`**

Display size options for a registered Retro Console game.

</div>

<div class="smt-member-card">

### sandkit.engine.RetroConsoleGame :id=retroconsolegame

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L36" target="_blank" rel="noopener">retro-console.d.ts:36</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> |  |
| name | <code>string</code> |  |
| options? | <code>RetroConsoleGameOptions</code> |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### name <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

| Method | Signature | Description |
| --- | --- | --- |
| init() | <code>(display: RetroConsoleDisplay): TState</code> | Create initial game state and draw the first frame. |
| update() | <code>(display: RetroConsoleDisplay, state: TState): TState</code> | Advance one frame and return updated game state. |
| handleInput()? | <code>(display: RetroConsoleDisplay, state: TState, input: RetroConsoleInput): TState</code> | Handle player input when provided. |

<div class="smt-member-anchors">

##### init() <!-- {docsify-ignore} -->

##### update() <!-- {docsify-ignore} -->

##### handleInput()? <!-- {docsify-ignore} -->

</div>

**`Internal`**

Retro Console game definition passed to [RetroConsoleApi.registerGame](?id=registergame).

`TState` = `unknown`

</div>

<div class="smt-member-card">

### sandkit.engine.RetroConsoleApi :id=retroconsoleapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L49" target="_blank" rel="noopener">retro-console.d.ts:49</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| registerGame() | <code>&lt;TState&gt;(game: RetroConsoleGame&lt;TState&gt;): void</code> | Register a Retro Console mini-game. |

<div class="smt-member-anchors">

##### registerGame() <!-- {docsify-ignore} -->

</div>

**`Internal`**

`sandkit.engine.api.retroConsole` registration API.

</div>

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.engine.api :id=sandkitengineapi

```ts
SandkitEngineApi = object
```

Defined in: [sandkit/engine/index.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L32)

**`Internal`**

Composed `sandkit.engine.api` shape.

Overlap namespaces mirror [sandkit.api](api/sandkit.api.md) with state-first signatures.
Engine-only namespaces are declared under `api/`.

#### Properties

##### action

```ts
action: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L34)

##### authorization

```ts
authorization: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L35)

##### building

```ts
building: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L36)

##### camera

```ts
camera: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L37)

##### collector

```ts
collector: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L38)

##### constants

```ts
constants: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L39)

##### cooldown

```ts
cooldown: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L40)

##### discoveries

```ts
discoveries: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L41)

##### effects

```ts
effects: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L42)

##### elements

```ts
elements: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L43)

##### energy

```ts
energy: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L44)

##### events

```ts
events: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L45)

##### excavation

```ts
excavation: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L46)

##### fire

```ts
fire: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L47)

##### grid

```ts
grid: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L48)

##### hooks

```ts
hooks: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L49)

##### i18n

```ts
i18n: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L50)

##### input

```ts
input: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L51)

##### items

```ts
items: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L52)

##### lights

```ts
lights: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L53)

##### maps

```ts
maps: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L54)

##### patterns

```ts
patterns: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L55)

##### player

```ts
player: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L56)

##### processing

```ts
processing: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L57)

##### progression

```ts
progression: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L58)

##### projectiles

```ts
projectiles: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L59)

##### random

```ts
random: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L60)

##### raycast

```ts
raycast: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L61)

##### reactions

```ts
reactions: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L62)

##### rendering

```ts
rendering: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L63)

##### resources

```ts
resources: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L64)

##### scene

```ts
scene: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L65)

##### schedule

```ts
schedule: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L66)

##### signals

```ts
signals: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L67)

##### sound

```ts
sound: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L68)

##### sprites

```ts
sprites: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L69)

##### storage

```ts
storage: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L70)

##### structures

```ts
structures: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L71)

##### tech

```ts
tech: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L72)

##### terrains

```ts
terrains: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L73)

##### tools

```ts
tools: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L74)

##### triggers

```ts
triggers: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L75)

##### ui

```ts
ui: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L76)

##### upgrades

```ts
upgrades: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L77)

##### utils

```ts
utils: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L78)

##### workers

```ts
workers: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L79)

##### world

```ts
world: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L80)

##### augments

```ts
augments: augments
```

Defined in: [sandkit/engine/index.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L83)

##### auralite

```ts
auralite: auralite
```

Defined in: [sandkit/engine/index.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L84)

##### blueprints

```ts
blueprints: blueprints
```

Defined in: [sandkit/engine/index.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L85)

##### clipboard

```ts
clipboard: clipboard
```

Defined in: [sandkit/engine/index.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L86)

##### colorPicker

```ts
colorPicker: colorPicker
```

Defined in: [sandkit/engine/index.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L87)

##### coloringTool

```ts
coloringTool: coloringTool
```

Defined in: [sandkit/engine/index.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L88)

##### conveyors

```ts
conveyors: conveyors
```

Defined in: [sandkit/engine/index.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L89)

##### debug

```ts
debug: debug
```

Defined in: [sandkit/engine/index.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L90)

##### drones

```ts
drones: drones
```

Defined in: [sandkit/engine/index.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L91)

##### entities

```ts
entities: entities
```

Defined in: [sandkit/engine/index.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L92)

##### extensions

```ts
extensions: extensions
```

Defined in: [sandkit/engine/index.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L93)

##### factory

```ts
factory: factory
```

Defined in: [sandkit/engine/index.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L94)

##### foliage

```ts
foliage: foliage
```

Defined in: [sandkit/engine/index.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L95)

##### foundationColorPicker

```ts
foundationColorPicker: foundationColorPicker
```

Defined in: [sandkit/engine/index.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L96)

##### game

```ts
game: game
```

Defined in: [sandkit/engine/index.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L97)

##### heatTransfer

```ts
heatTransfer: heatTransfer
```

Defined in: [sandkit/engine/index.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L98)

##### launchers

```ts
launchers: launchers
```

Defined in: [sandkit/engine/index.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L99)

##### lightColorPicker

```ts
lightColorPicker: lightColorPicker
```

Defined in: [sandkit/engine/index.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L100)

##### matters

```ts
matters: matters
```

Defined in: [sandkit/engine/index.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L101)

##### misc

```ts
misc: misc
```

Defined in: [sandkit/engine/index.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L102)

##### portals

```ts
portals: portals
```

Defined in: [sandkit/engine/index.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L103)

##### prefabData

```ts
prefabData: prefabData
```

Defined in: [sandkit/engine/index.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L104)

##### prefabDecor

```ts
prefabDecor: prefabDecor
```

Defined in: [sandkit/engine/index.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L105)

##### prefabulator

```ts
prefabulator: prefabulator
```

Defined in: [sandkit/engine/index.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L106)

##### prismaline

```ts
prismaline: prismaline
```

Defined in: [sandkit/engine/index.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L107)

##### prismite

```ts
prismite: prismite
```

Defined in: [sandkit/engine/index.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L108)

##### queue

```ts
queue: queue
```

Defined in: [sandkit/engine/index.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L109)

##### shadows

```ts
shadows: shadows
```

Defined in: [sandkit/engine/index.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L110)

##### strataform

```ts
strataform: strataform
```

Defined in: [sandkit/engine/index.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L111)

##### swarmConsole

```ts
swarmConsole: swarmConsole
```

Defined in: [sandkit/engine/index.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L112)

##### sweeperDrone

```ts
sweeperDrone: sweeperDrone
```

Defined in: [sandkit/engine/index.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L113)

##### teleportZones

```ts
teleportZones: teleportZones
```

Defined in: [sandkit/engine/index.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L114)

##### tutorialBuild

```ts
tutorialBuild: tutorialBuild
```

Defined in: [sandkit/engine/index.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L115)

##### usageTracker

```ts
usageTracker: usageTracker
```

Defined in: [sandkit/engine/index.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L116)

##### wall

```ts
wall: wall
```

Defined in: [sandkit/engine/index.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L117)

##### workerLocal

```ts
workerLocal: workerLocal
```

Defined in: [sandkit/engine/index.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L118)

##### config

```ts
config: EngineFn
```

Defined in: [sandkit/engine/index.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L119)

##### extend

```ts
extend: EngineFn
```

Defined in: [sandkit/engine/index.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L120)

##### retroConsole

```ts
retroConsole: RetroConsoleApi
```

Defined in: [sandkit/engine/index.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L121)

<div class="smt-member-card">

### sandkit.engine.RetroConsolePixel :id=retroconsolepixel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L11" target="_blank" rel="noopener">retro-console.d.ts:11</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.RetroConsolePixel = boolean | number">

```ts
RetroConsolePixel = boolean | number
```

</div>

**`Internal`**

Pixel value for the Retro Console framebuffer.

</div>

### sandkit.state :id=sandkitstate

```ts
SandkitState = object
```

Defined in: [sandkit/engine/state.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/state.d.ts#L12)

**`Internal`**

Live game state exposed on `sandkit.engine.state`.

#### Properties

##### environment

```ts
environment: object
```

Defined in: [sandkit/engine/state.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/state.d.ts#L13)

###### Index Signature

\[`key`: `string`\]: `unknown`

###### context

```ts
context: number
```

###### multithreading

```ts
multithreading: unknown
```

##### sandkit

```ts
sandkit: object
```

Defined in: [sandkit/engine/state.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/state.d.ts#L18)

###### Index Signature

\[`key`: `string`\]: `unknown`

###### events

```ts
events: unknown
```

###### gameReady

```ts
gameReady: boolean
```

###### graphics

```ts
graphics: unknown
```

###### hooks

```ts
hooks: unknown
```

###### keyBindings

```ts
keyBindings: unknown
```

###### mods

```ts
mods: unknown
```

###### registeredLauncherTypes

```ts
registeredLauncherTypes: unknown
```

##### session

```ts
session: unknown
```

Defined in: [sandkit/engine/state.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/state.d.ts#L28)

##### shared

```ts
shared: unknown
```

Defined in: [sandkit/engine/state.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/state.d.ts#L29)

##### store

```ts
store: unknown
```

Defined in: [sandkit/engine/state.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/state.d.ts#L30)
