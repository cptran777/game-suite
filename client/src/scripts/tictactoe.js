/* The game script for the tic tac toe game. Creates the classes necessary
*  to run through a game
*/

// Helper function, gives result of power of two
const pow2(exp) {
  return Math.pow(2, exp);
}

class TicTacBoard {

  constructor() {
    this.board = [];

    for (let i = 0; i < 3; i++) {
      let row = [];

      for (let j = 0; j < 3; j++) {
        row.push(0);
      }

      board.push(row);
    }
  }

  getBoard() {

  }

  // Coords are expected to be a tuple array with the first value being the
  // row and the second val being the column of the board
  makePlay(coords) {

  }

}

export default {
  TicTacBoard
};