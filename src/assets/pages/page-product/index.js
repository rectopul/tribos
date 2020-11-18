var arrowPrev = `<button aria-label="prev" type="button" class="slick-prev">
<span class="icon-arrow"></span>
</button>`
var arrowNext = `<button aria-label="prev" type="button" class="slick-next">
<span class="icon-arrow"></span>
</button>`

//quantity

function changeQuantity() {
    const quantityContainer = document.querySelector('#quantidade label.color')

    function handleQuantity(btn) {
        if (!btn) return

        const input = btn.closest('label').querySelector('input')

        const value = parseInt(input.value)
        if (btn.classList.contains('minus')) {
            if (value > 1) return (input.value = value - 1)

            return
        }

        if (btn.classList.contains('plus')) {
            return (input.value = value + 1)
        }
    }

    console.log(`exec`)

    if (quantityContainer) {
        const btnMinus = document.createElement('div')
        const btnPlus = document.createElement('div')

        btnMinus.classList.add('minus')
        btnPlus.classList.add('plus')

        btnMinus.innerHTML = '-'
        btnPlus.innerHTML = '+'

        btnMinus.addEventListener('click', function (e) {
            e.preventDefault()

            handleQuantity(btnMinus)
        })

        btnPlus.addEventListener('click', function (e) {
            e.preventDefault()

            handleQuantity(btnPlus)
        })

        quantityContainer.append(btnMinus)
        quantityContainer.append(btnPlus)
    }
}

;(($) => {
    const productTabs = document.querySelector('.product-tabs.product-tabs--line')

    console.log(productTabs)

    if (productTabs) {
        const customDesc = productTabs.querySelector('.product-description__description')
        if (!customDesc) productTabs.classList.add('small')
    }

    setTimeout(changeQuantity, 2000)

    // thumbs
    jQuery(document).on('thumbs:start', function () {
        const paymentsLink = document.querySelector('.produto-formas-pagamento a')

        if (paymentsLink) {
            paymentsLink.href = '#tab-payments'
        }

        var thumbs = jQuery('.thumbs__list')
        if (thumbs) {
            jQuery('.thumbs__list').slick({
                slidesToShow: 4,
                vertical: true,
                prevArrow: arrowPrev,
                nextArrow: arrowNext,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            dots: false,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            vertical: false,
                            dots: false,
                        },
                    },
                    {
                        breakpoint: 321,
                        settings: {
                            slidesToShow: 2,
                            vertical: false,
                            dots: false,
                        },
                    },
                ],
            })
        }
    })
    // end thumbs
})(jQuery)
