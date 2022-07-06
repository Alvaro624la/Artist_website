"use strict";

// ALL HTML PAGES
//HAMBURGUER NAVBAR BTN
var hamburguer = document.getElementById('hamburguer');
var navMenu = document.getElementById('nav-menu');
hamburguer.addEventListener('click', function () {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});
var navLink = document.getElementsByClassName('shop__nav__ul__li__a');

function removeActive() {
  hamburguer.classList.remove('active');
  navMenu.classList.remove('active');
}

;

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', removeActive);
} //HOME (/html/index.html)


if (window.location.pathname == '/index.html') {
  //FUNCIONES
  var next = function next() {
    var sliderSectionFirst = sliderSection[0];
    SLIDER.style.marginLeft = '-200%';
    SLIDER.style.transition = 'all 1.4s';
    setTimeout(function () {
      SLIDER.style.transition = 'none';
      SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);
      SLIDER.style.marginLeft = '-100%';
    }, 1400);
  };

  var prev = function prev() {
    var sliderSection = document.getElementsByClassName('home__main__carousel-cont__slider__section');
    var sliderSectionLast = sliderSection[sliderSection.length - 1];
    SLIDER.style.marginLeft = '0%';
    SLIDER.style.transition = 'all 1.4s';
    setTimeout(function () {
      SLIDER.style.transition = 'none';
      SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
      SLIDER.style.marginLeft = '-100%';
    }, 1400);
  };

  console.log("Est\xE1s en el w.l.pathname --> ".concat(window.location.pathname)); //CAROUSEL
  //VARIABLES

  var SLIDER = document.getElementById('slider');
  var sliderSection = document.getElementsByClassName('home__main__carousel-cont__slider__section'); //ULTIMA FOTO

  var sliderSectionLast = sliderSection[sliderSection.length - 1]; //BOTONES

  var BTNRIGHT = document.getElementById('btn-right');
  var BTNLEFT = document.getElementById('btn-left');
  SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
  ;
  ;
  BTNRIGHT.addEventListener('click', function () {
    next(); //reiniciar intervalo al clickar en btn

    clearInterval(autocarousel);
    autocarousel = setInterval(function () {
      next();
    }, 4000);
  });
  BTNLEFT.addEventListener('click', function () {
    prev(); //reiniciar intervalo al clickar en btn

    clearInterval(autocarousel);
    autocarousel = setInterval(function () {
      next();
    }, 4000);
  }); //MOVIMIENTO AUTOMÁTICO al cargar pagina

  var autocarousel = setInterval(function () {
    next();
  }, 4000);
}

; //END (HOME PAGE)
//SHOP (/html/shop.html)

if (window.location.pathname == '/shop.html') {
  //FUNCIONES
  var biggerImgs = function biggerImgs() {
    var _loop = function _loop(_i) {
      prod[_i].addEventListener('click', function (event) {
        var bigImgCont = document.createElement('div');
        var bigImgInside = document.createElement('img');
        MAIN.appendChild(bigImgCont);
        bigImgCont.appendChild(bigImgInside);
        bigImgCont.className = 'biggerImgCont';
        bigImgInside.className = 'biggerImgCont__img-inside';
        bigImgInside.src = stockProductos[_i].originalImg;
        document.addEventListener('click', function removeChild(e) {
          if (e.target.classList != 'shop__main__grid-1__shop-cont__card__img-cont__img') {
            bigImgCont.parentNode.removeChild(bigImgCont);
            document.removeEventListener('click', removeChild);
          }

          ;
        });
      });
    };

    for (var _i = 0; _i <= prod.length - 1; _i++) {
      _loop(_i);
    }

    ;
  };

  var stockProductos = [{
    id: '000001',
    quantity: 1,
    name: 'Monalisa',
    size: '120x50cm',
    price: 70,
    category: 'models',
    img: './img/shop/monalisa.jpeg',
    originalImg: './img/shop/original-size/monalisa.jpeg'
  }, {
    id: '000002',
    quantity: 1,
    name: 'Cold',
    size: '100x40cm',
    price: 30,
    category: 'animals',
    img: './img/shop/cold.jpeg',
    originalImg: './img/shop/original-size/cold.jpeg'
  }, {
    id: '000003',
    quantity: 1,
    name: 'Extasis',
    size: '300x100cm',
    price: 99,
    category: 'oil',
    img: './img/shop/extasis.jpeg',
    originalImg: './img/shop/original-size/extasis.jpeg'
  }, {
    id: '000004',
    quantity: 1,
    name: 'Mercredi',
    size: '210x100cm',
    price: 40,
    category: 'sculptures',
    img: './img/shop/mercredi.jpeg',
    originalImg: './img/shop/original-size/mercredi.jpeg'
  }, {
    id: '000005',
    quantity: 1,
    name: 'Where',
    size: '130x60cm',
    price: 45,
    category: 'landscapes',
    img: './img/shop/where.jpeg',
    originalImg: './img/shop/original-size/where.jpeg'
  }, {
    id: '000006',
    quantity: 1,
    name: 'Universe',
    size: '120x20cm',
    price: 60,
    category: 'oil',
    img: './img/shop/universe.jpeg',
    originalImg: './img/shop/original-size/universe.jpeg'
  }, {
    id: '000007',
    quantity: 1,
    name: 'Gold',
    size: '400x100cm',
    price: 59,
    category: 'models',
    img: './img/shop/gold.jpeg',
    originalImg: './img/shop/original-size/gold.jpeg'
  }, {
    id: '000008',
    quantity: 1,
    name: 'No longer',
    size: '110x50cm',
    price: 40,
    category: 'nature',
    img: './img/shop/no-longer.jpeg',
    originalImg: './img/shop/original-size/no-longer.jpeg'
  }, {
    id: '000009',
    quantity: 1,
    name: 'Beauty',
    size: '300x100cm',
    price: 50,
    category: 'models',
    img: './img/shop/beauty.jpeg',
    originalImg: './img/shop/original-size/beauty.jpeg'
  }];
  console.log("Est\xE1s en el w.l.pathname --> ".concat(window.location.pathname)); // CARRITO ONLY JAVASCRIPT (video: https://www.youtube.com/watch?v=Mm3iLqhZB1A&ab_channel=GCode)

  var productContainer = document.getElementById('shop-cont'); // const productContainer2 = document.getElementsByClassName('shop__main__grid-1__shop-cont__card');

  var cartContainer = document.getElementById('cartContainer');
  var closeCartBtn = document.getElementById('cartClose');
  var clearCartBtn = document.getElementById('cleanCart');
  var cardProductContador = document.getElementById('go-cart-btn');
  var totalPrice = document.getElementById('totalPrice');
  var cart = []; //local storage

  document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
      actualizarCarrito();
    }
  }); //close cart btn

  closeCartBtn.addEventListener('click', function () {
    window.location = "http://127.0.0.1:5500/html/shop.html#";
  }); //clear cart btn

  clearCartBtn.addEventListener('click', function () {
    cart.length = 0;
    cart.quantity = 0;
    actualizarCarrito();
  }); //CREAR PRODUCTOS JS (TARGETAS/CARDS) - antes de filtrar

  stockProductos.forEach(function (producto) {
    var li = document.createElement('li');
    var divImg = document.createElement('div');
    var img = document.createElement('img');
    var divDesc = document.createElement('div');
    var pName = document.createElement('p');
    var pSize = document.createElement('p');
    var pPrice = document.createElement('p');
    li.classList.add('shop__main__grid-1__shop-cont__card');
    divImg.classList.add('shop__main__grid-1__shop-cont__card__img-cont');
    divDesc.classList.add('shop__main__grid-1__shop-cont__card__description-cont');
    pName.classList.add('shop__main__grid-1__shop-cont__card__description-cont__name');
    pSize.classList.add('shop__main__grid-1__shop-cont__card__description-cont__size');
    pPrice.classList.add('shop__main__grid-1__shop-cont__card__description-cont__price');
    divImg.innerHTML = "<img id=\"".concat(producto.id, "\" class='shop__main__grid-1__shop-cont__card__img-cont__img' src=").concat(producto.img, " alt=\"").concat(producto.name, " image\">");
    pName.innerHTML = "<p>".concat(producto.name, "</p>");
    pSize.innerHTML = "<p>".concat(producto.size, "</p>");
    pPrice.innerHTML = "<p>".concat(producto.price, "\u20AC</p>");
    li.innerHTML = "<button id=\"add".concat(producto.id, "\" class=\"shop__main__grid-1__shop-cont__card__img-cont__add-btn\">Add to cart</button>");
    productContainer.appendChild(li);
    li.appendChild(divImg);
    li.appendChild(divDesc);
    divDesc.appendChild(pName);
    divDesc.appendChild(pSize);
    divDesc.appendChild(pPrice);
    var btn = document.getElementById("add".concat(producto.id));
    btn.addEventListener('click', function () {
      addToCart(producto.id);
    });
  }); //VER IMAGEN EN GRANDE
  //VARIABLES

  var MAIN = document.getElementById('main');
  var prod = document.getElementsByClassName('shop__main__grid-1__shop-cont__card__img-cont__img');
  ;
  biggerImgs(); //FILTRAR PRODUCTOS
  //VARIABLES

  var filtros = document.getElementsByClassName('shop__main__grid-1__nav-cont__ul__index-one__index-two');
  var frame = document.getElementById('frame');
  var noFrame = document.getElementById('noFrame'); //FUNCTIONS

  var filtrosArr = Array.from(filtros);
  filtrosArr.forEach(function (filtro) {
    filtro.addEventListener('click', function (e) {
      console.clear();
      productContainer.innerHTML = "";
      var prodFiltrados = stockProductos.filter(function (producto) {
        if (producto.category == e.target.id) {
          return true;
        } else {
          return false;
        }
      });
      console.log(prodFiltrados);

      if (e.target.id == 'seeAll') {
        e.preventDefault();
        prodFiltrados = stockProductos;
      }

      ; //CREAR PRODUCTOS JS (TARGETAS/CARDS)

      prodFiltrados.forEach(function (producto) {
        var li = document.createElement('li');
        var divImg = document.createElement('div');
        var img = document.createElement('img');
        var divDesc = document.createElement('div');
        var pName = document.createElement('p');
        var pSize = document.createElement('p');
        var pPrice = document.createElement('p');
        li.classList.add('shop__main__grid-1__shop-cont__card');
        divImg.classList.add('shop__main__grid-1__shop-cont__card__img-cont');
        divDesc.classList.add('shop__main__grid-1__shop-cont__card__description-cont');
        pName.classList.add('shop__main__grid-1__shop-cont__card__description-cont__name');
        pSize.classList.add('shop__main__grid-1__shop-cont__card__description-cont__size');
        pPrice.classList.add('shop__main__grid-1__shop-cont__card__description-cont__price');
        divImg.innerHTML = "<img id=\"".concat(producto.id, "\" class='shop__main__grid-1__shop-cont__card__img-cont__img' src=").concat(producto.img, " alt=\"").concat(producto.name, " image\">");
        pName.innerHTML = "<p>".concat(producto.name, "</p>");
        pSize.innerHTML = "<p>".concat(producto.size, "</p>");
        pPrice.innerHTML = "<p>".concat(producto.price, "\u20AC</p>");
        li.innerHTML = "<button id=\"add".concat(producto.id, "\" class=\"shop__main__grid-1__shop-cont__card__img-cont__add-btn\">Add to cart</button>");
        productContainer.appendChild(li);
        li.appendChild(divImg);
        li.appendChild(divDesc);
        divDesc.appendChild(pName);
        divDesc.appendChild(pSize);
        divDesc.appendChild(pPrice);
        var btn = document.getElementById("add".concat(producto.id));
        btn.addEventListener('click', function () {
          addToCart(producto.id);
        });
      }); //VER IMAGEN EN GRANDE
      //VARIABLES

      var MAIN = document.getElementById('main');
      var prod = document.getElementsByClassName('shop__main__grid-1__shop-cont__card__img-cont__img'); //FUNCIONES

      function biggerImgs() {
        var _loop2 = function _loop2(_i2) {
          prod[_i2].addEventListener('click', function (event) {
            var bigImgCont = document.createElement('div');
            var bigImgInside = document.createElement('img');
            MAIN.appendChild(bigImgCont);
            bigImgCont.appendChild(bigImgInside);
            bigImgCont.className = 'biggerImgCont';
            bigImgInside.className = 'biggerImgCont__img-inside';
            bigImgInside.src = prodFiltrados[_i2].originalImg;
            document.addEventListener('click', function removeChild(e) {
              if (e.target.classList != 'shop__main__grid-1__shop-cont__card__img-cont__img') {
                bigImgCont.parentNode.removeChild(bigImgCont);
                document.removeEventListener('click', removeChild);
              }

              ;
            });
          });
        };

        for (var _i2 = 0; _i2 <= prod.length - 1; _i2++) {
          _loop2(_i2);
        }

        ;
      }

      ;
      biggerImgs();
    });
  });

  var addToCart = function addToCart(productId) {
    var exists = cart.some(function (product) {
      return product.id === productId;
    });

    if (exists) {
      var product = cart.map(function (product) {
        if (product.id === productId) {
          product.quantity++; //////////////////////////////////////////////////FALTA HACER///////////////////////////////////////////////////////////
          // let nTotal = Object.values(product).reduce((acc, {quantity, price}) => acc + quantity * price, 0);
          // product.price = nTotal;
          // console.log(product);
          // console.log(nTotal);
          //////////////////////////////////////////////////FALTA HACER///////////////////////////////////////////////////////////                
        }

        ;
      });
    } else {
      var item = stockProductos.find(function (product) {
        return product.id === productId;
      });
      cart.push(item);
    }

    actualizarCarrito();
  }; ///////////////////////////////////FALTA HACER/////////////////////////////////////////////
  // const delItemCardBtn = document.getElementById('delete-item-card-btn');
  // delItemCardBtn.addEventListener('click', (productId) => {
  //     const item = cart.find((product) => product.id === productId);
  //     const indice = cart.indexOf(item);
  //     cart.splice(indice, 1)
  //     actualizarCarrito();
  // });
  // const deleteProductCart = (productId) => {
  //     const item = cart.find((product) => product.id === productId);
  //     const indice = cart.indexOf(item);
  //     cart.splice(indice, 1)
  //     actualizarCarrito();
  // };
  ///////////////////////////////////FALTA HACER/////////////////////////////////////////////
  //CART


  var actualizarCarrito = function actualizarCarrito() {
    cartContainer.innerHTML = "";
    cart.forEach(function (product) {
      var div = document.createElement('div');
      div.className = 'shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products';
      div.innerHTML = "\n            <p><img class=\"shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products__cart-imgs--cart\" src=\"".concat(product.img, "\" style=\"width:20px;\"> ").concat(product.quantity, "</p>\n            <p>").concat(product.name, "</p>\n            <p>").concat(product.price, "\u20AC</p>\n            <!--<p>").concat(product.size, "</p>-->\n            <button onclick=\"deleteProductCart(").concat(product.id, ")\" id=\"delete-item-card-btn(").concat(product.id, ")\" class=\"shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products__delete-product\">\uD83D\uDDD1\uFE0F</button>\n            ");
      cartContainer.appendChild(div);
      localStorage.setItem('cart', JSON.stringify(cart));
    }); //MARCO O NO - EN EL CARRITO CON CLICK A LAS IMGs
    //MOVER DE SITIO
    //REESTRUCTURAR FUNCIONAMIENTO
    // const cartImgFrame = document.getElementsByClassName('shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products__cart-imgs--cart');
    // for(let i = 0; i <= cartImgFrame.length -1; i++){
    //     cartImgFrame[i].addEventListener('click', (event)=>{
    //         document.addEventListener('click', (e)=>{
    //             console.log(e.target);
    //             e.target.classList.toggle('shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products__cart-imgs--cart__active');
    //         });
    //     });
    // };

    cardProductContador.innerText = "Buy ".concat(cart.length, " products");
    totalPrice.innerText = cart.reduce(function (acc, product) {
      return acc + product.price;
    }, 0);
  }; //FALTA HACER:
  //arreglar botones eliminar productos individules carrito.
  //total amount.
  //filtrado(al filtrar se han creado problemas con el código).
  //añadir boton frame o noFrame al carrito individuales (   console.log(frame.checked);   ).
  //Avanzado:
  //poder seleccionar cuanta de x cantidad, tienen frame o no.
  //posteriormente almacenar si tiene frame o no x elementos individualmente.
  //

}

; //END (SHOP PAGE)
//ABOUT (/html/cart.html)

if (window.location.pathname == '/cart.html') {
  console.log("Est\xE1s en el w.l.pathname --> ".concat(window.location.pathname));
}

; //END (CART PAGE)
//ABOUT (/html/about.html)

if (window.location.pathname == '/about.html') {
  console.log("Est\xE1s en el w.l.pathname --> ".concat(window.location.pathname));
}

; //CONTACT (/html/contact.html)

if (window.location.pathname == '/contact.html') {
  console.log("Est\xE1s en el w.l.pathname --> ".concat(window.location.pathname));
}

; //END (CONTACT PAGE)
//Tareas/ideas pendientes:

/*

    SHOP.html
        -   Dispositivos móviles: Como no usan raton, no hover, no mouseenter --> crear evento al clickar la card, salen dos botones (ver / añadir al carro), que ejecutaran las funciones ya creadas desde ellos. (biggerImgs(); / addToCart();)
        -   Crear filtros para mostrar x cards según categoria, y mostrar el resultado filtrado.

    CART.html
        -   Mostrar el array de objetos añadidos desde SHOP al carrito


*/
