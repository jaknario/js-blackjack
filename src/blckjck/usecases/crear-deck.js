import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDecarta ejemplo ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = ( tiposDecarta, tiposEspeciales) => {

      if ( !tiposDecarta || tiposDecarta.length === 0 )
      throw new Error('TiposDeCArtas es obligatorio como un arreglo de String');

      if ( !tiposEspeciales || tiposEspeciales.length === 0 )
            throw new Error('TiposEspeciales es obligatorio como un arreglo de String');


  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDecarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDecarta ) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};
