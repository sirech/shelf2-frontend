import state from '../../state/__fixtures__'
import selector from './selectors'

describe('selector', () => {
  it('works if there are no years', () => {
    expect(selector({ years: {} })).toEqual([])
  })

  it('selects the opened status', () => {
    expect(selector(state())).toMatchSnapshot()
  })
})
