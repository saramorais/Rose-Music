import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// import type { appType } from '../../common/types/app'

const GET_APP = 'app/app/GET_APP';
const UPDATE_APP = 'app/app/UPDATE_APP';

export const constants = {
  GET_APP,
  UPDATE_APP,
};

// ------------------------------------
// Actions
// ------------------------------------
export const getAwesomeCode = createAction(GET_APP, () => ({}));
export const updateApp = createAction( (result) => ({ result }) );

export const actions = {
  getAwesomeCode,
  updateApp,
};

export const reducers = {
  [UPDATE_APP]: (state, { payload }) =>
    state.merge({
      ...payload,
    }),
}

export const initialState = () =>
  Map({
    result: '',
  })

export default handleActions(reducers, initialState());
