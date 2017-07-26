import nock from 'nock'
import { mockStore, factories } from '../../../test'

import { changeStars, create } from '../actions'

describe('actions', () => {
  let store

  describe('changeStars', () => {
    beforeEach(() => {
      store = mockStore({})
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { external: true, model: 'form.book.stars', multi: false, silent: false, type: 'rrf/change', value: 1 }
      ]

      store.dispatch(changeStars(1))
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('create', () => {
    let book

    beforeEach(() => {
      book = factories.book.build()

      nock('http://localhost')
        .post('/rest/books', JSON.stringify({ book }))
        .reply(200, book)

      store = mockStore({})
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'books:book:create:success', payload: book },
        { type: 'rrf/reset', model: 'form.book' }
      ]

      return store.dispatch(create(book))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})
