import React from 'react'
import { screen } from '@testing-library/react'

import Book from './Book'
import { fullRender } from 'test'

describe('components', () => {
  describe('Book', () => {
    it('renders correctly', async () => {
      fullRender(<Book title="Catch-22" stars={3} />)

      await screen.findByText('Catch-22')
    })
  })
})
