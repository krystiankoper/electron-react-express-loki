import { combineReducers } from 'redux';
import UsersReducer from './users';

const rootReducer = combineReducers({
  userStore: UsersReducer,
});

export default rootReducer;
