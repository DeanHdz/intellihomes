////// FUNCIONES PARA MANEJAR LA INTERACCION DEL USUARIO CON LA PAGINA WEB //////

//Manejo del sidebar en vista celular
function toggleSidebar() {
    const aside = document.querySelector('aside');
    const overlay = document.querySelector('#overlay');
    aside.classList.toggle('show');
    overlay.classList.toggle('show');
}



////// MANEJO AUTOMATICO DE LA PAGINA WEB //////

//Cambiar imagen de fondo de "background" constantemente, para dar efecto de animacion
const images = document.querySelectorAll('.background-image');
let currentIndex = 0;
setInterval(() => {
let currentImageIndex = currentIndex;
currentIndex = (currentIndex + 1) % images.length;
images[currentIndex].classList.add('active');
images[currentImageIndex].classList.remove('active');
}, 10000);


//Manejar visualizacion del header al hacer scroll hacia abajo
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const logo = document.getElementById('logo');
    const burger = document.getElementById('burger');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        logo.classList.add('scrolled');
        burger.classList.add('scrolled');
        
    } else {
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled');
        burger.classList.remove('scrolled');
    }
});


//Manejar visualizacion de las marcas al hacer scroll hacia abajo
document.addEventListener("DOMContentLoaded", () => {
    const brands = document.querySelectorAll(".brand");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 }); // Cuando el 20% de la imagen sea visible
    
    brands.forEach((brand) => observer.observe(brand));
});


//Cerrar sidebar al hacer click en el overlay (Fondo oscuro)
document.querySelector('#overlay').addEventListener('click', () => {
    document.querySelector('aside').classList.remove('show');
    document.querySelector('#overlay').classList.remove('show');
});


//Manejo de la visualizacion de la fecha actual en el footer
document.getElementById("currentYear").textContent = new Date().getFullYear();





////////   NO UTILIZADO   ////////

//Manejo del navbar en vista celular
function toggleNav() {
    const nav = document.querySelector('nav');
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
    } else {
        nav.classList.add('show');
    }
}

//Manejar display del navbar cuando se reajuste el tamaño de la ventana
/*window.addEventListener('resize', () => {
    const nav = document.querySelector('nav');
    if(window.innerWidth >= 768){
        nav.classList.remove('show');
    }
});*/