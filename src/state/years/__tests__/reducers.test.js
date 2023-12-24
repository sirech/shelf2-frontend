import reducer, { receivedYears } from '../slice'

import { years } from '../../__fixtures__'

import { actions } from 'state/form'
import { factories } from 'test'

describe('years reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('handles RECEIVE_YEARS', () => {
    expect(reducer(undefined, receivedYears(years()))).toMatchSnapshot()
  })

  describe('handles BOOK_CREATE_SUCCESS', () => {
    it('adds a new year entry', () => {
      const book = factories.book.build({ year: 2015 })
      expect(reducer(years(), actions.bookCreated(book))).toMatchSnapshot()
    })

    it('increments the counter for existing years', () => {
      const book = factories.book.build({ year: 2010 })
      expect(reducer(years(), actions.bookCreated(book))).toMatchSnapshot()
    })
  })
})
