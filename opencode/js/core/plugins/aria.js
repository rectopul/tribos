// export default () => {
//     var controls = Array.from(document.querySelectorAll('[aria-controls]'));
//     var body     = document.querySelector('body');

//     controls.forEach((control) => {
//         control.addEventListener('click', (evt) => { 
//             var currentTarget = evt.currentTarget;
//             var id            = `#${ currentTarget.getAttribute('aria-controls') }`;
//             var el            = document.querySelector(id);
//             let   currentHidden = el.getAttribute('aria-hidden');
//             let  hasFixed       = el.getAttribute('data-fixed') == 'false' ? false : true;

//             if(currentHidden != 'false' && currentHidden != 'true') currentHidden = 'true'
//             if(hasFixed) {
//                 if(currentHidden === 'true')                            body.classList.add('fixed');
//                 else                                                    body.classList.remove('fixed');
//             }

//             el.setAttribute('aria-hidden', currentHidden === 'true' ? false : true);
//         });
        
//     });
// };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb3JlL3BsdWdpbnMvYXJpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4vLyAgICAgdmFyIGNvbnRyb2xzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1jb250cm9sc10nKSk7XG4vLyAgICAgdmFyIGJvZHkgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4vLyAgICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuLy8gICAgICAgICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4geyBcbi8vICAgICAgICAgICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XG4vLyAgICAgICAgICAgICB2YXIgaWQgICAgICAgICAgICA9IGAjJHsgY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKSB9YDtcbi8vICAgICAgICAgICAgIHZhciBlbCAgICAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4vLyAgICAgICAgICAgICBsZXQgICBjdXJyZW50SGlkZGVuID0gZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuLy8gICAgICAgICAgICAgbGV0ICBoYXNGaXhlZCAgICAgICA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1maXhlZCcpID09ICdmYWxzZScgPyBmYWxzZSA6IHRydWU7XG5cbi8vICAgICAgICAgICAgIGlmKGN1cnJlbnRIaWRkZW4gIT0gJ2ZhbHNlJyAmJiBjdXJyZW50SGlkZGVuICE9ICd0cnVlJykgY3VycmVudEhpZGRlbiA9ICd0cnVlJ1xuLy8gICAgICAgICAgICAgaWYoaGFzRml4ZWQpIHtcbi8vICAgICAgICAgICAgICAgICBpZihjdXJyZW50SGlkZGVuID09PSAndHJ1ZScpICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGN1cnJlbnRIaWRkZW4gPT09ICd0cnVlJyA/IGZhbHNlIDogdHJ1ZSk7XG4vLyAgICAgICAgIH0pO1xuICAgICAgICBcbi8vICAgICB9KTtcbi8vIH07Il0sImZpbGUiOiJjb3JlL3BsdWdpbnMvYXJpYS5qcyJ9