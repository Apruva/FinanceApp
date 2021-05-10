import { combineReducers } from 'redux';
import queryReducer from './queryReducer';
import themeReducer from './themeReducer';
import tokenReducer from './tokenReducer';
const rootReducer = combineReducers({
  themeReducer,
  queryReducer,
  tokenReducer,
});

export default rootReducer;
