import { put, call, select } from 'redux-saga/effects';
import Api from 'Services/Api';
import EventsActions from '../Redux/Events';

// keep it here as it's not generic
// move it later to /Utils if it's gonna be reused
const encode = name => name
  .replace(/\//ig, '%252F')
  .replace(/\?/ig, '%253F')
  .replace(/\*/ig, '%252A')
  .replace(/"/ig, '%27C');


function * search() {
  const filter = yield select(state => state.events.filter);
  const { name, dateFrom, dateTo } = filter;

  const res = yield call(Api.getArtistEvents, encode(name), {
    date: `${dateFrom},${dateTo}`
  });

  if (res.ok) {
    yield put(EventsActions.searchSuccess(name, res.data));
  } else {
    yield put(EventsActions.searchError(res.error));
  }
}

export default {
  search,
};
