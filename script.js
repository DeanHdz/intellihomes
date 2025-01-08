//Cambiar imagen de fondo de "background" constantemente, para dar efecto de animacion
const images = document.querySelectorAll('.background-image');
let currentIndex = 0;
// Cambiar imagen cada 5.5 segundos
setInterval(() => {
// Guardar el índice de la imagen actual
let currentImageIndex = currentIndex;
// Calcular el siguiente índice
currentIndex = (currentIndex + 1) % images.length;
// Mostrar la nueva imagen
images[currentIndex].classList.add('active');
// Ocultar la imagen actual
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


//Manejar display del navbar cuando se reajuste el tamaño de la ventana
window.addEventListener('resize', () => {
    const nav = document.querySelector('nav');
    if(window.innerWidth >= 768){
        nav.classList.remove('show');
    }
});

//Manejo del sidebar en vista celular
function toggleSidebar() {
    const aside = document.querySelector('aside');
    const overlay = document.querySelector('#overlay');
    aside.classList.toggle('show');
    overlay.classList.toggle('show');
}

//Cerrar sidebar al hacer click en el overlay (Fondo oscuro)
document.querySelector('#overlay').addEventListener('click', () => {
    document.querySelector('aside').classList.remove('show');
    document.querySelector('#overlay').classList.remove('show');
});

//Manejo de la visualizacion de la fecha actual en el footer
document.getElementById("currentYear").textContent = new Date().getFullYear();


//NO UTILIZADO

//Manejo del navbar en vista celular
function toggleNav() {
    const nav = document.querySelector('nav');
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
    } else {
        nav.classList.add('show');
    }
}

