import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import createRootReducer from '../reducers';

export default function configureStore() {
  return createStore(
    createRootReducer(),
    applyMiddleware(thunk, logger),
  );
}
