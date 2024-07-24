window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const Logo = document.getElementById('Logo');
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        header.classList.add('scrolled-bg');
        Logo.classList.add('scrolled-logo');
        nav.classList.add('scrolled-nav');
    } else {
        header.classList.remove('scrolled-bg');
        Logo.classList.remove('scrolled-logo');
        nav.classList.remove('scrolled-nav');
    }
});
