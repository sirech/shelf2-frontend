import React from 'react'
import { screen } from '@testing-library/react'

import NavigationItem from './NavigationItem'
import { fullRender } from 'test'

describe('components', () => {
  describe('NavigationItem', () => {
    it('renders correctly', async () => {
      fullRender(<NavigationItem year="2016" count="2" />)

      await screen.findAllByText('2016')
    })
  })
})
