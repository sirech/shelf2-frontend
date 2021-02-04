import state from 'state/__fixtures__'
import booksSelector from './selectors'

describe('booksSelector', () => {
  it('orders the books as categories', () => {
    expect(booksSelector(state())).toMatchSnapshot()
  })
})
