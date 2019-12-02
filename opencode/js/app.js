 
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
// export default () => {
//     var eventFakeSelect = new Event('FAKESELECT');

//     $tray(document).ajaxComplete((evet, xhr, settings) => {
//         if(settings.url.indexOf('variacao_dupla_compre_junto') !== -1)  {
//             document.dispatchEvent(eventFakeSelect);
//         }
//         if(settings.url.indexOf('loadNextVariantDropDown') !== -1) {
//             document.dispatchEvent(eventFakeSelect);
//         }
//     });

// }
// /**
//  * Currency
//  * @param {string} currency 
//  */
// export var currency = (coin) => {
//     return coin.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
// }

// /**
//  * Dispatch Event
//  * @param {string} NAME 
//  */
// export var dispatchEvent = (NAME) => {
//     var evt = new Event(NAME);
//     return document.dispatchEvent(evt);
// }

// /**
//  * Listener Event
//  * @param {string} NAME 
//  * @param {function} CB 
//  */
// export var listenerEvent = (NAME, CB) => {
//     return document.addEventListener(NAME, CB, false); 
// }
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



console.log('aaaa');










 

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

 
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiY29yZS9pbmRleC5qcyIsImNvcmUvY29uZmlnL2V2ZW50cy5qcyIsImNvcmUvcGx1Z2lucy9hcmlhLmpzIiwiY29yZS9wbHVnaW5zL2N1c3RvbS1ldmVudHMuanMiLCJjb3JlL3BsdWdpbnMvaW5kZXguanMiLCJjb3JlL3BsdWdpbnMvc2Nyb2xsaW5nLmpzIiwiYXNzZXRzL3BhZ2VzL3BhZ2UtY2F0YWxvZy9pbmRleC5qcyIsImFzc2V0cy9wYWdlcy9wYWdlLWRlcG9pbWVudG9zL2luZGV4LmpzIiwiYXNzZXRzL3BhZ2VzL3BhZ2UtaG9tZS9pbmRleC5qcyIsImFzc2V0cy9wYWdlcy9wYWdlLW5vdGljaWFzL2luZGV4LmpzIiwiYXNzZXRzL3BhZ2VzL3BhZ2UtcHJvZHVjdC9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL2J1eS10b2dldGhlci9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL2NvcHlyaWdodC9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL2ZpbHRlci9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL2Zvb3Rlci9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL2hlYWRlci9pbmRleC5qcyIsImFzc2V0cy9tb2R1bGVzL21haW4vaW5kZXguanMiLCJhc3NldHMvbW9kdWxlcy9uYXZpZ2F0aW9uL2luZGV4LmpzIiwiYXNzZXRzL21vZHVsZXMvcGFydG5lcnMvaW5kZXguanMiLCJhc3NldHMvbW9kdWxlcy9wcm9kdWN0cy12aXNpdGVkL2luZGV4LmpzIiwiYXNzZXRzL21vZHVsZXMvc2hvd2Nhc2UvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvYXR0ZW5kYW5jZS9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9iYW5uZXIvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvYnJlYWRjcnVtYi9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9idXR0b24vaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvY2FydC9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9jb21tZW50cy9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9jdXN0b21lci9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9mYWtlLXNlbGVjdC9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9pY29uL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2xvZ28vaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvbWVudS9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9tb2RhbC9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9uZXdzbGV0dGVyL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL3BhZ2luYXRlL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL3Byb2R1Y3QvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvcHJvZHVjdC10YWJzL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL3JhdGluZy1zaG9ydC9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9ydWxlcnMvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvc2VhcmNoL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL3NoYXJlL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL3NsaWNrL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL3NvY2lhbHMvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvdGh1bWJzL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL3RpdGxlL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL3Rvb2xiYXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckRBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuRUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZFQTtBQ0FBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAiLCIvLyBpbXBvcnQgU2Nyb2xsaW5nIGZyb20gJy4vcGx1Z2lucy9zY3JvbGxpbmcnO1xuLy8gaW1wb3J0IEFyaWEgZnJvbSAnLi9wbHVnaW5zL2FyaWEnO1xuLy8gaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tICdvYmplY3QtZml0LWltYWdlcyc7XG4vLyBpbXBvcnQgQ3VzdG9tRXZlbnQgZnJvbSAnLi9wbHVnaW5zL2N1c3RvbS1ldmVudHMnO1xuXG4gICAgLy8gdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICAvLyAvLyBDdXN0b20gRXZlbnRzXG4gICAgLy8gQ3VzdG9tRXZlbnQoKTtcblxuICAgIC8vIC8vIEFkZCBTY3JvbGxpbmcgcGFnZSBib2R5XG4gICAgLy8gU2Nyb2xsaW5nKCk7XG5cbiAgICAvLyAvLyBPYmplY3QgRml0XG4gICAgLy8gb2JqZWN0Rml0SW1hZ2VzKCk7XG5cbiAgICAvLyAvLyBBcmlhIFxuICAgIC8vIEFyaWEoKTtcblxuICAgIC8vIC8vIEFkZCBDbGFzcyBBZnRlciBsb2FkXG4gICAgLy8gYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVsb2FkJyk7XG5cbiAgICAvLyAkdHJheSgnW2RhdGEtdHJheS1sb2dpbl0nKS5jbGljaygoZXZ0KSA9PiB7IGV2dC5wcmV2ZW50RGVmYXVsdCgpOyAkdHJheSgndHJheS1sb2dpbicpLnNob3coKTsgfSk7XG5cbiIsIi8vIGV4cG9ydCB2YXIgQ0FSVF9VUERBVEUgPSAnVFJBWTpDQVJUX1VQREFURSc7IiwiLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuLy8gICAgIHZhciBjb250cm9scyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2FyaWEtY29udHJvbHNdJykpO1xuLy8gICAgIHZhciBib2R5ICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuLy8gICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbi8vICAgICAgICAgY29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHsgXG4vLyAgICAgICAgICAgICB2YXIgY3VycmVudFRhcmdldCA9IGV2dC5jdXJyZW50VGFyZ2V0O1xuLy8gICAgICAgICAgICAgdmFyIGlkICAgICAgICAgICAgPSBgIyR7IGN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJykgfWA7XG4vLyAgICAgICAgICAgICB2YXIgZWwgICAgICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuLy8gICAgICAgICAgICAgbGV0ICAgY3VycmVudEhpZGRlbiA9IGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbi8vICAgICAgICAgICAgIGxldCAgaGFzRml4ZWQgICAgICAgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZml4ZWQnKSA9PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlO1xuXG4vLyAgICAgICAgICAgICBpZihjdXJyZW50SGlkZGVuICE9ICdmYWxzZScgJiYgY3VycmVudEhpZGRlbiAhPSAndHJ1ZScpIGN1cnJlbnRIaWRkZW4gPSAndHJ1ZSdcbi8vICAgICAgICAgICAgIGlmKGhhc0ZpeGVkKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYoY3VycmVudEhpZGRlbiA9PT0gJ3RydWUnKSAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgZWxzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBjdXJyZW50SGlkZGVuID09PSAndHJ1ZScgPyBmYWxzZSA6IHRydWUpO1xuLy8gICAgICAgICB9KTtcbiAgICAgICAgXG4vLyAgICAgfSk7XG4vLyB9OyIsIi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbi8vICAgICB2YXIgZXZlbnRGYWtlU2VsZWN0ID0gbmV3IEV2ZW50KCdGQUtFU0VMRUNUJyk7XG5cbi8vICAgICAkdHJheShkb2N1bWVudCkuYWpheENvbXBsZXRlKChldmV0LCB4aHIsIHNldHRpbmdzKSA9PiB7XG4vLyAgICAgICAgIGlmKHNldHRpbmdzLnVybC5pbmRleE9mKCd2YXJpYWNhb19kdXBsYV9jb21wcmVfanVudG8nKSAhPT0gLTEpICB7XG4vLyAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50RmFrZVNlbGVjdCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYoc2V0dGluZ3MudXJsLmluZGV4T2YoJ2xvYWROZXh0VmFyaWFudERyb3BEb3duJykgIT09IC0xKSB7XG4vLyAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50RmFrZVNlbGVjdCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcblxuLy8gfSIsIi8vIC8qKlxuLy8gICogQ3VycmVuY3lcbi8vICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW5jeSBcbi8vICAqL1xuLy8gZXhwb3J0IHZhciBjdXJyZW5jeSA9IChjb2luKSA9PiB7XG4vLyAgICAgcmV0dXJuIGNvaW4udG9Mb2NhbGVTdHJpbmcoXCJwdC1CUlwiLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiAsIHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ0JSTCcgfSk7XG4vLyB9XG5cbi8vIC8qKlxuLy8gICogRGlzcGF0Y2ggRXZlbnRcbi8vICAqIEBwYXJhbSB7c3RyaW5nfSBOQU1FIFxuLy8gICovXG4vLyBleHBvcnQgdmFyIGRpc3BhdGNoRXZlbnQgPSAoTkFNRSkgPT4ge1xuLy8gICAgIHZhciBldnQgPSBuZXcgRXZlbnQoTkFNRSk7XG4vLyAgICAgcmV0dXJuIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbi8vIH1cblxuLy8gLyoqXG4vLyAgKiBMaXN0ZW5lciBFdmVudFxuLy8gICogQHBhcmFtIHtzdHJpbmd9IE5BTUUgXG4vLyAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBDQiBcbi8vICAqL1xuLy8gZXhwb3J0IHZhciBsaXN0ZW5lckV2ZW50ID0gKE5BTUUsIENCKSA9PiB7XG4vLyAgICAgcmV0dXJuIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoTkFNRSwgQ0IsIGZhbHNlKTsgXG4vLyB9IiwidmFyIGxhc3RTY3JvbGxUb3AgPSAwO1xualF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBzdCA9IGpRdWVyeSh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdCA+IDE1MCkge1xuICAgICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnbW92aW5nJyk7XG4gICAgICAgIGlmIChzdCA+IGxhc3RTY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIGpRdWVyeSgnYm9keScpLmFkZENsYXNzKCdtb3ZpbmctLWRvd24nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGpRdWVyeSgnYm9keScpLnJlbW92ZUNsYXNzKCdtb3ZpbmctLWRvd24nKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vdmluZycpO1xuICAgIH1cbn0pO1xuIiwiIiwiIiwiY29uc29sZS5sb2coJ2FhYWEnKTsiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIgIiwiXG4gaWYoJCgnLnNob3djYXNlX19saXN0W2RhdGEtY2Fyb3VzZWw9dHJ1ZV0nKSkge1xuICAgICQoJy5zaG93Y2FzZV9fbGlzdFtkYXRhLWNhcm91c2VsPXRydWVdJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5zaG93Y2FzZV9faXRlbS0tZW1wdHknKS5yZW1vdmUoKTtcbiAgICAgICAgJCh0aGlzKS5ub3QoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKHtcbiAgICAgICAgICAgIG1vYmlsZUZpcnN0OiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgICAgcHJldkFycm93OiBgPGJ1dHRvbiBhcmlhLWxhYmVsPVwicHJldlwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48PC9idXR0b24+YCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogYDxidXR0b24gYXJpYS1sYWJlbD1cInByZXZcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PjwvYnV0dG9uPmAsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0MjQsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0gICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG4gfVxuIiwiIiwiXG5pZigkKCcuYmFubmVyLS1qYXZhc2NyaXB0IC5iYW5uZXJfX2xpc3QnKSkge1xuJCgnLmJhbm5lci0tamF2YXNjcmlwdCAuYmFubmVyX19saXN0Jykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XG4gICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcHJldkFycm93OiBgPGJ1dHRvbiBhcmlhLWxhYmVsPVwicHJldlwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48PC9idXR0b24+YCxcbiAgICBuZXh0QXJyb3c6IGA8YnV0dG9uIGFyaWEtbGFiZWw9XCJuZXh0XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPj48L2J1dHRvbj5gLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNDI0LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0gICBcbn0pO1xufVxuXG5cbmlmKCQoJy5iYW5uZXItLWdyaWQgLmJhbm5lcl9fbGlzdCcpKSB7XG4kKCcuYmFubmVyLS1ncmlkIC5iYW5uZXJfX2xpc3QnKS5ub3QoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKHtcbiAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcHJldkFycm93OiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInByZXZcIiBjbGFzcz1cInNsaWNrLXByZXZcIj48PC9idXR0b24+YCxcbiAgICBuZXh0QXJyb3c6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwibmV4dFwiIGNsYXNzPVwic2xpY2stbmV4dFwiPj48L2J1dHRvbj5gLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNDI0LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0gICBcbn0pO1xufSIsIiIsIiIsIiIsIlxuXG5cbnZhciBidXR0b24gPSAkKCcjYnQtc3VibWl0LWNvbW1lbnRzJyk7XG5cbmlmKGJ1dHRvbikge1xuICAgIHZhciBidXR0b25BY3Rpb24gPSAkKGA8YnV0dG9uIGNsYXNzPVwiY29tbWVudHNfX2J1dHRvblwiIHR5cGU9XCJidXR0b25cIj5BdmFsaWFyPC9idXR0b24+YCk7XG4gICAgYnV0dG9uLmFmdGVyKGJ1dHRvbkFjdGlvbik7XG5cbiAgICBidXR0b25BY3Rpb24uY2xpY2soKCkgPT4ge1xuICAgICAgICBidXR0b24udHJpZ2dlcignY2xpY2snKTtcbiAgICB9KTtcbn1cbiIsIlxuICIsIlxuXG4vLyBmdW5jdGlvbiBGYWtlU2VsZWN0KCkge1xuLy8gICAgICQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKXtcbi8vICAgICAgICAgaWYoJCh0aGlzKS5jbG9zZXN0KCcuZmFrZS1zZWxlY3QnKS5sZW5ndGggPT09IDApIHtcbi8vICAgICAgICAgICAgIHZhciB0ZXh0ID0gJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCk7XG4vLyAgICAgICAgICAgICB2YXIgZmFrZSA9ICQoJzxkaXYgY2xhc3M9XCJmYWtlLXNlbGVjdFwiPicpO1xuLy8gICAgICAgICAgICAgdmFyIGxhYmVsID0gJCgnPHNwYW4gY2xhc3M9XCJmYWtlLXNlbGVjdF9fbGFiZWxcIj4nKS50ZXh0KHRleHQpO1xuLy8gICAgICAgICAgICAgdmFyIGNzc0NsYXNzID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJyk7XG5cbi8vICAgICAgICAgICAgIGNzc0NsYXNzLmZvckVhY2goKGl0ZW0pID0+IHtcbi8vICAgICAgICAgICAgICAgICBpZihpdGVtICE9PSAnJykge1xuLy8gICAgICAgICAgICAgICAgICAgICBmYWtlLmFkZENsYXNzKGl0ZW0pO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pXG5cbi8vICAgICAgICAgICAgIGZha2UucHJlcGVuZChsYWJlbCk7XG4vLyAgICAgICAgICAgICAkKHRoaXMpLmFmdGVyKGZha2UpO1xuLy8gICAgICAgICAgICAgZmFrZS5hcHBlbmQodGhpcyk7XG5cbi8vICAgICAgICAgICAgICQodGhpcykuY2hhbmdlKCgpID0+IHsgbGFiZWwudGV4dCgkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnRleHQoKSkgfSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcbi8vIH1cblxuLy8gRmFrZVNlbGVjdCgpO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdGQUtFU0VMRUNUJywgKCkgPT4geyBGYWtlU2VsZWN0KCkgfSwgZmFsc2UpOyIsIiIsIiIsIlxuXG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMpe1xuICAgIHZhciB0aW1lcjtcbiAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBpZih0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmMsMjAwLGV2ZW50KTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBuYXZpZ2F0aW9uSGlkZGVuUmVzaXplKCkge1xuICAgIHZhciB3aWR0aE5hdmlnYXRpb24gPSAkKCcubWVudS0tbmF2aWdhdGlvbiAubWVudV9fdWwtLW52MScpLm91dGVyV2lkdGgoKTtcbiAgICB2YXIgd2lkdGhDdXJyZW50ID0gMDtcbiAgICAkKCcubWVudS0tbmF2aWdhdGlvbiAubWVudV9faXRlbS0tbnYxJykucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW0tLWhpZGRlbicpO1xuICAgICQoJy5tZW51LS1uYXZpZ2F0aW9uIC5tZW51X19pdGVtLS1udjEnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHdpZHRoQ3VycmVudCArPSAkKHRoaXMpLm91dGVyV2lkdGgoKTtcbiAgICAgICAgaWYod2lkdGhDdXJyZW50ID4gd2lkdGhOYXZpZ2F0aW9uKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdtZW51X19pdGVtLS1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBuYXZpZ2F0aW9uQWxpZ24oKSB7XG4gICAgJCgnLm1lbnUtLW5hdmlnYXRpb24nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuZmluZCgnLm1lbnUtLW52MicpLnJlbW92ZUNsYXNzKCdtZW51LS1ydGwnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcubWVudS0tbnYyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIG5hdiA9ICQodGhpcykuY2xvc2VzdCgnLm1lbnUtLW52MScpLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0ICsgJCh0aGlzKS5vdXRlcldpZHRoKCk7XG5cbiAgICAgICAgICAgIGlmKGxlZnQgPiBuYXYpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdtZW51LS1ydGwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSlcbn1cblxudmFyIGNoaWxkcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2l0ZW0tLWhhcy1jaGlsZCcpKTtcblxuY2hpbGRzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51X19pdGVtLS1oYXMtY2hpbGQnKSkge1xuICAgICAgICAgICAgdmFyIGV4cGFuZGVkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgICAgICAgaWYoZXhwYW5kZWQgIT09ICd0cnVlJyAmJiBleHBhbmRlZCAhPT0gJ2ZhbHNlJykgZXhwYW5kZWQgPSAnZmFsc2UnO1xuICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGV4cGFuZGVkID09PSAndHJ1ZScgPyBmYWxzZSA6IHRydWUpO1xuICAgICAgICAgICAgJCh0YXJnZXQpLmZpbmQoJz4gLm1lbnUtLXN1YicpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKGZ1bmN0aW9uKGUpe1xuICAgIG5hdmlnYXRpb25IaWRkZW5SZXNpemUoKTtcbiAgICBuYXZpZ2F0aW9uQWxpZ24oKTtcbn0pKTtcblxubmF2aWdhdGlvbkhpZGRlblJlc2l6ZSgpO1xubmF2aWdhdGlvbkFsaWduKCk7XG5cblxuJCgnLmJ1dHRvbi0tbWVudScpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21lbnVfX29wZW4nKVxufSk7XG5cbiQoJy5idXR0b25fX2Nsb3NlLS1uYXZpZ2F0aW9uJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbWVudV9fb3BlbicpXG59KTsiLCIiLCIiLCIiLCIiLCJcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XG5cbi8vICAgICB2YXIgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXRhYnMnKTtcbi8vICAgICBpZih0YWJzKXtcbi8vICAgICAgICAgdmFyIHVybHMgPSBBcnJheS5mcm9tKHRhYnMucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdXJsXScpKTtcblxuLy8gICAgICAgICB1cmxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbi8vICAgICAgICAgICAgIHZhciB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKTtcbi8vICAgICAgICAgICAgIGF4aW9zLmdldCh1cmwpXG4vLyAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuZGF0YSlcbi8vICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZWxlbWVudC5pbm5lckhUTUwgPSBkYXRhKTtcbi8vICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgdmFyIGN1c3RvbVRhYnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LXRhYnMtLWN1c3RvbSAucHJvZHVjdC10YWJzX19saW5rJykpO1xuXG4vLyAgICAgICAgIGN1c3RvbVRhYnMuZm9yRWFjaCgoY3VzdG9tVGFiKSA9PiB7XG4vLyAgICAgICAgICAgICBjdXN0b21UYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGhyZWYgPSBldnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IGhyZWYubWF0Y2goL15bXiNdKiMoLiopLylbMV07XG5cbi8vICAgICAgICAgICAgICAgICBpZihoYXNoKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2RCb3gnKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7IGhhc2ggfWApO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQpID0+IGNvbnRlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmUnKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQpIGN1cnJlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVRhYnMuZm9yRWFjaCgoY3VzdG9tVGFiKSA9PiBjdXN0b21UYWIuY2xhc3NMaXN0LnJlbW92ZSgnb24nKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGV2dC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ29uJyk7XG5cbi8vICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9KTtcblxuLy8gICAgICAgICBpZihjdXN0b21UYWJzLmxlbmd0aCkge1xuLy8gICAgICAgICAgICAgY3VzdG9tVGFic1swXS5jbGFzc0xpc3QuYWRkKCdvbicpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSk7XG5cbiIsIiIsIlxuIFxuJCgnLnJ1bGVyc19fbGlzdCcpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xuICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgcHJldkFycm93OiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInByZXZcIiBjbGFzcz1cInNsaWNrLXByZXZcIj48PC9idXR0b24+YCxcbiAgICBuZXh0QXJyb3c6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwibmV4dFwiIGNsYXNzPVwic2xpY2stbmV4dFwiPj48L2J1dHRvbj5gLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyMyxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdICAgXG59KTsiLCIiLCIiLCIiLCIiLCJcblxudmFyICQgPSAkdHJheTtcbmlmKCB0eXBlb2YgJCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgJCh3aW5kb3cpLmFqYXhDb21wbGV0ZShmdW5jdGlvbiggZXZlbnQsIHhociwgc2V0dGluZ3MgKXtcbiAgICAgICAgICAgIGlmKHNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgaWYoc2V0dGluZ3MudXJsLmluZGV4T2YoJ3ZhcmlhbnRfZ2FsbGVyeScpICE9PSAgLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZFRodW1iKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbG9hZFRodW1iKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiAgbG9hZFRodW1iKCkge1xuICAgICAgICB2YXIgIHRodW1icyAgPSAgJCgnLnByb2R1dG8taW1hZ2VtLW1pbmlhdHVyYXMnKTtcblxuICAgICAgICBpZih0aHVtYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHVtYnMuaGlkZSgpO1xuXG4gICAgICAgICAgICB2YXIgICBpbWFnZXMgID0gIHRodW1icy5maW5kKCdpbWcsIC5pY29uLXZpZGVvJyk7XG4gICAgICAgICAgICBsZXQgICAgIGh0bWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCQoJy50aHVtYnMnKS5sZW5ndGgpICQoJy50aHVtYnMnKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgaWYoaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGh0bWwgID0gIGA8ZGl2IGNsYXNzPVwidGh1bWJzXCI+YDtcbiAgICAgICAgICAgICAgICBodG1sICArPSAgYDx1bCBjbGFzcz1cInRodW1ic19fbGlzdFwiPmA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW1hZ2VzLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGh0bWwgICs9ICBjcmVhdGVUaHVtYigkKGl0ZW0pLmF0dHIoJ3NyYycpLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBodG1sICArPSAgYDwvdWw+YDtcbiAgICAgICAgICAgICAgICBodG1sICArPSAgYDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgdGh1bWJzLmFmdGVyKGh0bWwpO1xuXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcihcInRodW1iczpzdGFydFwiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkKCcudGh1bWJzIGEnKS5jbGljaygoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9ICQoZXZ0LmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2RhdGEtaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RUaHVtYihpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoJChldnQuY3VycmVudFRhcmdldCkuZmluZCgnLnRodW1iX192aWRlbycpLmxlbmd0aCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjb2xWaWRlbycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJCgnYScsIHRodW1icykuZXEoaW5kZXgpKS5tb3VzZW92ZXIoKS5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbFZpZGVvJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1x0XHRcdFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNlbGVjdFRodW1iKCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2VsZWN0VGh1bWIoaW5kZXgpIHtcbiAgICAgICAgJChgLnRodW1icyBsaWApLnJlbW92ZUNsYXNzKCd0aHVtYnNfX2l0ZW0tLWFjdGl2ZWQnKTtcbiAgICAgICAgJChgLnRodW1icyBbZGF0YS1pbmRleD0ke2luZGV4fV1gKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCd0aHVtYnNfX2l0ZW0tLWFjdGl2ZWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAgY3JlYXRlVGh1bWIoc3JjLGluZGV4KSB7XG4gICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiAgYDxsaSBjbGFzcz1cInRodW1ic19faXRlbVwiPjxhIGNsYXNzPVwidGh1bWJzX19saW5rXCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCIgaHJlZj1cIiMke2luZGV4fVwiPjxpbWcgY2xhc3M9XCJ0aHVtYnNfX2ltYWdlXCIgc3JjPVwiJHtzcmN9XCIgLz48L2E+PC9saT5gO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwidGh1bWJzX19pdGVtXCI+PGEgY2xhc3M9XCJ0aHVtYnNfX2xpbmtcIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIiBocmVmPVwiIyR7aW5kZXh9XCI+PHNwYW4gY2xhc3M9XCJ0aHVtYl9fdmlkZW9cIj48L3NwYW4+PC9hPjwvbGk+YDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIiLCIgIl19