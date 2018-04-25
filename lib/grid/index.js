(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', './Row', './Col'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./Row'), require('./Col'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.Row, global.Col);
		global.index = mod.exports;
	}
})(this, function (exports, _Row, _Col) {
	'use strict';

	exports.__esModule = true;

	var _Row2 = _interopRequireDefault(_Row);

	var _Col2 = _interopRequireDefault(_Col);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var Grid = {
		Row: _Row2.default,
		Col: _Col2.default
	};

	exports.default = Grid;
});