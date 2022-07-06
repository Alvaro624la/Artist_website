// ----------- JSX --------------:
import React from "react";
import { Routes, Route } from "react-router-dom";
import home from '../paginas/home';
import shop from '../paginas/shop';
import about from '../paginas/about';
import contact from '../paginas/contact';
import cart from '../paginas/cart';
// ----------- JSX --------------.

import {stockProductos} from "./modulos/stockproductos.js";

// ----------- JSX --------------:

const APP = () => {
    return(
        <>
            <Main>
                <Routes>
                    <Route path="/" element={<home />}/>
                    <Route path="/shop" element={<shop />}/>
                    <Route path="/about" element={<about />}/>
                    <Route path="/contact" element={<contact />}/>
                </Routes>
            </Main>
        </>
    );
}

// ----------- JSX --------------.

// ALL HTML PAGES
//HAMBURGUER NAVBAR BTN
const hamburguer = document.getElementById('hamburguer');
const navMenu = document.getElementById('nav-menu');

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

let navLink = document.getElementsByClassName('shop__nav__ul__li__a');

function removeActive(){
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
};
for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', removeActive);
}


//HOME (/html/index.html)
if(window.location.pathname == '/html/index.html'){
    console.log(`Estás en el w.l.pathname --> ${window.location.pathname}`);

    //CAROUSEL
    //VARIABLES
    const SLIDER = document.getElementById('slider');

    let sliderSection = document.getElementsByClassName('home__main__carousel-cont__slider__section');

    //ULTIMA FOTO
    let sliderSectionLast = sliderSection[sliderSection.length - 1];

    //BOTONES
    const BTNRIGHT = document.getElementById('btn-right');
    const BTNLEFT = document.getElementById('btn-left');

    SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);

    //FUNCIONES
    function next(){
        let sliderSectionFirst = sliderSection[0];
        SLIDER.style.marginLeft = '-200%';
        SLIDER.style.transition = 'all 1.4s';
        setTimeout(function(){
            SLIDER.style.transition = 'none';
            SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);
            SLIDER.style.marginLeft = '-100%';
        }, 1400);
    };

    function prev(){
        let sliderSection = document.getElementsByClassName('home__main__carousel-cont__slider__section');
        let sliderSectionLast = sliderSection[sliderSection.length - 1];
        SLIDER.style.marginLeft = '0%';
        SLIDER.style.transition = 'all 1.4s';
        setTimeout(function(){
            SLIDER.style.transition = 'none';
            SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
            SLIDER.style.marginLeft = '-100%';
        }, 1400);
    };

    BTNRIGHT.addEventListener('click', function(){
        next();
        //reiniciar intervalo al clickar en btn
        clearInterval(autocarousel);
        autocarousel = setInterval(function(){
            next();
        }, 4000);
    });
    BTNLEFT.addEventListener('click', function(){
        prev();
        //reiniciar intervalo al clickar en btn
        clearInterval(autocarousel);
        autocarousel = setInterval(function(){
            next();
        }, 4000);
    });

    //MOVIMIENTO AUTOMÁTICO al cargar pagina
    let autocarousel = setInterval(function(){
        next();
    }, 4000);

}; //END (HOME PAGE)

//SHOP (/html/shop.html)
if(window.location.pathname == '/html/shop.html'){
    console.log(`Estás en el w.l.pathname --> ${window.location.pathname}`);

    // CARRITO ONLY JAVASCRIPT (video: https://www.youtube.com/watch?v=Mm3iLqhZB1A&ab_channel=GCode)
    const productContainer = document.getElementById('shop-cont');
    // const productContainer2 = document.getElementsByClassName('shop__main__grid-1__shop-cont__card');
    
    const cartContainer = document.getElementById('cartContainer');
   
    const closeCartBtn = document.getElementById('cartClose');
    const clearCartBtn = document.getElementById('cleanCart');

    const cardProductContador = document.getElementById('go-cart-btn');

    const totalPrice = document.getElementById('totalPrice');

    let cart = [];

    let i = 1; //incrementar precio x cantidad producto

    //local storage
    document.addEventListener('DOMContentLoaded', () => {
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
            actualizarCarrito();
        }
    });

    //close cart btn
    closeCartBtn.addEventListener('click', () => {
        window.location = "http://127.0.0.1:5500/html/shop.html#";
    });

    //clear cart btn
    clearCartBtn.addEventListener('click', ()=>{
        cart.length = 0;
        cart.quantity = 0;
        i = 1;
        actualizarCarrito();
    });




    //CREAR PRODUCTOS JS (TARGETAS/CARDS) - antes de filtrar
    stockProductos.forEach((producto) => {
        const li = document.createElement('li');
            const divImg = document.createElement('div');
                const img = document.createElement('img');
            const divDesc = document.createElement('div');
                const pName = document.createElement('p');
                const pSize = document.createElement('p');
                const pPrice = document.createElement('p');

        li.classList.add('shop__main__grid-1__shop-cont__card');
            divImg.classList.add('shop__main__grid-1__shop-cont__card__img-cont');
            divDesc.classList.add('shop__main__grid-1__shop-cont__card__description-cont');
                pName.classList.add('shop__main__grid-1__shop-cont__card__description-cont__name');
                pSize.classList.add('shop__main__grid-1__shop-cont__card__description-cont__size');
                pPrice.classList.add('shop__main__grid-1__shop-cont__card__description-cont__price');

        divImg.innerHTML = `<img id="${producto.id}" class='shop__main__grid-1__shop-cont__card__img-cont__img' src=${producto.img} alt="${producto.name} image">`;
        pName.innerHTML = `<p>${producto.name}</p>`
        pSize.innerHTML = `<p>${producto.size}</p>`
        pPrice.innerHTML = `<p>${producto.price}€</p>`
        li.innerHTML = `<button id="add${producto.id}" class="shop__main__grid-1__shop-cont__card__img-cont__add-btn">Add to cart</button>`;
        
        productContainer.appendChild(li);
        li.appendChild(divImg);
        li.appendChild(divDesc);
        divDesc.appendChild(pName);
        divDesc.appendChild(pSize);
        divDesc.appendChild(pPrice);

        const btn = document.getElementById(`add${producto.id}`);
        
        btn.addEventListener('click', ()=>{
            addToCart(producto.id);
        });
    });

    //VER IMAGEN EN GRANDE
    //VARIABLES
    const MAIN = document.getElementById('main');
    let prod = document.getElementsByClassName('shop__main__grid-1__shop-cont__card__img-cont__img');
    //FUNCIONES
    function biggerImgs(){
        for(let i = 0; i <= prod.length -1; i++){
            prod[i].addEventListener('click', (event)=>{
                let bigImgCont = document.createElement('div');
                let bigImgInside = document.createElement('img');

                MAIN.appendChild(bigImgCont);
                bigImgCont.appendChild(bigImgInside);
                
                bigImgCont.className = 'biggerImgCont';
                bigImgInside.className = 'biggerImgCont__img-inside';
                bigImgInside.src = (stockProductos[i].originalImg);

                document.addEventListener('click', function removeChild(e){
                    if(e.target.classList != 'shop__main__grid-1__shop-cont__card__img-cont__img'){
                        bigImgCont.parentNode.removeChild(bigImgCont);
                        document.removeEventListener('click', removeChild);
                    };
                });
            });
            
        };
    };
    biggerImgs();

    //FILTRAR PRODUCTOS
    //VARIABLES
    let filtros = document.getElementsByClassName('shop__main__grid-1__nav-cont__ul__index-one__index-two');

    const frame = document.getElementById('frame');
    const noFrame = document.getElementById('noFrame');
    //FUNCTIONS
    let filtrosArr = Array.from(filtros);
    filtrosArr.forEach((filtro)=>{
        filtro.addEventListener('click', (e)=>{
            console.clear();
            productContainer.innerHTML = "";
            
            let prodFiltrados = stockProductos.filter((producto)=>{
                    if(producto.category == e.target.id){
                        return true;
                    } else {
                        return false;
                    }
                });
            if(e.target.id == 'seeAll'){
                e.preventDefault();
                prodFiltrados = stockProductos;
            };

            //CREAR PRODUCTOS JS (TARGETAS/CARDS)
            prodFiltrados.forEach((producto) => {
                const li = document.createElement('li');
                    const divImg = document.createElement('div');
                        const img = document.createElement('img');
                    const divDesc = document.createElement('div');
                        const pName = document.createElement('p');
                        const pSize = document.createElement('p');
                        const pPrice = document.createElement('p');
        
                li.classList.add('shop__main__grid-1__shop-cont__card');
                    divImg.classList.add('shop__main__grid-1__shop-cont__card__img-cont');
                    divDesc.classList.add('shop__main__grid-1__shop-cont__card__description-cont');
                        pName.classList.add('shop__main__grid-1__shop-cont__card__description-cont__name');
                        pSize.classList.add('shop__main__grid-1__shop-cont__card__description-cont__size');
                        pPrice.classList.add('shop__main__grid-1__shop-cont__card__description-cont__price');
        
                divImg.innerHTML = `<img id="${producto.id}" class='shop__main__grid-1__shop-cont__card__img-cont__img' src=${producto.img} alt="${producto.name} image">`;
                pName.innerHTML = `<p>${producto.name}</p>`
                pSize.innerHTML = `<p>${producto.size}</p>`
                pPrice.innerHTML = `<p>${producto.price}€</p>`
                li.innerHTML = `<button id="add${producto.id}" class="shop__main__grid-1__shop-cont__card__img-cont__add-btn">Add to cart</button>`;
                
                productContainer.appendChild(li);
                li.appendChild(divImg);
                li.appendChild(divDesc);
                divDesc.appendChild(pName);
                divDesc.appendChild(pSize);
                divDesc.appendChild(pPrice);
        
                const btn = document.getElementById(`add${producto.id}`);
                
                btn.addEventListener('click', ()=>{
                    addToCart(producto.id);
                    i++;
                });
            });

            //VER IMAGEN EN GRANDE
            //VARIABLES
            const MAIN = document.getElementById('main');
            let prod = document.getElementsByClassName('shop__main__grid-1__shop-cont__card__img-cont__img');
            //FUNCIONES
            function biggerImgs(){
                for(let i = 0; i <= prod.length -1; i++){
                    prod[i].addEventListener('click', (event)=>{
                        let bigImgCont = document.createElement('div');
                        let bigImgInside = document.createElement('img');

                        MAIN.appendChild(bigImgCont);
                        bigImgCont.appendChild(bigImgInside);
                        
                        bigImgCont.className = 'biggerImgCont';
                        bigImgInside.className = 'biggerImgCont__img-inside';
                        bigImgInside.src = (prodFiltrados[i].originalImg);

                        document.addEventListener('click', function removeChild(e){
                            if(e.target.classList != 'shop__main__grid-1__shop-cont__card__img-cont__img'){
                                bigImgCont.parentNode.removeChild(bigImgCont);
                                document.removeEventListener('click', removeChild);
                            };
                        });
                    });
                    
                };
            };
            biggerImgs();
        });
    });


    const addToCart = (productId) => {
        const exists = cart.some(product => product.id === productId)
        
        if(exists){
            const product = cart.map(product=>{
                if(product.id === productId){
                    product.quantity++;                   
                    
                    // console.log(i);
                    // if(product.quantity >= 3){
                    //     product.price = product.price/i;
                    // }
                    // product.price = product.price * product.quantity;

                    //si la catidad varia > 2, crear un numero divisor que vaya subiendo a partir de 3(price/3, price/4, price/5...) y es resultado, * quantity
                    
                    // console.log(acc);
                    // product.price = product.price * product.quantity;
                    
                    //////////////////////////////////////MÁS PRUEBAS NO SE QUE HACER YAAA/////////////////////////////////////////////
                    // console.log(product);
                    // let arr = Object.values(product); //de OBJETO a ARRAY

                    // let pQuantity = arr[1];
                    // let pPrice = arr[4];
                    // // console.log(arr);
                    // let nTotal = arr.reduce((acc, arr) => acc + pQuantity + pPrice, 0);
                    // console.log(nTotal);
                    // product.price = nTotal;
                    //////////////////////////////////////MÁS PRUEBAS NO SE QUE HACER YAAA/////////////////////////////////////////////
                };
            })
        } else {

        const item = stockProductos.find((product) => product.id === productId);
        cart.push(item);
        }
        actualizarCarrito();
    }
    ///////////////////////////////////FALTA HACER --> delete cart item individual/////////////////////////////////////////////
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
    const actualizarCarrito = () => {
        cartContainer.innerHTML = "";

        cart.forEach((product) => {
            const div = document.createElement('div');
            div.className = ('shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products');
            div.innerHTML = `
            <p><img class="shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products__cart-imgs--cart" src="${product.img}" style="width:20px;"> ${product.quantity}</p>
            <p>${product.name}</p>
            <p>${product.price}€</p>
            <!--<p>${product.size}</p>-->
            <button onclick="deleteProductCart(${product.id})" id="delete-item-card-btn(${product.id})" class="shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products__delete-product">🗑️</button>
            `;
            cartContainer.appendChild(div);

            localStorage.setItem('cart', JSON.stringify(cart));          
        });
        
        //MARCO O NO - EN EL CARRITO CON CLICK A LAS IMGs
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

        cardProductContador.innerText = `Buy ${cart.length} products`;

        totalPrice.innerText = cart.reduce((acc, product) => acc + product.price, 0);
    };

    

    //FALTA HACER:
    //añadir boton frame o noFrame al carrito individuales (   console.log(frame.checked);   ).

    //Avanzado:
        //poder seleccionar cuanta de x cantidad, tienen frame o no.
        //posteriormente almacenar si tiene frame o no x elementos individualmente.
        //

}; //END (SHOP PAGE)

//ABOUT (/html/cart.html)
if(window.location.pathname == '/html/cart.html'){
    console.log(`Estás en el w.l.pathname --> ${window.location.pathname}`);




}; //END (CART PAGE)

//ABOUT (/html/about.html)
if(window.location.pathname == '/html/about.html'){
    console.log(`Estás en el w.l.pathname --> ${window.location.pathname}`);



};

//CONTACT (/html/contact.html)
if(window.location.pathname == '/html/contact.html'){
    console.log(`Estás en el w.l.pathname --> ${window.location.pathname}`);



}; //END (CONTACT PAGE)


//Tareas/ideas pendientes:
/*

    SHOP.html
        -   Dispositivos móviles: Como no usan raton, no hover, no mouseenter --> crear evento al clickar la card, salen dos botones (ver / añadir al carro), que ejecutaran las funciones ya creadas desde ellos. (biggerImgs(); / addToCart();)
        -   Crear filtros para mostrar x cards según categoria, y mostrar el resultado filtrado.

    CART.html
        -   Mostrar el array de objetos añadidos desde SHOP al carrito


*/