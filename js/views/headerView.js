import View from './View.js';

class HeaderView extends View {
	_header = document.querySelector('.header');
	_btnMobileNav = document.querySelector('.btn-mobile-nav');

	_toggleBtnMobileNav() {
		this._header.classList.toggle('nav-open');
	}

	showHeaderView() {
		this._slideDown(this._header, 'linear', 2000, 1500);

		this._btnMobileNav.addEventListener(
			'click',
			this._toggleBtnMobileNav.bind(this)
		);
	}
}

export default new HeaderView();
