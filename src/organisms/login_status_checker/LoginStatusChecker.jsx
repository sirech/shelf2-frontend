// @flow

import React from 'react'
import { connect } from 'react-redux'

import { actionPicker } from 'state'
import { actions } from 'state/login'

type Props = {
  loginSuccess: void => void,
}

// exported for testing
export class LoginStatusChecker extends React.Component<Props> {
  componentDidMount() {
    if (this.tokenIsPresent() && !this.tokenIsExpired()) {
      this.props.loginSuccess()
    }
  }

  render() {
    return null
  }

  tokenIsPresent() {
    return !!localStorage.getItem('authToken')
  }

  tokenIsExpired() {
    const expiresAt = localStorage.getItem('expiresAt')
    return expiresAt && Date.parse(expiresAt) < Date.now()
  }
}

export default connect(
  null,
  actionPicker(['loginSuccess'])(actions)
)(LoginStatusChecker)
