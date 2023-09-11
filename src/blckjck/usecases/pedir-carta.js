
/**
 * Esta funciómn permite tomar una carta
 * @param {Array<String>} carta es un arreglo de string
 * @returns {String} retorna la caerta del deck
 */

export const pedirCarta = ( deck ) => {

  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
