import React from 'react'

import { fullRender } from 'test'
import FullStatusChecker, { LoginStatusChecker } from './LoginStatusChecker'

describe('components', () => {
  describe('LoginStatusChecker', () => {
    let loginSuccess

    beforeEach(() => {
      loginSuccess = jest.fn()
    })

    it('calls loginSuccess if the token is there', () => {
      localStorage.setItem('authToken', 'token')

      fullRender(<LoginStatusChecker loginSuccess={loginSuccess} />)
      expect(loginSuccess).toBeCalled()
    })

    it('does not call loginSuccess if there is no token', () => {
      localStorage.removeItem('authToken')

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
