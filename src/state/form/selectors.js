// @flow

import R from 'ramda'

import { namespace } from './constants'

const formSelector = R.path([namespace])
export default formSelector
