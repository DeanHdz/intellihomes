//Cambiar imagen de fondo de "background" constantemente, para dar efecto de animacion
const background = document.getElementById('background');
background.style.backgroundImage = 'url(assets/images/16x9_1.jpg)';
const images = ['assets/images/16x9_1.jpg', 'assets/images/16x9_2.png', 'assets/images/16x9_3.png', 'assets/images/16x9_4.png'];
let i = 1;
setInterval(() => {
    background.style.backgroundImage = `url(${images[i]})`;
    if(i == images.length - 1) {
        i = 0;
    } else {
        i++;
    }
}, 5500);

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

//Manejo del navbar en vista celular
function toggleNav() {
    const nav = document.querySelector('nav');
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
    } else {
        nav.classList.add('show');
    }
}

