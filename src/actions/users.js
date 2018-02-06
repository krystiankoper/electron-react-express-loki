import {
  FETCH_USERS,
  FETCH_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  NEW_USER,
} from '../constants/actionTypes';

import { API_USER_PATH } from '../constants/constants';

export const getUsers = () => ({
  type: FETCH_USERS,
  payload: {
    request: {
      method: 'GET',
      url: API_USER_PATH,
    },
  },
});

export const getUser = id => ({
  type: FETCH_USER,
  payload: {
    request: {
      method: 'GET',
      url: `${API_USER_PATH}/${id}`,
    },
  },
});

export const newUser = () => ({
  type: NEW_USER,
});

export const createUser = data => ({
  type: CREATE_USER,
  payload: {
    request: {
      method: 'POST',
      url: API_USER_PATH,
      data,
    },
  },
});

export const updateUser = data => ({
  type: UPDATE_USER,
  payload: {
    request: {
      method: 'PUT',
      url: `${API_USER_PATH}/${data.id}`,
      data,
    },
  },
});

export const deleteUser = id => ({
  type: DELETE_USER,
  payload: {
    request: {
      method: 'DELETE',
      url: `${API_USER_PATH}/${id}`,
    },
  },
});
