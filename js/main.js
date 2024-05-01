$(document).ready(function() {
    $(document).scroll(function () {
        let scroll = $(this).scrollTop();
        let topDist = $(".container").position();
        if (scroll > topDist.top) {
            $('header').addClass('sticky');
            $('.main').css({'height' : "calc(100vh + 188px)"});
            $('#logo').attr('src', "../images/Layerblack.png");

        } else {
            $('header').removeClass('sticky');
            $('.main').css({'height' : "calc(100vh)"});
            $('#logo').attr('src', "../images/Layer 0.png");
        }
    });
});


