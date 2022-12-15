/* Бургер и меню */

function menuHandler() {

	let menuLogic = false;

	$('.burger-btn').on('click', function () {

		if (!menuLogic) {

			menuLogic = true;

			let clickDelay = 500,
				clickDelayTimer = null,
				burger = $(this);

			burger.toggleClass('active')

			if (!burger.hasClass('active')) {
				burger.addClass('closing');
			}

			clickDelayTimer = setTimeout(function () {
				burger.removeClass('closing');
				clearTimeout(clickDelayTimer);
				clickDelayTimer = null;
			}, clickDelay);

			if ($('.dropdown-menu').hasClass('opened')) {
				$('.dropdown-menu').removeClass('opened').slideUp(300);

				setTimeout(function () {
					console.log(123)
					menuLogic = false;
					$('html, body').removeClass('menu-opened');
				}, 300);

				$('body').css('position', '').css('left', 'auto').css('right', 'auto').css('top', 'auto');



			} else {
				$('.dropdown-menu').addClass('opened').slideDown(300);
				$('html, body').addClass('menu-opened');

				setTimeout(function () {
					menuLogic = false;
				}, 300);
			}
		}

		$("header").toggleClass("menu-header");
	});
}

menuHandler();

/* Стилизация липкого меню начало*/

$(window).scroll(function () {
	if ($(this).scrollTop() > 0) {
		$("header").addClass("anim-header");
		$(".search-cnt.header-search").css("background-color", "#181818");
	} else {
		$("header").removeClass("anim-header");
		$(".search-cnt.header-search").css("background-color", "#252525");
	}
});

/* Стилизация липкого меню конец*/










/* Карточка товара Begin */

$(document).ready(function () {
	$('.arr-down').click(function () {
		var win = $(window).height() - 100;
		$('body,html').animate({
			scrollTop: win
		}, 800);
		return false;
	});
});

/* Карточка товара End */





/* Карточка товара НАЧАЛО */

/* Расскрываем меню */

$(document).ready(function () {

	$(".config-menu__title").click(function () {
		$(".config-menu__title").not(this).removeClass("open");
		$(".config-menu__title").not(this).next().slideUp(300);
		$(this).toggleClass("open");
		$(this).next().slideToggle(300);
	});


	$("#conf-pers").click(function () {
		$(".config-wrap").children().eq(0).toggleClass("open");
		$(".config-wrap").children().eq(0).children(".config-wrap__item-body").slideToggle().css("display", "flex");
	});


	$(".header-icon-cnt__login").click(function () {
		$(".signin-cnt").toggleClass("open");
	});

	$(".signin-close").click(function () {
		$(".signin-cnt").removeClass("open");
	});




	/* Красим блок с цветом */

	$(".item-body__color-item").click(function () {
		$(".item-body__color").css('color', '#B6B6B6');
		$(".item-body__price").css('color', '#545454');
		$(this).find(".item-body__color, .item-body__price").css('color', '#D0A220');
	});





	/* Выпадающий кастомный список начало */

	$(".cs-input").click(function () {
		$(this).children('.cs-icon').toggleClass('open');
		$(this).next().toggleClass('open');
	});


	$(".stock-item__sort-cnt").click(function () {
		$(this).toggleClass('open');
		$(this).children('.stock-item__sort-list').toggleClass('open');
		$(this).children('.stock-item__sort').toggleClass('open');
	});





	/* Добавление товара в конфигураторе */

	$(".config-item__title").click(function () {
		$(".config-item__title label").css('color', '#B6B6B6');
		$(".config-item__price").css('color', '#545454');
		$(".config-item__qnt").css('visibility', 'hidden');
		$(this).find("label").css('color', '#D0A220');
		$(this).siblings(".config-item__bottom").find(".config-item__price").css('color', '#D0A220');
		$(this).siblings(".config-item__bottom").find(".config-item__qnt").css('visibility', 'visible');

		if ($(this).parents(".config-item__cnt").hasClass("tab-view")) {
			$(".config-item__bottom").css('transform', 'translate(-75px)');
			$(this).next().css('transform', 'translate(0)');
		};
	});





	/* Добавление товара в конфигураторе в сравнение */

	$(".config-item__cmp").click(function () {
		$(this).toggleClass("active");
	});





	/* Переключение вида товаров в конфигураторе начало */

	$(".view-type__row").click(function () {
		$(this).next().removeClass("active");
		$(this).addClass("active");
		$(this).parents(".item-body__row").siblings(".config-item__cnt").removeClass("tab-view");
		$(this).parents(".item-body__row").siblings(".config-item__cnt").addClass("row-view");
		$(this).parents(".item-body__row").siblings(".config-item__cnt").children(".config-item__img-row").css("display", "block");
		$(this).parents(".item-body__row").siblings(".config-item__cnt").find(".config-item__bottom").css("transform", "translate(0px)");
	});

	$(".view-type__tab").click(function () {
		$(this).prev().removeClass("active");
		$(this).addClass("active");
		$(this).parents(".item-body__row").siblings(".config-item__cnt").removeClass("row-view");
		$(this).parents(".item-body__row").siblings(".config-item__cnt").addClass("tab-view");
		$(this).parents(".item-body__row").siblings(".config-item__cnt").children(".config-item__img-row").css("display", "none");
		//$(this).parents(".item-body__row").siblings(".config-item__cnt").find(".config-item__bottom").css("transform", "translate(-75px)");
	});





	/* Разворачиваем блок в конфигураторе*/

	$(".config-wrap__item-title").click(function () {

		if ($(this).parent().hasClass("open")) {
			$(this).parent().removeClass("open");
			$(this).siblings().slideUp();
			//$("#conf-pers").removeClass("open");
		} else {
			$(this).parent().addClass("open");
			$(this).siblings().slideDown();
		}

		if (condition) {

		} else {

		}

	});





	/* Фиксируем правый блок*/

	function FixRightBlock() {
		$nav = $('.fixed-div');

		if ($nav.length > 0) {
			$nav.css('width', $nav.outerWidth());
			$window = $(window);
			$h = $nav.offset().top;
			$window.scroll(function () {
				if (($window.scrollTop() > ($h - 145)) && ($(window).width() > '1280')) {
					$nav.addClass('fixed');
				} else {
					$nav.removeClass('fixed');
				}
			});
		}
	}



	/* Карточка товара КОНЕЦ */



	/* Подбор НАЧАЛО */

	$(document).ready(function () {
		$('.start-cnt').click(function () {
			var win = $(window).height();
			$('body,html').animate({
				scrollTop: win
			}, 800);
			return false;
		});

		FixRightBlock();
	});



	$(".podbor-item__title").click(function () {
		$(".podbor-item__title label").css('color', '#B6B6B6');
		$(this).find("label").css('color', '#D0A220');
		$(".podbor-item__price").css('color', '#545454');
		$(this).siblings(".podbor-item__price").css('color', '#B6B6B6');
	});


	$(".switch-btn").click(function () {
		$(this).find(".switch-btn__y").toggleClass("switch-on");
		if ($(this).find(".switch-btn__y").hasClass("switch-on")) {
			$(".switch-title.hide").fadeIn(0);
			$(".switch-title.show").fadeOut(0);
		} else {
			$(".switch-title.hide").fadeOut(0);
			$(".switch-title.show").fadeIn(0);
		};
		$(".podbor-item__char-cnt").slideToggle(200).css("display", "flex");
	});


	/* Подбор КОНЕЦ */


	/* Сравнение НАЧАЛО */

	$(".compare-filter__show-diff label").click(function () {
		$(this).toggleClass("active");
	});


	$(".group-char__show-btn").click(function () {

		if ($(this).hasClass("hide")) {
			$(this).children("p").html("Показать");
			$(this).removeClass("hide");
			$(this).addClass("show");
			$(this).siblings(".group-char__title").css("color", "#D0A220");
			$(this).parent(".group-char__title-cnt").siblings("div").slideToggle();
		} else if ($(this).hasClass("show")) {
			$(this).children("p").html("Свернуть");
			$(this).removeClass("show");
			$(this).addClass("hide");
			$(this).siblings(".group-char__title").css("color", "#545454");
			$(this).parent(".group-char__title-cnt").siblings("div").slideToggle();
		}
	});

	/* Сравнение КОНЕЦ */





	/* Кредит begin */

	$(".installment-pay").click(function () {
		$(".credit-pay").removeClass("active");
		$(".installment-pay").addClass("active");
	});

	$(".credit-pay").click(function () {
		$(".installment-pay").removeClass("active");
		$(".credit-pay").addClass("active");
	});


	$(".terms-condition__filter").click(function () {
		$(".terms-condition__filter").removeClass("active");
		$(this).addClass("active");
		if ($(".terms-condition__filter.installment").hasClass("active")) {
			$(".terms-condition__item.credit").addClass("hide");
			$(".terms-condition__item.installment").removeClass("hide").addClass("show");
		} else {
			$(".terms-condition__item.installment").addClass("hide");
			$(".terms-condition__item.credit").removeClass("hide").addClass("show");
		}

	});

	/* Кредит end */

	/*Фиксируем слайдер сверху в сравнеии*/
$(function () {
	if($('.header-compare').length > 0){
		 $head_height = 850;
		 $nav = $('.header-compare');
		 $window = $(window);
		 $h = $nav.offset().top;
		 $window.scroll(function () {
			  if ($window.scrollTop() > $h + $head_height) {
					$nav.slideDown(0).addClass('show');
			  } else {
					$nav.slideUp(0).removeClass('show');
			  }
		 });
	}
});



});

/* В инпут c кредитом пишутся только числовые значения  */
const changeHandler = e => {
	const value = e.value
	e.value = value.replace(/\D/g, '')
}


$(".clear-search").click(function () {
	$(".search-field").val('');
})


$(".header-icon-cnt__find").click(function () {
	$(".search-cnt.header-search").slideToggle(200).toggleClass('open');
})

$(".search-close").click(function () {
	$(".search-cnt.header-search").slideUp(200).removeClass('open');
})


// max scripts

// detect element position on screen
$.fn.isInViewport = function () {
	var elementTop = $(this).offset().top + 100,
		elementBottom = elementTop + $(this).outerHeight(),
		viewportTop = $(window).scrollTop(),
		viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function () {

	if ($('.main-section__cnt').length) {
		mainScreenInit();
	}

	showElments();

	modalWindow();

	faqSpoilers();

	$(window).on('scroll', function () {
		showElments();
	});
});



var scrollTop = $(window).scrollTop();



function showElments() {

	if ($('.seria-section').length) {
		if ($('.seria-section').isInViewport() || scrollTop >= $('.seria-section').offset().top) {
			TweenMax.staggerTo($('.cat-item__hover'), 1, { delay: 0.5, autoAlpha: 1, top: '0px', ease: Elastic.easeOut.config(2, 1) }, 0.2);
			TweenMax.to($('.cat-item__cnt-progress, .cat-item__cnt-btns'), 1, { delay: 1.1, autoAlpha: 1, y: '0px', ease: Elastic.easeOut.config(2, 1) })
		}
	}

	if ($('.our-services').length) {
		if ($('.our-services').isInViewport() || scrollTop >= $('.our-services').offset().top) {
			TweenMax.staggerTo($('.our-services__item'), 1, { delay: 0.5, autoAlpha: 1, top: '0px', ease: Elastic.easeOut.config(2, 1) }, 0.2);
		}
	}

	if ($('.selection__btn-cnt').length) {
		if ($('.selection__btn-cnt').isInViewport() || scrollTop >= $('.selection__btn-cnt').offset().top) {

			TweenMax.staggerTo($('.selection__btn'), 1, { delay: 0.5, autoAlpha: 1, x: '0px', ease: Elastic.easeOut.config(2, 1) }, 0.2);

			let sstl = new TimelineLite();

			sstl.to($('.selection__img img'), 1, { delay: 0.7, autoAlpha: 1, y: '10px', ease: Elastic.easeOut.config(1, 0.5) })
				.to($('.selection__name'), 0.7, { autoAlpha: 1, x: '0px', ease: Elastic.easeOut.config(2, 1) }, '-=0.5')
				.to($('.selection .glitchy-btn'), 0.7, { autoAlpha: 1, x: '0px', ease: Elastic.easeOut.config(2, 1) }, '-=0.3');
		}
	}

	if ($('.photo-section').length) {
		if ($('.photo-section').isInViewport() || scrollTop >= $('.photo-section').offset().top) {
			TweenMax.staggerTo($('.gallery__item'), 1, { delay: 0.5, autoAlpha: 1, top: '0px', ease: Elastic.easeOut.config(2, 1) }, 0.2);
		}
	}

	if ($('.main-why').length) {
		if ($('.main-why').isInViewport() || scrollTop >= $('.main-why').offset().top) {
			TweenMax.to($('.main-why-img'), 1, { delay: 0.5, autoAlpha: 1, x: '0px', ease: Elastic.easeOut.config(2, 1) })
			TweenMax.staggerTo($('.main-why-text-item .mwti-line'), 1, { delay: 0.5, width: '500px', ease: Power1.easeOut }, .3);
			TweenMax.staggerTo($('.mwti-text'), .5, { delay: 1.6, autoAlpha: 1, x: '0px', ease: Elastic.easeOut.config(2, 1) }, .3);
			TweenMax.staggerTo($('.mwti-line .path'), 1, { delay: 1.6, autoAlpha: 1, ease: Power1.easeOut }, .3);
		}
	}

	if ($('.faq').length) {
		if ($('.faq').isInViewport() || scrollTop >= $('.faq').offset().top) {
			let faqtl = new TimelineLite();

			faqtl.to($('.faq__img img'), 1, { delay: 1.3, autoAlpha: 1, y: '10px', ease: Elastic.easeOut.config(1, 0.5) })
				.to($('.faq .glitchy-btn.red-btn'), 0.7, { autoAlpha: 1, x: '0px', ease: Elastic.easeOut.config(2, 1) }, '-=0.5');
		}
	}

	// delivery animation

	if ($('.quest').length) {
		if ($('.quest').isInViewport() || scrollTop >= $('.quest').offset().top) {
			let questTl = new TimelineLite();
			questTl.to($('.questl-1'), 0.5, { delay: 1, width: '85px', ease: Power1.easeOut })
				.to($('.quest__item:nth-child(2)'), 0.5, { autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(0.5, 0.3) })
				.to($('.questl-2'), 0.3, { width: '85px', ease: Power1.easeOut })
				.to($('.quest__item:nth-child(3)'), 0.5, { autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(0.5, 0.3) })
				.to($('.questl-3'), 0.3, { width: '85px', ease: Power1.easeOut })
				.to($('.quest__item:nth-child(4)'), 0.5, { autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(0.5, 0.3) })
				.to($('.questl-4'), 0.5, { width: '402px', ease: Power1.easeOut })
				.to($('.questl-4-ql-2'), 1, { width: '80%', ease: Power1.easeOut })
				.to($('.quest-end'), 0.5, { autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(0.5, 0.3) })

		}
	}

	// leasing animation

	if ($('.leasing-how__cnt').length) {
		if ($('.leasing-how__cnt').isInViewport() || scrollTop >= $('.leasing-how__cnt').offset().top) {
			let leasingTl = new TimelineLite();
			leasingTl.to($('.ll-1'), 0.5, { delay: 1, width: '105px', ease: Power1.easeOut })
				.to($('.leasing-how__item:nth-child(2)'), 0.5, { autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(0.5, 0.3) })
				.to($('.ll-2'), 0.3, { width: '90px', ease: Power1.easeOut })
				.to($('.leasing-how__item:nth-child(3)'), 0.5, { autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(0.5, 0.3) })
				.to($('.ll-3'), 0.3, { width: '125px', ease: Power1.easeOut })
				.to($('.leasing-how__item:nth-child(4)'), 0.5, { autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(0.5, 0.3) })
				.to($('.ll-4'), 0.3, { width: '120px', ease: Power1.easeOut });
		}
	}

	// credit animation

	if ($('.credit-how__cnt').length) {
		if ($('.credit-how__cnt').isInViewport() || scrollTop >= $('.credit-how__cnt').offset().top) {
			let creditTl = new TimelineLite();
			creditTl.to($('.crl-1'), 0.5, { delay: 1, width: '154px', ease: Power1.easeOut })
				.to($('.crl-1'), 0.5, { height: '140px', ease: Power1.easeOut })
				.to($('.credit-how__item:nth-child(2)'), 0.5, { autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(0.5, 0.3) })
				.to($('.crl-2'), 0.3, { width: '55px', ease: Power1.easeOut })
				.to($('.crl-2'), 0.5, { height: '192px', ease: Power1.easeOut })
				.to($('.credit-how__item:nth-child(3)'), 0.5, { autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(0.5, 0.3) })
				.to($('.crl-3'), 0.3, { width: '37px', ease: Power1.easeOut })
				.to($('.credit-how__item:nth-child(4)'), 0.5, { autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(0.5, 0.3) })
				.to($('.crl-4'), 0.3, { width: '154px', ease: Power1.easeOut })
				.to($('.crl-4'), 0.5, { height: '192px', ease: Power1.easeOut })
				.to($('.credit-how__item:nth-child(5)'), 0.5, { autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(0.5, 0.3) })
				.to($('.crl-5'), 0.3, { width: '37px', ease: Power1.easeOut });
		}
	}
}

function mainScreenInit() {
	let mstl = new TimelineLite();
	mstl.to($('.main-section__cnt h1'), 0.3, { delay: 0.5, autoAlpha: 1, left: '0px', ease: Elastic.easeOut.config(2, 1) })
		.to($('.main-section__cnt h5'), 0.3, { autoAlpha: 1, left: '0px', ease: Elastic.easeOut.config(2, 1) })
		.to($('.ms-btn-container'), 0.3, { autoAlpha: 1, left: '0px', ease: Elastic.easeOut.config(2, 1) })
		.to($('.ms-slider-controls-cnt'), 0.3, { autoAlpha: 1, left: '0px', ease: Elastic.easeOut.config(2, 1) })
		.to($('.show-video-cnt .animated-line '), 0.7, { width: '2000px', ease: Power1.easeOut })
		.to($('.ms-slider-pager'), 0.3, { autoAlpha: 1, bottom: '18px', ease: Elastic.easeOut.config(2, 1) }, '-=0.3')
		.to($('.main-section__img-cnt'), 2, { autoAlpha: 1, ease: Elastic.easeOut.config(2, 1) }, '-=1.5')
		.to($('.main-section__img-swiper-babka'), 1, { autoAlpha: 1, y: '10px', ease: Elastic.easeOut.config(0.5, 0.3) }, '-=0.5')
}

const mainBabka = new Swiper('.main-section__img-swiper', {
	pagination: {
		el: '.ms-slider-pager',
		clickable: true
	},
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
});

mainBabka.on('slideChange', function () {
	let itemIndex = this.activeIndex;

	$('.main-section__cnt-item').fadeOut(200);

	setTimeout(function () {
		$('.main-section__cnt-item').eq(itemIndex).fadeIn(200);
	}, 200);
});

function modalWindow() {
	$('.open-modal').on('click', function (e) {
		e.preventDefault();
		let currentModal = $(this).attr('href');
		$('.overlay, #' + currentModal).css('display', 'flex').hide().fadeIn(200);
		$('html').css("overflow", "hidden");
	});

	$('.modal-close, .overlay').on('click', function () {
		$('.modal, .overlay').fadeOut(200);
		$('html').css("overflow", "auto");
	});
}

function faqSpoilers() {
	$('.faq-title').on('click', function () {
		let parent = $(this).parent();

		if (!parent.hasClass('active')) {
			$('.faq-body').slideUp(200);

			setTimeout(function () {
				$('.faq__list-cnt li').removeClass('active');
				parent.addClass('active').find('.faq-body').slideDown(200);
			}, 250)
		}

	});
}

if ($('.modal-video').length) {
	$('.modal-video').keepRatio({
		ratio: 16 / 9,
		calculate: 'height'
	});
}

const AboutReviews = new Swiper('.feedback-cnt', {
	slidesPerView: 4,
	spaceBetween: 50,
	navigation: {
		nextEl: ".swiper-button-next.about-page-feed-right",
		prevEl: ".swiper-button-prev.about-page-feed-left",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1600: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
	},
});

const AboutFeedback = new Swiper('.feedback-popup__img-swiper', {
	navigation: {
		nextEl: ".swiper-button-next.modal-arrow-right",
		prevEl: ".swiper-button-prev.modal-arrow-left",
	},
});

// catalog slider

$('.chsc-item').each(function (i) {

	$(this).addClass('c-slider-tab-' + i);

	let swiperThumbs = new Swiper('.c-slider-tab-' + i + ' .sw-thumbs', {
		spaceBetween: 30,
		slidesPerView: 5,
		centerInsufficientSlides: true,
		watchSlidesProgress: true,
	});

	let swiperMain = new Swiper('.c-slider-tab-' + i + ' .sw-main', {
		direction: 'horizontal',
		effect: 'fade',
		navigation: {
			nextEl: '.c-slider-tab-' + i + ' .swiper-button-next',
			prevEl: '.c-slider-tab-' + i + ' .swiper-button-prev'
		},
		thumbs: {
			swiper: swiperThumbs,
		},
	});
});


$('.color-link__item').on('click', function () {
	let index = $(this).index();

	$('.chsc-item, .color-link__item').removeClass('active');
	$(this).addClass('active');
	$('.chsc-item').eq(index).addClass('active');
});




// var phoneMask = IMask(
// 	document.getElementById('phone-mask') || document.getElementById('phone-mask__callback'), {
// 	mask: '+{7}(000)000-00-00'
// });

// var currencyMask = IMask(
// 	document.getElementById('rub-mask'),
// 	{
// 		mask: 'num ₽',
// 		blocks: {
// 			num: {
// 				mask: Number,
// 				thousandsSeparator: ' '
// 			}
// 		}
// 	});

const mainProductSlider = new Swiper('.cat-item__cnt.swiper', {
	loop: false,
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: '.cat-item__cnt-scroll',
		type: 'progressbar',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	navigation: {
		nextEl: '.cat-item__cnt-btns .swiper-button-next',
		prevEl: '.cat-item__cnt-btns .swiper-button-prev',
	},
	on: {
		init: () => {
			let productItems = $('.swiper-slide.cat-item__hover').length;

			$('.cat-item__cnt-last-slide').html('0' + productItems);
		},
	},
});

var swiperHeaderCompare = new Swiper(".compare-swiper.header-swiper.swiper", {
	loop: false,
	slidesPerView: 4,
	spaceBetween: 30,
	freeMode: true,
	allowTouchMove: false,
	keyboard: true,
	speed: 500,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	watchOverflow: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1680: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});

var swiperCompare = new Swiper(".compare-swiper.swiper", {
	loop: false,
	slidesPerView: 4,
	spaceBetween: 30,
	freeMode: true,
	allowTouchMove: false,
	keyboard: true,
	speed: 500,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	watchOverflow: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1680: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});


var swiperCharCompare = new Swiper(".compare-swiper.char-swiper.swiper", {
	loop: false,
	slidesPerView: 4,
	spaceBetween: 30,
	freeMode: true,
	allowTouchMove: false,
	keyboard: true,
	speed: 500,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	watchOverflow: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1680: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});

var dt = new DataTransfer();
 
$('.input-file input[type=file]').on('change', function(){
	let $files_list = $(this).closest('.input-file').next();
	$files_list.empty();
 
	for(var i = 0; i < this.files.length; i++){
		let new_file_input = '<div class="input-file-list-item">' +
			'<span class="input-file-list-name">' + this.files.item(i).name + '</span>' +
			'<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
			'</div>';
		$files_list.append(new_file_input);
		dt.items.add(this.files.item(i));
	};
	this.files = dt.files;
});
 
function removeFilesItem(target){
	let name = $(target).prev().text();
	let input = $(target).closest('.input-file-row').find('input[type=file]');	
	$(target).closest('.input-file-list-item').remove();	
	for(let i = 0; i < dt.items.length; i++){
		if(name === dt.items[i].getAsFile().name){
			dt.items.remove(i);
		}
	}
	input[0].files = dt.files;  
}







