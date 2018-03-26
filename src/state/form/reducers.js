// @flow

import { namespace, bookModel } from './constants'
import { combineForms } from 'react-redux-form'

import type { BookForm as Book } from 'types'

const initialBook: Book = {
  title: '',
  year: new Date().getFullYear(),
  description: '',
  stars: 1,
  category: 'software',
}

export default combineForms(
  {
    [bookModel]: initialBook,
  },
  namespace
)
