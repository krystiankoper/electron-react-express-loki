import React from 'react';
import { Route, Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import asyncComponent from './hocs/asyncComponent';
import Aux from './hocs/aux';
import Layout from './components/UI/Layout';
import Users from './containers/User/List';

const asyncUserForm = asyncComponent(() => import('./containers/User/Form'));

const App = ({ history }) => (
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

App.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default App;
