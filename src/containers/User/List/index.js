import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import Aux from '../../../hocs/auxiliary';
import List from '../../../components/User/List';
import { getUsers, deleteUser } from '../../../actions/users';
import { DELETE_USER_CONFIR_TEXT } from '../../../constants/constants';

class Users extends Component {
  componentDidMount() {
    const { getUsers: getUsersAction } = this.props;
    getUsersAction();
  }

  deleteItemHandler = (id) => {
    const { deleteUser: deleteUserAction } = this.props;
    deleteUserAction(id);
  }

  render() {
    const { users, isLoading } = this.props;

    return (
      <Aux>
        {isLoading ?
          <Spin size="large" /> :
          <List
            isLoading={isLoading}
            users={users}
            deleteDialogText={DELETE_USER_CONFIR_TEXT}
            deleteItem={id => this.deleteItemHandler(id)}
          />
        }
      </Aux>
    );
  }
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  users: state.userStore.users,
  isLoading: state.userStore.isLoading,
});

const mapDispatchToProps = {
  getUsers,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
