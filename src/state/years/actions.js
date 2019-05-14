// @flow

import { RECEIVE_YEARS } from './constants'

import { fetch, normalizeYears } from 'rest'
import type { NormalizedYears } from 'types'

// exported for testing
export const receiveYears = (years: NormalizedYears) => ({
  type: RECEIVE_YEARS,
  payload: years,
})

export function fetchYears() {
  return (dispatch: Dispatch) => {
    const url = '/books/years'

    return fetch(url)
      .then(response => normalizeYears(response.data))
      .then(years => dispatch(receiveYears(years)))
  }
}
