import React from 'react'

import { fullRender } from '../../test'
import state from '../../state/__fixtures__'
import BookList from './BookList'

// Mock thunk that triggers API request
import { actions } from '../../state/books'
jest.mock('../../state/books/actions', () => ({
  fetchBooks: jest.fn(dispatch => jest.fn())
}))

describe('components', () => {
  describe('BookList', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('renders correctly', () => {
      const { component } = fullRender(<BookList />, state())
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('only fetches the books if there is a year', () => {
      fullRender(<BookList />, state())
      expect(actions.fetchBooks.mock.calls.length).toBe(0)
    })

    it('fetches the book at the beginning', () => {
      const match = { params: { year: '2017' } }

      fullRender(<BookList match={match} />, state())
      expect(actions.fetchBooks.mock.calls.length).toBe(1)
      expect(actions.fetchBooks.mock.calls[0][0]).toBe('2017')
    })
  })
})
