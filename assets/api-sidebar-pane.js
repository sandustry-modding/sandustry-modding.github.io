/**
 * Collapsible namespace tree in the Docsify sidebar on generated /api/* pages.
 */
(function (global) {
  var PANE_ID = "smt-api-sidebar-pane";

  function routePath() {
    var path = (global.location.hash || "").replace(/^#/, "").split("?")[0] || "/";
    if (path.length > 1 && path.charAt(path.length - 1) === "/") path = path.slice(0, -1);
    return path || "/";
  }

  function normalizePath(raw) {
    var p = String(raw || "");
    var hash = p.indexOf("#");
    if (hash >= 0) p = p.slice(hash + 1);
    p = p.split("?")[0];
    if (p.slice(-3) === ".md") p = p.slice(0, -3);
    if (p.length > 1 && p.charAt(p.length - 1) === "/") p = p.slice(0, -1);
    if (p === "/README") return "/";
    if (p.slice(-7) === "/README") p = p.slice(0, -7) || "/";
    return p || "/";
  }

  function slugFromApiPath(path) {
    if (path.indexOf("/api/") !== 0) return null;
    var rest = path.slice(5);
    if (!rest) return null;
    return rest;
  }

  function markCurrentLink(container, path) {
    var current = normalizePath(path);
    var links = container.querySelectorAll("a[href]");
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var on = normalizePath(a.getAttribute("href")) === current;
      a.classList.toggle("active", on);
      if (!on) continue;
      var details = a.closest("details");
      while (details) {
        details.open = true;
        details = details.parentElement ? details.parentElement.closest("details") : null;
      }
    }
  }

  function ensurePane() {
    var nav = document.querySelector(".sidebar-nav");
    if (!nav) return null;
    var pane = document.getElementById(PANE_ID);
    if (pane) return pane;
    pane = document.createElement("div");
    pane.id = PANE_ID;
    pane.className = "smt-api-sidebar-pane smt-api-tree-panel";
    pane.setAttribute("role", "navigation");
    pane.setAttribute("aria-label", "API namespace");
    nav.appendChild(pane);
    return pane;
  }

  function renderPane() {
    var api = global.SMT_API_TREE;
    if (!api) return;
    var path = routePath();
    var slug = slugFromApiPath(path);
    var pane = ensurePane();
    if (!pane) return;

    if (!slug) {
      pane.hidden = true;
      pane.innerHTML = "";
      return;
    }

    api.loadSidebar(function () {
      var roots = global.SMT_API_SIDEBAR_ROOTS;
      var current = api.findCurrentApiRoot(roots, slug);
      if (!current) {
        pane.hidden = true;
        pane.innerHTML = "";
        return;
      }
      pane.hidden = false;
      api.render(pane, { roots: [current], sidebarScope: true });
      markCurrentLink(pane, global.location.hash || "");
    });
  }

  global.smtDocsifyApiSidebarPlugin = function (hook) {
    hook.doneEach(function () {
      renderPane();
    });
  };
})(window);
