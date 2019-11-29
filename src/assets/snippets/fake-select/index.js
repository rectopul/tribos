

function FakeSelect() {
    $('select').each(function(){
        if($(this).closest('.fake-select').length === 0) {
            const text = $(this).find('option:selected').text();
            const fake = $('<div class="fake-select">');
            const label = $('<span class="fake-select__label">').text(text);
            const cssClass = $(this).attr('class').split(' ');

            cssClass.forEach((item) => {
                if(item !== '') {
                    fake.addClass(item);
                }
            })

            fake.prepend(label);
            $(this).after(fake);
            fake.append(this);

            $(this).change(() => { label.text($(this).find('option:selected').text()) });
        }
    });
}

FakeSelect();

document.addEventListener('FAKESELECT', () => { FakeSelect() }, false);