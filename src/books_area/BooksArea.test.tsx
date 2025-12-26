import React from 'react'
import { screen } from '@testing-library/react'

import { Route, Routes } from 'react-router-dom'
import BooksArea from './BooksArea'
import { fullRender } from 'test'

vi.mock('rest/fetch')

describe('components', () => {
  describe('BooksArea', () => {
    it('renders correctly', async () => {
      fullRender(
        <Routes>
          <Route path="/books/:year" element={<BooksArea />} />
        </Routes>,
        { route: '/books/2016' }
      )

      await screen.findByText('Add Book')
      await screen.findByText('Time To Murder And Create')
    })
  })
})
