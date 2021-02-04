// @flow

import React from 'react'
import { useHistory } from 'react-router-dom'

import { Form, Input } from 'reactstrap'

const handleChange = (e, history) => {
  e.preventDefault()
  history.push(`/books/search/${e.target.value}`)
}

const SearchBar = () => {
  const history = useHistory()

  return (
    <Form inline>
      <Input onChange={(e) => handleChange(e, history)} />
    </Form>
  )
}

export default SearchBar
