import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage: storage,
  timeout: 100,
};
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const pReducer = persistReducer(config, rootReducer);

export const store = createStore(
  pReducer,
  applyMiddleware(loggerMiddleware, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
