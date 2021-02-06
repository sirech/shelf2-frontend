import state from 'state/__fixtures__'
import searchSelector from './selectors'

describe('searchSelector', () => {
  it('orders the books as categories', () => {
    expect(searchSelector(state())).toMatchSnapshot()
  })
})
