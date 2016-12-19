/* The game script for the tic tac toe game. Creates the classes necessary
*  to run through a game
*/

// Helper functions to check whether the board contains a certain count of 
// a criteria on the board. Returns an object with detailed information
const checkRowsNCols = (board, criteria, count) => {

  for (let i = 0; i < board.length; i++) {
    let rowMatch = 0;
    let colMatch = 0;

    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === criteria) {
        rowMatch++;
      }
      if (board[j][i] === criteria) {
        colMatch++;
      }
    }

    if (rowMatch === count) {
      return { result: true, row: i, col: null };
    }
    if (colMatch === count) {
      return { result: true, row: null, col: i };
    }
  }

  return { result: false, row: null, col: null };

};

const checkDiagonals = (board, criteria) => {

  let leftMatch = true, rightMatch = true;

  for (let i = 0, j = 0, x = board.length - 1, y = 0; i < board.length; i++, j++, x--, y++) {

    if (board[i][j] !== criteria) {
      leftMatch = false;
    }

    if (board[x][y] !== criteria) {
      rightMatch = false;
    }

  }

  return leftMatch || rightMatch;

};

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
    return this.board;
  }

  // Coords are expected to be a tuple array with the first value being the
  // row and the second val being the column of the board
  isEmpty(coords) {
    return this.board[coords[0]][coords[1]] === 0;
  }

  // Returns an array of all the empty coordinates still remaining on the
  // board
  emptyList() {
    let list = [];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === 0) {
          list.push([i, j]);
        }
      }
    }

    return list
  }

  // Player is expected to be 1 for the human player (X) or 2 for the computer (O)
  makePlay(coords, player) {
    if (this.isEmpty(coords)) {
      this.board[coords[0]][coords[1]] = player;
    }

    return this.board;
  }

  checkVictory(player) {
    return checkRowsNCols(this.board, player, 3).result || checkDiagonals(this.board, player, 3).result;
  }

}

// The AI runs on simple logic. The computer prioritizes making a play if it will
// win the game. Second priority is to make a play that will stop the player from
// winning. If neither of these moves exist, the computer will make a random move
class Ai {

  constructor() {

  }

  countRowsNCols(board, criteria) {

    for (let i = 0; i < board.length; i++) {

      let rowCount = 0;
      let colCount = 0;

      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === criteria) {
          count++;
        }
      }

      if (count === 2) {
        return { exists: true, row: i };
      }

    }

    return { exists: false, row: null };

  }

}

export default {
  TicTacBoard
};