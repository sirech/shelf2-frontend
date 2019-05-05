// @flow

import { fetch } from 'rest'

import { BOOK_CREATE_SUCCESS, BOOK_CREATE_FAIL } from './constants'

import { actions as loginActions } from '../login'

import type { BookForm, Book } from 'types'

const bookCreated = (book: Book) => ({
  type: BOOK_CREATE_SUCCESS,
  payload: book,
})

const bookCreationFailed = error => ({
  type: BOOK_CREATE_FAIL,
  payload: error,
})

export const create = (book: BookForm) => {
  return (dispatch: Dispatch) => {
    const url = '/books'
    const method = 'POST'
    const data = { book }

    return fetch(url, { method, data })
      .then(response => dispatch(bookCreated(response.data)))
      .catch(error => {
        localStorage.removeItem('authToken')
        dispatch(bookCreationFailed(error.response.data))
        dispatch(loginActions.logoutSuccess())
      })
  }
}
