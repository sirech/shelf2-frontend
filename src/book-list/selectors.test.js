import booksSelector from './selectors'
import state from 'state/__fixtures__'

describe('booksSelector', () => {
  it('orders the books as categories', () => {
    expect(booksSelector(state())).toMatchSnapshot()
  })
})
