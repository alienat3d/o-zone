/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../..!glo-academy\\o-zone\\src\\index.js":
/*!*********************************************!*\
  !*** ../..!glo-academy\o-zone\src\index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart.js */ \"../..!glo-academy\\\\o-zone\\\\src\\\\modules\\\\cart.js\");\n/* harmony import */ var _modules_second_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/second.js */ \"../..!glo-academy\\\\o-zone\\\\src\\\\modules\\\\second.js\");\n\r\n\r\n\r\n(0,_modules_cart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_second_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://o-zone/glo-academy\\o-zone\\src\\index.js?../..");

/***/ }),

/***/ "../..!glo-academy\\o-zone\\src\\modules\\cart.js":
/*!****************************************************!*\
  !*** ../..!glo-academy\o-zone\src\modules\cart.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst cart = () => {\r\n  const cartButton = document.querySelector('#cart'),\r\n    cartModal = document.querySelector('.cart'),\r\n    cartCloseButton = cartModal.querySelector('.cart-close');\r\n\r\n  const openCart = () => {\r\n    cartModal.style.display = 'flex';\r\n  };\r\n\r\n  const closeCart = () => {\r\n    cartModal.style.display = '';\r\n  };\r\n\r\n  cartButton.addEventListener('click', openCart);\r\n  cartCloseButton.addEventListener('click', closeCart);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://o-zone/glo-academy\\o-zone\\src\\modules\\cart.js?../..");

/***/ }),

/***/ "../..!glo-academy\\o-zone\\src\\modules\\second.js":
/*!******************************************************!*\
  !*** ../..!glo-academy\o-zone\src\modules\second.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst second = () => {};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (second);\r\n\n\n//# sourceURL=webpack://o-zone/glo-academy\\o-zone\\src\\modules\\second.js?../..");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../..!glo-academy\\o-zone\\src\\index.js");
/******/ 	
/******/ })()
;