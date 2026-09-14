/**
 * Persist docs display options (hide deprecated APIs).
 */
(function (global) {
  var STORAGE_KEY = "smt-docs-hide-deprecated";
  var CLASS_NAME = "smt-hide-deprecated";

  function hideDeprecated() {
    try {
      return global.localStorage.getItem(STORAGE_KEY) === "1";
    } catch (err) {
      return false;
    }
  }

  function applyClass(on) {
    var root = document.documentElement;
    if (!root) return;
    root.classList.toggle(CLASS_NAME, Boolean(on));
  }

  function setHideDeprecated(on) {
    var next = Boolean(on);
    try {
      global.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch (err) {
      /* ignore quota / private mode */
    }
    applyClass(next);
    document.dispatchEvent(new Event("smt-docs-settings"));
  }

  function headingIdFromHash() {
    var hash = global.location.hash || "";
    var q = hash.indexOf("?");
    if (q < 0) return "";
    return new URLSearchParams(hash.slice(q + 1)).get("id") || "";
  }

  function revealTargetCard() {
    var cards = document.querySelectorAll(".smt-member-card.smt-member-reveal");
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove("smt-member-reveal");
    }
    var id = headingIdFromHash();
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    var card = el.closest(".smt-member-card");
    if (card) card.classList.add("smt-member-reveal");
  }

  applyClass(hideDeprecated());

  global.smtDocsSettings = {
    hideDeprecated: hideDeprecated,
    setHideDeprecated: setHideDeprecated,
  };

  global.smtDocsifyDocsSettingsPlugin = function (hook) {
    hook.doneEach(revealTargetCard);
  };
})(window);
