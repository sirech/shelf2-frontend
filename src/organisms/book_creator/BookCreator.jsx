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
  }

  toggle () {
    this.setState({
      opened: !this.state.opened
    })
  }

  render () {
    return (
      <div>
        <CreateButton onClick={this.toggle} />
        <Modal isOpen={this.state.opened}>
          <ModalHeader toggle={this.toggle}>Add book</ModalHeader>
          <ModalBody>
            <BookForm />
          </ModalBody>
          <ModalFooter>
            <Button color='primary'>Create</Button>
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default BookCreator
