$(document).ready(function() {
    $('#logo').attr('src', "images/logoW.png");})
    $(".slid").css("display", "none");
    $(".slid2").css("display", "none");
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





    // $("#flip").mouseenter(function(){
    //     $(".slid").slideDown(400);
    // })

    // $("#flip").mouseleave(function(){
    //     $(".slid").slideUp(400);
    // })


    // $("#flip2").mouseenter(function(){
    //     $(".slid2").slideDown(400);
    // })

    // $(".slid2").mouseleave(function(){
    //     $(".slid2").slideUp(400);
    // })


$(".bars").click(function(){
    $(".menu-mobile").animate({left:"0"},500);
    $("#overlay").addClass("overlay");
    $("#close").addClass("close");

});


$("#overlay").click(function(){
    $(".menu-mobile").animate({left:"-100%"});
    $("#close").removeClass("close");
    $(".overlay").css("cursor", "pointer")
    $("#overlay").removeClass("overlay");
});

$("#close").click(function(){
    $(".menu-mobile").animate({left:"-100%"});
    $("#close").removeClass("close");
    $(".overlay").css("cursor", "pointer")
    $("#overlay").removeClass("overlay");
});

