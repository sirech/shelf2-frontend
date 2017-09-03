// @flow

import { fetch } from '../../rest'

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './constants'

import type { Login as LoginType } from '../../types'

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
})

const loginFailure = () => ({
  type: LOGIN_FAILURE
})

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
})

const storeToken = (token) => {
  localStorage.setItem('authToken', token)
}

export const logout = () => {
  return (dispatch: Dispatch) => {
    localStorage.removeItem('authToken')
    dispatch(logoutSuccess())
  }
}

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
      .then(response => response.json())
      .then(json => storeToken(json.auth_token))
      .then(() => dispatch(loginSuccess()))
      .catch(() => dispatch(loginFailure()))
  }
}
