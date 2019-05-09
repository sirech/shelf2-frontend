// @flow

import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { Redirect } from 'react-router-dom'

import { actionPicker } from 'state'
import { actions, authenticatedSelector } from 'state/login'

type Props = {
  authenticated: boolean,
  login: () => undefined,
}

class Callback extends React.Component {
  static defaultProps: Props
  props: Props

  redirectIfLoggedIn() {
    if (this.props.authenticated) {
      return <Redirect to="/" />
    }
  }

  componentDidMount() {
    if (!this.props.authenticated) {
      this.props.login()
    }
  }

  render() {
    return <div>{this.redirectIfLoggedIn()}</div>
  }
}

Callback.defaultProps = {
  authenticated: false,
  login: _ => undefined,
}

export default connect(
  (state, props) =>
    createStructuredSelector({
      authenticated: authenticatedSelector,
    })(state),
  actionPicker(['login'])(actions)
)(Callback)
