// @flow

import auth0 from 'auth0-js'

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

const redirectUri = () => `${process.env.REACT_APP_HOST}/callback`

export const startLogin = () => {
  return (dispatch: Dispatch) => {
    let client = new auth0.WebAuth({
      clientID: 'q1MDnhpkECDbjSdA9MSsdNRbXEKhWIYj',
      domain: 'hceris.eu.auth0.com',
      responseType: 'token id_token',
      audience: 'shelf2.hceris.com',
      redirectUri: redirectUri(),
      scope: 'openid profile create:books fuck:you',
    })
    client.authorize()
  }
}
