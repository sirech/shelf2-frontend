// @flow

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import validator from 'validator'

import { Form, Control } from 'react-redux-form'
import { FormGroup, Label, Input as BaseInput, FormText } from 'reactstrap'
import R from 'ramda'

import { starsSelector } from './selectors'

import { modelName, actions } from '../../state/form'
import Stars from '../../molecules/stars'
import Input from '../../molecules/input'

import type { Categories, BookForm as BookFormType } from '../../types'
type Props = {
  stars?: number,
  changeStars: (number) => void,
  create: (BookFormType) => void,
  attachForm?: (HTMLButtonElement) => void
}

class BookForm extends React.Component {
  static defaultProps: Props
  props: Props

  handleSubmit: Function

  constructor () {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static categories (): Array<Categories> {
    return ['sociology', 'software', 'econ', 'history', 'other']
  }

  handleSubmit (book) {
    this.props.create(book)
  }

  render () {
    const { stars, changeStars, attachForm } = this.props

    return (
      <Form model={modelName()} onSubmit={this.handleSubmit} getRef={attachForm}>
        <Input
          name='title'
          type='text'
          placeholder='Catch-22'
          validators={{
            length: val => validator.isLength(val, { min: 5, max: 200 })
          }}
          messages={{
            length: 'Title must be between 5 and 200 characters'
          }}
        />

        <Input
          name='year'
          type='number'
          validators={{
            value: val => val > 2000 && val < 2100
          }}
          messages={{
            value: 'It should be between 2000 and 2100'
          }}
        />

        <FormGroup>
          <Label for='description'>Description</Label>
          <Control model='.description' type='textarea' name='description' id='description' placeholder="That's some catch, that Catch-22" rows='3' component={BaseInput} />
          <FormText className='text-muted'>Optional</FormText>
        </FormGroup>

        <FormGroup>
          <Label for='stars'>Stars</Label>
          <div>
            <Stars count={stars} handleClick={changeStars} />
          </div>
        </FormGroup>

        <FormGroup>
          <Label for='category'>Category</Label>
          <Control model='.category' type='select' name='category' id='category' component={BaseInput}>
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
  changeStars: (_) => undefined,
  create: (_) => undefined
}

export default connect(
  (state, props) =>
    createStructuredSelector({
      stars: starsSelector
    })(state),
  R.pick(['changeStars', 'create'])(actions)
)(BookForm)
