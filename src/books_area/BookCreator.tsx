import React from 'react'
import { useNavigate } from 'react-router-dom'

import CreateButton from 'components/create_button'

const BookCreator = () => {
  const navigate = useNavigate()
  return <CreateButton onClick={() => navigate('/books/new')} />
}

export default BookCreator
