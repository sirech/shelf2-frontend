import { NormalizedBooks } from 'types'
export const namespace = 'search'

export const RECEIVE_SEARCH_RESULT = 'search:result'

export interface ReceiveSearchResultAction {
  type: typeof RECEIVE_SEARCH_RESULT
  payload: NormalizedBooks
}
