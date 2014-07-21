var viewpoint = '80%';

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

	//Fading in/out of navigation bar
	$(window).scroll(function() {
		if ($(window).scrollTop() > 600) {
			$('.navbar-default').fadeIn(300);
			$('#scrolltop').fadeIn(300);
		} else {
			$('.navbar-default').fadeOut(300);
			$('#scrolltop').fadeOut(300);
		}
	});

	$('#secret-toggle').click(function() {
		$('#secret').slideToggle(500);
	});

	// Mouse entering Carousel, Show Carousel Control
	$('.carousel').mouseenter(function() {
		$('.carousel-control').fadeIn(300);
	});

	// Mouse leaving Carousel, Hide Carousel Control
	$('.carousel').mouseleave(function() {
		$('.carousel-control').fadeOut(300);
	});

	$('.scrollpoint.fin').waypoint(function() {
		$(this).toggleClass('active');
		$(this).toggleClass('animated fadeIn');
	}, {
		offset : viewpoint
	});
	$('.scrollpoint.fup').waypoint(function() {
		$(this).toggleClass('active');
		$(this).toggleClass('animated fadeInUp');
	}, {
		offset : viewpoint
	});
	$('.scrollpoint.fdown').waypoint(function() {
		$(this).toggleClass('active');
		$(this).toggleClass('animated fadeInDown');
	}, {
		offset : viewpoint
	});
	$('.scrollpoint.fleft').waypoint(function() {
		$(this).toggleClass('active');
		$(this).toggleClass('animated fadeInLeft');
	}, {
		offset : viewpoint
	});
	$('.scrollpoint.fright').waypoint(function() {
		$(this).toggleClass('active');
		$(this).toggleClass('animated fadeInRight');
	}, {
		offset : viewpoint
	});
	$('.scrollpoint.zin').waypoint(function() {
		$(this).toggleClass('active');
		$(this).toggleClass('animated zoomIn');
	}, {
		offset : viewpoint
	});
	$('.scrollpoint.finX').waypoint(function() {
		$(this).toggleClass('active');
		$(this).toggleClass('animated flipInX');
	}, {
		offset : viewpoint
	});
	$('.scrollpoint.finY').waypoint(function() {
		$(this).toggleClass('active');
		$(this).toggleClass('animated flipInY');
	}, {
		offset : viewpoint
	});
	$('.scrollpoint.fbottom').waypoint(function() {
		$(this).toggleClass('active');
		$(this).toggleClass('animated fadeInUp');
	}, {
		offset : '90%'
	});

	// Super Size Page
	$.supersized({
		// Functionality
		slideshow : 1, // Slideshow on/off
		autoplay : 1, // Slideshow starts playing automatically
		start_slide : 1, // Start slide (0 is random)
		stop_loop : 0, // Pauses slideshow on last slide
		random : 0, // Randomize slide order (Ignores start slide)
		slide_interval : 12000, // Length between transitions
		transition : 2, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed : 300, // Speed of transition
		new_window : 1, // Image links open in new window/tab
		pause_hover : 0, // Pause slideshow on hover
		keyboard_nav : 1, // Keyboard navigation on/off
		performance : 1, // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
		image_protect : 1, // Disables image dragging and right click with Javascript

		// Size & Position
		min_width : 0, // Min width allowed (in pixels)
		min_height : 0, // Min height allowed (in pixels)
		vertical_center : 1, // Vertically center background
		horizontal_center : 1, // Horizontally center background
		fit_always : 0, // Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait : 1, // Portrait images will not exceed browser height
		fit_landscape : 0, // Landscape images will not exceed browser width

		// Components
		slide_links : 'blank', // Individual links for each slide (Options: false, 'num', 'name', 'blank')
		thumb_links : 0, // Individual thumb links for each slide
		thumbnail_navigation : 0, // Thumbnail navigation
		slides : [// Slideshow Images
		{
			image : '../images/image01.jpg',
			title : '<div class="slide-content">Gzaph</div>',
			thumb : '',
			url : ''
		}, {
			image : '../images/image02.jpg',
			title : '<div class="slide-content">Responsive Design</div>',
			thumb : '',
			url : ''
		}, {
			image : '../images/image03.jpg',
			title : '<div class="slide-content">FullScreen Gallery</div>',
			thumb : '',
			url : ''
		}, {
			image : '../images/image04.jpg',
			title : '<div class="slide-content">Showcase Your Work</div>',
			thumb : '',
			url : ''
		}],

		// Theme Options
		progress_bar : 0, // Timer for each slide
		mouse_scrub : 0

	});
	
	// Isotope
	var $container = $('.isotope').imagesLoaded(function() {
		$container.isotope({
			// options
			animationEngine : 'best-available',
			itemSelector : '.filter-item',
			layoutMode : 'fitRows'
		});
	});

	var $filterLinks = $('#filters').find('a');
	$filterLinks.on('click', function(e) {
		var value = $(this).attr('data-filter');
		$container.isotope({
			filter: value});
	});
	
	// Fancybox
	$(".fancybox").fancybox({
		padding : 0,
			beforeShow: function () {
				this.title = $(this.element).attr('title');
				this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
			},
			helpers : {
				title : { type: 'inside' },
				overlay: {
					locked: false
				}
			}
	});
});

