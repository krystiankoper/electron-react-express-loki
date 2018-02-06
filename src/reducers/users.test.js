import usersReducer, { initialState, userInitialState } from './users';

import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  NEW_USER,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
} from '../constants/actionTypes';

describe('users reducer', () => {
  const defaultStateTestByType = (type) => {
    const state = usersReducer(undefined, {
      type,
    });
    expect(state).toEqual(initialState);
  };

  it('returns default state', () => {
    expect(usersReducer(undefined, {})).toEqual(initialState);
  });

  it('handles FETCH_USERS action', () => {
    const state = usersReducer(undefined, {
      type: FETCH_USERS,
    });
    expect(state).toEqual({
      users: [],
      user: userInitialState,
      isLoading: true,
    });
  });

  it('handles FETCH_USER action', () => {
    defaultStateTestByType(FETCH_USER);
  });

  it('handles NEW_USER action', () => {
    defaultStateTestByType(NEW_USER);
  });

  it('handles DELETE_USER action', () => {
    defaultStateTestByType(DELETE_USER);
  });

  it('handles CREATE_USER action', () => {
    defaultStateTestByType(CREATE_USER);
  });

  it('handles UPDATE_USER action', () => {
    defaultStateTestByType(UPDATE_USER);
  });

  it('handles FETCH_USERS_SUCESS action', () => {
    const testUsers = [
      { id: 1 },
      { id: 2 },
    ];
    const expectedResult = {
      user: userInitialState,
      users: testUsers,
      isLoading: false,
    };
    expect(usersReducer(undefined, {
      type: FETCH_USERS_SUCCESS,
      payload: {
        data: testUsers,
      },
    })).toEqual(expectedResult);
  });

  it('handles FETCH_USER_SUCCESS action', () => {
    const testUser = {
      id: 1,
      firstName: 'test',
    };
    const expectedResult = {
      user: testUser,
      users: [],
      isLoading: false,
    };
    const state = usersReducer(undefined, {
      type: FETCH_USER_SUCCESS,
      payload: {
        data: testUser,
      },
    });
    expect(state).toEqual(expectedResult);
  });

  it('handles CREATE_USER_SUCCESS action', () => {
    const testUser = {
      firstName: 'test',
    };
    const expectedResult = {
      user: testUser,
      users: [],
      isLoading: false,
    };
    const state = usersReducer(undefined, {
      type: CREATE_USER_SUCCESS,
      payload: {
        data: testUser,
      },
    });
    expect(state).toEqual(expectedResult);
  });

  it('handles UPDATE_USER_SUCCESS action', () => {
    const testUser = {
      id: 1,
      firstName: 'test',
    };
    const expectedResult = {
      user: testUser,
      users: [],
      isLoading: false,
    };
    const state = usersReducer(undefined, {
      type: UPDATE_USER_SUCCESS,
      payload: {
        data: testUser,
      },
    });
    expect(state).toEqual(expectedResult);
  });

  it('handles DELETE_USER_SUCCESS action', () => {
    const initState = {
      users: [
        { id: 1 },
      ],
    };
    const state = usersReducer(initState, {
      type: DELETE_USER_SUCCESS,
      payload: {
        data: {
          id: 1,
        },
      },
    });
    expect(state).toEqual({ users: [] });
  });
});

