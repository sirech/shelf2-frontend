import React from 'react'
import { screen } from '@testing-library/react'

import Book from './Book'
import { fullRender } from 'test'

describe('components', () => {
  describe('Book', () => {
    it('renders correctly', async () => {
      fullRender(
        <Book
          id={1}
          title="Catch-22"
          description="Desc"
          category="software"
          year={2020}
          stars={3}
        />
      )

      await screen.findByText('Catch-22')
    })
  })
})
