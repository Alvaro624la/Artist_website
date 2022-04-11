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


//HOME (/html/lmguzman.html)
if(window.location.pathname == '/html/lmguzman.html'){
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
        SLIDER.style.transition = 'all .5s';
        setTimeout(function(){
            SLIDER.style.transition = 'none';
            SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);
            SLIDER.style.marginLeft = '-100%';
        }, 500);
    };

    function prev(){
        let sliderSection = document.getElementsByClassName('home__main__carousel-cont__slider__section');
        let sliderSectionLast = sliderSection[sliderSection.length - 1];
        SLIDER.style.marginLeft = '0%';
        SLIDER.style.transition = 'all .5s';
        setTimeout(function(){
            SLIDER.style.transition = 'none';
            SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
            SLIDER.style.marginLeft = '-100%';
        }, 500);
    };

    BTNRIGHT.addEventListener('click', function(){
        next();
    });
    BTNLEFT.addEventListener('click', function(){
        prev();
    });

    //MOVIMIENTO AUTOMÁTICO
    // setInterval(function(){
    //     next();
    // }, 3000);

} else {};

//SHOP (/html/shop.html)
if(window.location.pathname == '/html/shop.html'){
    console.log(`Estás en el w.l.pathname --> ${window.location.pathname}`);



} else {};

//ABOUT (/html/about.html)
if(window.location.pathname == '/html/about.html'){
    console.log(`Estás en el w.l.pathname --> ${window.location.pathname}`);



} else {};

//CONTACT (/html/contact.html)
if(window.location.pathname == '/html/contact.html'){
    console.log(`Estás en el w.l.pathname --> ${window.location.pathname}`);



} else {};