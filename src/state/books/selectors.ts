// @flow

import * as R from 'ramda'

import { namespace } from './constants'

const booksSelector = R.path([namespace])
export default booksSelector
