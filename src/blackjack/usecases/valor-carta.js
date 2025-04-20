/**
 * Recibe una carta y devuelve su valor.
 *
 * @param {string} carta - Carta en formato '10C'
 * @returns {number}
 */
export const valorCarta = (carta) => {
    const valor = carta.substr(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        parseInt(valor);
};