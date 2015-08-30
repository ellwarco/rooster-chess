/**
* single-page-nav
* https://github.com/ChrisWojcik/single-page-nav
*/
$('#anhors-static').singlePageNav({
	easing: 'easeInOutExpo',
	speed: 1250,
	offset: 89,
	// currentClass: 'active',
});
$('#anhors-fixed').singlePageNav({
	easing: 'easeInOutExpo',
	speed: 1250,
	offset: 89,
	currentClass: 'active',
});


/**
* navbar collapse on scroll
*/
$(window).scroll(function() {
	if ($("#anhors-fixed").offset().top > 580) {
		$("#anhors-fixed").addClass("anhors-fixed");
	} else {
		$("#anhors-fixed").removeClass("anhors-fixed");
	}
});


/**
* OwlCarousel
* http://owlgraphic.com/owlcarousel/
*/
$(function() {
	$("#table .owl-carousel").owlCarousel({
		pagination: false,
		navigation : true,
		navigationText: false,
		slideSpeed : 300,
		singleItem: true,
		// paginationSpeed : 400,
		// lazyLoad: true,
	});
	$("#hiw .owl-carousel").owlCarousel({
		pagination: false,
		navigation : true,
		navigationText: false,
		slideSpeed : 300,
		singleItem: true,
	});
	$("#game .owl-carousel").owlCarousel({
		pagination: false,
		navigation : true,
		navigationText: false,
		slideSpeed : 300,
		singleItem: true,
	});
});


/**
* waypoint
* https://github.com/imakewebthings/waypoints
*/
// var $head = $( '.geo-header' );
// $('.waypoint').each( function(i) {
// 	var $el = $( this ),
// 		animClassDown = $el.data( 'animateDown' ),
// 		animClassUp = $el.data( 'animateUp' );
// 	$el.waypoint( function( direction ) {
// 		if( direction === 'down' && animClassDown ) {
// 			$head.attr('class', 'geo-header ' + animClassDown);
// 		}
// 		else if( direction === 'up' && animClassUp ){
// 			$head.attr('class', 'geo-header ' + animClassUp);
// 		}
// 	}, { offset: '-1px' } );
// });


