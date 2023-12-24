import reducer, { activeYearMarked, receivedBooks } from '../slice'

import { books } from '../../__fixtures__'

import { actions } from 'state/form'
import { factories } from 'test'

describe('book reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('handles RECEIVE_BOOKS', () => {
    expect(reducer(undefined, receivedBooks(books()))).toMatchSnapshot()
  })

  it('handles MARK_ACTIVE_YEAR', () => {
    expect(reducer(undefined, activeYearMarked(2017))).toMatchSnapshot()
  })

  describe('handles BOOK_CREATE_SUCCESS', () => {
    it('does not do anything if it is not the same year', () => {
      const book = factories.book.build({ year: 2100 })
      expect(reducer(books(), actions.bookCreated(book))).toEqual(books())
    })

    it('adds the book if it is in the same year', () => {
      const book = factories.book.build({
        title: 'My book',
        category: 'software',
        stars: 3,
        year: 2016,
      })
      expect(reducer(books(), actions.bookCreated(book))).toMatchSnapshot()
    })
  })
})
