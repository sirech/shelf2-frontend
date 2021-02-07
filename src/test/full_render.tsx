import React from 'react'

import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createMemoryHistory, History } from 'history'
import { render } from '@testing-library/react'

import mockStore from './mock_store'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fullRender = (
  children: React.ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    state = {},
  }: { route?: string; history?: History; state?: Record<string, unknown> } = {}
) => {
  const store = mockStore(state)
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    ),
    history,
    store,
  }
}
export default fullRender
