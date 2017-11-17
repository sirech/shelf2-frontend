// @flow

import { RECEIVE_YEARS } from './constants'

import { fetch, normalizeYears } from 'rest'
import type { NormalizedYears } from 'types'

const receiveYears = (years: NormalizedYears) => ({
  type: RECEIVE_YEARS,
  payload: years
})

export function fetchYears () {
  return (dispatch: Dispatch) => {
    const url = '/books/years'

    return fetch(url)
      .then(response => response.json())
      .then(data => normalizeYears(data))
      .then(years => dispatch(receiveYears(years)))
  }
}
