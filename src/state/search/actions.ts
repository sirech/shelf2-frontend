import { Dispatch } from 'redux'

import { RECEIVE_SEARCH_RESULT, ReceiveSearchResultAction } from './constants'

import { fetch, normalizeBooks } from 'rest'
import { Book, NormalizedBooks } from 'types'

// exported for testing
export const receiveSearchResult = (
  books: NormalizedBooks
): ReceiveSearchResultAction => ({
  type: RECEIVE_SEARCH_RESULT,
  payload: books,
})

export function search(keyword: string) {
  return (dispatch: Dispatch) => {
    const url = `/books/search/${keyword}`

    return fetch<Book[]>(url)
      .then((response) => normalizeBooks(response.data))
      .then((books) => dispatch(receiveSearchResult(books)))
  }
}
