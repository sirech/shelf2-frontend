import React from 'react'

import Logout from './Logout'
import { fullRender } from 'test'
import state from 'state/__fixtures__'

describe('components', () => {
  describe('Logout', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<Logout />, state())
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
