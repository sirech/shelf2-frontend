import { mockStore } from 'test'

import { login, logout } from '../actions'

describe('actions', () => {
  let store

  beforeEach(() => {
    store = mockStore({})
  })

  describe('login', () => {
    const token = 'the-token'

    it('should dispatch the correct actions', () => {
      const expectedActions = [{ type: 'login:success' }]

      store.dispatch(login(token))
      expect(store.getActions()).toEqual(expectedActions)
    })

    it('adds the token to localStorage', () => {
      store.dispatch(login(token))
      expect(localStorage.getItem('authToken')).toBe(token)
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
    })
  })
})
