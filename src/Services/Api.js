import apisauce from 'apisauce';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { envConfig } from './Env';
import { store } from '../App';
import SnackbarActions from '../Redux/Snackbar';

const { baseURL, appId } = envConfig.api;

const BrandsInTown = apisauce.create({
  headers: { Accept: 'application/json' },
  timeout: 30000, // ms
  baseURL,
});

// globally dispatch LoadingBar
BrandsInTown.addRequestTransform(request => {
  store.dispatch(showLoading());

  // statically inject app_id for all requests
  request.params.app_id = appId;
});

BrandsInTown.addResponseTransform(response => {
  store.dispatch(hideLoading());

  // show global error
  if (!response.ok) {
    store.dispatch(SnackbarActions.open('Something went wrong!', 'error'));
  }
});

export default class Api {
  static getArtist = name => BrandsInTown.get(`/artists/${name}`);
  static getArtistEvents = (name, query) => BrandsInTown.get(`/artists/${name}/events`, query);
};
