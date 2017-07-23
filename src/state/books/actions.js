// @flow

import { RECEIVE_BOOKS } from './constants'

import { fetch, normalizeBooks } from '../../rest'
import type { NormalizedBooks } from '../../types'

const receiveBooks = (books: NormalizedBooks) => ({
  type: RECEIVE_BOOKS,
  payload: books
})

export function fetchBooks (year: string) {
  return (dispatch: Dispatch) => {
    const url = `/books?year=${year}`

    return fetch(url)
      .then(response => response.json())
      .then(data => normalizeBooks(data))
      .then(books => dispatch(receiveBooks(books)))
  }
}
