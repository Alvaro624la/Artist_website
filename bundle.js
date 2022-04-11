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

eval("/*\r\nimport * as \"variables\" from \"./modulos/variables\";\r\nimport * as \"funciones\" from \"./modulos/funciones\";\r\nimport * as \"bootstrap\" from \"./modulos/bootstrap\";\r\n*/\n//HAMBURGUER NAVBAR BTN\nvar hamburguer = document.getElementById('hamburguer');\nvar navMenu = document.getElementById('nav-menu');\nhamburguer.addEventListener('click', function () {\n  hamburguer.classList.toggle('active');\n  navMenu.classList.toggle('active');\n});\nvar navLink = document.getElementsByClassName('shop__nav__ul__li__a');\n\nfunction removeActive() {\n  hamburguer.classList.remove('active');\n  navMenu.classList.remove('active');\n}\n\n;\n\nfor (var i = 0; i < navLink.length; i++) {\n  navLink[i].addEventListener('click', removeActive);\n} //HOME (/html/lmguzman.html)\n\n\nif (window.location.pathname == '/html/lmguzman.html') {\n  //FUNCIONES\n  var next = function next() {\n    var sliderSectionFirst = sliderSection[0];\n    SLIDER.style.marginLeft = '-200%';\n    SLIDER.style.transition = 'all .5s';\n    setTimeout(function () {\n      SLIDER.style.transition = 'none';\n      SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);\n      SLIDER.style.marginLeft = '-100%';\n    }, 500);\n  };\n\n  var prev = function prev() {\n    var sliderSection = document.getElementsByClassName('home__main__carousel-cont__slider__section');\n    var sliderSectionLast = sliderSection[sliderSection.length - 1];\n    SLIDER.style.marginLeft = '0%';\n    SLIDER.style.transition = 'all .5s';\n    setTimeout(function () {\n      SLIDER.style.transition = 'none';\n      SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);\n      SLIDER.style.marginLeft = '-100%';\n    }, 500);\n  };\n\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname)); //CAROUSEL\n  //VARIABLES\n\n  var SLIDER = document.getElementById('slider');\n  var sliderSection = document.getElementsByClassName('home__main__carousel-cont__slider__section'); //ULTIMA FOTO\n\n  var sliderSectionLast = sliderSection[sliderSection.length - 1]; //BOTONES\n\n  var BTNRIGHT = document.getElementById('btn-right');\n  var BTNLEFT = document.getElementById('btn-left');\n  SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);\n  ;\n  ;\n  BTNRIGHT.addEventListener('click', function () {\n    next();\n  });\n  BTNLEFT.addEventListener('click', function () {\n    prev();\n  }); //MOVIMIENTO AUTOMÁTICO\n  // setInterval(function(){\n  //     next();\n  // }, 3000);\n} else {}\n\n; //SHOP (/html/shop.html)\n\nif (window.location.pathname == '/html/shop.html') {\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname));\n} else {}\n\n; //ABOUT (/html/about.html)\n\nif (window.location.pathname == '/html/about.html') {\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname));\n} else {}\n\n; //CONTACT (/html/contact.html)\n\nif (window.location.pathname == '/html/contact.html') {\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname));\n} else {}\n\n;\n\n//# sourceURL=webpack:///./src/app.js?");

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