import { reducers, constants, actions, initialState } from  '../../../src/js/redux/modules/app'
import { getStore } from '../../../__fixtures__/store'

const fixture = {
  title: 'fake-title',
  description: 'fake-description',
  source: 'fake-source',
}

describe('redux.modules.app', () => {
  let store = null;

  beforeEach(() => {
    store = getStore({
      app: initialState()
    });
  });

  afterEach(() => {
    store = null;
  })

  it('should return correct state when running updateApp', () => {
    const type = constants.UPDATE_APP
    const state = store.getState().app

    const result = reducers[type](state, { payload: fixture })

    expect(result.get('source')).toEqual(fixture.source)
    expect(result.get('title')).toEqual(fixture.title)
  })
})
