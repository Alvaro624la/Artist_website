import {stockProductos} from "./modulos/stockproductos.js";
/*
import * as "variables" from "./modulos/variables";
import * as "funciones" from "./modulos/funciones";
import * as "bootstrap" from "./modulos/bootstrap";
*/

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


//HOME (/html/home.html)
if(window.location.pathname == '/html/home.html'){
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

    //FILTERS(LEFT SHOP MENÚ):
    //VARIABLES
    const GOCARTBTN = document.getElementById('go-cart-btn');
    let allCard = document.getElementsByClassName('shop__main__grid-1__shop-cont__card');
    // let cartContainer = document.getElementById('cart__main');

    //FUNCTIONS



    // CARRITO ONLY JAVASCRIPT (video: https://www.youtube.com/watch?v=Mm3iLqhZB1A&ab_channel=GCode)
    const productContainer = document.getElementById('shop-cont');
    
    const cartContainer = document.getElementById('cartContainer');
   
    const closeCartBtn = document.getElementById('cartClose');
    const clearCartBtn = document.getElementById('cleanCart');

    const cardProductContador = document.getElementById('go-cart-btn');

    const totalPrice = document.getElementById('totalPrice');

    let cart = [];

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
        cart.cantidad = 0;
        actualizarCarrito();
    });

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

    const addToCart = (productId) => {
        const exists = cart.some(product => product.id === productId)

        if(exists){
            const product = cart.map(product=>{
                if(product.id === productId){
                    product.cantidad++;
                }
            })
        } else {

        const item = stockProductos.find((product) => product.id === productId);
        cart.push(item);
        // console.log(cart);
        }
        actualizarCarrito();
    }
    ///////////////////////////////////FALTA HACER/////////////////////////////////////////////
    const deleteProductCart = (productId) => {
        const item = cart.find((product) => product.id === productId);
        const indice = cart.indexOf(item);
        cart.splice(indice, 1)
        actualizarCarrito();
    };
    ///////////////////////////////////FALTA HACER/////////////////////////////////////////////
    //CART
    const actualizarCarrito = () => {
        cartContainer.innerHTML = "";

        cart.forEach((product) => {
            // console.log(product);
            const div = document.createElement('div');
            div.className = ('shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products');
            div.innerHTML = `
            <p><img class="shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products__cart-imgs" src="${product.img}" style="width:20px;"> ${product.cantidad}</p>
            <p>${product.name}</p>
            <p>${product.price}€</p>
            <!--<p>${product.size}</p>-->
            <button onclick="deleteProductCart(${product.id})" class="shop__main__grid-1__shop-cont__modal-cart__content__cartContainer__products__delete-product">🗑️</button>
            `;
            cartContainer.appendChild(div);

            localStorage.setItem('cart', JSON.stringify(cart));
        });
        cardProductContador.innerText = `Buy ${cart.length} products`;
        ////////////////////////////////////////////////////////////////////////////////
        console.log(
            cart.reduce((acc, product) => acc + product.price, 0)
        );
        console.log(
            cart.map(item => item.price)
        );
        totalPrice.innerText = cart.reduce((acc, product) => acc + product.price, 0);
        
        // let totalAmountFinal = cart.map(item => item.price).reduce((acc, product) => acc + product, 0);

        // let sumaTotal = 0;
        // let onlyNumArr = totalPrice.innerText = cart.map(item => item.price); //[70, 50, 49...]
        // onlyNumArr.forEach((num)=>{
        //     sumaTotal += num;
        // });
        // totalPrice.textContent = sumaTotal;
    };

    //VER IMAGEN EN GRANDE
    //VARIABLES
    const MAIN = document.getElementById('main');
    let prod = document.getElementsByClassName('shop__main__grid-1__shop-cont__card__img-cont__img');
    //FUNCIONES
    function biggerImgs(){
        for(let i = 0; i <= prod.length -1; i++){
            // console.log(prod[i]);
            prod[i].addEventListener('click', (event)=>{
                // console.log(event.target);
                // console.log(stockProductos[i].originalImg);
                let bigImgCont = document.createElement('div');
                let bigImgInside = document.createElement('img');

                MAIN.appendChild(bigImgCont);
                bigImgCont.appendChild(bigImgInside);
                
                bigImgCont.className = 'biggerImgCont';
                bigImgInside.className = 'biggerImgCont__img-inside';
                bigImgInside.src = (stockProductos[i].originalImg);

                document.addEventListener('click', function removeChild(e){
                    // console.log(e.target.classList);
                    if(e.target.classList != 'shop__main__grid-1__shop-cont__card__img-cont__img'){
                        bigImgCont.parentNode.removeChild(bigImgCont);
                        document.removeEventListener('click', removeChild);
                        // console.log('Click fuera');
                    };
                });
            });
            
        };
    };
    biggerImgs();

    //FALTA HACER:
    //arreglar total amount del carrito
    //arreglar botones eliminar productos individules carrito
    //hacer JS indice filtros shop
        //Ideas indice filtros:
        //asignar propiedades de x objeto.id a x cards.id de html. Así cada card tendrá categorias, id y demás propiedades
        //si coincide categoria de indice + categoria del card = mostrar éstos coincidentes

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