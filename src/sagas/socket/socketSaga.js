import { eventChannel } from 'redux-saga';
import { call, take, put, select } from 'redux-saga/effects';
import io from 'socket.io-client';
import { getUserId } from 'src/reducers/auth';
import { SOCKET_TYPES } from 'lib/enums';

const socket = io();

export const emitMessage = (type, payload) => {
  socket.emit(type, payload);
}


const initializeSocket = (userId) => eventChannel((emitter) => {

  socket.on(`${SOCKET_TYPES.NEW_MESSAGE}_${userId}`, (data) => {
    console.log(`${SOCKET_TYPES.NEW_MESSAGE}_${userId}`, data)    
    return emitter({ type: 'TEST'});     
  })
  
  return () => {
    console.log('Socket off');
  };
});


export default function* socketSaga() {
  const userId = yield select(getUserId);  
  const channel = yield call(initializeSocket, userId);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}