import anime from 'animejs/lib/anime.es.js';

export default class Animations {
	_slideDown(target, dur, del) {
		anime({
			translateY: ['-150%', 0],
			targets: target,
			easing: 'linear',
			duration: dur,
			delay: del,
		});
	}

	_slideLeft(target, dur, del) {
		anime({
			// scale: [0, 1],
			translateX: ['150%', 0],
			targets: target,
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
