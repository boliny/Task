$(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".container").position();
        if (scroll > topDist.top) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
});