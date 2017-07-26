import { MODAL_TOGGLED } from './constants'

const initialState = { opened: false }

export default function modal (state = initialState, action) {
  switch (action.type) {
    case MODAL_TOGGLED:
      return { ...state, opened: !state.opened }
    default:
      return state
  }
}
