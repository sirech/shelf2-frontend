import { RECEIVE_YEARS } from './constants'

const initialState = {}

export default function years (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_YEARS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
