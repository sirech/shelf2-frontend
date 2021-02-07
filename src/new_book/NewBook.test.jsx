import React from 'react'
import { screen } from '@testing-library/react'

import NewBook from './NewBook'
import { fullRender } from 'test'

describe('components', () => {
  describe('NewBook', () => {
    it('renders correctly', async () => {
      fullRender(<NewBook />)

      await screen.findByText('Create')
    })
  })
})
