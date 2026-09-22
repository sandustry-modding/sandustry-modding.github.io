const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { test } = require("node:test");
const vm = require("node:vm");
const { join } = require("node:path");

function loadApiTree() {
  const code = readFileSync(join(__dirname, "api-tree.js"), "utf8");
  const sandbox = { globalThis: {}, module: { exports: {} } };
  sandbox.globalThis = sandbox;
  vm.runInNewContext(code, sandbox, { filename: "api-tree.js" });
  return sandbox.SMT_API_TREE;
}

test("groupRoots nests sandkit.api under sandkit.api.main", () => {
  const apiTree = loadApiTree();
  const tree = apiTree.groupRoots([
    {
      name: "player",
      slug: "sandkit.api.player",
      href: "#/api/sandkit.api.player",
      children: [],
    },
    {
      name: "elements",
      slug: "sandkit.api.elements.worker",
      href: "#/api/sandkit.api.elements.worker",
      children: [],
    },
    {
      name: "shadows",
      slug: "sandkit.engine.api.shadows",
      href: "#/api/sandkit.engine.api.shadows",
      children: [],
    },
  ]);
  const sandkit = tree.children.find((c) => c.kind === "folder" && c.name === "sandkit");
  assert.ok(sandkit);
  const api = sandkit.children.find((c) => c.kind === "folder" && c.name === "api");
  assert.ok(api);
  const main = api.children.find((c) => c.kind === "folder" && c.name === "main");
  const worker = api.children.find((c) => c.kind === "folder" && c.name === "worker");
  assert.equal(main.children[0].slug, "sandkit.api.player");
  assert.equal(worker.children[0].slug, "sandkit.api.elements.worker");
  const engine = sandkit.children.find((c) => c.kind === "folder" && c.name === "engine");
  assert.equal(engine.children[0].name, "api");
  assert.equal(engine.children[0].children[0].slug, "sandkit.engine.api.shadows");
});

test("slugMatches treats search hits as namespace prefixes", () => {
  const apiTree = loadApiTree();
  assert.equal(apiTree.slugMatches(["sandkit.api.player.unlockById"], "sandkit.api.player"), true);
  assert.equal(apiTree.slugMatches(["sandkit.api.player.unlockById"], "sandkit.api.grid"), false);
});

test("findCurrentApiRoot picks the parent namespace for a child page", () => {
  const apiTree = loadApiTree();
  const roots = [
    {
      name: "player",
      slug: "sandkit.api.player",
      href: "#/api/sandkit.api.player",
      children: [
        {
          name: "inventory",
          slug: "sandkit.api.player.inventory",
          href: "#/api/sandkit.api.player.inventory",
          children: [],
        },
      ],
    },
    {
      name: "elements",
      slug: "sandkit.api.elements",
      href: "#/api/sandkit.api.elements",
      children: [],
    },
    {
      name: "elements",
      slug: "sandkit.api.elements.worker",
      href: "#/api/sandkit.api.elements.worker",
      children: [],
    },
  ];
  assert.equal(
    apiTree.findCurrentApiRoot(roots, "sandkit.api.player.inventory")?.slug,
    "sandkit.api.player",
  );
  assert.equal(apiTree.findCurrentApiRoot(roots, "sandkit.api.elements.worker")?.slug, "sandkit.api.elements.worker");
  assert.equal(apiTree.findCurrentApiRoot(roots, "sandkit.api.elements")?.slug, "sandkit.api.elements");
  assert.equal(apiTree.findCurrentApiRoot(roots, "search"), null);
});
