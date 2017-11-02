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

  beforeAll(done => provider.setup().then(done))
  afterAll(done => provider.verify().then(provider.finalize).then(done))

  describe('fetchBooks', () => {
    beforeAll(done => {
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
      provider.addInteraction(interaction).then(done, done)
    })

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
