jQuery(document).ready(function ($) {

    $(window).scroll(function () {
        var s = $(window).scrollTop();
        $('.parallax').css({top: (s / 3.)});
        if (s > $(window).height()) {
            $('#athena-header.frontpage').addClass('sticky animated slideInDown');
        } else {
            $('#athena-header.frontpage').removeClass('sticky animated slideInDown');
        }
    });

    var athenaWow = new WOW({
        boxClass: 'reveal',
        animateClass: 'animated',
        offset: 150

    });

    athenaWow.init();


});