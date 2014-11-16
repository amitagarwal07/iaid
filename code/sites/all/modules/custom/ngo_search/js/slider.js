jQuery(window).load(function() {
        jQuery('.main-slider').flexslider({
                animation: "slide",              
                animationLoop: true,
                directionNav: false,
                controlNav: false
        });
        jQuery('.node-title').remove();
});
