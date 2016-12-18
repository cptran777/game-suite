/* The TicTacToe container contains all of the components that are
*  part of the tic tac toe game
*/

/*************** REACT AND CUSTOM IMPORTS ******************/

import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index';

/********************** MAIN EXPORT ************************/

class TicTacToe extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.currentGame);
    return (
      <main id="app-body" className="row container-fluid">
        <div className="row">This is the Tic Tac Toe game</div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentGame: state.gameSelect.currentGame
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);