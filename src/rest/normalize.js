// @flow

import { normalize, schema } from 'normalizr'
import type { Book } from '../types'

const book = new schema.Entity('books', {}, { idAttribute: 'id' })

export function normalizeBooks (data: Array<Book>) {
  return normalize(data, [ book ])
}
