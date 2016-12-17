/****************** GAME STATE ACTIONS *********************/

export const changeGame = (newGame) => {
  return {
    type: 'CHANGE_GAME',
    currentGame: newGame
  }
}