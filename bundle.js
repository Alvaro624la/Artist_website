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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("/*\r\nimport * as \"variables\" from \"./modulos/variables\";\r\nimport * as \"funciones\" from \"./modulos/funciones\";\r\nimport * as \"bootstrap\" from \"./modulos/bootstrap\";\r\n*/\n//HAMBURGUER NAVBAR BTN\nvar hamburguer = document.getElementById('hamburguer');\nvar navMenu = document.getElementById('nav-menu');\nhamburguer.addEventListener('click', function () {\n  hamburguer.classList.toggle('active');\n  navMenu.classList.toggle('active');\n});\ndocument.getElementById('nav-link').forEach(function (n) {\n  return n.addEventListener('click', function () {\n    hamburguer.classList.remove('active');\n    navMenu.classList.remove('active');\n  });\n}); //HOME\n//CAROUSEL\n//VARIABLES\n\nvar SLIDER = document.getElementById('slider');\nvar sliderSection = document.getElementById('slider-section'); //ULTIMA FOTO\n\nvar sliderSectionLast = sliderSection[sliderSection.length - 1]; //BOTONES\n\nvar BTNRIGHT = document.getElementById('btn-right');\nvar BTNLEFT = document.getElementById('btn-left');\nSLIDER.insertAdjacentElement('afterbegin', sliderSectionLast); //FUNCIONES\n\nfunction next() {\n  var sliderSectionFirst = sliderSection[0];\n  SLIDER.style.marginLeft = '-200%';\n  SLIDER.style.transition = 'all .5s';\n  setTimeout(function () {\n    SLIDER.style.transition = 'none';\n    SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);\n    SLIDER.style.marginLeft = '-100%';\n  }, 500);\n}\n\n;\n\nfunction prev() {\n  var sliderSection = document.getElementById('slider-section');\n  var sliderSectionLast = sliderSection[sliderSection.length - 1];\n  SLIDER.style.marginLeft = '0';\n  SLIDER.style.transition = 'all .5s';\n  setTimeout(function () {\n    SLIDER.style.transition = 'none';\n    SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);\n    SLIDER.style.marginLeft = '-100%';\n  }, 500);\n}\n\n;\nBTNRIGHT.addEventListener('click', function () {\n  next();\n});\nBTNLEFT.addEventListener('click', function () {\n  prev();\n}); //MOVIMIENTO AUTOMÁTICO\n\nsetInterval(function () {\n  next();\n}, 3000);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;