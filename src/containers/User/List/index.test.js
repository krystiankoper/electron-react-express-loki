import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Users from './index';

const mockStore = configureStore();

describe('<Users />', () => {
  it('render', async () => {
    const div = document.createElement('div');
    const getUsers = await Promise.resolve();
    ReactDOM.render(
      <Provider store={mockStore({ userStore: { users: [], isLoading: true } })}>
        <Users getUsers={getUsers} />
      </Provider>,
      div,
    );
  });
});
