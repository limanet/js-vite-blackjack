import {crearDeck, pedirCarta, valorCarta, turnoMaquina} from './usecases';

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A'];

const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector( '#btnDetener' ),
    btnNuevo = document.querySelector( '#btnNuevo' ),
    marcadores = document.querySelectorAll( 'small' ),
    cartasJugador = document.querySelector( '#cartas-jugador' ),
    cartasOrdenador = document.querySelector( '#cartas-ordenador' );

let puntosJugador = 0,
    puntosMaquina = 0;



deck = crearDeck( tipos, especiales );

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta( deck );
    puntosJugador += valorCarta(carta);
    marcadores[0].textContent = puntosJugador;
    cartasJugador.innerHTML += `<img src="/cartas/${carta}.png" alt="${carta}">`;

    if (puntosJugador >= 21) {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoMaquina( puntosJugador, marcadores[1], cartasOrdenador, deck );
    }
});

btnDetener.addEventListener('click', () => {
    btnDetener.disabled = true;
    btnPedir.disabled = true;
    turnoMaquina( puntosJugador, marcadores[1], cartasOrdenador, deck );
})

btnNuevo.addEventListener('click', () => {
    puntosJugador = 0;
    puntosMaquina = 0;
    marcadores[0].textContent = puntosJugador;
    marcadores[1].textContent = puntosMaquina;
    cartasJugador.innerHTML = '';
    cartasOrdenador.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    deck = [];
    deck = crearDeck( tipos, especiales );
})