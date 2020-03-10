import reducer from '../reducers'
import { receiveSearchResult } from '../actions'

import { books } from '../../__fixtures__'

describe('search reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('handles RECEIVE_BOOKS', () => {
    expect(reducer(undefined, receiveSearchResult(books()))).toMatchSnapshot()
  })
})
