import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  open: false,
  message: null,
  messageType: null,
});

const { Types, Creators } = createActions({
  open: [ 'message', 'messageType' ],
  close: null,
}, {
  prefix: 'Snackbar/',
});

const open = (state, { message, messageType }) =>
  state.merge({ open: true, message, messageType });

const close = state =>
  state.merge({ open: false, message: null, messageType: null });

export const reducer = createReducer(initialState, {
  [Types.OPEN]: open,
  [Types.CLOSE]: close,
});
export const SnackbarTypes = Types;
export default Creators;
