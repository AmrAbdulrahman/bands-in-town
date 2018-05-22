import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import configureStore from './ConfigureStore';
import rootSaga from 'Sagas';

import { reducer as eventsReducer } from './Events';
import { reducer as artistsReducer } from './Artists';
import { reducer as snackbarReducer } from './Snackbar';

export default () => {
  const rootReducer = combineReducers({
    loadingBar: loadingBarReducer,
    snackbar: snackbarReducer,
    router: routerReducer,
    events: eventsReducer,
    artists: artistsReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
