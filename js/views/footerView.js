import View from './View.js';

class FooterView extends View {
	_footer = document.querySelector('.footer');

	showFooterView() {
		this._slideUp(this._footer, 'linear', 1000, 1500);
	}
}

export default new FooterView();
