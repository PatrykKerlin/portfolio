import View from './View.js';

class FooterView extends View {
	_footer = document.querySelector('.footer');
	_year = document.querySelector('.year');

	_setYear() {
		const currentYear = new Date().getFullYear();
		this._year.textContent = currentYear;
	}

	showFooterView() {
		this._setYear();
		this._slideUp(this._footer, 'linear', 2000, 1500);
	}
}

export default new FooterView();
