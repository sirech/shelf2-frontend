import { NormalizedBooks } from 'types'

export const namespace = 'books'

export const RECEIVE_BOOKS = 'books:receive'
export const MARK_ACTIVE_YEAR = 'books:activeYear'

export interface ReceiveBooksAction {
  type: typeof RECEIVE_BOOKS
  payload: NormalizedBooks
}

export interface MarkActiveYearAction {
  type: typeof MARK_ACTIVE_YEAR
  payload: number
}
