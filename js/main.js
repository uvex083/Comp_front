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
					menuLogic = false;
					$('html, body').removeClass('menu_opened');
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

		$("body").toggleClass("menu-body");
		$("header").toggleClass("menu-header");
	});
}

menuHandler();

/* Стилизация липкого меню начало*/

$(window).scroll(function () {
	if ($(this).scrollTop() > 0) {
		$("header").addClass("anim-header");
	} else {
		$("header").removeClass("anim-header");
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

/* Расскрываем меню начало*/

$(document).ready(function () {

	$(".config-menu__title").click(function () {
		$(".config-menu__title").not(this).removeClass("open");
		$(".config-menu__title").not(this).next().slideUp(300);
		$(this).toggleClass("open");
		$(this).next().slideToggle(300);
	});


	$("#conf-pers").click(function () {
		$(".config-wrap").children().eq(0).toggleClass("open");
		$(".config-wrap").children().eq(0).children(".config-wrap__item-body").slideToggle();
	});





	/* Красим блок с цветом начало*/

	$(".item-body__color-item").click(function () {
		$(".item-body__color").css('color', '#B6B6B6');
		$(".item-body__price").css('color', '#545454');
		$(this).find(".item-body__color, .item-body__price").css('color', '#D0A220');
	});





	/* Выпадающий кастомный список начало */

	$(".cs-input").click(function () {
		$(this).next().toggleClass('open');
	});





	/* Добавление товара в конфигураторе начало */

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





	/* Добавление товара в конфигураторе в сравнение начало */

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

	$(function () {
		$nav = $('.fixed-div');
		$nav.css('width', $nav.outerWidth());
		$window = $(window);
		$h = $nav.offset().top;
		$window.scroll(function () {
			if ($window.scrollTop() > ($h - 145)) {
				$nav.addClass('fixed');
			} else {
				$nav.removeClass('fixed');
			}
		});
	});


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
		$(".podbor-item__char-cnt").slideToggle(200);
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




});

/* В инпут пишутся только числовые значения  */
const changeHandler = e => {
	const value = e.value
	e.value = value.replace(/\D/g, '')
}

var phoneMask = IMask(
	document.getElementById('phone-mask'), {
	  mask: '+{7}(000)000-00-00'
	});

	var currencyMask = IMask(
		document.getElementById('rub-mask'),
		{
		  mask: '₽ num',
		  blocks: {
			 num: {
				mask: Number,
				thousandsSeparator: ' '
			 }
		  }
		});