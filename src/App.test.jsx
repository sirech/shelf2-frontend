import React from 'react'
import { screen } from '@testing-library/react'
import { vi } from 'vitest'

import App from './App'
import { fullRenderWithoutRouter } from 'test'

vi.mock('rest/fetch')

describe('components', () => {
  describe('App', () => {
    it('renders correctly', async () => {
      fullRenderWithoutRouter(<App />)
      await screen.findByText('Time To Murder And Create')
    })
  })
})
