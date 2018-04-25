(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', './button/Button', './grid/index'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./button/Button'), require('./grid/index'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.Button, global.index);
		global.index = mod.exports;
	}
})(this, function (exports, _Button, _index) {
	'use strict';

	exports.__esModule = true;
	exports.Grid = exports.Button = undefined;

	var _Button2 = _interopRequireDefault(_Button);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	exports.Button = _Button2.default;
	exports.Grid = _index2.default;
});