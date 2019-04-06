import { combineReducers } from 'redux';
import chatBoxReducer from './chatBox';
import usersBoxReducer from './usersBox';

const rootReducer = combineReducers({
  chatBox: chatBoxReducer,
  usersBox: usersBoxReducer,
});

export default rootReducer;