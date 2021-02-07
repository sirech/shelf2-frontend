import React from 'react'

import Star from './Star'
import { fullRender } from 'test'

describe('components', () => {
  describe('Star', () => {
    it('renders a full star correctly', () => {
      fullRender(<Star isFull />)
    })

    it('renders a half star correctly', () => {
      fullRender(<Star isFull={false} />)
    })
  })
})
