import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Redirect } from 'react-router-dom'

import { actions, authenticatedSelector } from 'state/login'

const redirectIfLoggedIn = (authenticated: boolean) => {
  if (authenticated) {
    return <Redirect to="/" />
  }
}
const Login = () => {
  const authenticated = useSelector(authenticatedSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!authenticated) {
      dispatch(actions.startLogin())
    }
  }, [authenticated, dispatch])

  return <div>{redirectIfLoggedIn(authenticated)}</div>
}

export default Login
