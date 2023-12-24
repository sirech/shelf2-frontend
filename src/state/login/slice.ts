import { Dispatch } from 'redux'
import { createSlice } from '@reduxjs/toolkit'
import auth0, { Auth0DecodedHash, Auth0ParseHashError } from 'auth0-js'

const initialState = { authenticated: false, failed: false }

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSucceeded(state) {
      state.authenticated = true
      state.failed = false
    },
    loginFailed(state) {
      state.failed = true
    },
    logoutSucceeded(state) {
      state.authenticated = false
    },
  },
})

export const { loginSucceeded, loginFailed, logoutSucceeded } =
  loginSlice.actions

export const login = () => {
  return (dispatch: Dispatch) => {
    auth0Client().parseHash(
      (
        err: Auth0ParseHashError | null,
        authResult: Auth0DecodedHash | null
      ) => {
        if (authResult && authResult.accessToken) {
          window.location.hash = ''
          const expiresAt = new Date()
          if (authResult.expiresIn)
            expiresAt.setSeconds(expiresAt.getSeconds() + authResult.expiresIn)

          localStorage.setItem('authToken', authResult.accessToken)
          localStorage.setItem('expiresAt', expiresAt.toString())

          dispatch(loginSucceeded())
        } else if (err) {
          dispatch(loginFailed())
        }
      }
    )
  }
}

export const logout = () => {
  return (dispatch: Dispatch) => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('expiresAt')
    dispatch(logoutSucceeded())
  }
}

export const startLogin = () => {
  return () => {
    auth0Client().authorize()
  }
}

const redirectUri = () => `${process.env.REACT_APP_HOST || ''}/callback`

const auth0Client = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new auth0.WebAuth({
    clientID: 'xwIxFMYa0YtuNexQzbZ642vF3L9BQiSd',
    domain: 'hceris.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'shelf2.hceris.com',
    redirectUri: redirectUri(),
    scope: 'profile create:books',
  })
}

export default loginSlice.reducer
