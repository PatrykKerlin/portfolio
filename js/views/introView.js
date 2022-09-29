import anime from 'animejs/lib/anime.es.js';

class IntroView {
	_background = document.querySelector('.background');
	_introLogo = document.querySelector('.intro');

	_logoAanimation(logo) {
		anime({
			targets: logo,
			rotateY: '3600deg',
			scale: [1, 1.5, 0],
			delay: 7500,
			duration: 5000,
			easing: 'easeInSine',
		});
	}

	_setBackground(background) {
		background.classList.remove('background--black');
		background.classList.add('background--blue');
	}

	wait(time) {
		return new Promise((resolve) => {
			setTimeout(resolve, time);
		});
	}

	showIntroView() {
		this._background.classList.remove('background--blue');
		this._logoAanimation(this._introLogo);
		this.wait(13000).then(() => this._setBackground(this._background));
	}
}

export default new IntroView();

// targets: logo,
// rotateY: '3600deg',
// scale: [1, 1.5, 0],
// delay: 7500,
// duration: 5000,
// easing: 'easeInSine',
