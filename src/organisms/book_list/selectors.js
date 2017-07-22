import R from 'ramda'

import { createSelector } from 'reselect'
import { booksSelector as baseSelector } from '../../state/books'

const booksSelector = createSelector(
  R.pipe(baseSelector, R.path(['entities', 'books']), R.values),
  R.pipe(R.groupBy(R.path(['category'])),
         R.toPairs,
         R.map(([category, books]) => ({ name: category, books: books })))
)

export default booksSelector
