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

eval("/*\r\nimport * as \"variables\" from \"./modulos/variables\";\r\nimport * as \"funciones\" from \"./modulos/funciones\";\r\nimport * as \"bootstrap\" from \"./modulos/bootstrap\";\r\n*/\nvar hamburguer = document.getElementById('hamburguer');\nvar navMenu = document.getElementById('nav-menu');\nhamburguer.addEventListener('click', function () {\n  hamburguer.classList.toggle('active');\n  navMenu.classList.toggle('active');\n});\ndocument.getElementById('nav-link').forEach(function (n) {\n  return n.addEventListener('click', function () {\n    hamburguer.classList.remove('active');\n    navMenu.classList.remove('active');\n  });\n}); // document.getElementsByTagName('body').addEventListener('click', ()=>{\n//     hamburguer.classList.remove('active');\n//     navMenu.classList.remove('active');\n// }))\n\n//# sourceURL=webpack:///./src/app.js?");

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