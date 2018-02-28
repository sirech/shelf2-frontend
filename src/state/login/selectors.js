// @flow

import * as R from 'ramda'

import { namespace } from './constants'

const selector = R.path([namespace])

export const authenticatedSelector = R.pipe(selector, R.path(['authenticated']))

export const failedSelector = R.pipe(selector, R.path(['failed']))

export default selector
