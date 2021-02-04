import React from 'react'

import { fullRender } from 'test'
import state from 'state/__fixtures__'
import BookList from './BookList'

// Mock thunk that triggers API request
import { actions } from 'state/books'
jest.mock('state/books/actions', () => ({
  fetchBooks: jest.fn((dispatch) => jest.fn()),
}))

describe('components', () => {
  describe('BookList', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    const match = { params: { year: '2017' } }

    it('renders correctly', () => {
      const { component } = fullRender(<BookList match={match} />, state())
      expect(component.toJSON()).toMatchSnapshot()
    })

    // TODO: this relies on the next tick
    xit('fetches the book at the beginning', () => {
      fullRender(<BookList match={match} />, state())
      expect(actions.fetchBooks.mock.calls.length).toBe(1)
      expect(actions.fetchBooks.mock.calls[0][0]).toBe('2017')
    })
  })
})
