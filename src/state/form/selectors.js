// @flow

import * as R from 'ramda'

import { namespace, bookModel } from './constants'

const baseSelector = R.path([namespace])

export const fieldSelectorBuilder = (field: string) =>
  R.pipe(baseSelector, R.path(['forms', bookModel, field]))
export const formSelector = fieldSelectorBuilder('$form')

export const bookSelector = R.pipe(baseSelector, R.path([bookModel]))
