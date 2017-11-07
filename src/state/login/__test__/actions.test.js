/**
 * @jest-environment node
 */
import { mockStore, createProvider } from '../../../test'

import { tryLogin, logout } from '../actions'

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

  describe('tryLogin', () => {
    const provider = createProvider()

    beforeAll(() => provider.setup(), 5 * 60 * 1000)
    afterAll(async () => {
      await provider.verify()
      return provider.finalize()
    }, 5 * 60 * 1000)

    describe('successful login', () => {
      let setItem
      const token = { auth_token: 'token' }
      const login = { user: 'Tronald', password: 'Dump' }

      beforeAll(() => {
        const interaction = {
          state: 'i am not logged in',
          uponReceiving: 'a valid request for login',
          withRequest: {
            method: 'POST',
            path: '/rest/login',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            },
            body: login
          },
          willRespondWith: {
            status: 200,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: token
          }
        }

        return provider.addInteraction(interaction)
      }, 5 * 60 * 1000)

      beforeEach(() => {
        jest.clearAllMocks()

        setItem = jest.fn()
        global.localStorage.setItem = setItem
      })

      it('should dispatch the correct actions', () => {
        const expectedActions = [
          { type: 'login:success' }
        ]

        return store.dispatch(tryLogin(login))
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
          })
      })

      it('stores the token in localStorage', () => {
        return store.dispatch(tryLogin(login))
          .then(() => {
            expect(setItem.mock.calls.length).toBe(1)
            expect(setItem.mock.calls[0][0]).toBe('authToken')
            expect(setItem.mock.calls[0][1]).toBe('token')
          })
      })
    })

    describe('failed login', () => {
      const login = { user: 'Tronald', password: 'Wrong' }

      beforeAll(() => {
        const interaction = {
          state: 'i am not logged in',
          uponReceiving: 'an invalid request for login',
          withRequest: {
            method: 'POST',
            path: '/rest/login',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            },
            body: login
          },
          willRespondWith: {
            status: 401,
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
          }
        }

        return provider.addInteraction(interaction)
      }, 5 * 60 * 1000)

      it('should dispatch the correct actions', () => {
        const expectedActions = [
          { type: 'login:failure' }
        ]

        return store.dispatch(tryLogin(login))
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
          })
      })
    })
  })
})
