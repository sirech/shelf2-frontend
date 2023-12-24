import status, { loginSucceeded, loginFailed, logoutSucceeded } from '../slice'

describe('login reducer', () => {
  it('returns the initial state', () => {
    expect(status(undefined, {})).toEqual({
      authenticated: false,
      failed: false,
    })
  })

  describe('LOGIN_SUCCESS', () => {
    it('sets the authenticated flag', () => {
      expect(status(undefined, loginSucceeded())).toEqual({
        authenticated: true,
        failed: false,
      })
    })

    it('resets the failed flag', () => {
      expect(status({ failed: true }, loginSucceeded())).toEqual({
        authenticated: true,
        failed: false,
      })
    })
  })

  it('handles LOGIN_FAILURE', () => {
    expect(status(undefined, loginFailed())).toEqual({
      authenticated: false,
      failed: true,
    })
  })

  it('handles LOGOUT_SUCCESS', () => {
    expect(status({ authenticated: true }, logoutSucceeded())).toEqual({
      authenticated: false,
    })
  })
})
