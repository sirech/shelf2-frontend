import state from '../../__fixtures__'
import searchSelector from '../selectors'

describe('searchSelector', () => {
  it('selects the search result', () => {
    expect(searchSelector(state())).toMatchSnapshot()
  })
})
