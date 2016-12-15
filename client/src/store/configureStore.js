import { createStore } from 'redux';

import rootReducer from '../reducers';

const configureStore = (initialState) => {
  return store = createStore(rootReducer, initialState);
}

export default configureStore;