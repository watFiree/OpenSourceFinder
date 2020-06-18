/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store =
  typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object'
    ? createStore(rootReducer, compose(applyMiddleware(thunk), devtools))
    : createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
