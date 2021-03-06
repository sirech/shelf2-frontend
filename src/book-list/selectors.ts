import * as R from 'ramda'

import { createSelector } from 'reselect'
import { Book, Categories } from 'types'

import { booksSelector as baseSelector } from 'state/books'

const booksSelector = createSelector(
  R.pipe(baseSelector, (state) => state?.entities?.books, R.values),
  R.pipe(
    R.groupBy((elem: Book) => elem.category),
    R.toPairs,
    R.map(([category, books]: [category: string, books: Book[]]) => ({
      name: category as Categories,
      books: R.sort(
        R.comparator((a, b) => a.title < b.title),
        books
      ),
    }))
  )
)

export default booksSelector
