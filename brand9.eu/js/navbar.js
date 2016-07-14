(function () {
	'use strict';
  
	$(window).resize(function() {
		if($(window).width() < 768) {
			$('.navbar').removeClass('navbar').addClass('navbar navbar-fixed-top visible-xs-block');
			$('.navbar').removeClass('hidden-xs');
		} else {
			$('.navbar').removeClass('navbar').addClass('navbar hidden-xs');
			$('.navbar').removeClass('navbar-fixed-top');
			$('.navbar').removeClass('visible-xs-block');
		}
	}).resize();
})();
