import {
  RECEIVE_BOOKS,
  MARK_ACTIVE_YEAR,
  ReceiveBooksAction,
  MarkActiveYearAction,
} from './constants'

import { fetch, normalizeBooks } from 'rest'
import { NormalizedBooks } from 'types'
import { Dispatch } from 'redux'

// exported for testing
export const receiveBooks = (books: NormalizedBooks): ReceiveBooksAction => ({
  type: RECEIVE_BOOKS,
  payload: books,
})

// exported for testing
export const markActiveYear = (year: number): MarkActiveYearAction => ({
  type: MARK_ACTIVE_YEAR,
  payload: year,
})

export function fetchBooks(year: string) {
  return (dispatch: Dispatch) => {
    const url = `/books?year=${year}`

    return fetch(url)
      .then((response) => normalizeBooks(response.data))
      .then((books) => dispatch(receiveBooks(books)))
      .then(() => dispatch(markActiveYear(parseInt(year, 10))))
  }
}
