// @flow

import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { Redirect } from 'react-router-dom'
import * as R from 'ramda'

import GoogleLogin from 'react-google-login'

import { Col, Row, Alert } from 'reactstrap'

import { actions, authenticatedSelector, failedSelector } from 'state/login'

type Props = {
  authenticated: boolean,
  failed: boolean,
  login: (string) => undefined,
  loginFailure: (_) => undefined
}

// exported for testing
export class Login extends React.Component {
  static defaultProps: Props
  props: Props
  onSuccess: Function
  onFailure: Function

  constructor () {
    super()
    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)
  }

  redirectIfLoggedIn () {
    if (this.props.authenticated) {
      return (
        <Redirect to='/' />
      )
    }
  }

  errorMessage () {
    if (this.props.failed) {
      return (
        <Alert color='danger'>Could not log in</Alert>
      )
    }
  }

  onSuccess (response) {
    this.props.login(response.accessToken)
  }

  onFailure (response) {
    this.props.loginFailure()
  }

  render () {
    return (
      <Row>
        {this.redirectIfLoggedIn()}
        <Col xs='12'>
          {this.errorMessage()}
          <div className='text-center'>
            <GoogleLogin
              clientId='821590472100-8l14rsm3sof4so0p495tkaf6lgd5p47s.apps.googleusercontent.com'
              buttonText='Login with Google'
              onSuccess={this.onSuccess}
              onFailure={this.onFailure}
            />
          </div>
        </Col>
      </Row>
    )
  }
}

Login.defaultProps = {
  authenticated: false,
  failed: false,
  login: (_) => undefined,
  loginFailure: (_) => undefined
}

export default connect(
  (state, props) => createStructuredSelector({
    authenticated: authenticatedSelector,
    failed: failedSelector
  })(state),
  R.pick(['login', 'loginFailure'])(actions)
)(Login)
