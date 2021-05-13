import { combineReducers } from 'redux';
import queryReducer from './queryReducer';
import themeReducer from './themeReducer';
import apiReducer from './apiReducer';
import userReducer from './userReducer';
const rootReducer = combineReducers({
  themeReducer,
  queryReducer,
  apiReducer,
  userReducer,
});

export default rootReducer;
