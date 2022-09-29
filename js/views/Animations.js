import anime from 'animejs/lib/anime.es.js';

export default class Animations {
	_slideDown(target, eas, dur, del) {
		anime({
			targets: target,
			translateY: ['-100%', 0],
			opacity: [0, 1],
			easing: eas,
			duration: dur,
			delay: del,
		});
	}

	_slideUp(target, eas, dur, del) {
		anime({
			targets: target,
			translateY: ['100%', 0],
			opacity: [0, 1],
			easing: eas,
			duration: dur,
			delay: del,
		});
	}

	_slideLeft(target, eas, dur, del) {
		anime({
			translateX: ['100%', 0],
			opacity: [0, 1],
			targets: target,
			easing: eas,
			duration: dur,
			delay: del,
		});
	}

	_slideRight(target, eas, dur, del) {
		anime({
			translateX: ['-100%', 0],
			opacity: [0, 1],
			targets: target,
			easing: eas,
			duration: dur,
			delay: del,
		});
	}

	_opacityIncrease(target, eas, dur, del) {
		anime({
			opacity: [0, 1],
			targets: target,
			easing: eas,
			duration: dur,
			delay: del,
		});
	}

	_rotateRight(target, eas, dur, del) {
		anime({
			opacity: [0, 1],
			rotate: ['360deg', 0],
			targets: target,
			easing: eas,
			duration: dur,
			delay: del,
		});
	}

	_rotateLeft(target, eas, dur, del) {
		anime({
			opacity: [0, 1],
			rotate: ['-360deg', 0],
			targets: target,
			easing: eas,
			duration: dur,
			delay: del,
		});
	}

	_rotateY(target, eas, dur, del) {
		anime({
			opacity: [0, 1],
			rotateY: ['720deg', 0],
			targets: target,
			easing: eas,
			duration: dur,
			delay: del,
		});
	}

	_rotateX(target, eas, dur, del) {
		anime({
			opacity: [0, 1],
			rotateX: ['360deg', 0],
			targets: target,
			easing: eas,
			duration: dur,
			delay: del,
		});
	}

	_scaleUp(target, eas, dur, del) {
		anime({
			opacity: [0, 1],
			scale: [0, 1.5, 1],
			targets: target,
			easing: eas,
			duration: dur,
			delay: del,
		});
	}

	_fallDown(target, eas, dur, del) {
		anime({
			opacity: [0, 1],
			rotateX: ['180deg', 0],
			translateY: ['100%', 0],
			targets: target,
			easing: eas,
			duration: dur,
			delay: del,
		});
	}

	_fallUp(target, eas, dur, del) {
		anime({
			opacity: [0, 1],
			rotateX: ['-180deg', 0],
			translateY: ['-100%', 0],
			targets: target,
			easing: eas,
			duration: dur,
			delay: del,
		});
	}
}
