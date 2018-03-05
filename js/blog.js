/*导航栏变形开始*/
function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop
            , shrinkOn = 300
            , header = document.querySelector("#page-header");
        if (distanceY > shrinkOn) {
            classie.add(header, "smaller");
        }
        else {
            if (classie.has(header, "smaller")) {
                classie.remove(header, "smaller");
            }
        }
    });
}
window.onload = init();
/*导航栏变形结束*/
/*回到顶部开始*/
jQuery(function () {
    jQuery(document).on('scroll', function () {
        if (jQuery(window).scrollTop() > 100) {
            jQuery('.scroll-top-wrapper').addClass('show');
        }
        else {
            jQuery('.scroll-top-wrapper').removeClass('show');
        }
    });
    jQuery('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
    verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = jQuery('body');
    offset = element.offset();
    offsetTop = offset.top;
    jQuery('html, body').animate({
        scrollTop: offsetTop
    }, 500, 'linear');
}
/*回到顶部结束*/