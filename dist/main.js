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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart.js */ \"../..!glo-academy\\\\o-zone\\\\src\\\\modules\\\\cart.js\");\n/* harmony import */ var _modules_second_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/second.js */ \"../..!glo-academy\\\\o-zone\\\\src\\\\modules\\\\second.js\");\n/* harmony import */ var _modules_get_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/get-data.js */ \"../..!glo-academy\\\\o-zone\\\\src\\\\modules\\\\get-data.js\");\n\r\n\r\n\r\n// import postData from './modules/post-data.js';\r\n// import deleteData from './modules/delete-data.js';\r\n\r\n(0,_modules_cart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_second_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_get_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n// postData();\r\n// deleteData();\n\n//# sourceURL=webpack://o-zone/glo-academy\\o-zone\\src\\index.js?../..");

/***/ }),

/***/ "../..!glo-academy\\o-zone\\src\\modules\\cart.js":
/*!****************************************************!*\
  !*** ../..!glo-academy\o-zone\src\modules\cart.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n// import getData from './get-data.js'; // ? 0.1 - модули не обязательно всегда импортировать и запускать в точке входа.\r\n\r\nconst cart = () => {\r\n  const cartButton = document.querySelector('#cart'),\r\n    cartModal = document.querySelector('.cart'),\r\n    cartCloseButton = cartModal.querySelector('.cart-close');\r\n\r\n  const openCart = () => {\r\n    cartModal.style.display = 'flex';\r\n  };\r\n\r\n  const closeCart = () => {\r\n    cartModal.style.display = '';\r\n  };\r\n\r\n  cartButton.addEventListener('click', openCart);\r\n  cartCloseButton.addEventListener('click', closeCart);\r\n\r\n  // console.log(getData()) // 0.2\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://o-zone/glo-academy\\o-zone\\src\\modules\\cart.js?../..");

/***/ }),

/***/ "../..!glo-academy\\o-zone\\src\\modules\\get-data.js":
/*!********************************************************!*\
  !*** ../..!glo-academy\o-zone\src\modules\get-data.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n  // 1.1 Метод fetch() создан специально для работы с серверными запросами, он принимает один обязательный аргумент - это строку URL, по которой находятся данные, которые нам необходимо получить.\r\n  // 1.2 Когда fetch() запускается, то он делает обращение по URL, которое мы предоставляем в качестве аргумента. На другой стороне сервер принимает наш запрос и отдаёт данные исходя из запроса. В данном примере с сервиса jsonplaceholder.typicode.com из массива \"todos\" мы получаем элемент с индексом \"1\".\r\n  // 1.3 Далее сервер формирует некий ответ на наш запрос и присылает его нам. Но этот ответ сервер пришлёт не сразу, а через какое-то время. И это количество времени нам точно не известно, т.к. зависит от многих факторов.\r\n  // 1.4 И чтобы мы могли работать с информацией в тот момент, когда она точно нами получена, для метода fetch() существует специальный метод then(). Данный метод получает аргументом callback-функцию, а она уже принимает параметр \"response\", т.е. ответ от сервера. Теперь then() запустить свою callback-функцию только тогда, когда получит весь ответ от сервера, а аргументом в эту функцию он отправит весь ответ от сервера \"(response)\".\r\n  // ? Callback-функция - это обычная функция, которую мы передаём аргументом в другую функцию.\r\n  // 1.5 Среди разных свойств полученного объекта есть и \"body: ReadableStream\", это как раз те данные, что мы и ждали, но только не в том виде, что будет нам полезным. А чтобы как-то с ним работать нам сперва потребуется расшифровать его специальным методом JSON(), который переведёт ответ в JSON-структуру и вернуть с return.\r\n  // 1.6 Далее используем ещё один метод then(), который также получит callback-функцию в качестве аргумента, но этот then() получит уже другие, изменённые данные, те, что вернёт response.json() в предыдущем then() и назовём мы этот аргумент \"data\"\r\n  return fetch('https://o-zone-fake-default-rtdb.europe-west1.firebasedatabase.app/goods.json')\r\n  .then((response) => { return response.json(); });\r\n  \r\n  /* .then((data) => {\r\n      console.log(data); // 1.7 И вот мы видим уже наш объект в том виде, который нам был нужен. И теперь мы её можем отправить например на рендер или в сохранение на localStorage.\r\n    }); */\r\n  // ? Кстати с JSONplaceholder, помимо todos мы также можем получать ещё следующие данные:\r\n  /*   \r\n  /posts/1/comments\r\n  /albums/1/photos\r\n  /users/1/albums\r\n  /users/1/todos\r\n  /users/1/posts \r\n  */\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\r\n// Здесь мы разобрали метод get, но на самом деле методов гораздо больше, например можно разобрать также метод post, для этого перейдём в post-data.js [...]\r\n\r\n// 3.1 Итак, мы создали уже два отдельных модуля getData & postData, которые можем вызывать из любого другого модуля.\r\n// 3.2 Ещё раз - При вызове getData функция вернёт результат выполнения метода fetch(), который является асинхронной операцией, а это означает, что результат его выполнения займёт определённое время. И сколько времени займёт мы точно не можем узнать. Для этого мы используем метод then(), который будет отработан сразу, как только данные с сервера полностью поступят. Тогда эти данные поступят через аргумент в callback-функцию, которая переведёт в удобный нам формат и вернёт эти данные наружу. Далее эти данные также будут возвращены из функции getData, вместо вызова этой функции getData() туда, где нам это может понадобиться и можно будет воспользоваться ещё одним then(), чтобы вывести в консоль или отправить в какую-то другую функцию данные от сервера. \r\n// * getData().then((data) => {  console.log(data); });\r\n\n\n//# sourceURL=webpack://o-zone/glo-academy\\o-zone\\src\\modules\\get-data.js?../..");

/***/ }),

/***/ "../..!glo-academy\\o-zone\\src\\modules\\second.js":
/*!******************************************************!*\
  !*** ../..!glo-academy\o-zone\src\modules\second.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-data.js */ \"../..!glo-academy\\\\o-zone\\\\src\\\\modules\\\\get-data.js\");\n\r\n\r\nconst second = () => {\r\n  const cartButton = document.querySelector('#cart');\r\n\r\n  (0,_get_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n    console.log(data);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (second);\r\n\n\n//# sourceURL=webpack://o-zone/glo-academy\\o-zone\\src\\modules\\second.js?../..");

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