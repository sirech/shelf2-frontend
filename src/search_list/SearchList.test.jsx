import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { screen } from '@testing-library/react'

import SearchList from './SearchList'
import { fullRender } from 'test'

jest.mock('rest/fetch')
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('lodash.debounce', () => (f) => f)

describe('components', () => {
  describe('SearchList', () => {
    it('renders correctly', async () => {
      fullRender(
        <Routes>
          <Route path="/books/search/:keyword" element={<SearchList />} />
        </Routes>,
        { route: '/books/search/no' }
      )

      await screen.findByText('Fear and Trembling')
    })
  })
})
