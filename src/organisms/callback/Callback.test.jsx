import React from 'react'
import { fullRender } from 'test'
import state from 'state/__fixtures__'

import Callback from './Callback'

describe('components', () => {
  describe('Callback', () => {
    it('does not blow up', () => {
      const currentState = state()
      currentState.login.authenticated = false
      const { component } = fullRender(<Callback />, currentState, '/callback')
      expect(component.toJSON()).toMatchSnapshot()
    })

    xit('renders a redirect if authenticated', () => {
      const currentState = state()
      currentState.login.authenticated = true
      const { component } = fullRender(<Callback />, currentState, '/callback')
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
