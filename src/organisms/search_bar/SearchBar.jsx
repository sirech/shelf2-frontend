// @flow

import React from 'react'
import { withRouter } from 'react-router-dom'

import { Form, Input } from 'reactstrap'

type Props = { history: Object }

class SearchBar extends React.Component {
  props: Props
  onChange: Function

  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    e.preventDefault()
    this.props.history.push(`/books/search/${e.target.value}`)
  }

  render() {
    return (
      <Form inline>
        <Input onChange={this.onChange} />
      </Form>
    )
  }
}

export default withRouter(SearchBar)
