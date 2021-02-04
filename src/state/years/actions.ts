import { RECEIVE_YEARS } from './constants'

import { fetch, normalizeYears } from 'rest'
import { NormalizedYears } from 'types'
import { Dispatch } from 'redux'

// exported for testing
export const receiveYears = (years: NormalizedYears) => ({
  type: RECEIVE_YEARS,
  payload: years,
})

export function fetchYears() {
  return async (dispatch: Dispatch) => {
    const url = '/books/years'

    const response = await fetch(url)
    const years = normalizeYears(response.data)
    dispatch(receiveYears(years))
  }
}
