import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';

import reducers from './reducers/index';
import API from './api';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    axiosMiddleware(API, {
      returnRejectedPromiseOnError: true,
    }),
  ),
);

export default store;
