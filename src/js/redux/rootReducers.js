import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import app from './modules/app';

import reducer from './reducers/reducer'

export default combineReducers({
  app,
  routing,
  reducer
});
