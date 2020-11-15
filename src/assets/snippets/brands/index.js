
 if(jQuery('.brands__ul')) {
    jQuery('.brands__ul').each(function(){

        jQuery(this).not('.slick-initialized').slick({
            mobileFirst: false,
            slidesToShow: 8,
            slidesToScroll: 8,
            prevArrow: `<button aria-label="prev" type="button" class="slick-prev"><svg width="45px" height="45px" viewBox="0 0 45 45" ><circle id="Oval" stroke="#E8E8E8" stroke-width="2" fill="#FFFFFF" cx="22.5" cy="22.5" r="21.5"></circle><g id="seta" transform="translate(24.000000, 22.500000) rotate(-180.000000) translate(-24.000000, -22.500000) translate(19.000000, 15.000000)" fill="#FF7922" fill-rule="nonzero"><polygon id="Path" transform="translate(5.000000, 7.500000) rotate(-270.000000) translate(-5.000000, -7.500000) " points="10.7312305 2.5 5 8.68341699 -0.731230469 2.5 -2.5 4.4082599 5 12.5 12.5 4.4082599"></polygon></g></svg></button>`,
            nextArrow: `<button aria-label="prev" type="button" class="slick-next"><svg width="45px" height="45px" viewBox="0 0 45 45" ><circle id="Oval" stroke="#E8E8E8" stroke-width="2" fill="#FFFFFF" cx="22.5" cy="22.5" r="21.5"></circle><g id="seta" transform="translate(24.000000, 22.500000) rotate(-180.000000) translate(-24.000000, -22.500000) translate(19.000000, 15.000000)" fill="#FF7922" fill-rule="nonzero"><polygon id="Path" transform="translate(5.000000, 7.500000) rotate(-270.000000) translate(-5.000000, -7.500000) " points="10.7312305 2.5 5 8.68341699 -0.731230469 2.5 -2.5 4.4082599 5 12.5 12.5 4.4082599"></polygon></g></svg></button>`,
            responsive: [
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4   
                    }
                }
            ]   
        });
    });
    
 }
