import React from 'react'

import SearchList from './SearchList'
import { fullRender } from 'test'
import state from 'state/__fixtures__'

// Mock thunk that triggers API request
import { actions } from 'state/search'
jest.mock('state/search/actions', () => ({
  search: jest.fn((dispatch) => jest.fn()),
}))
jest.mock('lodash.debounce', () => (f) => f)

describe('components', () => {
  describe('SearchList', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    const match = { params: { keyword: 'no' } }

    it('renders correctly', () => {
      const { component } = fullRender(<SearchList match={match} />, state())
      expect(component.toJSON()).toMatchSnapshot()
    })

    // TODO: needs tick to happen
    it.skip('fetches the book at the beginning', () => {
      fullRender(<SearchList match={match} />, state())
      expect(actions.search.mock.calls.length).toBe(1)
      expect(actions.search.mock.calls[0][0]).toBe('no')
    })
  })
})
