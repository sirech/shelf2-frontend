// @flow

import * as R from 'ramda'

import { namespace } from './constants'

const searchSelector = R.path([namespace])
export default searchSelector
