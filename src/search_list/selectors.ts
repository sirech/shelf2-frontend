import * as R from 'ramda'
import { createSelector } from 'reselect'

import { searchSelector as baseSelector } from 'state/search'

const searchSelector = createSelector(
  [R.pipe(baseSelector, (state) => state.entities.books)],
  R.values
)

export default searchSelector
