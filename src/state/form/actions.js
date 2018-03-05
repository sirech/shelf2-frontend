// @flow

import { actions } from 'react-redux-form'

import { fetch } from 'rest'

import { BOOK_CREATE_SUCCESS, BOOK_CREATE_FAIL } from './constants'
import { modelName } from './utils'

import { actions as modalActions } from '../modal'

import type { BookForm, Book } from 'types'

const bookCreated = (book: Book) => ({
  type: BOOK_CREATE_SUCCESS,
  payload: book
})

const bookCreationFailed = (error) => ({
  type: BOOK_CREATE_FAIL,
  payload: error
})

export const changeStars = (count: number) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.change(modelName('stars'), count))
  }
}

const resetForm = () => actions.reset(modelName())

export const create = (book: BookForm) => {
  return (dispatch: Dispatch) => {
    const url = '/books'
    const method = 'POST'
    // const body = JSON.stringify({ book })
    const data = { book }

    return fetch(url, { method, data })
      .then(response => dispatch(bookCreated(response.data)))
      .then(() => dispatch(resetForm()))
      .then(() => dispatch(modalActions.modalToggled()))
      .catch(error => dispatch(bookCreationFailed(error.response.data)))
  }
}
