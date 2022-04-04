/*
import * as "variables" from "./modulos/variables";
import * as "funciones" from "./modulos/funciones";
import * as "bootstrap" from "./modulos/bootstrap";
*/

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
// document.getElementsByTagName('body').addEventListener('click', ()=>{
//     hamburguer.classList.remove('active');
//     navMenu.classList.remove('active');
// }))