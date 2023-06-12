const liElements = document.querySelectorAll('.faq__item');

const accElements = document.querySelectorAll('.faq__accord');
console.log('accElements', accElements);

const defaultOptions = (liElement, btn) => {
	liElement.style.marginBottom = '20px';

	if (btn.classList.contains('faq__item-btn_color-white')) {
		btn.style.backgroundImage = 'url("../../images/plus_purple.png")';
	} else {
		btn.style.backgroundImage = 'url("../../images/plus_white.png")';
	}
};

const activeAccord = (liElement, btn) => {
	liElement.style.marginBottom = '0';

	console.log('liElement-----', liElement);
	console.log('btn', btn);

	if (btn.classList.contains('faq__item-btn_color-white')) {
		btn.style.backgroundImage = 'url("../../images/minus_for_purple_active.png")';
	} else {
		btn.style.backgroundImage = 'url("../../images/minus_for_white_active.png")';
	}
};

liElements.forEach((liElement, index) => {
	liElement.addEventListener('click', (e) => {
		e.preventDefault();

		accElements[index].classList.toggle('invisible');

		const btn = liElement.lastChild.previousElementSibling;

		if (!accElements[index].classList.contains('invisible')) {
			accElements[index].className += '';
			activeAccord(liElement, btn);
		} else {
			accElements[index].className += 'faq__accord invisible';
			defaultOptions(liElement, btn);
		}
	});
});

const resetFaqOptions = (accElement) => {
	accElement.classList.add('invisible');

	const faqLiItem = accElement.previousElementSibling;
	faqLiItem.style.marginBottom = '20px';

	const btnLiItem = faqLiItem.childNodes[3];

	if (btnLiItem.classList.contains('faq__item-btn_color-white')) {
		btnLiItem.style.backgroundImage = 'url("../../images/plus_purple.png")';
	} else {
		btnLiItem.style.backgroundImage = 'url("../../images/plus_white.png")';
	}
};

document.addEventListener('click', (e) => {
	e.preventDefault();

	if (!e.target.classList.contains('faq__item')) {
		accElements.forEach((accElement) => {
			if (!accElement.classList.contains('invisible')) {
				resetFaqOptions(accElement);
			}
		});
	}
});



