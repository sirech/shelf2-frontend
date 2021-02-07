import React from 'react'
import { screen } from '@testing-library/react'

import BooksArea from './BooksArea'
import { fullRender } from 'test'

jest.mock('rest/fetch')

describe('components', () => {
  describe('BooksArea', () => {
    it('renders correctly', async () => {
      fullRender(<BooksArea />, { route: '/books/2016' })

      await screen.findByText('Add Book')
      await screen.findByText('Time To Murder And Create')
    })
  })
})
