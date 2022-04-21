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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/objects.js */ \"./src/modulos/objects.js\");\n\n/*\r\nimport * as \"variables\" from \"./modulos/variables\";\r\nimport * as \"funciones\" from \"./modulos/funciones\";\r\nimport * as \"bootstrap\" from \"./modulos/bootstrap\";\r\n*/\n// ALL HTML PAGES\n//HAMBURGUER NAVBAR BTN\n\nvar hamburguer = document.getElementById('hamburguer');\nvar navMenu = document.getElementById('nav-menu');\nhamburguer.addEventListener('click', function () {\n  hamburguer.classList.toggle('active');\n  navMenu.classList.toggle('active');\n});\nvar navLink = document.getElementsByClassName('shop__nav__ul__li__a');\n\nfunction removeActive() {\n  hamburguer.classList.remove('active');\n  navMenu.classList.remove('active');\n}\n\n;\n\nfor (var i = 0; i < navLink.length; i++) {\n  navLink[i].addEventListener('click', removeActive);\n} //HOME (/html/home.html)\n\n\nif (window.location.pathname == '/html/home.html') {\n  //FUNCIONES\n  var next = function next() {\n    var sliderSectionFirst = sliderSection[0];\n    SLIDER.style.marginLeft = '-200%';\n    SLIDER.style.transition = 'all 1.4s';\n    setTimeout(function () {\n      SLIDER.style.transition = 'none';\n      SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);\n      SLIDER.style.marginLeft = '-100%';\n    }, 1400);\n  };\n\n  var prev = function prev() {\n    var sliderSection = document.getElementsByClassName('home__main__carousel-cont__slider__section');\n    var sliderSectionLast = sliderSection[sliderSection.length - 1];\n    SLIDER.style.marginLeft = '0%';\n    SLIDER.style.transition = 'all 1.4s';\n    setTimeout(function () {\n      SLIDER.style.transition = 'none';\n      SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);\n      SLIDER.style.marginLeft = '-100%';\n    }, 1400);\n  };\n\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname)); //CAROUSEL\n  //VARIABLES\n\n  var SLIDER = document.getElementById('slider');\n  var sliderSection = document.getElementsByClassName('home__main__carousel-cont__slider__section'); //ULTIMA FOTO\n\n  var sliderSectionLast = sliderSection[sliderSection.length - 1]; //BOTONES\n\n  var BTNRIGHT = document.getElementById('btn-right');\n  var BTNLEFT = document.getElementById('btn-left');\n  SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);\n  ;\n  ;\n  BTNRIGHT.addEventListener('click', function () {\n    next(); //reiniciar intervalo al clickar en btn\n\n    clearInterval(autocarousel);\n    autocarousel = setInterval(function () {\n      next();\n    }, 4000);\n  });\n  BTNLEFT.addEventListener('click', function () {\n    prev(); //reiniciar intervalo al clickar en btn\n\n    clearInterval(autocarousel);\n    autocarousel = setInterval(function () {\n      next();\n    }, 4000);\n  }); //MOVIMIENTO AUTOMÁTICO al cargar pagina\n\n  var autocarousel = setInterval(function () {\n    next();\n  }, 4000);\n} else {}\n\n; //SHOP (/html/shop.html)\n\nif (window.location.pathname == '/html/shop.html') {\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname)); //VARIABLES\n  //seccion(shop-container)\n\n  var CONTAINER = document.getElementById('shop-cont'); //all cards\n\n  var allCards = document.getElementsByClassName('shop__main__grid-1__shop-cont__card'); // //mostrar todos los allCards id\n  // for (var i = 0; allCards.length > i; i++) {\n  //     console.log(allCards[i] = allCards[i].id);\n  // }\n  //Objetos\n\n  for (var i = 0; _modulos_objects_js__WEBPACK_IMPORTED_MODULE_0__.objects.length > i; i++) {\n    console.log(_modulos_objects_js__WEBPACK_IMPORTED_MODULE_0__.objects[i]);\n  }\n} else {}\n\n; //ABOUT (/html/about.html)\n\nif (window.location.pathname == '/html/about.html') {\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname));\n} else {}\n\n; //CONTACT (/html/contact.html)\n\nif (window.location.pathname == '/html/contact.html') {\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname));\n} else {}\n\n;\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modulos/objects.js":
/*!********************************!*\
  !*** ./src/modulos/objects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"objects\": () => (/* binding */ objects)\n/* harmony export */ });\nvar objects = [{\n  id: '000001',\n  name: 'monalisa',\n  size: '120x50cm',\n  price: '70€',\n  category: 'models'\n}, {\n  id: '000002',\n  name: 'cold',\n  size: '100x40cm',\n  price: '30€',\n  category: 'animals'\n}, {\n  id: '000003',\n  name: 'extasis',\n  size: '300x100cm',\n  price: '99€',\n  category: 'oil'\n}, {\n  id: '000004',\n  name: 'mercredi',\n  size: '210x100cm',\n  price: '40€',\n  category: 'sculptures'\n}, {\n  id: '000005',\n  name: 'where',\n  size: '130x60cm',\n  price: '45€',\n  category: 'landscapes'\n}, {\n  id: '000006',\n  name: 'universe',\n  size: '120x20cm',\n  price: '60€',\n  category: 'oil'\n}, {\n  id: '000007',\n  name: 'oro',\n  size: '400x100cm',\n  price: '59€',\n  category: 'models'\n}, {\n  id: '000008',\n  name: 'no longer',\n  size: '110x50cm',\n  price: '40€',\n  category: 'landscapes'\n}, {\n  id: '000009',\n  name: 'beauty',\n  size: '300x100cm',\n  price: '50€',\n  category: 'models'\n}];\n\n//# sourceURL=webpack:///./src/modulos/objects.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;