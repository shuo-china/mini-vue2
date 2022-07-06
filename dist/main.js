/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: Final loader (./modules/vue-loader/index.js) didn't return a Buffer or String\\n    at processResult (C:\\\\Users\\\\aaron\\\\Desktop\\\\vue-simple\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:774:17)\\n    at C:\\\\Users\\\\aaron\\\\Desktop\\\\vue-simple\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:860:5\\n    at C:\\\\Users\\\\aaron\\\\Desktop\\\\vue-simple\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:407:3\\n    at iterateNormalLoaders (C:\\\\Users\\\\aaron\\\\Desktop\\\\vue-simple\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:10)\\n    at iterateNormalLoaders (C:\\\\Users\\\\aaron\\\\Desktop\\\\vue-simple\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:240:10)\\n    at C:\\\\Users\\\\aaron\\\\Desktop\\\\vue-simple\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:255:3\\n    at runSyncOrAsync (C:\\\\Users\\\\aaron\\\\Desktop\\\\vue-simple\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:11)\\n    at iterateNormalLoaders (C:\\\\Users\\\\aaron\\\\Desktop\\\\vue-simple\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:251:2)\\n    at C:\\\\Users\\\\aaron\\\\Desktop\\\\vue-simple\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:224:4\\n    at C:\\\\Users\\\\aaron\\\\Desktop\\\\vue-simple\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:834:15\");\n\n//# sourceURL=webpack://vue-simple/./src/App.vue?");

/***/ }),

/***/ "./modules/vue/index.js":
/*!******************************!*\
  !*** ./modules/vue/index.js ***!
  \******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://vue-simple/./modules/vue/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.vue\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/vue */ \"./modules/vue/index.js\");\n/* harmony import */ var _modules_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_vue__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconsole.log((_App__WEBPACK_IMPORTED_MODULE_0___default()))\n\n;(0,_modules_vue__WEBPACK_IMPORTED_MODULE_1__.createApp)((_App__WEBPACK_IMPORTED_MODULE_0___default())).mount('#app')\n\nfunction a(args) {\n  args.a = n1\n}\n\n\n//# sourceURL=webpack://vue-simple/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;