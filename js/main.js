//Prueba
console.log("linkeado 100%");
// Animacion en el NAVBAR
const $inicio = document.querySelector('#inicio');
$inicio.onclick = function (){
    $inicio.style.color = '#5f0f40';
    $inicio.style.fontWidth = "bolder"     
}
const $skills = document.querySelector('#skills')
$skills.onclick = function (){
    $skills.style.color = '#007f5f';
    $skills.style.fontWidth = "bolder" 
}
const $contacto = document.querySelector('#contacto')
$contacto.onclick = function (){
    $contacto.style.color = 'white';
    $contacto.style.fontWidth = "bolder" 
}

const $brand = document.querySelector('.navbar-brand');
$brand.onclick = function(){
    $brand.style.webkitAnimation = 'rotate-out-center 0.8s ease-out alternate-reverse backwards;';
}


//Interaccion con el h1 de la pagina inicio.
// let path = window.location.pathname;
// const inicioPage = "/inicio.html";

// const $h1Inicio = document.querySelector('.titulo-inicio') 
// if (path.slice(path.length-12, path.length) === inicioPage){
//     const userName = prompt("Escriba su nombre por favor!");
//     if (!userName || userName === null) {
//         $h1Inicio.innerText = `{"Bienvenido a mi portfolio web!"}`;
//     } else {
//     $h1Inicio.innerText = `{"Bienvenido a mi portfolio web, ${userName}!"}`;
//     }
// }

// Pagina Proyectos
const $footerLight = document.querySelector('.footer-proyecto');
const $bodyProyectos = document.querySelector('.proyecto-body');
const $sectionCarrusel = document.querySelector('.carrusel');
const $proyectosOcultos = document.querySelector('.proyectos-ocultos');
const $navOscuro = document.querySelector('.header-proyectos');



$footerLight.onclick = function(){
    $footerLight.style.backgroundColor = "white";
    $footerLight.children[0].style.backgroundColor = "White";
    $footerLight.children[0].style.color = "black";

    $bodyProyectos.style.backgroundColor = "white";
    
    $sectionCarrusel.style.backgroundColor = "white";
    $proyectosOcultos.style.display = "flex";
    // $navOscuro.style.backgroundColor = "White";
    $navOscuro.style.opacity = "1";
    $navOscuro.style.display = "flex";
    $navOscuro.className = "header-proyectos sticky-top";
}


//TRABAJO PENDIENTE
// var $descripcionLandingPage = document.querySelector('.lead').textContent;
// function cambiarColores(colores) {
//     let lista = [];
//     for (var i = 0; i < $descripcionLandingPage.length; i++) {
//         lista.push($descripcionLandingPage[i].fontcolor("(colores[Math.ceil(i % colores.length)])"));
//     }
//     return ;
// }

// cambiarColores(['black','grey','white','red','green','blue']);

// const $brand = document.querySelector('.navbar-brand');
// $brand.onclick = function(){
//     $inicio.style.-webkit
// }
