$(function () {

    // 시계
    function clock() {
        let nowTime = new Date();
        let hr = nowTime.getHours();
        let min = nowTime.getMinutes();
        let sec = nowTime.getSeconds();

        if (hr < 10) {
            hr = '0' + hr
        }
        if (min < 10) {
            min = '0' + min
        }
        if (sec < 10) {
            sec = '0' + sec
        }

        $('.hr').text(hr);
        $('.min').text(min);
        $('.sec').text(sec);
    }

    setInterval(clock, 500);
    clock();


    //카테고리    














});


