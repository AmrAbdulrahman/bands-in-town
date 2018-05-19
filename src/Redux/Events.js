import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import moment from 'moment';
import map from 'lodash/map';
import set from 'lodash/set';
import reduce from 'lodash/reduce';

const initialState = Immutable({
  filter: {
    name: '',
    dateFrom: '2015-01-01',
    dateTo: moment().format('YYYY-MM-DD'),
  },
  results: null,
  error: null,
  loading: false,
});

const { Types, Creators } = createActions({
  updateFilter: [ 'updates' ],
  search: null,
  searchSuccess: [ 'name', 'results' ],
  searchError: [ 'error' ],
  openEventLocation: [ 'id' ],
  closeEventLocation: [ 'id' ],
  reset: null,
}, {
  prefix: 'Events/',
});

const updateFilter = (state, { updates }) =>
  state.merge({
    filter: {
      ...state.filter,
      ...updates,
    },
  });

const search = state =>
  state.merge({ loading: true });

const searchSuccess = (state, { name, results }) =>
  state.merge({
    loading: false,
    results: {
      name,
      list: map(results, result => result.id),
      byId: reduce(results, (byId, result) => set(byId, result.id, result), {}),
    },
  });

const searchError = (state, { error }) =>
  state.merge({
    loading: false,
    error,
  });

const openEventLocation = (state, { id }) => setEventLocationOpenState(state, id, true);
const closeEventLocation = (state, { id }) => setEventLocationOpenState(state, id, false);

const setEventLocationOpenState = (state, id, mapIsOpen) =>
  state.merge({
    loading: false,
    results: {
      ...state.results,
      byId: {
        ...state.results.byId,
        [id]: {
          ...state.results.byId[id],
          mapIsOpen,
        }
      }
    },
  });

const reset = () => initialState;

export const reducer = createReducer(initialState, {
  [Types.UPDATE_FILTER]: updateFilter,
  [Types.SEARCH]: search,
  [Types.SEARCH_SUCCESS]: searchSuccess,
  [Types.SEARCH_ERROR]: searchError,
  [Types.OPEN_EVENT_LOCATION]: openEventLocation,
  [Types.CLOSE_EVENT_LOCATION]: closeEventLocation,
  [Types.RESET]: reset,
});
export const EventsTypes = Types;
export default Creators;
