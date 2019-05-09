import React from 'react'
import { fullRender } from 'test'
import state from 'state/__fixtures__'

import Login from './Login'

describe('components', () => {
  describe('Login', () => {
    xit('does not blow up', () => {
      const currentState = state()
      currentState.login.authenticated = false
      const { component } = fullRender(<Login />, currentState, '/callback')
      expect(component.toJSON()).toMatchSnapshot()
    })

    xit('renders a redirect if authenticated', () => {
      const currentState = state()
      currentState.login.authenticated = true
      const { component } = fullRender(<Login />, currentState, '/callback')
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
