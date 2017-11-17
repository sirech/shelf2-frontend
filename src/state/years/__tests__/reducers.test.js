import reducer from '../reducers'

import { constants } from '../../form'
import { factories } from 'test'
import { years } from '../../__fixtures__'

describe('years reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  describe('handles BOOK_CREATE_SUCCESS', () => {
    it('it adds a new year entry', () => {
      const book = factories.book.build({ year: 2100 })
      expect(reducer(years(), { type: constants.BOOK_CREATE_SUCCESS, payload: book })).toMatchSnapshot()
    })

    it('increments the counter for existing years', () => {
      const book = factories.book.build({ year: 2010 })
      expect(reducer(years(), { type: constants.BOOK_CREATE_SUCCESS, payload: book })).toMatchSnapshot()
    })
  })
})
