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
