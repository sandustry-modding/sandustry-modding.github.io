/**
 * Show only the current namespace and its child namespaces in the sidebar.
 */
(function (global) {
  function currentSlug(vm) {
    var path = (vm && vm.route && vm.route.path) || "";
    path = String(path).replace(/^\//, "").replace(/\.md$/, "");
    if (path.indexOf("api/") === 0) path = path.slice(4);
    return path;
  }

  function rootMatchesSlug(rootSlug, slug) {
    var rootWorker = rootSlug.slice(-7) === ".worker";
    var slugWorker = slug.slice(-7) === ".worker";
    if (rootWorker !== slugWorker) return false;
    if (slug === rootSlug) return true;
    if (rootWorker) {
      var s = slug.slice(0, -7);
      var r = rootSlug.slice(0, -7);
      return s === r || s.indexOf(r + ".") === 0;
    }
    return slug.indexOf(rootSlug + ".") === 0;
  }

  function findRoot(roots, slug) {
    var best = null;
    var i;
    var root;
    for (i = 0; i < roots.length; i++) {
      root = roots[i];
      if (!rootMatchesSlug(root.slug, slug)) continue;
      if (!best || root.slug.length > best.slug.length) best = root;
    }
    return best;
  }

  function makeLink(node) {
    var a = document.createElement("a");
    a.className = "page-link";
    a.setAttribute("href", node.href);
    a.textContent = node.name;
    return a;
  }

  function makeTree(node, currentSlugValue) {
    var li = document.createElement("li");
    var a = makeLink(node);
    if (node.slug === currentSlugValue) li.className = "active";
    if (node.children && node.children.length) {
      li.className = (li.className ? li.className + " " : "") + "group";
      var p = document.createElement("p");
      p.appendChild(a);
      li.appendChild(p);
      var ul = document.createElement("ul");
      var i;
      for (i = 0; i < node.children.length; i++) {
        ul.appendChild(makeTree(node.children[i], currentSlugValue));
      }
      li.appendChild(ul);
      if (li.querySelector("li.active")) li.className += " active";
    } else {
      li.appendChild(a);
    }
    return li;
  }

  function render(vm) {
    var nav = document.querySelector(".sidebar-nav");
    if (!nav) return;
    var old = nav.querySelector(".smt-api-local");
    if (old) old.remove();
    var roots = global.SMT_API_SIDEBAR_ROOTS;
    if (!Array.isArray(roots) || !roots.length) return;
    var slug = currentSlug(vm);
    var root = findRoot(roots, slug);
    if (!root) return;
    var wrap = document.createElement("div");
    wrap.className = "smt-api-local";
    var heading = document.createElement("p");
    heading.className = "group-title";
    heading.textContent = "API";
    wrap.appendChild(heading);
    var ul = document.createElement("ul");
    ul.appendChild(makeTree(root, slug));
    wrap.appendChild(ul);
    nav.appendChild(wrap);
  }

  global.smtDocsifyCurrentApiSidebarPlugin = function (hook, vm) {
    hook.doneEach(function () {
      render(vm);
    });
  };
})(window);
