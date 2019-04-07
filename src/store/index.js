import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'src/reducers';
import rootSaga from 'src/sagas';
import socketSaga from 'src/sagas/socket';

const initialState = {};
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const socketMiddleware = createSagaMiddleware();

const initializeStore = initialState => {
  let store;
  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = composeWithDevTools({});
    const devToolMiddleware = composeEnhancers(applyMiddleware(sagaMiddleware, socketMiddleware, logger));
    
    store = createStore(
      rootReducer,
      initialState,
      devToolMiddleware,
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleware, socketMiddleware)
    )
  }
  sagaMiddleware.run(rootSaga);
  sagaMiddleware.run(socketSaga);
  return store;
}

export default initializeStore;