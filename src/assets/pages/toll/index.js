const tool = (() => {
    //private var/functions
    function getCategories() {
        if (!document.body.dataset.toolCategories) return null;

        const categories = document.body.dataset.toolCategories.split(",");

        return categories;
    }

    function init() {
        if (document.body.classList.contains("tool"))
            console.log(getCategories());
    }

    function productCarousel(selector) {
        const list = [...document.querySelectorAll(selector)];

        if (!list) return;

        (($) => {
            list.map((item) => {
                $(item).slick({
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0px",
                    initialSlide: 1,
                    nextArrow:
                        '<button class="slick-next"><span class="icon-arrow"></span></button>',
                    prevArrow:
                        '<button class="slick-prev"><span class="icon-arrow"></span></button>',
                });
            });
        })(jQuery);
    }

    return {
        //public var/functions
        init,
        productCarousel,
    };
})();

tool.init();

tool.productCarousel(".toolCategory__column.products .showcase");

//
