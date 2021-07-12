let listaFinal = [];
let tarjetas = document.querySelectorAll(".tarjetas")
let tarjetasEnJuego = []
let colores = ["negro", "azul", "amarillo", "rojo", "verde", "violeta", "naranja", "gris", "negro", "azul", "amarillo", "rojo", "verde", "violeta", "naranja", "gris"];
function obtenerLista() {
    let numeroUnico
    while (listaFinal.length < 16) {
        numeroUnico = Math.floor(Math.random() * 16)
        if (comprobarSiEsUnico(numeroUnico)) {
            listaFinal.push(numeroUnico)
        }
    }
    return listaFinal
}

function comprobarSiEsUnico(n) {
    let esUnico = true
    listaFinal.forEach(function(i) {
        if (i === n) {
            esUnico = false
        }
    });
    return esUnico
}

function asignarTarjetas() {
    let j = 0
    listaFinal.forEach(function(n) {
        tarjetas[n].querySelector("img").src = `images/cards/${colores[j]}.jpg`
        j++
    });
}

