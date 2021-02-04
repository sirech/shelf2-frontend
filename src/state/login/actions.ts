import auth0 from 'auth0-js'
import { Dispatch } from 'redux'

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './constants'

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
})

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS
}

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
})

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE
}

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
})

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS
}

export type LoginActions =
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutSuccessAction

export const login = () => {
  return (dispatch: Dispatch) => {
    auth0Client().parseHash(
      (err: object, authResult: { accessToken: string; expiresIn: number }) => {
        if (authResult && authResult.accessToken) {
          window.location.hash = ''
          const expiresAt = new Date()
          expiresAt.setSeconds(expiresAt.getSeconds() + authResult.expiresIn)

          localStorage.setItem('authToken', authResult.accessToken)
          localStorage.setItem('expiresAt', expiresAt.toString())

          dispatch(loginSuccess())
        } else if (err) {
          dispatch(loginFailure())
        }
      }
    )
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
