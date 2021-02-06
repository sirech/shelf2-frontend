import React from 'react'
import { Route } from 'react-router-dom'

import Login from './Login'
import { fullRender } from 'test'
import state from 'state/__fixtures__'

import { actions } from 'state/login'
jest.mock('state/login/actions', () => ({
  startLogin: jest.fn((dispatch) => jest.fn()),
}))

describe('components', () => {
  describe('Login', () => {
    // TODO: action needs tick
    it.skip('does not blow up', () => {
      const currentState = state()
      currentState.login.authenticated = false
      fullRender(
        <Route path="/login" component={Login} />,
        currentState,
        '/login'
      )
      expect(actions.startLogin.mock.calls.length).toBe(1)
    })

    it('renders a redirect if authenticated', () => {
      const currentState = state()
      currentState.login.authenticated = true
      const { component } = fullRender(
        <Route path="/login" component={Login} />,
        currentState,
        '/login'
      )
      expect(component.toJSON()).toBeNull()
    })
  })
})