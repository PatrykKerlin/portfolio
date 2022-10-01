import View from './View.js';

class HeaderView extends View {
	_header = document.querySelector('.header');

	showHeaderView() {
		this._slideDown(this._header, 'linear', 2000, 1500);

		const btnNavEl = document.querySelector('.btn-mobile-nav');
		const headerEl = document.querySelector('.header');

		btnNavEl.addEventListener('click', function () {
			headerEl.classList.toggle('nav-open');
		});
	}
}

export default new HeaderView();
