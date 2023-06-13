const btnCall = document.querySelector('.header__button');

const modalWindow = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnMobMenuCall = document.querySelector('.header__mob-button');

const btnModalActive = () => {
	modalWindow.style.display = 'block';
	modalWindow.classList.add('active');
	overlay.classList.add('active');
}

btnCall.addEventListener('click', (e) => {
	e.preventDefault();

	btnModalActive();
});

btnMobMenuCall.addEventListener('click', (e) => {
	e.preventDefault();

	btnModalActive();
});

const btnCloseModal = () => {
	modalWindow.style.display = 'none';
	modalWindow.classList.remove('active');
	overlay.classList.remove('active');
};

const btnClose = document.querySelector('.modal__close-btn');

btnClose.addEventListener('click', (e) => {
	e.preventDefault();

	btnCloseModal();
});

const overlayModalActive = () => {
	modalWindow.style.display = 'none';
	modalWindow.classList.remove('active');
	overlay.classList.remove('active');
};

overlay.addEventListener('click', (e) => {
	e.preventDefault();

	overlayModalActive();
});

