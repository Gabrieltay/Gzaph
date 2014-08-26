$(document).ready(function() {

	//Scrolling to navigate pages
	$(".scroll[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop : $(this.hash).offset().top
		}, 1000, function() {
			window.location.hash = hash;
		});
	});
	
	$(".navbar-nav a,section").on('click', function(e) {
		$(".navbar-collapse").removeClass('in');
	});
	
	jQuery(".ss-wrapper a").fancybox({
			'titleShow'		: false,
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic'
		});
});