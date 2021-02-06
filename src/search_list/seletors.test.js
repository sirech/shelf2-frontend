import searchSelector from './selectors'
import state from 'state/__fixtures__'

describe('searchSelector', () => {
  it('orders the books as categories', () => {
    expect(searchSelector(state())).toMatchSnapshot()
  })
})
