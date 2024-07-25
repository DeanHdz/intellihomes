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
    const Logo = document.getElementById('Logo');
    if (window.scrollY > 50) {
        header.classList.add('scrolled-header');
        Logo.classList.add('scrolled-logo');
    } else {
        header.classList.remove('scrolled-header');
        Logo.classList.remove('scrolled-logo');
    }
});