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
