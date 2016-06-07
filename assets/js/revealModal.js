// DOM dependencies:
// .js-coming-soon-btn
// .js-back
// .js-coming-soon-modal

		// Modal and semi-opaque background
var modalBack 	 = $('.js-back'),
		// In-panel coming soon button(s)
		modalTrigger = $('.js-modal-trigger'),
		// revealed modal
		modal 			 = '',
		// close link and/or icon
		modalClose 	 = $('.js-modal-close'),
		// body
		body 				 = $(document.body);

/**
 * Fade modal elems on click
 */
modalTrigger.on('click', function() {
			// trigger
	var _this 				= $(this),
			// trigger data-modal attribute
			_thisDataAttr = _this.data('trigger');

	revealModal(_thisDataAttr);
	// Prevent body from scrolling when modal is open
	body.css('overflow', 'hidden');
	console.log(_this);
});

modalClose.on('click', function() {
			// modal and $('.js-back')
	var _elems = [$(modal), modalBack];

	// Prevent body from scrolling when modal is open
	body.css('overflow-y', 'auto');
	fadeEachOut(_elems);
});

/**
 * Hide/show elems: modal and $('.js-back')
 */
function revealModal(clickedLink) {
	var _modal = $('.js-' + clickedLink + '-modal')[0],
			_elems = [$(_modal), modalBack];

	// set modal to revealed elem
	modal = _modal;
	fadeEachIn(_elems);
}

/**
 * Next two functions fade modal elems in/out: modal and $('.js-back')
 */
function fadeEachIn(elems) {
	elems.forEach(fadeElemsIn);
}

function fadeEachOut(elems) {
	elems.forEach(fadeElemsOut);
}

/**
 * Fade model elements
 * @param  {Object} elem: 	array elements
 * @param  {Number} index: 	array index
 * @param  {Object} array 	
 */
function fadeElemsIn(elem, index, array) {
	elem.fadeIn(150);
}

function fadeElemsOut(elem, index, array) {
	elem.fadeOut(150);
}
