import { RootState } from './../state/index'
import * as R from 'ramda'

import { searchSelector as baseSelector } from 'state/search'

const searchSelector = R.pipe(
  baseSelector,
  (state) => state.entities.books,
  R.values
)

export default searchSelector
