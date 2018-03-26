import reducer from '../reducers'
import { markActiveYear } from '../actions'

import { constants } from '../../form'
import { factories } from 'test'
import { books } from '../../__fixtures__'

describe('book reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
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
