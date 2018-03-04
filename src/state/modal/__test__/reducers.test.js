import modalReducer from '../reducers'

import { MODAL_TOGGLED } from '../constants'
import { constants } from 'state/form'

describe('modal reducer', () => {
  it('returns the initial state', () => {
    expect(modalReducer(undefined, {})).toEqual({ opened: false, error: false })
  })

  it('handles MODAL_TOGGLED', () => {
    expect(modalReducer({}, {
      type: MODAL_TOGGLED
    })).toEqual({ opened: true })
  })

  it('handles BOOK_CREATE_SUCCESS', () => {
    expect(modalReducer({ error: true }, {
      type: constants.BOOK_CREATE_SUCCESS
    })).toEqual({ error: false })
  })

  it('handles BOOK_CREATE_FAIL', () => {
    expect(modalReducer({ error: false }, {
      type: constants.BOOK_CREATE_FAIL
    })).toEqual({ error: true })
  })
})
