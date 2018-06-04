import { combineReducers } from 'redux';
import homeReducer from './home/duck/index';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
