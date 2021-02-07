import React from 'react'
import { screen } from '@testing-library/react'

import CreateButton from './CreateButton'
import { fullRender } from 'test'

describe('components', () => {
  describe('CreateButton', () => {
    it('renders correctly', async () => {
      fullRender(<CreateButton />)

      await screen.findByText('Add Book')
    })
  })
})
