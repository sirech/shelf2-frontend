// @flow

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import R from 'ramda'

import { validSelector, touchedSelector } from './selectors'

import './styles.css'

import { Control, Errors } from 'react-redux-form'
import { FormGroup, Label, Input as BaseInput, FormFeedback } from 'reactstrap'

type Props = {
  name: string,
  type: string,
  valid: boolean,
  touched: boolean,
  messages: Object
}

class Input extends React.Component {
  props: Props

  formState () {
    const { valid, touched } = this.props

    if (!touched) {
      return ''
    }

    if (valid) {
      return 'success'
    } else {
      return 'danger'
    }
  }

  render () {
    const { name, type, messages } = this.props
    const model = `.${name}`

    return (
      <FormGroup color={this.formState()}>
        <Label for={name}>{name}</Label>
        <Control
          model={model}
          type={type}
          name={name}
          id={name}
          state={this.formState()}
          component={BaseInput}
          {...R.omit(['name', 'type', 'messages', 'valid', 'touched'])(this.props)}
        />
        <Errors
          model={model}
          component={props => <FormFeedback>{props.children}</FormFeedback>}
          messages={messages}
          show={{touched: true, valid: false}}
        />
      </FormGroup>
    )
  }
}

export default connect(
  (state, props) =>
    createStructuredSelector({
      valid: validSelector,
      touched: touchedSelector
    })(state, props)
)(Input)
