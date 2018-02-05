import {
  FETCH_USERS,
  FETCH_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  NEW_USER,
} from '../constants/actionTypes';

import { API_USER_PATH } from '../constants/constants';

export const getUsers = () => dispatch => dispatch({
  type: FETCH_USERS,
  payload: {
    request: {
      method: 'GET',
      url: API_USER_PATH,
    },
  },
});

export const getUser = id => dispatch => dispatch({
  type: FETCH_USER,
  payload: {
    request: {
      method: 'GET',
      url: `${API_USER_PATH}/${id}`,
    },
  },
});

export const newUser = () => dispatch => dispatch({
  type: NEW_USER,
});

export const createUser = data => dispatch => dispatch({
  type: CREATE_USER,
  payload: {
    request: {
      method: 'POST',
      url: `${API_USER_PATH}`,
      data,
    },
  },
});

export const updateUser = data => dispatch => dispatch({
  type: UPDATE_USER,
  payload: {
    request: {
      method: 'PUT',
      url: `${API_USER_PATH}/${data.id}`,
      data,
    },
  },
});

export const deleteUser = id => dispatch => dispatch({
  type: DELETE_USER,
  payload: {
    request: {
      method: 'DELETE',
      url: `${API_USER_PATH}/${id}`,
    },
  },
});
