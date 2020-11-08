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

    function variationsCarousel(selector) {
        const list = [...document.querySelectorAll(selector)];

        if (!list) return;

        (($) => {
            list.map((item) => {
                $(item).slick({
                    infinite: false,
                    speed: 150,
                    draggable: false,
                    fade: true,
                    cssEase: "linear",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    nextArrow: false,
                    prevArrow: false,
                });
            });
        })(jQuery);
    }

    function removeProduct(selector) {
        const inputs = [...document.querySelectorAll(selector)];

        if (!inputs) return;

        inputs.map((input) => {
            input.addEventListener("change", function (e) {
                e.preventDefault();

                const span = input.closest("header").querySelector("span");
                const container = input.closest(
                    ".toolCategory__column--summary"
                );

                if (input.checked) {
                    span.innerHTML = `Removido`;
                    container.classList.add("removed");
                } else {
                    span.innerHTML = `Remover`;
                    container.classList.remove("removed");
                }
            });
        });
    }

    function handleChangePrice(element) {
        const price = element.dataset.price;

        const name = element.dataset.name;

        const image = element.querySelector("figure img").cloneNode();

        const summary = element
            .closest(".toolCategory")
            .querySelector(".toolCategory__column--summary");

        if (!summary) return;

        image.setAttribute("width", "70px");
        image.style.maxWidth = "70px";

        summary.querySelector("figure").innerHTML = "";
        summary.querySelector("figure").append(image);
        summary.querySelector("h3").innerHTML = name;
        summary.querySelector("h2").innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(price);
    }

    function handleSlickProductChange(event, slick, currentSlide, nextSlide) {
        //get active slick product id $slides[2].attributes
        const activeSlick = slick.$slides[currentSlide].dataset.id;

        if (!activeSlick) return;

        const variationsContainer = slick.$slides[currentSlide]
            .closest(".toolCategory")
            .querySelector(".toolCategory__column.variations");

        handleChangePrice(slick.$slides[currentSlide]);

        const variationsFromProduct = document.querySelector(
            `.tool__variants--wrapper[data-product="${activeSlick}"]`
        );

        if (!variationsFromProduct) {
            if (variationsContainer)
                variationsContainer.classList.add("disabled");

            return;
        } else {
            if (variationsContainer)
                variationsContainer.classList.remove("disabled");
        }

        const indexVariation = variationsFromProduct.dataset.slickIndex;

        const slickVariation = variationsFromProduct.closest(
            ".toolCategory__column--variations"
        );

        $(slickVariation).slick.slickGoTo(indexVariation);
    }

    function productCarousel(selector) {
        const list = [...document.querySelectorAll(selector)];

        if (!list) return;

        (($) => {
            list.map((item) => {
                $(item).slick({
                    infinite: false,
                    speed: 150,
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

                // On before slide change
                $(item).on("afterChange", handleSlickProductChange);
            });
        })(jQuery);
    }

    return {
        //public var/functions
        init,
        productCarousel,
        variationsCarousel,
        removeProduct,
    };
})();

tool.init();

tool.removeProduct(`.toolCategory__column--summary header input`);

tool.productCarousel(".toolCategory__column.products .showcase");

//toolCategory__column--variations
tool.variationsCarousel(".toolCategory__column--variations");

//
