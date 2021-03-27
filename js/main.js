//Prueba
console.log("linkeado 100%");

// Efectos en el NAVBAR onclick;
const $inicio = document.querySelector('#inicio');
$inicio.onclick = function (){
    $inicio.style.color = '#5f0f40';
    $inicio.style.fontWidth = "bolder"     
}
//Se remueven efectos sobre SKILLS
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
const $mundoGeek = document.querySelector('#mundoGeek');
const $petFirmware = document.querySelector('#pet-firmware');

//Evento prender la luz
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


    // $mundoGeek.classList.remove("oculto");
    $sectionCarrusel.style.backgroundColor = "white";
    //Oculto el carrusel
    $carrusel.style.display = "none";
    $proyectosOcultos.style.display = "flex";
    // $navOscuro.style.backgroundColor = "White";
    $navOscuro.style.opacity = "1";
    $navOscuro.style.display = "flex";
    $navOscuro.className = "header-proyectos sticky-top";
}


//Doble evento para mostrar las características del proyecto
//Evento hover
$mundoGeek.addEventListener('mouseover', function(){
    $mundoGeek.children[0].classList.remove("oculto")
})

$mundoGeek.addEventListener('mouseout', function(){
    $mundoGeek.children[0].classList.add("oculto")
})

$petFirmware.addEventListener('mouseover', function(){
    $petFirmware.children[0].classList.remove("oculto")
})

$petFirmware.addEventListener('mouseout', function(){
    $petFirmware.children[0].classList.add("oculto")
})

