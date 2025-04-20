import {pedirCarta, valorCarta} from './';

/**
 * Turno de la máquina
 *
 * @param {number} puntos - Puntos del jugador
 * @param {HTMLElement} puntosHTML - Elemento HTML con los puntos del jugador
 * @param {HTMLElement} cartasHTML - Elemento HTML con las cartas del jugador
 * @param {string[]} deck - Mazo de cartas
 */
export const turnoMaquina = ( puntos, puntosHTML, cartasHTML, deck= [] ) => {
    if ( !puntos ) throw new Error( 'Debe pasar los puntos');
    if ( !deck || deck.length === 0 ) throw new Error( 'Debe pasar el mazo de cartas');

    let puntosMaquina = 0;

    do {
        const carta = pedirCarta(deck);
        puntosMaquina += valorCarta(carta);
        cartasHTML.innerHTML += `<img src="/cartas/${carta}.png" alt="${carta}">`;
        puntosHTML.textContent = puntosMaquina;

        if (puntos > 21) {
            break;
        }
    } while ( puntosMaquina < puntos && puntosMaquina <= 21 );

    setTimeout( () => {
        if ( puntosMaquina === puntos ) {
            alert( 'Empate!' );
        } else if (puntos > 21) {
            alert( 'Perdiste!' );
        } else if ( puntosMaquina > 21 ) {
            alert( 'Ganaste!' );
        } else if ( puntosMaquina < puntos ) {
            alert( 'Ganaste!' );
        } else if ( puntosMaquina > puntos ) {
            alert( 'Perdiste!' );
        }
    }, 200)
}