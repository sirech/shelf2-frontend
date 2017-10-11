import reducer from '../reducers'

describe('search reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })
})
