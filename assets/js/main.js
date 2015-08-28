/**
* single-page-nav
* https://github.com/ChrisWojcik/single-page-nav
*/
$('#anhors-static').singlePageNav({
	easing: 'easeInOutExpo',
	speed: 1250,
	offset: 89,
	currentClass: 'active',
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
	$("#game .owl-carousel").owlCarousel({
		pagination: false,
		navigation : true,
		navigationText: false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		// autoPlay: 4000,
		// stopOnHover: true,
		lazyLoad: true,
	});
});


