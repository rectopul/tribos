
 

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
var lastScrollTop=0;jQuery(window).scroll(function(o){var l=jQuery(this).scrollTop();l>150?(jQuery("body").addClass("moving"),l>lastScrollTop?jQuery("body").addClass("moving--down"):jQuery("body").removeClass("moving--down"),lastScrollTop=l):jQuery("body").removeClass("moving")});
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


















 
$(".showcase__list[data-carousel=true]")&&$(".showcase__list[data-carousel=true]").each(function(){$(this).find(".showcase__item--empty").remove(),$(this).not(".slick-initialized").not(".slick-initialized").slick({mobileFirst:!1,slidesToShow:4,slidesToScroll:4,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',responsive:[{breakpoint:424,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:991,settings:{slidesToShow:4,slidesToScroll:4}}]})});

 if($('.showcase__list[data-carousel=true]')) {
    $('.showcase__list[data-carousel=true]').each(function(){
        $(this).find('.showcase__item--empty').remove();
        $(this).not('.slick-initialized').not('.slick-initialized').slick({
            mobileFirst: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,
            nextArrow: `<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,
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





console.log("aaaa");
console.log('aaaa');








$(".banner--javascript .banner__list")&&$(".banner--javascript .banner__list").not(".slick-initialized").slick({mobileFirst:!1,infinite:!1,slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',responsive:[{breakpoint:424,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".banner--grid .banner__list")&&$(".banner--grid .banner__list").not(".slick-initialized").slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',responsive:[{breakpoint:424,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:767,settings:{slidesToShow:4,slidesToScroll:4}}]});

if($('.banner--javascript .banner__list')) {
$('.banner--javascript .banner__list').not('.slick-initialized').slick({
    mobileFirst: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,
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
    prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,
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




var button=$("#bt-submit-comments");if(button){var buttonAction=$('<button class="comments__button" type="button">Avaliar</button>');button.after(buttonAction),buttonAction.click(()=>{button.trigger("click")})}



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




function debounce(n){var e;return function(i){e&&clearTimeout(e),e=setTimeout(n,200,i)}}function navigationHiddenResize(){var n=$(".menu--navigation .menu__ul--nv1").outerWidth(),e=0;$(".menu--navigation .menu__item--nv1").removeClass("menu__item--hidden"),$(".menu--navigation .menu__item--nv1").each(function(){(e+=$(this).outerWidth())>n&&$(this).addClass("menu__item--hidden")})}function navigationAlign(){$(".menu--navigation").each(function(){$(this).find(".menu--nv2").removeClass("menu--rtl"),$(this).find(".menu--nv2").each(function(){var n=$(this).closest(".menu--nv1").outerWidth();$(this).offset().left+$(this).outerWidth()>n&&$(this).addClass("menu--rtl")})})}var childs=Array.from(document.querySelectorAll(".menu__item--has-child"));childs.forEach(n=>{n.addEventListener("click",n=>{var e=n.target;if(e.classList.contains("menu__item--has-child")){var i=e.getAttribute("aria-expanded");"true"!==i&&"false"!==i&&(i="false"),e.setAttribute("aria-expanded","true"!==i),$(e).find("> .menu--sub").slideToggle()}},!1)}),window.addEventListener("resize",debounce(function(n){navigationHiddenResize(),navigationAlign()})),navigationHiddenResize(),navigationAlign(),$(".button--menu").on("click",function(){$("body").addClass("menu__open")}),$(".button__close--navigation").on("click",function(){$("body").removeClass("menu__open")});



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


$(".rulers__list").not(".slick-initialized").slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,infinite:!1,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',responsive:[{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1023,settings:{slidesToShow:4,slidesToScroll:4}}]});

 
$('.rulers__list').not('.slick-initialized').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,
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

 




var $=$tray;if("function"==typeof $){function loadThumb(){var t=$(".produto-imagem-miniaturas");if(t.length){t.hide();var e=t.find("img, .icon-video");let a;$(".thumbs").length&&$(".thumbs").remove(),e.length&&(a='<div class="thumbs">',a+='<ul class="thumbs__list">',e.each((t,e)=>{a+=createThumb($(e).attr("src"),t)}),a+="</ul>",a+="</div>",t.after(a),$(document).trigger("thumbs:start"),$(".thumbs a").click(e=>{let a=$(e.currentTarget).attr("data-index");selectThumb(a),$(e.currentTarget).find(".thumb__video").length?$("#colVideo").show():($($("a",t).eq(a)).mouseover().click(),$("#colVideo").hide()),e.preventDefault()}),selectThumb("0"))}}function selectThumb(t){$(".thumbs li").removeClass("thumbs__item--actived"),$(`.thumbs [data-index=${t}]`).closest("li").addClass("thumbs__item--actived")}function createThumb(t,e){return t?`<li class="thumbs__item"><a class="thumbs__link" data-index="${e}" href="#${e}"><img class="thumbs__image" src="${t}" /></a></li>`:`<li class="thumbs__item"><a class="thumbs__link" data-index="${e}" href="#${e}"><span class="thumb__video"></span></a></li>`}$(document).ready(function(){$(window).ajaxComplete(function(t,e,a){a&&-1!==a.url.indexOf("variant_gallery")&&loadThumb()}),loadThumb()})}


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





 
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5taW4uanMiLCJhcHAuanMiLCJjb3JlL2luZGV4LmpzIiwiY29yZS9jb25maWcvZXZlbnRzLmpzIiwiY29yZS9wbHVnaW5zL2FyaWEuanMiLCJjb3JlL3BsdWdpbnMvY3VzdG9tLWV2ZW50cy5qcyIsImNvcmUvcGx1Z2lucy9pbmRleC5qcyIsImNvcmUvcGx1Z2lucy9zY3JvbGxpbmcuanMiLCJhc3NldHMvbW9kdWxlcy9zaG93Y2FzZS9pbmRleC5qcyIsImFzc2V0cy9wYWdlcy9wYWdlLWhvbWUvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvYmFubmVyL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2NvbW1lbnRzL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL2Zha2Utc2VsZWN0L2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL21lbnUvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvcHJvZHVjdC10YWJzL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL3J1bGVycy9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy90aHVtYnMvaW5kZXguanMiXSwibmFtZXMiOlsibGFzdFNjcm9sbFRvcCIsImpRdWVyeSIsIndpbmRvdyIsInNjcm9sbCIsImV2ZW50Iiwic3QiLCJ0aGlzIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIiQiLCJlYWNoIiwiZmluZCIsInJlbW92ZSIsIm5vdCIsInNsaWNrIiwibW9iaWxlRmlyc3QiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJjb25zb2xlIiwibG9nIiwiaW5maW5pdGUiLCJidXR0b24iLCJidXR0b25BY3Rpb24iLCJhZnRlciIsImNsaWNrIiwidHJpZ2dlciIsImRlYm91bmNlIiwiZnVuYyIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIm5hdmlnYXRpb25IaWRkZW5SZXNpemUiLCJ3aWR0aE5hdmlnYXRpb24iLCJvdXRlcldpZHRoIiwid2lkdGhDdXJyZW50IiwibmF2aWdhdGlvbkFsaWduIiwibmF2IiwiY2xvc2VzdCIsIm9mZnNldCIsImxlZnQiLCJjaGlsZHMiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJleHBhbmRlZCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNsaWRlVG9nZ2xlIiwiZSIsIm9uIiwiJHRyYXkiLCJsb2FkVGh1bWIiLCJ0aHVtYnMiLCJsZW5ndGgiLCJoaWRlIiwiaW1hZ2VzIiwiaHRtbCIsImluZGV4IiwiaXRlbSIsImNyZWF0ZVRodW1iIiwiYXR0ciIsImN1cnJlbnRUYXJnZXQiLCJzZWxlY3RUaHVtYiIsInNob3ciLCJlcSIsIm1vdXNlb3ZlciIsInByZXZlbnREZWZhdWx0Iiwic3JjIiwicmVhZHkiLCJhamF4Q29tcGxldGUiLCJ4aHIiLCJ1cmwiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FDQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVJO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQ3RCSjtBQUFBO0FDQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUN0QkE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUNaQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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bGwsIi8vIGltcG9ydCBTY3JvbGxpbmcgZnJvbSAnLi9wbHVnaW5zL3Njcm9sbGluZyc7XG4vLyBpbXBvcnQgQXJpYSBmcm9tICcuL3BsdWdpbnMvYXJpYSc7XG4vLyBpbXBvcnQgb2JqZWN0Rml0SW1hZ2VzIGZyb20gJ29iamVjdC1maXQtaW1hZ2VzJztcbi8vIGltcG9ydCBDdXN0b21FdmVudCBmcm9tICcuL3BsdWdpbnMvY3VzdG9tLWV2ZW50cyc7XG5cbiAgICAvLyB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIC8vIC8vIEN1c3RvbSBFdmVudHNcbiAgICAvLyBDdXN0b21FdmVudCgpO1xuXG4gICAgLy8gLy8gQWRkIFNjcm9sbGluZyBwYWdlIGJvZHlcbiAgICAvLyBTY3JvbGxpbmcoKTtcblxuICAgIC8vIC8vIE9iamVjdCBGaXRcbiAgICAvLyBvYmplY3RGaXRJbWFnZXMoKTtcblxuICAgIC8vIC8vIEFyaWEgXG4gICAgLy8gQXJpYSgpO1xuXG4gICAgLy8gLy8gQWRkIENsYXNzIEFmdGVyIGxvYWRcbiAgICAvLyBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3ByZWxvYWQnKTtcblxuICAgIC8vICR0cmF5KCdbZGF0YS10cmF5LWxvZ2luXScpLmNsaWNrKChldnQpID0+IHsgZXZ0LnByZXZlbnREZWZhdWx0KCk7ICR0cmF5KCd0cmF5LWxvZ2luJykuc2hvdygpOyB9KTtcblxuIiwiLy8gZXhwb3J0IHZhciBDQVJUX1VQREFURSA9ICdUUkFZOkNBUlRfVVBEQVRFJzsiLCIvLyBleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4vLyAgICAgdmFyIGNvbnRyb2xzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1jb250cm9sc10nKSk7XG4vLyAgICAgdmFyIGJvZHkgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4vLyAgICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuLy8gICAgICAgICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4geyBcbi8vICAgICAgICAgICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XG4vLyAgICAgICAgICAgICB2YXIgaWQgICAgICAgICAgICA9IGAjJHsgY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKSB9YDtcbi8vICAgICAgICAgICAgIHZhciBlbCAgICAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4vLyAgICAgICAgICAgICBsZXQgICBjdXJyZW50SGlkZGVuID0gZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuLy8gICAgICAgICAgICAgbGV0ICBoYXNGaXhlZCAgICAgICA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1maXhlZCcpID09ICdmYWxzZScgPyBmYWxzZSA6IHRydWU7XG5cbi8vICAgICAgICAgICAgIGlmKGN1cnJlbnRIaWRkZW4gIT0gJ2ZhbHNlJyAmJiBjdXJyZW50SGlkZGVuICE9ICd0cnVlJykgY3VycmVudEhpZGRlbiA9ICd0cnVlJ1xuLy8gICAgICAgICAgICAgaWYoaGFzRml4ZWQpIHtcbi8vICAgICAgICAgICAgICAgICBpZihjdXJyZW50SGlkZGVuID09PSAndHJ1ZScpICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGN1cnJlbnRIaWRkZW4gPT09ICd0cnVlJyA/IGZhbHNlIDogdHJ1ZSk7XG4vLyAgICAgICAgIH0pO1xuICAgICAgICBcbi8vICAgICB9KTtcbi8vIH07IiwiLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuLy8gICAgIHZhciBldmVudEZha2VTZWxlY3QgPSBuZXcgRXZlbnQoJ0ZBS0VTRUxFQ1QnKTtcblxuLy8gICAgICR0cmF5KGRvY3VtZW50KS5hamF4Q29tcGxldGUoKGV2ZXQsIHhociwgc2V0dGluZ3MpID0+IHtcbi8vICAgICAgICAgaWYoc2V0dGluZ3MudXJsLmluZGV4T2YoJ3ZhcmlhY2FvX2R1cGxhX2NvbXByZV9qdW50bycpICE9PSAtMSkgIHtcbi8vICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRGYWtlU2VsZWN0KTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihzZXR0aW5ncy51cmwuaW5kZXhPZignbG9hZE5leHRWYXJpYW50RHJvcERvd24nKSAhPT0gLTEpIHtcbi8vICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRGYWtlU2VsZWN0KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuXG4vLyB9IiwiLy8gLyoqXG4vLyAgKiBDdXJyZW5jeVxuLy8gICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbmN5IFxuLy8gICovXG4vLyBleHBvcnQgdmFyIGN1cnJlbmN5ID0gKGNvaW4pID0+IHtcbi8vICAgICByZXR1cm4gY29pbi50b0xvY2FsZVN0cmluZyhcInB0LUJSXCIsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyICwgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnQlJMJyB9KTtcbi8vIH1cblxuLy8gLyoqXG4vLyAgKiBEaXNwYXRjaCBFdmVudFxuLy8gICogQHBhcmFtIHtzdHJpbmd9IE5BTUUgXG4vLyAgKi9cbi8vIGV4cG9ydCB2YXIgZGlzcGF0Y2hFdmVudCA9IChOQU1FKSA9PiB7XG4vLyAgICAgdmFyIGV2dCA9IG5ldyBFdmVudChOQU1FKTtcbi8vICAgICByZXR1cm4gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldnQpO1xuLy8gfVxuXG4vLyAvKipcbi8vICAqIExpc3RlbmVyIEV2ZW50XG4vLyAgKiBAcGFyYW0ge3N0cmluZ30gTkFNRSBcbi8vICAqIEBwYXJhbSB7ZnVuY3Rpb259IENCIFxuLy8gICovXG4vLyBleHBvcnQgdmFyIGxpc3RlbmVyRXZlbnQgPSAoTkFNRSwgQ0IpID0+IHtcbi8vICAgICByZXR1cm4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihOQU1FLCBDQiwgZmFsc2UpOyBcbi8vIH0iLCJ2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XG5qUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHN0ID0galF1ZXJ5KHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0ID4gMTUwKSB7XG4gICAgICAgIGpRdWVyeSgnYm9keScpLmFkZENsYXNzKCdtb3ZpbmcnKTtcbiAgICAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCkge1xuICAgICAgICAgICAgalF1ZXJ5KCdib2R5JykuYWRkQ2xhc3MoJ21vdmluZy0tZG93bicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgalF1ZXJ5KCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vdmluZy0tZG93bicpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBqUXVlcnkoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW92aW5nJyk7XG4gICAgfVxufSk7XG4iLCJcbiBpZigkKCcuc2hvd2Nhc2VfX2xpc3RbZGF0YS1jYXJvdXNlbD10cnVlXScpKSB7XG4gICAgJCgnLnNob3djYXNlX19saXN0W2RhdGEtY2Fyb3VzZWw9dHJ1ZV0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuZmluZCgnLnNob3djYXNlX19pdGVtLS1lbXB0eScpLnJlbW92ZSgpO1xuICAgICAgICAkKHRoaXMpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XG4gICAgICAgICAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj5gLFxuICAgICAgICAgICAgbmV4dEFycm93OiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj5gLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDI0LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdICAgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuIH1cbiIsImNvbnNvbGUubG9nKCdhYWFhJyk7IiwiXG5pZigkKCcuYmFubmVyLS1qYXZhc2NyaXB0IC5iYW5uZXJfX2xpc3QnKSkge1xuJCgnLmJhbm5lci0tamF2YXNjcmlwdCAuYmFubmVyX19saXN0Jykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XG4gICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcHJldkFycm93OiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPmAsXG4gICAgbmV4dEFycm93OiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj5gLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNDI0LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0gICBcbn0pO1xufVxuaWYoJCgnLmJhbm5lci0tZ3JpZCAuYmFubmVyX19saXN0JykpIHtcbiQoJy5iYW5uZXItLWdyaWQgLmJhbm5lcl9fbGlzdCcpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xuICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBwcmV2QXJyb3c6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+YCxcbiAgICBuZXh0QXJyb3c6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPmAsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA0MjQsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSAgIFxufSk7XG59IiwiXG5cblxudmFyIGJ1dHRvbiA9ICQoJyNidC1zdWJtaXQtY29tbWVudHMnKTtcblxuaWYoYnV0dG9uKSB7XG4gICAgdmFyIGJ1dHRvbkFjdGlvbiA9ICQoYDxidXR0b24gY2xhc3M9XCJjb21tZW50c19fYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPkF2YWxpYXI8L2J1dHRvbj5gKTtcbiAgICBidXR0b24uYWZ0ZXIoYnV0dG9uQWN0aW9uKTtcblxuICAgIGJ1dHRvbkFjdGlvbi5jbGljaygoKSA9PiB7XG4gICAgICAgIGJ1dHRvbi50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0pO1xufVxuIiwiXG5cbi8vIGZ1bmN0aW9uIEZha2VTZWxlY3QoKSB7XG4vLyAgICAgJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpe1xuLy8gICAgICAgICBpZigkKHRoaXMpLmNsb3Nlc3QoJy5mYWtlLXNlbGVjdCcpLmxlbmd0aCA9PT0gMCkge1xuLy8gICAgICAgICAgICAgdmFyIHRleHQgPSAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnRleHQoKTtcbi8vICAgICAgICAgICAgIHZhciBmYWtlID0gJCgnPGRpdiBjbGFzcz1cImZha2Utc2VsZWN0XCI+Jyk7XG4vLyAgICAgICAgICAgICB2YXIgbGFiZWwgPSAkKCc8c3BhbiBjbGFzcz1cImZha2Utc2VsZWN0X19sYWJlbFwiPicpLnRleHQodGV4dCk7XG4vLyAgICAgICAgICAgICB2YXIgY3NzQ2xhc3MgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKTtcblxuLy8gICAgICAgICAgICAgY3NzQ2xhc3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGlmKGl0ZW0gIT09ICcnKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGZha2UuYWRkQ2xhc3MoaXRlbSk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSlcblxuLy8gICAgICAgICAgICAgZmFrZS5wcmVwZW5kKGxhYmVsKTtcbi8vICAgICAgICAgICAgICQodGhpcykuYWZ0ZXIoZmFrZSk7XG4vLyAgICAgICAgICAgICBmYWtlLmFwcGVuZCh0aGlzKTtcblxuLy8gICAgICAgICAgICAgJCh0aGlzKS5jaGFuZ2UoKCkgPT4geyBsYWJlbC50ZXh0KCQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpKSB9KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gfVxuXG4vLyBGYWtlU2VsZWN0KCk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0ZBS0VTRUxFQ1QnLCAoKSA9PiB7IEZha2VTZWxlY3QoKSB9LCBmYWxzZSk7IiwiXG5cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYyl7XG4gICAgdmFyIHRpbWVyO1xuICAgIHJldHVybiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGlmKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuYywyMDAsZXZlbnQpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb25IaWRkZW5SZXNpemUoKSB7XG4gICAgdmFyIHdpZHRoTmF2aWdhdGlvbiA9ICQoJy5tZW51LS1uYXZpZ2F0aW9uIC5tZW51X191bC0tbnYxJykub3V0ZXJXaWR0aCgpO1xuICAgIHZhciB3aWR0aEN1cnJlbnQgPSAwO1xuICAgICQoJy5tZW51LS1uYXZpZ2F0aW9uIC5tZW51X19pdGVtLS1udjEnKS5yZW1vdmVDbGFzcygnbWVudV9faXRlbS0taGlkZGVuJyk7XG4gICAgJCgnLm1lbnUtLW5hdmlnYXRpb24gLm1lbnVfX2l0ZW0tLW52MScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgd2lkdGhDdXJyZW50ICs9ICQodGhpcykub3V0ZXJXaWR0aCgpO1xuICAgICAgICBpZih3aWR0aEN1cnJlbnQgPiB3aWR0aE5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21lbnVfX2l0ZW0tLWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb25BbGlnbigpIHtcbiAgICAkKCcubWVudS0tbmF2aWdhdGlvbicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcubWVudS0tbnYyJykucmVtb3ZlQ2xhc3MoJ21lbnUtLXJ0bCcpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5tZW51LS1udjInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgbmF2ID0gJCh0aGlzKS5jbG9zZXN0KCcubWVudS0tbnYxJykub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIGxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQgKyAkKHRoaXMpLm91dGVyV2lkdGgoKTtcblxuICAgICAgICAgICAgaWYobGVmdCA+IG5hdikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21lbnUtLXJ0bCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxufVxuXG52YXIgY2hpbGRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbS0taGFzLWNoaWxkJykpO1xuXG5jaGlsZHMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVfX2l0ZW0tLWhhcy1jaGlsZCcpKSB7XG4gICAgICAgICAgICB2YXIgZXhwYW5kZWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICAgICAgICBpZihleHBhbmRlZCAhPT0gJ3RydWUnICYmIGV4cGFuZGVkICE9PSAnZmFsc2UnKSBleHBhbmRlZCA9ICdmYWxzZSc7XG4gICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZXhwYW5kZWQgPT09ICd0cnVlJyA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgICAgICAkKHRhcmdldCkuZmluZCgnPiAubWVudS0tc3ViJykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UoZnVuY3Rpb24oZSl7XG4gICAgbmF2aWdhdGlvbkhpZGRlblJlc2l6ZSgpO1xuICAgIG5hdmlnYXRpb25BbGlnbigpO1xufSkpO1xuXG5uYXZpZ2F0aW9uSGlkZGVuUmVzaXplKCk7XG5uYXZpZ2F0aW9uQWxpZ24oKTtcblxuXG4kKCcuYnV0dG9uLS1tZW51Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbWVudV9fb3BlbicpXG59KTtcblxuJCgnLmJ1dHRvbl9fY2xvc2UtLW5hdmlnYXRpb24nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtZW51X19vcGVuJylcbn0pOyIsIlxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcblxuLy8gICAgIHZhciB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtdGFicycpO1xuLy8gICAgIGlmKHRhYnMpe1xuLy8gICAgICAgICB2YXIgdXJscyA9IEFycmF5LmZyb20odGFicy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS11cmxdJykpO1xuXG4vLyAgICAgICAgIHVybHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuLy8gICAgICAgICAgICAgdmFyIHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpO1xuLy8gICAgICAgICAgICAgYXhpb3MuZ2V0KHVybClcbi8vICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5kYXRhKVxuLy8gICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBlbGVtZW50LmlubmVySFRNTCA9IGRhdGEpO1xuLy8gICAgICAgICB9KTtcblxuLy8gICAgICAgICB2YXIgY3VzdG9tVGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtdGFicy0tY3VzdG9tIC5wcm9kdWN0LXRhYnNfX2xpbmsnKSk7XG5cbi8vICAgICAgICAgY3VzdG9tVGFicy5mb3JFYWNoKChjdXN0b21UYWIpID0+IHtcbi8vICAgICAgICAgICAgIGN1c3RvbVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbi8vICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IGV2dC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBoYXNoID0gaHJlZi5tYXRjaCgvXlteI10qIyguKikvKVsxXTtcblxuLy8gICAgICAgICAgICAgICAgIGlmKGhhc2gpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZEJveCcpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHsgaGFzaCB9YCk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgY29udGVudHMuZm9yRWFjaCgoY29udGVudCkgPT4gY29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZScpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudCkgY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVGFicy5mb3JFYWNoKChjdXN0b21UYWIpID0+IGN1c3RvbVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdvbicpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZXZ0LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnb24nKTtcblxuLy8gICAgICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgIGlmKGN1c3RvbVRhYnMubGVuZ3RoKSB7XG4vLyAgICAgICAgICAgICBjdXN0b21UYWJzWzBdLmNsYXNzTGlzdC5hZGQoJ29uJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9KTtcblxuIiwiXG4gXG4kKCcucnVsZXJzX19saXN0Jykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XG4gICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBwcmV2QXJyb3c6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+YCxcbiAgICBuZXh0QXJyb3c6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPmAsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMDIzLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0gICBcbn0pOyIsIlxuXG52YXIgJCA9ICR0cmF5O1xuaWYoIHR5cGVvZiAkID09ICdmdW5jdGlvbicpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAkKHdpbmRvdykuYWpheENvbXBsZXRlKGZ1bmN0aW9uKCBldmVudCwgeGhyLCBzZXR0aW5ncyApe1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBpZihzZXR0aW5ncy51cmwuaW5kZXhPZigndmFyaWFudF9nYWxsZXJ5JykgIT09ICAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkVGh1bWIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsb2FkVGh1bWIoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uICBsb2FkVGh1bWIoKSB7XG4gICAgICAgIHZhciAgdGh1bWJzICA9ICAkKCcucHJvZHV0by1pbWFnZW0tbWluaWF0dXJhcycpO1xuXG4gICAgICAgIGlmKHRodW1icy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRodW1icy5oaWRlKCk7XG5cbiAgICAgICAgICAgIHZhciAgIGltYWdlcyAgPSAgdGh1bWJzLmZpbmQoJ2ltZywgLmljb24tdmlkZW8nKTtcbiAgICAgICAgICAgIGxldCAgICAgaHRtbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoJCgnLnRodW1icycpLmxlbmd0aCkgJCgnLnRodW1icycpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBpZihpbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaHRtbCAgPSAgYDxkaXYgY2xhc3M9XCJ0aHVtYnNcIj5gO1xuICAgICAgICAgICAgICAgIGh0bWwgICs9ICBgPHVsIGNsYXNzPVwidGh1bWJzX19saXN0XCI+YDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbWFnZXMuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaHRtbCAgKz0gIGNyZWF0ZVRodW1iKCQoaXRlbSkuYXR0cignc3JjJyksIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGh0bWwgICs9ICBgPC91bD5gO1xuICAgICAgICAgICAgICAgIGh0bWwgICs9ICBgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICB0aHVtYnMuYWZ0ZXIoaHRtbCk7XG5cbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKFwidGh1bWJzOnN0YXJ0XCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoJy50aHVtYnMgYScpLmNsaWNrKChldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gJChldnQuY3VycmVudFRhcmdldCkuYXR0cignZGF0YS1pbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFRodW1iKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGV2dC5jdXJyZW50VGFyZ2V0KS5maW5kKCcudGh1bWJfX3ZpZGVvJykubGVuZ3RoKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbFZpZGVvJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgkKCdhJywgdGh1bWJzKS5lcShpbmRleCkpLm1vdXNlb3ZlcigpLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY29sVmlkZW8nKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XHRcdFx0XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2VsZWN0VGh1bWIoJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzZWxlY3RUaHVtYihpbmRleCkge1xuICAgICAgICAkKGAudGh1bWJzIGxpYCkucmVtb3ZlQ2xhc3MoJ3RodW1ic19faXRlbS0tYWN0aXZlZCcpO1xuICAgICAgICAkKGAudGh1bWJzIFtkYXRhLWluZGV4PSR7aW5kZXh9XWApLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ3RodW1ic19faXRlbS0tYWN0aXZlZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICBjcmVhdGVUaHVtYihzcmMsaW5kZXgpIHtcbiAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgcmV0dXJuICBgPGxpIGNsYXNzPVwidGh1bWJzX19pdGVtXCI+PGEgY2xhc3M9XCJ0aHVtYnNfX2xpbmtcIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIiBocmVmPVwiIyR7aW5kZXh9XCI+PGltZyBjbGFzcz1cInRodW1ic19faW1hZ2VcIiBzcmM9XCIke3NyY31cIiAvPjwvYT48L2xpPmA7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJ0aHVtYnNfX2l0ZW1cIj48YSBjbGFzcz1cInRodW1ic19fbGlua1wiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiIGhyZWY9XCIjJHtpbmRleH1cIj48c3BhbiBjbGFzcz1cInRodW1iX192aWRlb1wiPjwvc3Bhbj48L2E+PC9saT5gO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==