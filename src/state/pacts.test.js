/**
 * @jest-environment node
 */
import * as R from 'ramda'
import { Matchers } from '@pact-foundation/pact'

import { fetchBooks } from './books/actions'
import { create } from './form/actions'
import { search } from './search/actions'
import { fetchYears } from './years/actions'

import { books, years, rest } from './__fixtures__'
import { mockStore, createProvider } from 'test'

describe('pacts', () => {
  let store

  beforeEach(() => {
    store = mockStore({})
  })

  const provider = createProvider()

  beforeAll(() => provider.setup(), 5 * 60 * 1000)
  afterAll(() => provider.finalize(), 5 * 60 * 1000)

  describe('books - fetchBooks', () => {
    const year = '2016'

    beforeAll(async () => {
      const interaction = {
        state: 'i have some books',
        uponReceiving: 'a request for a list of books for a given year',
        withRequest: {
          method: 'GET',
          path: '/rest/books',
          query: { year },
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: rest.books,
        },
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        {
          type: 'books:receive',
          payload: R.pick(['entities', 'result'])(books()),
        },
        { type: 'books:activeYear', payload: 2016 },
      ]

      return store.dispatch(fetchBooks(year)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })

  describe('forms - change', () => {
    const bookForm = R.omit(['id'])(rest.book)
    const history = { push: jest.fn() }
    const errorCallback = jest.fn()

    beforeAll(async () => {
      const interaction = {
        state: 'i am logged in',
        uponReceiving: 'a request to create a new book',
        withRequest: {
          method: 'POST',
          path: '/rest/books',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer: ${rest.authToken}`,
          },
          body: { book: bookForm },
        },
        willRespondWith: {
          status: 201,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: Matchers.somethingLike(rest.book),
        },
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
      ]

      return store
        .dispatch(create(bookForm, history, errorCallback))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
          expect(history.push).toHaveBeenCalledWith('/books')
        })
    })
  })

  describe('forms - errors', () => {
    const bookForm = R.omit(['id'])(rest.book)
    const history = { push: jest.fn() }
    const errorCallback = jest.fn()

    beforeAll(async () => {
      const interaction = {
        state: 'i have an expired token',
        uponReceiving: 'a request to create a new book',
        withRequest: {
          method: 'POST',
          path: '/rest/books',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: 'Bearer: EXPIRED',
          },
          body: { book: bookForm },
        },
        willRespondWith: {
          status: 401,
        },
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    beforeEach(() => {
      global.localStorage.getItem = (token) => 'EXPIRED'
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [{ type: 'books:book:create:fail', payload: '' }]

      return store
        .dispatch(create(bookForm, history, errorCallback))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
          expect(history.push).not.toHaveBeenCalled()
          expect(errorCallback).toHaveBeenCalled()
        })
    })
  })

  describe('search - search', () => {
    const keyword = 'a'

    beforeAll(async () => {
      const interaction = {
        state: 'i have some books',
        uponReceiving: 'a search request',
        withRequest: {
          method: 'GET',
          path: `/rest/books/search/${keyword}`,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: rest.books,
        },
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        {
          type: 'search:result',
          payload: R.pick(['entities', 'result'])(books()),
        },
      ]

      return store.dispatch(search(keyword)).then(() => {
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
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: rest.years,
        },
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    it('should dispatch the correct actions', () => {
      const expectedActions = [{ type: 'years:receive', payload: years() }]

      return store.dispatch(fetchYears()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
