import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { myReducer } from './fetchData';

const store = createStore(myReducer, applyMiddleware(thunk));

export default store;
