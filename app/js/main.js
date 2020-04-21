'use strict';
//Animation lib AOS
AOS.init({
    //duration: 800,
    //easing: 'ease-in-out-back'
});
//___________________________________
(function($) {
    $(document).ready(function() {
        // Code
        var visible = new Boolean(false);
        $(".sidebar-menu__triger").click(function() {

            if (visible == false) {
                setTimeout(function() {
                    visible = true;
                    $(".menu").toggleClass("menu--opacity");

                    setTimeout(function() {
                        $(".menu").toggleClass("menu--is-hide");

                    }, 200);
                }, 100);
            } else {
                visible = false;
                setTimeout(function() {
                    $(".menu").toggleClass("menu--is-hide");

                    setTimeout(function() {
                        $(".menu").toggleClass("menu--opacity");

                    }, 200);
                }, 100);
            }
        });
        //
        $(".mobile-menu__icon").click(function() {
            if (visible == false) {
                setTimeout(function() {
                    visible = true;
                    $(".menu").toggleClass("menu--opacity");

                    setTimeout(function() {
                        $(".menu").toggleClass("menu--is-hide");
                        //$('body').toggleClass('is-menu-shown');
                    }, 200);
                }, 100);
            } else {
                visible = false;
                setTimeout(function() {
                    $(".menu").toggleClass("menu--is-hide");

                    setTimeout(function() {
                        $(".menu").toggleClass("menu--opacity");
                        //$('body').toggleClass('is-menu-shown');
                    }, 200);
                }, 100);
            }
        });
        //
        var width = $(window).width();
        if (width <= 813) {
            if (visible == false) {
                setTimeout(function() {
                    visible = false;
                    $(".menu").toggleClass("menu--opacity");
                    setTimeout(function() {
                        $(".menu").toggleClass("menu--is-hide");
                    }, 200);
                }, 100);
            }
        }

        //MODAL SATRT
        $(".open-modal").click(function() {
            $(".modal").toggleClass("modal-is-shown");
            $('body').toggleClass('is-menu-shown');
        });
        $(".menu-info__text").children('.link--active').click(function() {
            $(".modal").toggleClass("modal-is-shown");
            $('body').toggleClass('is-menu-shown');
        });
        $(".footer-backcall").children('.btn').click(function() {
            $(".modal").toggleClass("modal-is-shown");
            $('body').toggleClass('is-menu-shown');
        });
        //MODAL VIDEO 
        $(".about-btn").click(function() {
            $(".modal-video").toggleClass("modal-video-is-shown");
            $('body').toggleClass('is-menu-shown');
        });
        //CLOSE MODAL
        $(".close").click(function() {
            $(".modal").toggleClass("modal-is-shown");
            $('body').removeClass('is-menu-shown');
        });
        $(".modal-video__close").click(function() {
            $(".modal-video").toggleClass("modal-video-is-shown");
            $('body').removeClass('is-menu-shown');
        });
        //MODAL END

        //MOBILE 

        //SLIDER__________________________________
        $('.about-slider').slick({
            nextArrow: $('.about-slider__next'),
            prevArrow: $('.about-slider__prev'),
            dots: false,
            infinite: true,
            arrows: true,
            speed: 500,
            cssEase: 'linear',
            draggable: false,
            slidesToShow: 3,
            responsive: [{
                    breakpoint: 813,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $('.objects-slider').slick({
            nextArrow: $('.objects-slider__icon'),
            arrows: true,
            //draggable: false,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            slidesToShow: 1
        });
        $('.articles-slider').slick({
            nextArrow: $('.articles-slider__icon'),
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            arrows: true,
            speed: 1000,
            cssEase: 'linear',
            fade: true,
            slidesToShow: 1,
            responsive: [{
                breakpoint: 576,
                settings: {
                    arrows: false
                }
            }]
        });
        $('.apartments-slider').slick({
            nextArrow: $('.apartments-slider__nextbtn'),
            prevArrow: $('.apartments-slider__prevbtn'),
            dots: false,
            //infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 3,
            responsive: [{
                    breakpoint: 1180,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 813,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        //slider button
    });
})(jQuery);