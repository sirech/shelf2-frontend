import nock from 'nock'
import { mockStore, factories } from '../../../test'

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
    let login

    describe('successful login', () => {
      let token
      let setItem

      beforeEach(() => {
        jest.clearAllMocks()

        login = factories.login.build()
        token = { auth_token: 'token' }

        nock('http://localhost:8989')
          .post('/rest/login', JSON.stringify(login))
          .reply(201, token)

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
      beforeEach(() => {
        login = factories.login.build()

        nock('http://localhost:8989')
          .post('/rest/login', JSON.stringify(login))
          .reply(401)

        store = mockStore({})
      })

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

    afterEach(() => {
      nock.cleanAll()
    })
  })
})
