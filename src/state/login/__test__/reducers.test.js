import { status } from '../reducers'

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../constants'

describe('login reducer', () => {
  it('returns the initial state', () => {
    expect(status(undefined, {})).toEqual({
      authenticated: false,
      failed: false,
    })
  })

  describe('LOGIN_SUCCESS', () => {
    it('sets the authenticated flag', () => {
      expect(
        status(undefined, {
          type: LOGIN_SUCCESS,
        })
      ).toEqual({ authenticated: true, failed: false })
    })

    it('resets the failed flag', () => {
      expect(
        status(
          { failed: true },
          {
            type: LOGIN_SUCCESS,
          }
        )
      ).toEqual({ authenticated: true, failed: false })
    })
  })

  it('handles LOGIN_FAILURE', () => {
    expect(
      status(undefined, {
        type: LOGIN_FAILURE,
      })
    ).toEqual({ authenticated: false, failed: true })
  })

  it('handles LOGOUT_SUCCESS', () => {
    expect(
      status(
        { authenticated: true },
        {
          type: LOGOUT_SUCCESS,
        }
      )
    ).toEqual({ authenticated: false })
  })
})
