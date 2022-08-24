$(function () {

    $('#mainV ul').slick({
        //slidesToShow: 1,      /* 화면에 보이는 이미지는 갯수 */
        //slidesToScroll: 1,    /* 넘어가는 이미지는 갯수 */
        //arrows: true,        //화살표사용여부
        //dots: false,           //페이저 사용여부
        //speed: 500,           //다음 페이지로 넘어가는 시간 
        //autoplay: true,       //자동재생 여부    /* 포폴에는 항상 true로해놓기 */
        //autoplaySpeed: 1000,  //자동재생시 이미지가 유지되는시간 
        //pauseOnHover: false,   //마우스 hover시 자동재생 멈춤 여부
        //Infinity: true,        //무한반복 여부
        //vertical: false
        dots: false,
        infinite: true,
        speed: 200,
        autoplaySpeed: 1000,
        arrows: true,
        slidesToShow: 1,
        centerMode: true,
        autoplay: true,
        pauseOnHover: false,
        variableWidth: true
    });

    $('#cont2 ul').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 641, settings: {
                    infinite: true,
                    speed: 200,
                    autoplaySpeed: 1000,
                    slidesToShow: 1,
                    centerMode: true,
                    autoplay: true,
                    pauseOnHover: false,
                    variableWidth: true
                }
            }
        ]
    });



    /* top 버튼 */
    let goTop = document.querySelector('.goTop');

    goTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener('scroll', function () {

        if (this.pageYOffset > 450) {
            goTop.classList.add('on')
        } else {
            goTop.classList.remove('on')
        }

    });

});//opening


