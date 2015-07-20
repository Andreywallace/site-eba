(function ($) {
    $(function () {

        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function () {
    $('.parallax').parallax();
});


 $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });



$(document).ready(function () {
    //set the initial body width
    var originalWidth = 500;

    /*I need to go through all target divs because i don't know
    how many divs are here and what are their initial height*/


    function resize() {
        //This will only set this._originalHeight once
        this._originalHeight = this._originalHeight || $(this).height();
        //get the new body width
        var bodyWidth = $("body").width();
        //get the difference in width, needed for hight calculation 
        var widthDiff = bodyWidth - originalWidth;
        //new hight based on initial div height
        var newHeight = this._originalHeight + (widthDiff / 10);
        //sets the different height for every needed div
        $(this).css("height", newHeight);

    }

    $(".parallax-container").each(resize);
    $(document).resize(function () {
        $(".parallax-container").each(resize);
    });
});


// Animacao nas secoes
function onScrollInit(items, trigger) {
    items.each(function () {
        var osElement = $(this),
            osAnimationClass = osElement.attr('data-os-animation'),
            osAnimationDelay = osElement.attr('data-os-animation-delay');

        osElement.css({
            '-webkit-animation-delay': osAnimationDelay,
            '-moz-animation-delay': osAnimationDelay,
            'animation-delay': osAnimationDelay
        });

        var osTrigger = (trigger) ? trigger : osElement;

        osTrigger.waypoint(function () {
            osElement.addClass('animated').addClass(osAnimationClass);
        }, {
            triggerOnce: true,
            offset: '90%'
        });
    });
}

onScrollInit($('.os-animation'));
onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));


