let cards = document.querySelectorAll("img")
let cardsEnJuego = []

cards.forEach(function(imageElement) {
    imageElement.onclick = function(e) {
        card = e.target
        cardsEnJuego.push(card)
        if (cardsEnJuego.length >= 2) {
            if (cardsEnJuego[0].src === cardsEnJuego[1].src) {
                cardsEnJuego[0].src = "images/cards/none.jpg"
                cardsEnJuego[1].src = "images/cards/none.jpg"
            }
            cardsEnJuego = []
            return false
        }
    }
});