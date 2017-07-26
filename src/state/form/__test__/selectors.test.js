import state from '../../__fixtures__'
import formSelector from '../selectors'

describe('formSelector', () => {
  it('selects the form', () => {
    expect(formSelector(state())).toMatchSnapshot()
  })
})
