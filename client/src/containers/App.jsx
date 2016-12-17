/*************** REACT AND REDUX IMPORTS *******************/

import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreataors } from 'redux';
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
      <div className="app-container">
        <header>Hi</header>
        { this.props.children }
        <footer>What</footer>
      </div>
    );
  }
}

// Retrieves from store to provide data to container, results of 
// reducers will appear as props
const mapStateToProps = (state) => {
  return {};
}

// Passes data to store from container. Adds action creators to the
// container as props
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreataors(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
