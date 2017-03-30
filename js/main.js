
$(function () {
    $("#button-f").click(function() {
    $('html, body').animate({
        scrollTop: $("#button-scroll-f").offset().top +20
    }, 1000);
    });

    $("#button-s").click(function() {
    $('html, body').animate({
        scrollTop: $("#button-scroll-s").offset().top +20
    }, 1000);
    });

    $("#button-t").click(function() {
    $('html, body').animate({
        scrollTop: $("#button-scroll-t").offset().top +20
    }, 1000);
    });

});

$('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function (e) {
  if (e.which > 0 || e.type == "mousedown" || e.type == "mousewheel" || e.type == "touchmove") {
    $("html,body").stop();
  }
});

$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});
	});

// $(window).scroll(function () {
//     if( $(window).scrollTop() > $('.header-wrapper').offset().top + 100 && !($('.header-wrapper').hasClass('stickyheader'))){
//         $('.header-wrapper').addClass('stickyheader').animate({"top":"0%"}, 100);
//         $('.header-wapper.stickyheader').css({position: 'fixed'});
//
//     } else if ($(window).scrollTop() == 0){
//         $('.header-wrapper').removeClass('stickyheader').css({"top":"-100%"});
//         $('.header-wrapper.stickyheader').css({position: 'static'});
//
//     }
// });
//
// $(window).scroll(function()
// {
//     if( $(window).scrollTop() > 100 )
// 	{
// 	    $('.header-wrapper').css({position: 'fixed'});
//         $('#header-placeholder').css({visibility: 'visible'});
// 	}
// 	else if( $(window).scrollTop() > 0 )
// 	{
//         $('.header-wrapper').css({position: 'static'});
//         $('#header-placeholder').css({visibility: 'hidden'});
// 	}
// });
