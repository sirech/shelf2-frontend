// @flow

import R from 'ramda'

import { namespace, status } from './constants'

const selector = R.path([namespace, status])

export const authenticatedSelector = R.pipe(selector, R.path(['authenticated']))

export default selector
