import { Dispatch } from 'redux'
import { History } from 'history'

import {
  BOOK_CREATE_SUCCESS,
  BOOK_CREATE_FAIL,
  BookCreateSuccessAction,
} from './constants'
import { fetch } from 'rest'

import { BookForm, Book } from 'types'

const bookCreated = (book: Book): BookCreateSuccessAction => ({
  type: BOOK_CREATE_SUCCESS,
  payload: book,
})

const bookCreationFailed = (error: string) => ({
  type: BOOK_CREATE_FAIL,
  payload: error,
})

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
      .catch((error: { response: { data: string } }) => {
        dispatch(bookCreationFailed(error.response.data))
        errorCallback(error.response.data)
      })
  }
}
