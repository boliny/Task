$(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".container").position();
        if (scroll > topDist.top) {
            $('header').addClass('sticky');
            $('.main').css({'height' : "calc(100vh + 188px)"});
        } else {
            $('header').removeClass('sticky');
            $('.main').css({'height' : "calc(100vh)"});
        }
    });
});