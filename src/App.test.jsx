import React from 'react'
import { screen } from '@testing-library/react'

import App from './App'
import { fullRenderWithoutRouter } from 'test'

jest.mock('rest/fetch')

describe('components', () => {
  describe('App', () => {
    it('renders correctly', async () => {
      fullRenderWithoutRouter(<App />)
      await screen.findByText('Time To Murder And Create')
    })
  })
})
