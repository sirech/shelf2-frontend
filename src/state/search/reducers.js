import { RECEIVE_SEARCH_RESULT } from './constants'

const initialState = { entities: { books: {} }, result: [] }

export default function books (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULT:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
