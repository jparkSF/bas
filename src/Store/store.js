import { createStore, applyMiddleware } from 'redux';
import thunk from '../Thunk/thunk';

import rootReducer from '../Reducers/rootReducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk) //add logger if you want to see logs in console
  )
);

export default configureStore;