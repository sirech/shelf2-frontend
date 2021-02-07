import React from 'react'
import { screen } from '@testing-library/react'

import Header from './Header'
import { fullRender } from 'test'

describe('components', () => {
  describe('Header', () => {
    it('renders correctly', async () => {
      fullRender(<Header />)

      await screen.findByText('Shelf')
    })
  })
})
