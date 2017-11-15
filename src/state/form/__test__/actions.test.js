import { mockStore } from '../../../test'

import { changeStars } from '../actions'

describe('actions', () => {
  let store

  beforeEach(() => {
    store = mockStore({})
  })

  describe('changeStars', () => {
    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { external: true, model: 'form.book.stars', multi: false, silent: false, type: 'rrf/change', value: 1 }
      ]

      store.dispatch(changeStars(1))
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
