import R from 'ramda'
import { createSelector } from 'reselect'

import { modalSelector as baseSelector } from '../../state/modal'
import { formSelector } from '../../state/form'

export const openedSelector = R.pipe(baseSelector, R.path(['opened']))

export const validSelector = createSelector(
  R.pipe(formSelector, R.path(['valid'])),
  R.pipe(formSelector, R.path(['validating'])),
  R.pipe(formSelector, R.path(['submitted'])),
  (valid, validating, submitted) => valid && !validating && !submitted
)
