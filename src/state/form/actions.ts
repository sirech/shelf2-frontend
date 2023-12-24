import { Dispatch } from 'redux'
import { History } from 'history'
import { createAction } from '@reduxjs/toolkit'

import { BOOK_CREATE_SUCCESS, BOOK_CREATE_FAIL } from './constants'
import { fetch } from 'rest'

import { BookForm, Book } from 'types'

export const bookCreated = createAction<Book>(BOOK_CREATE_SUCCESS)
export const bookCreationFailed = createAction<string>(BOOK_CREATE_FAIL)

export const create = (
  book: BookForm,
  history: History,
  errorCallback: (message: string) => void
) => {
  return (dispatch: Dispatch) => {
    const url = '/books'
    const method = 'POST'
    const data = { book }

    return fetch<Book>(url, { method, data })
      .then((response) => dispatch(bookCreated(response.data)))
      .then(() => history.push('/books'))
      .catch((error: { response: { data: string }; message: string }) => {
        let payload = ''

        if (error.response) {
          payload = error.response.data
        } else {
          payload = error.message
        }
        dispatch(bookCreationFailed(payload))
        errorCallback(payload)
      })
  }
}
