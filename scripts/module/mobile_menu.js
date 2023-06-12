const menuIcon = document.querySelector('.header__mobnav-btn');

const btnClose = document.querySelector('.header__mobnav-btn-close');

const menu = document.querySelector('.header__mob-menu');

const overlay = document.querySelector('.header__mob-overlay');

const menuLinks = document.querySelectorAll('.header__mob-menu-item');

const btnMobMenuCall = document.querySelector('.header__mob-button');

function closeMenu() {
	menuIcon.style.display = 'block';

	btnClose.style.display = 'none';

	menu.style.display = 'none';

	overlay.style.display = 'none';

	requestAnimationFrame(closeMenu);
};

function openMenu() {
	menuIcon.style.display = 'none';

	btnClose.style.display = 'block';

	menu.style.display = 'block';

	overlay.style.display = 'block';

	requestAnimationFrame(openMenu);
};

menuIcon.addEventListener('click', (e) => {
	e.preventDefault();

	requestAnimationFrame(openMenu);
});

btnClose.addEventListener('click', (e) => {
	e.preventDefault();

	requestAnimationFrame(closeMenu);
});

menuLinks.forEach((menuLink) => {
	menuLink.addEventListener('click', (e) => {
		e.preventDefault();

		requestAnimationFrame(closeMenu);
	});
});

btnMobMenuCall.addEventListener('click', (e) => {
	e.preventDefault();

	requestAnimationFrame(closeMenu);
});
