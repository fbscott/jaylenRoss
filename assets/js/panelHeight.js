/**
 * Adjust panel accent height to match that of panel content
 * @param  {Object} accent : js-panel-accent
 */
function panelHeight(accent) {

        // .js-accent-panel
    var accentPanel = $('.' + accent),
        // margin-left of accentPanel
        accentPanelMargin = Number(accentPanel.css('margin-left')
                                              .split('px')[0]);

    for (var i = 0; i < accentPanel.length; i++) {
            // find sibling .js-content-panel
        var contentPanel       = $(accentPanel[i]).closest('.row')
                                                  .find('.js-panel-content'),
            // .js-content-panel height
            contentPanelHeight = $(contentPanel).height();

        // set .js-accent-panel height to tha of .js-content-panel
        $(accentPanel[i]).height(contentPanelHeight);

        // alternate positive/negative margin-top
        if(i % 2 === 0) {
            // apply neg margin to .js-contetn-panel
            $(contentPanel).css('margin-top', -1 * (contentPanelHeight + accentPanelMargin) + 'px');
        } else {
            // apply neg margin to .js-contetn-panel
            $(contentPanel).css('margin-top', -1 * (contentPanelHeight - accentPanelMargin) + 'px');
        }
    }
 }
