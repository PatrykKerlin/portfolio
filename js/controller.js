'use strict';

import '@babel/polyfill';
import anime from 'animejs/lib/anime.es.js';
import headerView from './views/headerView.js';
import footerView from './views/footerView.js';
import heroView from './views/heroView.js';

const background = document.querySelector('.background');
const logo = document.querySelector('.intro');

const introAnimation = anime({
	targets: logo,
	rotateY: '3600deg',
	scale: [1, 1.5, 0],
	delay: 7500,
	duration: 5000,
	easing: 'easeInSine',
});

(function () {
	// background.classList.remove('background--blue');
	// introAnimation.finished.then(function () {
	// 	background.classList.add('background--blue');
	// 	headerView.showHeaderView();
	// 	footerView.showFooterView();
	// 	heroView.showHeroView();
	// });

	headerView.showHeaderView();
	footerView.showFooterView();
	heroView.showHeroView();
})();
