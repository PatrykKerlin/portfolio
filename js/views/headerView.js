import View from './View.js';

class HeaderView extends View {
	_header = document.querySelector('.header');

	showHeaderView() {
		this._slideDown(this._header, 'linear', 2000, 1500);
	}
}

export default new HeaderView();
