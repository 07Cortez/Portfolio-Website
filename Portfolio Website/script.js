// mix it up portfolio section 
var mixer = mixitup('.portfolio-gallery');

/*====== scroll reveal ======*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-img img, .home-content, .resume, .heading', { origin: 'top'});
ScrollReveal().reveal('.portfolio-box, .contact form', { origin: 'buttom'});
ScrollReveal().reveal('.home-content h1, .about-img img, .portfolio, .contact form', { origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content, .contact p, .contact box, .about-content', { origin: 'right'});



