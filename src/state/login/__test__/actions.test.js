import nock from 'nock'
import { mockStore, factories } from '../../../test'

import { tryLogin } from '../actions'

describe('actions', () => {
  let store

  describe('tryLogin', () => {
    let login

    describe('successful login', () => {
      beforeEach(() => {
        login = factories.login.build()

        nock('http://localhost')
          .post('/rest/login', JSON.stringify(login))
          .reply(200)

        store = mockStore({})
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
