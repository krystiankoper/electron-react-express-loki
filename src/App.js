import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Layout from './components/UI/Layout';
import asyncComponent from './hocs/asyncComponent';

import Users from './containers/User/List';

const asyncUserForm = asyncComponent(() => import('./containers/User/Form'));

const App = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path="/create" component={asyncUserForm} />
        <Route path="/edit/:id" component={asyncUserForm} />
        <Route exact path="/" component={Users} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default App;
