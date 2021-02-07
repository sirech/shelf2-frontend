import React from 'react'
import { useHistory } from 'react-router-dom'

import CreateButton from 'components/create_button'

const BookCreator = () => {
  const history = useHistory()
  return <CreateButton onClick={() => history.push('/books/new')} />
}

export default BookCreator
