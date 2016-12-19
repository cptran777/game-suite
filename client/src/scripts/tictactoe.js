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

const checkDiagonals = (board, criteria, count) => {

  let leftMatch = 0, rightMatch = 0;

  for (let i = 0, j = 0, x = board.length - 1, y = 0; i < board.length; i++, j++, x--, y++) {

    if (board[i][j] === criteria) {
      leftMatch++;
    }

    if (board[x][y] === criteria) {
      rightMatch++;
    }

  }

  if (leftMatch === count) {
    return { result: true, type: 'left' };
  } else if (rightMatch === count) {
    return { result: true, type: 'right' };
  } else {
    return { result: false, type: null };
  }

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
  isEmptyAt(coords) {
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

  makeLinearMove(board, check) {

    if (check.row) {
      for (let i = 0; i < 3; i++) {
        if (board.isEmptyAt([check.row, i]) {
          return board.makePlay([check.row, i], 2);
        }
      }
    } else if (check.col) {
      for (let i = 0; i < 3; i++) {
        if (board.isEmptyAt([i, check.col]) {
          return board.makePlay([i, check.col], 2);
        }
      }
    }

  }

  makeDiagonalMove(board, check) {

    if (check.type === 'left') {
      for (let i = 0, j = 0; i < 3; i++, j++) {
        if (board.isEmptyAt([i, j]) {
          return board.makePlay([i, j], 2);
        }
      }
    } else if (check.type === 'right') {
      for (let i = 2, j = 0; j < 3; i--, j++) {
        if (board.isEmptyAt([i, j]) {
          return board.makePlay([i, j], 2);
        }
      }
    }
  }

  makePlay(board) {

    let matrix = board.getBoard();

    // Check rows and columns for potential victories
    let checkAi = checkRowsNCols(matrix, 2, 2);

    if (checkAi.result) {
      return this.makeLinearMove(board, checkAi);
    }

    // Check for diagonal potential victory plays
    checkAi = checkDiagonals(matrix, 2, 2);

    if (checkAi.result) {
      return this.makeDiagonalMove(board, checkAi);
    }

    // Check for rows and columns of potential defeat
    checkAi = checkRowsNCols(matrix, 1, 2);

    if (checkAi.result) {
      return this.makeLinearMove(board, checkAi);
    }

    // Check for diagonal potential defeats
    checkAi = checkDiagonals(matrix, 1, 2);

    if (checkAi.result) {
      return this.makeDiagonalMove(board, checkAi);
    }

    let availableMoves = board.emptyList();

    return board.makePlay(availableMoves[Math.floor(Math.random() * availableMoves.length)], 2);

  }

}

export default {
  TicTacBoard,
  Ai
};