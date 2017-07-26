import nock from 'nock'
import { mockStore, factories } from '../../../test'

import { fetchYears } from '../actions'
import { normalizeYears } from '../../../rest'

describe('actions', () => {
  let store
  let years = factories.year.buildList(3)

  describe('fetchYears', () => {
    beforeEach(() => {
      nock('http://localhost')
        .get('/rest/books/years')
        .reply(200, years)

      store = mockStore({})
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'years:receive', payload: normalizeYears(years) }
      ]

      return store.dispatch(fetchYears())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})
