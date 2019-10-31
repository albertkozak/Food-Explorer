(function($){

	'use strict';
	
	const $body = $('body');
	const $hamburgerMenu = $('.hamburger');
	

	$hamburgerMenu.on('click', function() {
		$body.toggleClass('main-nav-open');
	});
	
	$hamburgerMenu.on('mousedown', function(e){
		e.preventDefault();
	});
	
}(jQuery));
	