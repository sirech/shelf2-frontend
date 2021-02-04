import { Book } from 'types'
export const BOOK_CREATE_SUCCESS = 'books:book:create:success'
export const BOOK_CREATE_FAIL = 'books:book:create:fail'

export interface BookCreateSuccessAction {
  type: typeof BOOK_CREATE_SUCCESS
  payload: Book
}
