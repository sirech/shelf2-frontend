import { mockStore } from 'test'

import { login, logout } from '../actions'

describe('actions', () => {
  let store

  beforeEach(() => {
    store = mockStore({})
  })

  describe('login', () => {
    let setItem
    const token = 'the-token'

    beforeEach(() => {
      setItem = jest.fn()
      global.localStorage.setItem = setItem
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'login:success' }
      ]

      store.dispatch(login(token))
      expect(store.getActions()).toEqual(expectedActions)
    })

    it('adds the token to localStorage', () => {
      store.dispatch(login(token))
      expect(setItem.mock.calls.length).toBe(1)
      expect(setItem.mock.calls[0][0]).toBe('authToken')
      expect(setItem.mock.calls[0][1]).toBe(token)
    })
  })

  describe('logout', () => {
    let removeItem

    beforeEach(() => {
      removeItem = jest.fn()
      global.localStorage.removeItem = removeItem
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'logout:success' }
      ]

      store.dispatch(logout())
      expect(store.getActions()).toEqual(expectedActions)
    })

    it('removes the token from localStorage', () => {
      store.dispatch(logout())
      expect(removeItem.mock.calls.length).toBe(1)
      expect(removeItem.mock.calls[0][0]).toBe('authToken')
    })
  })
})
