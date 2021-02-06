import reducer from '../reducers'
import { markActiveYear, receiveBooks } from '../actions'

import { constants } from '../../form'
import { books } from '../../__fixtures__'
import { factories } from 'test'

describe('book reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('handles RECEIVE_BOOKS', () => {
    expect(reducer(undefined, receiveBooks(books()))).toMatchSnapshot()
  })

  it('handles MARK_ACTIVE_YEAR', () => {
    expect(reducer(undefined, markActiveYear(2017))).toMatchSnapshot()
  })

  describe('handles BOOK_CREATE_SUCCESS', () => {
    it('does not do anything if it is not the same year', () => {
      const book = factories.book.build({ year: 2100 })
      expect(
        reducer(books(), { type: constants.BOOK_CREATE_SUCCESS, payload: book })
      ).toEqual(books())
    })

    it('adds the book if it is in the same year', () => {
      const book = factories.book.build({
        title: 'My book',
        category: 'software',
        stars: 3,
        year: 2016,
      })
      expect(
        reducer(books(), { type: constants.BOOK_CREATE_SUCCESS, payload: book })
      ).toMatchSnapshot()
    })
  })
})
