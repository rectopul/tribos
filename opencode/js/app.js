 
// import Scrolling from './plugins/scrolling';
// import Aria from './plugins/aria';
// import objectFitImages from 'object-fit-images';
// import CustomEvent from './plugins/custom-events';

    // var body = document.querySelector('body');

    // // Custom Events
    // CustomEvent();

    // // Add Scrolling page body
    // Scrolling();

    // // Object Fit
    // objectFitImages();

    // // Aria 
    // Aria();

    // // Add Class After load
    // body.classList.remove('preload');

    // $tray('[data-tray-login]').click((evt) => { evt.preventDefault(); $tray('tray-login').show(); });


// export var CART_UPDATE = 'TRAY:CART_UPDATE';
var lastScrollTop = 0;
jQuery(window).scroll(function (event) {
    var st = jQuery(this).scrollTop();

    if (st > 150) {
        jQuery('body').addClass('moving');
        if (st > lastScrollTop) {
            jQuery('body').addClass('moving--down');
        } else {
            jQuery('body').removeClass('moving--down');
        }
        lastScrollTop = st;
    } else {
        jQuery('body').removeClass('moving');
    }
});








 

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

window.addEventListener('resize', debounce(function(e){
    navigationHiddenResize();
    navigationAlign();
}));

navigationHiddenResize();
navigationAlign();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiY29yZS9pbmRleC5qcyIsImNvcmUvY29uZmlnL2V2ZW50cy5qcyIsImNvcmUvcGx1Z2lucy9zY3JvbGxpbmcuanMiLCJhc3NldHMvbW9kdWxlcy9jb3B5cmlnaHQvaW5kZXguanMiLCJhc3NldHMvbW9kdWxlcy9idXktdG9nZXRoZXIvaW5kZXguanMiLCJhc3NldHMvbW9kdWxlcy9mb290ZXIvaW5kZXguanMiLCJhc3NldHMvbW9kdWxlcy9oZWFkZXIvaW5kZXguanMiLCJhc3NldHMvbW9kdWxlcy9tYWluL2luZGV4LmpzIiwiYXNzZXRzL21vZHVsZXMvbmF2aWdhdGlvbi9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL3BhcnRuZXJzL2luZGV4LmpzIiwiYXNzZXRzL21vZHVsZXMvcHJvZHVjdHMtdmlzaXRlZC9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL3Nob3djYXNlL2luZGV4LmpzIiwiYXNzZXRzL3BhZ2VzL3BhZ2UtY2F0YWxvZy9pbmRleC5qcyIsImFzc2V0cy9wYWdlcy9wYWdlLWRlcG9pbWVudG9zL2luZGV4LmpzIiwiYXNzZXRzL3BhZ2VzL3BhZ2UtaG9tZS9pbmRleC5qcyIsImFzc2V0cy9wYWdlcy9wYWdlLW5vdGljaWFzL2luZGV4LmpzIiwiYXNzZXRzL3BhZ2VzL3BhZ2UtcHJvZHVjdC9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9hdHRlbmRhbmNlL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2Jhbm5lci9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9icmVhZGNydW1iL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2J1dHRvbi9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9jYXJ0L2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2NvbW1lbnRzL2luZGV4LmpzIiwiYXNzZXRzL21vZHVsZXMvZmlsdGVyL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2N1c3RvbWVyL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2ljb24vaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvbG9nby9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9tZW51L2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL21vZGFsL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL25ld3NsZXR0ZXIvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvcGFnaW5hdGUvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvcHJvZHVjdC9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9wcm9kdWN0LXRhYnMvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvcmF0aW5nLXNob3J0L2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL3J1bGVycy9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9zZWFyY2gvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvc2hhcmUvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvc2xpY2svaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvc29jaWFscy9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy90aHVtYnMvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvdGl0bGUvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvdG9vbGJhci9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9mYWtlLXNlbGVjdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyREE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FDQUE7QUFDQTtBQ0RBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkVBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAiLCIvLyBpbXBvcnQgU2Nyb2xsaW5nIGZyb20gJy4vcGx1Z2lucy9zY3JvbGxpbmcnO1xuLy8gaW1wb3J0IEFyaWEgZnJvbSAnLi9wbHVnaW5zL2FyaWEnO1xuLy8gaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tICdvYmplY3QtZml0LWltYWdlcyc7XG4vLyBpbXBvcnQgQ3VzdG9tRXZlbnQgZnJvbSAnLi9wbHVnaW5zL2N1c3RvbS1ldmVudHMnO1xuXG4gICAgLy8gdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICAvLyAvLyBDdXN0b20gRXZlbnRzXG4gICAgLy8gQ3VzdG9tRXZlbnQoKTtcblxuICAgIC8vIC8vIEFkZCBTY3JvbGxpbmcgcGFnZSBib2R5XG4gICAgLy8gU2Nyb2xsaW5nKCk7XG5cbiAgICAvLyAvLyBPYmplY3QgRml0XG4gICAgLy8gb2JqZWN0Rml0SW1hZ2VzKCk7XG5cbiAgICAvLyAvLyBBcmlhIFxuICAgIC8vIEFyaWEoKTtcblxuICAgIC8vIC8vIEFkZCBDbGFzcyBBZnRlciBsb2FkXG4gICAgLy8gYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVsb2FkJyk7XG5cbiAgICAvLyAkdHJheSgnW2RhdGEtdHJheS1sb2dpbl0nKS5jbGljaygoZXZ0KSA9PiB7IGV2dC5wcmV2ZW50RGVmYXVsdCgpOyAkdHJheSgndHJheS1sb2dpbicpLnNob3coKTsgfSk7XG5cbiIsIi8vIGV4cG9ydCB2YXIgQ0FSVF9VUERBVEUgPSAnVFJBWTpDQVJUX1VQREFURSc7IiwidmFyIGxhc3RTY3JvbGxUb3AgPSAwO1xualF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBzdCA9IGpRdWVyeSh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdCA+IDE1MCkge1xuICAgICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnbW92aW5nJyk7XG4gICAgICAgIGlmIChzdCA+IGxhc3RTY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIGpRdWVyeSgnYm9keScpLmFkZENsYXNzKCdtb3ZpbmctLWRvd24nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGpRdWVyeSgnYm9keScpLnJlbW92ZUNsYXNzKCdtb3ZpbmctLWRvd24nKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vdmluZycpO1xuICAgIH1cbn0pO1xuIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiICIsIlxuIGlmKCQoJy5zaG93Y2FzZV9fbGlzdFtkYXRhLWNhcm91c2VsPXRydWVdJykpIHtcbiAgICAkKCcuc2hvd2Nhc2VfX2xpc3RbZGF0YS1jYXJvdXNlbD10cnVlXScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuc2hvd2Nhc2VfX2l0ZW0tLWVtcHR5JykucmVtb3ZlKCk7XG4gICAgICAgICQodGhpcykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XG4gICAgICAgICAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogYDxidXR0b24gYXJpYS1sYWJlbD1cInByZXZcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PDwvYnV0dG9uPmAsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IGA8YnV0dG9uIGFyaWEtbGFiZWw9XCJwcmV2XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPj48L2J1dHRvbj5gLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDI0LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdICAgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuIH1cbiIsIiIsIiIsIiAiLCIiLCIiLCIiLCJcbmlmKCQoJy5iYW5uZXItLWphdmFzY3JpcHQgLmJhbm5lcl9fbGlzdCcpKSB7XG4kKCcuYmFubmVyLS1qYXZhc2NyaXB0IC5iYW5uZXJfX2xpc3QnKS5ub3QoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKHtcbiAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBwcmV2QXJyb3c6IGA8YnV0dG9uIGFyaWEtbGFiZWw9XCJwcmV2XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjw8L2J1dHRvbj5gLFxuICAgIG5leHRBcnJvdzogYDxidXR0b24gYXJpYS1sYWJlbD1cIm5leHRcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PjwvYnV0dG9uPmAsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA0MjQsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSAgIFxufSk7XG59XG5cblxuaWYoJCgnLmJhbm5lci0tZ3JpZCAuYmFubmVyX19saXN0JykpIHtcbiQoJy5iYW5uZXItLWdyaWQgLmJhbm5lcl9fbGlzdCcpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xuICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBwcmV2QXJyb3c6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicHJldlwiIGNsYXNzPVwic2xpY2stcHJldlwiPjw8L2J1dHRvbj5gLFxuICAgIG5leHRBcnJvdzogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJuZXh0XCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PjwvYnV0dG9uPmAsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA0MjQsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSAgIFxufSk7XG59IiwiIiwiIiwiIiwiXG5cblxudmFyIGJ1dHRvbiA9ICQoJyNidC1zdWJtaXQtY29tbWVudHMnKTtcblxuaWYoYnV0dG9uKSB7XG4gICAgdmFyIGJ1dHRvbkFjdGlvbiA9ICQoYDxidXR0b24gY2xhc3M9XCJjb21tZW50c19fYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPkF2YWxpYXI8L2J1dHRvbj5gKTtcbiAgICBidXR0b24uYWZ0ZXIoYnV0dG9uQWN0aW9uKTtcblxuICAgIGJ1dHRvbkFjdGlvbi5jbGljaygoKSA9PiB7XG4gICAgICAgIGJ1dHRvbi50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0pO1xufVxuIiwiIiwiXG4gIiwiIiwiIiwiXG5cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYyl7XG4gICAgdmFyIHRpbWVyO1xuICAgIHJldHVybiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGlmKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuYywyMDAsZXZlbnQpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb25IaWRkZW5SZXNpemUoKSB7XG4gICAgdmFyIHdpZHRoTmF2aWdhdGlvbiA9ICQoJy5tZW51LS1uYXZpZ2F0aW9uIC5tZW51X191bC0tbnYxJykub3V0ZXJXaWR0aCgpO1xuICAgIHZhciB3aWR0aEN1cnJlbnQgPSAwO1xuICAgICQoJy5tZW51LS1uYXZpZ2F0aW9uIC5tZW51X19pdGVtLS1udjEnKS5yZW1vdmVDbGFzcygnbWVudV9faXRlbS0taGlkZGVuJyk7XG4gICAgJCgnLm1lbnUtLW5hdmlnYXRpb24gLm1lbnVfX2l0ZW0tLW52MScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgd2lkdGhDdXJyZW50ICs9ICQodGhpcykub3V0ZXJXaWR0aCgpO1xuICAgICAgICBpZih3aWR0aEN1cnJlbnQgPiB3aWR0aE5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21lbnVfX2l0ZW0tLWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb25BbGlnbigpIHtcbiAgICAkKCcubWVudS0tbmF2aWdhdGlvbicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcubWVudS0tbnYyJykucmVtb3ZlQ2xhc3MoJ21lbnUtLXJ0bCcpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5tZW51LS1udjInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgbmF2ID0gJCh0aGlzKS5jbG9zZXN0KCcubWVudS0tbnYxJykub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIGxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQgKyAkKHRoaXMpLm91dGVyV2lkdGgoKTtcblxuICAgICAgICAgICAgaWYobGVmdCA+IG5hdikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21lbnUtLXJ0bCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxufVxuXG52YXIgY2hpbGRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbS0taGFzLWNoaWxkJykpO1xuXG5jaGlsZHMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVfX2l0ZW0tLWhhcy1jaGlsZCcpKSB7XG4gICAgICAgICAgICB2YXIgZXhwYW5kZWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICAgICAgICBpZihleHBhbmRlZCAhPT0gJ3RydWUnICYmIGV4cGFuZGVkICE9PSAnZmFsc2UnKSBleHBhbmRlZCA9ICdmYWxzZSc7XG4gICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZXhwYW5kZWQgPT09ICd0cnVlJyA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgICAgICAkKHRhcmdldCkuZmluZCgnPiAubWVudS0tc3ViJykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UoZnVuY3Rpb24oZSl7XG4gICAgbmF2aWdhdGlvbkhpZGRlblJlc2l6ZSgpO1xuICAgIG5hdmlnYXRpb25BbGlnbigpO1xufSkpO1xuXG5uYXZpZ2F0aW9uSGlkZGVuUmVzaXplKCk7XG5uYXZpZ2F0aW9uQWxpZ24oKTtcblxuXG4kKCcuYnV0dG9uLS1tZW51Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbWVudV9fb3BlbicpXG59KTtcblxuJCgnLmJ1dHRvbl9fY2xvc2UtLW5hdmlnYXRpb24nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtZW51X19vcGVuJylcbn0pOyIsIiIsIiIsIiIsIiIsIlxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcblxuLy8gICAgIHZhciB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtdGFicycpO1xuLy8gICAgIGlmKHRhYnMpe1xuLy8gICAgICAgICB2YXIgdXJscyA9IEFycmF5LmZyb20odGFicy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS11cmxdJykpO1xuXG4vLyAgICAgICAgIHVybHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuLy8gICAgICAgICAgICAgdmFyIHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpO1xuLy8gICAgICAgICAgICAgYXhpb3MuZ2V0KHVybClcbi8vICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5kYXRhKVxuLy8gICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBlbGVtZW50LmlubmVySFRNTCA9IGRhdGEpO1xuLy8gICAgICAgICB9KTtcblxuLy8gICAgICAgICB2YXIgY3VzdG9tVGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtdGFicy0tY3VzdG9tIC5wcm9kdWN0LXRhYnNfX2xpbmsnKSk7XG5cbi8vICAgICAgICAgY3VzdG9tVGFicy5mb3JFYWNoKChjdXN0b21UYWIpID0+IHtcbi8vICAgICAgICAgICAgIGN1c3RvbVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbi8vICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IGV2dC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBoYXNoID0gaHJlZi5tYXRjaCgvXlteI10qIyguKikvKVsxXTtcblxuLy8gICAgICAgICAgICAgICAgIGlmKGhhc2gpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZEJveCcpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHsgaGFzaCB9YCk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgY29udGVudHMuZm9yRWFjaCgoY29udGVudCkgPT4gY29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZScpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudCkgY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVGFicy5mb3JFYWNoKChjdXN0b21UYWIpID0+IGN1c3RvbVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdvbicpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZXZ0LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnb24nKTtcblxuLy8gICAgICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgIGlmKGN1c3RvbVRhYnMubGVuZ3RoKSB7XG4vLyAgICAgICAgICAgICBjdXN0b21UYWJzWzBdLmNsYXNzTGlzdC5hZGQoJ29uJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9KTtcblxuIiwiIiwiXG4gXG4kKCcucnVsZXJzX19saXN0Jykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XG4gICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBwcmV2QXJyb3c6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicHJldlwiIGNsYXNzPVwic2xpY2stcHJldlwiPjw8L2J1dHRvbj5gLFxuICAgIG5leHRBcnJvdzogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJuZXh0XCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PjwvYnV0dG9uPmAsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMDIzLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0gICBcbn0pOyIsIiIsIiIsIiIsIiIsIlxuXG52YXIgJCA9ICR0cmF5O1xuaWYoIHR5cGVvZiAkID09ICdmdW5jdGlvbicpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAkKHdpbmRvdykuYWpheENvbXBsZXRlKGZ1bmN0aW9uKCBldmVudCwgeGhyLCBzZXR0aW5ncyApe1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBpZihzZXR0aW5ncy51cmwuaW5kZXhPZigndmFyaWFudF9nYWxsZXJ5JykgIT09ICAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkVGh1bWIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsb2FkVGh1bWIoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uICBsb2FkVGh1bWIoKSB7XG4gICAgICAgIHZhciAgdGh1bWJzICA9ICAkKCcucHJvZHV0by1pbWFnZW0tbWluaWF0dXJhcycpO1xuXG4gICAgICAgIGlmKHRodW1icy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRodW1icy5oaWRlKCk7XG5cbiAgICAgICAgICAgIHZhciAgIGltYWdlcyAgPSAgdGh1bWJzLmZpbmQoJ2ltZywgLmljb24tdmlkZW8nKTtcbiAgICAgICAgICAgIGxldCAgICAgaHRtbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoJCgnLnRodW1icycpLmxlbmd0aCkgJCgnLnRodW1icycpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBpZihpbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaHRtbCAgPSAgYDxkaXYgY2xhc3M9XCJ0aHVtYnNcIj5gO1xuICAgICAgICAgICAgICAgIGh0bWwgICs9ICBgPHVsIGNsYXNzPVwidGh1bWJzX19saXN0XCI+YDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbWFnZXMuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaHRtbCAgKz0gIGNyZWF0ZVRodW1iKCQoaXRlbSkuYXR0cignc3JjJyksIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGh0bWwgICs9ICBgPC91bD5gO1xuICAgICAgICAgICAgICAgIGh0bWwgICs9ICBgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICB0aHVtYnMuYWZ0ZXIoaHRtbCk7XG5cbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKFwidGh1bWJzOnN0YXJ0XCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoJy50aHVtYnMgYScpLmNsaWNrKChldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gJChldnQuY3VycmVudFRhcmdldCkuYXR0cignZGF0YS1pbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFRodW1iKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGV2dC5jdXJyZW50VGFyZ2V0KS5maW5kKCcudGh1bWJfX3ZpZGVvJykubGVuZ3RoKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbFZpZGVvJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgkKCdhJywgdGh1bWJzKS5lcShpbmRleCkpLm1vdXNlb3ZlcigpLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY29sVmlkZW8nKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XHRcdFx0XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2VsZWN0VGh1bWIoJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzZWxlY3RUaHVtYihpbmRleCkge1xuICAgICAgICAkKGAudGh1bWJzIGxpYCkucmVtb3ZlQ2xhc3MoJ3RodW1ic19faXRlbS0tYWN0aXZlZCcpO1xuICAgICAgICAkKGAudGh1bWJzIFtkYXRhLWluZGV4PSR7aW5kZXh9XWApLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ3RodW1ic19faXRlbS0tYWN0aXZlZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICBjcmVhdGVUaHVtYihzcmMsaW5kZXgpIHtcbiAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgcmV0dXJuICBgPGxpIGNsYXNzPVwidGh1bWJzX19pdGVtXCI+PGEgY2xhc3M9XCJ0aHVtYnNfX2xpbmtcIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIiBocmVmPVwiIyR7aW5kZXh9XCI+PGltZyBjbGFzcz1cInRodW1ic19faW1hZ2VcIiBzcmM9XCIke3NyY31cIiAvPjwvYT48L2xpPmA7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJ0aHVtYnNfX2l0ZW1cIj48YSBjbGFzcz1cInRodW1ic19fbGlua1wiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiIGhyZWY9XCIjJHtpbmRleH1cIj48c3BhbiBjbGFzcz1cInRodW1iX192aWRlb1wiPjwvc3Bhbj48L2E+PC9saT5gO1xuICAgICAgICB9XG4gICAgfVxufSIsIiIsIiAiLCJcblxuLy8gZnVuY3Rpb24gRmFrZVNlbGVjdCgpIHtcbi8vICAgICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIGlmKCQodGhpcykuY2xvc2VzdCgnLmZha2Utc2VsZWN0JykubGVuZ3RoID09PSAwKSB7XG4vLyAgICAgICAgICAgICB2YXIgdGV4dCA9ICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpO1xuLy8gICAgICAgICAgICAgdmFyIGZha2UgPSAkKCc8ZGl2IGNsYXNzPVwiZmFrZS1zZWxlY3RcIj4nKTtcbi8vICAgICAgICAgICAgIHZhciBsYWJlbCA9ICQoJzxzcGFuIGNsYXNzPVwiZmFrZS1zZWxlY3RfX2xhYmVsXCI+JykudGV4dCh0ZXh0KTtcbi8vICAgICAgICAgICAgIHZhciBjc3NDbGFzcyA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpO1xuXG4vLyAgICAgICAgICAgICBjc3NDbGFzcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgaWYoaXRlbSAhPT0gJycpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgZmFrZS5hZGRDbGFzcyhpdGVtKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KVxuXG4vLyAgICAgICAgICAgICBmYWtlLnByZXBlbmQobGFiZWwpO1xuLy8gICAgICAgICAgICAgJCh0aGlzKS5hZnRlcihmYWtlKTtcbi8vICAgICAgICAgICAgIGZha2UuYXBwZW5kKHRoaXMpO1xuXG4vLyAgICAgICAgICAgICAkKHRoaXMpLmNoYW5nZSgoKSA9PiB7IGxhYmVsLnRleHQoJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCkpIH0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG4vLyB9XG5cbi8vIEZha2VTZWxlY3QoKTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRkFLRVNFTEVDVCcsICgpID0+IHsgRmFrZVNlbGVjdCgpIH0sIGZhbHNlKTsiXX0=