// @flow

import { normalize, schema } from 'normalizr'
import type { Book, NormalizedBooks, Year, NormalizedYears } from 'types'

const book = new schema.Entity('books', {}, { idAttribute: 'id' })
const year = new schema.Entity('years', {}, { idAttribute: 'year' })

export function normalizeBooks(data: Array<Book>): NormalizedBooks {
  return normalize(data, [book])
}

export function normalizeYears(data: Array<Year>): NormalizedYears {
  return normalize(data, [year])
}
