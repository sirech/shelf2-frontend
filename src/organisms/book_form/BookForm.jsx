// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Form, Control } from 'react-redux-form'
import { FormGroup, Label, Input, FormText } from 'reactstrap'
import R from 'ramda'

import { modelName, actions } from '../../state/form'
import Stars from '../../molecules/stars'

type Props = {
  changeStars: (number) => void
}

class BookForm extends React.Component {
  static defaultProps: Props
  props: Props

  handleSubmit: Function

  constructor () {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static categories () {
    return ['sociology', 'software', 'econ', 'history', 'other']
  }

  handleSubmit () {
    console.log("Form submitted: ")
  }

  render () {
    return (
      <Form model={modelName()} onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for='title'>Title</Label>
          <Control model='.title' type='text' name='title' id='title' placeholder='Catch-22' component={Input} />
        </FormGroup>

        <FormGroup>
          <Label for='year'>Year</Label>
          <Control model='.year' type='number' name='year' id='year' component={Input} />
        </FormGroup>

        <FormGroup>
          <Label for='description'>Description</Label>
          <Control model='.description' type='textarea' name='description' id='description' placeholder="That's some catch, that Catch-22" rows='3' component={Input} />
          <FormText className='text-muted'>Optional</FormText>
        </FormGroup>

        <FormGroup>
          <Label for='stars'>Stars</Label>
          <div>
            <Stars count={1} handleClick={this.props.changeStars} />
          </div>
        </FormGroup>

        <FormGroup>
          <Label for='category'>Category</Label>
          <Control model='.category' type='select' name='category' id='category' component={Input}>
            {BookForm.categories().map(category =>
              <option key={category}>{category}</option>
            )}
          </Control>
        </FormGroup>
      </Form>
    )
  }
}

BookForm.defaultProps = {
  changeStars: (_) => undefined
}

export default connect(
  null,
  R.pick(['changeStars'])(actions)
)(BookForm)
