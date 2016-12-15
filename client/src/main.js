/*************** REACT AND REDUX IMPORTS *******************/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

/*************** PROJECT SPECIFIC IMPORTS ******************/

import App from './containers/App';

/************* SETUP VIRTUAL DOM AND ROUTER ****************/

const store = configureStore(/*initial state*/);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component= { /*TBD*/ }/>
        <Route path="TBD" component= { /*TBD*/ }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);