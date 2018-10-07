import { combineReducers } from 'redux'
import navigationReducer from './navigationReducer.js';
import recipeReducer from './recipeReducer.js';

export default combineReducers({
    nav: navigationReducer,
    recipes: recipeReducer
  })