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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_stockproductos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/stockproductos.js */ \"./src/modulos/stockproductos.js\");\n // ALL HTML PAGES\n//HAMBURGUER NAVBAR BTN\n\nvar hamburguer = document.getElementById('hamburguer');\nvar navMenu = document.getElementById('nav-menu');\nhamburguer.addEventListener('click', function () {\n  hamburguer.classList.toggle('active');\n  navMenu.classList.toggle('active');\n});\nvar navLink = document.getElementsByClassName('shop__nav__ul__li__a');\n\nfunction removeActive() {\n  hamburguer.classList.remove('active');\n  navMenu.classList.remove('active');\n}\n\n;\n\nfor (var i = 0; i < navLink.length; i++) {\n  navLink[i].addEventListener('click', removeActive);\n} //HOME (/html/home.html)\n\n\nif (window.location.pathname == '/html/home.html') {\n  //FUNCIONES\n  var next = function next() {\n    var sliderSectionFirst = sliderSection[0];\n    SLIDER.style.marginLeft = '-200%';\n    SLIDER.style.transition = 'all 1.4s';\n    setTimeout(function () {\n      SLIDER.style.transition = 'none';\n      SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);\n      SLIDER.style.marginLeft = '-100%';\n    }, 1400);\n  };\n\n  var prev = function prev() {\n    var sliderSection = document.getElementsByClassName('home__main__carousel-cont__slider__section');\n    var sliderSectionLast = sliderSection[sliderSection.length - 1];\n    SLIDER.style.marginLeft = '0%';\n    SLIDER.style.transition = 'all 1.4s';\n    setTimeout(function () {\n      SLIDER.style.transition = 'none';\n      SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);\n      SLIDER.style.marginLeft = '-100%';\n    }, 1400);\n  };\n\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname)); //CAROUSEL\n  //VARIABLES\n\n  var SLIDER = document.getElementById('slider');\n  var sliderSection = document.getElementsByClassName('home__main__carousel-cont__slider__section'); //ULTIMA FOTO\n\n  var sliderSectionLast = sliderSection[sliderSection.length - 1]; //BOTONES\n\n  var BTNRIGHT = document.getElementById('btn-right');\n  var BTNLEFT = document.getElementById('btn-left');\n  SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);\n  ;\n  ;\n  BTNRIGHT.addEventListener('click', function () {\n    next(); //reiniciar intervalo al clickar en btn\n\n    clearInterval(autocarousel);\n    autocarousel = setInterval(function () {\n      next();\n    }, 4000);\n  });\n  BTNLEFT.addEventListener('click', function () {\n    prev(); //reiniciar intervalo al clickar en btn\n\n    clearInterval(autocarousel);\n    autocarousel = setInterval(function () {\n      next();\n    }, 4000);\n  }); //MOVIMIENTO AUTOMÁTICO al cargar pagina\n\n  var autocarousel = setInterval(function () {\n    next();\n  }, 4000);\n}\n\n; //END (HOME PAGE)\n//SHOP (/html/shop.html)\n\nif (window.location.pathname == '/html/shop.html') {\n  //FUNCIONES\n  var biggerImgs = function biggerImgs() {\n    var _loop = function _loop(_i) {\n      // console.log(prod[i]);\n      prod[_i].addEventListener('click', function (event) {\n        // console.log(event.target);\n        // console.log(stockProductos[i].originalImg);\n        var bigImgCont = document.createElement('div');\n        var bigImgInside = document.createElement('img');\n        MAIN.appendChild(bigImgCont);\n        bigImgCont.appendChild(bigImgInside);\n        bigImgCont.className = 'biggerImgCont';\n        bigImgInside.className = 'biggerImgCont__img-inside';\n        bigImgInside.src = _modulos_stockproductos_js__WEBPACK_IMPORTED_MODULE_0__.stockProductos[_i].originalImg;\n        document.addEventListener('click', function removeChild(e) {\n          // console.log(e.target.classList);\n          if (e.target.classList != 'shop__main__grid-1__shop-cont__card__img-cont__img') {\n            bigImgCont.parentNode.removeChild(bigImgCont);\n            document.removeEventListener('click', removeChild); // console.log('Click fuera');\n          }\n\n          ;\n        });\n      });\n    };\n\n    for (var _i = 0; _i <= prod.length - 1; _i++) {\n      _loop(_i);\n    }\n\n    ;\n  };\n\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname)); // CARRITO ONLY JAVASCRIPT (video: https://www.youtube.com/watch?v=Mm3iLqhZB1A&ab_channel=GCode)\n\n  var productContainer = document.getElementById('shop-cont');\n  var cartContainer = document.getElementById('cartContainer');\n  var closeCartBtn = document.getElementById('cartClose');\n  var clearCartBtn = document.getElementById('cleanCart');\n  var cardProductContador = document.getElementById('go-cart-btn');\n  var totalPrice = document.getElementById('totalPrice');\n  var cart = []; //local storage\n\n  document.addEventListener('DOMContentLoaded', function () {\n    if (localStorage.getItem('cart')) {\n      cart = JSON.parse(localStorage.getItem('cart'));\n      actualizarCarrito();\n    }\n  }); //close cart btn\n\n  closeCartBtn.addEventListener('click', function () {\n    window.location = \"http://127.0.0.1:5500/html/shop.html#\";\n  }); //clear cart btn\n\n  clearCartBtn.addEventListener('click', function () {\n    cart.length = 0;\n    cart.cantidad = 0;\n    actualizarCarrito();\n  }); //FILTRAR PRODUCTOS\n  // console.log(stockProductos);\n  //VARIABLES\n\n  var filtros = document.getElementsByClassName('shop__main__grid-1__nav-cont__ul__index-one__index-two');\n  var seeAll = document.getElementById('seeAll');\n  var nature = document.getElementById('nature'); // const animals = document.getElementById('animals');\n  // const landscapes = document.getElementById('landscapes');\n\n  var sculptures = document.getElementById('sculptures');\n  var models = document.getElementById('models');\n  var oil = document.getElementById('oil');\n  var frame = document.getElementById('frame');\n  var noFrame = document.getElementById('noFrame'); //FUNCTIONS\n\n  var filtrosArr = Array.from(filtros);\n  filtrosArr.forEach(function (filtro) {\n    filtro.addEventListener('click', function (e) {\n      var prodFiltrados = [];\n      prodFiltrados = _modulos_stockproductos_js__WEBPACK_IMPORTED_MODULE_0__.stockProductos.filter(function (producto) {\n        if (producto.category == e.target.id) {\n          return true;\n        } else {\n          return false;\n        }\n      });\n      console.log(prodFiltrados); // if(e.target.id == 'seeAll'){\n      //     e.preventDefault();\n      //     prodFiltrados = stockProductos;\n      // } else{};\n    });\n  });\n  _modulos_stockproductos_js__WEBPACK_IMPORTED_MODULE_0__.stockProductos.forEach(function (producto) {\n    var li = document.createElement('li');\n    var divImg = document.createElement('div');\n    var img = document.createElement('img');\n    var divDesc = document.createElement('div');\n    var pName = document.createElement('p');\n    var pSize = document.createElement('p');\n    var pPrice = document.createElement('p');\n    li.classList.add('shop__main__grid-1__shop-cont__card');\n    divImg.classList.add('shop__main__grid-1__shop-cont__card__img-cont');\n    divDesc.classList.add('shop__main__grid-1__shop-cont__card__description-cont');\n    pName.classList.add('shop__main__grid-1__shop-cont__card__description-cont__name');\n    pSize.classList.add('shop__main__grid-1__shop-cont__card__description-cont__size');\n    pPrice.classList.add('shop__main__grid-1__shop-cont__card__description-cont__price');\n    divImg.innerHTML = \"<img id=\\\"\".concat(producto.id, \"\\\" class='shop__main__grid-1__shop-cont__card__img-cont__img' src=\").concat(producto.img, \" alt=\\\"\").concat(producto.name, \" image\\\">\");\n    pName.innerHTML = \"<p>\".concat(producto.name, \"</p>\");\n    pSize.innerHTML = \"<p>\".concat(producto.size, \"</p>\");\n    pPrice.innerHTML = \"<p>\".concat(producto.price, \"\\u20AC</p>\");\n    li.innerHTML = \"<button id=\\\"add\".concat(producto.id, \"\\\" class=\\\"shop__main__grid-1__shop-cont__card__img-cont__add-btn\\\">Add to cart</button>\");\n    productContainer.appendChild(li);\n    li.appendChild(divImg);\n    li.appendChild(divDesc);\n    divDesc.appendChild(pName);\n    divDesc.appendChild(pSize);\n    divDesc.appendChild(pPrice);\n    var btn = document.getElementById(\"add\".concat(producto.id));\n    btn.addEventListener('click', function () {\n      addToCart(producto.id);\n    });\n  });\n\n  var addToCart = function addToCart(productId) {\n    var exists = cart.some(function (product) {\n      return product.id === productId;\n    });\n\n    if (exists) {\n      var product = cart.map(function (product) {\n        if (product.id === productId) {\n          product.cantidad++;\n        }\n      });\n    } else {\n      var item = _modulos_stockproductos_js__WEBPACK_IMPORTED_MODULE_0__.stockProductos.find(function (product) {\n        return product.id === productId;\n      });\n      cart.push(item); // console.log(cart);\n    }\n\n    actualizarCarrito();\n  }; ///////////////////////////////////FALTA HACER/////////////////////////////////////////////\n\n\n  var deleteProductCart = function deleteProductCart(productId) {\n    var item = cart.find(function (product) {\n      return product.id === productId;\n    });\n    var indice = cart.indexOf(item);\n    cart.splice(indice, 1);\n    actualizarCarrito();\n  }; ///////////////////////////////////FALTA HACER/////////////////////////////////////////////\n  //CART\n\n\n  var actualizarCarrito = function actualizarCarrito() {\n    cartContainer.innerHTML = \"\";\n    cart.forEach(function (product) {\n      // console.log(product);\n      var div = document.createElement('div');\n      div.className = 'shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products';\n      div.innerHTML = \"\\n            <p><img class=\\\"shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products__cart-imgs\\\" src=\\\"\".concat(product.img, \"\\\" style=\\\"width:20px;\\\"> \").concat(product.cantidad, \"</p>\\n            <p>\").concat(product.name, \"</p>\\n            <p>\").concat(product.price, \"\\u20AC</p>\\n            <!--<p>\").concat(product.size, \"</p>-->\\n            <button onclick=\\\"deleteProductCart(\").concat(product.id, \")\\\" class=\\\"shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products__delete-product\\\">\\uD83D\\uDDD1\\uFE0F</button>\\n            \");\n      cartContainer.appendChild(div);\n      localStorage.setItem('cart', JSON.stringify(cart));\n    });\n    cardProductContador.innerText = \"Buy \".concat(cart.length, \" products\"); ////////////////////////////////////////////////////////////////////////////////\n    // console.log(\n    //     cart.reduce((acc, product) => acc + product.price, 0)\n    // );\n    // console.log(\n    //     cart.map(item => item.price)\n    // );\n\n    totalPrice.innerText = cart.reduce(function (acc, product) {\n      return acc + product.price;\n    }, 0); // let totalAmountFinal = cart.map(item => item.price).reduce((acc, product) => acc + product, 0);\n    // let sumaTotal = 0;\n    // let onlyNumArr = totalPrice.innerText = cart.map(item => item.price); //[70, 50, 49...]\n    // onlyNumArr.forEach((num)=>{\n    //     sumaTotal += num;\n    // });\n    // totalPrice.textContent = sumaTotal;\n  }; //VER IMAGEN EN GRANDE\n  //VARIABLES\n\n\n  var MAIN = document.getElementById('main');\n  var prod = document.getElementsByClassName('shop__main__grid-1__shop-cont__card__img-cont__img');\n  ;\n  biggerImgs(); //FALTA HACER:\n  //arreglar total amount del carrito\n  //arreglar botones eliminar productos individules carrito\n  //hacer JS indice filtros shop\n  //click en see all, mostrar todos los objetos del stockProductos\n}\n\n; //END (SHOP PAGE)\n//ABOUT (/html/cart.html)\n\nif (window.location.pathname == '/html/cart.html') {\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname));\n}\n\n; //END (CART PAGE)\n//ABOUT (/html/about.html)\n\nif (window.location.pathname == '/html/about.html') {\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname));\n}\n\n; //CONTACT (/html/contact.html)\n\nif (window.location.pathname == '/html/contact.html') {\n  console.log(\"Est\\xE1s en el w.l.pathname --> \".concat(window.location.pathname));\n}\n\n; //END (CONTACT PAGE)\n//Tareas/ideas pendientes:\n\n/*\r\n\r\n    SHOP.html\r\n        -   Dispositivos móviles: Como no usan raton, no hover, no mouseenter --> crear evento al clickar la card, salen dos botones (ver / añadir al carro), que ejecutaran las funciones ya creadas desde ellos. (biggerImgs(); / addToCart();)\r\n        -   Crear filtros para mostrar x cards según categoria, y mostrar el resultado filtrado.\r\n\r\n    CART.html\r\n        -   Mostrar el array de objetos añadidos desde SHOP al carrito\r\n\r\n\r\n*/\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modulos/stockproductos.js":
/*!***************************************!*\
  !*** ./src/modulos/stockproductos.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stockProductos\": () => (/* binding */ stockProductos)\n/* harmony export */ });\nvar stockProductos = [{\n  id: '000001',\n  cantidad: 1,\n  name: 'Monalisa',\n  size: '120x50cm',\n  price: '70',\n  category: 'models',\n  img: '../src/img/shop/monalisa.jpeg',\n  originalImg: '../src/img/shop/original-size/monalisa.jpeg'\n}, {\n  id: '000002',\n  cantidad: 1,\n  name: 'Cold',\n  size: '100x40cm',\n  price: '30',\n  category: 'animals',\n  img: '../src/img/shop/cold.jpeg',\n  originalImg: '../src/img/shop/original-size/cold.jpeg'\n}, {\n  id: '000003',\n  cantidad: 1,\n  name: 'Extasis',\n  size: '300x100cm',\n  price: '99',\n  category: 'oil',\n  img: '../src/img/shop/extasis.jpeg',\n  originalImg: '../src/img/shop/original-size/extasis.jpeg'\n}, {\n  id: '000004',\n  cantidad: 1,\n  name: 'Mercredi',\n  size: '210x100cm',\n  price: '40',\n  category: 'sculptures',\n  img: '../src/img/shop/mercredi.jpeg',\n  originalImg: '../src/img/shop/original-size/mercredi.jpeg'\n}, {\n  id: '000005',\n  cantidad: 1,\n  name: 'Where',\n  size: '130x60cm',\n  price: '45',\n  category: 'landscapes',\n  img: '../src/img/shop/where.jpeg',\n  originalImg: '../src/img/shop/original-size/where.jpeg'\n}, {\n  id: '000006',\n  cantidad: 1,\n  name: 'Universe',\n  size: '120x20cm',\n  price: '60',\n  category: 'oil',\n  img: '../src/img/shop/universe.jpeg',\n  originalImg: '../src/img/shop/original-size/universe.jpeg'\n}, {\n  id: '000007',\n  cantidad: 1,\n  name: 'Gold',\n  size: '400x100cm',\n  price: '59',\n  category: 'models',\n  img: '../src/img/shop/gold.jpeg',\n  originalImg: '../src/img/shop/original-size/gold.jpeg'\n}, {\n  id: '000008',\n  cantidad: 1,\n  name: 'No longer',\n  size: '110x50cm',\n  price: '40',\n  category: 'nature',\n  img: '../src/img/shop/no-longer.jpeg',\n  originalImg: '../src/img/shop/original-size/no-longer.jpeg'\n}, {\n  id: '000009',\n  cantidad: 1,\n  name: 'Beauty',\n  size: '300x100cm',\n  price: '50',\n  category: 'models',\n  img: '../src/img/shop/beauty.jpeg',\n  originalImg: '../src/img/shop/original-size/beauty.jpeg'\n}];\n\n//# sourceURL=webpack:///./src/modulos/stockproductos.js?");

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