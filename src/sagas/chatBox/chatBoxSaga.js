import { takeEvery, call, put, select } from 'redux-saga/effects';
import io from 'socket.io-client';
import {
  SEND_MESSAGE,
  SEND_MESSAGE_ERROR,
  SEND_MESSAGE_SUCCESS
} from 'src/reducers/chatBox';
import { getUserId } from 'src/reducers/auth';
import { emitMessage } from 'src/sagas/socket'
import { splitMessage } from 'lib/utils';
import { SOCKET_TYPES } from 'lib/enums';


function* sendMessage({ connectionId, message }) {
 try {
   const userId = yield select(getUserId);
   if (message.length < 51) {
    const payload = { from: userId, to: connectionId, message };
    yield call(emitMessage, SOCKET_TYPES.NEW_MESSAGE, payload);
    yield put({ type: SEND_MESSAGE_SUCCESS, payload: { connection: connectionId, message, owner: userId} })
   } else {
    const chunks = yield call(splitMessage, message);
    for (let i = 0; i < chunks.length; i++) {
      const message = chunks[i].slice(chunks[i].indexOf(' ') + 1);
      const payload = { from: userId, to: connectionId, message };
      yield call(emitMessage, SOCKET_TYPES.NEW_MESSAGE, payload);
      yield put({ type: SEND_MESSAGE_SUCCESS, payload: { connection: connectionId, message, owner: userId} })
    }
   }
 } catch (error) {
   yield put({ type: SEND_MESSAGE_ERROR, error: error.message });
 }
}

export default function* chatBoxSaga() {
  yield takeEvery(SEND_MESSAGE, sendMessage);
}