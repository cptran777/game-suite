/* The root reducer handles packaging all the reducers to be 
*  bound to our react components
*/

import { combineReducers } from 'redux';

import gameSelect from './gameSelect';

const rootReducer = combineReducers({
  gameSelect
});

export default rootReducer;