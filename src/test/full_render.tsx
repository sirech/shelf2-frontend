import React from 'react'

import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import store from 'state'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fullRender = (
  children: React.ReactNode,
  { route = '/' }: { route?: string } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </Provider>
    ),
    store,
  }
}

export const fullRenderWithoutRouter = (children: React.ReactNode) => {
  return {
    ...render(<Provider store={store}>{children}</Provider>),
    store,
  }
}
export default fullRender
