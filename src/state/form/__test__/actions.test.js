/**
 * @jest-environment node
 */
import * as R from 'ramda'
import { Matchers } from 'pact'

import { mockStore, createProvider } from '../../../test'

import { changeStars, create } from '../actions'
import { rest } from '../../__fixtures__'

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

  describe('create', () => {
    const bookForm = R.omit(['id'])(rest.book)

    const provider = createProvider()

    beforeAll(async () => {
      await provider.setup()

      const interaction = {
        state: 'i am logged in',
        uponReceiving: 'a request to create a new book',
        withRequest: {
          method: 'POST',
          path: '/rest/books',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': `Bearer: ${rest.authToken}`
          },
          body: { book: bookForm }
        },
        willRespondWith: {
          status: 201,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: Matchers.somethingLike(rest.book)
        }
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)

    afterAll(async () => {
      await provider.verify()
      return provider.finalize()
    }, 5 * 60 * 1000)

    beforeEach(() => {
      global.localStorage.getItem = (token) => rest.authToken
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'books:book:create:success', payload: rest.book },
        { type: 'rrf/reset', model: 'form.book' },
        { type: 'modal:toggled' }
      ]

      return store.dispatch(create(bookForm))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})
