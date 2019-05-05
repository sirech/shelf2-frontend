// @flow

import React from 'react'
import { withRouter } from 'react-router-dom'

import CreateButton from 'molecules/create_button'

type Props = {
  history: object,
}

// exported for testing
export class BookCreator extends React.Component<Props> {
  goToNewBook: Function

  constructor() {
    super()

    this.goToNewBook = this.goToNewBook.bind(this)
  }

  goToNewBook() {
    this.props.history.push('/books/new')
  }

  render() {
    return <CreateButton onClick={this.goToNewBook} />
  }
}

export default withRouter(BookCreator)
