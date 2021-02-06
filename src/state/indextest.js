import reducer from '.'
import { actions } from './form'

describe('reducer', () => {
  it('does not blow up', () => {
    expect(reducer(undefined, {})).toBeDefined()
  })
})
