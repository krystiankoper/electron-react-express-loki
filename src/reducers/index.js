import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import UsersReducer from './users';

const rootReducer = combineReducers({
  userStore: UsersReducer,
  form: FormReducer,
});

export default rootReducer;
