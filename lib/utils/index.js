(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.index = mod.exports;
	}
})(this, function (exports) {
	"use strict";

	exports.__esModule = true;

	var pxToNumber = function pxToNumber(pxStr) {
		var number = 0;
		pxStr = pxStr.trim();
		if (pxStr.endsWith("px")) {
			number = pxStr.slice(0, pxStr.length - 2);
		} else {
			number = pxStr;
		}
		//Object.is(NaN,NaN)=>true
		number = Object.is(Number(number), NaN) ? 0 : Number(number);
		return Number(number);
	};

	exports.pxToNumber = pxToNumber;
});