$(document).ready(function () {

    // Slide
    $('.header').click(function () {
        $('.header_content').slideToggle(800)
    });

    // Hide - Header
    $('#hide').click(function () {
        $('.content-fade').hide(1000);
    });

    // Show
    $('#show').click(function () {
        $('.content-fade').show(500)
    });

    // Show Hide
    $('#show-hide').click(function () {
        $('.content-fade').toggle(600)
    });


    // FadeOut
    $('#fadeout').click(function () {
        $('.content-fade').fadeOut(700)
    });

    // FadeIn
    $('#fadein').click(function () {
        $('.content-fade').fadeIn(700)
    });

    //FadeTo
    $('#fadeto').click(function () {
        $('.content-fade').fadeTo(700, .7)
    });

    //fadeInfadeOut
    $('#fadeinfadeout').click(function () {
        $('.content-fade').fadeToggle(700)
    });



});