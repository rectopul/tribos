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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb3JlL3BsdWdpbnMvc2Nyb2xsaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBsYXN0U2Nyb2xsVG9wID0gMDtcbmpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgc3QgPSBqUXVlcnkodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3QgPiAxNTApIHtcbiAgICAgICAgalF1ZXJ5KCdib2R5JykuYWRkQ2xhc3MoJ21vdmluZycpO1xuICAgICAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnbW92aW5nLS1kb3duJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqUXVlcnkoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW92aW5nLS1kb3duJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFNjcm9sbFRvcCA9IHN0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGpRdWVyeSgnYm9keScpLnJlbW92ZUNsYXNzKCdtb3ZpbmcnKTtcbiAgICB9XG59KTtcbiJdLCJmaWxlIjoiY29yZS9wbHVnaW5zL3Njcm9sbGluZy5qcyJ9
