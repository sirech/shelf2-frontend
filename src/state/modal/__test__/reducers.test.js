import modalReducer from '../reducers'

import { MODAL_TOGGLED } from '../constants'

describe('modal reducer', () => {
  it('returns the initial state', () => {
    expect(modalReducer(undefined, {})).toEqual({ opened: false })
  })

  it('handles MODAL_TOGGLED', () => {
    expect(modalReducer({}, {
      type: MODAL_TOGGLED
    })).toEqual({ opened: true })
  })
})
