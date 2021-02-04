import { RECEIVE_BOOKS, MARK_ACTIVE_YEAR } from './constants'

import { fetch, normalizeBooks } from 'rest'
import { NormalizedBooks } from 'types'
import { Dispatch } from 'redux'

// exported for testing
export const receiveBooks = (books: NormalizedBooks) => ({
  type: RECEIVE_BOOKS,
  payload: books,
})

export type ReceiveBooksAction = ReturnType<typeof receiveBooks>

// exported for testing
export const markActiveYear = (year: number) => ({
  type: MARK_ACTIVE_YEAR,
  payload: year,
})

export type MarkActiveYearAction = ReturnType<typeof markActiveYear>

export function fetchBooks(year: string) {
  return (dispatch: Dispatch) => {
    const url = `/books?year=${year}`

    return fetch(url)
      .then((response) => normalizeBooks(response.data))
      .then((books) => dispatch(receiveBooks(books)))
      .then(() => dispatch(markActiveYear(parseInt(year, 10))))
  }
}
