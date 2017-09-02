// @flow

import { fetch } from '../../rest'

import { LOGIN_SUCCESS, LOGIN_FAILURE } from './constants'

import type { Login as LoginType } from '../../types'

const loginSuccess = () => ({
  type: LOGIN_SUCCESS
})

const loginFailure = () => ({
  type: LOGIN_FAILURE
})

export const tryLogin = (data: LoginType) => {
  return (dispatch: Dispatch) => {
    const url = '/login'
    const method = 'POST'
    const body = JSON.stringify(data)

    return fetch(url, { method, body })
      .then((response) => {
        if (response.status === 401) {
          return response.json().then((err) => { throw err })
        }
        return response
      })
      .then(() => dispatch(loginSuccess()))
      .catch(() => dispatch(loginFailure()))
  }
}
