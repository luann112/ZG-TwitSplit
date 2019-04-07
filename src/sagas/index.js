import { all } from 'redux-saga/effects';
import chatBoxSaga from './chatBox';

function * rootSaga() {
  yield all([
    chatBoxSaga(),
  ]);
}

export default rootSaga;