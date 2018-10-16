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
  it('should render', () => {
  })

})
