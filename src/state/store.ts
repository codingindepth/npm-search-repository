// import { applyMiddleware} from 'redux';
// import {legacy_createStore as createStore} from 'redux'
// import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

//Previous versions
//export const store = createStore(reducers, {}, applyMiddleware(thunk));

export const store = configureStore({ reducer: reducers })