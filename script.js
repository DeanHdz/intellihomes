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

//Logica para manejar la visualizacion de cada pregunta en la seccion de preguntas frecuentes
const questions = document.querySelectorAll('.freq-card');
questions.forEach((question) => {
    question.addEventListener('click', () => {
        questions.forEach((q) => {
            if (q !== question) {
                q.classList.remove('active');
            }
        });
        question.classList.toggle('active');
    });
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

//Fuegos artificiales realistas
function makeFullCircleFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    document.body.appendChild(firework);
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    firework.style.backgroundColor = color;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    setTimeout(() => {
        firework.remove();
    }, 2000);
}

function makeFirework() {
    setInterval(() => {
        makeFullCircleFirework();
    }, 2000);
}

//Fuegos artificiales realistas de facebook
/*
function makeFullCircleFirework2(fire){
    let color = randColor();
    let velocity = Math.random() * 8 + 8;
    let max = fireNumber * 3;
    for (let i = 0; i < max; i++){
        let rad = (i * 2 * Math.PI) / max;
        let firework = {
            x: fire.x, y: fire.y,
            size: Math.random() + 1.5,
            fill: color,
            vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
            vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
            ay: 0.06, alpha: 1,
            life: Math.round((Math.random() * range) / 2) + range / 1.5
        };
    }
}*/