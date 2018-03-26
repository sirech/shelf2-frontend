// @flow

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './constants'

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
})

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
})

export const login = (token: string) => {
  return (dispatch: Dispatch) => {
    localStorage.setItem('authToken', token)
    dispatch(loginSuccess())
  }
}

export const logout = () => {
  return (dispatch: Dispatch) => {
    localStorage.removeItem('authToken')
    dispatch(logoutSuccess())
  }
}
