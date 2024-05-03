$(document).ready(function() {
    $(document).scroll(function () {
        let scroll = $(this).scrollTop();
        let topDist = $(".container").position();
        if (scroll > topDist.top) {
            $('header').addClass('sticky');
            $('#logo').attr('src', "images/logoB.png");

        } else {
            $('header').removeClass('sticky');
            $('#logo').attr('src', "images/logoW.png");
        }
    });
});


$("#flip").click(function () {
    $("#panel").slideToggle(3000);
})