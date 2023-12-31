import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { Form, Input } from 'reactstrap'

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  navigate: NavigateFunction
) => {
  e.preventDefault()
  navigate(`/books/search/${e.target.value}`)
}

const SearchBar = () => {
  const navigate = useNavigate()

  return (
    <Form inline>
      <Input onChange={(e) => handleChange(e, navigate)} />
    </Form>
  )
}

export default SearchBar
