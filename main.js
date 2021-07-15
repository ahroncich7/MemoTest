let listaFinal = [];
let $tarjetas = document.querySelectorAll(".tarjetas")
let tarjetasEnJuego = []
let colores = ["negro", "azul", "amarillo", "rojo", "verde", "violeta", "naranja", "gris", "negro", "azul", "amarillo", "rojo", "verde", "violeta", "naranja", "gris"];
iniciarJuego();


function manejarRonda(e) {
    tarjeta = e.currentTarget
    mostrar(tarjeta.querySelector("img"));
    tarjetasEnJuego.push(tarjeta);
    revisarConcidencias(tarjetasEnJuego);
    evaluarSiGano();
};

function revisarConcidencias($tarjetasEnJuego) {
    if ($tarjetasEnJuego.length >= 2) {
        if ($tarjetasEnJuego[0].querySelector("img").src === $tarjetasEnJuego[1].querySelector("img").src) {
            $tarjetasEnJuego[0].className = "exito"
            $tarjetasEnJuego[0].querySelector("img").src = "images/cards/exito.jpg"
            $tarjetasEnJuego[1].className = "exito"
            $tarjetasEnJuego[1].querySelector("img").src = "images/cards/exito.jpg"

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
    desbloquearInput();
    obtenerLista();
    asignarTarjetas();
}

function ocultar(elemento) {
    if (elemento.className !== "exito")
        elemento.querySelector("img").style.opacity = "0"
}

function mostrar(elemento) {
    elemento.style.opacity = "1"
}

function desbloquearInput() {
    $tarjetas.forEach(function(imageElement) {
        if (imageElement.className === "tarjetas") {
            imageElement.onclick = manejarRonda
        } else {
            imageElement.onclick = function() {}
        }
    })
}

function bloquearInput() {
    $tarjetas.forEach(function(imageElement) {
        imageElement.onclick = function() {}
    });
}

function evaluarSiGano() {
    if (document.querySelectorAll(".exito").length === 16) {
        document.getElementById("ganador").className = ""
        document.getElementById("tablero").className = "oculto"
    }

}