/**
 * Shared top nav for standalone /tools/ pages.
 * Uses the same `.app-nav` markup and `assets/site.css` rules as Docsify.
 */
(function () {
  var toolsOn = /^\/tools(?:\/|$)/.test(location.pathname || "");
  var wiki = "https://wiki.hoodedhorse.com/Sandustry/Sandustry_Official_Wiki";
  var sandkit = "https://sandustry.com/sandkit.html";
  var template = "https://github.com/IrishBruse/SandustryModTemplate";
  var nav = document.createElement("nav");
  nav.className = "app-nav";
  nav.setAttribute("aria-label", "Site");
  nav.innerHTML =
    "<ul>" +
    '<li><a href="/#/">Home</a></li>' +
    '<li><a href="/#/guides/">Guides</a></li>' +
    '<li><a href="/#/types/">Types</a></li>' +
    '<li><a href="/#/builds">Template</a></li>' +
    '<li><a href="/#/ui/">UI</a></li>' +
    '<li' +
    (toolsOn ? ' class="active smt-nav-current"' : "") +
    '><a href="/tools/"' +
    (toolsOn ? ' aria-current="page"' : "") +
    ">Tools</a></li>" +
    "<li>Links<ul>" +
    '<li><a href="' +
    wiki +
    '" target="_blank" rel="noopener">Official wiki</a></li>' +
    '<li><a href="' +
    sandkit +
    '" target="_blank" rel="noopener">Official Sandkit API</a></li>' +
    '<li><a href="' +
    template +
    '" target="_blank" rel="noopener">Mod template</a></li>' +
    "</ul></li>" +
    "</ul>";
  document.body.insertBefore(nav, document.body.firstChild);
})();
