import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Form from './index';

const mockStore = configureStore();

describe('<Users />', () => {
  it('render', async () => {
    const div = document.createElement('div');
    const getUser = await Promise.resolve();
    const defaultUser = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
    const props = {
      match: {
        params: {
          id: undefined,
        },
      },
      history: {

      },
    };
    ReactDOM.render(
      <Provider store={mockStore({ userStore: { user: defaultUser } })}>
        <Form getUser={getUser} {...props} />
      </Provider>,
      div,
    );
  });
});
