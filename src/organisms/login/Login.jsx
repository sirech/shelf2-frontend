// @flow

import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { Redirect } from 'react-router-dom'
import R from 'ramda'

import { Form } from 'react-redux-form'
import { Col, Row, Button, Alert } from 'reactstrap'
import Input from '../input'

import { constants, actions, authenticatedSelector, failedSelector } from '../../state/login'

import type { Login as LoginType } from '../../types'

type Props = {
  authenticated: boolean,
  failed: boolean,
  tryLogin: (LoginType) => void
}

class Login extends React.Component {
  static defaultProps: Props
  props: Props
  onSubmit: Function

  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (login: LoginType) {
    this.props.tryLogin(login)
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

  render () {
    return (
      <Row>
        {this.redirectIfLoggedIn()}
        <Col xs='12'>
          {this.errorMessage()}
          <Form model={constants.modelName} onSubmit={this.onSubmit}>

            <Input
              name='user'
              type='text'
            />

            <Input
              name='password'
              type='password'
            />

            <Button type='submit'>Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

Login.defaultProps = {
  authenticated: false,
  failed: false,
  tryLogin: (_) => undefined
}

export default connect(
  (state, props) => createStructuredSelector({
    authenticated: authenticatedSelector,
    failed: failedSelector
  })(state),
  R.pick(['tryLogin'])(actions)
)(Login)
