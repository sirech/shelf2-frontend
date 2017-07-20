import nock from 'nock'
import { mockStore, factories } from '../../../test'

import { fetchBooks } from '../actions'

describe('actions', () => {
  let store
  let year = '2017'
  let books = factories.book.buildList(3)

  describe('fetchBooks', () => {
    beforeEach(() => {
      nock('http://localhost')
        .get(`/rest/books?year=${year}`)
        .reply(200, books)

      store = mockStore({})
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'books:receive', payload: books }
      ]

      return store.dispatch(fetchBooks(year))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})
