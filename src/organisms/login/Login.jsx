// @flow

import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { Redirect } from 'react-router-dom'

import { actionPicker } from 'state'
import { actions, authenticatedSelector } from 'state/login'

type Props = {
  authenticated: boolean,
  startLogin: () => undefined,
}

class Login extends React.Component {
  static defaultProps: Props

  props: Props

  redirectIfLoggedIn() {
    if (this.props.authenticated) {
      return <Redirect to="/" />
    }
  }

  componentDidMount() {
    if (!this.props.authenticated) {
      this.props.startLogin()
    }
  }

  render() {
    return <div>{this.redirectIfLoggedIn()}</div>
  }
}

Login.defaultProps = {
  authenticated: false,
  startLogin: _ => undefined,
}

export default connect(
  (state, props) =>
    createStructuredSelector({
      authenticated: authenticatedSelector,
    })(state),
  actionPicker(['startLogin'])(actions)
)(Login)
