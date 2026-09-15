/**
 * Live OKF bundle viewer: crawl okf/*.md, graph concepts, render a detail panel.
 */
(function (global) {
  var VIEWER_PATHS = { "/okf": true, "/okf/": true, "/okf/README": true };
  var CYTOSCAPE_SRC = "https://cdn.jsdelivr.net/npm/cytoscape@3.30.4/dist/cytoscape.min.js";
  var MARKED_SRC = "https://cdn.jsdelivr.net/npm/marked@15.0.12/marked.min.js";
  var DOMAIN_COLORS = {
    api: "#4a9eff",
    world: "#c99400",
    factory: "#ff9900",
    energy: "#eab308",
    player: "#7ec8ff",
    ui: "#a78bfa",
    progression: "#34d399",
    entities: "#fb7185",
    internals: "#94a3b8",
    live: "#38bdf8",
    references: "#10b981",
    root: "#ffb800",
  };
  var loadedLibs = false;
  var loadPromise = null;

  function isViewerPath(path) {
    return Boolean(VIEWER_PATHS[path]);
  }

  function routePath() {
    var hash = global.location.hash || "";
    var cut = hash.split("?");
    var path = cut[0].replace(/^#/, "") || "/";
    return path;
  }

  function parseRoute() {
    var hash = global.location.hash || "";
    var cut = hash.split("?");
    var path = cut[0].replace(/^#/, "") || "/";
    if (!isViewerPath(path)) return null;
    var params = new URLSearchParams(cut[1] || "");
    return {
      id: params.get("id") || "",
      q: params.get("q") || "",
      type: params.get("type") || "",
      domain: params.get("domain") || "",
      layout: params.get("layout") || "cose",
      expand: params.get("expand") || "",
    };
  }

  function writeRoute(state, replace) {
    var params = new URLSearchParams();
    if (state.id) params.set("id", state.id);
    if (state.q) params.set("q", state.q);
    if (state.type) params.set("type", state.type);
    if (state.domain) params.set("domain", state.domain);
    if (state.layout && state.layout !== "cose") params.set("layout", state.layout);
    if (state.expand) params.set("expand", state.expand);
    var qs = params.toString();
    var next = "#/okf/" + (qs ? "?" + qs : "");
    if ((global.location.hash || "") === next) return;
    if (replace && global.history && global.history.replaceState) {
      global.history.replaceState(null, "", next);
    } else {
      global.location.hash = next.slice(1);
    }
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var existing = document.querySelector('script[data-smt-okf="' + src + '"]');
      if (existing) {
        if (existing.getAttribute("data-loaded") === "1") resolve();
        else existing.addEventListener("load", function () { resolve(); });
        return;
      }
      var script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.setAttribute("data-smt-okf", src);
      script.onload = function () {
        script.setAttribute("data-loaded", "1");
        resolve();
      };
      script.onerror = function () {
        reject(new Error("Failed to load " + src));
      };
      document.head.appendChild(script);
    });
  }

  function ensureLibs() {
    if (loadedLibs) return Promise.resolve();
    if (loadPromise) return loadPromise;
    loadPromise = Promise.all([loadScript(CYTOSCAPE_SRC), loadScript(MARKED_SRC)]).then(function () {
      loadedLibs = true;
    });
    return loadPromise;
  }

  function fetchText(url) {
    return fetch(url, { cache: "no-cache" }).then(function (res) {
      if (!res.ok) throw new Error(String(res.status));
      return res.text();
    });
  }

  function unquote(value) {
    var text = String(value || "").trim();
    if (
      (text.charAt(0) === '"' && text.charAt(text.length - 1) === '"') ||
      (text.charAt(0) === "'" && text.charAt(text.length - 1) === "'")
    ) {
      return text.slice(1, -1);
    }
    return text;
  }

  function parseFrontmatter(raw) {
    var text = String(raw || "").replace(/^\uFEFF/, "");
    if (text.slice(0, 3) !== "---") return { meta: {}, body: text };
    var end = text.indexOf("\n---", 3);
    if (end < 0) return { meta: {}, body: text };
    var yaml = text.slice(4, end);
    var body = text.slice(end + 4).replace(/^\r?\n/, "");
    return { meta: parseYaml(yaml), body: body };
  }

  function parseYaml(yaml) {
    var meta = {};
    var lines = String(yaml || "").split(/\r?\n/);
    var i;
    var key = null;
    var list = null;
    var obj = null;
    for (i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (!line.trim() || line.trim().charAt(0) === "#") continue;
      var indent = line.match(/^\s*/)[0].length;
      var trimmed = line.trim();
      if (indent === 0 && trimmed.indexOf(":") > 0 && trimmed.charAt(0) !== "-") {
        var cut = trimmed.indexOf(":");
        key = trimmed.slice(0, cut);
        var rest = trimmed.slice(cut + 1).trim();
        list = null;
        obj = null;
        if (!rest) {
          meta[key] = {};
        } else {
          meta[key] = unquote(rest);
        }
        continue;
      }
      if (key && trimmed.charAt(0) === "-" && indent >= 2) {
        if (!Array.isArray(meta[key])) meta[key] = [];
        list = meta[key];
        var item = trimmed.slice(1).trim();
        if (!item) {
          obj = {};
          list.push(obj);
        } else if (item.indexOf(":") > 0) {
          obj = {};
          var ic = item.indexOf(":");
          obj[item.slice(0, ic)] = unquote(item.slice(ic + 1).trim());
          list.push(obj);
        } else {
          obj = null;
          list.push(unquote(item));
        }
        continue;
      }
      if (key && indent >= 2 && trimmed.charAt(0) !== "-" && trimmed.indexOf(":") > 0) {
        var nc = trimmed.indexOf(":");
        var nestedKey = trimmed.slice(0, nc);
        var nestedVal = unquote(trimmed.slice(nc + 1).trim());
        if (obj && indent >= 4) {
          obj[nestedKey] = nestedVal;
        } else if (meta[key] && typeof meta[key] === "object" && !Array.isArray(meta[key])) {
          meta[key][nestedKey] = nestedVal;
        }
      }
    }
    return meta;
  }

  function firstHeading(body) {
    var match = String(body || "").match(/^#\s+(.+)$/m);
    return match ? match[1].trim() : "";
  }

  function parseHref(raw) {
    var href = String(raw || "").trim();
    if (!href) return "";
    if (href.charAt(0) === "<") {
      var close = href.indexOf(">");
      href = close >= 0 ? href.slice(1, close) : href.slice(1);
    }
    var space = href.search(/\s/);
    if (space > 0) href = href.slice(0, space);
    return href.replace(/^<|>$/g, "");
  }

  function conceptIdFromUrl(href, fromId) {
    var url = parseHref(href);
    if (!url) return "";
    if (/^(https?:|mailto:|javascript:)/i.test(url)) return "";
    var hashAt = url.indexOf("#");
    if (hashAt === 0) return "";
    if (hashAt > 0) url = url.slice(0, hashAt);
    var path = url;
    if (!/^[./]/.test(path) && path.charAt(0) !== "/") {
      var dir = fromId.indexOf("/") >= 0 ? fromId.slice(0, fromId.lastIndexOf("/") + 1) : "";
      path = dir + path;
    }
    try {
      var resolved = new URL(path, "https://okf.local/okf/" + (fromId.indexOf("/") >= 0 ? fromId.slice(0, fromId.lastIndexOf("/") + 1) : ""));
      path = resolved.pathname;
    } catch (err) {
      return "";
    }
    if (path.indexOf("/okf/") !== 0) return "";
    path = path.slice("/okf/".length);
    if (path.slice(-3) === ".md") path = path.slice(0, -3);
    if (path.slice(-9) === "/README") path = path.slice(0, -7);
    if (!path || path === "README") return "";
    return path.replace(/\/+$/, "");
  }

  function extractLinks(body, fromId) {
    var ids = [];
    var seen = {};
    var re = /\[[^\]]*\]\(([^)]+)\)/g;
    var match;
    while ((match = re.exec(body))) {
      var id = conceptIdFromUrl(match[1], fromId);
      if (!id || id === fromId || seen[id]) continue;
      seen[id] = true;
      ids.push(id);
    }
    return ids;
  }

  function domainOf(id) {
    if (id.indexOf("/") < 0) return "root";
    return id.split("/")[0];
  }

  function domainParentId(domain) {
    return "__domain__" + domain;
  }

  function isConceptHub(data) {
    if (!data || data.kind === "domain") return false;
    if (String(data.id).indexOf("/") < 0) return true;
    return data.type === "Index";
  }

  function parseExpand(value) {
    var text = String(value || "").trim();
    if (!text) return { all: false, domains: {} };
    if (text === "all") return { all: true, domains: {} };
    var domains = {};
    var parts = text.split(",");
    var i;
    for (i = 0; i < parts.length; i++) {
      var name = parts[i].trim();
      if (name) domains[name] = true;
    }
    return { all: false, domains: domains };
  }

  function serializeExpand(expand) {
    if (!expand) return "";
    if (expand.all) return "all";
    return Object.keys(expand.domains)
      .filter(function (name) {
        return expand.domains[name];
      })
      .sort()
      .join(",");
  }

  function layoutOptions(name) {
    var layout = name || "cose";
    if (layout === "cose") {
      return {
        name: "cose",
        animate: false,
        padding: 72,
        nodeOverlap: 24,
        componentSpacing: 160,
        nestingFactor: 1.4,
        gravity: 0.2,
        numIter: 1400,
        initialTemp: 240,
        coolingFactor: 0.95,
        minTemp: 1,
        nodeRepulsion: function () {
          return 180000;
        },
        idealEdgeLength: function () {
          return 96;
        },
        edgeElasticity: function () {
          return 0.35;
        },
      };
    }
    if (layout === "concentric") {
      return {
        name: "concentric",
        animate: false,
        padding: 72,
        minNodeSpacing: 36,
        concentric: function (node) {
          if (node.data("kind") === "domain") return 120;
          if (isConceptHub(node.data())) return 80;
          return 10 + node.degree();
        },
        levelWidth: function () {
          return 3;
        },
      };
    }
    return {
      name: layout,
      animate: false,
      padding: 72,
      spacingFactor: 1.85,
      avoidOverlap: true,
    };
  }

  function inferType(id, meta, body) {
    if (meta.type) return String(meta.type);
    if (id === "AGENTS") return "Rules";
    if (id === "consume") return "Playbook";
    if (id === "log") return "Changelog";
    if (id === "index" || /\/index$/.test(id)) return "Index";
    if (/\/probe$/.test(id)) return "Playbook";
    if (/\/gaps$/.test(id)) return "Gaps";
    if (firstHeading(body)) return "Concept";
    return "Concept";
  }

  function asList(value) {
    if (Array.isArray(value)) {
      return value
        .map(function (item) {
          if (item && typeof item === "object") return item;
          return String(item);
        })
        .filter(Boolean);
    }
    if (value == null || value === "") return [];
    return [value];
  }

  function tagList(meta) {
    return asList(meta.tags).map(function (tag) {
      return typeof tag === "string" ? tag : String(tag);
    });
  }

  function mapPool(items, limit, worker) {
    var i = 0;
    var active = 0;
    var results = new Array(items.length);
    return new Promise(function (resolve) {
      function next() {
        if (i >= items.length && active === 0) {
          resolve(results);
          return;
        }
        while (active < limit && i < items.length) {
          (function (index) {
            active += 1;
            Promise.resolve(worker(items[index], index))
              .then(function (value) {
                results[index] = value;
              })
              .catch(function () {
                results[index] = null;
              })
              .then(function () {
                active -= 1;
                next();
              });
          })(i);
          i += 1;
        }
      }
      next();
    });
  }

  function buildBundle() {
    if (global.SMT_OKF_BUNDLE) return Promise.resolve(global.SMT_OKF_BUNDLE);
    var files = {};
    var queue = ["index", "AGENTS", "consume", "log"];
    var queued = { index: true, AGENTS: true, consume: true, log: true };

    function enqueue(id) {
      if (!id || queued[id] || id === "README") return;
      queued[id] = true;
      queue.push(id);
    }

    function loadOne(id) {
      return fetchText("okf/" + id + ".md").then(function (raw) {
        var parsed = parseFrontmatter(raw);
        var links = extractLinks(parsed.body, id);
        var i;
        for (i = 0; i < links.length; i++) enqueue(links[i]);
        files[id] = parsed;
      });
    }

    function drain() {
      var batch = queue.slice();
      queue.length = 0;
      if (!batch.length) return Promise.resolve();
      return mapPool(batch, 10, loadOne).then(function () {
        if (queue.length) return drain();
      });
    }

    return drain().then(function () {
      var nodes = [];
      var edges = [];
      var bodies = {};
      var types = {};
      var domains = {};
      var ids = Object.keys(files);
      var i;
      var j;
      for (i = 0; i < ids.length; i++) {
        var id = ids[i];
        var parsed = files[id];
        var meta = parsed.meta || {};
        var links = extractLinks(parsed.body, id);
        var type = inferType(id, meta, parsed.body);
        var domain = domainOf(id);
        var label = meta.title || firstHeading(parsed.body) || id;
        types[type] = true;
        domains[domain] = true;
        bodies[id] = parsed.body;
        nodes.push({
          data: {
            id: id,
            label: label,
            type: type,
            domain: domain,
            parent: domainParentId(domain),
            kind: "concept",
            description: meta.description || "",
            tags: tagList(meta),
            status: meta.status || "",
            generated: meta.generated || {},
            sources: asList(meta.sources),
            color: DOMAIN_COLORS[domain] || DOMAIN_COLORS.root,
            size: isConceptHub({ id: id, type: type })
              ? Math.max(18, Math.min(28, 16 + links.length))
              : Math.max(8, Math.min(16, 8 + Math.min(links.length, 8))),
          },
        });
        for (j = 0; j < links.length; j++) {
          var target = links[j];
          if (!files[target]) continue;
          edges.push({
            data: {
              id: id + "__" + target,
              source: id,
              target: target,
              cross: domainOf(id) !== domainOf(target) ? "1" : "",
            },
          });
        }
      }
      var domainIds = Object.keys(domains);
      for (i = 0; i < domainIds.length; i++) {
        var domainId = domainIds[i];
        nodes.push({
          data: {
            id: domainParentId(domainId),
            label: domainId,
            type: "Domain",
            domain: domainId,
            kind: "domain",
            description: "",
            tags: [],
            status: "",
            generated: {},
            sources: [],
            color: DOMAIN_COLORS[domainId] || DOMAIN_COLORS.root,
            size: 1,
          },
        });
      }
      var bundle = {
        nodes: nodes,
        edges: edges,
        bodies: bodies,
        types: Object.keys(types).sort(),
        domains: Object.keys(domains).sort(),
      };
      global.SMT_OKF_BUNDLE = bundle;
      return bundle;
    });
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setPageClass(on) {
    document.body.classList.toggle("smt-okf-viewer-page", on);
  }

  function fillSelect(select, values, current, allLabel) {
    select.innerHTML = "";
    var all = document.createElement("option");
    all.value = "";
    all.textContent = allLabel;
    select.appendChild(all);
    var i;
    for (i = 0; i < values.length; i++) {
      var opt = document.createElement("option");
      opt.value = values[i];
      opt.textContent = values[i];
      select.appendChild(opt);
    }
    select.value = current || "";
  }

  function formatActor(event) {
    if (!event || typeof event !== "object" || !event.by) return "—";
    return event.at ? event.by + " · " + event.at : String(event.by);
  }

  function docsHash(id) {
    return "#/okf/" + id;
  }

  function nodeMatchesQuery(data, q, type, domain) {
    if (data.kind === "domain") return !type;
    if (type && data.type !== type) return false;
    if (domain && data.domain !== domain) return false;
    if (!q) return true;
    var hay = (data.label + " " + data.id + " " + (data.tags || []).join(" ")).toLowerCase();
    return hay.indexOf(q) >= 0;
  }

  function nodeCollapsedAway(data, state) {
    if (data.kind === "domain") return false;
    if (state.domain || String(state.q || "").trim() || state.type) return false;
    var expand = parseExpand(state.expand);
    if (expand.all || expand.domains[data.domain]) return false;
    return !isConceptHub(data);
  }

  function applyFilters(cy, state) {
    var q = String(state.q || "").trim().toLowerCase();
    var type = state.type || "";
    var domain = state.domain || "";
    cy.nodes().forEach(function (node) {
      var data = node.data();
      var hide = !nodeMatchesQuery(data, q, type, domain) || nodeCollapsedAway(data, state);
      node.style("display", hide ? "none" : "element");
    });
    cy.nodes().forEach(function (node) {
      if (node.data("kind") !== "domain") return;
      var visibleChild = false;
      node.children().forEach(function (child) {
        if (child.style("display") !== "none") visibleChild = true;
      });
      node.style("display", visibleChild ? "element" : "none");
    });
    cy.edges().forEach(function (edge) {
      var hide =
        edge.source().style("display") === "none" || edge.target().style("display") === "none";
      edge.style("display", hide ? "none" : "element");
    });
  }

  function mount(root) {
    var route = parseRoute();
    if (!route || !root) return;
    root.innerHTML = '<p class="smt-okf-status">Loading OKF bundle…</p>';
    ensureLibs()
      .then(buildBundle)
      .then(function (bundle) {
        renderViewer(root, bundle, parseRoute() || route);
      })
      .catch(function (err) {
        root.innerHTML = '<p class="smt-okf-status">Could not load the OKF viewer. ' + escapeHtml(err && err.message) + "</p>";
      });
  }

  function renderViewer(root, bundle, route) {
    root.innerHTML =
      '<div class="smt-okf-shell">' +
      '<header class="smt-okf-toolbar">' +
      '<label class="smt-okf-field"><span>Search</span><input id="smt-okf-search" type="search" placeholder="Title, id, or tag"></label>' +
      '<label class="smt-okf-field"><span>Domain</span><select id="smt-okf-domain"></select></label>' +
      '<label class="smt-okf-field"><span>Type</span><select id="smt-okf-type"></select></label>' +
      '<label class="smt-okf-field"><span>Layout</span><select id="smt-okf-layout">' +
      '<option value="cose">cose (force)</option>' +
      '<option value="concentric">concentric</option>' +
      '<option value="breadthfirst">breadth-first</option>' +
      '<option value="circle">circle</option>' +
      '<option value="grid">grid</option>' +
      "</select></label>" +
      '<button type="button" id="smt-okf-expand">Expand all</button>' +
      '<button type="button" id="smt-okf-reset">Reset view</button>' +
      '<p class="smt-okf-count" id="smt-okf-count"></p>' +
      "</header>" +
      '<div class="smt-okf-main">' +
      '<div id="smt-okf-graph" class="smt-okf-graph" role="img" aria-label="OKF concept graph"></div>' +
      '<aside class="smt-okf-detail" id="smt-okf-detail">' +
      '<p class="smt-okf-empty" id="smt-okf-empty">Pick a domain box to expand it, or pick a node to read the concept.</p>' +
      '<div id="smt-okf-content" hidden></div>' +
      "</aside>" +
      "</div></div>";

    var search = document.getElementById("smt-okf-search");
    var domainSelect = document.getElementById("smt-okf-domain");
    var typeSelect = document.getElementById("smt-okf-type");
    var layoutSelect = document.getElementById("smt-okf-layout");
    var expandBtn = document.getElementById("smt-okf-expand");
    var reset = document.getElementById("smt-okf-reset");
    var count = document.getElementById("smt-okf-count");
    var empty = document.getElementById("smt-okf-empty");
    var content = document.getElementById("smt-okf-content");
    var graphEl = document.getElementById("smt-okf-graph");

    fillSelect(domainSelect, bundle.domains, route.domain, "All domains");
    fillSelect(typeSelect, bundle.types, route.type, "All types");
    search.value = route.q;
    layoutSelect.value = route.layout || "cose";

    var nodeIndex = {};
    var backlinks = {};
    var i;
    var conceptCount = 0;
    for (i = 0; i < bundle.nodes.length; i++) {
      var nodeData = bundle.nodes[i].data;
      if (nodeData.kind === "domain") continue;
      conceptCount += 1;
      nodeIndex[nodeData.id] = nodeData;
    }
    for (i = 0; i < bundle.edges.length; i++) {
      var edge = bundle.edges[i].data;
      if (!backlinks[edge.target]) backlinks[edge.target] = [];
      backlinks[edge.target].push(edge.source);
    }

    if (root._cy) {
      root._cy.destroy();
      root._cy = null;
    }

    var cy = global.cytoscape({
      container: graphEl,
      elements: bundle.nodes.concat(bundle.edges),
      style: [
        {
          selector: "node",
          style: {
            "background-color": "data(color)",
            label: "data(label)",
            color: "#f0f0f0",
            "font-size": 11,
            "text-valign": "bottom",
            "text-margin-y": 6,
            "text-wrap": "wrap",
            "text-max-width": 110,
            "text-opacity": 0,
            "text-outline-width": 3,
            "text-outline-color": "#121212",
            width: "data(size)",
            height: "data(size)",
            "border-width": 1,
            "border-color": "#2a2a2a",
          },
        },
        {
          selector: "node[kind = 'domain']",
          style: {
            "background-opacity": 0.08,
            "background-color": "data(color)",
            "border-width": 1,
            "border-color": "data(color)",
            "border-opacity": 0.45,
            shape: "round-rectangle",
            padding: 28,
            label: "data(label)",
            "font-size": 13,
            "font-weight": 700,
            "text-valign": "top",
            "text-halign": "center",
            "text-margin-y": -6,
            "text-opacity": 1,
            color: "data(color)",
          },
        },
        {
          selector: "node.smt-okf-hub",
          style: {
            "text-opacity": 1,
          },
        },
        {
          selector: "node:selected",
          style: {
            "border-width": 3,
            "border-color": "#ffb800",
            "text-opacity": 1,
          },
        },
        {
          selector: "node.smt-okf-label",
          style: {
            "text-opacity": 1,
          },
        },
        {
          selector: "edge",
          style: {
            width: 1,
            "line-color": "#3a3a3a",
            "target-arrow-color": "#3a3a3a",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
            "arrow-scale": 0.7,
            opacity: 0.22,
          },
        },
        {
          selector: "edge[cross = '1']",
          style: {
            opacity: 0.06,
            width: 0.75,
            "target-arrow-shape": "none",
            "line-style": "dotted",
          },
        },
        {
          selector: "edge.smt-okf-focus",
          style: {
            opacity: 0.95,
            width: 2,
            "line-color": "#ff9900",
            "target-arrow-color": "#ff9900",
            "target-arrow-shape": "triangle",
            "line-style": "solid",
          },
        },
        {
          selector: "edge:selected",
          style: {
            "line-color": "#ff9900",
            "target-arrow-color": "#ff9900",
            width: 2.5,
            opacity: 1,
          },
        },
        {
          selector: ".dim",
          style: { opacity: 0.12 },
        },
      ],
      layout: { name: "preset" },
      minZoom: 0.12,
      maxZoom: 3,
      wheelSensitivity: 0.25,
    });
    root._cy = cy;
    cy.nodes().forEach(function (node) {
      if (isConceptHub(node.data())) node.addClass("smt-okf-hub");
    });

    var state = {
      id: route.id,
      q: route.q,
      type: route.type,
      domain: route.domain,
      layout: route.layout || "cose",
      expand: route.expand || "",
    };

    function currentState() {
      return {
        id: state.id,
        q: search.value.trim(),
        type: typeSelect.value,
        domain: domainSelect.value,
        layout: layoutSelect.value,
        expand: state.expand || "",
      };
    }

    function updateCount() {
      var shown = cy.nodes().filter(function (node) {
        return node.data("kind") !== "domain" && node.style("display") !== "none";
      }).length;
      var expand = parseExpand(state.expand);
      var mode =
        expand.all || state.domain || state.type || String(state.q || "").trim()
          ? ""
          : " · indexes first";
      count.textContent = shown + " / " + conceptCount + " concepts" + mode;
      expandBtn.textContent = expand.all ? "Collapse extras" : "Expand all";
    }

    function runLayout(fit) {
      var hiddenCross = cy.edges("[cross = '1']");
      hiddenCross.style("display", "none");
      var collection = cy.elements().filter(function (el) {
        return el.style("display") !== "none";
      });
      if (collection.empty()) return;
      collection
        .layout(layoutOptions(state.layout || "cose"))
        .one("layoutstop", function () {
          hiddenCross.forEach(function (edge) {
            if (edge.source().style("display") !== "none" && edge.target().style("display") !== "none") {
              edge.style("display", "element");
            }
          });
          if (fit) cy.fit(collection.nodes(), 56);
        })
        .run();
    }

    function refreshGraph(fit) {
      applyFilters(cy, currentState());
      updateCount();
      runLayout(fit);
    }

    function setEdgeFocus(node) {
      cy.edges().removeClass("smt-okf-focus");
      if (node && node.length) node.connectedEdges().addClass("smt-okf-focus");
    }

    function expandDomain(domain) {
      var expand = parseExpand(state.expand);
      if (expand.all) return;
      expand.domains[domain] = true;
      state.expand = serializeExpand(expand);
      refreshGraph(true);
    }

    function ensureVisible(conceptId) {
      var data = nodeIndex[conceptId];
      if (!data || isConceptHub(data)) return false;
      if (state.domain || state.type || String(state.q || "").trim()) return false;
      var expand = parseExpand(state.expand);
      if (expand.all || expand.domains[data.domain]) return false;
      expand.domains[data.domain] = true;
      state.expand = serializeExpand(expand);
      return true;
    }

    function showDetail(conceptId, fromUser) {
      var data = nodeIndex[conceptId];
      if (!data || data.kind === "domain") return;
      var needLayout = ensureVisible(conceptId);
      state.id = conceptId;
      cy.elements().unselect();
      var node = cy.getElementById(conceptId);
      if (node && node.length) {
        node.select();
        setEdgeFocus(node);
      }
      if (needLayout) refreshGraph(false);
      empty.hidden = true;
      content.hidden = false;
      var tagsHtml = (data.tags || [])
        .map(function (tag) {
          return '<span class="smt-okf-tag">' + escapeHtml(tag) + "</span>";
        })
        .join("");
      var sources = data.sources || [];
      var sourcesHtml = "—";
      if (sources.length) {
        sourcesHtml =
          "<ul>" +
          sources
            .map(function (src) {
              if (typeof src === "string") return "<li>" + escapeHtml(src) + "</li>";
              var label = src.title || src.resource || src.id || "source";
              var href = src.resource || "";
              if (/^https?:\/\//i.test(href)) {
                return (
                  '<li><a href="' +
                  escapeHtml(href) +
                  '" target="_blank" rel="noopener">' +
                  escapeHtml(label) +
                  "</a></li>"
                );
              }
              return "<li>" + escapeHtml(label) + (href ? " (" + escapeHtml(href) + ")" : "") + "</li>";
            })
            .join("") +
          "</ul>";
      }
      var body = bundle.bodies[conceptId] || "";
      var html = global.marked && global.marked.parse ? global.marked.parse(body, { gfm: true, breaks: false }) : "<pre>" + escapeHtml(body) + "</pre>";
      var cited = backlinks[conceptId] || [];
      var citedHtml = "";
      if (cited.length) {
        citedHtml =
          '<section class="smt-okf-backlinks"><h2>Cited by</h2><ul>' +
          cited
            .map(function (src) {
              var label = (nodeIndex[src] && nodeIndex[src].label) || src;
              return (
                '<li><a href="' +
                docsHash(src) +
                '" data-okf-id="' +
                escapeHtml(src) +
                '">' +
                escapeHtml(label) +
                "</a> <span class=\"smt-okf-muted\">(" +
                escapeHtml(src) +
                ")</span></li>"
              );
            })
            .join("") +
          "</ul></section>";
      }
      content.innerHTML =
        '<div class="smt-okf-detail-head">' +
        '<span class="smt-okf-chip" style="background:' +
        escapeHtml(data.color) +
        '">' +
        escapeHtml(data.domain) +
        "</span> " +
        '<span class="smt-okf-chip smt-okf-chip-type">' +
        escapeHtml(data.type) +
        "</span>" +
        "<h1>" +
        escapeHtml(data.label) +
        "</h1>" +
        '<p class="smt-okf-muted">' +
        escapeHtml(conceptId) +
        (data.status ? " · " + escapeHtml(data.status) : "") +
        "</p>" +
        '<p><a class="smt-okf-open" href="' +
        docsHash(conceptId) +
        '">Open docs page</a>' +
        (parseExpand(state.expand).all
          ? ""
          : ' · <button type="button" class="smt-okf-inline" id="smt-okf-expand-domain">Show all in ' +
            escapeHtml(data.domain) +
            "</button>") +
        "</p>" +
        "</div>" +
        "<dl class=\"smt-okf-meta\">" +
        "<dt>Description</dt><dd>" +
        escapeHtml(data.description || "—") +
        "</dd>" +
        "<dt>Tags</dt><dd>" +
        (tagsHtml || "—") +
        "</dd>" +
        "<dt>Generated</dt><dd>" +
        escapeHtml(formatActor(data.generated)) +
        "</dd>" +
        "<dt>Sources</dt><dd>" +
        sourcesHtml +
        "</dd>" +
        "</dl>" +
        '<div class="smt-okf-body">' +
        html +
        "</div>" +
        citedHtml;
      rewriteInternalLinks(content, showDetail, conceptId);
      var expandDomainBtn = document.getElementById("smt-okf-expand-domain");
      if (expandDomainBtn) {
        expandDomainBtn.addEventListener("click", function () {
          expandDomain(data.domain);
          writeRoute(currentState(), true);
        });
      }
      updateGraphLabels(node);
      if (fromUser) writeRoute(currentState(), true);
    }

    function updateGraphLabels(selected) {
      cy.nodes().removeClass("smt-okf-label");
      if (cy.zoom() >= 1.35) {
        cy.nodes().addClass("smt-okf-label");
        return;
      }
      if (selected && selected.length) selected.addClass("smt-okf-label");
    }

    function clearSelection(fromUser) {
      state.id = "";
      cy.elements().unselect();
      setEdgeFocus(null);
      updateGraphLabels(null);
      empty.hidden = false;
      content.hidden = true;
      if (fromUser) writeRoute(currentState(), true);
    }

    cy.on("tap", "node", function (evt) {
      var data = evt.target.data();
      if (data.kind === "domain") {
        var expand = parseExpand(state.expand);
        if (expand.all) return;
        if (expand.domains[data.domain]) delete expand.domains[data.domain];
        else expand.domains[data.domain] = true;
        state.expand = serializeExpand(expand);
        refreshGraph(true);
        writeRoute(currentState(), true);
        return;
      }
      showDetail(evt.target.id(), true);
    });
    cy.on("tap", function (evt) {
      if (evt.target === cy) clearSelection(true);
    });
    cy.on("mouseover", "node", function (evt) {
      evt.target.addClass("smt-okf-label");
      if (evt.target.data("kind") !== "domain") setEdgeFocus(evt.target);
    });
    cy.on("mouseout", "node", function (evt) {
      if (!(evt.target.selected() || cy.zoom() >= 1.35 || evt.target.hasClass("smt-okf-hub"))) {
        evt.target.removeClass("smt-okf-label");
      }
      var selected = cy.$("node:selected");
      setEdgeFocus(selected && selected.length ? selected : null);
    });
    cy.on("zoom", function () {
      updateGraphLabels(cy.$("node:selected"));
    });

    function onFilter() {
      state.q = search.value.trim();
      state.type = typeSelect.value;
      state.domain = domainSelect.value;
      refreshGraph(true);
      writeRoute(currentState(), true);
    }

    search.addEventListener("input", onFilter);
    domainSelect.addEventListener("change", onFilter);
    typeSelect.addEventListener("change", onFilter);
    layoutSelect.addEventListener("change", function () {
      state.layout = layoutSelect.value;
      runLayout(true);
      writeRoute(currentState(), true);
    });
    expandBtn.addEventListener("click", function () {
      state.expand = parseExpand(state.expand).all ? "" : "all";
      refreshGraph(true);
      writeRoute(currentState(), true);
    });
    reset.addEventListener("click", function () {
      search.value = "";
      domainSelect.value = "";
      typeSelect.value = "";
      state.expand = "";
      refreshGraph(true);
      clearSelection(true);
    });

    refreshGraph(true);
    if (state.id && nodeIndex[state.id]) showDetail(state.id, false);

    global.addEventListener("resize", function () {
      if (root._cy) root._cy.resize();
    });
  }

  function bindOkfNav(a, showDetail) {
    a.addEventListener("click", function (ev) {
      ev.preventDefault();
      showDetail(ev.currentTarget.getAttribute("data-okf-id"), true);
    });
  }

  function rewriteInternalLinks(root, showDetail, fromId) {
    var links = root.querySelectorAll("a[href]");
    var i;
    for (i = 0; i < links.length; i++) {
      var a = links[i];
      if (a.getAttribute("data-okf-id")) {
        bindOkfNav(a, showDetail);
        continue;
      }
      var href = a.getAttribute("href") || "";
      var id = conceptIdFromUrl(href, fromId || "index");
      if (id && global.SMT_OKF_BUNDLE && global.SMT_OKF_BUNDLE.bodies[id]) {
        a.setAttribute("data-okf-id", id);
        a.setAttribute("href", docsHash(id));
        bindOkfNav(a, showDetail);
        continue;
      }
      if (href.charAt(0) === "/" && href.indexOf("/okf/") !== 0) {
        a.setAttribute("href", "#" + href.replace(/\.md$/, ""));
        continue;
      }
      if (/^https?:\/\//i.test(href)) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
      }
    }
  }

  global.smtDocsifyOkfViewerPlugin = function (hook) {
    hook.doneEach(function () {
      var on = Boolean(parseRoute());
      setPageClass(on);
      if (!on) return;
      var root = document.getElementById("smt-okf-viewer");
      if (root) mount(root);
    });
  };
})(window);
