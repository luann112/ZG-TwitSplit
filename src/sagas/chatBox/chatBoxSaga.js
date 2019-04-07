import { takeEvery, call, put, select } from 'redux-saga/effects';
import {
  SEND_MESSAGE
} from 'src/reducers/chatBox';
import { getUserId } from 'src/reducers/auth';
import { splitMessage } from 'lib/utils';


function* sendMessage({ connectionId, message }) {
 try {
   const userId = yield select(getUserId);
   if (message.length < 51) {

   } else {
    const chunks = yield call(splitMessage, message);
    
   }
 } catch (error) {
   
 }
}

export default function* chatBoxSaga() {
  yield takeEvery(SEND_MESSAGE, sendMessage);
}