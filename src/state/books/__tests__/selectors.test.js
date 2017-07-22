import state from '../../__fixtures__'
import booksSelector from '../selectors'

describe('booksSelector', () => {
  it('selects the books', () => {
    const st = state()
    expect(booksSelector(st)).toEqual(st['books'])
  })
})
