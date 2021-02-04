import reducer, { actionPicker } from '.'
import { actions } from './form'

describe('reducer', () => {
  it('does not blow up', () => {
    expect(reducer(undefined, {})).toBeDefined()
  })
})

describe('actionPicker', () => {
  it('throws an error for non existing actions', () => {
    expect(() => {
      actionPicker(['prettySureThisWontEverExist'])(actions)
    }).toThrow()
  })

  it('fetches the actions', () => {
    expect(actionPicker(['create'])(actions)).toHaveProperty('create')
  })
})
