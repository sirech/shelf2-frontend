import * as R from 'ramda'

import { createSelector } from 'reselect'
import { booksSelector as baseSelector } from 'state/books'

const booksSelector = createSelector(
  R.pipe(baseSelector, R.path(['entities', 'books']), R.values),
  R.pipe(
    R.groupBy(R.path(['category'])),
    R.toPairs,
    R.map(([category, books]) => ({
      name: category,
      books: R.sort(
        R.comparator((a, b) => a.title < b.title),
        books
      ),
    }))
  )
)

export default booksSelector
