import * as R from 'ramda'
import { createSelector } from '@reduxjs/toolkit'

import { yearsSelector as baseSelector } from 'state/years'

const yearsSelector = createSelector(
  [R.pipe(baseSelector, (state) => state?.entities?.years, R.values)],
  (years) => R.reverse(years)
)
export default yearsSelector
