//Prueba
console.log("linkeado 100%");

// Efectos en el NAVBAR onclick;
const $inicio = document.querySelector('#inicio');
$inicio.onclick = function (){
    $inicio.style.color = '#5f0f40';
    $inicio.style.fontWeight = "bolder"     
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
    $brand.style.webkitAnimation = 'rotate-out-center 0.8s ease-out alternate-reverse backwards';
}



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
        img.setAttribute("style", "max-width: 75%;")
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

// Modificacion color en efecto de hover en botones (desde JS con 'mouseover' y 'mouseout')
const buttons = document.querySelectorAll('.btn-outline-secondary')

function generarRGBAleatorio (){
    const numeroAzar = ()=>{ return Math.floor(Math.random()*256)}
    const generarColor = () => {
        return  `rgb(${numeroAzar()}, ${numeroAzar()}, ${numeroAzar()})`
    }
    return generarColor();
}
buttons.forEach(button => {
    button.addEventListener('mouseover', ()=> {
        button.style.backgroundColor = `${generarRGBAleatorio()}`;
        button.style.border = "0px solid transparent";
    })
    button.addEventListener('mouseout', ()=> {
        button.style.backgroundColor = "white"; 
        button.style.border = "1px solid #6c757d"; 
    })
})