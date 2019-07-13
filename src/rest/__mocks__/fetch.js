// @flow

import { rest } from 'state/__fixtures__'

const fetch = (url: string, opts: Object = {}) => {
  return new Promise(resolve => {
    if (url.includes('/books/years')) {
      resolve({ data: rest.years })
    } else {
      resolve({ data: rest.books })
    }
  })
}

export default fetch
