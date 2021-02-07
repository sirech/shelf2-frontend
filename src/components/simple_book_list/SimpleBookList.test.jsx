import React from 'react'
import { screen } from '@testing-library/react'

import SimpleBookList from './SimpleBookList'
import { fullRender } from 'test'

describe('components', () => {
  describe('SimpleBookList', () => {
    it('renders correctly', async () => {
      fullRender(
        <SimpleBookList books={[{ id: 1, title: 'Catch 22', stars: 3 }]} />
      )

      await screen.findAllByText('Catch 22')
    })
  })
})
