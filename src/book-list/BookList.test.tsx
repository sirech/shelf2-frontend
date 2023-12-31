import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { screen } from '@testing-library/react'

import BookList from './BookList'
import { fullRender } from 'test'

jest.mock('rest/fetch')

describe('components', () => {
  describe('BookList', () => {
    it('renders correctly', async () => {
      fullRender(
        <Routes>
          <Route path="/books/:year" element={<BookList />} />
        </Routes>,
        {
          route: '/books/2017',
        }
      )

      await screen.findByText('history')
      await screen.findByText('Time To Murder And Create')
    })
  })
})
