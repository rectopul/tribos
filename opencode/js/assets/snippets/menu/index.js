


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvc25pcHBldHMvbWVudS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jKXtcbiAgICB2YXIgdGltZXI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgaWYodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jLDIwMCxldmVudCk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbmF2aWdhdGlvbkhpZGRlblJlc2l6ZSgpIHtcbiAgICB2YXIgd2lkdGhOYXZpZ2F0aW9uID0gJCgnLm1lbnUtLW5hdmlnYXRpb24gLm1lbnVfX3VsLS1udjEnKS5vdXRlcldpZHRoKCk7XG4gICAgdmFyIHdpZHRoQ3VycmVudCA9IDA7XG4gICAgJCgnLm1lbnUtLW5hdmlnYXRpb24gLm1lbnVfX2l0ZW0tLW52MScpLnJlbW92ZUNsYXNzKCdtZW51X19pdGVtLS1oaWRkZW4nKTtcbiAgICAkKCcubWVudS0tbmF2aWdhdGlvbiAubWVudV9faXRlbS0tbnYxJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB3aWR0aEN1cnJlbnQgKz0gJCh0aGlzKS5vdXRlcldpZHRoKCk7XG4gICAgICAgIGlmKHdpZHRoQ3VycmVudCA+IHdpZHRoTmF2aWdhdGlvbikge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbWVudV9faXRlbS0taGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbmF2aWdhdGlvbkFsaWduKCkge1xuICAgICQoJy5tZW51LS1uYXZpZ2F0aW9uJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5tZW51LS1udjInKS5yZW1vdmVDbGFzcygnbWVudS0tcnRsJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLm1lbnUtLW52MicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBuYXYgPSAkKHRoaXMpLmNsb3Nlc3QoJy5tZW51LS1udjEnKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICB2YXIgbGVmdCA9ICQodGhpcykub2Zmc2V0KCkubGVmdCArICQodGhpcykub3V0ZXJXaWR0aCgpO1xuXG4gICAgICAgICAgICBpZihsZWZ0ID4gbmF2KSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbWVudS0tcnRsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG59XG5cbnZhciBjaGlsZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtLS1oYXMtY2hpbGQnKSk7XG5cbmNoaWxkcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgaWYodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWVudV9faXRlbS0taGFzLWNoaWxkJykpIHtcbiAgICAgICAgICAgIHZhciBleHBhbmRlZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgICAgICAgIGlmKGV4cGFuZGVkICE9PSAndHJ1ZScgJiYgZXhwYW5kZWQgIT09ICdmYWxzZScpIGV4cGFuZGVkID0gJ2ZhbHNlJztcbiAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBleHBhbmRlZCA9PT0gJ3RydWUnID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgICAgICAgICQodGFyZ2V0KS5maW5kKCc+IC5tZW51LS1zdWInKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgfSwgZmFsc2UpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZShmdW5jdGlvbihlKXtcbiAgICBuYXZpZ2F0aW9uSGlkZGVuUmVzaXplKCk7XG4gICAgbmF2aWdhdGlvbkFsaWduKCk7XG59KSk7XG5cbm5hdmlnYXRpb25IaWRkZW5SZXNpemUoKTtcbm5hdmlnYXRpb25BbGlnbigpO1xuXG5cbiQoJy5idXR0b24tLW1lbnUnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdtZW51X19vcGVuJylcbn0pO1xuXG4kKCcuYnV0dG9uX19jbG9zZS0tbmF2aWdhdGlvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21lbnVfX29wZW4nKVxufSk7Il0sImZpbGUiOiJhc3NldHMvc25pcHBldHMvbWVudS9pbmRleC5qcyJ9