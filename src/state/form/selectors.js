// @flow

import R from 'ramda'

import { namespace, bookModel } from './constants'

const formSelector = R.path([namespace])
export default formSelector

export const bookSelector = R.pipe(formSelector, R.path([bookModel]))
