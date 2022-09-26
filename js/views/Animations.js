import anime from 'animejs/lib/anime.es.js';

export default class Animations {
	_slideDown(target, dur, del) {
		anime({
			targets: target,
			translateY: ['-150%', 0],
			easing: 'linear',
			duration: dur,
			delay: del,
		});
	}

	_slideLeft(target, dur, del) {
		anime({
			targets: target,
			translateX: ['150%', 0],
			// scale: [0, 1],
			easing: 'linear',
			duration: dur,
			delay: del,
		});
	}

	_opacityIncrease(target, dur, del) {
		anime({
			opacity: [0, 1],
			targets: target,
			easing: 'linear',
			duration: dur,
			delay: del,
		});
	}
}
