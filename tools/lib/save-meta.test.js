import assert from "node:assert/strict";
import test from "node:test";
import {
  applySaveMeta,
  buildSaveHeader,
  cellToPixels,
  formatPlayTime,
  pixelsToCell,
  readSaveMeta,
} from "./save-meta.js";

test("readSaveMeta prefers store body over header snapshots", () => {
  const fields = readSaveMeta(
    {
      id: "slot",
      name: "Header",
      playTime: 1,
      worldName: "Old",
      resources: { gold: 1, fluxite: 1, artifacts: 3 },
    },
    {
      store: {
        meta: { time: 5000, worldId: "void", worldName: "Void", seed: 9 },
        world: { size: { width: 8, height: 8 } },
        player: { x: 16, y: 20 },
        resources: { gold: 10, fluxite: 2, energy: 7, artifacts: { available: 4, found: 1 } },
        productionPoints: 11,
        structures: [{}, {}],
        version: "0.5.6",
        createdVersion: "0.5.2",
      },
    },
  );
  assert.equal(fields.id, "slot");
  assert.equal(fields.name, "Header");
  assert.equal(fields.playTime, 5000);
  assert.equal(fields.worldName, "Void");
  assert.equal(fields.gold, 10);
  assert.equal(fields.artifactsAvailable, 4);
  assert.equal(fields.artifactsFound, 1);
  assert.equal(fields.structureCount, 2);
  assert.equal(fields.playerX, 16);
  assert.equal(fields.width, 8);
});

test("applySaveMeta and buildSaveHeader match the game header snapshot", () => {
  const data = {
    store: {
      meta: {},
      resources: { artifacts: { available: 0, found: 0 } },
      player: {},
      structures: [1],
    },
  };
  applySaveMeta(data, {
    playTime: 12000,
    worldId: "custom",
    worldName: "Lab",
    seed: 42,
    productionPoints: 8,
    gold: 3,
    fluxite: 4,
    energy: 9,
    artifactsAvailable: 5,
    artifactsFound: 2,
    playerX: 40,
    playerY: 80,
  });
  const header = buildSaveHeader({ id: "lab", name: "Lab save", timestamp: "t" }, data, "lab");
  assert.equal(data.store.meta.time, 12000);
  assert.equal(data.store.player.x, 40);
  assert.equal(data.store.resources.artifacts.available, 5);
  assert.equal(header.playTime, 12000);
  assert.equal(header.worldName, "Lab");
  assert.equal(header.seed, 42);
  assert.equal(header.structureCount, 1);
  assert.equal(header.resources.artifacts, 5);
  assert.equal(header.resources.gold, 3);
});

test("play time and cell helpers", () => {
  assert.equal(formatPlayTime(3661000), "1h 1m 1s");
  assert.equal(pixelsToCell(19), 4);
  assert.equal(cellToPixels(4), 16);
});
