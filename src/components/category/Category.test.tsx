import React from 'react'
import { screen } from '@testing-library/react'

import Category from './Category'
import { fullRender } from 'test'

describe('components', () => {
  describe('Category', () => {
    it('renders correctly', async () => {
      fullRender(
        <Category
          name="software"
          books={[
            {
              id: 1,
              title: 'Catch 22',
              description: 'desc',
              category: 'software',
              stars: 3,
              year: 2020,
            },
          ]}
        />
      )

      await screen.findByText('software')
      await screen.findByText('Catch 22')
    })
  })
})
