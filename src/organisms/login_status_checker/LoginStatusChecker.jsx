// @flow

import React from 'react'
import { connect } from 'react-redux'

import * as R from 'ramda'

import { actions } from '../../state/login'

type Props = {
  loginSuccess: (void) => void
}

// exported for testing
export class LoginStatusChecker extends React.Component {
  props: Props

  componentDidMount () {
    if (localStorage.getItem('authToken')) {
      this.props.loginSuccess()
    }
  }

  render () {
    return (
      null
    )
  }
}

export default connect(
  null,
  R.pick(['loginSuccess'])(actions)
)(LoginStatusChecker)
