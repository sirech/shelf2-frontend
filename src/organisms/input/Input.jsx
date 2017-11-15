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

// exported for testing
export class Input extends React.Component {
  props: Props

  isValid () {
    const { valid, touched } = this.props

    if (!touched) {
      return undefined
    }

    return valid
  }

  render () {
    const { name, type, messages } = this.props
    const model = `.${name}`

    return (
      <FormGroup>
        <Label for={name}>{name}</Label>
        <Control
          model={model}
          type={type}
          name={name}
          id={name}
          valid={this.isValid()}
          component={BaseInput}
          {...R.omit(['name', 'type', 'messages', 'valid', 'touched'])(this.props)}
        />
        <Errors
          model={model}
          wrapper={(props) => props.children}
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
