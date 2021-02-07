import React from 'react'
import { screen } from '@testing-library/react'

import Navigation from './Navigation'
import { fullRender } from 'test'

jest.mock('rest/fetch')

describe('components', () => {
  describe('Navigation', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('renders correctly', async () => {
      fullRender(<Navigation />)

      await screen.findAllByText('2016')
    })
  })
})
