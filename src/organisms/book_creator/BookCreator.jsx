import React from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import CreateButton from '../../molecules/create_button'
import BookForm from '../book_form'

class BookCreator extends React.Component {
  constructor () {
    super()

    this.state = {
      opened: false
    }

    this.toggle = this.toggle.bind(this)
    this.attachForm = this.attachForm.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  toggle () {
    this.setState({
      opened: !this.state.opened
    })
  }

  attachForm (node) {
    this._form = node
  }

  handleClick () {
    this._form.submit()
  }

  render () {
    return (
      <div>
        <CreateButton onClick={this.toggle} />
        <Modal isOpen={this.state.opened}>
          <ModalHeader toggle={this.toggle}>Add book</ModalHeader>
          <ModalBody>
            <BookForm attachForm={this.attachForm} />
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.handleClick}>Create</Button>
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default BookCreator
