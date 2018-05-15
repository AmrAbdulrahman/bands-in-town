import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Reactotron from 'reactotron-react-js';
import { createLogger } from 'redux-logger';

export const history = createHistory();

// creates the store
export default (rootReducer, rootSaga) => {
  const middlewares = [];
  const enhancers = [];

  const logger = createLogger({
    diff: true,
    diffPredicate: true,
    collapsed: true,
    duration: true
  });

  const sagaMonitor = Reactotron.createSagaMonitor();
  // const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  // middlewares.push(sagaMiddleware);
  middlewares.push(routerMiddleware(history));
  middlewares.push(logger);

  enhancers.push(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, compose(...enhancers));

  // start root saga
  // sagaMiddleware.run(rootSaga);

  return store;
};
