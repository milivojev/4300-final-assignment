// var $home = $('header');
// $home.waypoint(function(direction){
// 	if(direction == "down") {
// 		$home.addClass('activepage');
// 	}
// });



var $aboutUsArea = $('.about-us-area');


$aboutUsArea.waypoint(function(direction){
	if(direction == "down"){
	$('a[href="#about-us"]').addClass('activepage').siblings().removeClass('activepage');
	$aboutUsArea.addClass('about-us-area-animate');
	 }
	else {
		$aboutUsArea.removeClass('about-us-area-animate');
		$('a[href="#about-us"]').removeClass('activepage');
		$('a[href="#home"]').addClass('activepage');

	}
}, {offset:"150%"});

var $gallery = $('.gallery-area');
$gallery.waypoint(function(direction){
	if(direction == "down"){
	$gallery.addClass('gallery-area-animate'); 
}
	else {
		$gallery.removeClass('gallery-area-animate');
		$('a[href="#about-us"]').addClass('activepage').siblings().removeClass('activepage');

	}
}, {offset:"160%"});

var $ourChamps = $('.our-champs-area');
$ourChamps.waypoint(function(direction){
	if(direction == "down"){
	$('a[href="#our-cats"]').addClass('activepage').siblings().removeClass('activepage');
	$ourChamps.addClass('our-champs-area-animate');
	 }
	else {
		$ourChamps.removeClass('our-champs-area-animate');
		$('a[href="#our-cats"]').addClass('activepage').siblings().removeClass('activepage');

	}
}, {offset:"120%"});


var $testimonials = $('.testimonials-area');
$testimonials.waypoint(function(direction){
	if(direction == "down"){
	$('a[href="#testimonials"]').addClass('activepage').siblings().removeClass('activepage');
	$testimonials.addClass('testimonials-area-animate');

	 }
	else {
		$testimonials.removeClass('testimonials-area-animate');
		$('a[href="#testimonials"]').addClass('activepage').siblings().removeClass('activepage');
		
	}
}, {offset:"130%"});

var $blog = $('.blog-area');
$blog.waypoint(function(direction){
	if(direction == "down"){
	$('a[href="#blog"]').addClass('activepage').siblings().removeClass('activepage');
	$blog.addClass('blog-area-animate');
	 }
	else {
		$blog.removeClass('blog-area-animate');
		$('a[href="#blog"]').addClass('activepage').siblings().removeClass('activepage');
		
	}
}, {offset:"130%"});

var $bac = $('.buy-a-kitten-area');
$bac.waypoint(function(direction){
	if(direction == "down"){
	$('a[href="#buyakitten"]').addClass('activepage').siblings().removeClass('activepage');
	$bac.addClass('buy-a-kitten-area-animate');
	 }
	else {
		$bac.removeClass('buy-a-kitten-area-animate');
		$('a[href="#buyakitten"]').addClass('activepage').siblings().removeClass('activepage');
	}
}, {offset:"130%"});

var $contactme = $('.contact-me-area');
$contactme.waypoint(function(direction){
	if(direction == "down"){
	$('a[href="#contact"]').addClass('activepage').siblings().removeClass('activepage');
	$contactme.addClass('contact-me-area-animate');

	 }
	else {
		$contactme.removeClass('contact-me-area-animate');	
		$('a[href="#contact"]').addClass('activepage').siblings().removeClass('activepage');

	}
}, {offset:"130%"});



// scroling links
jQuery(function($) {
        // from http://imakewebthings.com/jquery-waypoints/

        // Wicked credit to
	// http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
	var scrollElement = 'html, body';
	$('html, body').each(function () {
		var initScrollTop = $(this).attr('scrollTop');
		$(this).attr('scrollTop', initScrollTop + 100);
		if ($(this).attr('scrollTop') == initScrollTop + 100) {
			scrollElement = this.nodeName.toLowerCase();
			$(this).attr('scrollTop', initScrollTop);
			return false;
		}    
	});
	
	// Smooth scrolling for internal links
	$("a[href^='#']").click(function(event) {
		event.preventDefault();
		
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		$(scrollElement).stop().animate({
			'scrollTop': $target.offset().top -94
		}, 700, 'swing', function() {
			window.location.hash = target;
		});
		
	});

});