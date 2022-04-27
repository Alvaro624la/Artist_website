import {objects} from "./modulos/objects.js"; //SHOP PAGE --> FILTERS(LEFT SHOP MENÚ)
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

    //VER IMAGEN EN GRANDE
    //VARIABLES
    const MAIN = document.getElementById('main');
    let cardImg = document.getElementsByClassName('shop__main__grid-1__shop-cont__card__img-cont__img');
    //FUNCIONES
    function biggerImgs(){
        for(let i = 0; i <= cardImg.length -1; i++){
            // console.log(cardImg[i]);
            cardImg[i].addEventListener('click', (event)=>{
                // console.log(event.target.id);
                // console.log(event.target);
                let bigImgCont = document.createElement('div');
                MAIN.appendChild(bigImgCont);
                bigImgCont.className = 'biggerImgCont';
                let bigImgInside = document.createElement('img');
                bigImgCont.appendChild(bigImgInside);
                bigImgInside.className = 'biggerImgCont__img-inside';
                bigImgInside.src = (cardImg[i].src);

                document.addEventListener('click', function removeChild(e){
                    if(e.target.id != 'card-img'){
                        bigImgCont.parentNode.removeChild(bigImgCont);
                        document.removeEventListener('click', removeChild);
                    };
                });
            });
            
        };
    };
    // biggerImgs();


    //FILTERS(LEFT SHOP MENÚ):
    //VARIABLES
    const GOCARTBTN = document.getElementById('go-cart-btn');
    let allCard = document.getElementsByClassName('shop__main__grid-1__shop-cont__card');
    let cartContainer = document.getElementById('cart__main');

    //FUNCTIONS
    //Cards id
    for (var i = 0; allCard.length > i; i++) {
        // console.log(allCard[i].id);

    }

    //Objets
    for (var i = 0; objects.length > i; i++) {
        // console.log(objects[i]);
    }

    //asignar propiedades de x objeto.id a x cards.id de html. Así cada card tendrá categorias, id y demás propiedades
    //si coincide categoria de indice + categoria del card = mostrar éstos coincidentes

    
    //ADD TO CART - BTN:
    //VARIABLES
    let cardImgCont = document.getElementsByClassName('shop__main__grid-1__shop-cont__card__img-cont');
    //FUNCIONES
    function addToCart(){
        for(let i = 0; i <= cardImgCont.length -1; i++){
            cardImgCont[i].addEventListener('mouseenter', (e)=>{
                let addBtn = document.createElement('a');
                cardImgCont[i].appendChild(addBtn);
                addBtn.className = 'shop__main__grid-1__shop-cont__card__img-cont__add-btn';
                addBtn.innerHTML = 'Add to cart';

                //CART ITEMS ARRAY //https://www.youtube.com/watch?v=Mm3iLqhZB1A&ab_channel=GCode
                let cartItems = [];
                addBtn.addEventListener('click', (e)=>{
                    let targetId = e.target.parentElement.parentElement.id; //find --> card id

                    // let allTargetId = document.getElementById('shop-cont');
                    // console.log(allTargetId.childNodes);

                    cartItems.push(targetId); // cartItems --> [targetId]
                    // cartItems = 
                    console.log(cartItems);
                });

                cardImgCont[i].addEventListener('mouseleave', function addCartOut(){
                    addBtn.parentNode.removeChild(addBtn);
                    document.removeEventListener('mouseleave', addCartOut);                    
                });
            });
            
        };
    };
    addToCart();


}; //END (SHOP PAGE)

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