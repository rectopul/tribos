
 
document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("body");CustomEvent(),Scrolling(),objectFitImages(),Aria(),t.classList.remove("preload"),$tray("[data-tray-login]").click(t=>{t.preventDefault(),$tray("tray-login").show()})},!1);
// import Scrolling from './plugins/scrolling';
// import Aria from './plugins/aria';
// import objectFitImages from 'object-fit-images';
// import CustomEvent from './plugins/custom-events';

document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');

    // Custom Events
    CustomEvent();

    // Add Scrolling page body
    Scrolling();

    // Object Fit
    objectFitImages();

    // Aria 
    Aria();

    // Add Class After load
    body.classList.remove('preload');

    $tray('[data-tray-login]').click((evt) => { evt.preventDefault(); $tray('tray-login').show(); });

}, false);
export const CART_UPDATE="TRAY:CART_UPDATE";
export const CART_UPDATE = 'TRAY:CART_UPDATE';
export default()=>{const e=Array.from(document.querySelectorAll("[aria-controls]")),t=document.querySelector("body");e.forEach(e=>{e.addEventListener("click",e=>{const r=`#${e.currentTarget.getAttribute("aria-controls")}`,a=document.querySelector(r);let d=a.getAttribute("aria-hidden");"false"!=d&&"true"!=d&&(d="true"),"false"!=a.getAttribute("data-fixed")&&("true"===d?t.classList.add("fixed"):t.classList.remove("fixed")),a.setAttribute("aria-hidden","true"!==d)})})};
export default () => {
    const controls = Array.from(document.querySelectorAll('[aria-controls]'));
    const body     = document.querySelector('body');

    controls.forEach((control) => {
        control.addEventListener('click', (evt) => { 
            const currentTarget = evt.currentTarget;
            const id            = `#${ currentTarget.getAttribute('aria-controls') }`;
            const el            = document.querySelector(id);
            let   currentHidden = el.getAttribute('aria-hidden');
            let  hasFixed       = el.getAttribute('data-fixed') == 'false' ? false : true;

            if(currentHidden != 'false' && currentHidden != 'true') currentHidden = 'true'
            if(hasFixed) {
                if(currentHidden === 'true')                            body.classList.add('fixed');
                else                                                    body.classList.remove('fixed');
            }

            el.setAttribute('aria-hidden', currentHidden === 'true' ? false : true);
        });
        
    });
};
export default()=>{const t=new Event("FAKESELECT");$tray(document).ajaxComplete((e,a,n)=>{-1!==n.url.indexOf("variacao_dupla_compre_junto")&&document.dispatchEvent(t),-1!==n.url.indexOf("loadNextVariantDropDown")&&document.dispatchEvent(t)})};
export default () => {
    const eventFakeSelect = new Event('FAKESELECT');

    $tray(document).ajaxComplete((evet, xhr, settings) => {
        if(settings.url.indexOf('variacao_dupla_compre_junto') !== -1)  {
            document.dispatchEvent(eventFakeSelect);
        }
        if(settings.url.indexOf('loadNextVariantDropDown') !== -1) {
            document.dispatchEvent(eventFakeSelect);
        }
    });

}
export const currency=t=>t.toLocaleString("pt-BR",{minimumFractionDigits:2,style:"currency",currency:"BRL"});export const dispatchEvent=t=>{const e=new Event(t);return document.dispatchEvent(e)};export const listenerEvent=(t,e)=>document.addEventListener(t,e,!1);
/**
 * Currency
 * @param {string} currency 
 */
export const currency = (coin) => {
    return coin.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
}

/**
 * Dispatch Event
 * @param {string} NAME 
 */
export const dispatchEvent = (NAME) => {
    const evt = new Event(NAME);
    return document.dispatchEvent(evt);
}

/**
 * Listener Event
 * @param {string} NAME 
 * @param {function} CB 
 */
export const listenerEvent = (NAME, CB) => {
    return document.addEventListener(NAME, CB, false); 
}
export default()=>{const t=document.querySelector("body");let e=0,o=0,r=document.querySelector("#header").offsetHeight;t.setAttribute("data-scrolling",!1),t.setAttribute("data-scrolling-mode","none"),window.addEventListener("scroll",()=>{0==(e=window.pageYOffset)?t.setAttribute("data-scrolling",!1):t.setAttribute("data-scrolling",!0),e>r?(o>e?t.setAttribute("data-scrolling-mode","up"):o<e?t.setAttribute("data-scrolling-mode","down"):t.setAttribute("data-scrolling-mode","none"),o=e):t.setAttribute("data-scrolling-mode","none")})};
export default () => {
    const body       = document.querySelector('body');
    let currentTop = 0;
    let oldTop     = 0;
    let headerTop  = document.querySelector('#header').offsetHeight;

    body.setAttribute('data-scrolling', false);
    body.setAttribute('data-scrolling-mode', 'none');

    window.addEventListener('scroll', () => { 
        currentTop = window.pageYOffset;
        
        if(currentTop == 0)     body.setAttribute('data-scrolling', false);
        else                    body.setAttribute('data-scrolling', true);

        if(currentTop > headerTop) {
            if(oldTop > currentTop) {
                body.setAttribute('data-scrolling-mode', 'up');
            } else if (oldTop < currentTop) {   
                body.setAttribute('data-scrolling-mode', 'down');
            } else {
                body.setAttribute('data-scrolling-mode', 'none'); 
            }
            oldTop = currentTop;
        } else body.setAttribute('data-scrolling-mode', 'none');
    });

}


console.log("aaaa");
console.log('aaaa');














import stickybits from"stickybits";document.addEventListener("DOMContentLoaded",()=>{stickybits("#header")});

import stickybits from 'stickybits';

document.addEventListener("DOMContentLoaded", () => {
    stickybits('#header');
});





import"./svg/auaha.svg";
import './svg/auaha.svg';

import"./style.styl";
import './style.styl'
import"slick-carousel";$(".showcase__list[data-carousel=true]").each(function(){$(this).find(".showcase__item--empty").remove(),$(this).slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',responsive:[{breakpoint:424,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:767,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:991,settings:{slidesToShow:5,slidesToScroll:5}}]})});

import 'slick-carousel';

$('.showcase__list[data-carousel=true]').each(function(){
    $(this).find('.showcase__item--empty').remove();
    $(this).slick({
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
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5   
                }
            }
        ]   
    });
});

import"./style.styl";
import './style.styl'
import"slick-carousel/slick/slick.css";import"slick-carousel";$(".banner--javascript .banner__list").slick({prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'}),$(".banner--grid .banner__list").slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',responsive:[{breakpoint:424,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:767,settings:{slidesToShow:4,slidesToScroll:4}}]});

import 'slick-carousel/slick/slick.css';
import 'slick-carousel';

$('.banner--javascript .banner__list').slick({
    prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`
});

$('.banner--grid .banner__list').slick({
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






const button=$("#bt-submit-comments");if(button){const t=$('<button class="comments__button" type="button">Avaliar</button>');button.after(t),t.click(()=>{button.trigger("click")})}



const button = $('#bt-submit-comments');

if(button) {
    const buttonAction = $(`<button class="comments__button" type="button">Avaliar</button>`);
    button.after(buttonAction);

    buttonAction.click(() => {
        button.trigger('click');
    });
}



 
function FakeSelect(){$("select").each(function(){if(0===$(this).closest(".fake-select").length){const e=$(this).find("option:selected").text(),t=$('<div class="fake-select">'),s=$('<span class="fake-select__label">').text(e);$(this).attr("class").split(" ").forEach(e=>{""!==e&&t.addClass(e)}),t.prepend(s),$(this).after(t),t.append(this),$(this).change(()=>{s.text($(this).find("option:selected").text())})}})}FakeSelect(),document.addEventListener("FAKESELECT",()=>{FakeSelect()},!1);


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




function debounce(n){var e;return function(i){e&&clearTimeout(e),e=setTimeout(n,200,i)}}function navigationHiddenResize(){const n=$(".menu--navigation .menu__ul--nv1").outerWidth();let e=0;$(".menu--navigation .menu__item--nv1").removeClass("menu__item--hidden"),$(".menu--navigation .menu__item--nv1").each(function(){(e+=$(this).outerWidth())>n&&$(this).addClass("menu__item--hidden")})}function navigationAlign(){$(".menu--navigation").each(function(){$(this).find(".menu--nv2").removeClass("menu--rtl"),$(this).find(".menu--nv2").each(function(){const n=$(this).closest(".menu--nv1").outerWidth();$(this).offset().left+$(this).outerWidth()>n&&$(this).addClass("menu--rtl")})})}const childs=Array.from(document.querySelectorAll(".menu__item--has-child"));childs.forEach(n=>{n.addEventListener("click",n=>{const e=n.target;if(e.classList.contains("menu__item--has-child")){let n=e.getAttribute("aria-expanded");"true"!==n&&"false"!==n&&(n="false"),e.setAttribute("aria-expanded","true"!==n),$(e).find("> .menu--sub").slideToggle()}},!1)}),window.addEventListener("resize",debounce(function(n){navigationHiddenResize(),navigationAlign()})),navigationHiddenResize(),navigationAlign();



function debounce(func){
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func,200,event);
    };
}

function navigationHiddenResize() {
    const widthNavigation = $('.menu--navigation .menu__ul--nv1').outerWidth();
    let widthCurrent = 0;
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
            const nav = $(this).closest('.menu--nv1').outerWidth();
            const left = $(this).offset().left + $(this).outerWidth();

            if(left > nav) {
                
                $(this).addClass('menu--rtl');
            }
        });
    })
}

const childs = Array.from(document.querySelectorAll('.menu__item--has-child'));

childs.forEach((child) => {
    child.addEventListener('click', (evt) => {
        const target = evt.target;
        if(target.classList.contains('menu__item--has-child')) {
            let expanded = target.getAttribute('aria-expanded');
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










import axios from"axios";document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".product-tabs");if(t){Array.from(t.querySelectorAll("[data-url]")).forEach(t=>{const e=t.getAttribute("data-url");axios.get(e).then(t=>t.data).then(e=>t.innerHTML=e)});const e=Array.from(document.querySelectorAll(".product-tabs--custom .product-tabs__link"));e.forEach(t=>{t.addEventListener("click",t=>{const r=t.currentTarget.getAttribute("href").match(/^[^#]*#(.*)/)[1];if(r){const o=Array.from(document.querySelectorAll(".prodBox")),a=document.querySelector(`#${r}`);o.forEach(t=>t.setAttribute("style","display:none")),a&&a.setAttribute("style","display: block"),e.forEach(t=>t.classList.remove("on")),t.currentTarget.classList.add("on")}t.preventDefault()})}),e.length&&e[0].classList.add("on")}});

import axios from 'axios';

document.addEventListener("DOMContentLoaded", function(){

    const tabs = document.querySelector('.product-tabs');
    if(tabs){
        const urls = Array.from(tabs.querySelectorAll('[data-url]'));

        urls.forEach((element) => {
            const url = element.getAttribute('data-url');
            axios.get(url)
                .then((data) => data.data)
                .then((data) => element.innerHTML = data);
        });

        const customTabs = Array.from(document.querySelectorAll('.product-tabs--custom .product-tabs__link'));

        customTabs.forEach((customTab) => {
            customTab.addEventListener('click', (evt) => {
                const href = evt.currentTarget.getAttribute('href');
                const hash = href.match(/^[^#]*#(.*)/)[1];

                if(hash) {
                    const contents = Array.from(document.querySelectorAll('.prodBox'));
                    const current = document.querySelector(`#${ hash }`);

                    contents.forEach((content) => content.setAttribute('style', 'display:none'));
                    if(current) current.setAttribute('style', 'display: block');

                    customTabs.forEach((customTab) => customTab.classList.remove('on'));
                    evt.currentTarget.classList.add('on');

                }

                evt.preventDefault();
            });
        });

        if(customTabs.length) {
            customTabs[0].classList.add('on');
        }
    }
});




import"slick-carousel";$(".rulers__list").slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,infinite:!1,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',responsive:[{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1023,settings:{slidesToShow:4,slidesToScroll:4}}]});

import 'slick-carousel';

$('.rulers__list').slick({
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

 




const $=$tray;if("function"==typeof $){function loadThumb(){const t=$(".produto-imagem-miniaturas");if(t.length){t.hide();const e=t.find("img, .icon-video");let a;$(".thumbs").length&&$(".thumbs").remove(),e.length&&(a='<div class="thumbs">',a+='<ul class="thumbs__list">',e.each((t,e)=>{a+=createThumb($(e).attr("src"),t)}),a+="</ul>",a+="</div>",t.after(a),$(document).trigger("thumbs:start"),$(".thumbs a").click(e=>{let a=$(e.currentTarget).attr("data-index");selectThumb(a),$(e.currentTarget).find(".thumb__video").length?$("#colVideo").show():($($("a",t).eq(a)).mouseover().click(),$("#colVideo").hide()),e.preventDefault()}),selectThumb("0"))}}function selectThumb(t){$(".thumbs li").removeClass("thumbs__item--actived"),$(`.thumbs [data-index=${t}]`).closest("li").addClass("thumbs__item--actived")}function createThumb(t,e){return t?`<li class="thumbs__item"><a class="thumbs__link" data-index="${e}" href="#${e}"><img class="thumbs__image" src="${t}" /></a></li>`:`<li class="thumbs__item"><a class="thumbs__link" data-index="${e}" href="#${e}"><span class="thumb__video"></span></a></li>`}$(document).ready(function(){$(window).ajaxComplete(function(t,e,a){a&&-1!==a.url.indexOf("variant_gallery")&&loadThumb()}),loadThumb()})}


const $ = $tray;
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
        const  thumbs  =  $('.produto-imagem-miniaturas');

        if(thumbs.length) {
            thumbs.hide();

            const   images  =  thumbs.find('img, .icon-video');
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





 
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5taW4uanMiLCJhcHAuanMiLCJjb3JlL2luZGV4LmpzIiwiY29yZS9jb25maWcvZXZlbnRzLmpzIiwiY29yZS9wbHVnaW5zL2FyaWEuanMiLCJjb3JlL3BsdWdpbnMvY3VzdG9tLWV2ZW50cy5qcyIsImNvcmUvcGx1Z2lucy9pbmRleC5qcyIsImNvcmUvcGx1Z2lucy9zY3JvbGxpbmcuanMiLCJhc3NldHMvcGFnZXMvcGFnZS1ob21lL2luZGV4LmpzIiwiYXNzZXRzL21vZHVsZXMvaGVhZGVyL2luZGV4LmpzIiwiYXNzZXRzL21vZHVsZXMvcGFydG5lcnMvaW5kZXguanMiLCJhc3NldHMvbW9kdWxlcy9wcm9kdWN0cy12aXNpdGVkL2luZGV4LmpzIiwiYXNzZXRzL21vZHVsZXMvc2hvd2Nhc2UvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvYXR0ZW5kYW5jZS9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9iYW5uZXIvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvY29tbWVudHMvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvZmFrZS1zZWxlY3QvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvbWVudS9pbmRleC5qcyIsImFzc2V0cy9zbmlwcGV0cy9wcm9kdWN0LXRhYnMvaW5kZXguanMiLCJhc3NldHMvc25pcHBldHMvcnVsZXJzL2luZGV4LmpzIiwiYXNzZXRzL3NuaXBwZXRzL3RodW1icy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsIkN1c3RvbUV2ZW50IiwiU2Nyb2xsaW5nIiwib2JqZWN0Rml0SW1hZ2VzIiwiQXJpYSIsImNsYXNzTGlzdCIsInJlbW92ZSIsIiR0cmF5IiwiY2xpY2siLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsInNob3ciLCJDQVJUX1VQREFURSIsImNvbnRyb2xzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjb250cm9sIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiZWwiLCJjdXJyZW50SGlkZGVuIiwiYWRkIiwic2V0QXR0cmlidXRlIiwiaGFzRml4ZWQiLCJldmVudEZha2VTZWxlY3QiLCJFdmVudCIsImFqYXhDb21wbGV0ZSIsImV2ZXQiLCJ4aHIiLCJzZXR0aW5ncyIsInVybCIsImluZGV4T2YiLCJkaXNwYXRjaEV2ZW50IiwiY3VycmVuY3kiLCJjb2luIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJzdHlsZSIsIk5BTUUiLCJsaXN0ZW5lckV2ZW50IiwiQ0IiLCJjdXJyZW50VG9wIiwib2xkVG9wIiwiaGVhZGVyVG9wIiwib2Zmc2V0SGVpZ2h0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjb25zb2xlIiwibG9nIiwic3RpY2t5Yml0cyIsIiQiLCJlYWNoIiwidGhpcyIsImZpbmQiLCJzbGljayIsIm1vYmlsZUZpcnN0Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImJ1dHRvbiIsImJ1dHRvbkFjdGlvbiIsImFmdGVyIiwidHJpZ2dlciIsIkZha2VTZWxlY3QiLCJjbG9zZXN0IiwibGVuZ3RoIiwidGV4dCIsImZha2UiLCJsYWJlbCIsImF0dHIiLCJzcGxpdCIsIml0ZW0iLCJhZGRDbGFzcyIsInByZXBlbmQiLCJhcHBlbmQiLCJjaGFuZ2UiLCJjc3NDbGFzcyIsImRlYm91bmNlIiwiZnVuYyIsInRpbWVyIiwiZXZlbnQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwibmF2aWdhdGlvbkhpZGRlblJlc2l6ZSIsIndpZHRoTmF2aWdhdGlvbiIsIm91dGVyV2lkdGgiLCJ3aWR0aEN1cnJlbnQiLCJyZW1vdmVDbGFzcyIsIm5hdmlnYXRpb25BbGlnbiIsIm5hdiIsIm9mZnNldCIsImxlZnQiLCJjaGlsZHMiLCJjaGlsZCIsInRhcmdldCIsImNvbnRhaW5zIiwiZXhwYW5kZWQiLCJzbGlkZVRvZ2dsZSIsImUiLCJheGlvcyIsInRhYnMiLCJlbGVtZW50IiwiZ2V0IiwidGhlbiIsImRhdGEiLCJpbm5lckhUTUwiLCJjdXN0b21UYWJzIiwiY3VzdG9tVGFiIiwiaGFzaCIsIm1hdGNoIiwiY29udGVudHMiLCJjdXJyZW50IiwiY29udGVudCIsInVybHMiLCJocmVmIiwiaW5maW5pdGUiLCJsb2FkVGh1bWIiLCJ0aHVtYnMiLCJoaWRlIiwiaW1hZ2VzIiwiaHRtbCIsImluZGV4IiwiY3JlYXRlVGh1bWIiLCJzZWxlY3RUaHVtYiIsImVxIiwibW91c2VvdmVyIiwic3JjIiwicmVhZHkiXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUNLQUEsU0FBU0MsaUJBQWlCLG1CQUFvQixLQUMxQyxNQUFNQyxFQUFPRixTQUFTRyxjQUFjLFFBR3BDQyxjQUdBQyxZQUdBQyxrQkFHQUMsT0FHQUwsRUFBS00sVUFBVUMsT0FBTyxXQUV0QkMsTUFBTSxxQkFBcUJDLE1BQU9DLElBQVVBLEVBQUlDLGlCQUFrQkgsTUFBTSxjQUFjSSxXQUV2Rjs7O0FBekJIO0FBQ0E7QUFDQTtBQUNBO0FBRUFkLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYixDQURnRCxDQUdoRDs7QUFDQUMsRUFBQUEsV0FBVyxHQUpxQyxDQU1oRDs7QUFDQUMsRUFBQUEsU0FBUyxHQVB1QyxDQVNoRDs7QUFDQUMsRUFBQUEsZUFBZSxHQVZpQyxDQVloRDs7QUFDQUMsRUFBQUEsSUFBSSxHQWI0QyxDQWVoRDs7QUFDQUwsRUFBQUEsSUFBSSxDQUFDTSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsU0FBdEI7QUFFQUMsRUFBQUEsS0FBSyxDQUFDLG1CQUFELENBQUwsQ0FBMkJDLEtBQTNCLENBQWlDLFVBQUNDLEdBQUQsRUFBUztBQUFFQSxJQUFBQSxHQUFHLENBQUNDLGNBQUo7QUFBc0JILElBQUFBLEtBQUssQ0FBQyxZQUFELENBQUwsQ0FBb0JJLElBQXBCO0FBQTZCLEdBQS9GO0FBRUgsQ0FwQkQsRUFvQkcsS0FwQkg7Ozs7T0NMTyxNQUFNQyxZQUFjOztjQ0FaLEtBQ1gsTUFBTUMsRUFBV0MsTUFBTUMsS0FBS2xCLFNBQVNtQixpQkFBaUIsb0JBQ2hEakIsRUFBV0YsU0FBU0csY0FBYyxRQUV4Q2EsRUFBU0ksUUFBU0MsSUFDZEEsRUFBUXBCLGlCQUFpQixRQUFVVyxJQUMvQixNQUNNVSxNQURnQlYsRUFBSVcsY0FDZUMsYUFBYSxtQkFDaERDLEVBQWdCekIsU0FBU0csY0FBY21CLEdBQzdDLElBQU1JLEVBQWdCRCxFQUFHRCxhQUFhLGVBR2xCLFNBQWpCRSxHQUE2QyxRQUFqQkEsSUFBeUJBLEVBQWdCLFFBRmpCLFNBQWpDRCxFQUFHRCxhQUFhLGdCQUliLFNBQWxCRSxFQUFxRHhCLEVBQUtNLFVBQVVtQixJQUFJLFNBQ25CekIsRUFBS00sVUFBVUMsT0FBTyxVQUdsRmdCLEVBQUdHLGFBQWEsY0FBaUMsU0FBbEJGOzs7OztBRGxCcEMsSUFBTVgsV0FBVyxHQUFHLGtCQUFwQjs7O2VDQVEsb0JBQU07QUFDakIsTUFBTUMsUUFBUSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV2xCLFFBQVEsQ0FBQ21CLGdCQUFULENBQTBCLGlCQUExQixDQUFYLENBQWpCO0FBQ0EsTUFBTWpCLElBQUksR0FBT0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLE1BQXZCLENBQWpCO0FBRUFhLEVBQUFBLFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQixVQUFDQyxPQUFELEVBQWE7QUFDMUJBLElBQUFBLE9BQU8sQ0FBQ3BCLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUNXLEdBQUQsRUFBUztBQUN2QyxVQUFNVyxhQUFhLEdBQUdYLEdBQUcsQ0FBQ1csYUFBMUI7QUFDQSxVQUFNRCxFQUFFLGNBQW1CQyxhQUFhLENBQUNDLFlBQWQsQ0FBMkIsZUFBM0IsQ0FBbkIsQ0FBUjtBQUNBLFVBQU1DLEVBQUUsR0FBY3pCLFFBQVEsQ0FBQ0csYUFBVCxDQUF1Qm1CLEVBQXZCLENBQXRCO0FBQ0EsVUFBTUksYUFBYSxHQUFHRCxFQUFFLENBQUNELFlBQUgsQ0FBZ0IsYUFBaEIsQ0FBdEI7QUFDQSxVQUFLSyxRQUFRLEdBQVNKLEVBQUUsQ0FBQ0QsWUFBSCxDQUFnQixZQUFoQixLQUFpQyxPQUFqQyxHQUEyQyxLQUEzQyxHQUFtRCxJQUF6RTtBQUVBLFVBQUdFLGFBQWEsSUFBSSxPQUFqQixJQUE0QkEsYUFBYSxJQUFJLE1BQWhELEVBQXdEQSxhQUFhLEdBQUcsTUFBaEI7O0FBQ3hELFVBQUdHLFFBQUgsRUFBYTtBQUNULFlBQUdILGFBQWEsS0FBSyxNQUFyQixFQUF3RHhCLElBQUksQ0FBQ00sU0FBTCxDQUFlbUIsR0FBZixDQUFtQixPQUFuQixFQUF4RCxLQUN3RHpCLElBQUksQ0FBQ00sU0FBTCxDQUFlQyxNQUFmLENBQXNCLE9BQXRCO0FBQzNEOztBQUVEZ0IsTUFBQUEsRUFBRSxDQUFDRyxLQ2xCQSxLQUNYLEVEaUJRLENBQWdCLEdDakJsQkUsRUFBa0IsSUFBSUMsSURpQnBCLEVBQStCTCxBQ2pCTCxhRGlCa0IsQ0NmcERoQixJRGV5RCxFQ2ZuRFYsSURlaUMsR0FBMkIsR0NmbERnQyxFRGV1QixHQUFtQyxJQUFsRSxJQ2ZxQixDQUFDQyxFQUFNQyxFQUFLQyxNQUN1QixJQUF6REEsRUFBU0MsSUFBSUMsUUFBUSxnQ0FDcEJyQyxTQUFTc0MsY0FBY1IsSUFFNkIsSUFBckRLLEVBQVNDLElBQUlDLFFBQVEsNEJBQ3BCckMsU0FBU3NDLGNBQWNSO0FEVzFCLEtBZEQ7QUFnQkgsR0FqQkQ7QUFrQkgsQzs7Ozs7ZUN0QmMsb0JBQU07QUFDakIsTUFBTUEsZUFBZSxHQUFHLElBQUlDLEtBQUosQ0FBVSxZQUFWLENBQXhCO0FBRUFyQixFQUFBQSxLQUFLLENBQUNWLFFBQUQsQ0FBTCxDQUFnQmdDLFlBQWhCLENBQTZCLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFZQyxRQUFaLEVBQXlCO0FBQ2xELFFBQUdBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhQyxPQUFiLENBQXFCLDZCQUFyQixNQUF3RCxDQUFDLENBQTVELEVBQWdFO0FBQzVEckMsTUFBQUEsUUFBUSxDQUFDc0MsYUFBVCxDQUF1QlIsZUFBdkI7QUFDSDtPQ0ZGLE1BQU1TLFNBQVlDLEdBQ2RBLEVBQUtDLGVBQWUsUUFBUyxDQUFFQyxzQkFBdUIsRUFBSUMsTUFBTyxXQUFZSixTQUFVLGVBTzNGLE1BQU1ELGNBQWlCTSxJQUMxQixNQUFNaEMsRUFBTSxJQUFJbUIsTUFBTWEsR0FDdEIsT0FBTzVDLFNBQVNzQyxjQUFjMUIsV0FRM0IsTUFBTWlDLGNBQWdCLENBQUNELEVBQU1FLElBQ3pCOUMsU0FBU0MsaUJBQWlCMkMsRUFBTUUsR0FBSTtBRGhCdkMsUUFBR1gsUUFBUSxDQUFDQyxHQUFULENBQWFDLE9BQWIsQ0FBcUIseUJBQXJCLE1BQW9ELENBQUMsQ0FBeEQsRUFBMkQ7QUFDdkRyQyxNQUFBQSxRQUFRLENBQUNzQyxhQUFULENBQXVCUixlQUF2QjtBQUNIO0FBQ0osR0FQRDtBQVNILEM7OztBQ1pEOzs7O0FBSU8sSUFBTVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQzlCLFNBQU9BLElBQUksQ0FBQ0MsY0FBTCxDQUFvQixPQUFwQixFQUE2QjtBQUFFQyxJQUFBQSxxQkFBcUIsRUFBRSxDQUF6QjtBQUE2QkMsSUFBQUEsS0FBSyxFQUFFLFVBQXBDO0FBQWdESixJQUFBQSxRQUFRLEVBQUU7QUFBMUQsR0FBN0IsQ0FBUDtBQUNILENBRk07QUFJUDs7Ozs7OztjQ1JlLEtBQ1gsTUFBTXJDLEVBQWFGLFNBQVNHLGNBQWMsUUFDMUMsSUFBSTRDLEVBQWEsRUFDYkMsRUFBYSxFQUNiQyxFQUFhakQsU0FBU0csY0FBYyxXQUFXK0MsYUFFbkRoRCxFQUFLMEIsYUFBYSxrQkFBa0IsR0FDcEMxQixFQUFLMEIsYUFBYSxzQkFBdUIsUUFFekN1QixPQUFPbEQsaUJBQWlCLFNBQVUsS0FHYixJQUZqQjhDLEVBQWFJLE9BQU9DLGFBRUlsRCxFQUFLMEIsYUFBYSxrQkFBa0IsR0FDcEMxQixFQUFLMEIsYUFBYSxrQkFBa0IsR0FFekRtQixFQUFhRSxHQUNURCxFQUFTRCxFQUNSN0MsRUFBSzBCLGFBQWEsc0JBQXVCLE1BQ2xDb0IsRUFBU0QsRUFDaEI3QyxFQUFLMEIsYUFBYSxzQkFBdUIsUUFFekMxQixFQUFLMEIsYUFBYSxzQkFBdUIsUUFFN0NvQixFQUFTRCxHQUNON0MsRUFBSzBCLGFBQWEsc0JBQXVCO0FEWmpELElBQU1VLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ00sSUFBRCxFQUFVO0FBQ25DLE1BQU1oQyxHQUFHLEdBQUcsSUFBSW1CLEtBQUosQ0FBVWEsSUFBVixDQUFaO0FBQ0EsU0FBTzVDLFFBQVEsQ0FBQ3NDLGFBQVQsQ0FBdUIxQixHQUF2QixDQUFQO0FBQ0gsQ0FITTtBQUtQOzs7ZUNqQmUsb0JBQU07QUFDakIsTUFBTVYsSUFBSSxHQUFTRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbkI7QUFDQSxNQUFJNEMsVUFBVSxHQUFHLENBQWpCO0FBQ0EsTUFBSUMsTUFBTSxHQUFPLENBQWpCO0FBQ0EsTUFBSUMsU0FBUyxHQUFJakQsUUFBUSxDQUFDRyxhQUFULENBQXVCLFNBQXZCLEVBQWtDK0MsWUFBbkQ7QUFFQWhELEVBQUFBLElBQUksQ0FBQzBCLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DLEtBQXBDO0FEZ0JHLEFDZkgxQixFQUFBQSxFRGVTMkMsRUNmTCxDQUFDakIsVURlaUIsRUNmdEIsQ0RleUIsQUNmUCxTRGVUaUIsWUNmVCxDRGV5QixDQUFDRCxBQ2ZlLElEZWhCLEVBQU9FLEFDZmhDLEVEZXlCLEVBQWM7QUFDdkMsQUNkQUssRUFBQUEsTUFBTSxDRGNDbkQsQUNkQUMsUURjUSxDQUFDQSxPQ2RoQixDQUF3QixRRGNqQixBQ2RQLENEY2lDMkMsQ0NkQyxHRGMzQixFQUFnQ0UsRUFBaEMsRUFBb0MsR0NkSCxFRGNqQyxDQUFQO0FBQ0gsQUNkT0MsQ0RZRCxHQ1pDQSxVQUFVLEdBQUdJLE1BQU0sQ0FBQ0MsV0FBcEI7QUFFQSxRQUFHTCxVQUFVLElBQUksQ0FBakIsRUFBd0I3QyxJQUFJLENBQUMwQixZQUFMLENBQWtCLGdCQUFsQixFQUFvQyxLQUFwQyxFQUF4QixLQUN3QjFCLElBQUksQ0FBQzBCLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DLElBQXBDOztBQUV4QixRQUFHbUIsVUFBVSxHQUFHRSxTQUFoQixFQUEyQjtBQUN2QixVQUFHRCxNQUFNLEdBQUdELFVBQVosRUFBd0I7QUFDcEI3QyxRQUFBQSxJQUFJLENBQUMwQixZQUFMLENBQWtCLHFCQUFsQixFQUF5QyxJQUF6QztBQUNILE9BRkQsTUFFTyxJQUFJb0IsTUFBTSxHQUFHRCxVQUFiLEVBQXlCO0FBQzVCN0MsUUFBQUEsSUFBSSxDQUFDMEIsWUFBTCxDQUFrQixxQkFBbEIsRUFBeUMsTUFBekM7QUFDSCxPQUZNLE1BRUE7QUFDSDFCLFFBQUFBLElBQUksQ0FBQzBCLFlBQUwsQ0FBa0IscUJBQWxCLEVBQXlDLE1BQXpDO0FBQ0g7O0FBQ0RvQixNQUFBQSxNQUFNLEdBQUdELFVBQVQ7QVB2QlosQU93QlMsS0FURCxNQVNPN0MsSUFBSSxDQUFDMEIsWUFBTCxDQUFrQixxQkFBbEIsRUFBeUMsTUFBekM7QU54QmYsQU15QkssR0FoQkQ7QUNUSnlCLEFEMkJDLEMsT0MzQk9DLElBQUk7O0FSQVo7QUNBQSxBT0FBRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FSQUE7QUNBQTtBREFBO0FDQUE7QURBQTtBQ0FBO0FEQUE7QUNBQTtBREFBO0FDQUE7QURBQTtBQ0FBO09RQ09DLGVBQWdCLGFBRXZCdkQsU0FBU0MsaUJBQWlCLG1CQUFvQixLQUMxQ3NELFdBQVc7OztBQUhmOzs7O0FBRUF2RCxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FUSHBELEFTSUksOEJBQVcsU0FBWDtBUkpKLEFRS0MsQ0FGRDtBVEhBO0FDQUE7TVNBTzs7O0FBQVAsTUNBTzs7TUNDQSxpQkFFUHVELEVBQUUsdUNBQXVDQyxLQUFLLFdBQzFDRCxFQUFFRSxNQUFNQyxLQUFLLDBCQUEwQmxELFNBQ3ZDK0MsRUFBRUUsTUFBTUUsTUFBTSxDQUNWQyxhQUFhLEVBQ2JDLGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJDLFVBQVcsd0ZBQ1hDLFVBQVcseUZBQ1hDLFdBQVksQ0FDUixDQUNJQyxXQUFZLElBQ1poQyxTQUFVLENBQ04yQixhQUFjLEVBQ2RDLGVBQWdCLElBR3hCLENBQ0lJLFdBQVksSUFDWmhDLFNBQVUsQ0FDTjJCLGFBQWMsRUFDZEMsZUFBZ0IsSUFHeEIsQ0FDSUksV0FBWSxJQUNaaEMsU0FBVSxDQUNOMkIsYUFBYyxFQUNkQyxlQUFnQjtBRDlCcEM7O0FDQ0E7O0FBRUFQLENBQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDQyxJQUF6QyxDQUE4QyxZQUFVO0FBQ3BERCxFQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLElBQVIsQ0FBYSx3QkFBYixFQUF1Q2xELE1BQXZDO0FBQ0ErQyxFQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLEtBQVIsQ0FBYztBQUNWQyxJQUFBQSxXQUFXLEVBQUUsSUFESDtBQUVWQyxJQUFBQSxZQUFZLEVBQUUsQ0FGSjtBQUdWQyxJQUFBQSxjQUFjLEVBQUUsQ0FITjtBQUlWQyxJQUFBQSxTQUFTLCtGQUpDO0FBS1ZDLElBQUFBLFNBQVMsZ0dBTEM7QUFNVkMsSUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFDSUMsTUFBQUEsVUFBVSxFQUFFLEdBRGhCO0FBRUloQyxNQUFBQSxRQUFRLEVBQUU7QUFDTjJCLFFBQUFBLFlBQVksRUFBRSxDQURSO0FBRU5DLFFBQUFBLGNBQWMsRUFBRTtBQUZWO0FBRmQsS0FEUSxFQVFSO0FBQ0lJLE1BQUFBLFVBQVUsRUFBRSxHQURoQjtBQUVJaEMsTUFBQUEsUUFBUSxFQUFFO0FBQ04yQixRQUFBQSxZQUFZLEVBQUUsQ0FEUjtBQUVOQyxRQUFBQSxjQUFjLEVBQUU7QUFGVjtBQUZkLEtBUlEsRUFlUjtBQUNJSSxNQUFBQSxVQUFVLEVBQUUsR0FEaEI7QUFFSWhDLE1BQUFBLFFBQVEsRUFBRTtBQUNOMkIsUUFBQUEsWUFBWSxFQUFFLENBRFI7QUFFTkMsUUFBQUEsY0FBYyxFQUFFO0FBRlY7QUFGZCxLQWZRO0FBTkYsR0FBZDtBQThCSCxDQWhDRDs7Ozs7TUNITzs7TUNDQSx1Q0FDQSxpQkFFUFAsRUFBRSxxQ0FBcUNJLE1BQU0sQ0FDekNJLFVBQVcsd0ZBQ1hDLFVBQVcsMkZBR2ZULEVBQUUsK0JBQStCSSxNQUFNLENBQ25DQyxhQUFhLEVBQ2JDLGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJDLFVBQVcsd0ZBQ1hDLFVBQVcseUZBQ1hDLFdBQVksQ0FDUixDQUNJQyxXQUFZLElBQ1poQyxTQUFVLENBQ04yQixhQUFjLEVBQ2RDLGVBQWdCLElBR3hCLENBQ0lJLFdBQVksSUFDWmhDLFNBQVUsQ0FDTjJCLGFBQWMsRUFDZEMsZUFBZ0I7QUQzQmhDOztBQ0NBOztBQUNBOztBQUVBUCxDQUFDLENBQUMsbUNBQUQsQ0FBRCxDQUF1Q0ksS0FBdkMsQ0FBNkM7QUFDekNJLEVBQUFBLFNBQVMsK0ZBRGdDO0FBRXpDQyxFQUFBQSxTQUFTO0FBRmdDLENBQTdDO0FBS0FULENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDSSxLQUFqQyxDQUF1QztBQUNuQ0MsRUFBQUEsV0FBVyxFQUFFLElBRHNCO0FBRW5DQyxFQUFBQSxZQUFZLEVBQUUsQ0FGcUI7QUFHbkNDLEVBQUFBLGNBQWMsRUFBRSxDQUhtQjtBQUluQ0MsRUFBQUEsU0FBUywrRkFKMEI7QUFLbkNDLEVBQUFBLFNBQVMsZ0dBTDBCO0FBTW5DQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNJQyxJQUFBQSxVQUFVLEVBQUUsR0FEaEI7QUFFSWhDLElBQUFBLFFBQVEsRUFBRTtBQUNOMkIsTUFBQUEsWUFBWSxFQUFFLENBRFI7QUFFTkMsTUFBQUEsY0FBYyxFQUFFO0FBRlY7QUFGZCxHQURRLEVBUVI7QUFDSUksSUFBQUEsVUFBVSxFQUFFLEdBRGhCO0FBRUloQyxJQUFBQSxRQUFRLEVBQUU7QUFDTjJCLE1BQUFBLFlBQVksRUFBRSxDQURSO0FBRU5DLE1BQUFBLGNBQWMsRUFBRTtBQUZWO0FBRmQsR0FSUTtBQU51QixDQUF2Qzs7O0FkVEE7QUNBQTtBREFBO0FDQUE7QURBQTtBQ0FBO0FjR0EsTUFBTUssT0FBU1osRUFBRSx1QkFFakIsR0FBR1ksT0FBUSxDQUNQLE1BQU1DLEVBQWViLEVBQUUsbUVBQ3ZCWSxPQUFPRSxNQUFNRCxHQUViQSxFQUFhMUQsTUFBTSxLQUNmeUQsT0FBT0csUUFBUTs7O0FBUHZCLElBQU1ILE1BQU0sR0FBR1osQ0FBQyxDQUFDLHFCQUFELENBQWhCOztBQUVBLElBQUdZLE1BQUgsRUFBVztBQUNQLE1BQU1DLFlBQVksR0FBR2IsQ0FBQyx1RUFBdEI7QUFDQVksRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFELFlBQWI7QUFFQUEsRUFBQUEsWUFBWSxDQUFDMUQsS0FBYixDQUFtQixZQUFNO0FBQ3JCeUQsSUFBQUEsTUFBTSxDQUFDRyxPQUFQLENBQWUsT0FBZjtBQUNILEdBRkQ7QUFHSDs7OztBZlpEO0FDQUE7QUFDQTtBZUNBLFNBQVNDLGFBQ0xoQixFQUFFLFVBQVVDLEtBQUssV0FDYixHQUE4QyxJQUEzQ0QsRUFBRUUsTUFBTWUsUUFBUSxnQkFBZ0JDLE9BQWMsQ0FDN0MsTUFBTUMsRUFBT25CLEVBQUVFLE1BQU1DLEtBQUssbUJBQW1CZ0IsT0FDdkNDLEVBQU9wQixFQUFFLDZCQUNUcUIsRUFBUXJCLEVBQUUscUNBQXFDbUIsS0FBS0EsR0FDekNuQixFQUFFRSxNQUFNb0IsS0FBSyxTQUFTQyxNQUFNLEtBRXBDM0QsUUFBUzRELElBQ0YsS0FBVEEsR0FDQ0osRUFBS0ssU0FBU0QsS0FJdEJKLEVBQUtNLFFBQVFMLEdBQ2JyQixFQUFFRSxNQUFNWSxNQUFNTSxHQUNkQSxFQUFLTyxPQUFPekIsTUFFWkYsRUFBRUUsTUFBTTBCLE9BQU8sS0FBUVAsRUFBTUYsS0FBS25CLEVBQUVFLE1BQU1DLEtBQUssbUJBQW1CZ0IsYUFLOUVILGFBRUF4RSxTQUFTQyxpQkFBaUIsYUFBYyxLQUFRdUUsZUFBZ0I7OztBQXpCaEUsU0FBU0EsVUFBVCxHQUFzQjtBQUNsQmhCLEVBQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWUMsSUFBWixDQUFpQixZQUFVO0FBQUE7O0FBQ3ZCLFFBQUdELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlCLE9BQVIsQ0FBZ0IsY0FBaEIsRUFBZ0NDLE1BQWhDLEtBQTJDLENBQTlDLEVBQWlEO0FBQzdDLFVBQU1DLElBQUksR0FBR25CLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUixDQUFhLGlCQUFiLEVBQWdDZ0IsSUFBaEMsRUFBYjtBQUNBLFVBQU1DLElBQUksR0FBR3BCLENBQUMsQ0FBQywyQkFBRCxDQUFkO0FBQ0EsVUFBTXFCLEtBQUssR0FBR3JCLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDbUIsSUFBdkMsQ0FBNENBLElBQTVDLENBQWQ7QUFDQSxVQUFNVSxRQUFRLEdBQUc3QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQixJQUFSLENBQWEsT0FBYixFQUFzQkMsS0FBdEIsQ0FBNEIsR0FBNUIsQ0FBakI7QUFFQU0sTUFBQUEsUUFBUSxDQUFDakUsT0FBVCxDQUFpQixVQUFDNEQsSUFBRCxFQUFVO0FBQ3ZCLFlBQUdBLElBQUksS0FBSyxFQUFaLEVBQWdCO0FBQ1pKLFVBQUFBLElBQUksQ0FBQ0ssUUFBTCxDQUFjRCxJQUFkO0FBQ0g7QUFDSixPQUpEO0FBTUFKLE1BQUFBLElBQUksQ0FBQ00sT0FBTCxDQUFhTCxLQUFiO0FBQ0FyQixNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLEtBQVIsQ0FBY00sSUFBZDtBQUNBQSxNQUFBQSxJQUFJLENBQUNPLE1BQUwsQ0FBWSxJQUFaO0FBRUEzQixNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QixNQUFSLENBQWUsWUFBTTtBQUFFUCxRQUFBQSxLQUFLLENBQUNGLElBQU4sQ0FBV25CLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUUcsSUFBUixDQUFhLGlCQUFiLEVBQWdDZ0IsSUFBaEMsRUFBWDtBQUFvRCxPQUEzRTtBQUNIO0FBQ0osR0FuQkQ7QUFvQkg7O0FBRURILFVBQVU7QUFFVnhFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0MsWUFBTTtBaEIzQjlDLEFnQjJCZ0R1RSxFQUFBQSxVQUFVO0FmM0IxRCxBZTJCOEQsQ0FBOUQsRUFBZ0UsS0FBaEU7QWhCM0JBO0FDQUE7QWdCR0EsU0FBU2MsU0FBU0MsR0FDZCxJQUFJQyxFQUNKLE9BQU8sU0FBU0MsR0FDVEQsR0FBT0UsYUFBYUYsR0FDdkJBLEVBQVFHLFdBQVdKLEVBQUssSUFBSUUsSUFJcEMsU0FBU0cseUJBQ0wsTUFBTUMsRUFBa0JyQyxFQUFFLG9DQUFvQ3NDLGFBQzlELElBQUlDLEVBQWUsRUFDbkJ2QyxFQUFFLHNDQUFzQ3dDLFlBQVksc0JBQ3BEeEMsRUFBRSxzQ0FBc0NDLEtBQUssWUFDekNzQyxHQUFnQnZDLEVBQUVFLE1BQU1vQyxjQUNORCxHQUNkckMsRUFBRUUsTUFBTXVCLFNBQVMsd0JBSzdCLFNBQVNnQixrQkFDTHpDLEVBQUUscUJBQXFCQyxLQUFLLFdBQ3hCRCxFQUFFRSxNQUFNQyxLQUFLLGNBQWNxQyxZQUFZLGFBQ3ZDeEMsRUFBRUUsTUFBTUMsS0FBSyxjQUFjRixLQUFLLFdBQzVCLE1BQU15QyxFQUFNMUMsRUFBRUUsTUFBTWUsUUFBUSxjQUFjcUIsYUFDN0J0QyxFQUFFRSxNQUFNeUMsU0FBU0MsS0FBTzVDLEVBQUVFLE1BQU1vQyxhQUVuQ0ksR0FFTjFDLEVBQUVFLE1BQU11QixTQUFTLGlCQU1qQyxNQUFNb0IsT0FBU3BGLE1BQU1DLEtBQUtsQixTQUFTbUIsaUJBQWlCLDJCQUVwRGtGLE9BQU9qRixRQUFTa0YsSUFDWkEsRUFBTXJHLGlCQUFpQixRQUFVVyxJQUM3QixNQUFNMkYsRUFBUzNGLEVBQUkyRixPQUNuQixHQUFHQSxFQUFPL0YsVUFBVWdHLFNBQVMseUJBQTBCLENBQ25ELElBQUlDLEVBQVdGLEVBQU8vRSxhQUFhLGlCQUNuQixTQUFiaUYsR0FBb0MsVUFBYkEsSUFBc0JBLEVBQVcsU0FDM0RGLEVBQU8zRSxhQUFhLGdCQUE4QixTQUFiNkUsR0FDckNqRCxFQUFFK0MsR0FBUTVDLEtBQUssZ0JBQWdCK0MsaUJBRXBDLEtBR1B2RCxPQUFPbEQsaUJBQWlCLFNBQVVxRixTQUFTLFNBQVNxQixHQUNoRGYseUJBQ0FLLHFCQUdKTCx5QkFDQUs7OztBQXZEQSxTQUFTWCxRQUFULENBQWtCQyxJQUFsQixFQUF1QjtBQUNuQixNQUFJQyxLQUFKO0FBQ0EsU0FBTyxVQUFTQyxLQUFULEVBQWU7QUFDbEIsUUFBR0QsS0FBSCxFQUFVRSxZQUFZLENBQUNGLEtBQUQsQ0FBWjtBQUNWQSxJQUFBQSxLQUFLLEdBQUdHLFVBQVUsQ0FBQ0osSUFBRCxFQUFNLEdBQU4sRUFBVUUsS0FBVixDQUFsQjtBQUNILEdBSEQ7QUFJSDs7QUFFRCxTQUFTRyxzQkFBVCxHQUFrQztBQUM5QixNQUFNQyxlQUFlLEdBQUdyQyxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ3NDLFVBQXRDLEVBQXhCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLENBQW5CO0FBQ0F2QyxFQUFBQSxDQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q3dDLFdBQXhDLENBQW9ELG9CQUFwRDtBQUNBeEMsRUFBQUEsQ0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NDLElBQXhDLENBQTZDLFlBQVU7QUFDbkRzQyxJQUFBQSxZQUFZLElBQUl2QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQyxVQUFSLEVBQWhCOztBQUNBLFFBQUdDLFlBQVksR0FBR0YsZUFBbEIsRUFBbUM7QUFDL0JyQyxNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixRQUFSLENBQWlCLG9CQUFqQjtBQUNIO0FBQ0osR0FMRDtBQU1IOztBQUVELFNBQVNnQixlQUFULEdBQTJCO0FBQ3ZCekMsRUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJDLElBQXZCLENBQTRCLFlBQVU7QUFDbENELElBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUixDQUFhLFlBQWIsRUFBMkJxQyxXQUEzQixDQUF1QyxXQUF2QztBQUNBeEMsSUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEsWUFBYixFQUEyQkYsSUFBM0IsQ0FBZ0MsWUFBVTtBQUN0QyxVQUFNeUMsR0FBRyxHQUFHMUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUIsT0FBUixDQUFnQixZQUFoQixFQUE4QnFCLFVBQTlCLEVBQVo7QUFDQSxVQUFNTSxJQUFJLEdBQUc1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEyQyxNQUFSLEdBQWlCQyxJQUFqQixHQUF3QjVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNDLFVBQVIsRUFBckM7O0FBRUEsVUFBR00sSUFBSSxHQUFHRixHQUFWLEVBQWU7QUFFWDFDLFFBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlCLFFBQVIsQ0FBaUIsV0FBakI7QUFDSDtBQUNKLEtBUkQ7QUFTSCxHQVhEO0FBWUg7O0FBRUQsSUFBTW9CLE1BQU0sR0FBR3BGLEtBQUssQ0FBQ0MsSUFBTixDQUFXbEIsUUFBUSxDQUFDbUIsZ0JBQVQsQ0FBMEIsd0JBQTFCLENBQVgsQ0FBZjtBQUVBa0YsTUFBTSxDQUFDakYsT0FBUCxDQUFlLFVBQUNrRixLQUFELEVBQVc7QUFDdEJBLEVBQUFBLEtBQUssQ0FBQ3JHLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUNXLEdBQUQsRUFBUztBQUNyQyxRQUFNMkYsTUFBTSxHQUFHM0YsR0FBRyxDQUFDMkYsTUFBbkI7O0FBQ0EsUUFBR0EsTUFBTSxDQUFDL0YsU0FBUCxDQUFpQmdHLFFBQWpCLENBQTBCLHVCQUExQixDQUFILEVBQXVEO0FBQ25ELFVBQUlDLFFBQVEsR0FBR0YsTUFBTSxDQUFDL0UsWUFBUCxDQUFvQixlQUFwQixDQUFmO0FBQ0EsVUFBR2lGLFFBQVEsS0FBSyxNQUFiLElBQXVCQSxRQUFRLEtBQUssT0FBdkMsRUFBZ0RBLFFBQVEsR0FBRyxPQUFYO0FBQ2hERixNQUFBQSxNQUFNLENBQUMzRSxZQUFQLENBQW9CLGVBQXBCLEVBQXFDNkUsUUFBUSxLQUFLLE1BQWIsR0FBc0IsS0FBdEIsR0FBOEIsSUFBbkU7QUFDQWpELE1BQUFBLENBQUMsQ0FBQytDLE1BQUQsQ0FBRCxDQUFVNUMsSUFBVixDQUFlLGNBQWYsRUFBK0IrQyxXQUEvQjtBQUNIO0FBQ0osR0FSRCxFQVFHLEtBUkg7QUFTSCxDQVZEO0FBWUF2RCxNQUFNLENBQUNsRCxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ3FGLFFBQVEsQ0FBQyxVQUFTcUIsQ0FBVCxFQUFXO0FBQ2xEZixFQUFBQSxzQkFBc0I7QUFDdEJLLEVBQUFBLGVBQWU7QUFDbEIsQ0FIeUMsQ0FBMUM7QUFLQUwsc0JBQXNCO0FBQ3RCSyxlQUFlOzs7Ozs7QWpCMURmO0FDQUE7QURBQTtBQ0FBO0FEQUE7QUNBQTtBREFBO0FDQUE7T2lCQ09XLFVBQVcsUUFFbEI1RyxTQUFTQyxpQkFBaUIsbUJBQW9CLFdBRTFDLE1BQU00RyxFQUFPN0csU0FBU0csY0FBYyxpQkFDcEMsR0FBRzBHLEVBQUssQ0FDUzVGLE1BQU1DLEtBQUsyRixFQUFLMUYsaUJBQWlCLGVBRXpDQyxRQUFTMEYsSUFDVixNQUFNMUUsRUFBTTBFLEVBQVF0RixhQUFhLFlBQ2pDb0YsTUFBTUcsSUFBSTNFLEdBQ0w0RSxLQUFNQyxHQUFTQSxFQUFLQSxNQUNwQkQsS0FBTUMsR0FBU0gsRUFBUUksVUFBWUQsS0FHNUMsTUFBTUUsRUFBYWxHLE1BQU1DLEtBQUtsQixTQUFTbUIsaUJBQWlCLDhDQUV4RGdHLEVBQVcvRixRQUFTZ0csSUFDaEJBLEVBQVVuSCxpQkFBaUIsUUFBVVcsSUFDakMsTUFDTXlHLEVBRE96RyxFQUFJVyxjQUFjQyxhQUFhLFFBQzFCOEYsTUFBTSxlQUFlLEdBRXZDLEdBQUdELEVBQU0sQ0FDTCxNQUFNRSxFQUFXdEcsTUFBTUMsS0FBS2xCLFNBQVNtQixpQkFBaUIsYUFDaERxRyxFQUFVeEgsU0FBU0csa0JBQW1Ca0gsS0FFNUNFLEVBQVNuRyxRQUFTcUcsR0FBWUEsRUFBUTdGLGFBQWEsUUFBUyxpQkFDekQ0RixHQUFTQSxFQUFRNUYsYUFBYSxRQUFTLGtCQUUxQ3VGLEVBQVcvRixRQUFTZ0csR0FBY0EsRUFBVTVHLFVBQVVDLE9BQU8sT0FDN0RHLEVBQUlXLGNBQWNmLFVBQVVtQixJQUFJLE1BSXBDZixFQUFJQyxxQkFJVHNHLEVBQVd6QyxRQUNWeUMsRUFBVyxHQUFHM0csVUFBVW1CLElBQUk7OztBQXZDeEM7Ozs7QUFFQTNCLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVU7QUFFcEQsTUFBTTRHLElBQUksR0FBRzdHLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixlQUF2QixDQUFiOztBQUNBLE1BQUcwRyxJQUFILEVBQVE7QUFDSixRQUFNYSxJQUFJLEdBQUd6RyxLQUFLLENBQUNDLElBQU4sQ0FBVzJGLElBQUksQ0FBQzFGLGdCQUFMLENBQXNCLFlBQXRCLENBQVgsQ0FBYjtBQUVBdUcsSUFBQUEsSUFBSSxDQUFDdEcsT0FBTCxDQUFhLFVBQUMwRixPQUFELEVBQWE7QUFDdEIsVUFBTTFFLEdBQUcsR0FBRzBFLE9BQU8sQ0FBQ3RGLFlBQVIsQ0FBcUIsVUFBckIsQ0FBWjs7QUFDQW9GLHdCQUFNRyxHQUFOLENBQVUzRSxHQUFWLEVBQ0s0RSxJQURMLENBQ1UsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ0EsSUFBZjtBQUFBLE9BRFYsRUFFS0QsSUFGTCxDQUVVLFVBQUNDLElBQUQ7QUFBQSxlQUFVSCxPQUFPLENBQUNJLFNBQVIsR0FBb0JELElBQTlCO0FBQUEsT0FGVjtBQUdILEtBTEQ7QUFPQSxRQUFNRSxVQUFVLEdBQUdsRyxLQUFLLENBQUNDLElBQU4sQ0FBV2xCLFFBQVEsQ0FBQ21CLGdCQUFULENBQTBCLDJDQUExQixDQUFYLENBQW5CO0FBRUFnRyxJQUFBQSxVQUFVLENBQUMvRixPQUFYLENBQW1CLFVBQUNnRyxTQUFELEVBQWU7QUFDOUJBLE1BQUFBLFNBQVMsQ0FBQ25ILGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUNXLEdBQUQsRUFBUztBQUN6QyxZQUFNK0csSUFBSSxHQUFHL0csR0FBRyxDQUFDVyxhQUFKLENBQWtCQyxZQUFsQixDQUErQixNQUEvQixDQUFiO0FBQ0EsWUFBTTZGLElBQUksR0FBR00sSUFBSSxDQUFDTCxLQUFMLENBQVcsYUFBWCxFQUEwQixDQUExQixDQUFiOztBQUVBLFlBQUdELElBQUgsRUFBUztBQUNMLGNBQU1FLFFBQVEsR0FBR3RHLEtBQUssQ0FBQ0MsSUFBTixDQUFXbEIsUUFBUSxDQUFDbUIsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBWCxDQUFqQjtBQUNBLGNBQU1xRyxPQUFPLEdBQUd4SCxRQUFRLENBQUNHLGFBQVQsWUFBNEJrSCxJQUE1QixFQUFoQjtBQUVBRSxVQUFBQSxRQUFRLENBQUNuRyxPQUFULENBQWlCLFVBQUNxRyxPQUFEO0FBQUEsbUJBQWFBLE9BQU8sQ0FBQzdGLFlBQVIsQ0FBcUIsT0FBckIsRUFBOEIsY0FBOUIsQ0FBYjtBQUFBLFdBQWpCO0FBQ0EsY0FBRzRGLE9BQUgsRUFBWUEsT0FBTyxDQUFDNUYsWUFBUixDQUFxQixPQUFyQixFQUE4QixnQkFBOUI7QUFFWnVGLFVBQUFBLFVBQVUsQ0FBQy9GLE9BQVgsQ0FBbUIsVUFBQ2dHLFNBQUQ7QUFBQSxtQkFBZUEsU0FBUyxDQUFDNUcsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsSUFBM0IsQ0FBZjtBQUFBLFdBQW5CO0FBQ0FHLFVBQUFBLEdBQUcsQ0FBQ1csYUFBSixDQUFrQmYsU0FBbEIsQ0FBNEJtQixHQUE1QixDQUFnQyxJQUFoQztBQUVIOztBQUVEZixRQUFBQSxHQUFHLENBQUNDLGNBQUo7QUFDSCxPQWpCRDtBQWtCSCxLQW5CRDs7QUFxQkEsUUFBR3NHLFVBQVUsQ0FBQ3pDLE1BQWQsRUFBc0I7QUFDbEJ5QyxNQUFBQSxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWMzRyxTQUFkLENBQXdCbUIsR0FBeEIsQ0FBNEIsSUFBNUI7QUFDSDtBbEJ6Q1QsQWtCMENLO0FqQjFDTCxBaUIyQ0MsQ0F4Q0Q7TUNGTyxpQkFFUDZCLEVBQUUsaUJBQWlCSSxNQUFNLENBQ3JCQyxhQUFhLEVBQ2JDLGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEI2RCxVQUFVLEVBQ1Y1RCxVQUFXLHdGQUNYQyxVQUFXLHlGQUNYQyxXQUFZLENBQ1IsQ0FDSUMsV0FBWSxJQUNaaEMsU0FBVSxDQUNOMkIsYUFBYyxFQUNkQyxlQUFnQixJQUd4QixDQUNJSSxXQUFZLElBQ1poQyxTQUFVLENBQ04yQixhQUFjLEVBQ2RDLGVBQWdCLElBR3hCLENBQ0lJLFdBQVksS0FDWmhDLFNBQVUsQ0FDTjJCLGFBQWMsRUFDZEMsZUFBZ0I7OztBQTVCaEM7O0FBRUFQLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJJLEtBQW5CLENBQXlCO0FBQ3JCQyxFQUFBQSxXQUFXLEVBQUUsSUFEUTtBQUVyQkMsRUFBQUEsWUFBWSxFQUFFLENBRk87QUFHckJDLEVBQUFBLGNBQWMsRUFBRSxDQUhLO0FBSXJCNkQsRUFBQUEsUUFBUSxFQUFFLEtBSlc7QUFLckI1RCxFQUFBQSxTQUFTLCtGQUxZO0FBTXJCQyxFQUFBQSxTQUFTLGdHQU5ZO0FBT3JCQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNJQyxJQUFBQSxVQUFVLEVBQUUsR0FEaEI7QUFFSWhDLElBQUFBLFFBQVEsRUFBRTtBQUNOMkIsTUFBQUEsWUFBWSxFQUFFLENBRFI7QUFFTkMsTUFBQUEsY0FBYyxFQUFFO0FBRlY7QUFGZCxHQURRLEVBUVI7QUFDSUksSUFBQUEsVUFBVSxFQUFFLEdBRGhCO0FBRUloQyxJQUFBQSxRQUFRLEVBQUU7QUFDTjJCLE1BQUFBLFlBQVksRUFBRSxDQURSO0FBRU5DLE1BQUFBLGNBQWMsRUFBRTtBQUZWO0FBRmQsR0FSUSxFQWVSO0FBQ0lJLElBQUFBLFVBQVUsRUFBRSxJQURoQjtBQUVJaEMsSUFBQUEsUUFBUSxFQUFFO0FBQ04yQixNQUFBQSxZQUFZLEVBQUUsQ0FEUjtBQUVOQyxNQUFBQSxjQUFjLEVBQUU7QUFGVjtBQUZkLEdBZlE7QUFQUyxDQUF6Qjs7OztBbkJIQTtBQ0FBO0FEQUE7QUNBQTtBREFBO0FDQUE7QW1CRUEsTUFBTVAsRUFBSTlDLE1BQ1YsR0FBZ0IsbUJBQUw4QyxFQUFpQixDQVl4QixTQUFVcUUsWUFDTixNQUFPQyxFQUFXdEUsRUFBRSw4QkFFcEIsR0FBR3NFLEVBQU9wRCxPQUFRLENBQ2RvRCxFQUFPQyxPQUVQLE1BQVFDLEVBQVdGLEVBQU9uRSxLQUFLLG9CQUMvQixJQUFRc0UsRUFFTHpFLEVBQUUsV0FBV2tCLFFBQVFsQixFQUFFLFdBQVcvQyxTQUVsQ3VILEVBQU90RCxTQUNOdUQsRUFBUyx1QkFDVEEsR0FBVSw0QkFFVkQsRUFBT3ZFLEtBQUssQ0FBQ3lFLEVBQU9sRCxLQUNoQmlELEdBQVVFLFlBQVkzRSxFQUFFd0IsR0FBTUYsS0FBSyxPQUFRb0QsS0FHL0NELEdBQVUsUUFDVkEsR0FBVSxTQUNWSCxFQUFPeEQsTUFBTTJELEdBRWJ6RSxFQUFFeEQsVUFBVXVFLFFBQVEsZ0JBRXBCZixFQUFFLGFBQWE3QyxNQUFPQyxJQUNsQixJQUFJc0gsRUFBUTFFLEVBQUU1QyxFQUFJVyxlQUFldUQsS0FBSyxjQUV0Q3NELFlBQVlGLEdBRVIxRSxFQUFFNUMsRUFBSVcsZUFBZW9DLEtBQUssaUJBQWlCZSxPQUMzQ2xCLEVBQUUsYUFBYTFDLFFBRWYwQyxFQUFFQSxFQUFFLElBQUtzRSxHQUFRTyxHQUFHSCxJQUFRSSxZQUFZM0gsUUFDeEM2QyxFQUFFLGFBQWF1RSxRQUVuQm5ILEVBQUlDLG1CQUdSdUgsWUFBWSxPQUt4QixTQUFTQSxZQUFZRixHQUNqQjFFLEVBQUUsY0FBY3dDLFlBQVkseUJBQzVCeEMseUJBQXlCMEUsTUFBVXpELFFBQVEsTUFBTVEsU0FBUyx5QkFHOUQsU0FBVWtELFlBQVlJLEVBQUlMLEdBQ3RCLE9BQUlLLGtFQUN3RUwsYUFBaUJBLHNDQUEwQ0ssaUZBRTVETCxhQUFpQkEsaURBaEVoRzFFLEVBQUV4RCxVQUFVd0ksTUFBTSxXQUNkaEYsRUFBRUwsUUFBUW5CLGFBQWEsU0FBVXlELEVBQU92RCxFQUFLQyxHQUN0Q0EsSUFDa0QsSUFBOUNBLEVBQVNDLElBQUlDLFFBQVEsb0JBQ3BCd0YsY0FJWkE7OztBQVZSLElBQU1yRSxDQUFDLEdBQUc5QyxLQUFWOztBQUNBLElBQUksT0FBTzhDLENBQVAsSUFBWSxVQUFoQixFQUE0QjtBQUFBLE1BWWRxRSxTQVpjLEdBWXhCLFNBQVVBLFNBQVYsR0FBc0I7QUFDbEIsUUFBT0MsTUFBTSxHQUFLdEUsQ0FBQyxDQUFDLDRCQUFELENBQW5COztBQUVBLFFBQUdzRSxNQUFNLENBQUNwRCxNQUFWLEVBQWtCO0FBQ2RvRCxNQUFBQSxNQUFNLENBQUNDLElBQVA7QUFFQSxVQUFRQyxNQUFNLEdBQUtGLE1BQU0sQ0FBQ25FLElBQVAsQ0FBWSxrQkFBWixDQUFuQjtBQUNBLFVBQVFzRSxJQUFSO0FBRUEsVUFBR3pFLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWtCLE1BQWhCLEVBQXdCbEIsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhL0MsTUFBYjs7QUFFeEIsVUFBR3VILE1BQU0sQ0FBQ3RELE1BQVYsRUFBa0I7QUFDZHVELFFBQUFBLElBQUksMkJBQUo7QUFDQUEsUUFBQUEsSUFBSSxpQ0FBSjtBQUVBRCxRQUFBQSxNQUFNLENBQUN2RSxJQUFQLENBQVksVUFBQ3lFLEtBQUQsRUFBUWxELElBQVIsRUFBaUI7QUFDekJpRCxVQUFBQSxJQUFJLElBQU1FLFdBQVcsQ0FBQzNFLENBQUMsQ0FBQ3dCLElBQUQsQ0FBRCxDQUFRRixJQUFSLENBQWEsS0FBYixDQUFELEVBQXNCb0QsS0FBdEIsQ0FBckI7QUFDSCxTQUZEO0FBSUFELFFBQUFBLElBQUksV0FBSjtBQUNBQSxRQUFBQSxJQUFJLFlBQUo7QUFDQUgsUUFBQUEsTUFBTSxDQUFDeEQsS0FBUCxDQUFhMkQsSUFBYjtBQUVBekUsUUFBQUEsQ0FBQyxDQUFDeEQsUUFBRCxDQUFELENBQVl1RSxPQUFaLENBQW9CLGNBQXBCO0FBRUFmLFFBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTdDLEtBQWYsQ0FBcUIsVUFBQ0MsR0FBRCxFQUFTO0FBQzFCLGNBQUlzSCxLQUFLLEdBQUcxRSxDQUFDLENBQUM1QyxHQUFHLENBQUNXLGFBQUwsQ0FBRCxDQUFxQnVELElBQXJCLENBQTBCLFlBQTFCLENBQVo7QUFFQXNELFVBQUFBLFdBQVcsQ0FBQ0YsS0FBRCxDQUFYOztBQUVBLGNBQUkxRSxDQUFDLENBQUM1QyxHQUFHLENBQUNXLGFBQUwsQ0FBRCxDQUFxQm9DLElBQXJCLENBQTBCLGVBQTFCLEVBQTJDZSxNQUEvQyxFQUF1RDtBQUNuRGxCLFlBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTFDLElBQWY7QUFDSCxXQUZELE1BRU87QUFDSDBDLFlBQUFBLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLEdBQUQsRUFBTXNFLE1BQU4sQ0FBRCxDQUFlTyxFQUFmLENBQWtCSCxLQUFsQixDQUFELENBQUQsQ0FBNEJJLFNBQTVCLEdBQXdDM0gsS0FBeEM7QUFDQTZDLFlBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXVFLElBQWY7QUFDSDs7QUFDRG5ILFVBQUFBLEdBQUcsQ0FBQ0MsY0FBSjtBQUNILFNBWkQ7QUFjQXVILFFBQUFBLFdBQVcsQ0FBQyxHQUFELENBQVg7QUFDSDtBQUNKO0FBQ0osR0F0RHVCOztBQUFBLE1Bd0RmQSxXQXhEZSxHQXdEeEIsU0FBU0EsV0FBVCxDQUFxQkYsS0FBckIsRUFBNEI7QUFDeEIxRSxJQUFBQSxDQUFDLGNBQUQsQ0FBZ0J3QyxXQUFoQixDQUE0Qix1QkFBNUI7QUFDQXhDLElBQUFBLENBQUMsK0JBQXdCMEUsS0FBeEIsT0FBRCxDQUFtQ3pELE9BQW5DLENBQTJDLElBQTNDLEVBQWlEUSxRQUFqRCxDQUEwRCx1QkFBMUQ7QUFDSCxHQTNEdUI7O0FBQUEsTUE2RGRrRCxXQTdEYyxHQTZEeEIsU0FBVUEsV0FBVixDQUFzQkksR0FBdEIsRUFBMEJMLEtBQTFCLEVBQWlDO0FBQzdCLFFBQUlLLEdBQUosRUFBUztBQUNMLHlGQUF3RUwsS0FBeEUsd0JBQXlGQSxLQUF6RixtREFBbUlLLEdBQW5JO0FBQ0gsS0FGRCxNQUVLO0FBQ0QseUZBQXVFTCxLQUF2RSx3QkFBd0ZBLEtBQXhGO0FBQ0g7QUFDSixHQW5FdUI7O0FBQ3hCMUUsRUFBQUEsQ0FBQyxDQUFDeEQsUUFBRCxDQUFELENBQVl3SSxLQUFaLENBQWtCLFlBQVU7QUFDeEJoRixJQUFBQSxDQUFDLENBQUNMLE1BQUQsQ0FBRCxDQUFVbkIsWUFBVixDQUF1QixVQUFVeUQsS0FBVixFQUFpQnZELEdBQWpCLEVBQXNCQyxRQUF0QixFQUFnQztBQUNuRCxVQUFHQSxRQUFILEVBQWE7QUFDVCxZQUFHQSxRQUFRLENBQUNDLEdBQVQsQ0FBYUMsT0FBYixDQUFxQixpQkFBckIsTUFBNkMsQ0FBQyxDQUFqRCxFQUFvRDtBQUNoRHdGLFVBQUFBLFNBQVM7QUFDWjtBQUNKO0FBQ0osS0FORDtBQU9BQSxJQUFBQSxTQUFTO0FBQ1osR0FURDtBQW1FSDs7Ozs7OztBcEJ2RUQ7QUNBQTtBREFBO0FDQUE7QURBQTtBQ0FBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLCIvLyBpbXBvcnQgU2Nyb2xsaW5nIGZyb20gJy4vcGx1Z2lucy9zY3JvbGxpbmcnO1xuLy8gaW1wb3J0IEFyaWEgZnJvbSAnLi9wbHVnaW5zL2FyaWEnO1xuLy8gaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tICdvYmplY3QtZml0LWltYWdlcyc7XG4vLyBpbXBvcnQgQ3VzdG9tRXZlbnQgZnJvbSAnLi9wbHVnaW5zL2N1c3RvbS1ldmVudHMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIC8vIEN1c3RvbSBFdmVudHNcbiAgICBDdXN0b21FdmVudCgpO1xuXG4gICAgLy8gQWRkIFNjcm9sbGluZyBwYWdlIGJvZHlcbiAgICBTY3JvbGxpbmcoKTtcblxuICAgIC8vIE9iamVjdCBGaXRcbiAgICBvYmplY3RGaXRJbWFnZXMoKTtcblxuICAgIC8vIEFyaWEgXG4gICAgQXJpYSgpO1xuXG4gICAgLy8gQWRkIENsYXNzIEFmdGVyIGxvYWRcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3ByZWxvYWQnKTtcblxuICAgICR0cmF5KCdbZGF0YS10cmF5LWxvZ2luXScpLmNsaWNrKChldnQpID0+IHsgZXZ0LnByZXZlbnREZWZhdWx0KCk7ICR0cmF5KCd0cmF5LWxvZ2luJykuc2hvdygpOyB9KTtcblxufSwgZmFsc2UpOyIsImV4cG9ydCBjb25zdCBDQVJUX1VQREFURSA9ICdUUkFZOkNBUlRfVVBEQVRFJzsiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgY29udHJvbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLWNvbnRyb2xzXScpKTtcbiAgICBjb25zdCBib2R5ICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgY29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHsgXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBpZCAgICAgICAgICAgID0gYCMkeyBjdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpIH1gO1xuICAgICAgICAgICAgY29uc3QgZWwgICAgICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuICAgICAgICAgICAgbGV0ICAgY3VycmVudEhpZGRlbiA9IGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIGxldCAgaGFzRml4ZWQgICAgICAgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZml4ZWQnKSA9PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgICAgICBpZihjdXJyZW50SGlkZGVuICE9ICdmYWxzZScgJiYgY3VycmVudEhpZGRlbiAhPSAndHJ1ZScpIGN1cnJlbnRIaWRkZW4gPSAndHJ1ZSdcbiAgICAgICAgICAgIGlmKGhhc0ZpeGVkKSB7XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEhpZGRlbiA9PT0gJ3RydWUnKSAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgZWxzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBjdXJyZW50SGlkZGVuID09PSAndHJ1ZScgPyBmYWxzZSA6IHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBldmVudEZha2VTZWxlY3QgPSBuZXcgRXZlbnQoJ0ZBS0VTRUxFQ1QnKTtcblxuICAgICR0cmF5KGRvY3VtZW50KS5hamF4Q29tcGxldGUoKGV2ZXQsIHhociwgc2V0dGluZ3MpID0+IHtcbiAgICAgICAgaWYoc2V0dGluZ3MudXJsLmluZGV4T2YoJ3ZhcmlhY2FvX2R1cGxhX2NvbXByZV9qdW50bycpICE9PSAtMSkgIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRGYWtlU2VsZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBpZihzZXR0aW5ncy51cmwuaW5kZXhPZignbG9hZE5leHRWYXJpYW50RHJvcERvd24nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRGYWtlU2VsZWN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59IiwiLyoqXG4gKiBDdXJyZW5jeVxuICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbmN5IFxuICovXG5leHBvcnQgY29uc3QgY3VycmVuY3kgPSAoY29pbikgPT4ge1xuICAgIHJldHVybiBjb2luLnRvTG9jYWxlU3RyaW5nKFwicHQtQlJcIiwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgLCBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdCUkwnIH0pO1xufVxuXG4vKipcbiAqIERpc3BhdGNoIEV2ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gTkFNRSBcbiAqL1xuZXhwb3J0IGNvbnN0IGRpc3BhdGNoRXZlbnQgPSAoTkFNRSkgPT4ge1xuICAgIGNvbnN0IGV2dCA9IG5ldyBFdmVudChOQU1FKTtcbiAgICByZXR1cm4gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldnQpO1xufVxuXG4vKipcbiAqIExpc3RlbmVyIEV2ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gTkFNRSBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IENCIFxuICovXG5leHBvcnQgY29uc3QgbGlzdGVuZXJFdmVudCA9IChOQU1FLCBDQikgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKE5BTUUsIENCLCBmYWxzZSk7IFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBib2R5ICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGxldCBjdXJyZW50VG9wID0gMDtcbiAgICBsZXQgb2xkVG9wICAgICA9IDA7XG4gICAgbGV0IGhlYWRlclRvcCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJykub2Zmc2V0SGVpZ2h0O1xuXG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsaW5nJywgZmFsc2UpO1xuICAgIGJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbGluZy1tb2RlJywgJ25vbmUnKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7IFxuICAgICAgICBjdXJyZW50VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBcbiAgICAgICAgaWYoY3VycmVudFRvcCA9PSAwKSAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsaW5nJywgZmFsc2UpO1xuICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICBib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGxpbmcnLCB0cnVlKTtcblxuICAgICAgICBpZihjdXJyZW50VG9wID4gaGVhZGVyVG9wKSB7XG4gICAgICAgICAgICBpZihvbGRUb3AgPiBjdXJyZW50VG9wKSB7XG4gICAgICAgICAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsaW5nLW1vZGUnLCAndXAnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkVG9wIDwgY3VycmVudFRvcCkgeyAgIFxuICAgICAgICAgICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbGluZy1tb2RlJywgJ2Rvd24nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsaW5nLW1vZGUnLCAnbm9uZScpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9sZFRvcCA9IGN1cnJlbnRUb3A7XG4gICAgICAgIH0gZWxzZSBib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGxpbmctbW9kZScsICdub25lJyk7XG4gICAgfSk7XG5cbn0iLCJjb25zb2xlLmxvZygnYWFhYScpOyIsIlxuaW1wb3J0IHN0aWNreWJpdHMgZnJvbSAnc3RpY2t5Yml0cyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBzdGlja3liaXRzKCcjaGVhZGVyJyk7XG59KTtcbiIsImltcG9ydCAnLi9zdmcvYXVhaGEuc3ZnJztcbiIsImltcG9ydCAnLi9zdHlsZS5zdHlsJyIsIlxuaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG5cbiQoJy5zaG93Y2FzZV9fbGlzdFtkYXRhLWNhcm91c2VsPXRydWVdJykuZWFjaChmdW5jdGlvbigpe1xuICAgICQodGhpcykuZmluZCgnLnNob3djYXNlX19pdGVtLS1lbXB0eScpLnJlbW92ZSgpO1xuICAgICQodGhpcykuc2xpY2soe1xuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcHJldkFycm93OiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPmAsXG4gICAgICAgIG5leHRBcnJvdzogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+YCxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQyNCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0gICBcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0ICcuL3N0eWxlLnN0eWwnIiwiXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcblxuJCgnLmJhbm5lci0tamF2YXNjcmlwdCAuYmFubmVyX19saXN0Jykuc2xpY2soe1xuICAgIHByZXZBcnJvdzogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj5gLFxuICAgIG5leHRBcnJvdzogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+YFxufSk7XG5cbiQoJy5iYW5uZXItLWdyaWQgLmJhbm5lcl9fbGlzdCcpLnNsaWNrKHtcbiAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcHJldkFycm93OiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPmAsXG4gICAgbmV4dEFycm93OiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj5gLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNDI0LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0gICBcbn0pOyIsIlxuXG5cbmNvbnN0IGJ1dHRvbiA9ICQoJyNidC1zdWJtaXQtY29tbWVudHMnKTtcblxuaWYoYnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9uQWN0aW9uID0gJChgPGJ1dHRvbiBjbGFzcz1cImNvbW1lbnRzX19idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+QXZhbGlhcjwvYnV0dG9uPmApO1xuICAgIGJ1dHRvbi5hZnRlcihidXR0b25BY3Rpb24pO1xuXG4gICAgYnV0dG9uQWN0aW9uLmNsaWNrKCgpID0+IHtcbiAgICAgICAgYnV0dG9uLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfSk7XG59XG4iLCJcblxuZnVuY3Rpb24gRmFrZVNlbGVjdCgpIHtcbiAgICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCQodGhpcykuY2xvc2VzdCgnLmZha2Utc2VsZWN0JykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBmYWtlID0gJCgnPGRpdiBjbGFzcz1cImZha2Utc2VsZWN0XCI+Jyk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9ICQoJzxzcGFuIGNsYXNzPVwiZmFrZS1zZWxlY3RfX2xhYmVsXCI+JykudGV4dCh0ZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IGNzc0NsYXNzID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgIGNzc0NsYXNzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZihpdGVtICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBmYWtlLmFkZENsYXNzKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGZha2UucHJlcGVuZChsYWJlbCk7XG4gICAgICAgICAgICAkKHRoaXMpLmFmdGVyKGZha2UpO1xuICAgICAgICAgICAgZmFrZS5hcHBlbmQodGhpcyk7XG5cbiAgICAgICAgICAgICQodGhpcykuY2hhbmdlKCgpID0+IHsgbGFiZWwudGV4dCgkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnRleHQoKSkgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuRmFrZVNlbGVjdCgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdGQUtFU0VMRUNUJywgKCkgPT4geyBGYWtlU2VsZWN0KCkgfSwgZmFsc2UpOyIsIlxuXG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMpe1xuICAgIHZhciB0aW1lcjtcbiAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBpZih0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmMsMjAwLGV2ZW50KTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBuYXZpZ2F0aW9uSGlkZGVuUmVzaXplKCkge1xuICAgIGNvbnN0IHdpZHRoTmF2aWdhdGlvbiA9ICQoJy5tZW51LS1uYXZpZ2F0aW9uIC5tZW51X191bC0tbnYxJykub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB3aWR0aEN1cnJlbnQgPSAwO1xuICAgICQoJy5tZW51LS1uYXZpZ2F0aW9uIC5tZW51X19pdGVtLS1udjEnKS5yZW1vdmVDbGFzcygnbWVudV9faXRlbS0taGlkZGVuJyk7XG4gICAgJCgnLm1lbnUtLW5hdmlnYXRpb24gLm1lbnVfX2l0ZW0tLW52MScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgd2lkdGhDdXJyZW50ICs9ICQodGhpcykub3V0ZXJXaWR0aCgpO1xuICAgICAgICBpZih3aWR0aEN1cnJlbnQgPiB3aWR0aE5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21lbnVfX2l0ZW0tLWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb25BbGlnbigpIHtcbiAgICAkKCcubWVudS0tbmF2aWdhdGlvbicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcubWVudS0tbnYyJykucmVtb3ZlQ2xhc3MoJ21lbnUtLXJ0bCcpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5tZW51LS1udjInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBuYXYgPSAkKHRoaXMpLmNsb3Nlc3QoJy5tZW51LS1udjEnKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0ICsgJCh0aGlzKS5vdXRlcldpZHRoKCk7XG5cbiAgICAgICAgICAgIGlmKGxlZnQgPiBuYXYpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdtZW51LS1ydGwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSlcbn1cblxuY29uc3QgY2hpbGRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbS0taGFzLWNoaWxkJykpO1xuXG5jaGlsZHMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgaWYodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWVudV9faXRlbS0taGFzLWNoaWxkJykpIHtcbiAgICAgICAgICAgIGxldCBleHBhbmRlZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgICAgICAgIGlmKGV4cGFuZGVkICE9PSAndHJ1ZScgJiYgZXhwYW5kZWQgIT09ICdmYWxzZScpIGV4cGFuZGVkID0gJ2ZhbHNlJztcbiAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBleHBhbmRlZCA9PT0gJ3RydWUnID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgICAgICAgICQodGFyZ2V0KS5maW5kKCc+IC5tZW51LS1zdWInKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgfSwgZmFsc2UpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZShmdW5jdGlvbihlKXtcbiAgICBuYXZpZ2F0aW9uSGlkZGVuUmVzaXplKCk7XG4gICAgbmF2aWdhdGlvbkFsaWduKCk7XG59KSk7XG5cbm5hdmlnYXRpb25IaWRkZW5SZXNpemUoKTtcbm5hdmlnYXRpb25BbGlnbigpO1xuXG4iLCJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtdGFicycpO1xuICAgIGlmKHRhYnMpe1xuICAgICAgICBjb25zdCB1cmxzID0gQXJyYXkuZnJvbSh0YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXVybF0nKSk7XG5cbiAgICAgICAgdXJscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKTtcbiAgICAgICAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuZGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZWxlbWVudC5pbm5lckhUTUwgPSBkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY3VzdG9tVGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtdGFicy0tY3VzdG9tIC5wcm9kdWN0LXRhYnNfX2xpbmsnKSk7XG5cbiAgICAgICAgY3VzdG9tVGFicy5mb3JFYWNoKChjdXN0b21UYWIpID0+IHtcbiAgICAgICAgICAgIGN1c3RvbVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gZXZ0LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzaCA9IGhyZWYubWF0Y2goL15bXiNdKiMoLiopLylbMV07XG5cbiAgICAgICAgICAgICAgICBpZihoYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZEJveCcpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMkeyBoYXNoIH1gKTtcblxuICAgICAgICAgICAgICAgICAgICBjb250ZW50cy5mb3JFYWNoKChjb250ZW50KSA9PiBjb250ZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lJykpO1xuICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50KSBjdXJyZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2snKTtcblxuICAgICAgICAgICAgICAgICAgICBjdXN0b21UYWJzLmZvckVhY2goKGN1c3RvbVRhYikgPT4gY3VzdG9tVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ29uJykpO1xuICAgICAgICAgICAgICAgICAgICBldnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdvbicpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoY3VzdG9tVGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGN1c3RvbVRhYnNbMF0uY2xhc3NMaXN0LmFkZCgnb24nKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4iLCJcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xuXG4kKCcucnVsZXJzX19saXN0Jykuc2xpY2soe1xuICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgcHJldkFycm93OiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPmAsXG4gICAgbmV4dEFycm93OiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj5gLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyMyxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdICAgXG59KTsiLCJcblxuY29uc3QgJCA9ICR0cmF5O1xuaWYoIHR5cGVvZiAkID09ICdmdW5jdGlvbicpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAkKHdpbmRvdykuYWpheENvbXBsZXRlKGZ1bmN0aW9uKCBldmVudCwgeGhyLCBzZXR0aW5ncyApe1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBpZihzZXR0aW5ncy51cmwuaW5kZXhPZigndmFyaWFudF9nYWxsZXJ5JykgIT09ICAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkVGh1bWIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsb2FkVGh1bWIoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uICBsb2FkVGh1bWIoKSB7XG4gICAgICAgIGNvbnN0ICB0aHVtYnMgID0gICQoJy5wcm9kdXRvLWltYWdlbS1taW5pYXR1cmFzJyk7XG5cbiAgICAgICAgaWYodGh1bWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGh1bWJzLmhpZGUoKTtcblxuICAgICAgICAgICAgY29uc3QgICBpbWFnZXMgID0gIHRodW1icy5maW5kKCdpbWcsIC5pY29uLXZpZGVvJyk7XG4gICAgICAgICAgICBsZXQgICAgIGh0bWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCQoJy50aHVtYnMnKS5sZW5ndGgpICQoJy50aHVtYnMnKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgaWYoaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGh0bWwgID0gIGA8ZGl2IGNsYXNzPVwidGh1bWJzXCI+YDtcbiAgICAgICAgICAgICAgICBodG1sICArPSAgYDx1bCBjbGFzcz1cInRodW1ic19fbGlzdFwiPmA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW1hZ2VzLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGh0bWwgICs9ICBjcmVhdGVUaHVtYigkKGl0ZW0pLmF0dHIoJ3NyYycpLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBodG1sICArPSAgYDwvdWw+YDtcbiAgICAgICAgICAgICAgICBodG1sICArPSAgYDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgdGh1bWJzLmFmdGVyKGh0bWwpO1xuXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcihcInRodW1iczpzdGFydFwiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkKCcudGh1bWJzIGEnKS5jbGljaygoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9ICQoZXZ0LmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2RhdGEtaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RUaHVtYihpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoJChldnQuY3VycmVudFRhcmdldCkuZmluZCgnLnRodW1iX192aWRlbycpLmxlbmd0aCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjb2xWaWRlbycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJCgnYScsIHRodW1icykuZXEoaW5kZXgpKS5tb3VzZW92ZXIoKS5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbFZpZGVvJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1x0XHRcdFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNlbGVjdFRodW1iKCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2VsZWN0VGh1bWIoaW5kZXgpIHtcbiAgICAgICAgJChgLnRodW1icyBsaWApLnJlbW92ZUNsYXNzKCd0aHVtYnNfX2l0ZW0tLWFjdGl2ZWQnKTtcbiAgICAgICAgJChgLnRodW1icyBbZGF0YS1pbmRleD0ke2luZGV4fV1gKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCd0aHVtYnNfX2l0ZW0tLWFjdGl2ZWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAgY3JlYXRlVGh1bWIoc3JjLGluZGV4KSB7XG4gICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiAgYDxsaSBjbGFzcz1cInRodW1ic19faXRlbVwiPjxhIGNsYXNzPVwidGh1bWJzX19saW5rXCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCIgaHJlZj1cIiMke2luZGV4fVwiPjxpbWcgY2xhc3M9XCJ0aHVtYnNfX2ltYWdlXCIgc3JjPVwiJHtzcmN9XCIgLz48L2E+PC9saT5gO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwidGh1bWJzX19pdGVtXCI+PGEgY2xhc3M9XCJ0aHVtYnNfX2xpbmtcIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIiBocmVmPVwiIyR7aW5kZXh9XCI+PHNwYW4gY2xhc3M9XCJ0aHVtYl9fdmlkZW9cIj48L3NwYW4+PC9hPjwvbGk+YDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=