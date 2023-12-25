import * as R from 'ramda'

import { createSelector } from '@reduxjs/toolkit'
import { Book, Categories } from 'types'

import { booksSelector as baseSelector } from 'state/books'

const booksSelector = createSelector(
  [R.pipe(baseSelector, (state) => state.entities.books)],
  (dict) => {
    const books = R.values(dict)
    const categories = R.groupBy((elem: Book) => elem.category)(
      books
    ) as unknown as Required<Record<Categories, Book[]>>
    const pairs = R.toPairs(categories)

    const ordered = R.map(
      ([category, books]: [category: string, books: Book[]]) => ({
        name: category as Categories,
        books: R.sort(
          R.comparator((a, b) => a.title < b.title),
          books
        ),
      })
    )(pairs)

    return ordered
  }
)

export default booksSelector
