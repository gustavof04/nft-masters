// Testando o hamburger menu (em desenvolvimento)
function myFunction(x) {
    x.classList.toggle("change");
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
