import View from './View.js';

class HeaderView extends View {
	_header = document.querySelector('.header');

	showHeaderView() {
		this._slideDown(this._header, 500, 1000);
	}
}

export default new HeaderView();
