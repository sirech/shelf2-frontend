import selector from './selectors'
import state from 'state/__fixtures__'

describe('selector', () => {
  it('works if there are no years', () => {
    expect(selector({ years: {} })).toEqual([])
  })

  it('selects the opened status', () => {
    expect(selector(state())).toMatchSnapshot()
  })
})
