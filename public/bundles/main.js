/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!************************************!*\
  !*** multi ./src/renderers/dom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/renderers/dom.js */"4qhl");


/***/ }),

/***/ "4qhl":
/*!******************************!*\
  !*** ./src/renderers/dom.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/App */ \"r8ck\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ \"VxdY\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__[\"hydrate\"]( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_App__WEBPACK_IMPORTED_MODULE_2__[\"App\"], {\n  initialData: window.__R_DATA.initialData\n}), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNHFobC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvZG9tLmpzP2UyYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnY29tcG9uZW50cy9BcHAnO1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnO1xuXG5SZWFjdERPTS5oeWRyYXRlKFxuICA8QXBwIGluaXRpYWxEYXRhPXt3aW5kb3cuX19SX0RBVEEuaW5pdGlhbERhdGF9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4qhl\n");

/***/ }),

/***/ "VxdY":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnhkWS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzRlNDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///VxdY\n");

/***/ }),

/***/ "Xwlx":
/*!****************************************!*\
  !*** ./src/components/StarsDisplay.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math-utils */ \"e+oM\");\n\n\n\nvar StarsDisplay = function StarsDisplay(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _math_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].range(1, props.count).map(function (starId) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: starId,\n      className: \"star\"\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StarsDisplay);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWHdseC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0YXJzRGlzcGxheS5qcz81ZjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi9tYXRoLXV0aWxzXCI7XHJcblxyXG5jb25zdCBTdGFyc0Rpc3BsYXkgPSAocHJvcHMpID0+IChcclxuICAgIDw+XHJcbiAgICAgICAge3V0aWxzLnJhbmdlKDEsIHByb3BzLmNvdW50KS5tYXAoc3RhcklkID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3N0YXJJZH0gY2xhc3NOYW1lPVwic3RhclwiIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJzRGlzcGxheTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFGQTtBQUNBO0FBT0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///Xwlx\n");

/***/ }),

/***/ "e+oM":
/*!***************************!*\
  !*** ./src/math-utils.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar utils = {\n  sum: function sum(arr) {\n    return arr.reduce(function (acc, curr) {\n      return acc + curr;\n    }, 0);\n  },\n  range: function range(min, max) {\n    return Array.from({\n      length: max - min + 1\n    }, function (_, i) {\n      return min + i;\n    });\n  },\n  random: function random(min, max) {\n    return min + Math.floor(Math.random() * (max - min + 1));\n  },\n  randomSumIn: function randomSumIn(arr, max) {\n    var sets = [[]];\n    var sums = [];\n\n    for (var i = 0; i < arr.length; i++) {\n      for (var j = 0, len = sets.length; j < len; j++) {\n        var candidateSet = sets[j].concat(arr[i]);\n        var candidateSum = utils.sum(candidateSet);\n\n        if (candidateSum <= max) {\n          sets.push(candidateSet);\n          sums.push(candidateSum);\n        }\n      }\n    }\n\n    return sums[utils.random(0, sums.length - 1)];\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZStvTS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYXRoLXV0aWxzLmpzPzdiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXRpbHMgPSB7XHJcblxyXG4gICAgc3VtOiAoYXJyKSA9PiBhcnIucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIsIDApLFxyXG5cclxuICAgIHJhbmdlOiAobWluLCBtYXgpID0+IEFycmF5LmZyb20oeyBsZW5ndGg6IG1heCAtIG1pbiArIDEgfSwgKF8sIGkpID0+IG1pbiArIGkpLFxyXG5cclxuICAgIHJhbmRvbTogKG1pbiwgbWF4KSA9PiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpLFxyXG5cclxuICAgIHJhbmRvbVN1bUluOiAoYXJyLCBtYXgpID0+IHtcclxuICAgICAgICBjb25zdCBzZXRzID0gW1tdXTtcclxuICAgICAgICBjb25zdCBzdW1zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAsIGxlbiA9IHNldHMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZVNldCA9IHNldHNbal0uY29uY2F0KGFycltpXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVTdW0gPSB1dGlscy5zdW0oY2FuZGlkYXRlU2V0KTtcclxuICAgICAgICAgICAgICAgIGlmIChjYW5kaWRhdGVTdW0gPD0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0cy5wdXNoKGNhbmRpZGF0ZVNldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Vtcy5wdXNoKGNhbmRpZGF0ZVN1bSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1bXNbdXRpbHMucmFuZG9tKDAsIHN1bXMubGVuZ3RoIC0gMSldO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXRCQTtBQXlCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///e+oM\n");

/***/ }),

/***/ "enYR":
/*!**************************************!*\
  !*** ./src/components/PlayNumber.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PlayNumber = function PlayNumber(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"number\",\n    style: {\n      backgroundColor: colors[props.status]\n    },\n    onClick: function onClick() {\n      return props.onClick(props.number, props.status);\n    }\n  }, props.number);\n}; // Color Theme\n\n\nvar colors = {\n  available: 'lightgray',\n  used: 'lightgreen',\n  wrong: 'lightcoral',\n  candidate: 'deepskyblue'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayNumber);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5ZUi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXlOdW1iZXIuanM/N2E3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQbGF5TnVtYmVyID0gKHByb3BzKSA9PiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibnVtYmVyXCJcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1twcm9wcy5zdGF0dXNdIH19XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayhwcm9wcy5udW1iZXIsIHByb3BzLnN0YXR1cyl9XHJcbiAgICA+XHJcbiAgICAgICAge3Byb3BzLm51bWJlcn1cclxuICAgIDwvYnV0dG9uPlxyXG4pO1xyXG5cclxuLy8gQ29sb3IgVGhlbWVcclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgYXZhaWxhYmxlOiAnbGlnaHRncmF5JyxcclxuICAgIHVzZWQ6ICdsaWdodGdyZWVuJyxcclxuICAgIHdyb25nOiAnbGlnaHRjb3JhbCcsXHJcbiAgICBjYW5kaWRhdGU6ICdkZWVwc2t5Ymx1ZScsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheU51bWJlcjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///enYR\n");

/***/ }),

/***/ "oy3Y":
/*!********************************!*\
  !*** ./src/components/Game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math-utils */ \"e+oM\");\n/* harmony import */ var _StarsDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StarsDisplay */ \"Xwlx\");\n/* harmony import */ var _PlayNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayNumber */ \"enYR\");\n/* harmony import */ var _PlayAgain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayAgain */ \"xdZa\");\n\n\n\n\n\n\n\nvar useGameState = function useGameState() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].random(1, 9)),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      stars = _useState2[0],\n      setStars = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].range(1, 9)),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      availableNums = _useState4[0],\n      setAvailableNums = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      candidateNums = _useState6[0],\n      setCandidateNums = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(10),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      secondsLeft = _useState8[0],\n      setSecondsLeft = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (secondsLeft > 0 && availableNums.length > 0) {\n      var timerId = setTimeout(function () {\n        return setSecondsLeft(secondsLeft - 1);\n      }, 1000);\n      return function () {\n        return clearTimeout(timerId);\n      };\n    }\n  });\n\n  var setGameState = function setGameState(newCandidateNums) {\n    if (_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sum(newCandidateNums) !== stars) {\n      setCandidateNums(newCandidateNums);\n    } else {\n      var newAvailableNums = availableNums.filter(function (n) {\n        return !newCandidateNums.includes(n);\n      });\n      setStars(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randomSumIn(newAvailableNums, 9));\n      setAvailableNums(newAvailableNums);\n      setCandidateNums([]);\n    }\n  };\n\n  return {\n    stars: stars,\n    availableNums: availableNums,\n    candidateNums: candidateNums,\n    secondsLeft: secondsLeft,\n    setGameState: setGameState\n  };\n};\n\nvar Game = function Game(props) {\n  var _useGameState = useGameState(),\n      stars = _useGameState.stars,\n      availableNums = _useGameState.availableNums,\n      candidateNums = _useGameState.candidateNums,\n      secondsLeft = _useGameState.secondsLeft,\n      setGameState = _useGameState.setGameState;\n\n  var candidatesAreWrong = _math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sum(candidateNums) > stars;\n  var gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';\n\n  var numberStatus = function numberStatus(number) {\n    if (!availableNums.includes(number)) {\n      return 'used';\n    }\n\n    if (candidateNums.includes(number)) {\n      return candidatesAreWrong ? 'wrong' : 'candidate';\n    }\n\n    return 'available';\n  };\n\n  var onNumberClick = function onNumberClick(number, currentStatus) {\n    if (currentStatus === 'used' || secondsLeft === 0) {\n      return;\n    }\n\n    var newCandidateNums = currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(function (cn) {\n      return cn !== number;\n    });\n    setGameState(newCandidateNums);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"game\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"help\"\n  }, \"Pick 1 or more numbers that sum to the number of stars\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"left\"\n  }, gameStatus !== 'active' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PlayAgain__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: props.startNewGame,\n    gameStatus: gameStatus\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StarsDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    count: stars\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"right\"\n  }, _math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].range(1, 9).map(function (number) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PlayNumber__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: number,\n      status: numberStatus(number),\n      number: number,\n      onClick: onNumberClick\n    });\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"timer\"\n  }, \"Time Remaining: \", secondsLeft));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3kzWS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUuanM/YTMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uL21hdGgtdXRpbHNcIjtcclxuaW1wb3J0IFN0YXJzRGlzcGxheSBmcm9tIFwiLi9TdGFyc0Rpc3BsYXlcIjtcclxuaW1wb3J0IFBsYXlOdW1iZXIgZnJvbSBcIi4vUGxheU51bWJlclwiO1xyXG5pbXBvcnQgUGxheUFnYWluIGZyb20gXCIuL1BsYXlBZ2FpblwiO1xyXG5cclxuY29uc3QgdXNlR2FtZVN0YXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3N0YXJzLCBzZXRTdGFyc10gPSB1c2VTdGF0ZSh1dGlscy5yYW5kb20oMSwgOSkpO1xyXG4gICAgY29uc3QgW2F2YWlsYWJsZU51bXMsIHNldEF2YWlsYWJsZU51bXNdID0gdXNlU3RhdGUodXRpbHMucmFuZ2UoMSwgOSkpO1xyXG4gICAgY29uc3QgW2NhbmRpZGF0ZU51bXMsIHNldENhbmRpZGF0ZU51bXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlY29uZHNMZWZ0LCBzZXRTZWNvbmRzTGVmdF0gPSB1c2VTdGF0ZSgxMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2Vjb25kc0xlZnQgPiAwICYmIGF2YWlsYWJsZU51bXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiBzZXRTZWNvbmRzTGVmdChzZWNvbmRzTGVmdCAtIDEpLCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcklkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZXRHYW1lU3RhdGUgPSAobmV3Q2FuZGlkYXRlTnVtcykgPT4ge1xyXG4gICAgICAgIGlmICh1dGlscy5zdW0obmV3Q2FuZGlkYXRlTnVtcykgIT09IHN0YXJzKSB7XHJcbiAgICAgICAgICAgIHNldENhbmRpZGF0ZU51bXMobmV3Q2FuZGlkYXRlTnVtcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3QXZhaWxhYmxlTnVtcyA9IGF2YWlsYWJsZU51bXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgbiA9PiAhbmV3Q2FuZGlkYXRlTnVtcy5pbmNsdWRlcyhuKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzZXRTdGFycyh1dGlscy5yYW5kb21TdW1JbihuZXdBdmFpbGFibGVOdW1zLCA5KSk7XHJcbiAgICAgICAgICAgIHNldEF2YWlsYWJsZU51bXMobmV3QXZhaWxhYmxlTnVtcyk7XHJcbiAgICAgICAgICAgIHNldENhbmRpZGF0ZU51bXMoW10pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgc3RhcnMsIGF2YWlsYWJsZU51bXMsIGNhbmRpZGF0ZU51bXMsIHNlY29uZHNMZWZ0LCBzZXRHYW1lU3RhdGUgfTtcclxufTtcclxuXHJcbmNvbnN0IEdhbWUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBzdGFycyxcclxuICAgICAgICBhdmFpbGFibGVOdW1zLFxyXG4gICAgICAgIGNhbmRpZGF0ZU51bXMsXHJcbiAgICAgICAgc2Vjb25kc0xlZnQsXHJcbiAgICAgICAgc2V0R2FtZVN0YXRlLFxyXG4gICAgfSA9IHVzZUdhbWVTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGNhbmRpZGF0ZXNBcmVXcm9uZyA9IHV0aWxzLnN1bShjYW5kaWRhdGVOdW1zKSA+IHN0YXJzO1xyXG4gICAgY29uc3QgZ2FtZVN0YXR1cyA9IGF2YWlsYWJsZU51bXMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyAnd29uJ1xyXG4gICAgICAgIDogc2Vjb25kc0xlZnQgPT09IDAgPyAnbG9zdCcgOiAnYWN0aXZlJ1xyXG5cclxuICAgIGNvbnN0IG51bWJlclN0YXR1cyA9IG51bWJlciA9PiB7XHJcbiAgICAgICAgaWYgKCFhdmFpbGFibGVOdW1zLmluY2x1ZGVzKG51bWJlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd1c2VkJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYW5kaWRhdGVOdW1zLmluY2x1ZGVzKG51bWJlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXNBcmVXcm9uZyA/ICd3cm9uZycgOiAnY2FuZGlkYXRlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnYXZhaWxhYmxlJztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25OdW1iZXJDbGljayA9IChudW1iZXIsIGN1cnJlbnRTdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFN0YXR1cyA9PT0gJ3VzZWQnIHx8IHNlY29uZHNMZWZ0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0NhbmRpZGF0ZU51bXMgPVxyXG4gICAgICAgICAgICBjdXJyZW50U3RhdHVzID09PSAnYXZhaWxhYmxlJ1xyXG4gICAgICAgICAgICAgICAgPyBjYW5kaWRhdGVOdW1zLmNvbmNhdChudW1iZXIpXHJcbiAgICAgICAgICAgICAgICA6IGNhbmRpZGF0ZU51bXMuZmlsdGVyKGNuID0+IGNuICE9PSBudW1iZXIpO1xyXG5cclxuICAgICAgICBzZXRHYW1lU3RhdGUobmV3Q2FuZGlkYXRlTnVtcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscFwiPlxyXG4gICAgICAgICAgICAgICAgUGljayAxIG9yIG1vcmUgbnVtYmVycyB0aGF0IHN1bSB0byB0aGUgbnVtYmVyIG9mIHN0YXJzXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVTdGF0dXMgIT09ICdhY3RpdmUnID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxheUFnYWluIG9uQ2xpY2s9e3Byb3BzLnN0YXJ0TmV3R2FtZX0gZ2FtZVN0YXR1cz17Z2FtZVN0YXR1c30gLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJzRGlzcGxheSBjb3VudD17c3RhcnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMucmFuZ2UoMSwgOSkubWFwKG51bWJlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5TnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz17bnVtYmVyU3RhdHVzKG51bWJlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9e251bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTnVtYmVyQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXJcIj5UaW1lIFJlbWFpbmluZzoge3NlY29uZHNMZWZ0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBVUE7QUFBQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///oy3Y\n");

/***/ }),

/***/ "r8ck":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"oy3Y\");\n\n\n\n\nvar StarMatch = function StarMatch() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      gameId = _useState2[0],\n      setGameId = _useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: gameId,\n    startNewGame: function startNewGame() {\n      return setGameId(gameId + 1);\n    }\n  });\n};\n\nfunction App(_ref) {\n  var initialData = _ref.initialData;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),\n      count = _React$useState2[0],\n      setCount = _React$useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StarMatch, null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjhjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcz9hZmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xuXG5jb25zdCBTdGFyTWF0Y2ggPSAoKSA9PiB7XG4gIGNvbnN0IFtnYW1lSWQsIHNldEdhbWVJZF0gPSB1c2VTdGF0ZSgxKTtcbiAgcmV0dXJuIDxHYW1lIGtleT17Z2FtZUlkfSBzdGFydE5ld0dhbWU9eygpID0+IHNldEdhbWVJZChnYW1lSWQgKyAxKX0gLz47XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEFwcCh7IGluaXRpYWxEYXRhIH0pIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcbiAgICA8U3Rhck1hdGNoIC8+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///r8ck\n");

/***/ }),

/***/ "xdZa":
/*!*************************************!*\
  !*** ./src/components/PlayAgain.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PlayAgain = function PlayAgain(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"game-done\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"message\",\n    style: {\n      color: props.gameStatus === 'lost' ? 'red' : 'green'\n    }\n  }, props.gameStatus === 'lost' ? 'Game Over' : 'Nice'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: props.onClick\n  }, \"Play Again\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayAgain);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGRaYS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXlBZ2Fpbi5qcz9jNWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBsYXlBZ2FpbiA9IChwcm9wcykgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWRvbmVcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogcHJvcHMuZ2FtZVN0YXR1cyA9PT0gJ2xvc3QnID8gJ3JlZCcgOiAnZ3JlZW4nIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuZ2FtZVN0YXR1cyA9PT0gJ2xvc3QnID8gJ0dhbWUgT3ZlcicgOiAnTmljZSd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5QbGF5IEFnYWluPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXlBZ2FpbjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFNQTtBQUFBO0FBUkE7QUFDQTtBQVdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///xdZa\n");

/***/ })

/******/ });