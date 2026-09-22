/**
 * Shared top nav for standalone /tools/ pages.
 * Uses the same `.app-nav` markup and `assets/site.css` rules as Docsify.
 */
(function () {
  var toolsOn = /^\/tools(?:\/|$)/.test(location.pathname || "");
  var nav = document.createElement("nav");
  nav.className = "app-nav";
  nav.setAttribute("aria-label", "Site");
  nav.innerHTML =
    "<ul>" +
    '<li><a href="/#/">Home</a></li>' +
    '<li><a href="/#/guides/">Guides</a></li>' +
    '<li><a href="/#/types/">Types</a></li>' +
    '<li><a href="/#/modinfo.json">Config</a></li>' +
    '<li><a href="/#/builds">Template</a></li>' +
    '<li><a href="/#/ui/">UI</a></li>' +
    '<li' +
    (toolsOn ? ' class="active smt-nav-current"' : "") +
    '><a href="/tools/"' +
    (toolsOn ? ' aria-current="page"' : "") +
    ">Tools</a></li>" +
    "</ul>";
  document.body.insertBefore(nav, document.body.firstChild);
})();
