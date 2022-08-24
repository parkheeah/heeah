$(function () {




    /*     function scrollPage() {
            let scr = $(window).scrollTop();
            for (let i = 0; i < $('ul li').length; i++) {
                if (scr >= winHeight * i && scr < winHeight * (i + 1)) {
                    $('#wrap section').removeClass('on');
                    $('#wrap section').eq(i).addClass('on');
                }
            }
        } */

    $('.fa-bars').on('click', function () {
        $('.nav2').stop().animate({
            left: 0
        }, 500, 'easeInOutQuint');
    });
    $('.cls').on('click', function () {
        $('.nav2').stop().animate({
            left: '-100%'
        }, 500, 'easeInOutQuint');
    });
    $('.nav2 p').on('click', function () {
        $(this).siblings().slideToggle();
        $(this).parent().siblings().find('.sub').slideUp();
    })


    $('.vimg').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 900,
        pauseOnHover: false,
        vertical: true,
        dots: true


    });










});


