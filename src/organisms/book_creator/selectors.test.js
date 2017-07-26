import state from '../../state/__fixtures__'
import openedSelector from './selectors'

describe('openedSelector', () => {
  it('selects the opened status', () => {
    expect(openedSelector(state())).toEqual(false)
  })
})
