const tableClose = document.querySelector('.tabela-medidas__close')

//Close tabela de medidas

if (tableClose) {
    tableClose.addEventListener('click', function (e) {
        e.preventDefault()

        const modal = tableClose.closest('.tabela-medidas')

        if (modal) modal.classList.add('hide')
    })
}

//Open tabela

jQuery(document).on('thumbs:start', function () {
    const OpenTable = document.querySelector('.tabela-medidas__title')

    const sizeVariation = document.querySelector('.cor_variacao.passo2')

    if (sizeVariation && OpenTable) {
        if (!sizeVariation.querySelector('.tabela-medidas__title')) {
            const openClone = OpenTable.cloneNode(true)

            openClone.addEventListener('click', function (e) {
                e.preventDefault()

                const modal = document.querySelector('.tabela-medidas')

                if (modal) modal.classList.remove('hide')
            })

            sizeVariation.append(openClone)

            console.log(`Table title: `, sizeVariation)
        }

        //OpenTable.remove()
    }
})
