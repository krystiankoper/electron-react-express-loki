import {
  FETCH_USER,
  FETCH_USERS,
  NEW_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../constants/actionTypes';
import {
  getUser,
  getUsers,
  newUser,
  createUser,
  updateUser,
  deleteUser,
} from './users';
import { API_USER_PATH } from '../constants/constants';

describe('getUser', () => {
  const getAction = (param = undefined) => ({
    type: FETCH_USER,
    payload: {
      request: {
        method: 'GET',
        url: `${API_USER_PATH}/${param}`,
      },
    },
  });

  it('returns correct action without id', () => {
    expect(getUser()).toEqual(getAction());
  });

  it('returns correct action with id', () => {
    expect(getUser(1)).toEqual(getAction(1));
  });
});

describe('getUsers', () => {
  it('returns correct action', () => {
    expect(getUsers()).toEqual({
      type: FETCH_USERS,
      payload: {
        request: {
          method: 'GET',
          url: API_USER_PATH,
        },
      },
    });
  });
});

describe('newUser', () => {
  it('returns correct action', () => {
    expect(newUser()).toEqual({
      type: NEW_USER,
    });
  });
});

describe('createUser', () => {
  const getAction = (data = undefined) => ({
    type: CREATE_USER,
    payload: {
      request: {
        method: 'POST',
        url: API_USER_PATH,
        data,
      },
    },
  });
  const expectedData = {
    id: 1,
    firstName: 'test',
  };

  it('returns correct action without data', () => {
    expect(createUser()).toEqual(getAction());
  });

  it('returns correct action with data', () => {
    expect(createUser(expectedData)).toEqual(getAction(expectedData));
  });
});

describe('updateUser', () => {
  it('returns correct action', () => {
    expect(updateUser({ id: undefined })).toEqual({
      type: UPDATE_USER,
      payload: {
        request: {
          method: 'PUT',
          url: `${API_USER_PATH}/undefined`,
          data: {
            id: undefined,
          },
        },
      },
    });
  });
});

describe('deleteUser', () => {
  it('returns correct action', () => {
    expect(deleteUser()).toEqual({
      type: DELETE_USER,
      payload: {
        request: {
          method: 'DELETE',
          url: `${API_USER_PATH}/undefined`,
        },
      },
    });
  });
});
