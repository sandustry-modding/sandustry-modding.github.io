/**
 * Rank Sandkit API search hits by live `sandkit.*` path.
 * Loaded in the browser and by Node tests (CommonJS export).
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.SMT_SEARCH_QUERY = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  var IGNORE_TITLE = {
    Accessors: true,
    Classes: true,
    Constructors: true,
    Enumerations: true,
    "Enumeration Members": true,
    Functions: true,
    Interfaces: true,
    Methods: true,
    Modules: true,
    Namespaces: true,
    Overrides: true,
    Properties: true,
    References: true,
    "Type Aliases": true,
    "Type Parameters": true,
    Variables: true,
  };

  var SCOPES = ["all", "main", "worker", "engine", "enum", "guide", "other"];

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/\s+\(worker\)/g, "")
      .replace(/\(\)\s*$/g, "")
      .replace(/[/\\]+/g, ".")
      .replace(/[_\s]+/g, ".")
      .replace(/\.+/g, ".")
      .replace(/^\.+|\.+$/g, "")
      .trim();
  }

  function classifyEntry(entry) {
    var title = String((entry && entry.title) || "");
    var path = String((entry && entry.path) || "");
    var kind = /\(\)\s*(?:\(worker\))?\s*$/i.test(title) ? "method" : entry && entry.id ? "type" : "page";
    var scope = "other";
    if (/\(worker\)/i.test(title) || /\.worker$/.test(path)) {
      scope = "worker";
    } else if (path.indexOf("/api/sandkit.engine") === 0 || title.indexOf("sandkit.engine") === 0) {
      scope = "engine";
    } else if (path.indexOf("/api/sandkit.enums") === 0 || title.indexOf("sandkit.enums") === 0) {
      scope = "enum";
    } else if (path.indexOf("/api/sandkit") === 0 || title.indexOf("sandkit.") === 0 || title === "sandkit") {
      scope = "main";
    } else if (path.indexOf("/guides") === 0) {
      scope = "guide";
    }
    return { kind: kind, scope: scope };
  }

  function scoreEntry(entry, query) {
    var title = (entry && entry.title) || "";
    if (IGNORE_TITLE[title]) return 0;

    var t = normalize(title);
    var q = normalize(query);
    if (!t || !q) return 0;

    var worker = /\(worker\)/i.test(title) ? -20 : 0;
    if (t === q) return 1000 + worker;
    if (t.endsWith("." + q)) return 920 + worker;

    var last = t.split(".").pop();
    if (last === q) return 880 + worker;

    if (t.indexOf(q) !== -1) {
      var dotted = q.indexOf(".") !== -1 ? 120 : 0;
      return 500 + dotted + Math.max(0, 100 - t.length) + worker;
    }

    var parts = q.split(".").filter(Boolean);
    if (parts.length > 1) {
      var i = 0;
      var pos = 0;
      for (; i < parts.length; i++) {
        var at = t.indexOf(parts[i], pos);
        if (at === -1) break;
        pos = at + parts[i].length;
      }
      if (i === parts.length) return 400 + parts.length * 25 + worker;
    }

    var path = normalize((entry && entry.path) || "");
    if (path && path.indexOf(q) !== -1) return 220 + worker;

    var body = normalize((entry && entry.body) || "");
    if (body && body.indexOf(q) !== -1) return 80 + worker;

    var tokens = q.split(".").filter(Boolean);
    if (tokens.length > 1) {
      var hay = t + " " + path + " " + body;
      var all = true;
      for (var ti = 0; ti < tokens.length; ti++) {
        if (hay.indexOf(tokens[ti]) === -1) {
          all = false;
          break;
        }
      }
      if (all) return 60 + tokens.length * 10 + worker;
    }

    return 0;
  }

  function searchIndex(index, query, scope, limit, hideDeprecated) {
    if (!Array.isArray(index) || !query) return { hits: [], total: 0 };
    var cap = typeof limit === "number" ? limit : 80;
    var ranked = [];
    for (var i = 0; i < index.length; i++) {
      var entry = index[i];
      if (hideDeprecated && entry && entry.deprecated) continue;
      if (scope && scope !== "all") {
        var cls = classifyEntry(entry);
        if (cls.scope !== scope) continue;
      }
      var score = scoreEntry(entry, query);
      if (score <= 0) continue;
      ranked.push({ entry: entry, score: score, class: classifyEntry(entry) });
    }
    ranked.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return (a.entry.title || "").length - (b.entry.title || "").length;
    });
    return { hits: ranked.slice(0, cap), total: ranked.length };
  }

  return {
    IGNORE_TITLE: IGNORE_TITLE,
    SCOPES: SCOPES,
    normalize: normalize,
    classifyEntry: classifyEntry,
    scoreEntry: scoreEntry,
    searchIndex: searchIndex,
  };
});
