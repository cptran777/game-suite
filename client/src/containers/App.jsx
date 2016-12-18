/*************** REACT AND REDUX IMPORTS *******************/

import React from 'react';

import { Router, Route, Link } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index';

/*************** PROJECT SPECIFIC IMPORTS ******************/

/********************** MAIN EXPORT ************************/

// This will be the entirety of what the user will see as an application
class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div id="app-container" className="container-fluid">
        <header className="row">
          <div id="logo"><h1 id="header">Game Suite</h1></div>
          <nav id="navbar">
            <div className="col-sm-3 col-md-3"><Link to="/">Home</Link></div>
            <div className="col-sm-3 col-md-3"><Link to="tictactoe" onClick={() => { this.props.actions.changeGame('TICTACTOE'); }}>Tic Tac Toe</Link></div>
          </nav>
        </header>
        { this.props.children }
        <footer className="row">What</footer>
      </div>
    );
  }
}

// Retrieves from store to provide data to container, results of 
// reducers will appear as props
const mapStateToProps = (state) => {
  return {
    currentGame: state.gameSelect.currentGame
  };
}

// Passes data to store from container. Adds action creators to the
// container as props
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
