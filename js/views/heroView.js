import View from './View.js';

class HeroView extends View {
	_parentElement = document.querySelector('.hero__text');
	_authorPicture = document.querySelector('.hero__img .hero__img--author');
	_ringPicture = document.querySelector('.hero__img .hero__img--ring');

	_generateMarkup() {
		return `
        <h1 class="heading-primary">
            <div class="animated">
                <span
                    class="animated__text animated__text--flip-up"
                    >P</span
                ><span
                    class="animated__text animated__text--flip-down"
                    >a</span
                ><span
                    class="animated__text animated__text--opacity-increase"
                    >t</span
                ><span
                    class="animated__text animated__text--fall-down"
                    >r</span
                ><span
                    class="animated__text animated__text--fall-up"
                    >y</span
                ><span
                    class="animated__text animated__text--spin-xyz"
                    >k</span
                >
                <span
                    class="animated__text animated__text--spin-a-lot"
                    >K</span
                >erlin
            </div>
        </h1>
        <p class="hero__text">
            Suscipit aliquid qui voluptas ab voluptate sed,
            debitis quaerat aperiam maiores.
        </p>`;
	}

	showHeroView() {
		this._slideLeft(this._ringPicture, 500, 500);
		this._opacityIncrease(this._authorPicture, 1000, 1000);
		this._render();
	}
}

export default new HeroView();