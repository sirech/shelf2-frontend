import reducer from '../reducers'

import { receiveYears } from '../actions'
import { constants } from '../../form'
import { years } from '../../__fixtures__'
import { factories } from 'test'

describe('years reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('handles RECEIVE_YEARS', () => {
    expect(reducer(undefined, receiveYears(years()))).toMatchSnapshot()
  })

  describe('handles BOOK_CREATE_SUCCESS', () => {
    it('adds a new year entry', () => {
      const book = factories.book.build({ year: 2015 })
      expect(
        reducer(years(), { type: constants.BOOK_CREATE_SUCCESS, payload: book })
      ).toMatchSnapshot()
    })

    it('increments the counter for existing years', () => {
      const book = factories.book.build({ year: 2010 })
      expect(
        reducer(years(), { type: constants.BOOK_CREATE_SUCCESS, payload: book })
      ).toMatchSnapshot()
    })
  })
})
