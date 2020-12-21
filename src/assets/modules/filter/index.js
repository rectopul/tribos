const filterTitles = [...document.querySelectorAll('.filter__title')]

if (filterTitles) {
    filterTitles.forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault()

            const container = item.closest('.filter__block')

            container.classList.toggle('show')
        })
    })
}

jQuery('.filter__item').on('click', function () {
    jQuery('.filter__form').submit()
});
