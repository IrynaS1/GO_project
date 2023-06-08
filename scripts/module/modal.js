const btn = document.querySelector('.header__button');

const modalWindow = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

btn.addEventListener('click', (e) => {
	e.preventDefault();

	modalWindow.style.display = 'block';
	modalWindow.classList.add('active');
	overlay.classList.add('active');
});

const btnClose = document.querySelector('.modal__close-btn');

btnClose.addEventListener('click', (e) => {
	e.preventDefault();

	modalWindow.style.display = 'none';
	modalWindow.classList.remove('active');
	overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
	e.preventDefault();

	modalWindow.style.display = 'none';
	modalWindow.classList.remove('active');
	overlay.classList.remove('active');
})

