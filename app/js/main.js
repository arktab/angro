'use strict';
//Animation lib AOS
AOS.init({});

//___________________________________
(function($) {
    $(document).ready(function() {
        // Code
        // Youtube pause button start
        $('.modal-video__close').click(function() {
            $('#video').each(function() {
                this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
            });
        });
        // Youtube pause button end
        setTimeout(function() {
            var preloader = $(".preloader");
            if (!preloader.hasClass("preloader--is-hide")) {
                preloader.addClass("preloader--slide-out");
                $(".wrap").addClass("wrap--slide-out");

                setTimeout(function() {
                    $(".preloader").addClass("preloader--is-hide");
                    //$(".preloader").remove();
                }, 1000);
            }
        }, 1500);

        //TABS JQ
        $(".object-tabs").tabs();
        //Form validation
        var modalname = new String;
        var modaltel = new String;
        var modalSubmit = $(".modal__content").find(".wpcf7-submit");
        var modalUsername = $(".modal__content").find("#username");
        var modalTel = $(".modal__content").find("#tel");
        var modalCheck = $(".modal__content").find("#check").find("input");
        var modalCheckLabel = $(".modal__content").find(".wpcf7-list-item-label");

        modalSubmit.addClass("modal__btn");
        modalSubmit.prop('disabled', true);
        modalSubmit.addClass("btn__disabled");
        modalCheck.addClass("modal-check");
        //GLOBAL FORMS
        $(".wpcf7-submit").addClass("btn");
        $(".contact-form__checkbox").append("<div class='custom-checkbox active__check'></div><div class='custom-checkbox__icon'></div>");
        $(".first").children("input").attr('checked', 'checked');

        modalCheckLabel.click(function() { //lABEL FOR CHECK
            modalname = modalUsername.val();
            modaltel = modalTel.val();
            if (modalCheck.prop("checked") == true) {
                modalCheck.prop("checked", false);
                if (modalCheck.prop("checked", false)) {
                    $(".custom-checkbox__icon").css('display', 'none');
                    modalSubmit.prop('disabled', true);
                    modalSubmit.addClass("btn__disabled");
                } else {

                    $(".custom-checkbox").addClass("active__check");
                    $(".custom-checkbox__icon").css('display', 'block');
                    if (modalname.length >= 3 && modaltel.length == 13) {
                        if (modalCheck.prop("checked") == true) {
                            modalSubmit.prop('disabled', false);
                            modalSubmit.removeClass("btn__disabled");
                        }
                    }
                }
            } else if (modalCheck.prop("checked") == false) {
                modalCheck.prop("checked", true);
                if (modalCheck.prop("checked") == true) {
                    $(".custom-checkbox").addClass("active__check");
                    $(".custom-checkbox__icon").css('display', 'block');
                    if (modalname.length >= 3 && modaltel.length == 13) {
                        if (modalCheck.prop("checked") == true) {
                            modalSubmit.prop('disabled', false);
                            modalSubmit.removeClass("btn__disabled");
                        }
                    }
                } else {
                    $(".custom-checkbox").removeClass("active__check");
                    $(".custom-checkbox__icon").css('display', 'none');
                    modalSubmit.prop('disabled', true);
                    modalSubmit.addClass("btn__disabled");
                }
            }
        });

        modalUsername.focusout(function() {
                modalname = modalUsername.val();
                modaltel = modalTel.val();
                if (modalname.length < 3) {
                    //$(".modal__user-text").addClass("alert__text-red");
                    modalUsername.addClass("modal__field--red");
                    modalSubmit.prop('disabled', true);
                    modalSubmit.addClass("btn__disabled");
                }
                if (modaltel.length < 13) {
                    //$(".modal__tel-text").addClass("alert__text-red");
                    modalTel.addClass("modal__field--red");
                    modalSubmit.prop('disabled', true);
                    modalSubmit.addClass("btn__disabled");
                }
                if (modalname.length >= 3) {
                    //$(".modal__user-text").removeClass("alert__text-red");
                    modalUsername.removeClass("modal__field--red");
                }
                if (modalname.length >= 3 && modaltel.length == 13) {
                    if (modalCheck.prop("checked") == true) {
                        modalSubmit.prop('disabled', false);
                        modalSubmit.removeClass("btn__disabled");
                    }
                }
            })
            .keyup();
        modalTel.focusout(function() {
                modalname = modalUsername.val();
                modaltel = modalTel.val();
                if (modalname.length < 3) {
                    //$(".modal__user-text").addClass("alert__text-red");
                    modalUsername.addClass("modal__field--red");
                    modalSubmit.prop('disabled', true);
                    modalSubmit.addClass("btn__disabled");
                }
                if (modaltel.length < 13) {
                    //$(".modal__tel-text").addClass("alert__text-red");
                    modalTel.addClass("modal__field--red");
                    modalSubmit.prop('disabled', true);
                    modalSubmit.addClass("btn__disabled");
                }
                if (modaltel.length == 13) {
                    //$(".modal__tel-text").removeClass("alert__text-red");
                    modalTel.removeClass("modal__field--red");
                }
                if (modalname.length >= 3 && modaltel.length == 13) {
                    if (modalCheck.prop("checked") == true) {
                        modalSubmit.prop('disabled', false);
                        modalSubmit.removeClass("btn__disabled");
                    }
                }
            })
            .keyup();

        //CONTACT
        var contact_name = new String;
        var contact_tel = new String;
        var Submit = $(".contact").find(".wpcf7-submit");
        var Username = $(".contact").find("#username");
        var Tel = $(".contact").find("#tel");
        var Check = $(".contact").find("#check").find("input");
        var CheckLabel = $(".contact").find(".wpcf7-list-item-label");

        Submit.addClass("modal__btn");
        Submit.prop('disabled', true);
        Submit.addClass("btn__disabled");

        CheckLabel.click(function() { //lABEL FOR CHECK
            contact_name = Username.val();
            contact_tel = Tel.val();
            if (Check.prop("checked") == true) {
                Check.prop("checked", false);
                if (Check.prop("checked", false)) {
                    $(".custom-checkbox__icon").css('display', 'none');
                    Submit.prop('disabled', true);
                    Submit.addClass("btn__disabled");
                } else {

                    $(".custom-checkbox").addClass("active__check");
                    $(".custom-checkbox__icon").css('display', 'block');
                    if (contact_name.length >= 3 && contact_tel.length == 13) {
                        if (Check.prop("checked") == true) {
                            Submit.prop('disabled', false);
                            Submit.removeClass("btn__disabled");
                        }
                    }
                }
            } else if (Check.prop("checked") == false) {
                Check.prop("checked", true);
                if (Check.prop("checked") == true) {
                    $(".custom-checkbox").addClass("active__check");
                    $(".custom-checkbox__icon").css('display', 'block');
                    if (contact_name.length >= 3 && contact_tel.length == 13) {
                        if (Check.prop("checked") == true) {
                            Submit.prop('disabled', false);
                            Submit.removeClass("btn__disabled");
                        }
                    }
                } else {
                    $(".custom-checkbox").removeClass("active__check");
                    $(".custom-checkbox__icon").css('display', 'none');
                    Submit.prop('disabled', true);
                    Submit.addClass("btn__disabled");
                }
            }
        });
        Username.focusout(function() {
                contact_name = Username.val();
                contact_tel = Tel.val();
                if (contact_name.length < 3) {
                    //$(".modal__user-text").addClass("alert__text-red");
                    Username.addClass("contact-form__field--red");
                    Submit.prop('disabled', true);
                    Submit.addClass("btn__disabled");
                }
                if (contact_tel.length < 13) {
                    //$(".modal__tel-text").addClass("alert__text-red");
                    Tel.addClass("contact-form__field--red");
                    Submit.prop('disabled', true);
                    Submit.addClass("btn__disabled");
                }
                if (contact_name.length >= 3) {
                    //$(".modal__user-text").removeClass("alert__text-red");
                    Username.removeClass("contact-form__field--red");
                }
                if (contact_name.length >= 3 && contact_tel.length == 13) {
                    if (Check.prop("checked") == true) {
                        Submit.prop('disabled', false);
                        Submit.removeClass("btn__disabled");
                    }
                }
            })
            .keyup();
        Tel.focusout(function() {
                contact_name = Username.val();
                contact_tel = Tel.val();
                if (contact_name.length < 3) {
                    //$(".modal__user-text").addClass("alert__text-red");
                    Username.addClass("contact-form__field--red");
                    Submit.prop('disabled', true);
                    Submit.addClass("btn__disabled");
                }
                if (contact_tel.length < 13) {
                    //$(".modal__tel-text").addClass("alert__text-red");
                    Tel.addClass("contact-form__field--red");
                    Submit.prop('disabled', true);
                    Submit.addClass("btn__disabled");
                }
                if (contact_tel.length == 13) {
                    //$(".modal__tel-text").removeClass("alert__text-red");
                    Tel.removeClass("contact-form__field--red");
                }
                if (contact_name.length >= 3 && contact_tel.length == 13) {
                    if (Check.prop("checked") == true) {
                        Submit.prop('disabled', false);
                        Submit.removeClass("btn__disabled");
                    }
                }
            })
            .keyup();

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
        // $(window).scroll(function() {
        //     scrolled = $(window).scrollTop();
        //     if (scrolled => 50) {
        //         visible = false;
        //         $(".menu").addClass("menu--opacity");
        //         setTimeout(function() {
        //             $(".menu").addClass("menu--is-hide");
        //         }, 200);
        //     }
        //     // else {
        //     //     visible = true;
        //     //     $(".menu").toggleClass("menu--is-hide");

        //     //     setTimeout(function() {
        //     //         $(".menu").toggleClass("menu--opacity");

        //     //     }, 200);
        //     // }
        // });

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
            $(".apartments-content .arrow-btn").css("display", "flex");
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
            //speed: 500,
            //cssEase: 'linear',
            draggable: false,
            slidesToShow: 3,
            responsive: [{
                breakpoint: 813,
                settings: {
                    slidesToShow: 1
                }
            }]
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
            //centerMode: true,
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