import React from 'react'

import { fullRender } from '../../test'
import state from '../../state/__fixtures__'
import SearchList from './SearchList'

// Mock thunk that triggers API request
import { actions } from '../../state/search'
jest.mock('../../state/search/actions', () => ({
  search: jest.fn(dispatch => jest.fn())
}))

describe('components', () => {
  describe('SearchList', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('renders correctly', () => {
      const { component } = fullRender(<SearchList />, state())
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('only fetches the books if there is a keyword', () => {
      fullRender(<SearchList />, state())
      expect(actions.search.mock.calls.length).toBe(0)
    })

    xit('fetches the book at the beginning', () => {
      const match = { params: { keyword: 'no' } }

      fullRender(<SearchList match={match} />, state())
      expect(actions.search.mock.calls.length).toBe(1)
      expect(actions.search.mock.calls[0][0]).toBe('no')
    })
  })
})
