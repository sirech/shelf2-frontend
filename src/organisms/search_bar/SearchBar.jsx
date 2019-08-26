// @flow

import React from 'react'
import { withRouter } from 'react-router-dom'

import { Form, Input } from 'reactstrap'

type Props = { history: Object }

class SearchBar extends React.Component {
  props: Props

  handleChange: Function

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.props.history.push(`/books/search/${e.target.value}`)
  }

  render() {
    return (
      <Form inline>
        <Input onChange={this.handleChange} />
      </Form>
    )
  }
}

export default withRouter(SearchBar)
