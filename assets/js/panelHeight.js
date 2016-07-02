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
        var _contentPanel       = $(accentPanel[i]).closest('.row')
                                                   .find('.js-panel-content'),
            // .js-content-panel height
            _contentPanelHeight = $(_contentPanel).height(),
            // CTA button
            _ctaButton = $(accentPanel[i]).closest('.js-button-margin-container')
                                          .find('.js-button-margin'),
            // CTA button height
            _ctaButtonHeight = _ctaButton.outerHeight(),
            // CTA button parent
            _ctaButtonParent = _ctaButton.closest('div');

        // set .js-accent-panel height to tha of .js-content-panel
        $(accentPanel[i]).height(_contentPanelHeight);
        // Add margin-top to aid with equal spacing between panels
        $(accentPanel[i]).css('margin-top', (accentPanelMargin) + 'px');

        // alternate positive/negative margin-top
        if(i % 2 === 0) {
            // apply neg margin to .js-contetn-panel
            $(_contentPanel).css('margin-top', -1 * (_contentPanelHeight + accentPanelMargin) + 'px');
            $(_ctaButtonParent).css('margin-top', (_ctaButtonHeight - accentPanelMargin) + 'px');
        } else {
            // apply neg margin to .js-contetn-panel
            $(_contentPanel).css('margin-top', -1 * (_contentPanelHeight - accentPanelMargin) + 'px');
            $(_ctaButtonParent).css('margin-top', -1 * (_contentPanelHeight - accentPanelMargin) + 'px');
            // Same as line 30 above, but accounting for the button height
            $(accentPanel[i]).css('margin-top', (_ctaButtonHeight - accentPanelMargin) + 'px');
        }
    }
 }
