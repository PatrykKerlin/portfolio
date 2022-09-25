'use strict';

import '@babel/polyfill';

import terminalView from './views/terminalView.js';
import heroView from './views/heroView.js';
import headerView from './views/headerView.js';
import {TERMINAL_STRINGS} from './config.js';

async function controlTerminalView() {
	await terminalView.renderString(TERMINAL_STRINGS);
}

// controlTerminalView();

(function () {
	headerView.showHeaderView();
	heroView.showHeroView();
})();
