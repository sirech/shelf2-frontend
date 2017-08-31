import state from '../../../state/__fixtures__'
import selector from '../selectors'

describe('authenticated selector', () => {
  it('selects the right field', () => {
    expect(selector(state())).toMatchSnapshot()
  })
})
