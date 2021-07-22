context("memoprueba", () => {
    before(() => {
        cy.visit("http://192.168.1.4:8080");
    });
    describe("Arranca el juego", () => {
        it("Se asegura que haya un tablero con 16 cuadros", () => {
            var tarjetas;
            tarjetas = cy.get("#div-tablero").find(".tarjetas");
            tarjetas.should("have.lengthOf", 16)
        });
        it("Se asegura que se pueda hacer click en comenzar", () => {
            cy.get("#boton-iniciar").click()
        });
        describe("Resuelve el juego", () => {
            let tarjetasPorColor;
            it(("Caso Fallido"), () => {
                cy.get("#div-tablero").find(".col div").then(($tarjetas) => {
                    tarjetasPorColor = obtenerCuadros($tarjetas)
                    tarjetasPorColor[0][0].click()
                    tarjetasPorColor[1][0].click()
                    cy.wait(1000)
                })
            })
            it(("Caso exitoso"), () => {
                tarjetasPorColor.forEach((par, i) => {
                    console.log(par)
                    cy.get(par[0]).click()
                    cy.get(par[1]).click()
                    cy.wait(1000)
                })
            })
        })
    })

    function obtenerCuadros($tarjetas) {
        let Cuadros = {};
        $tarjetas.each(function(i, tarjeta) {
            if (Cuadros[tarjeta.className]) {
                Cuadros[tarjeta.className].push(tarjeta)
            } else {
                Cuadros[tarjeta.className] = [tarjeta]
            }
        })
        return (Object.values(Cuadros))
    }
})