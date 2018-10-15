import { put } from 'redux-saga/effects'
import { fetchAppData } from '../../../src/js/redux/sagas/appSaga'
import { actions as appActions } from '../../../src/js/redux/modules/app'

describe('redux.sagas.appSaga', () => {
  describe('fetchAppData', () => {

    global.__CONFIG__ = {
      description: 'fake description'
    }

    const fixture = {
        title: 'Everything is Awesome',
        description: __CONFIG__.description,
        source: 'This message is coming from Redux',
      };

    it('should call appActions.updateApp with correct data', () => {
      const generator = fetchAppData()

      let next = generator.next()

      expect(next.value).toEqual(put(appActions.updateApp(fixture)))
    })
  })
})
