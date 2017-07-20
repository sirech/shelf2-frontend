import { RECEIVE_BOOKS } from './constants'

const initialState = {}

export default function books (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
