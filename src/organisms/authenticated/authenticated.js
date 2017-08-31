// @flow

import React from 'react'
import { connect } from 'react-redux'

import R from 'ramda'
import wrapDisplayName from 'recompose/wrapDisplayName'
import { createStructuredSelector } from 'reselect'

import selector from './selectors'

type Props = {
  authenticated: boolean
}

export default (shouldBeAuthenticated: boolean = true) => (Component: Class<React$Component<*, *, *>>) => {
  class AuthenticatedComponent extends React.Component {
    props: Props

    conditionalRender () {
      if (this.props.authenticated === shouldBeAuthenticated) {
        return (
          <Component {...R.omit(['authenticated'], this.props)} />
        )
      }

      return null
    }

    render () {
      return this.conditionalRender()
    }
  }

  AuthenticatedComponent.displayName = wrapDisplayName(Component, 'authenticatedComponent')

  return connect(
    (state, props) => createStructuredSelector({
      authenticated: selector
    })(state)
  )(AuthenticatedComponent)
}
