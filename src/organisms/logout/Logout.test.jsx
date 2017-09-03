import React from 'react'

import { fullRender } from '../../test'
import state from '../../state/__fixtures__'

import Logout from './Logout'

describe('components', () => {
  describe('Logout', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<Logout />, state())
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
