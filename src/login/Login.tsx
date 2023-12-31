import React, { useEffect } from 'react'

import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'hooks'

import { actions, authenticatedSelector } from 'state/login'

const redirectIfLoggedIn = (authenticated: boolean) => {
  if (authenticated) {
    return <Navigate replace to="/" />
  }
}
const Login = () => {
  const authenticated = useAppSelector(authenticatedSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!authenticated) {
      dispatch(actions.startLogin())
    }
  }, [authenticated, dispatch])

  return <div>{redirectIfLoggedIn(authenticated)}</div>
}

export default Login
