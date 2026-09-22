/**
 * Full-page Sandkit API search. Uses window.SMT_SEARCH_QUERY and SMT_SEARCH_INDEX.
 */
(function () {
  var MAX_RESULTS = 80;
  var SEARCH_HASH = "#/types/search";
  var hotkeysBound = false;

  function queryApi() {
    return window.SMT_SEARCH_QUERY;
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function parseRoute() {
    var hash = window.location.hash || "";
    var cut = hash.split("?");
    var path = cut[0].replace(/^#/, "") || "/";
    if (path === "/search") {
      window.location.hash = "#/types/search" + (cut[1] ? "?" + cut[1] : "");
      path = "/types/search";
    }
    if (path !== "/types/search") return null;
    var params = new URLSearchParams(cut[1] || "");
    return {
      q: params.get("q") || "",
      scope: params.get("scope") || "all",
    };
  }

  function writeRoute(q, scope, replace) {
    var params = new URLSearchParams();
    if (q) params.set("q", q);
    if (scope && scope !== "all") params.set("scope", scope);
    var next = SEARCH_HASH + (params.toString() ? "?" + params.toString() : "");
    if ((window.location.hash || "") === next) return;
    if (replace && window.history && window.history.replaceState) {
      window.history.replaceState(null, "", next);
    } else {
      window.location.hash = next.slice(1);
    }
  }

  function resultUrl(entry) {
    var path = entry.path || "/";
    var hash = "#" + (path === "/" ? "/" : path);
    if (entry.id) hash += "?id=" + encodeURIComponent(entry.id);
    return hash;
  }

  function snippet(entry, query) {
    var body = String(entry.body || "")
      .replace(/Defined in:\s*\S+\.d\.ts:\d+\s*/gi, "")
      .replace(/\s*See Official docs\s*/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (!body) return "";
    var q = String(query || "").trim();
    var lower = body.toLowerCase();
    var at = q ? lower.indexOf(q.toLowerCase()) : -1;
    var start = at < 0 ? 0 : Math.max(0, at - 32);
    var end = Math.min(body.length, (at < 0 ? 80 : at) + q.length + 88);
    var text = body.slice(start, end).trim();
    if (start > 0) text = "…" + text;
    if (end < body.length) text = text + "…";
    if (!q) return escapeHtml(text);
    var re = new RegExp(q.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"), "ig");
    return escapeHtml(text).replace(re, function (m) {
      return "<mark>" + m + "</mark>";
    });
  }

  function markTitle(title, query) {
    var safe = escapeHtml(title);
    var q = String(query || "").trim();
    if (!q) return safe;
    var re = new RegExp(q.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"), "ig");
    return safe.replace(re, function (m) {
      return "<mark>" + m + "</mark>";
    });
  }

  function kindLabel(kind) {
    if (kind === "method") return "method";
    if (kind === "type") return "type";
    return "page";
  }

  function loadIndex(done) {
    if (Array.isArray(window.SMT_SEARCH_INDEX)) {
      done();
      return;
    }
    if (window.SMT_SEARCH_INDEX_LOADING) {
      window.SMT_SEARCH_INDEX_LOADING.push(done);
      return;
    }
    window.SMT_SEARCH_INDEX_LOADING = [done];
    var script = document.createElement("script");
    script.src = "assets/search-index.js";
    script.onload = function () {
      var cbs = window.SMT_SEARCH_INDEX_LOADING || [];
      window.SMT_SEARCH_INDEX_LOADING = null;
      for (var i = 0; i < cbs.length; i++) cbs[i]();
    };
    script.onerror = function () {
      window.SMT_SEARCH_INDEX_LOADING = null;
      done();
    };
    document.head.appendChild(script);
  }

  function mount(root) {
    if (!root) return;
    root.removeAttribute("data-smt-search");
    var route = parseRoute() || { q: "", scope: "all" };
    root.innerHTML =
      '<form class="smt-search-form" action="#/types/search" role="search">' +
      '<label class="smt-search-label" for="smt-search-input">Search the live API</label>' +
      '<div class="smt-search-field">' +
      '<input id="smt-search-input" type="search" name="q" autocomplete="off" spellcheck="false" placeholder="sandkit.api.player, unlockById, grid …" />' +
      "</div>" +
      '<p class="smt-search-hint">Match the runtime path. Press <kbd>/</kbd> from any page. <kbd>Ctrl</kbd>+<kbd>K</kbd> also opens search.</p>' +
      '<div class="smt-search-scopes" role="group" aria-label="Filter by area"></div>' +
      '<label class="smt-search-settings-row">' +
      '<input id="smt-hide-deprecated" type="checkbox" />' +
      "<span>Hide deprecated APIs</span>" +
      "</label>" +
      "</form>" +
      '<p class="smt-search-status" aria-live="polite"></p>' +
      '<div class="smt-api-tree-panel" id="smt-api-tree-search" hidden></div>' +
      '<ul class="smt-search-results"></ul>';

    var input = root.querySelector("#smt-search-input");
    var status = root.querySelector(".smt-search-status");
    var list = root.querySelector(".smt-search-results");
    var treePanel = root.querySelector("#smt-api-tree-search");
    var scopes = root.querySelector(".smt-search-scopes");
    var form = root.querySelector(".smt-search-form");
    var hideBox = root.querySelector("#smt-hide-deprecated");
    var selected = -1;
    var timer = null;
    var lastHits = [];

    function mountTree() {
      if (!treePanel || !window.SMT_API_TREE) return;
      window.SMT_API_TREE.mount(treePanel, {
        getQuery: function () {
          return input.value.trim();
        },
        getHits: function () {
          return lastHits;
        },
      });
    }

    function refreshTree() {
      if (!treePanel || !window.SMT_API_TREE) return;
      if (typeof treePanel._smtApiTreeRefresh === "function") treePanel._smtApiTreeRefresh();
    }

    function scopeButtons(active) {
      var items = [
        ["all", "All"],
        ["main", "Main"],
        ["worker", "Worker"],
        ["engine", "Engine"],
        ["enum", "Enums"],
        ["guide", "Guides"],
        ["other", "Other"],
      ];
      var html = "";
      for (var i = 0; i < items.length; i++) {
        var id = items[i][0];
        var on = id === active ? " aria-pressed=\"true\"" : " aria-pressed=\"false\"";
        html +=
          '<button type="button" class="smt-search-scope" data-scope="' +
          id +
          '"' +
          on +
          ">" +
          items[i][1] +
          "</button>";
      }
      scopes.innerHTML = html;
    }

    function render() {
      var api = queryApi();
      var q = input.value.trim();
      var scope = scopes.querySelector(".smt-search-scope[aria-pressed='true']");
      var scopeId = scope ? scope.getAttribute("data-scope") : "all";
      selected = -1;
      writeRoute(q, scopeId, true);

      if (!q) {
        list.innerHTML = "";
        list.hidden = true;
        lastHits = [];
        if (treePanel) treePanel.hidden = false;
        refreshTree();
        status.textContent = "Expand a namespace in the tree, or type a method or type name.";
        return;
      }

      if (treePanel) treePanel.hidden = false;
      list.hidden = false;

      if (!api || !Array.isArray(window.SMT_SEARCH_INDEX)) {
        status.textContent = "Loading index…";
        list.innerHTML = "";
        return;
      }

      var hideDeprecated =
        document.documentElement.classList.contains("smt-hide-deprecated");
      var found = api.searchIndex(
        window.SMT_SEARCH_INDEX,
        q,
        scopeId,
        MAX_RESULTS,
        hideDeprecated,
      );
      lastHits = found.hits;
      refreshTree();

      if (!found.total) {
        list.innerHTML = "";
        status.textContent = "No matches for “" + q + "”.";
        return;
      }

      if (found.total > found.hits.length) {
        status.textContent =
          "Found " + found.total + " matches (showing " + found.hits.length + ").";
      } else {
        status.textContent = "Found " + found.total + " match" + (found.total === 1 ? "" : "es") + ".";
      }

      var html = "";
      for (var i = 0; i < found.hits.length; i++) {
        var hit = found.hits[i];
        var entry = hit.entry;
        var cls = hit.class;
        var worker =
          cls.scope === "worker"
            ? '<span class="smt-api-badge smt-api-badge-worker">worker</span>'
            : "";
        var desc = snippet(entry, q);
        html +=
          '<li class="smt-search-hit">' +
          '<a class="smt-search-hit-link" href="' +
          resultUrl(entry) +
          '">' +
          '<span class="smt-search-hit-head">' +
          '<span class="smt-search-hit-title">' +
          markTitle(entry.title || "", q) +
          "</span>" +
          '<span class="smt-search-hit-meta">' +
          kindLabel(cls.kind) +
          "</span>" +
          "</span>" +
          (desc ? '<p class="smt-search-hit-desc">' + desc + "</p>" : "") +
          worker +
          "</a></li>";
      }
      list.innerHTML = html;
    }

    function scheduleRender() {
      clearTimeout(timer);
      timer = setTimeout(render, 40);
    }

    function moveSelection(delta) {
      var items = list.querySelectorAll(".smt-search-hit-link");
      if (!items.length) return;
      selected = (selected + delta + items.length) % items.length;
      for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle("is-active", i === selected);
      }
      items[selected].focus();
    }

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var items = list.querySelectorAll(".smt-search-hit-link");
      if (items[selected] || items[0]) {
        window.location.href = (items[selected] || items[0]).getAttribute("href");
      }
    });

    input.addEventListener("input", scheduleRender);
    input.addEventListener("keydown", function (ev) {
      if (ev.key === "ArrowDown") {
        ev.preventDefault();
        moveSelection(1);
      } else if (ev.key === "ArrowUp") {
        ev.preventDefault();
        moveSelection(-1);
      } else if (ev.key === "Escape" && input.value) {
        input.value = "";
        render();
      }
    });

    scopes.addEventListener("click", function (ev) {
      var btn = ev.target.closest(".smt-search-scope");
      if (!btn) return;
      var next = btn.getAttribute("data-scope");
      scopeButtons(next);
      render();
      input.focus();
    });

    if (hideBox && window.smtDocsSettings) {
      hideBox.checked = window.smtDocsSettings.hideDeprecated();
      hideBox.addEventListener("change", function () {
        window.smtDocsSettings.setHideDeprecated(hideBox.checked);
      });
    }

    scopeButtons(route.scope);
    input.value = route.q;
    window.smtRefreshSearch = scheduleRender;
    loadIndex(function () {
      mountTree();
      render();
      input.focus();
    });
  }

  function bindHotkeys() {
    if (hotkeysBound) return;
    hotkeysBound = true;
    document.addEventListener("smt-docs-settings", function () {
      if (typeof window.smtRefreshSearch === "function") window.smtRefreshSearch();
    });
    document.addEventListener("keydown", function (e) {
      var tag = (e.target && e.target.tagName) || "";
      var typing = /input|textarea|select/i.test(tag) || (e.target && e.target.isContentEditable);
      if (e.key === "/" && !typing) {
        e.preventDefault();
        if (!parseRoute()) window.location.hash = "/types/search";
        else {
          var field = document.getElementById("smt-search-input");
          if (field) field.focus();
        }
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (!parseRoute()) window.location.hash = "/types/search";
        else {
          var fieldK = document.getElementById("smt-search-input");
          if (fieldK) fieldK.focus();
        }
      }
    });
  }

  function typesInstallPath() {
    var path = (window.location.hash || "").replace(/^#/, "").split("?")[0] || "/";
    if (path.length > 1 && path.charAt(path.length - 1) === "/") path = path.slice(0, -1);
    if (path === "/types/README") path = "/types";
    return path === "/types";
  }

  function mountTypesLandingTree() {
    if (!typesInstallPath() || !window.SMT_API_TREE) return;
    var el = document.getElementById("smt-api-tree-root");
    if (el) window.SMT_API_TREE.mount(el, {});
  }

  window.smtDocsifySearchPlugin = function (hook) {
    bindHotkeys();
    hook.doneEach(function () {
      bindHotkeys();
      mountTypesLandingTree();
      if (!parseRoute()) return;
      var root = document.getElementById("smt-search-root");
      if (root) mount(root);
    });
  };
})();
