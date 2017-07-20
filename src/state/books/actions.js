import { RECEIVE_BOOKS } from './constants'

import { fetch } from '../../rest'

const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  payload: books
})

export function fetchBooks (year) {
  return (dispatch) => {
    const url = `/books?year=${year}`

    return fetch(url)
      .then(response => response.json())
      .then(data => dispatch(receiveBooks(data)))
  }
}
