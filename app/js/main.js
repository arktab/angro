'use strict';
//Animation lib AOS
AOS.init({
    duration: 1200,
    easing: 'ease-in-out-back'
});
//___________________________________
(function($) {
    $(document).ready(function() {
        // Code
        var visible = new Boolean(false);
        $(".button__menu").click(function() {

            if (visible == false) {
                setTimeout(function() {
                    visible = true;
                    $(".menu").toggleClass("menu--opacity");
                    $(".bg").toggleClass("menu--opacity");
                    setTimeout(function() {
                        $(".menu").toggleClass("menu--none");
                        $(".bg").toggleClass("menu--none");
                        $(".sidebar").toggleClass("blend");
                    }, 200);

                }, 100);
            } else {
                visible = false;
                setTimeout(function() {
                    $(".menu").toggleClass("menu--none");
                    $(".bg").toggleClass("menu--none");
                    $(".sidebar").toggleClass("blend");
                    setTimeout(function() {
                        $(".menu").toggleClass("menu--opacity");
                        $(".bg").toggleClass("menu--opacity");
                    }, 200);

                }, 100);
            }

        });
        $(window).scroll(function() {
            $(".menu").addClass("menu--opacity");
            $(".bg").addClass("menu--opacity");
            setTimeout(function() {
                setTimeout(function() {
                    $(".menu").addClass("menu--none");
                    $(".bg").addClass("menu--none");
                }, 200);
                $(".sidebar").addClass("blend");
            }, 200);
        });
    });
})(jQuery);