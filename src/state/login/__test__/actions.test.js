import nock from 'nock'
import { mockStore, factories } from '../../../test'

import { tryLogin } from '../actions'

describe('actions', () => {
  let store

  describe('tryLogin', () => {
    let login

    describe('successful login', () => {
      let token
      let setItem

      beforeEach(() => {
        jest.clearAllMocks()

        login = factories.login.build()
        token = { auth_token: 'token' }

        nock('http://localhost')
          .post('/rest/login', JSON.stringify(login))
          .reply(201, token)

        store = mockStore({})
        setItem = jest.fn()

        global.localStorage = {
          setItem: setItem
        }
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

        nock('http://localhost')
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
