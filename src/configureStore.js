import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { missionsReducer } from './missions/missions';

const store = configureStore({ reducer: missionsReducer }, applyMiddleware(thunk));

export default store;
