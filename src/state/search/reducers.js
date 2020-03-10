import produce from 'immer'

import { RECEIVE_SEARCH_RESULT } from './constants'

const initialState = { entities: { books: {} }, result: [] }

export default function books(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case RECEIVE_SEARCH_RESULT: {
        const { entities, result } = action.payload
        draft.entities = entities
        draft.result = result
        break
      }
      default:
        break
    }
  })
}
