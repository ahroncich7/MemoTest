let cards = document.querySelectorAll("img")
let cardsEnJuego = []
let hayMatch
cards.forEach(function(imageElement) {
    imageElement.onclick = function(e) {
        card = e.target.src
        console.log(card)
        cardsEnJuego.push(card)
        if (cardsEnJuego.length >= 2) {
            if (cardsEnJuego[0] === cardsEnJuego[1]) {
                hayMatch = "si"
            }
            cardsEnJuego = []
            return hayMatch
        }
    }
})