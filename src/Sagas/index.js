import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import { EventsTypes } from '../Redux/Events';
import { ArtistsTypes } from '../Redux/Artists';

import eventsSagas from './Events';
import artistsSagas from './Artists';

export default function * root() {
  yield all([
    takeLatest(EventsTypes.SEARCH, eventsSagas.search),
    takeEvery(ArtistsTypes.GET, artistsSagas.get),
  ]);
}
