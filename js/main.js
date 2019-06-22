var slideout = new Slideout({

	'panel': document.getElementById('panel'),

	'menu': document.getElementById('menu'),

	'padding': 256,

	'duration': 200,

	'tolerance': 70,

	'side': 'left'

	});

document.querySelector('.toggle-button').addEventListener('click', function() {

	slideout.toggle();

	});

document.querySelector('.slideout').addEventListener('click', function() {

	slideout.close();

	});

$(document).on('click', '.nav-site a[href^="#"]', function(event){

	event.preventDefault();

	var body_width = $(window).width();

	if ( body_width >= 768)  {

        $('html, body').animate({

		scrollTop: $( $.attr(this, 'href') ).offset().top

		}, 500);

    } else {

    	$('html, body').animate({

		scrollTop: $( $.attr(this, 'href') ).offset().top 

		}, 0);

    }

});

$(document).ready(function() {

	$(window).scroll(function() {

		if ($(this).scrollTop() > 0) {

    		$('#arrowup').fadeIn(300);

		} else {

		$('#arrowup').fadeOut(200); 

			}

	});

	$('#arrowup').click(function() {

		$('body,html').animate({

    		scrollTop: 0

		}, 200); 

		return false;

	});

});

$('.slider-testimonials').slick({

	slidesToShow: 1,

	dots: false,

	fade: false,

	arrows: false,

	autoplay: true,

	autoplaySpeed: 3000

});

$(function() {

	$('ul.tabs-caption').on('click', 'li:not(.active)', function() {

		$(this)

    	.addClass('active').siblings().removeClass('active')

    	.closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');

  	});

});