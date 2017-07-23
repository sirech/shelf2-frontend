// @flow

import R from 'ramda'

import { namespace } from './constants'

const yearsSelector = R.path([namespace])
export default yearsSelector
