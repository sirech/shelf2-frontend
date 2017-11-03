/**
 * @jest-environment node
 */

import R from 'ramda'

import { mockStore, createProvider } from '../../../test'

import { fetchBooks } from '../actions'

import { books, rest } from '../../__fixtures__'

describe('actions', () => {
  let store
  let year = '2016'

  const provider = createProvider()

  beforeAll(async () => {
    await provider.setup()

    const interaction = {
      state: 'i have an empty state',
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
        headers: { 'Content-Type': 'application/json' },
        body: rest.books
      }
    }

    return provider.addInteraction(interaction)
  }, 5 * 60 * 1000)

  afterAll(async () => {
    await provider.verify()
    return provider.finalize()
  }, 5 * 60 * 1000)

  describe('fetchBooks', () => {
    beforeEach(() => {
      store = mockStore({})
    })

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
})
