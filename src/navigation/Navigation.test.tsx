import React from 'react'
import { screen } from '@testing-library/react'

import Navigation from './Navigation'
import { fullRender } from 'test'

vi.mock('rest/fetch')

describe('components', () => {
  describe('Navigation', () => {
    beforeEach(() => {
      vi.clearAllMocks()
    })

    it('renders correctly', async () => {
      fullRender(<Navigation />)

      await screen.findAllByText('2016')
    })
  })
})
