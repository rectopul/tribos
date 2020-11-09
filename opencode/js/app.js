




jQuery('.button--menu').click(function() {
    jQuery('body').addClass('menu__open')
});

jQuery('.button__close--navigation').click(function() {
    jQuery('body').removeClass('menu__open')
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



 


const tool = (() => {
    //private var/functions
    const prices = {}

    function selectVariation(selector) {
        const selectors = [...document.querySelectorAll(selector)]

        if (!selectors) return

        selectors.forEach((variation) => {
            variation.addEventListener('click', function (e) {
                e.preventDefault()

                const container = variation.closest('.toolCategory__column.variations')

                if (container.classList.contains('disabled')) return

                const input = variation.querySelector('input')

                const product = variation.closest('.toolCategory').querySelector('.product__header.slick-center')

                if (input && product) {
                    const image = product.querySelector('figure')

                    if (image) image.innerHTML = `<img src="${input.value}">`
                }
            })
        })
    }

    function getPrice() {
        const pricesArray = Object.keys(prices)

        const pricesValue = pricesArray.map((item) => {
            if (prices[item].disabled == false) return prices[item].value
            else return 0
        })

        let total = 0

        pricesValue.forEach((item) => (total = total + item))

        const currencyPrice = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(total)

        const totalElement = document.querySelector('.toolCategory__column--summary--total .price__total')

        if (totalElement) totalElement.innerHTML = currencyPrice

        return currencyPrice
    }

    function changePrice(element) {
        const productPrice = element.dataset.price

        const category = element.closest('.toolCategory').dataset.category

        const variant = element.dataset.variant

        const product = element.dataset.productId

        if (prices[category]) {
            prices[category].product = product
            prices[category].value = parseFloat(productPrice)
        } else {
            prices[category] = {
                product,
                value: parseFloat(productPrice),
                disabled: false,
            }
        }

        if (variant) prices[category]['variant'] = variant

        return getPrice()
    }

    function togglePrice(element) {
        const category = element.closest('.toolCategory').dataset.category
        if (element.checked) {
            if (prices[category] && prices[category].hasOwnProperty('disabled')) {
                prices[category].disabled = true
            } else {
                prices[category] = {
                    disabled: true,
                    value: 0,
                }
            }
        } else {
            if (prices[category] && prices[category].hasOwnProperty('disabled')) {
                prices[category].disabled = false
            } else {
                prices[category] = {
                    disabled: false,
                    value: 0,
                }
            }
        }

        return getPrice()
    }

    function getCategories() {
        const productsActive = [...document.querySelectorAll('.product__header.slick-center')]

        console.log(`Lista Produto: `, productsActive)

        if (!productsActive) return

        productsActive.forEach((element) => {
            console.log(`Produto: `, element)
            return changePrice(element)
        })

        return true
    }

    function init() {
        if (document.body.classList.contains('tool')) return getCategories()
    }

    function variationsCarousel(selector) {
        const list = [...document.querySelectorAll(selector)]

        if (!list) return
        ;(($) => {
            list.map((item) => {
                $(item).slick({
                    infinite: false,
                    speed: 150,
                    draggable: false,
                    fade: true,
                    cssEase: 'linear',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    nextArrow: false,
                    prevArrow: false,
                })
            })
        })(jQuery)
    }

    function removeProduct(selector) {
        const inputs = [...document.querySelectorAll(selector)]

        if (!inputs) return

        inputs.map((input) => {
            input.addEventListener('change', function (e) {
                e.preventDefault()

                const span = input.closest('header').querySelector('span')
                const container = input.closest('.toolCategory__column--summary')

                if (input.checked) {
                    span.innerHTML = `Removido`
                    container.classList.add('removed')
                    togglePrice(input)
                } else {
                    span.innerHTML = `Remover`
                    container.classList.remove('removed')
                    togglePrice(input)
                }
            })
        })
    }

    function handleChangePrice(element) {
        const theprice = element.dataset.price

        const name = element.dataset.name

        changePrice(element)

        const image = element.querySelector('figure img').cloneNode()

        const summary = element.closest('.toolCategory').querySelector('.toolCategory__column--summary')

        if (!summary) return

        image.setAttribute('width', '70px')
        image.style.maxWidth = '70px'

        summary.querySelector('figure').innerHTML = ''
        summary.querySelector('figure').append(image)
        summary.querySelector('h3').innerHTML = name
        summary.querySelector('h2').innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(theprice)
    }

    function handleSlickProductChange(event, slick, currentSlide, nextSlide) {
        //get active slick product id $slides[2].attributes
        const activeSlick = slick.$slides[currentSlide].dataset.id

        if (!activeSlick) return

        const variationsContainer = slick.$slides[currentSlide]
            .closest('.toolCategory')
            .querySelector('.toolCategory__column.variations')

        handleChangePrice(slick.$slides[currentSlide])

        const variationsFromProduct = document.querySelector(`.tool__variants--wrapper[data-product="${activeSlick}"]`)

        if (!variationsFromProduct) {
            if (variationsContainer) variationsContainer.classList.add('disabled')

            return
        } else {
            if (variationsContainer) variationsContainer.classList.remove('disabled')
        }

        const indexVariation = variationsFromProduct.dataset.slickIndex

        const slickVariation = variationsFromProduct.closest('.toolCategory__column--variations')

        $(slickVariation).slick.slickGoTo(indexVariation)
    }

    function productCarousel(selector) {
        const list = [...document.querySelectorAll(selector)]

        if (!list) return
        ;(($) => {
            list.map((item) => {
                $(item).slick({
                    infinite: false,
                    speed: 150,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0px',
                    initialSlide: 1,
                    nextArrow: '<button class="slick-next"><span class="icon-arrow"></span></button>',
                    prevArrow: '<button class="slick-prev"><span class="icon-arrow"></span></button>',
                })

                // On before slide change
                $(item).on('afterChange', handleSlickProductChange)
            })

            init()
        })(jQuery)
    }

    return {
        //public var/functions
        init,
        productCarousel,
        variationsCarousel,
        removeProduct,
        selectVariation,
    }
})()

tool.removeProduct(`.toolCategory__column--summary header input`)

tool.productCarousel('.toolCategory__column.products .showcase')

//toolCategory__column--variations
tool.variationsCarousel('.toolCategory__column--variations')

//tool__variants--list
tool.selectVariation(`.tool__variants--list > li`)

//



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
        const target = evt.target;
        if (evt.currentTarget === target) {
            var expanded = target.getAttribute('aria-expanded');
            if (expanded !== 'true' && expanded !== 'false') expanded = 'false';
            target.setAttribute('aria-expanded', expanded === 'true' ? false : true);
            jQuery(target).find('> .menu--sub').slideToggle();
        }
    }, false);
});


// window.addEventListener('resize', debounce(function(e){
//     navigationHiddenResize();
//     navigationAlign();
// }));

// navigationHiddenResize();
// navigationAlign();






/* Lazy Load  */

document.addEventListener('DOMContentLoaded', function() {
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy-new'))
    let active = false

    const lazyLoad = function() {
        if (active === false) {
            active = true

            setTimeout(function() {
                lazyImages.forEach(function(lazyImage) {
                    if (
                        lazyImage.getBoundingClientRect().top <=
                            window.innerHeight &&
                        lazyImage.getBoundingClientRect().bottom >= 0 &&
                        getComputedStyle(lazyImage).display !== 'none'
                    ) {
                        lazyImage.src = lazyImage.dataset.src
                        lazyImage.srcset = lazyImage.dataset.srcset
                        lazyImage.classList.remove('lazy-new')

                        lazyImages = lazyImages.filter(function(image) {
                            return image !== lazyImage
                        })

                        if (lazyImages.length === 0) {
                            document.removeEventListener('scroll', lazyLoad)
                            window.removeEventListener('resize', lazyLoad)
                            window.removeEventListener(
                                'orientationchange',
                                lazyLoad
                            )
                        }
                    }
                })

                active = false
            }, 200)
        }
    }

    document.addEventListener('scroll', lazyLoad)
    window.addEventListener('resize', lazyLoad)
    window.addEventListener('orientationchange', lazyLoad)
})


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



if($('.rulers__list')) {
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
}






// var $ = $tray;
// if( typeof $ == 'function') {
//     $(document).ready(function(){
//         $(window).ajaxComplete(function( event, xhr, settings ){
//             if(settings) {
//                 if(settings.url.indexOf('variant_gallery') !==  -1) {
//                     loadThumb();
//                 }
//             }
//         });
//         loadThumb();
//     });

//     function  loadThumb() {
//         var  thumbs  =  $('.produto-imagem-miniaturas');

//         if(thumbs.length) {
//             thumbs.hide();

//             var   images  =  thumbs.find('img, .icon-video');
//             let     html;
            
//             if($('.thumbs').length) $('.thumbs').remove();

//             if(images.length) {
//                 html  =  `<div class="thumbs">`;
//                 html  +=  `<ul class="thumbs__list">`;
                
//                 images.each((index, item) => {
//                     html  +=  createThumb($(item).attr('src'), index);
//                 });
            
//                 html  +=  `</ul>`;
//                 html  +=  `</div>`;
//                 thumbs.after(html);

//                 $(document).trigger("thumbs:start");
                
//                 $('.thumbs a').click((evt) => {
//                     let index = $(evt.currentTarget).attr('data-index');

//                     selectThumb(index);
                    
//                     if ($(evt.currentTarget).find('.thumb__video').length) { 
//                         $('#colVideo').show();
//                     } else {
//                         $($('a', thumbs).eq(index)).mouseover().click();
//                         $('#colVideo').hide();
//                     }
//                     evt.preventDefault();
//                 });			
                
//                 selectThumb('0');
//             }
//         }
//     }
    
//     function selectThumb(index) {
//         $(`.thumbs li`).removeClass('thumbs__item--actived');
//         $(`.thumbs [data-index=${index}]`).closest('li').addClass('thumbs__item--actived');
//     }

//     function  createThumb(src,index) {
//         if (src) {
//             return  `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><img class="thumbs__image" src="${src}" /></a></li>`;
//         }else{
//             return `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><span class="thumb__video"></span></a></li>`;
//         }
//     }
// }

 