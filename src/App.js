import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import asyncComponent from './hocs/asyncComponent';
import Aux from './hocs/auxiliary';
import Layout from './components/UI/Layout';
import Users from './containers/User/List';

const history = createMemoryHistory('begin-path');

const asyncUserForm = asyncComponent(() => import('./containers/User/Form'));

const App = () => (
  <Layout>
    <Router history={history}>
      <Aux>
        <Route exact path="/" component={Users} />
        <Route path="/create" component={asyncUserForm} />
        <Route path="/edit/:id" component={asyncUserForm} />
      </Aux>
    </Router>
  </Layout>
);

export default App;
