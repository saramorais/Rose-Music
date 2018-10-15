import { createSelector } from 'reselect';

const appDataSelector = state => state.app;

const resultSelector = createSelector(
  appDataSelector,
  payload => payload.get('result')
);

export const appSelector = state => ({
  result: resultSelector(state),
});
