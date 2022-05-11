import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import bookReducer from './redux/books/books';
import statusReducer from './redux/categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: statusReducer,
});

const middleware = applyMiddleware(thunk, logger);
const store = configureStore({ reducer: rootReducer }, middleware);

export default store;
