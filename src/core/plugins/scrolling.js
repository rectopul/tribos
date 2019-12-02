var lastScrollTop = 0;
jQuery(window).scroll(function (event) {
    var st = jQuery(this).scrollTop();

    if (st > 150) {
        jQuery('body').addClass('moving');
        if (st > lastScrollTop) {
            jQuery('body').addClass('moving--down');
        } else {
            jQuery('body').removeClass('moving--down');
        }
        lastScrollTop = st;
    } else {
        jQuery('body').removeClass('moving');
    }
});
