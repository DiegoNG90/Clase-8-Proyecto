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

// PROYECTOS3.HTML : Efecto hover sobre la imagen que afecta al texto de las cards

const cardImages = document.querySelectorAll(".card img");
const cardText = document.querySelectorAll(".card-text");

cardImages.forEach(cardImg => {
    cardImg.addEventListener('mouseover', (e)=> {
        let card = e.path[1].children[1].children[1];
        card.style.opacity = 1;
    })
    cardImg.addEventListener('mouseout', (e)=> {
        let card = e.path[1].children[1].children[1];
        card.style.opacity = 0.5;
    })
})

//Lighbox en PROYECTOS3.html

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);


//Evento click para mostrar Lightbox:
cardImages.forEach(cardImg => {
    cardImg.addEventListener("click", (e)=> {
        lightbox.classList.add("active");
        //Add img to Lightbox:
        const img = document.createElement("img");
        img.src = cardImg.src;
        img.setAttribute("style", "height: 70%;");
        //Add p to Lightbox:
        const p = document.createElement("p");
        p.style.color = "#f7c000";
        p.innerText = "Oprima ESC o haga click fuera de la imagen para cerrarla";
        p.style.fontWeight = "bold";
        p.style.filter = "drop-shadow(2px 4px 6px white)";
        p.style.margin = "3px";
        //Remove previous child so they don't get stacked each other.
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img);
        lightbox.appendChild(p);

    })
})

// Ocultar ligthbox con click
lightbox.addEventListener("click", (e) => {
    //Evitar que si hace click en la img de ligthbox, este se cierre:
    if(e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
})
//Ocultar lightbox con keypress "Escape"
document.body.addEventListener("keydown", (e)=> {
    if(lightbox.classList[0] === "active"){
        if(e.key === "Escape"){
            lightbox.classList.remove("active");
        }
    }
})