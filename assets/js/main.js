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

