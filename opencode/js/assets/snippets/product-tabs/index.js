
// import axios from 'axios';

// document.addEventListener("DOMContentLoaded", function(){

//     var tabs = document.querySelector('.product-tabs');
//     if(tabs){
//         var urls = Array.from(tabs.querySelectorAll('[data-url]'));

//         urls.forEach((element) => {
//             var url = element.getAttribute('data-url');
//             axios.get(url)
//                 .then((data) => data.data)
//                 .then((data) => element.innerHTML = data);
//         });

//         var customTabs = Array.from(document.querySelectorAll('.product-tabs--custom .product-tabs__link'));

//         customTabs.forEach((customTab) => {
//             customTab.addEventListener('click', (evt) => {
//                 var href = evt.currentTarget.getAttribute('href');
//                 var hash = href.match(/^[^#]*#(.*)/)[1];

//                 if(hash) {
//                     var contents = Array.from(document.querySelectorAll('.prodBox'));
//                     var current = document.querySelector(`#${ hash }`);

//                     contents.forEach((content) => content.setAttribute('style', 'display:none'));
//                     if(current) current.setAttribute('style', 'display: block');

//                     customTabs.forEach((customTab) => customTab.classList.remove('on'));
//                     evt.currentTarget.classList.add('on');

//                 }

//                 evt.preventDefault();
//             });
//         });

//         if(customTabs.length) {
//             customTabs[0].classList.add('on');
//         }
//     }
// });

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvc25pcHBldHMvcHJvZHVjdC10YWJzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcblxuLy8gICAgIHZhciB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtdGFicycpO1xuLy8gICAgIGlmKHRhYnMpe1xuLy8gICAgICAgICB2YXIgdXJscyA9IEFycmF5LmZyb20odGFicy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS11cmxdJykpO1xuXG4vLyAgICAgICAgIHVybHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuLy8gICAgICAgICAgICAgdmFyIHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpO1xuLy8gICAgICAgICAgICAgYXhpb3MuZ2V0KHVybClcbi8vICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5kYXRhKVxuLy8gICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBlbGVtZW50LmlubmVySFRNTCA9IGRhdGEpO1xuLy8gICAgICAgICB9KTtcblxuLy8gICAgICAgICB2YXIgY3VzdG9tVGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtdGFicy0tY3VzdG9tIC5wcm9kdWN0LXRhYnNfX2xpbmsnKSk7XG5cbi8vICAgICAgICAgY3VzdG9tVGFicy5mb3JFYWNoKChjdXN0b21UYWIpID0+IHtcbi8vICAgICAgICAgICAgIGN1c3RvbVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbi8vICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IGV2dC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBoYXNoID0gaHJlZi5tYXRjaCgvXlteI10qIyguKikvKVsxXTtcblxuLy8gICAgICAgICAgICAgICAgIGlmKGhhc2gpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZEJveCcpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHsgaGFzaCB9YCk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgY29udGVudHMuZm9yRWFjaCgoY29udGVudCkgPT4gY29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZScpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudCkgY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVGFicy5mb3JFYWNoKChjdXN0b21UYWIpID0+IGN1c3RvbVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdvbicpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZXZ0LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnb24nKTtcblxuLy8gICAgICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgIGlmKGN1c3RvbVRhYnMubGVuZ3RoKSB7XG4vLyAgICAgICAgICAgICBjdXN0b21UYWJzWzBdLmNsYXNzTGlzdC5hZGQoJ29uJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9KTtcblxuIl0sImZpbGUiOiJhc3NldHMvc25pcHBldHMvcHJvZHVjdC10YWJzL2luZGV4LmpzIn0=
