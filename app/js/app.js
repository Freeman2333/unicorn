$(document).ready(function(){
	$(".main-nav__toggle").click(function() {
		$(this).closest(".main-nav").toggleClass("active")
	});
	$(".js-featured-slider").slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		prevArrow:".featured-nav__left",
		nextArrow:".featured-nav__right",
		responsive: [{
			breakpoint: 1300,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 666,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$(".js-clients-slider").slick({
		infinite: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		prevArrow:".clients-nav__left",
		nextArrow:".clients-nav__right",
		responsive: [{
			breakpoint: 900,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 666,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}]
	});

	// making tabs connected with the slider

	$(".portfolio-tabs__title").on('click',function(){

		let slider = $(".js-portfolio-slider")
		if(slider.hasClass('slick-initialized')){
			slider.slick('unslick')
		}
		slider.empty()
		let current = $(this).attr('data-filter');
		if(current!=='all'){
			let currentItems = $('.prep-portfolio-slider').find(`[data-filter = "${current}"]`)
			console.log(currentItems)
			currentItems.each(function(){
				$(this).clone().appendTo(slider)
				})
			}
		else {
				$(".portfolio-slider-item").each(function(){
				$(this).clone().appendTo(slider)
			})
		
		}
		$('.js-portfolio-slider').slick({
    		arrows: false,
    		dots: true,
    		slidesToShow: 4,
				slidesToScroll: 1,
    		customPaging: function() {
    			return '<div class="portfolio__dot"></div>'},
				appendDots: '.portfolio-dots',
				responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			}, {
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}]

    	})
		
	})
	$('[data-filter="all"]').click()

// counter

	$(window).scroll(function(){
		let windowScroll = $(window).scrollTop() 
		console.log(windowScroll,$(".facts-section").offset().top);
		console.log(windowScroll===$(".facts-section").offset().top);
		if(windowScroll+300>$(".facts-section").offset().top && windowScroll+280<$(".facts-section").offset().top){
			$('.fact-number').each(function() {
			  $(this).prop('Counter', 0).animate({
			    Counter: $(this).text()
			  }, {
			    duration: 3000,
			    easing: 'swing',
			    step: function(now) {
			      $(this).text(Math.ceil(now));
			    }
			  });
			});

		}
	})

	// books-slider


$(".js-book-slider").slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		prevArrow:".books-nav__left",
		nextArrow:".books-nav__right",
		responsive: [{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});




});


