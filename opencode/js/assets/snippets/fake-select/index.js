

// function FakeSelect() {
//     $('select').each(function(){
//         if($(this).closest('.fake-select').length === 0) {
//             var text = $(this).find('option:selected').text();
//             var fake = $('<div class="fake-select">');
//             var label = $('<span class="fake-select__label">').text(text);
//             var cssClass = $(this).attr('class').split(' ');

//             cssClass.forEach((item) => {
//                 if(item !== '') {
//                     fake.addClass(item);
//                 }
//             })

//             fake.prepend(label);
//             $(this).after(fake);
//             fake.append(this);

//             $(this).change(() => { label.text($(this).find('option:selected').text()) });
//         }
//     });
// }

// FakeSelect();

// document.addEventListener('FAKESELECT', () => { FakeSelect() }, false);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvc25pcHBldHMvZmFrZS1zZWxlY3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIGZ1bmN0aW9uIEZha2VTZWxlY3QoKSB7XG4vLyAgICAgJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpe1xuLy8gICAgICAgICBpZigkKHRoaXMpLmNsb3Nlc3QoJy5mYWtlLXNlbGVjdCcpLmxlbmd0aCA9PT0gMCkge1xuLy8gICAgICAgICAgICAgdmFyIHRleHQgPSAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnRleHQoKTtcbi8vICAgICAgICAgICAgIHZhciBmYWtlID0gJCgnPGRpdiBjbGFzcz1cImZha2Utc2VsZWN0XCI+Jyk7XG4vLyAgICAgICAgICAgICB2YXIgbGFiZWwgPSAkKCc8c3BhbiBjbGFzcz1cImZha2Utc2VsZWN0X19sYWJlbFwiPicpLnRleHQodGV4dCk7XG4vLyAgICAgICAgICAgICB2YXIgY3NzQ2xhc3MgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKTtcblxuLy8gICAgICAgICAgICAgY3NzQ2xhc3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGlmKGl0ZW0gIT09ICcnKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGZha2UuYWRkQ2xhc3MoaXRlbSk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSlcblxuLy8gICAgICAgICAgICAgZmFrZS5wcmVwZW5kKGxhYmVsKTtcbi8vICAgICAgICAgICAgICQodGhpcykuYWZ0ZXIoZmFrZSk7XG4vLyAgICAgICAgICAgICBmYWtlLmFwcGVuZCh0aGlzKTtcblxuLy8gICAgICAgICAgICAgJCh0aGlzKS5jaGFuZ2UoKCkgPT4geyBsYWJlbC50ZXh0KCQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpKSB9KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gfVxuXG4vLyBGYWtlU2VsZWN0KCk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0ZBS0VTRUxFQ1QnLCAoKSA9PiB7IEZha2VTZWxlY3QoKSB9LCBmYWxzZSk7Il0sImZpbGUiOiJhc3NldHMvc25pcHBldHMvZmFrZS1zZWxlY3QvaW5kZXguanMifQ==