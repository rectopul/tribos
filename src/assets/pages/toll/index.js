const tool = (() => {
    //private var/functions
    const prices = {};

    function getPrice() {
        const pricesArray = Object.keys(prices);

        const pricesValue = pricesArray.map((item) => {
            if (prices[item].disabled == false) return prices[item].value;
            else return 0;
        });

        let total = 0;

        pricesValue.forEach((item) => (total = total + item));

        console.log(`Total`, total);

        const currencyPrice = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(total);

        console.log(`prices: `, pricesValue);

        const totalElement = document.querySelector(
            ".toolCategory__column--summary--total .price__total"
        );

        if (totalElement) totalElement.innerHTML = currencyPrice;

        return currencyPrice;
    }

    function changePrice(element) {
        const productPrice = element.dataset.price;

        const category = element.closest(".toolCategory").dataset.category;

        const variant = element.dataset.variant;

        const product = element.dataset.productId;

        if (prices[category]) {
            prices[category].product = product;
            prices[category].value = parseFloat(productPrice);
        } else {
            prices[category] = {
                product,
                value: parseFloat(productPrice),
                disabled: false,
            };
        }

        if (variant) prices[category]["variant"] = variant;

        return getPrice();
    }

    function togglePrice(element) {
        const category = element.closest(".toolCategory").dataset.category;
        if (element.checked) {
            if (
                prices[category] &&
                prices[category].hasOwnProperty("disabled")
            ) {
                prices[category].disabled = true;
            } else {
                prices[category] = {
                    disabled: true,
                    value: 0,
                };
            }
        } else {
            if (
                prices[category] &&
                prices[category].hasOwnProperty("disabled")
            ) {
                prices[category].disabled = false;
            } else {
                prices[category] = {
                    disabled: false,
                    value: 0,
                };
            }
        }

        return getPrice();
    }

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
                    togglePrice(input);
                } else {
                    span.innerHTML = `Remover`;
                    container.classList.remove("removed");
                    togglePrice(input);
                }
            });
        });
    }

    function handleChangePrice(element) {
        const theprice = element.dataset.price;

        const name = element.dataset.name;

        changePrice(element);

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
        }).format(theprice);
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
