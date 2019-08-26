// @flow

import React from 'react'
import { withRouter } from 'react-router-dom'

import CreateButton from 'molecules/create_button'

type Props = {
  history: object,
}

// exported for testing
export class BookCreator extends React.Component<Props> {
  handleClick: Function

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.history.push('/books/new')
  }

  render() {
    return <CreateButton onClick={this.handleClick} />
  }
}

export default withRouter(BookCreator)
