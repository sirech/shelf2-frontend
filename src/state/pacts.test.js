/**
 * @jest-environment node
 */
import * as R from 'ramda'
import { Matchers } from 'pact'

import { mockStore, createProvider } from '../test'

import { fetchBooks } from './books/actions'
import { create } from './form/actions'
import { tryLogin } from './login/actions'
import { search } from './search/actions'
import { fetchYears } from './years/actions'

import { books, years, rest } from './__fixtures__'

describe('pacts', () => {
  let store

  beforeEach(() => {
    store = mockStore({})
  })

  const provider = createProvider()

  beforeAll(() => provider.setup())
  afterAll(() => provider.finalize(), 5 * 60 * 1000)

  describe('books - fetchBooks', () => {
    let year = '2016'

    beforeAll(async () => {
      const interaction = {
        state: 'i have some books',
        uponReceiving: 'a request for a list of books for a given year',
        withRequest: {
          method: 'GET',
          path: '/rest/books',
          query: { year },
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: rest.books
        }
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'books:receive', payload: R.pick(['entities', 'result'])(books()) },
        { type: 'books:activeYear', payload: 2016 }
      ]

      return store.dispatch(fetchBooks(year))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })

  describe('forms - change', () => {
    const bookForm = R.omit(['id'])(rest.book)

    beforeAll(async () => {
      const interaction = {
        state: 'i am logged in',
        uponReceiving: 'a request to create a new book',
        withRequest: {
          method: 'POST',
          path: '/rest/books',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': `Bearer: ${rest.authToken}`
          },
          body: { book: bookForm }
        },
        willRespondWith: {
          status: 201,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: Matchers.somethingLike(rest.book)
        }
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    beforeEach(() => {
      global.localStorage.getItem = (token) => rest.authToken
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'books:book:create:success', payload: rest.book },
        { type: 'rrf/reset', model: 'form.book' },
        { type: 'modal:toggled' }
      ]

      return store.dispatch(create(bookForm))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })

  describe('login - tryLogin', () => {
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    describe('successful login', () => {
      let setItem

      const token = {
        auth_token: rest.authToken
      }
      const login = { user: 'Tronald', password: 'Dumpinator' }

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
            expect(setItem.mock.calls[0][1]).toBe(rest.authToken)
          })
      })
    })

    describe('failed login', () => {
      const login = { user: 'Tronald', password: 'Wrongwrong' }

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

  describe('search - search', () => {
    let keyword = 'a'

    beforeAll(async () => {
      const interaction = {
        state: 'i have some books',
        uponReceiving: 'a search request',
        withRequest: {
          method: 'GET',
          path: `/rest/books/search/${keyword}`,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: rest.books
        }
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'search:result', payload: R.pick(['entities', 'result'])(books()) }
      ]

      return store.dispatch(search(keyword))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })

  describe('years - fetchYears', () => {
    beforeAll(async () => {
      const interaction = {
        state: 'i have books for different years',
        uponReceiving: 'a request for a summary of all the years',
        withRequest: {
          method: 'GET',
          path: '/rest/books/years',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: rest.years
        }
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'years:receive', payload: years() }
      ]

      return store.dispatch(fetchYears())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})