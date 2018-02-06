import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import store from './store';
import App from './App';

const history = createMemoryHistory('begin-path');

const app = (
  <Provider store={store}>
    <App history={history} />
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root'),
);
