/*
Acknowledgements: borrowed from Bramus! at CodePen
Source: http://codepen.io/bramus/pen/yikfd
*/

jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var _offset      = $(window).scrollTop() + $(window).height(),
        _animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if (_animatables.size() === 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		_animatables.each(function(i) {
      var _animatable = $(this);

      if ((_animatable.offset().top + _animatable.height() - 20) < _offset) {
        _animatable.removeClass('animatable')
                   .addClass('animated');
      }
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});
