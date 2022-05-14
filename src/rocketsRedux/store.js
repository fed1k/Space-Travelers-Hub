import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { myReducer } from './fetchData';
import { missionsReducer } from './missions';

const rootReducer = combineReducers({
  rockets: myReducer,
  missions: missionsReducer,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk, logger));

export default store;
