// @flow

import type { BookForm as Book } from 'types'

const initialBook: Book = {
  title: '',
  year: new Date().getFullYear(),
  description: '',
  stars: 1,
  category: 'software',
}

export default initialBook
