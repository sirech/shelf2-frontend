import { mockStore } from 'test'

import { login, logout } from '../actions'

jest.mock('auth0-js', () => ({
  WebAuth: jest.fn().mockImplementation(() => ({
    parseHash: (callback) => {
      callback(null, { accessToken: 'token', expiresIn: 7200 })
    },
  })),
}))

describe('actions', () => {
  let store

  beforeEach(() => {
    store = mockStore({})
  })

  describe('login', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [{ type: 'login:success' }]

      store.dispatch(login())
      expect(store.getActions()).toEqual(expectedActions)
    })

    it('adds the token to localStorage', () => {
      store.dispatch(login())
      expect(localStorage.getItem('authToken')).toBe('token')
    })
  })

  describe('logout', () => {
    it('should dispatch the correct actions', () => {
      const expectedActions = [{ type: 'logout:success' }]

      store.dispatch(logout())
      expect(store.getActions()).toEqual(expectedActions)
    })

    it('removes the token from localStorage', () => {
      store.dispatch(logout())
      expect(localStorage.getItem('authToken')).toBeNull()
      expect(localStorage.getItem('expiresAt')).toBeNull()
    })
  })
})
