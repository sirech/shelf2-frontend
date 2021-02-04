import configureStore from './configure-store'

describe('configureStore', () => {
  it('does not blow up', () => {
    expect(configureStore({})).toBeDefined()
  })
})
