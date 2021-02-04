import { MarkActiveYearAction } from './actions'
import produce from 'immer'

import { RECEIVE_BOOKS, MARK_ACTIVE_YEAR } from './constants'
import { constants } from '../form'
import { NormalizedBooks } from 'types'
import { ReceiveYearsAction } from 'state/years/constants'

const initialState: NormalizedBooks = {
  entities: { books: {} },
  result: [],
  activeYear: 0,
}

export default function books(
  state = initialState,
  action: ReceiveYearsAction | MarkActiveYearAction
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case RECEIVE_BOOKS: {
        const { entities, result } = action.payload
        draft.entities = entities
        draft.result = result
        break
      }
      case MARK_ACTIVE_YEAR:
        draft.activeYear = action.payload
        break
      case constants.BOOK_CREATE_SUCCESS: {
        const book = action.payload
        if (state.activeYear === book.year) {
          draft.entities.books[book.id] = book
          draft.result.push(book.id)
        }
        break
      }
      default:
        break
    }
  })
}
