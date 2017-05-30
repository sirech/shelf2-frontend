import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import mockStore from './mock_store'

const fullRender = (jsx, state = {}) => {
  const store = mockStore(state)
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        {jsx}
      </MemoryRouter>
    </Provider>
  )

  return { store, component }
}
export default fullRender
