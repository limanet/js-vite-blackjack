import _ from 'underscore';

/**
 * Crea y mezcla un mazo de cartas combinando números y tipos especiales con los tipos de carta.
 *
 * @param {string[]} tiposDeCarta - Array con los tipos/palos de cartas (ej: ['♠','♣','♥','♦'])
 * @param {string[]} tiposEspeciales - Array con los tipos especiales de cartas (ej: ['A','J','Q','K'])
 * @returns {string[]} Mazo de cartas mezclado aleatoriamente
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( (!tiposDeCarta || tiposDeCarta.length == 0) || (!tiposEspeciales || tiposEspeciales.length == 0) ) throw new Error( 'Debe pasar los tipos de cartas y especiales')

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for ( let tipo of tiposDeCarta ) {
            deck.push(i + tipo);
        }
    }

    for ( let especial of tiposEspeciales ) {
        for ( let tipo of tiposDeCarta ) {
            deck.push( especial + tipo );
        }
    }

    deck = _.shuffle(deck);

    return deck;
}