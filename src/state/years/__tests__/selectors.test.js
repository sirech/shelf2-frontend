import state from '../../__fixtures__'
import yearsSelector from '../selectors'

describe('yearsSelector', () => {
  it('selects the years', () => {
    expect(yearsSelector(state())).toMatchSnapshot()
  })
})
