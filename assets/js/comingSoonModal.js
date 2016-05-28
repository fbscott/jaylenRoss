// DOM dependencies:
// .js-coming-soon-btn
// .js-back
// .js-coming-soon-modal

		// Modal and semi-opaque background
var comingSoonModalElems 	= [$('.js-back'), $('.js-coming-soon-modal')],
		// In-panel coming soon button(s)
		comingSoonBtn 				= $('.js-coming-soon-btn');

/**
 * Fade modal elems on click
 */
comingSoonBtn.on('click', function() {
	comingSoonModalElems.forEach(comingSoonToggle);
});

/**
 * Fade modal elems on click
 */
$('.js-back, .js-close').on('click', function() {
	comingSoonModalElems.forEach(comingSoonToggle);
});

/**
 * Fade model elements
 * @param  {Object} elem: 	array elements
 * @param  {Number} index: 	array index
 * @param  {Object} array 	
 */
function comingSoonToggle(elem, index, array) {
	elem.fadeToggle(150);
}
