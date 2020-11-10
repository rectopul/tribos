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
    setTimeout(changeQuantity, 2000)
})(jQuery)
