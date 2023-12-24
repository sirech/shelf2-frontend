import reducer, { receivedSearchResult } from '../slice'

import { books } from '../../__fixtures__'

describe('search reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('handles RECEIVE_BOOKS', () => {
    expect(reducer(undefined, receivedSearchResult(books()))).toMatchSnapshot()
  })
})
