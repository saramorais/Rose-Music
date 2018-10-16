import { put, fork, takeLatest } from 'redux-saga/effects';
import { constants as appConstants, actions as appActions } from '../modules/app';

import type { appType } from '../../common/types/app'

export function* fetchAppData() {
  // pretend there is an api call
  const result = {
    title: 'Everything is Awesome',
    description: __CONFIG__.description,
    source: 'This message is coming from Redux',
  };

  yield put(appActions.updateApp(result));
}


function* watchGetApp() {
  yield takeLatest(appConstants.GET_APP, fetchAppData);
}

export const appSaga = [
  fork(watchGetApp),
];