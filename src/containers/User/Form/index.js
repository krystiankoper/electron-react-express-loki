import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getUser,
  newUser,
  createUser,
  updateUser,
} from '../../../actions/users';

import UserForm from '../../../components/User/Form';

class User extends Component {
  componentDidMount() {
    const {
      match: { params: { id } },
      getUser: getUserAction,
      newUser: newUserAction,
    } = this.props;

    if (id) {
      getUserAction(id);
    } else {
      newUserAction();
    }
  }

  checkUserAndFetch = (user) => {
    const { createUser: createUserAction, updateUser: updateUserAction } = this.props;
    return user.id ? updateUserAction(user) : createUserAction(user);
  }

  submit = (user) => {
    this.checkUserAndFetch(user)
      .then(() => this.backToUsersList());
  }

  backToUsersList = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { user } = this.props;
    return (
      <UserForm user={user} submit={this.submit} cancel={this.backToUsersList} />
    );
  }
}

User.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  getUser: PropTypes.func.isRequired,
  newUser: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
  createUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  user: state.userStore.user,
});

const mapDispatchToProps = {
  getUser,
  newUser,
  createUser,
  updateUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
