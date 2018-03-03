import React from 'react'

import { fullRender } from 'test'
import FullStatusChecker, { LoginStatusChecker } from './LoginStatusChecker'

describe('components', () => {
  describe('LoginStatusChecker', () => {
    let loginSuccess

    beforeEach(() => {
      loginSuccess = jest.fn()
      global.localStorage.getItem = jest.fn()
    })

    it('calls loginSuccess if the token is there', () => {
      global.localStorage = {
        getItem: (_) => 'token'
      }

      fullRender(<LoginStatusChecker loginSuccess={loginSuccess} />)
      expect(loginSuccess.mock.calls.length).toBe(1)
    })

    it('does not call loginSuccess if there is no token', () => {
      fullRender(<LoginStatusChecker loginSuccess={loginSuccess} />)
      expect(loginSuccess.mock.calls.length).toBe(0)
    })
  })

  describe('FullStatusChecker', () => {
    it('does not blow up', () => {
      const { component } = fullRender(<FullStatusChecker />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
