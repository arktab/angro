'use strict';
//Animation lib AOS
AOS.init({});
// lightGallery(document.getElementById('lightgallery'));
//lightGallery(document.getElementById('object-opened-slider'),{});

//___________________________________
(function($) {
    $(document).ready(function() {
        // Code

        //TABS JQ
        $(".object-tabs").tabs();
        //Form validation
        var modalname = new String;
        var modaltel = new String;
        $(".modal__btn").prop('disabled', true);
        $(".modal__btn").addClass("btn__disabled");
        $("#modal-username")
            .focusout(function() {
                modalname = $("#modal-username").val();
                modaltel = $("#modal-tel").val();
                if (modalname.length < 3) {
                    $(".modal__user-text").addClass("alert__text-red");
                    $("#modal-username").addClass("modal__field--red");
                    $(".modal__btn").prop('disabled', true);
                    $(".modal__btn").addClass("btn__disabled");
                }
                if (modaltel.length < 13) {
                    $(".modal__tel-text").addClass("alert__text-red");
                    $("#modal-tel").addClass("modal__field--red");
                    $(".modal__btn").prop('disabled', true);
                    $(".modal__btn").addClass("btn__disabled");
                }
                if (modalname.length >= 3) {
                    $(".modal__user-text").removeClass("alert__text-red");
                    $("#modal-username").removeClass("modal__field--red");
                }
                if (modalname.length >= 3 && modaltel.length == 13) {
                    if ($("#modal-check").prop("checked") == true) {
                        $(".modal__btn").prop('disabled', false);
                        $(".modal__btn").removeClass("btn__disabled");
                    }
                }
            })
            .keyup();
        $("#modal-tel")
            .focusout(function() {
                modalname = $("#modal-username").val();
                modaltel = $("#modal-tel").val();
                if (modalname.length < 3) {
                    $(".modal__user-text").addClass("alert__text-red");
                    $("#modal-username").addClass("modal__field--red");
                    $(".modal__btn").prop('disabled', true);
                    $(".modal__btn").addClass("btn__disabled");
                }
                if (modaltel.length < 13) {
                    $(".modal__tel-text").addClass("alert__text-red");
                    $("#modal-tel").addClass("modal__field--red");
                    $(".modal__btn").prop('disabled', true);
                    $(".modal__btn").addClass("btn__disabled");
                }
                if (modaltel.length == 13) {
                    $(".modal__tel-text").removeClass("alert__text-red");
                    $("#modal-tel").removeClass("modal__field--red");
                }
                if (modalname.length >= 3 && modaltel.length == 13) {
                    if ($("#modal-check").prop("checked") == true) {
                        $(".modal__btn").prop('disabled', false);
                        $(".modal__btn").removeClass("btn__disabled");
                    }
                }
            })
            .keyup();
        $("#modal-check").click(function() {
            modalname = $("#modal-username").val();
            modaltel = $("#modal-tel").val();
            if ($(this).prop("checked") == false) {
                $(".modal__check-text").addClass("alert__text-red");
                $(".modal__btn").prop('disabled', true);
                $(".modal__btn").addClass("btn__disabled");

            } else if ($(this).prop("checked") == true) {
                $(".modal__check-text").removeClass("alert__text-red");
                if (modalname.length >= 3 && modaltel.length == 13) {
                    if ($("#modal-check").prop("checked") == true) {
                        $(".modal__btn").prop('disabled', false);
                        $(".modal__btn").removeClass("btn__disabled");
                    }
                }

            }
        });
        //CONTACT
        $(".contact-form__checkbox").append("<div class='contact-form__custom-check'></div><div class='contact-form__custom-icon'></div>");
        $(".first").children("input").attr('checked', 'checked');
        $(".contact-form__custom-check").addClass("active__check");
        $(".contact-form__custom-icon").css('display', 'block');
        $("#check").click(function() {
            if ($(".first").children("input").prop("checked") == true) {
                $(".first").children("input").prop("checked", false);
                if ($(".first").children("input").prop("checked", false)) {
                    $(".contact-form__custom-icon").css('display', '');
                    //$(".first").children("input").prop("checked", true);
                } else {

                    $(".contact-form__custom-check").addClass("active__check");
                    $(".contact-form__custom-icon").css('display', 'block');
                }

            } else if ($(".first").children("input").prop("checked") == false) {
                $(".first").children("input").prop("checked", true);
                if ($(".first").children("input").prop("checked") == true) {
                    $(".contact-form__custom-check").addClass("active__check");
                    $(".contact-form__custom-icon").css('display', 'block');
                } else {

                    $(".contact-form__custom-check").removeClass("active__check");
                    $(".contact-form__custom-icon").css('display', '');
                }
            }
        });
        $(".contact-form__custom-check").click(function() {
            if ($(".first").children("input").prop("checked") == true) {
                $(".first").children("input").prop("checked", false);
                if ($(".first").children("input").prop("checked", false)) {
                    $(".contact-form__custom-icon").css('display', '');
                    //$(".first").children("input").prop("checked", true);
                } else {

                    $(".contact-form__custom-check").addClass("active__check");
                    $(".contact-form__custom-icon").css('display', 'block');
                }

            } else if ($(".first").children("input").prop("checked") == false) {
                $(".first").children("input").prop("checked", true);
                if ($(".first").children("input").prop("checked") == true) {
                    $(".contact-form__custom-check").addClass("active__check");
                    $(".contact-form__custom-icon").css('display', 'block');
                } else {

                    $(".contact-form__custom-check").removeClass("active__check");
                    $(".contact-form__custom-icon").css('display', '');
                }
            }
        });

        //$("#username").append("<span class='alert__text contact__user-text alert__text-red'>Ваше имя не указано</span>");

        $(".wpcf7-submit").addClass('btn');
        var contactname = new String;
        var contacttel = new String;
        $(".wpcf7-submit").prop('disabled', true);
        $(".wpcf7-submit").addClass("btn__disabled");
        $("#username").focusout(function() {
                contactname = $("#username").val();
                contacttel = $("#tel").val();
                if (contactname.length < 3) {
                    $("#tel").addClass("alert__text-red");
                    $(".wpcf7-submit").prop('disabled', true);
                    $(".wpcf7-submit").addClass("btn__disabled");
                    $("#username").addClass("contact-form__field--red");
                }
                if (contacttel.length < 13) {
                    $("#tel").addClass("alert__text-red");
                    $(".wpcf7-submit").prop('disabled', true);
                    $(".wpcf7-submit").addClass("btn__disabled");
                    $("#tel").addClass("contact-form__field--red");
                }
                if (contactname.length >= 3) {
                    $("#tel").removeClass("alert__text-red");
                    $("#username").removeClass("contact-form__field--red");
                }
                if (contactname.length >= 3 && contacttel.length == 13) {
                    if ($(".first").children("input").prop("checked") == true) {
                        $(".wpcf7-submit").removeClass("btn__disabled");
                        $(".wpcf7-submit").prop('disabled', false);
                    }
                }
            })
            .keyup();
        $("#tel").focusout(function() {
            contactname = $("#username").val();
            contacttel = $("#tel").val();
            if (contactname.length < 3) {
                $("#tel").addClass("alert__text-red");
                $(".wpcf7-submit").prop('disabled', true);
                $(".wpcf7-submit").addClass("btn__disabled");
                $("#username").addClass("contact-form__field--red");
            }
            if (contacttel.length < 13) {
                $("#tel").addClass("alert__text-red");
                $(".wpcf7-submit").prop('disabled', true);
                $(".wpcf7-submit").addClass("btn__disabled");
                $("#tel").addClass("contact-form__field--red");
            }
            if (contacttel.length == 13) {
                $("#tel").removeClass("alert__text-red");
                $("#tel").removeClass("contact-form__field--red");

            }
            if (contactname.length >= 3 && contacttel.length == 13) {
                if ($(".first").children("input").prop("checked") == true) {
                    $(".wpcf7-submit").removeClass("btn__disabled");
                    $(".wpcf7-submit").prop('disabled', false);
                }
            }
        }).keyup();

        $(".contact-form__checkbox").click(function() {
            contactname = $("#username").val();
            contacttel = $("#tel").val();
            if ($(".first").children("input").prop("checked") == false) {
                $(".contact__check-text").addClass("alert__text-red");
                $(".wpcf7-submit").prop('disabled', true);
                $(".wpcf7-submit").addClass("btn__disabled");

            } else if ($(".first").children("input").prop("checked") == true) {
                $(".contact__check-text").removeClass("alert__text-red");
                if (contactname.length >= 3 && contacttel.length == 13) {
                    $(".wpcf7-submit").prop('disabled', false);
                    $(".wpcf7-submit").removeClass("btn__disabled");
                }

            }
        });
        //FOOTER EMAIL BUTTON
        $(".footer-newsletter__btn").prop('disabled', true);
        $(".footer-newsletter__btn").addClass("btn__disabled");
        var footer__email = new String;
        $(".footer-newsletter__field").focusout(function() {
            footer__email = $(".footer-newsletter__field").val();
            if (footer__email.length >= 5) {
                $(".footer-newsletter__btn").removeClass("btn__disabled");
                $(".footer-newsletter__btn").prop('disabled', false);
            }
            if (footer__email.length < 5) {
                $(".footer-newsletter__btn").prop('disabled', true);
                $(".footer-newsletter__btn").addClass("btn__disabled");
            }
        }).keyup();
        //FOOTER EMAIL BUTTON END
        //Form validation END
        $(".menu").addClass("menu--is-hide");
        $(".menu").addClass("menu--opacity");
        var visible = new Boolean(false);
        var scrolled = $(window).scrollTop();
        $(window).scroll(function() {
            scrolled = $(window).scrollTop();
            if (scrolled => 50) {
                visible = false;
                $(".menu").addClass("menu--opacity");
                setTimeout(function() {
                    $(".menu").addClass("menu--is-hide");
                }, 200);
            }
            // else {
            //     visible = true;
            //     $(".menu").toggleClass("menu--is-hide");

            //     setTimeout(function() {
            //         $(".menu").toggleClass("menu--opacity");

            //     }, 200);
            // }
        });

        $(".sidebar-menu__triger").click(function() {

            if (visible == false) {
                visible = true;
                $(".menu").toggleClass("menu--is-hide");
                setTimeout(function() {
                    $(".menu").toggleClass("menu--opacity");
                }, 300);
            } else {
                visible = false;
                $(".menu").addClass("menu--opacity");
                setTimeout(function() {
                    $(".menu").addClass("menu--is-hide");
                }, 200);
            }
        });
        //
        $(".mobile-menu").click(function() {
            $(".mobile-menu__icon").toggleClass("mobile-menu__icon--active");
            if (visible == false) {
                visible = true;
                $(".menu").toggleClass("menu--is-hide");
                setTimeout(function() {
                    $(".menu").toggleClass("menu--opacity");
                }, 300);
            } else {
                visible = false;
                $(".menu").addClass("menu--opacity");
                setTimeout(function() {
                    $(".menu").addClass("menu--is-hide");
                }, 200);
            }
        });
        //
        var width = $(window).width();
        if (width <= 1024) {
            if (visible == false) {
                visible = false;
                $(".menu").addClass("menu--opacity");
                setTimeout(function() {
                    $(".menu").addClass("menu--is-hide");
                }, 200);
            }
        }
        //OBJECT START
        if (width <= 1024) {
            $(".content-info__text").addClass("shown-height");
            $(".show-more").addClass("show-active");

        }
        $(".show-more").click(function() {
            $(".content-info__text").toggleClass("shown-height");
            $(".show-more").toggleClass("show-active");
            $(".show-less").toggleClass("show-active");
        });
        $(".show-less").click(function() {
            $(".content-info__text").toggleClass("shown-height");
            $(".show-less").toggleClass("show-active");
            $(".show-more").toggleClass("show-active");
        });

        //OBJECT END
        //MODAL SATRT
        $(".open-modal").click(function() {
            $(".modal").toggleClass("modal-is-shown");
            //$('body').toggleClass('is-menu-shown');
        });
        $(".menu-info__text").children('.link--active').click(function() {
            $(".modal").toggleClass("modal-is-shown");
            $('body').toggleClass('is-menu-shown');
        });
        $(".footer-backcall").children('.btn').click(function() {
            $(".modal").toggleClass("modal-is-shown");
            //$('body').toggleClass('is-menu-shown');
        });
        //MODAL VIDEO 
        $(".about-btn").click(function() {
            $(".modal-video").toggleClass("modal-video-is-shown");
            $('body').toggleClass('is-menu-shown');
        });
        //CLOSE MODAL
        $(".close").click(function() {
            $(".modal").removeClass("modal-is-shown");
            $('body').removeClass('is-menu-shown');
        });
        $(".modal-video__close").click(function() {
            $(".modal-video").toggleClass("modal-video-is-shown");
            $('body').removeClass('is-menu-shown');
        });
        //OBJECT MODAL START
        $(".object-info__link").click(function() {
            $(".object-modal").toggleClass("object-modal-is-shown");
            $('body').toggleClass('is-menu-shown');
        });
        $(".object-modal__close").click(function() {
            $(".object-modal").removeClass("object-modal-is-shown");
            $('body').removeClass('is-menu-shown');
        });
        //OBJECT MODAL END
        // POLICY MODAL
        $(".modal__link").click(function() {
            $(".policy").toggleClass("policy-is-shown");
            $('body').toggleClass('is-menu-shown');
        });
        $(".policy__close").click(function() {
            $(".policy").removeClass("policy-is-shown");
            $('body').removeClass('is-menu-shown');
        });
        $(".contact-form__link").click(function() {
            $(".policy").toggleClass("policy-is-shown");
            $('body').toggleClass('is-menu-shown');
        });
        //POLICY MODAL END
        //MODAL END

        //MOBILE 
        var width = $(window).width();
        $(".apartments-content .arrow-btn").css("display", "none");
        if (width <= 1024) {
            $(".apartments-content .arrow-btn").css("display", "block");
            $(".apartments-content iframe").remove();
        }





















        $('.object-opened-slider').lightGallery({
            thumbnail: false,
            download: false,
            zoom: false,
            share: false,
            fullScreen: false,
            autoplayControls: false
        });
        $('#lightgallery').lightGallery({
            thumbnail: false,
            download: false,
            zoom: false,
            share: false,
            fullScreen: false,
            autoplayControls: false
        });













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
            fade: true,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            slidesToShow: 1,
            responsive: [{
                adaptiveHeight: true,
                breakpoint: 576,
                settings: {
                    arrows: true
                }
            }]
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
        $('.object-opened-slider').slick({
            nextArrow: $('.slider-icon__next'),
            prevArrow: $('.slider-icon__prev'),
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            arrows: true,
            speed: 500,
            cssEase: 'linear',
            draggable: true,
            slidesToShow: 3,
            centerMode: true,
            variableWidth: true,
            //centerPadding: '60px',
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