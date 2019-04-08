import { eventChannel } from 'redux-saga';
import { call, take, put, select, takeEvery } from 'redux-saga/effects';
import io from 'socket.io-client';
import { getUserId, INIT_USER } from 'src/reducers/auth';
import { SOCKET_TYPES } from 'lib/enums';
import { NEW_MESSAGE } from 'src/reducers/chatBox';

const socket = io();

export const emitMessage = (type, payload) => {
  socket.emit(type, payload);
}


const initializeSocket = (userId) => eventChannel((emitter) => {

  socket.on(`${SOCKET_TYPES.NEW_MESSAGE}_broadcast`, (data) => {
    console.log('data.from !== userId - ', data.from, userId)
    if (data.from !== userId) {
      console.log(`${SOCKET_TYPES.NEW_MESSAGE}_broadcast`)
      const { from, to, message } = data;
      const payload = {
        connection: to, // broadcast channel
        message,
        owner: from,
      }
      return emitter({ type: NEW_MESSAGE, payload });     
    }
    console.log(`${SOCKET_TYPES.NEW_MESSAGE}__broadcast`, data)    
  })
  socket.on(`${SOCKET_TYPES.NEW_MESSAGE}_${userId}`, (data) => {
    console.log(`${SOCKET_TYPES.NEW_MESSAGE}_${userId}`, data) 
    const { from, to, message } = data;  
    const payload = {
      connection: from,
      message,
      owner: from,
    } 
    return emitter({ type: NEW_MESSAGE, payload });     
  })
  
  return () => {
    console.log('Socket off');
  };
});

function* socketHandler() {
  try {
    const userId = yield select(getUserId);
    console.log('userId - ', userId);
    const channel = yield call(initializeSocket, userId);    
    while (true) {
      const action = yield take(channel);
      yield put(action);
    }
  } catch (error) {
    
  }
}


export default function* socketSaga() {
  yield takeEvery(INIT_USER, socketHandler);
}