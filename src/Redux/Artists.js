import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  byName: {},
});

const { Types, Creators } = createActions({
  get: [ 'name' ],
  setLoading: [ 'name' ],
  getSuccess: [ 'name', 'artist' ], // we don't fetch 'name' from inside 'artist' as the api sometimes guesses
}, {
  prefix: 'Artists/',
});

const setLoading = (state, { name }) =>
  state.merge({
    byName: {
      ...state.byName,
      [name.toLowerCase()]: {
        loading: true,
      },
    },
  });

const getSuccess = (state, { name, artist }) =>
  state.merge({
    byName: {
      ...state.byName,
      [name.toLowerCase()]: artist,
    },
  });

export const reducer = createReducer(initialState, {
  [Types.SET_LOADING]: setLoading,
  [Types.GET_SUCCESS]: getSuccess,
});
export const ArtistsTypes = Types;
export default Creators;
