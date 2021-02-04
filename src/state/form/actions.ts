// @flow

import { fetch } from 'rest'

import { BOOK_CREATE_SUCCESS, BOOK_CREATE_FAIL } from './constants'

import type { BookForm, Book } from 'types'

const bookCreated = (book: Book) => ({
  type: BOOK_CREATE_SUCCESS,
  payload: book,
})

const bookCreationFailed = (error) => ({
  type: BOOK_CREATE_FAIL,
  payload: error,
})

export const create = (
  book: BookForm,
  history: Object,
  errorCallback: (string) => void
) => {
  return (dispatch: Dispatch) => {
    const url = '/books'
    const method = 'POST'
    const data = { book }

    return fetch(url, { method, data })
      .then((response) => dispatch(bookCreated(response.data)))
      .then(() => history.push('/books'))
      .catch((error) => {
        dispatch(bookCreationFailed(error.response.data))
        errorCallback(error.response.data)
      })
  }
}
