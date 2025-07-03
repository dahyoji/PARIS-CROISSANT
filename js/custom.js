$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 3000,

    });

    $('.main_visual .prev').on('click', function () {
        main_visual_slide.slidePrev();
    });

    $('.main_visual .next').on('click', function () {
        main_visual_slide.slideNext();
    });

    $('').on('click', function () {
        main_visual_slide.slidePrev();
    });

    $('').on('click', function () {
        main_visual_slide.slideNext();
    });


    const MMS = new Swiper('.main_menu_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 40,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        speed: 5000,
        breakpoints: {

            769: {
                slidesPerView: 5,
                spaceBetween: 30,
            },

        },
    });

    const main_product_slide = new Swiper('.main_product_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {

            769: {
                slidesPerView: 4,
                spaceBetween: 30,
            },

        },
        navigation: {
            nextEl: '.main_product .next',
            prevEl: '.main_product .prev',
        },
    });


});


$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

})