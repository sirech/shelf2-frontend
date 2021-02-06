import React from 'react'
import { useHistory } from 'react-router-dom'
import { History } from 'history'

import { Form, Input } from 'reactstrap'

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  history: History
) => {
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
