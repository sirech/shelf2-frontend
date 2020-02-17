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

export const login = () => {
  return (dispatch: Dispatch) => {
    auth0Client().parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = ''
        const expiresAt = new Date()
        expiresAt.setSeconds(expiresAt.getSeconds() + authResult.expiresIn)

        localStorage.setItem('authToken', authResult.accessToken)
        localStorage.setItem('expiresAt', expiresAt)

        dispatch(loginSuccess())
      } else if (err) {
        dispatch(loginFailure())
      }
    })
  }
}

export const logout = () => {
  return (dispatch: Dispatch) => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('expiresAt')
    dispatch(logoutSuccess())
  }
}

export const startLogin = () => {
  return (dispatch: Dispatch) => {
    auth0Client().authorize()
  }
}

const auth0Client = () => {
  return new auth0.WebAuth({
    clientID: 'K0KbX0Mq54eJqqFg3bHaYWn71QhJf7K6',
    domain: 'hceris.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'shelf2.hceris.com',
    redirectUri: redirectUri(),
    scope: 'profile create:books',
  })
}

const redirectUri = () => `${process.env.REACT_APP_HOST}/callback`
