

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvc25pcHBldHMvdGh1bWJzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG52YXIgJCA9ICR0cmF5O1xuaWYoIHR5cGVvZiAkID09ICdmdW5jdGlvbicpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAkKHdpbmRvdykuYWpheENvbXBsZXRlKGZ1bmN0aW9uKCBldmVudCwgeGhyLCBzZXR0aW5ncyApe1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBpZihzZXR0aW5ncy51cmwuaW5kZXhPZigndmFyaWFudF9nYWxsZXJ5JykgIT09ICAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkVGh1bWIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsb2FkVGh1bWIoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uICBsb2FkVGh1bWIoKSB7XG4gICAgICAgIHZhciAgdGh1bWJzICA9ICAkKCcucHJvZHV0by1pbWFnZW0tbWluaWF0dXJhcycpO1xuXG4gICAgICAgIGlmKHRodW1icy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRodW1icy5oaWRlKCk7XG5cbiAgICAgICAgICAgIHZhciAgIGltYWdlcyAgPSAgdGh1bWJzLmZpbmQoJ2ltZywgLmljb24tdmlkZW8nKTtcbiAgICAgICAgICAgIGxldCAgICAgaHRtbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoJCgnLnRodW1icycpLmxlbmd0aCkgJCgnLnRodW1icycpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBpZihpbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaHRtbCAgPSAgYDxkaXYgY2xhc3M9XCJ0aHVtYnNcIj5gO1xuICAgICAgICAgICAgICAgIGh0bWwgICs9ICBgPHVsIGNsYXNzPVwidGh1bWJzX19saXN0XCI+YDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbWFnZXMuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaHRtbCAgKz0gIGNyZWF0ZVRodW1iKCQoaXRlbSkuYXR0cignc3JjJyksIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGh0bWwgICs9ICBgPC91bD5gO1xuICAgICAgICAgICAgICAgIGh0bWwgICs9ICBgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICB0aHVtYnMuYWZ0ZXIoaHRtbCk7XG5cbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKFwidGh1bWJzOnN0YXJ0XCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoJy50aHVtYnMgYScpLmNsaWNrKChldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gJChldnQuY3VycmVudFRhcmdldCkuYXR0cignZGF0YS1pbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFRodW1iKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGV2dC5jdXJyZW50VGFyZ2V0KS5maW5kKCcudGh1bWJfX3ZpZGVvJykubGVuZ3RoKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbFZpZGVvJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgkKCdhJywgdGh1bWJzKS5lcShpbmRleCkpLm1vdXNlb3ZlcigpLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY29sVmlkZW8nKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XHRcdFx0XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2VsZWN0VGh1bWIoJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzZWxlY3RUaHVtYihpbmRleCkge1xuICAgICAgICAkKGAudGh1bWJzIGxpYCkucmVtb3ZlQ2xhc3MoJ3RodW1ic19faXRlbS0tYWN0aXZlZCcpO1xuICAgICAgICAkKGAudGh1bWJzIFtkYXRhLWluZGV4PSR7aW5kZXh9XWApLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ3RodW1ic19faXRlbS0tYWN0aXZlZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICBjcmVhdGVUaHVtYihzcmMsaW5kZXgpIHtcbiAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgcmV0dXJuICBgPGxpIGNsYXNzPVwidGh1bWJzX19pdGVtXCI+PGEgY2xhc3M9XCJ0aHVtYnNfX2xpbmtcIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIiBocmVmPVwiIyR7aW5kZXh9XCI+PGltZyBjbGFzcz1cInRodW1ic19faW1hZ2VcIiBzcmM9XCIke3NyY31cIiAvPjwvYT48L2xpPmA7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJ0aHVtYnNfX2l0ZW1cIj48YSBjbGFzcz1cInRodW1ic19fbGlua1wiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiIGhyZWY9XCIjJHtpbmRleH1cIj48c3BhbiBjbGFzcz1cInRodW1iX192aWRlb1wiPjwvc3Bhbj48L2E+PC9saT5gO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJmaWxlIjoiYXNzZXRzL3NuaXBwZXRzL3RodW1icy9pbmRleC5qcyJ9