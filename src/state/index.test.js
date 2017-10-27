import reducer from '.'

describe('reducer', () => {
  it('does not blow up', () => {
    expect(reducer(undefined, {})).toBeDefined()
  })
})
