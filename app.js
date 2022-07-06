
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
if(window.location.pathname == '/index.html'){
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
if(window.location.pathname == '/shop.html'){
    let stockProductos = [
        {id: '000001', quantity: 1, name: 'Monalisa', size: '120x50cm', price: 70, category: 'models', img: './img/shop/monalisa.jpeg', originalImg: './img/shop/original-size/monalisa.jpeg'},
        {id: '000002', quantity: 1, name: 'Cold', size: '100x40cm', price: 30, category: 'animals', img: './img/shop/cold.jpeg', originalImg: './img/shop/original-size/cold.jpeg'},
        {id: '000003', quantity: 1, name: 'Extasis', size: '300x100cm', price: 99, category: 'oil', img: './img/shop/extasis.jpeg', originalImg: './img/shop/original-size/extasis.jpeg'},
        {id: '000004', quantity: 1, name: 'Mercredi', size: '210x100cm', price: 40, category: 'sculptures', img: './img/shop/mercredi.jpeg', originalImg: './img/shop/original-size/mercredi.jpeg'},
        {id: '000005', quantity: 1, name: 'Where', size: '130x60cm', price: 45, category: 'landscapes', img: './img/shop/where.jpeg', originalImg: './img/shop/original-size/where.jpeg'},
        {id: '000006', quantity: 1, name: 'Universe', size: '120x20cm', price: 60, category: 'oil', img: './img/shop/universe.jpeg', originalImg: './img/shop/original-size/universe.jpeg'},
        {id: '000007', quantity: 1, name: 'Gold', size: '400x100cm', price: 59, category: 'models', img: './img/shop/gold.jpeg', originalImg: './img/shop/original-size/gold.jpeg'},
        {id: '000008', quantity: 1, name: 'No longer', size: '110x50cm', price: 40, category: 'nature', img: './img/shop/no-longer.jpeg', originalImg: './img/shop/original-size/no-longer.jpeg'},
        {id: '000009', quantity: 1, name: 'Beauty', size: '300x100cm', price: 50, category: 'models', img: './img/shop/beauty.jpeg', originalImg: './img/shop/original-size/beauty.jpeg'}
    ];
    

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
            console.log(prodFiltrados);
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
                    //////////////////////////////////////////////////FALTA HACER///////////////////////////////////////////////////////////
                    // let nTotal = Object.values(product).reduce((acc, {quantity, price}) => acc + quantity * price, 0);
                    // product.price = nTotal;

                    // console.log(product);
                    // console.log(nTotal);
                    //////////////////////////////////////////////////FALTA HACER///////////////////////////////////////////////////////////                
                };
            })
        } else {

        const item = stockProductos.find((product) => product.id === productId);
        cart.push(item);
        }
        actualizarCarrito();
    }
    ///////////////////////////////////FALTA HACER/////////////////////////////////////////////
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
    //arreglar botones eliminar productos individules carrito.
    //total amount.
    //filtrado(al filtrar se han creado problemas con el código).
    //añadir boton frame o noFrame al carrito individuales (   console.log(frame.checked);   ).

    //Avanzado:
        //poder seleccionar cuanta de x cantidad, tienen frame o no.
        //posteriormente almacenar si tiene frame o no x elementos individualmente.
        //

}; //END (SHOP PAGE)

//ABOUT (/html/cart.html)
if(window.location.pathname == '/cart.html'){
    console.log(`Estás en el w.l.pathname --> ${window.location.pathname}`);




}; //END (CART PAGE)

//ABOUT (/html/about.html)
if(window.location.pathname == '/about.html'){
    console.log(`Estás en el w.l.pathname --> ${window.location.pathname}`);



};

//CONTACT (/html/contact.html)
if(window.location.pathname == '/contact.html'){
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