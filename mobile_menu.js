const menuIcon = document.querySelector('.header__mobnav-btn');

const btnClose = document.querySelector('.header__mobnav-btn-close');

const menu = document.querySelector('.header__mob-menu');

const overlay = document.querySelector('.header__mob-overlay');

menuIcon.addEventListener('click', () => {
	menuIcon.style.display = 'none';

	btnClose.style.display = 'block';

	menu.style.display = 'block';

	overlay.style.display = 'block';
});

btnClose.addEventListener('click', () => {
	menuIcon.style.display = 'block';

	btnClose.style.display = 'none';

	menu.style.display = 'none';

	overlay.style.display = 'none';

});



