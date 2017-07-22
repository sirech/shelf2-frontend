import R from 'ramda'

import { createSelector } from 'reselect'
import { booksSelector as baseSelector } from '../../state/books'

const booksSelector = createSelector(
  baseSelector,
  R.pipe(R.path(['entities', 'books']), R.values, R.groupBy(R.path(['category'])))
)

export default booksSelector
