import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import myReducer from './rockets/fetchData';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  rockets: myReducer,
  missions: missionsReducer,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
