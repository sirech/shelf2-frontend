// @flow

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Helmet } from 'react-helmet'

import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import { openedSelector, validSelector, errorSelector } from './selectors'

import { actionPicker } from 'state'
import { actions } from 'state/modal'

import CreateButton from 'molecules/create_button'
import BookForm from 'organisms/book_form'

type Props = {
  opened: boolean,
  error: boolean,
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

  showError () {
    if (this.props.error) {
      return (
        <Alert color='danger'>
          Error creating a book
        </Alert>
      )
    }
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
            {this.showError()}
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
      error: errorSelector,
      valid: validSelector
    })(state),
  actionPicker(['modalToggled'])(actions)
)(BookCreator)
