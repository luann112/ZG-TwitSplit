import { eventChannel } from 'redux-saga';
import { call, take, put } from 'redux-saga/effects';
import io from 'socket.io-client';

const initializeSocket = () => eventChannel((emitter) => {
  const socket = io();
  socket.on('connect', () => {
    socket.emit('hi');
  })
  socket.on('hello', (data) => {
    console.log(' data ', data)
    return emitter({ type: 'TEST'}); 
  })
  
  return () => {
    console.log('Socket off');
  };
});


export default function* socketSaga() {
  const channel = yield call(initializeSocket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}