/*************** REACT AND REDUX IMPORTS *******************/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

/*************** PROJECT SPECIFIC IMPORTS ******************/

import App from './containers/App';
import Home from './containers/Home';
import TicTacToe from './containers/TicTacToe';

/************* SETUP VIRTUAL DOM AND ROUTER ****************/

const store = configureStore(/*initial state*/);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component= { Home }/>
        <Route path="tictactoe" component= { TicTacToe }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);