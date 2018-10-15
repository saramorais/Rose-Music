import React from 'react'
import { fromJS } from 'immutable'
import Enzyme, { shallow } from 'enzyme'

import { App } from  '../../../src/js/common/components/App'

const fixture = {
  app: {
    result: fromJS({
      testing: 'data',
    }),
  },
};

describe('AppView', () => {
  it('should render a blank div without data', () => {
    const el = shallow(<App />)

    expect(el.length).toEqual(1)
    expect(el.find('.appOutput').length).toEqual(0)
  })

  it('should render with correct data', () => {
    const el = shallow(
      <App {...fixture} />
    )

    expect(el.length).toEqual(1)
    expect(el.find('.appOutput').length).toEqual(1)
  })
})
