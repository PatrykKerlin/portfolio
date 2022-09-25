import Animations from './Animations.js';

export default class View extends Animations {
	_clear() {
		this._parentElement.innerHTML = ``;
	}

	_render() {
		const markup = this._generateMarkup();
		this._clear();
		this._parentElement.insertAdjacentHTML(`afterbegin`, markup);
	}
}
