// @flow

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Helmet } from 'react-helmet'

import R from 'ramda'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import { openedSelector, validSelector } from './selectors'
import { actions } from '../../state/modal'

import CreateButton from '../../molecules/create_button'
import BookForm from '../book_form'

type Props = {
  opened: boolean,
  valid: boolean,
  modalToggled: () => void
}

// exported for testing
export class BookCreator extends React.Component {
  props: Props
  _form: HTMLFormElement
  toggle: Function
  attachForm: Function
  handleClick: Function

  constructor () {
    super()

    this.toggle = this.toggle.bind(this)
    this.attachForm = this.attachForm.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  toggle () {
    this.props.modalToggled()
  }

  attachForm (node: HTMLFormElement) {
    this._form = node
  }

  handleClick () {
    this._form.submit()
  }

  render () {
    const { opened, valid } = this.props

    return (
      <div>
        {opened &&
          <Helmet>
            <title>Add book</title>
          </Helmet>
        }
        <CreateButton onClick={this.toggle} />
        <Modal isOpen={opened}>
          <ModalHeader toggle={this.toggle}>Add book</ModalHeader>
          <ModalBody>
            <BookForm attachForm={this.attachForm} />
          </ModalBody>
          <ModalFooter>
            <Button color='primary' disabled={!valid} onClick={this.handleClick}>Create</Button>
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default connect(
  (state, props) =>
    createStructuredSelector({
      opened: openedSelector,
      valid: validSelector
    })(state),
  R.pick(['modalToggled'])(actions)
)(BookCreator)
