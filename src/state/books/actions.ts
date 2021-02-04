// @flow

import { RECEIVE_BOOKS, MARK_ACTIVE_YEAR } from './constants'

import { fetch, normalizeBooks } from 'rest'
import type { NormalizedBooks } from 'types'

// exported for testing
export const receiveBooks = (books: NormalizedBooks) => ({
  type: RECEIVE_BOOKS,
  payload: books,
})

// exported for testing
export const markActiveYear = (year: number) => ({
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
