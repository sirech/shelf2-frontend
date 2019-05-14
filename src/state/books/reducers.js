import produce from 'immer'

import { RECEIVE_BOOKS, MARK_ACTIVE_YEAR } from './constants'
import { constants } from '../form'

const initialState = { entities: { books: {} }, result: [] }

export default function books(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case RECEIVE_BOOKS:
        draft = { ...action.payload }
        break
      case MARK_ACTIVE_YEAR:
        draft.activeYear = action.payload
        break
      case constants.BOOK_CREATE_SUCCESS:
        const book = action.payload
        if (state.activeYear === book.year) {
          draft.entities.books[book.id] = book
          draft.result.push(book.id)
        }
        break
      default:
        break
    }
  })
}
