import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Popconfirm } from 'antd';
import styled from 'styled-components';

import Aux from '../../../hocs/auxiliary';
import UserLink from '../Link';

const userList = (props) => {
  const {
    isLoading, users, className, deleteItem, deleteDialogText,
  } = props;

  return (
    <Aux>
      <UserLink>
        <Button type="primary" icon="plus">
          Add User
        </Button>
      </UserLink>
      <List
        className={className}
        loading={isLoading}
        itemLayout="horizontal"
        dataSource={users}
        renderItem={user => (
          <List.Item actions={[
            (
              <UserLink user={user}>
                <Button type="primary">
                  Edit
                </Button>
              </UserLink>
            ),
            (
              <Popconfirm placement="left" title={deleteDialogText} onConfirm={() => deleteItem(user.id)} okText="Yes" cancelText="No">
                <Button>Delete</Button>
              </Popconfirm>
            ),
          ]}
          >
            <List.Item.Meta
              title={
                <UserLink user={user}>
                  <div>{user.firstName} {user.lastName}</div>
                </UserLink>
              }
              description={user.email}
            />
          </List.Item>
        )}
      />
    </Aux>
  );
};

userList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  deleteDialogText: PropTypes.string.isRequired,
};

export default styled(userList)`
  text-align: left;
`;
