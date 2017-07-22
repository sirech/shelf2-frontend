import R from 'ramda'

import { factories } from '../../test'

const state = () => {
  const bookList = factories.book.buildList(3)

  const books = {
    entities: {
      books: R.pipe(R.map(b => [b.id, b]), R.fromPairs)(bookList)
    },
    result: R.map(R.path(['id']), bookList)
  }

  return {
    books
  }
}

export default state
