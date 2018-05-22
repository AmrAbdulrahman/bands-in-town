import apisauce from 'apisauce';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { store } from 'App';
import { envConfig } from 'Services/Env';
import SnackbarActions from '../Redux/Snackbar';

const { baseURL, appId } = envConfig.api;

const BandsInTown = apisauce.create({
  headers: { Accept: 'application/json' },
  timeout: 30000, // ms
  baseURL,
});

// globally dispatch LoadingBar
BandsInTown.addRequestTransform(request => {
  store.dispatch(showLoading());

  // statically inject app_id for all requests
  request.params.app_id = appId;
});

BandsInTown.addResponseTransform(response => {
  store.dispatch(hideLoading());

  // show global error
  if (!response.ok) {
    store.dispatch(SnackbarActions.open('Something went wrong!', 'error'));
  }
});

export default class Api {
  static getArtist = name => BandsInTown.get(`/artists/${name}`);
  static getArtistEvents = (name, query) => BandsInTown.get(`/artists/${name}/events`, query);
};
