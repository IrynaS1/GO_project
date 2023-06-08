const faqBtns = document.querySelectorAll('.faq__item-btn');

const defaultOptions = (e, btn) => {
	const faqElement = e.target.parentElement;
	faqElement.style.marginBottom = '20px';

	if (btn.classList.contains('faq__item-btn_color-white')) {
		btn.style.backgroundImage = 'url("../../images/plus_purple.png")';
	} else {
		btn.style.backgroundImage = 'url("../../images/plus_white.png")';
	}
};

const activeAccord = (e, btn) => {
	const faqElement = e.target.parentElement;
	faqElement.style.marginBottom = '0';

	if (btn.classList.contains('faq__item-btn_color-white')) {
		btn.style.backgroundImage = 'url("../../images/minus_for_purple_active.png")';
	} else {
		btn.style.backgroundImage = 'url("../../images/minus_for_white_active.png")';
	}
};

faqBtns.forEach((faqBtn) => {
	faqBtn.addEventListener('click', (e) => {
		e.preventDefault();

		const faqAccElement = e.target.parentElement.nextElementSibling;
		faqAccElement.classList.toggle('invisible');

		const btn = e.target.parentElement.lastChild.previousElementSibling;

		if (!faqAccElement.classList.contains('invisible')) {
			activeAccord(e, btn);
		} else {
			defaultOptions(e, btn);
		}
	});
});

const resetFaqOptions = (faqAccItem) => {
	faqAccItem.classList.add('invisible');

	const faqLiItem = faqAccItem.previousElementSibling;
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

	if (!e.target.classList.contains('faq__item-btn')) {
		const faqAccItems = document.querySelectorAll('.faq__accord');

		faqAccItems.forEach((faqAccItem) => {
			if (!faqAccItem.classList.contains('invisible')) {
				resetFaqOptions(faqAccItem);
			}
		});
	}
});

