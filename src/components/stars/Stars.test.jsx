import React from 'react'

import Stars from './Stars'
import { fullRender } from 'test'

describe('components', () => {
  describe('Stars', () => {
    it('renders correctly', () => {
      fullRender(<Stars count={3} />)
    })
  })
})
