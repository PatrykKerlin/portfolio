import View from './View.js';

class HeroView extends View {
	_sectionHero = document.querySelector('.section-hero');
	_parentElement = document.querySelector('.hero__text');
	_authorPicture = document.querySelector('.img-author');
	_ringPicture = document.querySelector('.img-ring');
	_welcomeText = document.querySelector('.welcome-big');
	_developerText = document.querySelector('.developer-small');
	_heroParagraph = document.querySelector('.hero-paragraph');
	_btnContact = document.querySelector('.btn-contact-big');
	_btnAbout = document.querySelector('.btn-about');
	_letters = document.querySelectorAll('.letter');

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
        <p class="paragraph">
            Junior front-end/full-stack developer.
        </p>`;
	}

	showHeroView() {
		// this._sectionHero.classList.remove('hidden');

		this._slideRight(this._letters[0], 'easeOutBack', 600, 500);
		this._slideUp(this._letters[1], 'easeOutBack', 600, 900);
		this._rotateRight(this._letters[2], 'easeOutBack', 600, 1300);
		this._scaleUp(this._letters[3], 'easeOutBack', 600, 1700);
		this._fallDown(this._letters[4], 'easeOutBack', 1000, 2100);
		this._slideLeft(this._letters[5], 'easeOutBack', 600, 2500);
		this._rotateY(this._letters[6], 'easeOutBack', 600, 2900);
		this._fallUp(this._letters[7], 'easeOutBack', 1000, 3300);
		this._rotateLeft(this._letters[8], 'easeOutBack', 600, 3700);
		this._rotateX(this._letters[9], 'easeOutBack', 600, 4100);
		this._slideUp(this._letters[10], 'easeOutBack', 600, 4500);
		this._slideLeft(this._letters[11], 'easeOutBack', 600, 4900);

		this._slideLeft(this._ringPicture, 'linear', 1000, 4500);
		this._opacityIncrease(this._authorPicture, 'linear', 1500, 5500);
		this._slideUp(this._welcomeText, 'linear', 5000, 500);
		this._opacityIncrease(this._developerText, 'linear', 1000, 6000);
		this._slideRight(this._heroParagraph, 'easeInOutElastic', 2000, 6250);
		this._scaleUp(this._btnContact, 'easeOutBack', 1000, 6500);
		this._scaleUp(this._btnAbout, 'easeOutBack', 1000, 6500);
		// this._render();
	}
}

export default new HeroView();
