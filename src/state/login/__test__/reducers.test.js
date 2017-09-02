import { status } from '../reducers'

import { LOGIN_SUCCESS } from '../constants'

describe('login reducer', () => {
  it('returns the initial state', () => {
    expect(status(undefined, {})).toEqual({ authenticated: false })
  })

  it('handles LOGIN_SUCCESS', () => {
    expect(status(undefined, {
      type: LOGIN_SUCCESS
    })).toEqual({ authenticated: true })
  })
})
