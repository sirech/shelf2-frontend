import nock from 'nock'
import { mockStore } from '../../../test'

import { fetchBooks } from '../actions'

describe('actions', () => {
  let store
  let year = '2017'

  describe('fetchBooks', () => {
    beforeEach(() => {
      nock('http://localhost')
        .get(`/rest/books?year=${year}`)
        .reply(200, [])

      store = mockStore({})
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'books:receive', payload: [] }
      ]

      return store.dispatch(fetchBooks(year))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})
