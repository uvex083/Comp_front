/* Бургер и меню НАЧАЛО */

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
	});
}

menuHandler();

/* Бургер и меню КОНЕЦ */



/* Карточка товара НАЧАЛО */

/* Расскрываем меню  */

$(document).ready(function () {
	$(".config-menu__title").click(function () {
		$(".config-menu__title").not(this).removeClass("open");
		$(".config-menu__title").not(this).next().slideUp(300);
		$(this).toggleClass("open");
		$(this).next().slideToggle(300);
	 });
});

/* Карточка товара КОНЕЦ */


$(document).ready(function () {
	$(".item-body__color-item").click(function () {
		$(".item-body__color").css('color', '#B6B6B6');
		$(".item-body__price").css('color', '#545454');
		$(this).find(".item-body__color, .item-body__price").css('color', '#D0A220');
	 });
});


