import {
  FETCH_USERS_SUCCESS,
  NEW_USER,
  FETCH_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
} from '../constants/actionTypes';

export const userInitialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

const initialState = {
  users: [],
  user: userInitialState,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS: {
      const { payload: { data } } = action;
      return {
        ...state,
        users: [...data],
      };
    }
    case NEW_USER: {
      return {
        ...state,
        user: userInitialState,
      };
    }
    case FETCH_USER_SUCCESS:
    case CREATE_USER_SUCCESS:
    case UPDATE_USER_SUCCESS: {
      const { payload: { data: user } } = action;
      return {
        ...state,
        user,
      };
    }
    case DELETE_USER_SUCCESS: {
      const { payload: { data: user } } = action;
      return {
        ...state,
        users: state.users.filter(item => item.id !== user.id),
      };
    }
    default:
      return state;
  }
}
