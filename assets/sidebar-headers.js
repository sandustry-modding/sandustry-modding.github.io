/**
 * Docsify wraps top-level folder labels in <p class="group-title">, but nested
 * folder labels stay as text nodes (`li.group` → "Player & controls" + <ul>).
 * Wrap those text nodes so site.css can style every non-clickable header.
 */
(function (global) {
  function wrapGroupTitleTextNodes() {
    var nodes = document.querySelectorAll(".sidebar-nav li.group");
    for (var i = 0; i < nodes.length; i++) {
      var li = nodes[i];
      if (li.querySelector(":scope > p")) continue;
      var first = li.firstChild;
      if (!first || first.nodeType !== Node.TEXT_NODE) continue;
      var text = first.textContent.replace(/^\s+|\s+$/g, "");
      if (!text) continue;
      var p = document.createElement("p");
      p.className = "group-title";
      p.textContent = text;
      li.replaceChild(p, first);
    }
  }

  global.smtDocsifySidebarHeadersPlugin = function (hook) {
    hook.doneEach(wrapGroupTitleTextNodes);
  };
})(window);
