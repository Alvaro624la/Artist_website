import {objects} from "./modulos/objects.js";
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

};

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
    biggerImgs();


    //ADD TO CART - BTN:
    //VARIABLES
    let cardImgCont = document.getElementsByClassName('shop__main__grid-1__shop-cont__card__img-cont');
    //FUNCIONES
    function addToCart(){
        for(let i = 0; i <= cardImgCont.length -1; i++){
            // console.log(cardImgCont[i]);
            cardImgCont[i].addEventListener('mouseenter', ()=>{
                let addBtn = document.createElement('a');
                cardImgCont[i].appendChild(addBtn);
                addBtn.className = 'shop__main__grid-1__shop-cont__card__img-cont__add-btn';
                addBtn.innerHTML = 'Add to cart';

                cardImgCont[i].addEventListener('mouseleave', function addCartOut(){
                    // console.log(card[i]);
                    addBtn.parentNode.removeChild(addBtn);
                    document.removeEventListener('mouseleave', addCartOut);                    
                });
            });
            
        };
    };
    addToCart();


    //CART:
    // element.href = './cart.html';
    //VARIABLES
    //seccion(shop-container)
    const CONTAINER = document.getElementById('shop-cont');
    //all cards
    let allCards = document.getElementsByClassName('shop__main__grid-1__shop-cont__card');

    // //mostrar todos los allCards id
    // for (var i = 0; allCards.length > i; i++) {
    //     console.log(allCards[i] = allCards[i].id);
    // }

    //Objetos
    for (var i = 0; objects.length > i; i++) {
            // console.log(objects[i]);
        }

};

//ABOUT (/html/about.html)
if(window.location.pathname == '/html/about.html'){
    console.log(`Estás en el w.l.pathname --> ${window.location.pathname}`);



};

//CONTACT (/html/contact.html)
if(window.location.pathname == '/html/contact.html'){
    console.log(`Estás en el w.l.pathname --> ${window.location.pathname}`);



};