//Prueba
console.log("linkeado 100%");
// Animacion en el NAVBAR
const $inicio = document.querySelector('#inicio');
$inicio.onclick = function (){
    $inicio.style.color = '#5f0f40';
    $inicio.style.fontWidth = "bolder"     
}
// const $skills = document.querySelector('#skills')
// $skills.onclick = function (){
//     $skills.style.color = '#007f5f';
//     $skills.style.fontWidth = "bolder" 
// }
const $contacto = document.querySelector('#contacto')
$contacto.onclick = function (){
    $contacto.style.color = 'white';
    $contacto.style.fontWidth = "bolder" 
}

const $brand = document.querySelector('.navbar-brand');
$brand.onclick = function(){
    $brand.style.webkitAnimation = 'rotate-out-center 0.8s ease-out alternate-reverse backwards;';
}


// Pagina Proyectos
const $footerLight = document.querySelector('.footer-proyecto');
const $bodyProyectos = document.querySelector('.proyecto-body');
const $sectionCarrusel = document.querySelector('.carrusel');
const $proyectosOcultos = document.querySelector('.proyectos-ocultos');
const $navOscuro = document.querySelector('.header-proyectos');
const $carrusel = document.querySelector('#carouselExampleSlidesOnly');
const $titulo = document.querySelector('#oscuridad h1');



$footerLight.onclick = function(){
    $footerLight.style.backgroundColor = "white";
    $footerLight.children[0].style.backgroundColor = "White";
    $footerLight.children[0].style.color = "black";
    $footerLight.style.animation = "heartbeat 0s ease-in-out infinite both";
    //Pensar mejor una transicion con un background más copado.
    $bodyProyectos.style.backgroundColor = "white";
    $titulo.style.color ="black";
    $titulo.textContent = "Yo!";
    $titulo.style.margin = "0.2rem"
    
    // $sectionCarrusel.style.backgroundColor = "white";
    //Oculto el carrusel
    $carrusel.classList.add("oculto");
    $proyectosOcultos.style.display = "flex";
    // $navOscuro.style.backgroundColor = "White";
    $navOscuro.style.opacity = "1";
    $navOscuro.style.display = "flex";
    $navOscuro.className = "header-proyectos sticky-top";
}

