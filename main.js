let listaFinal = [];
let $tarjetas = document.querySelectorAll(".tarjetas")
let tarjetasEnJuego = []
let colores = ["negro", "azul", "amarillo", "rojo", "verde", "violeta", "naranja", "gris", "negro", "azul", "amarillo", "rojo", "verde", "violeta", "naranja", "gris"];
iniciarJuego();


function manejarRonda(e) {
    tarjeta = e.target
    mostrar(tarjeta)
    tarjetasEnJuego.push(tarjeta)
    revisarConcidencias(tarjetasEnJuego)
};

function revisarConcidencias($tarjetasEnJuego) {
    if ($tarjetasEnJuego.length >= 2) {
        if ($tarjetasEnJuego[0].src === $tarjetasEnJuego[1].src) {
            $tarjetasEnJuego[0].src = "images/cards/exito.jpg"
            $tarjetasEnJuego[0].id = "exito"
            $tarjetasEnJuego[1].src = "images/cards/exito.jpg"
            $tarjetasEnJuego[1].id = "exito"
        }
        bloquearInput();

        setTimeout(function() {
            ocultar(tarjetasEnJuego[0]);
            ocultar(tarjetasEnJuego[1]);
            desbloquearInput();
            tarjetasEnJuego = []
        }, 1000)

    };
}

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
        $tarjetas[n].querySelector("img").src = `images/cards/${colores[j]}.jpg`
        j++
    });
}

function iniciarJuego() {
    obtenerLista();
    asignarTarjetas();
}

function ocultar(elemento) {
    elemento.style.opacity = "0"
}

function mostrar(elemento) {
    elemento.style.opacity = "1"
}

function desbloquearInput() {
    $tarjetas.forEach(function(imageElement) {
        imageElement.onclick = manejarRonda
    })
};

function bloquearInput() {
    $tarjetas.forEach(function(imageElement) {
        imageElement.onclick = manejarRonda
    });
}