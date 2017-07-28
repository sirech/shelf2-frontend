import update from 'immutability-helper'
import R from 'ramda'

import { RECEIVE_BOOKS, MARK_ACTIVE_YEAR } from './constants'
import { constants } from '../form'

const initialState = { entities: { books: {} }, result: [] }

const updateBook = (state, book) => {
  if (state.activeYear === book.year) {
    return update(state,
      {
        entities: {
          books: { $merge: { [book.id]: book } }
        },

        result: { $apply: list => R.append(book.id)(list) }
      })
  } else {
    return state
  }
}
export default function books (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return { ...state, ...action.payload }
    case MARK_ACTIVE_YEAR:
      return { ...state, activeYear: action.payload }
    case constants.BOOK_CREATE_SUCCESS:
      return updateBook(state, action.payload)
    default:
      return state
  }
}
