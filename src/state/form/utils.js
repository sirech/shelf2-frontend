// @flow

import { namespace, bookModel } from './constants'

export const modelName = (field?: string) => {
  const model = `${namespace}.${bookModel}`
  return field ? `${model}.${field}` : model
}
