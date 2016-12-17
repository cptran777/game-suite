/* The game select reducer responds to what the current active
*  game the player is on
*/

const initialState = {
  currentGame: 'NONE'
};

const gameSelect = (state = initialState, action) => {

  switch (action.type) {
    case 'CHANGE_GAME':
      return {
        ...state,
        currentGame: action.newGame
      };
    default:
      return state;
  }

};

export default gameSelect;