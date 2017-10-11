import nock from 'nock'
import { mockStore, factories } from '../../../test'

import { search } from '../actions'
import { normalizeBooks } from '../../../rest'

describe('actions', () => {
  let store
  let keyword = 'stuff'
  let books = factories.book.buildList(3)

  describe('search', () => {
    beforeEach(() => {
      nock('http://localhost')
        .get(`/rest/books/search/${keyword}`)
        .reply(200, books)

      store = mockStore({})
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'search:result', payload: normalizeBooks(books) }
      ]

      return store.dispatch(search(keyword))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})
