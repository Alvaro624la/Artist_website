/*
import * as "variables" from "./modulos/variables";
import * as "funciones" from "./modulos/funciones";
import * as "bootstrap" from "./modulos/bootstrap";
*/

//HAMBURGUER NAVBAR BTN
const hamburguer = document.getElementById('hamburguer');
const navMenu = document.getElementById('nav-menu');

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.getElementById('nav-link').forEach(n => n.addEventListener('click', ()=>{
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
}))

//HOME
//CAROUSEL
//VARIABLES
const SLIDER = document.getElementById('slider');
let sliderSection = document.getElementById('slider-section');

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
    let sliderSection = document.getElementById('slider-section');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    SLIDER.style.marginLeft = '0';
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
setInterval(function(){
    next();
}, 3000);