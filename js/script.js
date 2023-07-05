
/* Toggle navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* Scroll bar active */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*Remove toggle bar when click navbar link on scroll*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Scroll Animation and effects */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.edu-row, .sk-row, .project-box, .contact-form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h3, .about-content h3', { origin:'left' });
ScrollReveal().reveal('.about-content', { origin:'right' });

/* Text Animation and effects */
const typed = new Typed('.multiple-text',{
    strings: ['FullStack Developer', 'Web Developer', 'Graphic Designing'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    showCursor: false
    //loop: true
});

