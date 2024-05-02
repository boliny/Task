$(document).ready(function() {
    $(document).scroll(function () {
        let scroll = $(this).scrollTop();
        let topDist = $(".container").position();
        if (scroll > topDist.top) {
            $('header').addClass('sticky');
            $('.main').css({'height' : "calc(100vh + 180px)"});
            $('#logo').attr('src', "images/logoB.png");

        } else {
            $('header').removeClass('sticky');
            $('.main').css({'height' : "calc(100vh)"});
            $('#logo').attr('src', "images/logoW.png");
        }
    });
});


