







 

 if($('.showcase__list[data-carousel=true]')) {
    $('.showcase__list[data-carousel=true]').each(function(){
        $(this).find('.showcase__item--empty').remove();
        $(this).not('.slick-initialized').slick({
            mobileFirst: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: `<button aria-label="prev" type="button" class="slick-prev"><</button>`,
            nextArrow: `<button aria-label="prev" type="button" class="slick-next">></button>`,
            responsive: [
                {
                    breakpoint: 424,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4   
                    }
                }
            ]   
        });
    });
    
 }



 



if($('.banner--javascript .banner__list')) {
$('.banner--javascript .banner__list').not('.slick-initialized').slick({
    mobileFirst: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button aria-label="prev" type="button" class="slick-prev"><</button>`,
    nextArrow: `<button aria-label="next" type="button" class="slick-next">></button>`,
    responsive: [
        {
            breakpoint: 424,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]   
});
}


if($('.banner--grid .banner__list')) {
$('.banner--grid .banner__list').not('.slick-initialized').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button type="button" aria-label="prev" class="slick-prev"><</button>`,
    nextArrow: `<button type="button" aria-label="next" class="slick-next">></button>`,
    responsive: [
        {
            breakpoint: 424,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4   
            }
        }
    ]   
});
}






var button = $('#bt-submit-comments');

if(button) {
    var buttonAction = $(`<button class="comments__button" type="button">Avaliar</button>`);
    button.after(buttonAction);

    buttonAction.click(() => {
        button.trigger('click');
    });
}


 


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





function debounce(func){
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func,200,event);
    };
}

function navigationHiddenResize() {
    var widthNavigation = $('.menu--navigation .menu__ul--nv1').outerWidth();
    var widthCurrent = 0;
    $('.menu--navigation .menu__item--nv1').removeClass('menu__item--hidden');
    $('.menu--navigation .menu__item--nv1').each(function(){
        widthCurrent += $(this).outerWidth();
        if(widthCurrent > widthNavigation) {
            $(this).addClass('menu__item--hidden');
        }
    });
}

function navigationAlign() {
    $('.menu--navigation').each(function(){
        $(this).find('.menu--nv2').removeClass('menu--rtl');
        $(this).find('.menu--nv2').each(function(){
            var nav = $(this).closest('.menu--nv1').outerWidth();
            var left = $(this).offset().left + $(this).outerWidth();

            if(left > nav) {
                
                $(this).addClass('menu--rtl');
            }
        });
    })
}

var childs = Array.from(document.querySelectorAll('.menu__item--has-child'));

childs.forEach((child) => {
    child.addEventListener('click', (evt) => {
        var target = evt.target;
        if(target.classList.contains('menu__item--has-child')) {
            var expanded = target.getAttribute('aria-expanded');
            if(expanded !== 'true' && expanded !== 'false') expanded = 'false';
            target.setAttribute('aria-expanded', expanded === 'true' ? false : true);
            $(target).find('> .menu--sub').slideToggle();
        }
    }, false);
});

// window.addEventListener('resize', debounce(function(e){
//     navigationHiddenResize();
//     navigationAlign();
// }));

// navigationHiddenResize();
// navigationAlign();


$('.button--menu').on('click',function(){
    $('body').addClass('menu__open')
});

$('.button__close--navigation').on('click',function(){
    $('body').removeClass('menu__open')
});





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



$('.rulers__list').not('.slick-initialized').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: `<button type="button" aria-label="prev" class="slick-prev"><</button>`,
    nextArrow: `<button type="button" aria-label="next" class="slick-next">></button>`,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }
    ]   
});






var $ = $tray;
if( typeof $ == 'function') {
    $(document).ready(function(){
        $(window).ajaxComplete(function( event, xhr, settings ){
            if(settings) {
                if(settings.url.indexOf('variant_gallery') !==  -1) {
                    loadThumb();
                }
            }
        });
        loadThumb();
    });

    function  loadThumb() {
        var  thumbs  =  $('.produto-imagem-miniaturas');

        if(thumbs.length) {
            thumbs.hide();

            var   images  =  thumbs.find('img, .icon-video');
            let     html;
            
            if($('.thumbs').length) $('.thumbs').remove();

            if(images.length) {
                html  =  `<div class="thumbs">`;
                html  +=  `<ul class="thumbs__list">`;
                
                images.each((index, item) => {
                    html  +=  createThumb($(item).attr('src'), index);
                });
            
                html  +=  `</ul>`;
                html  +=  `</div>`;
                thumbs.after(html);

                $(document).trigger("thumbs:start");
                
                $('.thumbs a').click((evt) => {
                    let index = $(evt.currentTarget).attr('data-index');

                    selectThumb(index);
                    
                    if ($(evt.currentTarget).find('.thumb__video').length) { 
                        $('#colVideo').show();
                    } else {
                        $($('a', thumbs).eq(index)).mouseover().click();
                        $('#colVideo').hide();
                    }
                    evt.preventDefault();
                });			
                
                selectThumb('0');
            }
        }
    }
    
    function selectThumb(index) {
        $(`.thumbs li`).removeClass('thumbs__item--actived');
        $(`.thumbs [data-index=${index}]`).closest('li').addClass('thumbs__item--actived');
    }

    function  createThumb(src,index) {
        if (src) {
            return  `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><img class="thumbs__image" src="${src}" /></a></li>`;
        }else{
            return `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><span class="thumb__video"></span></a></li>`;
        }
    }
}

 
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tb2R1bGVzL2J1eS10b2dldGhlci9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL2NvcHlyaWdodC9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL2ZpbHRlci9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL2Zvb3Rlci9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL2hlYWRlci9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL21haW4vaW5kZXguanMiLCJhc3NldHMvbW9kdWxlcy9uYXZpZ2F0aW9uL2luZGV4LmpzIiwiYXNzZXRzL21vZHVsZXMvcGFydG5lcnMvaW5kZXguanMiLCJhc3NldHMvbW9kdWxlcy9wcm9kdWN0cy12aXNpdGVkL2luZGV4LmpzIiwiYXNzZXRzL21vZHVsZXMvc2hvd2Nhc2UvaW5kZXguanMiLCJhc3NldHMvcGFnZXMvcGFnZS1jYXRhbG9nL2luZGV4LmpzIiwiYXNzZXRzL3BhZ2VzL3BhZ2UtZGVwb2ltZW50b3MvaW5kZXguanMiLCJhc3NldHMvcGFnZXMvcGFnZS1ob21lL2luZGV4LmpzIiwiYXNzZXRzL3BhZ2VzL3BhZ2Utbm90aWNpYXMvaW5kZXguanMiLCJhc3NldHMvcGFnZXMvcGFnZS1wcm9kdWN0L2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2Jhbm5lci9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9icmVhZGNydW1iL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2J1dHRvbi9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9jYXJ0L2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2NvbW1lbnRzL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2N1c3RvbWVyL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2Zha2Utc2VsZWN0L2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2ljb24vaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvbG9nby9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9tZW51L2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL21vZGFsL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL25ld3NsZXR0ZXIvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvcGFnaW5hdGUvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvcHJvZHVjdC9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9wcm9kdWN0LXRhYnMvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvcmF0aW5nLXNob3J0L2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL3J1bGVycy9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9zZWFyY2gvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvc2hhcmUvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvc2xpY2svaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvc29jaWFscy9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy90aHVtYnMvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvdGl0bGUvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvdG9vbGJhci9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9hdHRlbmRhbmNlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JEQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkVBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZFQTtBQ0FBO0FDQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiICIsIlxuIGlmKCQoJy5zaG93Y2FzZV9fbGlzdFtkYXRhLWNhcm91c2VsPXRydWVdJykpIHtcbiAgICAkKCcuc2hvd2Nhc2VfX2xpc3RbZGF0YS1jYXJvdXNlbD10cnVlXScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuc2hvd2Nhc2VfX2l0ZW0tLWVtcHR5JykucmVtb3ZlKCk7XG4gICAgICAgICQodGhpcykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XG4gICAgICAgICAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogYDxidXR0b24gYXJpYS1sYWJlbD1cInByZXZcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PDwvYnV0dG9uPmAsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IGA8YnV0dG9uIGFyaWEtbGFiZWw9XCJwcmV2XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPj48L2J1dHRvbj5gLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDI0LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdICAgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuIH1cbiIsIiIsIiIsIiAiLCIiLCIiLCJcbmlmKCQoJy5iYW5uZXItLWphdmFzY3JpcHQgLmJhbm5lcl9fbGlzdCcpKSB7XG4kKCcuYmFubmVyLS1qYXZhc2NyaXB0IC5iYW5uZXJfX2xpc3QnKS5ub3QoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKHtcbiAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBwcmV2QXJyb3c6IGA8YnV0dG9uIGFyaWEtbGFiZWw9XCJwcmV2XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjw8L2J1dHRvbj5gLFxuICAgIG5leHRBcnJvdzogYDxidXR0b24gYXJpYS1sYWJlbD1cIm5leHRcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PjwvYnV0dG9uPmAsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA0MjQsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSAgIFxufSk7XG59XG5cblxuaWYoJCgnLmJhbm5lci0tZ3JpZCAuYmFubmVyX19saXN0JykpIHtcbiQoJy5iYW5uZXItLWdyaWQgLmJhbm5lcl9fbGlzdCcpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xuICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBwcmV2QXJyb3c6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicHJldlwiIGNsYXNzPVwic2xpY2stcHJldlwiPjw8L2J1dHRvbj5gLFxuICAgIG5leHRBcnJvdzogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJuZXh0XCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PjwvYnV0dG9uPmAsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA0MjQsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSAgIFxufSk7XG59IiwiIiwiIiwiIiwiXG5cblxudmFyIGJ1dHRvbiA9ICQoJyNidC1zdWJtaXQtY29tbWVudHMnKTtcblxuaWYoYnV0dG9uKSB7XG4gICAgdmFyIGJ1dHRvbkFjdGlvbiA9ICQoYDxidXR0b24gY2xhc3M9XCJjb21tZW50c19fYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPkF2YWxpYXI8L2J1dHRvbj5gKTtcbiAgICBidXR0b24uYWZ0ZXIoYnV0dG9uQWN0aW9uKTtcblxuICAgIGJ1dHRvbkFjdGlvbi5jbGljaygoKSA9PiB7XG4gICAgICAgIGJ1dHRvbi50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0pO1xufVxuIiwiXG4gIiwiXG5cbi8vIGZ1bmN0aW9uIEZha2VTZWxlY3QoKSB7XG4vLyAgICAgJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpe1xuLy8gICAgICAgICBpZigkKHRoaXMpLmNsb3Nlc3QoJy5mYWtlLXNlbGVjdCcpLmxlbmd0aCA9PT0gMCkge1xuLy8gICAgICAgICAgICAgdmFyIHRleHQgPSAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnRleHQoKTtcbi8vICAgICAgICAgICAgIHZhciBmYWtlID0gJCgnPGRpdiBjbGFzcz1cImZha2Utc2VsZWN0XCI+Jyk7XG4vLyAgICAgICAgICAgICB2YXIgbGFiZWwgPSAkKCc8c3BhbiBjbGFzcz1cImZha2Utc2VsZWN0X19sYWJlbFwiPicpLnRleHQodGV4dCk7XG4vLyAgICAgICAgICAgICB2YXIgY3NzQ2xhc3MgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKTtcblxuLy8gICAgICAgICAgICAgY3NzQ2xhc3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGlmKGl0ZW0gIT09ICcnKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGZha2UuYWRkQ2xhc3MoaXRlbSk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSlcblxuLy8gICAgICAgICAgICAgZmFrZS5wcmVwZW5kKGxhYmVsKTtcbi8vICAgICAgICAgICAgICQodGhpcykuYWZ0ZXIoZmFrZSk7XG4vLyAgICAgICAgICAgICBmYWtlLmFwcGVuZCh0aGlzKTtcblxuLy8gICAgICAgICAgICAgJCh0aGlzKS5jaGFuZ2UoKCkgPT4geyBsYWJlbC50ZXh0KCQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpKSB9KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gfVxuXG4vLyBGYWtlU2VsZWN0KCk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0ZBS0VTRUxFQ1QnLCAoKSA9PiB7IEZha2VTZWxlY3QoKSB9LCBmYWxzZSk7IiwiIiwiIiwiXG5cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYyl7XG4gICAgdmFyIHRpbWVyO1xuICAgIHJldHVybiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGlmKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuYywyMDAsZXZlbnQpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb25IaWRkZW5SZXNpemUoKSB7XG4gICAgdmFyIHdpZHRoTmF2aWdhdGlvbiA9ICQoJy5tZW51LS1uYXZpZ2F0aW9uIC5tZW51X191bC0tbnYxJykub3V0ZXJXaWR0aCgpO1xuICAgIHZhciB3aWR0aEN1cnJlbnQgPSAwO1xuICAgICQoJy5tZW51LS1uYXZpZ2F0aW9uIC5tZW51X19pdGVtLS1udjEnKS5yZW1vdmVDbGFzcygnbWVudV9faXRlbS0taGlkZGVuJyk7XG4gICAgJCgnLm1lbnUtLW5hdmlnYXRpb24gLm1lbnVfX2l0ZW0tLW52MScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgd2lkdGhDdXJyZW50ICs9ICQodGhpcykub3V0ZXJXaWR0aCgpO1xuICAgICAgICBpZih3aWR0aEN1cnJlbnQgPiB3aWR0aE5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21lbnVfX2l0ZW0tLWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb25BbGlnbigpIHtcbiAgICAkKCcubWVudS0tbmF2aWdhdGlvbicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcubWVudS0tbnYyJykucmVtb3ZlQ2xhc3MoJ21lbnUtLXJ0bCcpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5tZW51LS1udjInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgbmF2ID0gJCh0aGlzKS5jbG9zZXN0KCcubWVudS0tbnYxJykub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIGxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQgKyAkKHRoaXMpLm91dGVyV2lkdGgoKTtcblxuICAgICAgICAgICAgaWYobGVmdCA+IG5hdikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21lbnUtLXJ0bCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxufVxuXG52YXIgY2hpbGRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbS0taGFzLWNoaWxkJykpO1xuXG5jaGlsZHMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVfX2l0ZW0tLWhhcy1jaGlsZCcpKSB7XG4gICAgICAgICAgICB2YXIgZXhwYW5kZWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICAgICAgICBpZihleHBhbmRlZCAhPT0gJ3RydWUnICYmIGV4cGFuZGVkICE9PSAnZmFsc2UnKSBleHBhbmRlZCA9ICdmYWxzZSc7XG4gICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZXhwYW5kZWQgPT09ICd0cnVlJyA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgICAgICAkKHRhcmdldCkuZmluZCgnPiAubWVudS0tc3ViJykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbn0pO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UoZnVuY3Rpb24oZSl7XG4vLyAgICAgbmF2aWdhdGlvbkhpZGRlblJlc2l6ZSgpO1xuLy8gICAgIG5hdmlnYXRpb25BbGlnbigpO1xuLy8gfSkpO1xuXG4vLyBuYXZpZ2F0aW9uSGlkZGVuUmVzaXplKCk7XG4vLyBuYXZpZ2F0aW9uQWxpZ24oKTtcblxuXG4kKCcuYnV0dG9uLS1tZW51Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbWVudV9fb3BlbicpXG59KTtcblxuJCgnLmJ1dHRvbl9fY2xvc2UtLW5hdmlnYXRpb24nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtZW51X19vcGVuJylcbn0pOyIsIiIsIiIsIiIsIiIsIlxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcblxuLy8gICAgIHZhciB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtdGFicycpO1xuLy8gICAgIGlmKHRhYnMpe1xuLy8gICAgICAgICB2YXIgdXJscyA9IEFycmF5LmZyb20odGFicy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS11cmxdJykpO1xuXG4vLyAgICAgICAgIHVybHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuLy8gICAgICAgICAgICAgdmFyIHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpO1xuLy8gICAgICAgICAgICAgYXhpb3MuZ2V0KHVybClcbi8vICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5kYXRhKVxuLy8gICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBlbGVtZW50LmlubmVySFRNTCA9IGRhdGEpO1xuLy8gICAgICAgICB9KTtcblxuLy8gICAgICAgICB2YXIgY3VzdG9tVGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtdGFicy0tY3VzdG9tIC5wcm9kdWN0LXRhYnNfX2xpbmsnKSk7XG5cbi8vICAgICAgICAgY3VzdG9tVGFicy5mb3JFYWNoKChjdXN0b21UYWIpID0+IHtcbi8vICAgICAgICAgICAgIGN1c3RvbVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbi8vICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IGV2dC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBoYXNoID0gaHJlZi5tYXRjaCgvXlteI10qIyguKikvKVsxXTtcblxuLy8gICAgICAgICAgICAgICAgIGlmKGhhc2gpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZEJveCcpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHsgaGFzaCB9YCk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgY29udGVudHMuZm9yRWFjaCgoY29udGVudCkgPT4gY29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZScpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudCkgY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVGFicy5mb3JFYWNoKChjdXN0b21UYWIpID0+IGN1c3RvbVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdvbicpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZXZ0LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnb24nKTtcblxuLy8gICAgICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgIGlmKGN1c3RvbVRhYnMubGVuZ3RoKSB7XG4vLyAgICAgICAgICAgICBjdXN0b21UYWJzWzBdLmNsYXNzTGlzdC5hZGQoJ29uJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9KTtcblxuIiwiIiwiJCgnLnJ1bGVyc19fbGlzdCcpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xuICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgcHJldkFycm93OiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInByZXZcIiBjbGFzcz1cInNsaWNrLXByZXZcIj48PC9idXR0b24+YCxcbiAgICBuZXh0QXJyb3c6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwibmV4dFwiIGNsYXNzPVwic2xpY2stbmV4dFwiPj48L2J1dHRvbj5gLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyMyxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdICAgXG59KTsiLCIiLCIiLCIiLCIiLCJcblxudmFyICQgPSAkdHJheTtcbmlmKCB0eXBlb2YgJCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgJCh3aW5kb3cpLmFqYXhDb21wbGV0ZShmdW5jdGlvbiggZXZlbnQsIHhociwgc2V0dGluZ3MgKXtcbiAgICAgICAgICAgIGlmKHNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgaWYoc2V0dGluZ3MudXJsLmluZGV4T2YoJ3ZhcmlhbnRfZ2FsbGVyeScpICE9PSAgLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZFRodW1iKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbG9hZFRodW1iKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiAgbG9hZFRodW1iKCkge1xuICAgICAgICB2YXIgIHRodW1icyAgPSAgJCgnLnByb2R1dG8taW1hZ2VtLW1pbmlhdHVyYXMnKTtcblxuICAgICAgICBpZih0aHVtYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHVtYnMuaGlkZSgpO1xuXG4gICAgICAgICAgICB2YXIgICBpbWFnZXMgID0gIHRodW1icy5maW5kKCdpbWcsIC5pY29uLXZpZGVvJyk7XG4gICAgICAgICAgICBsZXQgICAgIGh0bWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCQoJy50aHVtYnMnKS5sZW5ndGgpICQoJy50aHVtYnMnKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgaWYoaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGh0bWwgID0gIGA8ZGl2IGNsYXNzPVwidGh1bWJzXCI+YDtcbiAgICAgICAgICAgICAgICBodG1sICArPSAgYDx1bCBjbGFzcz1cInRodW1ic19fbGlzdFwiPmA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW1hZ2VzLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGh0bWwgICs9ICBjcmVhdGVUaHVtYigkKGl0ZW0pLmF0dHIoJ3NyYycpLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBodG1sICArPSAgYDwvdWw+YDtcbiAgICAgICAgICAgICAgICBodG1sICArPSAgYDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgdGh1bWJzLmFmdGVyKGh0bWwpO1xuXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcihcInRodW1iczpzdGFydFwiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkKCcudGh1bWJzIGEnKS5jbGljaygoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9ICQoZXZ0LmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2RhdGEtaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RUaHVtYihpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoJChldnQuY3VycmVudFRhcmdldCkuZmluZCgnLnRodW1iX192aWRlbycpLmxlbmd0aCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjb2xWaWRlbycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJCgnYScsIHRodW1icykuZXEoaW5kZXgpKS5tb3VzZW92ZXIoKS5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbFZpZGVvJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1x0XHRcdFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNlbGVjdFRodW1iKCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2VsZWN0VGh1bWIoaW5kZXgpIHtcbiAgICAgICAgJChgLnRodW1icyBsaWApLnJlbW92ZUNsYXNzKCd0aHVtYnNfX2l0ZW0tLWFjdGl2ZWQnKTtcbiAgICAgICAgJChgLnRodW1icyBbZGF0YS1pbmRleD0ke2luZGV4fV1gKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCd0aHVtYnNfX2l0ZW0tLWFjdGl2ZWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAgY3JlYXRlVGh1bWIoc3JjLGluZGV4KSB7XG4gICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiAgYDxsaSBjbGFzcz1cInRodW1ic19faXRlbVwiPjxhIGNsYXNzPVwidGh1bWJzX19saW5rXCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCIgaHJlZj1cIiMke2luZGV4fVwiPjxpbWcgY2xhc3M9XCJ0aHVtYnNfX2ltYWdlXCIgc3JjPVwiJHtzcmN9XCIgLz48L2E+PC9saT5gO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwidGh1bWJzX19pdGVtXCI+PGEgY2xhc3M9XCJ0aHVtYnNfX2xpbmtcIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIiBocmVmPVwiIyR7aW5kZXh9XCI+PHNwYW4gY2xhc3M9XCJ0aHVtYl9fdmlkZW9cIj48L3NwYW4+PC9hPjwvbGk+YDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIiLCIgIiwiIl19
