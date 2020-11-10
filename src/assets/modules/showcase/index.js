
 if($('.showcase__list[data-carousel=true]')) {
    $('.showcase__list[data-carousel=true]').each(function(){
        $(this).find('.showcase__item--empty').remove();
        $(this).not('.slick-initialized').slick({
            mobileFirst: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: `<button aria-label="prev" type="button" class="slick-prev"><svg id="icon-seta-carrosel" viewBox="0 0 39 32"><path d="M9.914 0s-0.302 4.378 0.152 4.83c0.281 0.327 0.635 0.584 1.037 0.748l0.018 0.007v-0.452c4.679 1.66 9.057 3.773 13.578 5.584 1.102 0.514 2.454 1.027 3.845 1.449l0.23 0.060c-14.633-1.508-28.773-1.508-28.773-1.508 8.027 4.638 17.523 7.678 27.654 8.439l0.221 0.013c-3.471 2.264-6.943 4.528-10.566 6.642-1.055 0.604 0.604 5.887 0.15 6.188 5.234-2.916 9.573-5.664 13.754-8.621l-0.471 0.316c2.109-1.509 7.547-4.226 7.999-6.793 0.152-1.055 0.755-5.584-0.15-6.34-3.623-2.869-9.811-4.226-14.189-5.736-4.123-1.923-8.96-3.582-13.991-4.731l-0.498-0.096zM34.668 14.641c-0.604 0.452-1.359 0.906-1.963 1.358 0.005-0.126 0.008-0.273 0.008-0.421 0-0.651-0.058-1.288-0.17-1.907l0.010 0.065c0.755 0.302 1.511 0.604 2.115 0.906z"></path></svg></button>`,
            nextArrow: `<button aria-label="prev" type="button" class="slick-next"><svg id="icon-seta-carrosel" viewBox="0 0 39 32"><path d="M9.914 0s-0.302 4.378 0.152 4.83c0.281 0.327 0.635 0.584 1.037 0.748l0.018 0.007v-0.452c4.679 1.66 9.057 3.773 13.578 5.584 1.102 0.514 2.454 1.027 3.845 1.449l0.23 0.060c-14.633-1.508-28.773-1.508-28.773-1.508 8.027 4.638 17.523 7.678 27.654 8.439l0.221 0.013c-3.471 2.264-6.943 4.528-10.566 6.642-1.055 0.604 0.604 5.887 0.15 6.188 5.234-2.916 9.573-5.664 13.754-8.621l-0.471 0.316c2.109-1.509 7.547-4.226 7.999-6.793 0.152-1.055 0.755-5.584-0.15-6.34-3.623-2.869-9.811-4.226-14.189-5.736-4.123-1.923-8.96-3.582-13.991-4.731l-0.498-0.096zM34.668 14.641c-0.604 0.452-1.359 0.906-1.963 1.358 0.005-0.126 0.008-0.273 0.008-0.421 0-0.651-0.058-1.288-0.17-1.907l0.010 0.065c0.755 0.302 1.511 0.604 2.115 0.906z"></path></svg></button>`,
            responsive: [
                {
                    breakpoint: 424,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
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
