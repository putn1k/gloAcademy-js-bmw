const smoothLinks = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smoothLinks.forEach( (link) => {
    link.addEventListener( 'click', (event) => {
        event.preventDefault();
        const id = link.getAttribute('href').substring(1);

        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
});