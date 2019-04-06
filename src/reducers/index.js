import { combineReducers } from 'redux';
import authReducer from './auth';
import chatBoxReducer from './chatBox';
import usersBoxReducer from './usersBox';

const rootReducer = combineReducers({
  auth: authReducer,
  chatBox: chatBoxReducer,
  usersBox: usersBoxReducer,
});

export default rootReducer;