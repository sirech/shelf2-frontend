import { mockStore } from '../../../test'

import { logout } from '../actions'

describe('actions', () => {
  let store

  beforeEach(() => {
    store = mockStore({})
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
