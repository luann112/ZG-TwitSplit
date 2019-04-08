import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'src/reducers';
import rootSaga from 'src/sagas';

const initialState = {};
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const initializeStore = initialState => {
  let store;
  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = composeWithDevTools({});
    const devToolMiddleware = composeEnhancers(applyMiddleware(sagaMiddleware, logger));
    
    store = createStore(
      rootReducer,
      initialState,
      devToolMiddleware,
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleware)
    )
  }
  sagaMiddleware.run(rootSaga);
  return store;
}

export default initializeStore;