/**
 * Adjust panel accent height to match that of panel content
 * @param  {Object} accent : js-panel-accent
 */
function panelHeight(accent) {
    // .js-accent-panel
    var accentPanel = $('.' + accent);

    for (var i = 0; i < accentPanel.length; i++) {
            // find sibling .js-content-panel
        var contentPanel       = $(accentPanel[i]).closest('.row')
                                                  .find('.js-panel-content'),
            // .js-content-panel height
            contentPanelHeight = $(contentPanel).height();

        // set .js-accent-panel height to tha of .js-content-panel
        $(accentPanel[i]).height(contentPanelHeight);
        // apply neg margin to .js-contetn-panel
        $(contentPanel).css('margin-top', -1 * (contentPanelHeight + 25) + 'px');
    }
 }
