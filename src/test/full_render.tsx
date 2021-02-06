import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import mockStore from './mock_store'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fullRender = (jsx: React.Component, state = {}, route = '/') => {
  const store = mockStore(state)
  const component = create(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]} initialIndex={0}>
        {jsx}
      </MemoryRouter>
    </Provider>
  )

  return { store, component }
}
export default fullRender
