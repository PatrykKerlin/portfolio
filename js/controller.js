'use strict';

import '@babel/polyfill';

import introView from './views/introView.js';
import headerView from './views/headerView.js';
import footerView from './views/footerView.js';
import heroView from './views/heroView.js';

function wait(time) {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
}

(function () {
	// introView.showIntroView();
	// wait(13000).then(() => this._setBackground(this._background));
	headerView.showHeaderView();
	footerView.showFooterView();
	heroView.showHeroView();
})();
