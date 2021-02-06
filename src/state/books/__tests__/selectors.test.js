import state from '../../__fixtures__'
import booksSelector from '../selectors'

describe('booksSelector', () => {
  it('selects the books', () => {
    expect(booksSelector(state())).toMatchSnapshot()
  })
})
