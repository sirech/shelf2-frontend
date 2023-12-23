import React from 'react'

import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createMemoryHistory, History } from 'history'
import { render } from '@testing-library/react'
import store from 'state'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fullRender = (
  children: React.ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: { route?: string; history?: History } = {}
) => {
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
