import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import configureStore from './ConfigureStore';
import rootSaga from '../Sagas/';


export default () => {
  const rootReducer = combineReducers({
    loadingBar: loadingBarReducer,
    router: routerReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
