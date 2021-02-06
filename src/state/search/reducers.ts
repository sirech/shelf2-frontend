import { NormalizedBooks } from 'types'
import produce from 'immer'

import { RECEIVE_SEARCH_RESULT, ReceiveSearchResultAction } from './constants'

const initialState: NormalizedBooks = {
  entities: { books: {} },
  result: [],
  activeYear: 0,
}

export default function books(
  state = initialState,
  action: ReceiveSearchResultAction
) {
  return produce(state, (draft) => {
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
