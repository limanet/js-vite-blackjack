/**
 * Obtiene una carta del mazo de cartas.
 *
 * @param {string[]} deck - Mazo de cartas
 * @returns {string}
 */
export const pedirCarta = (deck) => {
    if (deck.length === 0) throw new Error('No quedan cartas');

    return deck.pop();
};