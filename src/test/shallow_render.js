// eslint-disable-next-line no-unused-vars
import React from 'react'
import { shallowWithState } from 'enzyme-redux'

import mockStore from './mock_store'

const shallowRender = (Component, state = {}) => {
  const store = mockStore(state)
  const component = shallowWithState(Component, state)

  return { store, component }
}
export default shallowRender
