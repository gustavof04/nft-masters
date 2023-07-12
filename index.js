// Testando o hamburger menu (em desenvolvimento)
function toggleMenu() {
    const menuButton = document.getElementById('nav-button')
    const menu = document.getElementById('overlay-menu');
    const body = document.body;

    menuButton.classList.toggle("change");
    menu.classList.toggle("show");
    body.classList.toggle("no-scroll");
}

function closeMenu() {
    const menuButton = document.getElementById('nav-button')
    const menu = document.getElementById('overlay-menu');
    menuButton.classList.remove('change');
    menu.classList.remove('show');
}

// Ao rolar a tela até atingir a <div> artworks, o background muda.
window.addEventListener('scroll', function() {
    let artworksDiv = document.getElementById('artworks');

    if (artworksDiv) {
        let artworksPosition = artworksDiv.getBoundingClientRect().top;
        let scrollPosition = window.innerHeight;
        let marginPercentage = 95;
        let margin = (scrollPosition * marginPercentage) / 100;

        if (artworksPosition < (scrollPosition - margin)) {
            this.document.body.classList.add('scrolled', 'fade-in')
        } else {
            this.document.body.classList.remove('scrolled')
        }
    }
});
