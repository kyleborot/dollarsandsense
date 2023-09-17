// store.js

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // Your root reducer
import thunk from 'redux-thunk'; // If using thunk middleware

const store = createStore(rootReducer, applyMiddleware(thunk)); // Create your Redux store

export default store;
