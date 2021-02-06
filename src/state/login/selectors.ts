import { RootState } from 'state'
import * as R from 'ramda'

import { namespace } from './constants'

const selector = (state: RootState) => state[namespace]

export const authenticatedSelector = R.pipe(
  selector,
  (state) => state.authenticated
)
export const failedSelector = R.pipe(selector, (state) => state.failed)

export default selector
