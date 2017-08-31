import state from '../../__fixtures__'
import selector from '../selectors'

describe('login selector', () => {
  it('selects the login', () => {
    expect(selector(state())).toMatchSnapshot()
  })
})
