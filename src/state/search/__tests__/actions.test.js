/**
 * @jest-environment node
 */

import R from 'ramda'

import { mockStore, createProvider } from '../../../test'
import { search } from '../actions'
import { books, rest } from '../../__fixtures__'

describe('actions', () => {
  let store
  let keyword = 'a'

  const provider = createProvider()

  beforeAll(async () => {
    await provider.setup()

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

  afterAll(async () => {
    await provider.verify()
    return provider.finalize()
  }, 5 * 60 * 1000)

  describe('search', () => {
    beforeEach(() => {
      store = mockStore({})
    })

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
})
