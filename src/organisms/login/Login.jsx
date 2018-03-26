// @flow

import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { Redirect } from 'react-router-dom'

import GoogleLogin from 'react-google-login'

import { Col, Row, Alert } from 'reactstrap'

import { actionPicker } from 'state'
import { actions, authenticatedSelector, failedSelector } from 'state/login'

type Props = {
  authenticated: boolean,
  failed: boolean,
  login: string => undefined,
  loginFailure: _ => undefined,
}

// exported for testing
export class Login extends React.Component {
  static defaultProps: Props
  props: Props
  onSuccess: Function
  onFailure: Function

  constructor() {
    super()
    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)
  }

  redirectIfLoggedIn() {
    if (this.props.authenticated) {
      return <Redirect to="/" />
    }
  }

  errorMessage() {
    if (this.props.failed) {
      return <Alert color="danger">Could not log in</Alert>
    }
  }

  onSuccess(response: { accessToken: string }) {
    this.props.login(response.accessToken)
  }

  onFailure(_) {
    this.props.loginFailure()
  }

  render() {
    return (
      <Row>
        {this.redirectIfLoggedIn()}
        <Col xs="12">
          {this.errorMessage()}
          <div className="text-center">
            <GoogleLogin
              clientId="821590472100-8l14rsm3sof4so0p495tkaf6lgd5p47s.apps.googleusercontent.com"
              buttonText="Login with Google"
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
  login: _ => undefined,
  loginFailure: _ => undefined,
}

export default connect(
  (state, props) =>
    createStructuredSelector({
      authenticated: authenticatedSelector,
      failed: failedSelector,
    })(state),
  actionPicker(['login', 'loginFailure'])(actions)
)(Login)
