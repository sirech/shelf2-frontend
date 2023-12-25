import React, { useEffect } from 'react'

import { Redirect } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'hooks'

import { actions, authenticatedSelector } from 'state/login'

const redirectIfLoggedIn = (authenticated: boolean) => {
  if (authenticated) {
    return <Redirect to="/" />
  }
}

const Callback = () => {
  const authenticated = useAppSelector(authenticatedSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!authenticated) {
      dispatch(actions.login())
    }
  }, [authenticated, dispatch])

  return <div>{redirectIfLoggedIn(authenticated)}</div>
}

export default Callback
