// @flow

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Redirect } from 'react-router-dom'

import { actions, authenticatedSelector } from 'state/login'

const redirectIfLoggedIn = (authenticated: boolean) => {
  if (authenticated) {
    return <Redirect to="/" />
  }
}

const Callback = () => {
  const authenticated = useSelector(authenticatedSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!authenticated) {
      dispatch(actions.login())
    }
  }, [authenticated, dispatch])

  return <div>{redirectIfLoggedIn(authenticated)}</div>
}

export default Callback
