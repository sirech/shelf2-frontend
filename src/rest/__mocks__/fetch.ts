import { rest } from 'state/__fixtures__'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetch = (url: string, opts: Record<string, unknown> = {}) => {
  return new Promise((resolve) => {
    if (url.includes('/books/years')) {
      resolve({ data: rest.years })
    } else {
      resolve({ data: rest.books })
    }
  })
}

export default fetch
