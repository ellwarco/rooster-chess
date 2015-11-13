/**
* single-page-nav
* https://github.com/ChrisWojcik/single-page-nav
*/
$('#anhors').singlePageNav({
    easing: 'easeInOutExpo',
    speed: 1250,
    currentClass: 'active',
    offset: 86,
});


/**
* navbar collapse on scroll
*/
// $(window).scroll(function() {
//  if ($("#anhors-fixed").offset().top > 580) {
//      $("#anhors-fixed").addClass("anhors-fixed");
//  } else {
//      $("#anhors-fixed").removeClass("anhors-fixed");
//  }
// });


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
var $head = $( '#anhors' );
$('.waypoint').each( function(i) {
    var $el = $( this ),
        animClassDown = $el.data( 'animateDown' ),
        animClassUp = $el.data( 'animateUp' );
    $el.waypoint( function( direction ) {
        if( direction === 'down' && animClassDown ) {
            $head.attr('class', 'waypoint anhors ' + animClassDown);
        }
        else if( direction === 'up' && animClassUp ){
            $head.attr('class', 'waypoint anhors ' + animClassUp);
        }
    }, { offset: '0' } );
});


$(function() {
    $(document).languageDetection({
        domain: '',
        languages: [
            {
                code : 'en',
                path : '/'
            },
            {
                code : 'pl',
                path : '/pl/gods-chess/'
            },
            {
                code : 'ua',
                path : '/ua/gods-chess/',
                defaultLanguage : true
            },
            {
                code : 'ru',
                path : '/ru/gods-chess/'
            }
        ]
    });
});