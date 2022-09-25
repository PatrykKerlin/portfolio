class TerminalView {
	_parentElement = document.querySelector('.terminal__box');

	wait(time) {
		return new Promise((resolve) => {
			setTimeout(resolve, time);
		});
	}

	async renderString(stringObject) {
		for (const object of stringObject) {
			const p = document.createElement('p');
			this._parentElement.appendChild(p);
			p.classList.add('terminal__box__text');

			if (object.usersInput) {
				p.classList.add('terminal__box__text--blinker');
				p.insertAdjacentText('beforeend', '> ');
				await this.wait(1500);
				for (const letter of object.string) {
					await this.wait(500);
					p.insertAdjacentText('beforeend', letter);
				}
				await this.wait(1500);
				p.classList.remove('terminal__box__text--blinker');
			} else {
				p.insertAdjacentHTML(
					'beforeend',
					`<span class="terminal__box__text terminal__box__text--align">> </span>${object.string}`
				);
				await this.wait(750);
			}
		}
	}
}

export default new TerminalView();

// var TerminalEmulator = {
// 	init: function (screen) {
// 		var inst = Object.create(this);
// 		inst.screen = screen;
// 		inst.createInput();

// 		return inst;
// 	},

// 	createInput: function () {
// 		var inputField = document.createElement('div');
// 		var inputWrap = document.createElement('div');

// 		inputField.className = 'terminal_emulator__field';
// 		inputField.innerHTML = '';
// 		inputWrap.appendChild(inputField);
// 		this.screen.appendChild(inputWrap);
// 		this.field = inputField;
// 		this.fieldwrap = inputWrap;
// 	},

// 	enterInput: function (input) {
// 		return new Promise((resolve, reject) => {
// 			var randomSpeed = (max, min) => {
// 				return Math.random() * (max - min) + min;
// 			};

// 			var speed = randomSpeed(70, 90);
// 			var i = 0;
// 			var str = '';
// 			var type = () => {
// 				str = str + input[i];
// 				this.field.innerHTML = str.replace(/ /g, '&nbsp;');
// 				i++;

// 				setTimeout(() => {
// 					if (i < input.length) {
// 						if (i % 5 === 0) speed = randomSpeed(80, 120);
// 						type();
// 					} else {
// 						console.log('tick');
// 						setTimeout(() => {
// 							console.log('tock');
// 							resolve();
// 						}, 400);
// 					}
// 				}, speed);
// 			};

// 			type();
// 		});
// 	},

// 	enterCommand: function () {
// 		return new Promise((resolve, reject) => {
// 			var resp = document.createElement('div');
// 			resp.className = 'terminal_emulator__command';
// 			resp.innerHTML = this.field.innerHTML;
// 			this.screen.insertBefore(resp, this.fieldwrap);

// 			this.field.innerHTML = '';
// 			resolve();
// 		});
// 	},

// 	enterResponse: function (response) {
// 		return new Promise((resolve, reject) => {
// 			var resp = document.createElement('div');
// 			resp.className = 'terminal_emulator__response';
// 			resp.innerHTML = response;
// 			this.screen.insertBefore(resp, this.fieldwrap);

// 			resolve();
// 		});
// 	},

// 	wait: function (time, busy) {
// 		busy = busy === undefined ? true : busy;
// 		return new Promise((resolve, reject) => {
// 			if (busy) {
// 				this.field.classList.add('waiting');
// 			} else {
// 				this.field.classList.remove('waiting');
// 			}
// 			setTimeout(() => {
// 				resolve();
// 			}, time);
// 		});
// 	},

// 	reset: function () {
// 		return new Promise((resolve, reject) => {
// 			this.field.classList.remove('waiting');
// 			resolve();
// 		});
// 	},
// };

// /*
//  *
//  * This is where the magic happens
//  *
//  */

// var TE = TerminalEmulator.init(document.getElementById('screen'));

// TE.wait(1000, false)
// 	.then(TE.enterInput.bind(TE, 'npm install website'))
// 	.then(TE.enterCommand.bind(TE))
// 	.then(TE.enterResponse.bind(TE, 'npm installing packages...'))
// 	.then(TE.wait.bind(TE, 2000))
// 	.then(TE.enterResponse.bind(TE, '- style v9.9.9 installed.'))
// 	.then(TE.wait.bind(TE, 600))
// 	.then(TE.enterResponse.bind(TE, '- markup v0.1.0 installed. '))
// 	.then(TE.wait.bind(TE, 600))
// 	.then(TE.enterResponse.bind(TE, '- scripts v9.9.9 installed. '))
// 	.then(TE.wait.bind(TE, 300))
// 	.then(TE.enterResponse.bind(TE, '- 10 billion dependencies installed. '))
// 	.then(TE.wait.bind(TE, 700))
// 	.then(TE.enterResponse.bind(TE, 'Make website responsive? (y/y)'))
// 	.then(TE.wait.bind(TE, 2000, false))
// 	.then(TE.enterInput.bind(TE, 'y'))
// 	.then(TE.enterCommand.bind(TE))
// 	.then(TE.wait.bind(TE, 400))
// 	.then(TE.enterResponse.bind(TE, 'Make website accessible? (y/y)'))
// 	.then(TE.wait.bind(TE, 1800, false))
// 	.then(TE.enterInput.bind(TE, 'y'))
// 	.then(TE.enterCommand.bind(TE))
// 	.then(TE.wait.bind(TE, 400))
// 	.then(TE.enterResponse.bind(TE, 'finalizing...'))
// 	.then(TE.wait.bind(TE, 2000))
// 	.then(TE.enterResponse.bind(TE, "Website complete! Wasn't that easy?"))
// 	.then(TE.reset.bind(TE));
