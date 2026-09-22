/**
 * Collapsible Sandkit API tree from window.SMT_API_SIDEBAR_ROOTS.
 * Expands branches that contain search hits.
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.SMT_API_TREE = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /**
   * @param {{ name: string, slug: string, href: string, children?: unknown[] }} node
   */
  function toNamespace(node) {
    return {
      kind: "namespace",
      name: node.name,
      slug: node.slug,
      href: node.href,
      children: (node.children || []).map(toNamespace),
    };
  }

  function makeFolder(name) {
    return { kind: "folder", name: name, children: [] };
  }

  /**
   * @param {{ kind: string, name: string, children: unknown[] }} parent
   * @param {string} name
   */
  function findFolder(parent, name) {
    for (var i = 0; i < parent.children.length; i++) {
      var c = parent.children[i];
      if (c.kind === "folder" && c.name === name) return c;
    }
    var folder = makeFolder(name);
    parent.children.push(folder);
    return folder;
  }

  /**
   * @param {{ kind: string, children: unknown[] }} parent
   */
  function sortTree(parent) {
    parent.children.sort(function (a, b) {
      if (a.kind === "folder" && b.kind !== "folder") return -1;
      if (b.kind === "folder" && a.kind !== "folder") return 1;
      return String(a.name).localeCompare(String(b.name));
    });
    for (var i = 0; i < parent.children.length; i++) {
      var child = parent.children[i];
      if (child.kind === "folder") sortTree(child);
      else if (child.children && child.children.length) sortTree(child);
    }
  }

  /**
   * @param {{ name: string, slug: string, href: string, children?: unknown[] }[]} roots
   */
  function rootMatchesSlug(rootSlug, slug) {
    var rootWorker = String(rootSlug).endsWith(".worker");
    var slugWorker = String(slug).endsWith(".worker");
    if (rootWorker !== slugWorker) return false;
    if (slug === rootSlug) return true;
    if (rootWorker) {
      var s = String(slug).slice(0, -".worker".length);
      var r = String(rootSlug).slice(0, -".worker".length);
      return s === r || s.indexOf(r + ".") === 0;
    }
    return String(slug).indexOf(rootSlug + ".") === 0;
  }

  /**
   * @param {{ slug: string }[]} roots
   * @param {string} slug
   */
  function findCurrentApiRoot(roots, slug) {
    var current = String(slug || "");
    if (!current || !Array.isArray(roots)) return null;
    var best = null;
    for (var i = 0; i < roots.length; i++) {
      var rootNode = roots[i];
      if (!rootMatchesSlug(rootNode.slug, current)) continue;
      if (!best || rootNode.slug.length > best.slug.length) best = rootNode;
    }
    return best;
  }

  function groupRoots(roots) {
    var forest = makeFolder("root");
    forest.name = "";
    for (var i = 0; i < roots.length; i++) {
      var node = roots[i];
      var slug = String(node.slug || "");
      var parent = forest;
      if (slug.indexOf("sandkit.engine.api.") === 0) {
        parent = findFolder(findFolder(findFolder(forest, "sandkit"), "engine"), "api");
      } else if (slug.indexOf("sandkit.enums.") === 0) {
        parent = findFolder(findFolder(forest, "sandkit"), "enums");
      } else if (slug.indexOf("sandkit.api.") === 0 && (slug.endsWith(".worker") || slug.indexOf(".worker.") >= 0)) {
        parent = findFolder(findFolder(findFolder(forest, "sandkit"), "api"), "worker");
      } else if (slug.indexOf("sandkit.api.") === 0) {
        parent = findFolder(findFolder(findFolder(forest, "sandkit"), "api"), "main");
      } else if (slug.indexOf("shared.") === 0) {
        parent = findFolder(forest, "shared");
      } else {
        parent = findFolder(forest, "other");
      }
      parent.children.push(toNamespace(node));
    }
    sortTree(forest);
    return forest;
  }

  /**
   * @param {string} label
   * @param {string} query
   */
  function markLabel(label, query) {
    var safe = escapeHtml(label);
    var q = String(query || "").trim();
    if (!q) return safe;
    var re = new RegExp(q.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"), "ig");
    return safe.replace(re, function (m) {
      return "<mark>" + m + "</mark>";
    });
  }

  /**
   * @param {unknown} node
   * @param {string} query
   */
  function renderNode(node, query) {
    if (node.kind === "folder") {
      if (!node.name) {
        var inner = "";
        for (var i = 0; i < node.children.length; i++) {
          inner += renderNode(node.children[i], query);
        }
        return inner;
      }
      var kids = "";
      for (var j = 0; j < node.children.length; j++) {
        kids += renderNode(node.children[j], query);
      }
      if (!kids) return "";
      return (
        '<details class="smt-api-tree-branch smt-api-tree-folder" data-folder="' +
        escapeHtml(node.name) +
        '">' +
        '<summary class="smt-api-tree-summary"><span class="smt-api-tree-chevron" aria-hidden="true">&gt;</span> ' +
        markLabel(node.name, query) +
        "</summary>" +
        '<div class="smt-api-tree-children">' +
        kids +
        "</div></details>"
      );
    }

    var slug = String(node.slug || "");
    var hasKids = node.children && node.children.length;
    var label = node.name;
    var worker = slug.endsWith(".worker") ? ' <span class="smt-api-badge smt-api-badge-worker">worker</span>' : "";
    var link =
      '<a class="smt-api-tree-ns-link" href="' +
      escapeHtml(node.href) +
      '">' +
      markLabel(label, query) +
      "</a>" +
      worker;

    if (!hasKids) {
      return (
        '<div class="smt-api-tree-leaf" data-slug="' +
        escapeHtml(slug) +
        '">' +
        link +
        "</div>"
      );
    }

    var childHtml = "";
    for (var k = 0; k < node.children.length; k++) {
      childHtml += renderNode(node.children[k], query);
    }
    return (
      '<details class="smt-api-tree-branch smt-api-tree-ns" data-slug="' +
      escapeHtml(slug) +
      '">' +
      '<summary class="smt-api-tree-summary"><span class="smt-api-tree-chevron" aria-hidden="true">&gt;</span> ' +
      link +
      "</summary>" +
      '<div class="smt-api-tree-children">' +
      childHtml +
      "</div></details>"
    );
  }

  /**
   * @param {{ path?: string, title?: string, id?: string }} entry
   * @returns {string[]}
   */
  function slugsFromSearchEntry(entry) {
    /** @type {string[]} */
    var slugs = [];
    var path = String(entry.path || "");
    if (path.indexOf("/api/") === 0) {
      var page = path.slice(5);
      if (page) slugs.push(page);
    }
    var title = String(entry.title || "")
      .replace(/\s*\(worker\)\s*/gi, "")
      .replace(/\(\)\s*$/i, "")
      .trim();
    if (title.indexOf("sandkit.") === 0 || title.indexOf("shared.") === 0) {
      slugs.push(title);
      var parts = title.split(".");
      for (var i = 2; i <= parts.length; i++) {
        slugs.push(parts.slice(0, i).join("."));
      }
    }
    return slugs;
  }

  /**
   * @param {string[]} slugs
   * @param {string} nodeSlug
   */
  function slugMatches(slugs, nodeSlug) {
    if (!nodeSlug) return false;
    for (var i = 0; i < slugs.length; i++) {
      var s = slugs[i];
      if (s === nodeSlug || s.indexOf(nodeSlug + ".") === 0) return true;
    }
    return false;
  }

  /**
   * @param {HTMLElement} container
   * @param {string} query
   * @param {{ entry: { path?: string, title?: string, id?: string } }[]} hits
   */
  function openAncestors(el, container) {
    var parent = el.parentElement;
    while (parent && parent !== container) {
      if (parent.tagName === "DETAILS") parent.open = true;
      parent = parent.parentElement;
    }
  }

  function applySearch(container, query, hits) {
    var q = String(query || "").trim();
    /** @type {string[]} */
    var slugs = [];
    if (q && hits && hits.length) {
      for (var i = 0; i < hits.length; i++) {
        var entrySlugs = slugsFromSearchEntry(hits[i].entry || {});
        for (var j = 0; j < entrySlugs.length; j++) slugs.push(entrySlugs[j]);
      }
    }

    var nodes = container.querySelectorAll("[data-slug]");
    for (var n = 0; n < nodes.length; n++) {
      var el = nodes[n];
      var nodeSlug = el.getAttribute("data-slug") || "";
      var match = !q || slugMatches(slugs, nodeSlug);
      el.classList.toggle("smt-api-tree-match", Boolean(q && match));
      el.classList.toggle("smt-api-tree-hidden", Boolean(q && !match));
      if (q && match) openAncestors(el, container);
    }

    var folders = container.querySelectorAll(".smt-api-tree-folder");
    for (var f = 0; f < folders.length; f++) {
      var folder = folders[f];
      if (!q) {
        folder.classList.remove("smt-api-tree-hidden");
        continue;
      }
      var visible = folder.querySelector("[data-slug]:not(.smt-api-tree-hidden)");
      var show = Boolean(visible);
      folder.classList.toggle("smt-api-tree-hidden", !show);
      if (show && folder.tagName === "DETAILS") folder.open = true;
    }
  }

  /**
   * @param {HTMLElement} el
   * @param {{ roots?: unknown[], query?: string, hits?: unknown[] }} [opts]
   */
  function render(el, opts) {
    opts = opts || {};
    var roots = opts.roots || root.SMT_API_SIDEBAR_ROOTS;
    if (!Array.isArray(roots) || !roots.length) {
      el.innerHTML = '<p class="smt-api-tree-empty">Loading API tree…</p>';
      return;
    }
    var body = "";
    if (opts.sidebarScope && roots.length === 1) {
      body = renderNode(toNamespace(roots[0]), opts.query || "");
    } else {
      body = renderNode(groupRoots(roots), opts.query || "");
    }
    el.innerHTML = '<div class="smt-api-tree-root">' + body + "</div>";
    applySearch(el, opts.query || "", opts.hits || []);
  }

  function loadSidebar(done) {
    if (Array.isArray(root.SMT_API_SIDEBAR_ROOTS)) {
      done();
      return;
    }
    if (root.SMT_API_SIDEBAR_LOADING) {
      root.SMT_API_SIDEBAR_LOADING.push(done);
      return;
    }
    root.SMT_API_SIDEBAR_LOADING = [done];
    var script = document.createElement("script");
    script.src = "assets/api-sidebar-tree.js";
    script.onload = function () {
      var cbs = root.SMT_API_SIDEBAR_LOADING || [];
      root.SMT_API_SIDEBAR_LOADING = null;
      for (var i = 0; i < cbs.length; i++) cbs[i]();
    };
    script.onerror = function () {
      root.SMT_API_SIDEBAR_LOADING = null;
      done();
    };
    document.head.appendChild(script);
  }

  /**
   * @param {HTMLElement} el
   * @param {{ getQuery?: () => string, getHits?: () => unknown[] }} [opts]
   */
  function mount(el, opts) {
    if (!el || el.getAttribute("data-smt-api-tree-mounted")) return;
    el.setAttribute("data-smt-api-tree-mounted", "1");
    opts = opts || {};

    function refresh() {
      loadSidebar(function () {
        render(el, {
          query: opts.getQuery ? opts.getQuery() : "",
          hits: opts.getHits ? opts.getHits() : [],
        });
      });
    }

    el._smtApiTreeRefresh = refresh;
    refresh();
  }

  function refreshAll() {
    var nodes = document.querySelectorAll("[data-smt-api-tree-mounted]");
    for (var i = 0; i < nodes.length; i++) {
      var fn = nodes[i]._smtApiTreeRefresh;
      if (typeof fn === "function") fn();
    }
  }

  return {
    groupRoots: groupRoots,
    rootMatchesSlug: rootMatchesSlug,
    findCurrentApiRoot: findCurrentApiRoot,
    slugsFromSearchEntry: slugsFromSearchEntry,
    slugMatches: slugMatches,
    render: render,
    applySearch: applySearch,
    loadSidebar: loadSidebar,
    mount: mount,
    refreshAll: refreshAll,
  };
});
