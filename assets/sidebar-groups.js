/**
 * Show one sidebar section per navbar item, and mark the matching nav link.
 */
(function (global) {
  var SCROLL_KEY = "smt-sidebar-scroll";
  var scrollBound = false;
  var NAV_LABELS = {
    Home: "Home",
    Guides: "Guides",
    OKF: "OKF",
    Types: "Types",
    Template: "Template",
    UI: "UI",
    Tools: "Tools",
  };
  var SECTION_GROUPS = {
    Home: [],
    Guides: ["Guides"],
    OKF: ["OKF"],
    Types: ["Types"],
    Template: ["Template"],
    UI: ["UI"],
  };

  function loadScroll() {
    try {
      var n = parseInt(global.sessionStorage.getItem(SCROLL_KEY) || "", 10);
      return Number.isFinite(n) ? n : 0;
    } catch (err) {
      return 0;
    }
  }

  function saveScroll(value) {
    try {
      global.sessionStorage.setItem(SCROLL_KEY, String(value));
    } catch (err) {
      /* ignore quota / private mode */
    }
  }

  function bindScroll() {
    var sidebar = document.querySelector(".sidebar");
    if (!sidebar || scrollBound) return;
    scrollBound = true;
    sidebar.addEventListener(
      "scroll",
      function () {
        saveScroll(sidebar.scrollTop);
      },
      { passive: true },
    );
  }

  function restoreScroll() {
    var sidebar = document.querySelector(".sidebar");
    if (!sidebar) return;
    sidebar.scrollTop = loadScroll();
  }

  function routePath() {
    var path = (global.location.hash || "").replace(/^#/, "").split("?")[0] || "/";
    if (path.length > 1 && path.charAt(path.length - 1) === "/") {
      path = path.slice(0, -1);
    }
    return path || "/";
  }

  function currentSection(path) {
    if (path === "/" || path === "/README") return "Home";
    if (path.indexOf("/okf") === 0) return "OKF";
    if (path.indexOf("/guides") === 0) return "Guides";
    if (path.indexOf("/ui") === 0) return "UI";
    if (path.indexOf("/modkit") === 0) return "Template";
    if (
      path === "/builds" ||
      path === "/modinfo" ||
      path === "/config-schema" ||
      path === "/patches"
    ) {
      return "Template";
    }
    if (
      path.indexOf("/types") === 0 ||
      path === "/full" ||
      path === "/Changelog" ||
      path === "/api" ||
      path.indexOf("/api/") === 0 ||
      path === "/electron-bridge" ||
      path === "/modinfo.json" ||
      path === "/patches.json"
    ) {
      return "Types";
    }
    return "Home";
  }

  function groupTitle(li) {
    var label = li.querySelector(":scope > p.group-title .smt-sidebar-group-label");
    if (label) return label.textContent.replace(/^\s+|\s+$/g, "");
    var p = li.querySelector(":scope > p.group-title");
    if (p) return p.textContent.replace(/^\s+|\s+$/g, "");
    return "";
  }

  function navItemLabel(li) {
    var direct = li.querySelector(":scope > a");
    if (direct) return direct.textContent.replace(/^\s+|\s+$/g, "");
    var p = li.querySelector(":scope > p");
    if (p) return p.textContent.replace(/^\s+|\s+$/g, "");
    var text = "";
    for (var i = 0; i < li.childNodes.length; i++) {
      var node = li.childNodes[i];
      if (node.nodeType === Node.TEXT_NODE) text += node.textContent;
    }
    return text.replace(/^\s+|\s+$/g, "");
  }

  function markNavbar(section) {
    var nav = document.querySelector("nav.app-nav");
    if (!nav) return;
    var list = nav.querySelector("ul");
    if (!list) return;
    var want = NAV_LABELS[section] || "Home";
    var items = list.children;
    for (var i = 0; i < items.length; i++) {
      var li = items[i];
      if (li.tagName !== "LI") continue;
      var on = navItemLabel(li) === want;
      li.classList.toggle("active", on);
      li.classList.toggle("smt-nav-current", on);
      var link = li.querySelector(":scope > a");
      if (link) {
        link.classList.toggle("active", on);
        if (on) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      }
    }
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

  function markSidebarPage(path) {
    var current = normalizePath(path);
    var links = document.querySelectorAll(".sidebar-nav a[href]");
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var li = a.closest("li");
      if (!li) continue;
      var group = a.closest(".sidebar-nav > ul > li.group");
      var hidden = Boolean(group && group.classList.contains("smt-sidebar-section-hidden"));
      var match = normalizePath(a.getAttribute("href")) === current;
      var on = match && !hidden;
      li.classList.toggle("active", on);
      a.classList.toggle("active", on);
      if (on) li.setAttribute("aria-current", "page");
      else if (li.getAttribute("aria-current") === "page") li.removeAttribute("aria-current");
    }
  }

  function filterSidebar(section) {
    var allow = SECTION_GROUPS[section] || [];
    var groups = document.querySelectorAll(".sidebar-nav > ul > li.group");
    for (var i = 0; i < groups.length; i++) {
      var li = groups[i];
      var title = groupTitle(li);
      var on = allow.indexOf(title) !== -1;
      li.classList.toggle("smt-sidebar-section-hidden", !on);
      li.classList.toggle("smt-sidebar-section-current", on);
      li.classList.toggle("smt-sidebar-section-hide-title", on);
      li.classList.remove("smt-sidebar-group-closed");
    }
  }

  function render() {
    bindScroll();
    var section = currentSection(routePath());
    filterSidebar(section);
    markSidebarPage(routePath());
    markNavbar(section);
    restoreScroll();
  }

  global.smtDocsifySidebarGroupsPlugin = function (hook) {
    hook.doneEach(function () {
      render();
      var tries = 0;
      var timer = global.setInterval(function () {
        tries += 1;
        render();
        if (document.querySelector("nav.app-nav ul") || tries > 20) {
          global.clearInterval(timer);
        }
      }, 50);
    });
  };
})(window);
