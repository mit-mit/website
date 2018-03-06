function setupToolsTabs() {
  var tabs = $('.tabs__top-bar li');
  var tabContents = $('.tabs__content');

  // If we have a tool in the url fragement, pre-select it
  if (location.hash && location.hash.length > 1)
    selectToolInTabs(location.hash.substr(1));

  function clearTabsCurrent() {
    tabs.removeClass('current');
    tabContents.removeClass('current');
  }

  tabs.click(function () {
    clearTabsCurrent();

    var tab_id = $(this).attr('data-tab');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });

  // The following selects a tool tab in /guides/get-started
  function selectToolInTabs(toolName) {
    var toolNameEscaped = $.escapeSelector(toolName);

    // Check this is a valid tool first, so we don't hide all tabs
    if ($("li[data-tab='tab-install-" + toolNameEscaped + "']").length > 0) {
      clearTabsCurrent();

      $("li[data-tab='tab-install-" + toolNameEscaped + "']").addClass('current');
      $('#tab-install-' + toolNameEscaped).addClass('current');
    }
  }
}

$(document).ready(function () {
  setupToolsTabs();
});