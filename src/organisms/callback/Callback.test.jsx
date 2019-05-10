import React from 'react'
import { Route } from 'react-router-dom'

import { fullRender } from 'test'
import state from 'state/__fixtures__'

import Callback from './Callback'

import { actions } from 'state/login'
jest.mock('state/login/actions', () => ({
  login: jest.fn(dispatch => jest.fn()),
}))

describe('components', () => {
  describe('Callback', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('logs in if not authenticated', () => {
      const currentState = state()
      currentState.login.authenticated = false
      fullRender(
        <Route path="/callback" component={Callback} />,
        currentState,
        '/callback'
      )
      expect(actions.login.mock.calls.length).toBe(1)
    })

    it('renders a redirect if authenticated', () => {
      const currentState = state()
      currentState.login.authenticated = true
      const { component } = fullRender(
        <Route path="/callback" component={Callback} />,
        currentState,
        '/callback'
      )
      expect(component.toJSON()).toBeNull()
    })
  })
})
