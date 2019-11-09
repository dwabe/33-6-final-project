import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import recordsReducer from './recordsReducer'; +

const reducers = combineReducers({
  usersReducer: usersReducer,
  recordsReducer: recordsReducer
});

export default reducers;