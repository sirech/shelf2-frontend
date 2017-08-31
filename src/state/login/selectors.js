// @flow

import R from 'ramda'

import { namespace } from './constants'

const selector = R.path([namespace])
export default selector
