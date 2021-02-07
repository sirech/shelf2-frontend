import React from 'react'
import { screen } from '@testing-library/react'

import Category from './Category'
import { fullRender } from 'test'

describe('components', () => {
  describe('Category', () => {
    it('renders correctly', async () => {
      fullRender(
        <Category
          name="Software"
          books={[{ id: 1, title: 'Catch 22', stars: 3 }]}
        />
      )

      await screen.findByText('Software')
      await screen.findByText('Catch 22')
    })
  })
})
