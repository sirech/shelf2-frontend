import state from '../../__fixtures__'
import modalSelector from '../selectors'

describe('modalSelector', () => {
  it('selects the modal', () => {
    expect(modalSelector(state())).toMatchSnapshot()
  })
})
