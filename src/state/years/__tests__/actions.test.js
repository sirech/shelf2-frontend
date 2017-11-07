/**
 * @jest-environment node
 */

import { mockStore, createProvider } from '../../../test'

import { fetchYears } from '../actions'

import { years, rest } from '../../__fixtures__'

describe('actions', () => {
  let store
  const provider = createProvider()

  beforeAll(async () => {
    await provider.setup()

    const interaction = {
      state: 'i have books for different years',
      uponReceiving: 'a request for a summary of all the years',
      withRequest: {
        method: 'GET',
        path: '/rest/books/years',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      },
      willRespondWith: {
        status: 200,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: rest.years
      }
    }

    return provider.addInteraction(interaction)
  }, 5 * 60 * 1000)

  afterAll(async () => {
    await provider.verify()
    return provider.finalize()
  }, 5 * 60 * 1000)

  describe('fetchYears', () => {
    beforeEach(() => {
      store = mockStore({})
    })

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'years:receive', payload: years() }
      ]

      return store.dispatch(fetchYears())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})
