// Mobile menu toggle

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    const icon = mobileMenu.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});

mobileMenu.addEventListener('mouseenter', () => {
    const icon = mobileMenu.querySelector('i');
    if (icon.classList.contains('bx-x')) {
        icon.style.transform = 'rotate(180deg)';
        icon.style.transition = 'transform 0.4s ease, color 0.3s ease';
    }
});

mobileMenu.addEventListener('mouseleave', () => {
    const icon = mobileMenu.querySelector('i');
    icon.style.transform = 'rotate(0deg)';
});

navLinks.addEventListener('mousemove', (e) => {
    const rect = navLinks.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    navLinks.style.setProperty('--menu-x', `${x}px`);
    navLinks.style.setProperty('--menu-y', `${y}px`);
});

// Header scroll effect

const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Header mousemove effect

const mainHeader = document.getElementById('main-header');

mainHeader.addEventListener('mousemove', (e) => {
    const rect = mainHeader.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mainHeader.style.setProperty('--x', `${x}px`);
    mainHeader.style.setProperty('--y', `${y}px`);
});

// Cart icon toggle

const cartIcon = document.querySelector('.cart-icon');

cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    
    cartIcon.classList.toggle('active');
});

// Menu items slider

const navLinksElement = document.querySelector('.nav-links');

const wrapper = document.querySelector('.sliderwrapper');
const menuitems = document.querySelectorAll('.menuitem');

menuitems.forEach((item, index) => {
    item.addEventListener('click', () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`
    });
});

// Logo state change on scroll and hover

const logoImg = document.getElementById('logo-img');
const mainHeaderElement = document.getElementById('main-header');

function updateLogoState() {
    const isScrolled = window.scrollY > 50;
    const isHovered = mainHeaderElement.matches(':hover');

    if (isScrolled || isHovered) {
        logoImg.src = logoImg.getAttribute('data-lilac');
    } else {
        logoImg.src = logoImg.getAttribute('data-white');
    }
};

window.addEventListener('scroll', updateLogoState);

mainHeaderElement.addEventListener('mouseenter', updateLogoState);
mainHeaderElement.addEventListener('mouseleave', updateLogoState);

//Efeito da mulher

const hero = document.querySelector('.hero');
const heroWoman = document.querySelector('.hero-woman');

const maxScale = 1.35;

function updateHeroWomanScale() {
    const rect = hero.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const progress = Math.max(0, Math.min(1, 1 - rect.bottom / viewportHeight));
    const scale = 1 + progress * (maxScale - 1);
    heroWoman.style.transform = `scale(${scale})`;
};

window.addEventListener('scroll', updateHeroWomanScale);
window.addEventListener('resize', updateHeroWomanScale);
window.addEventListener('load', updateHeroWomanScale);