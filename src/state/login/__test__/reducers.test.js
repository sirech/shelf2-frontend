import reducer from '../reducers'

describe('login reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ authenticated: false })
  })
})
