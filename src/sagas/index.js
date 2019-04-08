import { all } from 'redux-saga/effects';
import chatBoxSaga from './chatBox';
import socketSaga from './socket';

function * rootSaga() {
  yield all([
    chatBoxSaga(),
    socketSaga()
  ]);
}

export default rootSaga;