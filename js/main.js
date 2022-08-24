$(function () {

    /* gnb 클릭 이동 */
    let winHeight = $(window).height();

    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    /* 클릭한 순서에 맞게 이동 */
    $('.gnb ul li').on('click', function () {
        let i = $(this).index();
        $('html,body').animate({
            scrollTop: winHeight * i
        })

    });
    /* 클릭 active */
    $('.own').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active').siblings('.gnb').toggleClass('block');
    });




    /*스크롤 */
    $('#wrap>section').on('mousewheel', function (e, d) {
        if (d > 0) {//스크롤을 올렸을 때
            let prv = $(this).prev().offset().top;
            $('html,body').stop().animate({
                scrollTop: prv
            });

        } else if (d < 0) {// 스크롤을 내렸을 때
            let nxt = $(this).next().offset().top;
            $('html,body').stop().animate({
                scrollTop: nxt
            });

        }
    })












});


