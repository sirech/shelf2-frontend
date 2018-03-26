import { MODAL_TOGGLED } from './constants'
import { constants } from 'state/form'

const initialState = { opened: false, error: false }

export default function modal(state = initialState, action) {
  switch (action.type) {
    case MODAL_TOGGLED:
      return { ...state, opened: !state.opened }
    case constants.BOOK_CREATE_SUCCESS:
      return { ...state, error: false }
    case constants.BOOK_CREATE_FAIL:
      return { ...state, error: true }
    default:
      return state
  }
}
